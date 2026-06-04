<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Metodo no permitido']);
    exit;
}

$payload = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'JSON invalido']);
    exit;
}

$to = trim((string) ($payload['to'] ?? ''));
$subject = trim((string) ($payload['subject'] ?? ''));
$body = trim((string) ($payload['body'] ?? ''));

if (!filter_var($to, FILTER_VALIDATE_EMAIL) || $subject === '' || $body === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Faltan destinatario, asunto o cuerpo']);
    exit;
}

try {
    $env = loadEnvValues([
        '/Users/mariapilar.alzuet/Sites/capataz/apps/api/.env',
        '/Users/mariapilar.alzuet/Sites/capataz/apps/api/.env.local',
    ]);
    $dsn = $env['MAILER_DSN'] ?? '';
    $fromRaw = $env['CAPATAZ_EMAIL_FROM'] ?? 'Vitae Demo <no-reply@theetailers.com>';
    if ($dsn === '') {
        throw new RuntimeException('MAILER_DSN no configurado');
    }

    [$fromEmail, $fromName] = parseAddress($fromRaw);
    sendSmtp($dsn, $fromEmail, $fromName, $to, $subject, $body);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}

function loadEnvValues(array $files): array
{
    $values = [];
    foreach ($files as $file) {
        if (!is_readable($file)) {
            continue;
        }
        foreach (file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
                continue;
            }
            [$key, $value] = explode('=', $line, 2);
            $values[trim($key)] = trim(trim($value), "\"'");
        }
    }
    return $values;
}

function parseAddress(string $raw): array
{
    if (preg_match('/^(.*)<([^>]+)>$/', $raw, $matches)) {
        return [trim($matches[2]), trim($matches[1]) ?: 'Vitae'];
    }
    return [trim($raw), 'Vitae'];
}

function sendSmtp(string $dsn, string $fromEmail, string $fromName, string $to, string $subject, string $body): void
{
    $parts = parse_url($dsn);
    if (!is_array($parts) || empty($parts['host'])) {
        throw new RuntimeException('MAILER_DSN SMTP invalido');
    }

    $host = $parts['host'];
    $port = (int) ($parts['port'] ?? 587);
    $user = isset($parts['user']) ? rawurldecode($parts['user']) : '';
    $pass = isset($parts['pass']) ? rawurldecode($parts['pass']) : '';
    $scheme = $parts['scheme'] ?? 'smtp';
    $target = ($scheme === 'smtps' || $port === 465 ? 'ssl://' : '') . $host . ':' . $port;

    $socket = stream_socket_client($target, $errno, $errstr, 20, STREAM_CLIENT_CONNECT);
    if (!$socket) {
        throw new RuntimeException("No se pudo conectar con SMTP: $errstr");
    }
    stream_set_timeout($socket, 20);

    smtpExpect($socket, 220);
    smtpCommand($socket, 'EHLO vitae-demo.local', 250);
    if ($scheme !== 'smtps' && $port !== 465) {
        smtpCommand($socket, 'STARTTLS', 220);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('No se pudo activar TLS');
        }
        smtpCommand($socket, 'EHLO vitae-demo.local', 250);
    }
    if ($user !== '' || $pass !== '') {
        smtpCommand($socket, 'AUTH LOGIN', 334);
        smtpCommand($socket, base64_encode($user), 334);
        smtpCommand($socket, base64_encode($pass), 235);
    }

    smtpCommand($socket, 'MAIL FROM:<' . $fromEmail . '>', 250);
    smtpCommand($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
    smtpCommand($socket, 'DATA', 354);

    $headers = [
        'From: ' . sprintf('"%s" <%s>', addcslashes($fromName, '"'), $fromEmail),
        'To: <' . $to . '>',
        'Subject: ' . mb_encode_mimeheader($subject, 'UTF-8'),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
    ];
    fwrite($socket, implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $body) . "\r\n.\r\n");
    smtpExpect($socket, 250);
    smtpCommand($socket, 'QUIT', 221);
    fclose($socket);
}

function smtpCommand($socket, string $command, int|array $expected): string
{
    fwrite($socket, $command . "\r\n");
    return smtpExpect($socket, $expected);
}

function smtpExpect($socket, int|array $expected): string
{
    $expected = (array) $expected;
    $response = '';
    do {
        $line = fgets($socket);
        if ($line === false) {
            throw new RuntimeException('Respuesta SMTP vacia');
        }
        $response .= $line;
    } while (isset($line[3]) && $line[3] === '-');

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expected, true)) {
        throw new RuntimeException('SMTP error ' . $code);
    }
    return $response;
}
