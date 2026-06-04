const roles = {
  admin: { label: "Administrador Vitae", sections: "all" },
  marketing: { label: "Marketing", sections: ["dashboard", "knowledge", "marketing", "retos", "admin"] },
  titular: { label: "Titular de farmacia", sections: "all" },
  auxiliar: { label: "Auxiliar", sections: ["dashboard", "pedidos", "albaranes", "casos", "formacion", "knowledge", "marketing", "retos", "wishlist", "compras", "compra-rapida", "productos-comprados"] },
  distribuidor: { label: "Distribuidor", sections: ["dashboard", "mi-cuenta", "pedidos", "albaranes", "facturas", "casos", "formacion", "knowledge", "marketing", "retos", "fidelizacion", "wishlist"] }
};

const nav = [
  ["dashboard", "⌂", "Dashboard"],
  ["mi-cuenta", "◎", "Mi cuenta"],
  {
    key: "operativa",
    label: "Operativa",
    icon: "▦",
    children: [
      ["pedidos", "▣", "Pedidos"],
      ["albaranes", "◇", "Albaranes"],
      ["facturas", "□", "Facturas"],
      ["casos", "!", "Casos e incidencias"]
    ]
  },
  ["formacion", "◫", "Formación"],
  ["knowledge", "◧", "Knowledge"],
  ["marketing", "◩", "Marketing"],
  ["retos", "☆", "Retos"],
  ["fidelizacion", "◈", "Fidelización"],
  {
    key: "compras",
    label: "Tienda online",
    icon: "◉",
    children: [
      ["compras", "◉", "Catálogo"],
      ["compra-rapida", "⇪", "Compra rápida"],
      ["productos-comprados", "✓", "Mis productos comprados"],
      ["wishlist", "♡", "Wishlist"]
    ]
  },
  ["admin", "⚙", "Backoffice"]
];

const data = {
  pharmacy: {
    name: "Farmacia Alameda",
    cif: "B-72918463",
    owner: "María Alameda",
    address: "Av. de la Ciencia 18, 46022 Valencia",
    billing: "Domiciliación bancaria · ES82 **** 6128",
    shipping: ["Av. de la Ciencia 18, Valencia", "Centro logístico Norte, Paterna"],
    contacts: ["María Alameda · Titular", "Clara Vives · Compras", "Pablo Mira · Formación"],
    email: "mariapilar.alzuet@theetailers.com"
  },
  orders: [
    { id: "PV-2026-1482", date: "02/06/2026", status: "En preparación", total: 1268.4, lines: [["ImmunoVita®", 24, 418.8], ["IntestVita® Enzymes", 18, 299.7], ["Equazen® Omega 3 y 6", 30, 549.9]] },
    { id: "PV-2026-1397", date: "24/05/2026", status: "Entregado", total: 842.6, lines: [["RelifVita®", 20, 312], ["Magnesium6® seis sales de Magnesio", 32, 530.6]] },
    { id: "PV-2026-1320", date: "12/05/2026", status: "Facturado", total: 1534.9, lines: [["FlexiVita® Pro", 36, 734.4], ["CalmTu® Night Retard", 24, 384], ["OlioVita® Protect, protector solar oral", 18, 416.5]] }
  ],
  invoices: [
    { id: "FV-2026-0912", date: "31/05/2026", status: "Pendiente", total: 1534.9 },
    { id: "FV-2026-0844", date: "15/05/2026", status: "Pagada", total: 842.6 },
    { id: "FV-2026-0798", date: "30/04/2026", status: "Pagada", total: 1106.2 }
  ],
  deliveries: [
    { id: "ALB-2026-2234", date: "03/06/2026", order: "PV-2026-1482", status: "En tránsito" },
    { id: "ALB-2026-2191", date: "25/05/2026", order: "PV-2026-1397", status: "Entregado" },
    { id: "ALB-2026-2110", date: "13/05/2026", order: "PV-2026-1320", status: "Entregado" }
  ],
  cases: [
    { id: "CAS-1048", category: "Logística", product: "Omega Pro", status: "En proceso", date: "03/06/2026" },
    { id: "CAS-1039", category: "Producto", product: "Probiovance", status: "Abierto", date: "28/05/2026" },
    { id: "CAS-1017", category: "Facturación", product: "Factura FV-2026-0798", status: "Resuelto", date: "03/05/2026" }
  ],
  products: [
    { id: 1, name: "ImmunoVita®", cat: "Defensas", price: 17.45, stock: "Disponible", discount: "12%", image: "https://www.vitae.es/wp-content/uploads/2024/08/ImmunoVita-300x300.jpg", tagline: "Apoyo diario para campañas de defensas." },
    { id: 2, name: "ImmunoVita® Kids", cat: "Infantil", price: 16.9, stock: "Disponible", discount: "10%", image: "https://www.vitae.es/wp-content/uploads/2024/09/ImmunoVita-Kids-300x300.jpg", tagline: "Formato infantil para recomendación familiar." },
    { id: 3, name: "IntestVita® Enzymes", cat: "Buenas digestiones", price: 19.75, stock: "48 h", discount: "9%", image: "https://www.vitae.es/wp-content/uploads/2024/09/IntestVita-Enzymes-2-300x300.jpg", tagline: "Soporte digestivo para comidas pesadas." },
    { id: 4, name: "RelifVita®", cat: "Buenas digestiones", price: 18.6, stock: "Disponible", discount: "11%", image: "https://www.vitae.es/wp-content/uploads/2025/02/Relif-300x300.jpg", tagline: "Solución de mostrador para digestiones sensibles." },
    { id: 5, name: "IntestVita® Transit", cat: "Buenas digestiones", price: 17.95, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/08/IntestVita-Transit-300x300.jpg", tagline: "Rutina digestiva para tránsito intestinal." },
    { id: 6, name: "IntestVita® Kids", cat: "Infantil", price: 16.3, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/09/IntestVita-kids-300x300.jpg", tagline: "Cuidado digestivo para niños." },
    { id: 7, name: "Reconnect®", cat: "Energía", price: 21.4, stock: "Disponible", discount: "13%", image: "https://www.vitae.es/wp-content/uploads/2024/07/Reconnect-1-300x300.jpg", tagline: "Energía y foco para picos de demanda." },
    { id: 8, name: "OlioVita® Protect, protector solar oral", cat: "Piel y mucosas", price: 22.8, stock: "Disponible", discount: "15%", image: "https://www.vitae.es/wp-content/uploads/2024/09/OlioVita-Protect-5-300x300.jpg", tagline: "Campaña solar con protección desde dentro." },
    { id: 9, name: "UrinVita®", cat: "Sistema urinario", price: 18.25, stock: "48 h", discount: "7%", image: "https://www.vitae.es/wp-content/uploads/2024/08/UrinVita-300x300.jpg", tagline: "Reposición rápida para bienestar urinario." },
    { id: 10, name: "Vitalivio®", cat: "Contracturas y salud articular", price: 20.5, stock: "Disponible", discount: "12%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Vitalivio-3-300x300.jpg", tagline: "Referencia para molestias y movilidad." },
    { id: 11, name: "Vitatuss®", cat: "Defensas", price: 14.7, stock: "Disponible", discount: "6%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Vitatuss_jarabe-300x300.jpg", tagline: "Apoyo estacional para el lineal de invierno." },
    { id: 12, name: "Equazen® Omega 3 y 6", cat: "Corazón", price: 18.33, stock: "Disponible", discount: "15%", image: "https://www.vitae.es/wp-content/uploads/2024/09/equazen-1-300x300.jpg", tagline: "Omega 3 y 6 para recomendación familiar." },
    { id: 13, name: "Vibracell®", cat: "Energía", price: 19.9, stock: "Disponible", discount: "9%", image: "https://www.vitae.es/wp-content/uploads/2024/08/Vibracell-300x300.jpg", tagline: "Formato líquido para energía diaria." },
    { id: 14, name: "BucoVitae® alivio aftas bucales", cat: "Piel y mucosas", price: 13.95, stock: "Disponible", discount: "5%", image: "https://www.vitae.es/wp-content/uploads/2024/08/BucoVitae-300x300.webp", tagline: "Solución oral de alta rotación." },
    { id: 15, name: "EnergyVita® Multivitamínico Concentrado", cat: "Energía", price: 20.9, stock: "Disponible", discount: "12%", image: "https://www.vitae.es/wp-content/uploads/2025/02/energyvita-300x300.jpg", tagline: "Multivitamínico para campañas de vitalidad." },
    { id: 16, name: "Nubiocell®", cat: "Energía", price: 23.2, stock: "48 h", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/09/nubiocell-300x300.jpg", tagline: "Fórmula premium para recomendación avanzada." },
    { id: 17, name: "Sikapur® med Herpes Labial", cat: "Piel y mucosas", price: 12.6, stock: "Disponible", discount: "5%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Sikapur-m-300x300.jpg", tagline: "Producto específico para el mostrador." },
    { id: 18, name: "Bi·Bran® suplemento inmunomodulador", cat: "Defensas", price: 25.8, stock: "Disponible", discount: "10%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Bibran-300x300.jpg", tagline: "Defensas con posicionamiento especialista." },
    { id: 19, name: "Magnesium6® seis sales de Magnesio", cat: "Contracturas y salud articular", price: 16.58, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Magnesium6-300x300.jpg", tagline: "Magnesio para recomendación transversal." },
    { id: 20, name: "MagVita® Q10", cat: "Energía", price: 21.75, stock: "Disponible", discount: "10%", image: "https://www.vitae.es/wp-content/uploads/2025/01/magvita-300x300.jpg", tagline: "Energía y coenzima Q10 en reposición." },
    { id: 21, name: "FlexiVita® Pro", cat: "Contracturas y salud articular", price: 20.4, stock: "Disponible", discount: "10%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Flexivita-pro-300x300.jpg", tagline: "Cuidado articular para clientes activos." },
    { id: 22, name: "CalmTu®", cat: "Estrés y ansiedad", price: 16.2, stock: "Disponible", discount: "7%", image: "https://www.vitae.es/wp-content/uploads/2024/08/CalmTu-300x300.webp", tagline: "Apoyo en rutinas de calma diaria." },
    { id: 23, name: "Vitalivio® Cream crema antiinflamatoria", cat: "Contracturas y salud articular", price: 15.95, stock: "Disponible", discount: "6%", image: "https://www.vitae.es/wp-content/uploads/2024/09/VitalivioCream-300x300.jpg", tagline: "Formato tópico para completar recomendación." },
    { id: 24, name: "CalmTu® Night Retard", cat: "Insomnio", price: 17.4, stock: "Últimas unidades", discount: "6%", image: "https://www.vitae.es/wp-content/uploads/2024/09/CalmTuNight-Retard-300x300.jpg", tagline: "Descanso nocturno con reposición sencilla." },
    { id: 25, name: "Chlorella®", cat: "Detox", price: 18.7, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Chlorella-300x300.jpg", tagline: "Alga verde para campañas detox." },
    { id: 26, name: "Chlorella® Plus", cat: "Detox", price: 20.1, stock: "Disponible", discount: "9%", image: "https://www.vitae.es/wp-content/uploads/2024/08/Chlorella-plus-300x300.jpg", tagline: "Formato plus para recomendación avanzada." },
    { id: 27, name: "FlexiVita® Cream", cat: "Contracturas y salud articular", price: 15.8, stock: "Disponible", discount: "6%", image: "https://www.vitae.es/wp-content/uploads/2024/09/FlexiVita-Cream-300x300.jpg", tagline: "Complemento tópico para movilidad." },
    { id: 28, name: "Calcium6®", cat: "Contracturas y salud articular", price: 17.2, stock: "48 h", discount: "7%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Calcium6-300x300.jpg", tagline: "Minerales para salud ósea y muscular." },
    { id: 29, name: "Ferrum6", cat: "Energía", price: 16.85, stock: "Disponible", discount: "7%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Ferrum6-300x300.jpg", tagline: "Hierro para rutinas de energía." },
    { id: 30, name: "IntestVita® one per day", cat: "Buenas digestiones", price: 19.2, stock: "Disponible", discount: "9%", image: "https://www.vitae.es/wp-content/uploads/2024/09/IntestVita-one-per-day-2-300x300.webp", tagline: "Digestivo diario en formato simple." },
    { id: 31, name: "OlioVita® aceite de espino amarillo", cat: "Antioxidantes", price: 21.6, stock: "Disponible", discount: "12%", image: "https://www.vitae.es/wp-content/uploads/2024/08/OlioVita-01-300x300.webp", tagline: "Espino amarillo para cuidado integral." },
    { id: 32, name: "OlioVita® Radiance", cat: "Piel y mucosas", price: 22.1, stock: "Disponible", discount: "12%", image: "https://www.vitae.es/wp-content/uploads/2025/08/radiance-300x300.jpg", tagline: "Cuidado luminoso para campañas de piel." },
    { id: 33, name: "OlioVita® Vision", cat: "Antioxidantes", price: 23.6, stock: "48 h", discount: "10%", image: "https://www.vitae.es/wp-content/uploads/2026/02/Oliovita-Vision-Render-300x300.jpg", tagline: "Nueva referencia visual para salud ocular." },
    { id: 34, name: "PowerVita®", cat: "Energía", price: 21.2, stock: "Disponible", discount: "9%", image: "https://www.vitae.es/wp-content/uploads/2026/03/powerVita-300x300.jpg", tagline: "Impulso diario para clientes activos." },
    { id: 35, name: "OlioVita® Repair", cat: "Piel y mucosas", price: 20.7, stock: "Disponible", discount: "10%", image: "https://www.vitae.es/wp-content/uploads/2024/09/OlioVita-Repair-300x300.jpg", tagline: "Piel y mucosas en recomendación continuada." },
    { id: 36, name: "OlioVita® Íntima", cat: "Piel y mucosas", price: 19.85, stock: "Disponible", discount: "9%", image: "https://www.vitae.es/wp-content/uploads/2024/08/Oliovita-intima-300x300.webp", tagline: "Cuidado íntimo dentro de la familia OlioVita." },
    { id: 37, name: "OlioVita® Balm", cat: "Piel y mucosas", price: 11.9, stock: "Disponible", discount: "5%", image: "https://www.vitae.es/wp-content/uploads/2024/09/OlioVita-balm-300x300.jpg", tagline: "Formato balm para venta cruzada." },
    { id: 38, name: "OlioVita® Balm Protect", cat: "Piel y mucosas", price: 12.4, stock: "Disponible", discount: "5%", image: "https://www.vitae.es/wp-content/uploads/2024/09/OlioVita-Balm-protect-300x300.jpg", tagline: "Protección diaria para labios y piel." },
    { id: 39, name: "OlioVita® Gastro", cat: "Buenas digestiones", price: 20.3, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/09/OlioVitaGastro-2-300x300.webp", tagline: "OlioVita orientado a bienestar digestivo." },
    { id: 40, name: "Sikapur® med Gastro", cat: "Buenas digestiones", price: 13.8, stock: "Disponible", discount: "5%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Sikapur-300x300.jpg", tagline: "Producto específico para molestias gástricas." },
    { id: 41, name: "VitaminD3K2", cat: "Defensas", price: 17.75, stock: "Disponible", discount: "7%", image: "https://www.vitae.es/wp-content/uploads/2024/09/VitaminD1k2-300x300.jpg", tagline: "Vitamina D3 y K2 para recomendación anual." },
    { id: 42, name: "Vitarlic® Cleanse", cat: "Detox", price: 18.95, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/08/Vitarlic-Clease-300x300.jpg", tagline: "Línea Vitarlic para planes cleanse." },
    { id: 43, name: "Vitarlic® Forte", cat: "Corazón", price: 19.45, stock: "Disponible", discount: "8%", image: "https://www.vitae.es/wp-content/uploads/2024/09/Vitarlic-forte-300x300.jpg", tagline: "Ajo negro para recomendación cardiovascular." },
    { id: 44, name: "Vulbiotic®", cat: "Sistema urinario", price: 18.5, stock: "48 h", discount: "7%", image: "https://www.vitae.es/wp-content/uploads/2024/09/VulBiotic-5-300x300.webp", tagline: "Bienestar íntimo y urinario para reposición." }
  ],
  learning: [
    { title: "Ficha técnica Oseogen", type: "Ficha técnica", family: "Articulaciones", state: "Completada", progress: 100 },
    { title: "Estudio clínico Omega Pro", type: "Estudio", family: "Cardiovascular", state: "En curso", progress: 54 },
    { title: "Cápsula formativa Probiovance", type: "Vídeo", family: "Digestivo", state: "No iniciada", progress: 0 },
    { title: "Presentación de recomendación activa", type: "Presentación", family: "Mostrador", state: "En curso", progress: 32 },
    { title: "Ficha técnica Magnesio Plus", type: "Ficha técnica", family: "Energía", state: "Disponible", progress: 0 },
    { title: "Ficha técnica Inmuno Complex", type: "Ficha técnica", family: "Defensas", state: "Disponible", progress: 0 },
    { title: "Estudio microbiota y bienestar", type: "Estudio", family: "Digestivo", state: "No iniciada", progress: 0 },
    { title: "Estudio descanso y rutina nocturna", type: "Estudio", family: "Bienestar", state: "En curso", progress: 41 },
    { title: "Vídeo consejo cardiovascular", type: "Vídeo", family: "Cardiovascular", state: "Disponible", progress: 0 },
    { title: "Vídeo defensas en mostrador", type: "Vídeo", family: "Defensas", state: "Completada", progress: 100 },
    { title: "Presentación plan digestivo", type: "Presentación", family: "Digestivo", state: "En curso", progress: 68 },
    { title: "Presentación onboarding equipo", type: "Presentación", family: "Mostrador", state: "Disponible", progress: 0 }
  ],
  content: [
    { title: "Microbiota y consejo farmacéutico", type: "Artículo", tag: "Digestivo" },
    { title: "Webinar: adherencia en suplementación", type: "Webinar", tag: "Formación" },
    { title: "Podcast: bienestar femenino", type: "Podcast", tag: "Bienestar" },
    { title: "Estudio: omega 3 y prevención", type: "Estudio", tag: "Cardiovascular" },
    { title: "Artículo: magnesio y fatiga diaria", type: "Artículo", tag: "Energía" },
    { title: "Artículo: rutina de descanso saludable", type: "Artículo", tag: "Bienestar" },
    { title: "Webinar: campañas de salud estacional", type: "Webinar", tag: "Marketing" },
    { title: "Webinar: recomendación activa en mostrador", type: "Webinar", tag: "Mostrador" },
    { title: "Podcast: conversación con el delegado", type: "Podcast", tag: "Comercial" },
    { title: "Podcast: claves de adherencia", type: "Podcast", tag: "Formación" },
    { title: "Estudio: vitamina C y defensas", type: "Estudio", tag: "Defensas" },
    { title: "Estudio: hábitos digestivos en farmacia", type: "Estudio", tag: "Digestivo" }
  ],
  campaigns: [
    { title: "Campaña Primavera Activa", type: "Creatividades", product: "Magnesio Plus" },
    { title: "Escaparate Digestivo", type: "Imágenes", product: "Probiovance" },
    { title: "Vídeo consejo Sueño Natural", type: "Vídeo", product: "Sueño Natural" },
    { title: "Material mostrador Defensas", type: "Promocional", product: "Inmuno Complex" },
    { title: "Creatividades Omega Pro verano", type: "Creatividades", product: "Omega Pro" },
    { title: "Creatividades descanso nocturno", type: "Creatividades", product: "Sueño Natural" },
    { title: "Pack imágenes articulaciones", type: "Imágenes", product: "Oseogen Articular" },
    { title: "Imágenes redes defensas", type: "Imágenes", product: "Inmuno Complex" },
    { title: "Vídeo escaparate digestivo", type: "Vídeo", product: "Probiovance" },
    { title: "Vídeo microconsejo energía", type: "Vídeo", product: "Magnesio Plus" },
    { title: "Promocional expositor Omega", type: "Promocional", product: "Omega Pro" },
    { title: "Promocional guía articular", type: "Promocional", product: "Oseogen Articular" }
  ],
  challenges: [
    {
      title: "Reto escaparate saludable",
      state: "Disponible",
      reward: "450 puntos",
      deadline: "20/06/2026",
      category: "Marketing en farmacia",
      duration: "14 dias",
      participants: 38,
      progress: 18,
      goal: "Crear un escaparate visible con el producto recomendado, subir una foto y registrar una acción de consejo vinculada.",
      steps: ["Descargar creatividad", "Montar exposición", "Subir fotografía", "Registrar acción en mostrador"],
      requirement: "1 foto del escaparate y 3 recomendaciones registradas",
      validation: "Revisión por el equipo Vitae en 48 h"
    },
    {
      title: "Semana Digestiva Probiovance",
      state: "Disponible",
      reward: "350 puntos",
      deadline: "24/06/2026",
      category: "Digestivo",
      duration: "10 dias",
      participants: 29,
      progress: 0,
      goal: "Activar una semana de consejo digestivo con material de mostrador, argumentario breve y registro de recomendaciones de Probiovance.",
      steps: ["Descargar argumentario", "Colocar material de mostrador", "Registrar recomendaciones", "Subir resumen semanal"],
      requirement: "6 recomendaciones registradas y 1 resumen de actividad",
      validation: "Revisión por marketing y delegado comercial"
    },
    {
      title: "Sprint Omega Pro mostrador",
      state: "Disponible",
      reward: "500 puntos",
      deadline: "28/06/2026",
      category: "Cardiovascular",
      duration: "12 dias",
      participants: 21,
      progress: 0,
      goal: "Impulsar la recomendacion activa de Omega Pro en clientes interesados en bienestar cardiovascular y adherencia a rutinas saludables.",
      steps: ["Completar ficha rapida", "Preparar guion de consejo", "Registrar 5 conversaciones", "Enviar evidencia final"],
      requirement: "5 conversaciones documentadas y test de producto completado",
      validation: "Validación automática más revisión muestral"
    },
    {
      title: "Plan sueño y descanso",
      state: "Disponible",
      reward: "Kit descanso",
      deadline: "05/07/2026",
      category: "Bienestar",
      duration: "14 dias",
      participants: 18,
      progress: 0,
      goal: "Crear una acción de recomendación sobre descanso con Sueño Natural, enfocada en rutina nocturna, continuidad y seguimiento del cliente.",
      steps: ["Revisar guía de descanso", "Crear exposición mini", "Registrar casos de consejo", "Completar cierre del reto"],
      requirement: "4 casos de consejo y foto de exposición mini",
      validation: "Revisión manual en 72 h"
    },
    {
      title: "Formación equipo completo",
      state: "Inscrito",
      reward: "Kit premium",
      deadline: "30/06/2026",
      category: "Formacion",
      duration: "21 dias",
      participants: 24,
      progress: 62,
      goal: "Conseguir que todos los contactos de la farmacia completen la capsula trimestral y respondan el test final.",
      steps: ["Invitar equipo", "Completar capsula", "Superar test", "Validar participantes"],
      requirement: "4 miembros con test aprobado",
      validation: "Validación automática al superar el 80%"
    },
    {
      title: "Validación consejo activo",
      state: "Pendiente validación",
      reward: "300 puntos",
      deadline: "15/06/2026",
      category: "Consejo farmaceutico",
      duration: "7 dias",
      participants: 17,
      progress: 84,
      goal: "Registrar recomendaciones reales de Oseogen Articular y adjuntar el resumen de casos atendidos durante la semana.",
      steps: ["Revisar argumentario", "Registrar consejos", "Adjuntar resumen", "Esperar validacion"],
      requirement: "5 consejos activos documentados",
      validation: "Revisión manual del delegado asignado"
    },
    {
      title: "Campaña primavera",
      state: "Finalizado",
      reward: "Material PLV",
      deadline: "31/05/2026",
      category: "Campana",
      duration: "30 dias",
      participants: 52,
      progress: 100,
      goal: "Completar la campaña estacional con exposición, formación rápida y pedido mínimo de reposición.",
      steps: ["Activar campaña", "Hacer pedido mínimo", "Usar material PLV", "Cerrar evidencias"],
      requirement: "Pedido mínimo y evidencia de exposición",
      validation: "Reto cerrado"
    }
  ],
  loyalty: [
    ["03/06/2026", "Reto escaparate", "+450"],
    ["29/05/2026", "Canje expositor", "-800"],
    ["24/05/2026", "Pedido PV-2026-1397", "+84"]
  ]
};

const state = {
  role: "titular",
  section: "dashboard",
  shopTab: "catalogo",
  checkoutStep: "cart",
  cart: [],
  lastAdded: null,
  orderConfirmation: null,
  confirmationEmails: [],
  challengeOverrides: {},
  challengeEmails: {},
  adminModule: "usuarios",
  adminSearch: "",
  adminCreated: {},
  adminNotice: "",
  collapsedNavGroups: {}
};
const euro = value => value.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
const el = id => document.getElementById(id);
const statusClass = status => /pendiente|proceso|tránsito|curso|validación/i.test(status) ? "warn" : /abierto|últimas/i.test(status) ? "danger" : /no iniciada|48/i.test(status) ? "info" : "";
const allowed = key => roles[state.role].sections === "all" || roles[state.role].sections.includes(key);
const cartStorageKey = "vitae-shop-cart";

function init() {
  if (new URLSearchParams(window.location.search).get("shop") === "1") {
    loadSharedCart();
    const requestedTab = new URLSearchParams(window.location.search).get("tab");
    if (["catalogo", "rapida", "comprados", "checkout", "confirmation"].includes(requestedTab)) state.shopTab = requestedTab;
    renderShopWindow();
    return;
  }

  el("roleSelect").innerHTML = Object.entries(roles).map(([key, role]) => `<option value="${key}">${role.label}</option>`).join("");
  el("roleSelect").value = state.role;
  el("roleSelect").addEventListener("change", event => {
    state.role = event.target.value;
    if (!allowed(state.section)) state.section = "dashboard";
    renderNav();
    render();
  });
  el("menuToggle").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
  el("globalSearch").addEventListener("input", event => filterCards(event.target.value));
  el("profileBtn").addEventListener("click", () => {
    state.section = "mi-cuenta";
    document.querySelector(".sidebar").classList.remove("open");
    renderNav();
    render();
  });
  renderNav();
  render();
}

function renderNav() {
  el("mainNav").innerHTML = nav.map(item => {
    if (Array.isArray(item)) return navButton(item);
    const groupActive = item.children.some(([key]) => state.section === key);
    const collapsed = Boolean(state.collapsedNavGroups[item.key]);
    return `
      <div class="nav-group ${groupActive ? "active" : ""} ${collapsed ? "collapsed" : ""}">
        <button class="nav-group-label" type="button" data-nav-group="${item.key}" aria-expanded="${!collapsed}">
          <span>${item.icon}</span><span>${item.label}</span><span class="nav-group-toggle">⌄</span>
        </button>
        <div class="nav-children" ${collapsed ? "hidden" : ""}>
          ${item.children.map(child => navButton(child, true)).join("")}
        </div>
      </div>`;
  }).join("");
  document.querySelectorAll(".nav-group-label").forEach(btn => btn.addEventListener("click", () => {
    const key = btn.dataset.navGroup;
    state.collapsedNavGroups[key] = !state.collapsedNavGroups[key];
    renderNav();
  }));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => {
    if (!allowed(btn.dataset.section)) return;
    if (shopSectionTab(btn.dataset.section)) {
      openShopWindow(shopSectionTab(btn.dataset.section));
      return;
    }
    state.section = btn.dataset.section;
    document.querySelector(".sidebar").classList.remove("open");
    renderNav();
    render();
  }));
}

function navButton([key, icon, label], child = false) {
  return `
    <button class="nav-btn ${child ? "child" : ""} ${state.section === key ? "active" : ""} ${allowed(key) ? "" : "locked"}" data-section="${key}">
      <span>${icon}</span><span>${label}</span>
    </button>`;
}

function render() {
  const view = el("view");
  const map = {
    dashboard, "mi-cuenta": account, pedidos: orders, albaranes: deliveries, facturas: invoices,
    casos: cases, formacion: learning, knowledge, marketing, retos: challenges,
    fidelizacion: loyalty, wishlist, compras: shopEntry, "compra-rapida": shopEntry, "productos-comprados": shopEntry, admin: backoffice
  };
  view.innerHTML = map[state.section]();
  bindViewActions();
}

function dashboard() {
  return `
    <div class="hero">
      <div>
        <h1>Hola, Farmacia Alameda</h1>
        <p>Panel privado con actividad comercial, formación, materiales y recomendaciones para impulsar el consejo farmacéutico.</p>
      </div>
    </div>
    <div class="grid cols-4" style="margin-top:16px">
      ${metric("Pedidos mes", "12", "▣")}
      ${metric("Facturas abiertas", "1", "□")}
      ${metric("Formación", "72%", "◫")}
      ${metric("Puntos", "3.840", "◈")}
    </div>
    <div class="dashboard-analytics">
      ${ordersChart()}
      ${formationChart()}
      ${pointsChart()}
      ${categoryChart()}
    </div>
    <div class="section-head"><h2>Accesos rápidos</h2><span class="muted">Acciones habituales</span></div>
    <div class="quick-grid">
      ${quick("Crear incidencia", "casos", "!")}
      ${allowed("compras") ? quick("Nuevo pedido", "compras", "◉") : ""}
      ${quick("Material de campaña", "marketing", "◩")}
      ${quick("Ver retos", "retos", "☆")}
    </div>
    <div class="grid cols-2" style="margin-top:18px">
      <div class="panel"><div class="section-head" style="margin-top:0"><h2>Últimos pedidos</h2><button class="ghost" data-go="pedidos">Ver todos</button></div>${table(["Número","Fecha","Estado","Importe"], data.orders.map(o => [o.id,o.date,badge(o.status),euro(o.total)]))}</div>
      <div class="panel"><div class="section-head" style="margin-top:0"><h2>Últimas facturas</h2><button class="ghost" data-go="facturas">Ver todas</button></div>${table(["Número","Fecha","Estado","Importe"], data.invoices.map(i => [i.id,i.date,badge(i.status),euro(i.total)]))}</div>
    </div>
    <div class="grid cols-3" style="margin-top:18px">
      ${card("Noticia destacada", "Nuevo estudio sobre suplementación en bienestar digestivo disponible en Knowledge.", "Leer contenido", "knowledge")}
      ${card("Acción recomendada", "Completa la cápsula de Probiovance para activar recomendaciones en mostrador.", "Ir a formación", "formacion")}
      ${card("Estado de formación", "3 de 5 miembros del equipo han completado el plan del trimestre.", "Ver detalle", "formacion")}
    </div>`;
}

function openShopWindow(tab = "catalogo") {
  const url = new URL(window.location.href);
  url.searchParams.set("shop", "1");
  url.searchParams.set("tab", tab);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

function shopSectionTab(section) {
  return {
    compras: "catalogo",
    "compra-rapida": "rapida",
    "productos-comprados": "comprados"
  }[section];
}

function metric(label, value, icon) {
  return `<div class="card metric"><div><span class="muted">${label}</span><strong>${value}</strong></div><div class="icon">${icon}</div></div>`;
}

function ordersChart() {
  const months = [
    ["Ene", 6], ["Feb", 9], ["Mar", 7], ["Abr", 11], ["May", 8], ["Jun", 12]
  ];
  const max = Math.max(...months.map(([, value]) => value));
  return `<section class="panel chart-panel wide-chart">
    <div class="chart-head"><div><h2>Pedidos últimos 6 meses</h2><p class="muted">Evolución de actividad comercial</p></div><span class="status">+18%</span></div>
    <div class="bar-chart">
      ${months.map(([label, value]) => `<div class="bar-item"><div class="bar-track"><span style="height:${(value / max) * 100}%"></span></div><strong>${value}</strong><small>${label}</small></div>`).join("")}
    </div>
  </section>`;
}

function formationChart() {
  return `<section class="panel chart-panel">
    <div class="chart-head"><div><h2>Formación</h2><p class="muted">Progreso del equipo</p></div></div>
    <div class="donut-wrap">
      <div class="donut" style="--value:72"><strong>72%</strong><span>completado</span></div>
      <div class="legend-list">
        ${legend("Completada", "3 módulos", "var(--sage-dark)")}
        ${legend("En curso", "2 módulos", "var(--gold)")}
        ${legend("Pendiente", "1 módulo", "var(--blue)")}
      </div>
    </div>
  </section>`;
}

function pointsChart() {
  const values = [2840, 3060, 2920, 3380, 3210, 3840];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values.map((value, index) => {
    const x = 8 + index * 17;
    const y = 88 - ((value - min) / (max - min)) * 62;
    return `${x},${y}`;
  }).join(" ");
  return `<section class="panel chart-panel">
    <div class="chart-head"><div><h2>Puntos</h2><p class="muted">Saldo acumulado</p></div><span class="status">3.840</span></div>
    <svg class="line-chart" viewBox="0 0 100 100" role="img" aria-label="Evolución de puntos">
      <polyline points="${points}" fill="none" stroke="#466f55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
      ${points.split(" ").map(point => {
        const [x, y] = point.split(",");
        return `<circle cx="${x}" cy="${y}" r="2.8" fill="#ffffff" stroke="#466f55" stroke-width="2"></circle>`;
      }).join("")}
    </svg>
    <div class="spark-labels"><span>Ene</span><span>Jun</span></div>
  </section>`;
}

function categoryChart() {
  const categories = [
    ["Articulaciones", 34],
    ["Digestivo", 26],
    ["Cardiovascular", 22],
    ["Bienestar", 18]
  ];
  return `<section class="panel chart-panel">
    <div class="chart-head"><div><h2>Mix de compra</h2><p class="muted">Por categoría</p></div></div>
    <div class="rank-chart">
      ${categories.map(([label, value]) => `<div class="rank-row"><div><strong>${label}</strong><span>${value}%</span></div><div class="progress"><span style="width:${value}%"></span></div></div>`).join("")}
    </div>
  </section>`;
}

function legend(label, value, color) {
  return `<div class="legend-item"><span style="background:${color}"></span><div><strong>${label}</strong><small>${value}</small></div></div>`;
}

function quick(label, section, icon) {
  return `<button class="quick" data-go="${section}"><span>${icon}</span><strong>${label}</strong></button>`;
}

function card(title, text, action, section) {
  return `<div class="card"><h3>${title}</h3><p class="muted">${text}</p><button class="secondary" data-go="${section}">${action}</button></div>`;
}

function account() {
  return page("Mi cuenta", "Información fiscal, contactos y direcciones de envío de la farmacia.", `
    <div class="grid cols-2">
      <div class="panel">
        <h2>Datos fiscales</h2>
        ${kv("Razón social", data.pharmacy.name)}
        ${kv("CIF", data.pharmacy.cif)}
        ${kv("Dirección", data.pharmacy.address)}
        ${kv("Forma de pago", data.pharmacy.billing)}
        <button class="primary" data-modal="account">Solicitar modificación</button>
      </div>
      <div class="panel">
        <h2>Contactos asociados</h2>
        ${data.pharmacy.contacts.map(c => `<p>${c}</p>`).join("")}
        <h2 style="margin-top:22px">Direcciones de envío</h2>
        ${data.pharmacy.shipping.map(c => `<p>${c}</p>`).join("")}
      </div>
    </div>`);
}

function orders() {
  return page("Pedidos", "Listado y detalle de pedidos simulados.", `
    <div class="panel">${table(["Número","Fecha","Estado","Importe","Acciones"], data.orders.map(o => [o.id,o.date,badge(o.status),euro(o.total),`<button class="secondary" data-order="${o.id}">Detalle</button>`]))}</div>`);
}

function deliveries() {
  return page("Albaranes", "Consulta visual por fecha y descarga ficticia.", `
    <div class="filters"><input type="date" value="2026-05-01"><input type="date" value="2026-06-04"><button class="secondary">Filtrar</button></div>
    <div class="panel">${table(["Albarán","Fecha","Pedido","Estado","Acción"], data.deliveries.map(d => [d.id,d.date,d.order,badge(d.status),"<button class='secondary'>Descargar</button>"]))}</div>`);
}

function invoices() {
  return page("Facturas", "Detalle económico de facturas con PDFs ficticios.", `
    <div class="panel">${table(["Factura","Fecha","Estado","Importe","PDF"], data.invoices.map(i => [i.id,i.date,badge(i.status),euro(i.total),"<button class='secondary'>Descargar PDF</button>"]))}</div>`);
}

function cases() {
  return page("Casos e incidencias", "Creación y seguimiento de incidencias sin envío real.", `
    <div class="grid cols-2">
      <div class="panel"><h2>Nueva incidencia</h2>${incidentForm()}</div>
      <div class="panel"><h2>Incidencias existentes</h2>${table(["Caso","Categoría","Producto","Estado"], data.cases.map(c => [c.id,c.category,c.product,badge(c.status)]))}</div>
    </div>`);
}

function learning() {
  return resourcePage("Formación", "Repositorio documental con progreso simulado.", ["Todos", "Ficha técnica", "Estudio", "Vídeo", "Presentación"], data.learning.map(item => resource(item.title, item.type, item.family, item.state, item.progress)));
}

function knowledge() {
  return resourcePage("Knowledge", "Biblioteca de artículos, webinars, podcasts y estudios.", ["Todos", "Artículo", "Webinar", "Podcast", "Estudio"], data.content.map(item => resource(item.title, item.type, item.tag, "Disponible")));
}

function marketing() {
  return resourcePage("Marketing", "Materiales promocionales organizados por producto, campaña y recurso.", ["Todos", "Creatividades", "Imágenes", "Vídeo", "Promocional"], data.campaigns.map(item => resource(item.title, item.type, item.product, "Listo")));
}

function resourcePage(title, subtitle, filters, items) {
  return page(title, subtitle, `
    <div class="filters">
      <input type="search" placeholder="Buscar contenido" data-local-search>
      ${filters.map((f, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`).join("")}
    </div>
    <div class="grid cols-4">${items.join("")}</div>`);
}

function resource(title, type, tag, state, progress = null) {
  return `<article class="card resource-card searchable filterable" data-filter-value="${type} ${tag}">
    <div class="resource-thumb"><strong>${type[0]}</strong></div>
    <div class="resource-body">
      <span class="status ${statusClass(state)}">${state}</span>
      <h3>${title}</h3>
      <p class="muted">${type} · ${tag}</p>
      ${progress === null ? "" : `<div class="progress"><span style="width:${progress}%"></span></div>`}
      <button class="secondary" data-resource-title="${title}" data-resource-type="${type}">Ver detalle</button>
    </div>
  </article>`;
}

function challenges() {
  return page("Retos", "Experiencia visual de retos con recompensas y estados.", `
    <div class="challenge-summary">
      ${metric("Retos disponibles", String(data.challenges.filter((r, i) => challengeState(r, i) === "Disponible").length), "☆")}
      ${metric("Inscripciones activas", String(data.challenges.filter((r, i) => challengeState(r, i) === "Inscrito").length), "◎")}
      ${metric("Puntos en juego", "750", "◈")}
    </div>
    <div class="grid cols-4">${data.challenges.map((r, i) => `
    <article class="card resource-card challenge-card searchable">
      <div class="resource-thumb challenge-thumb"><strong>R${i + 1}</strong><span>${r.category}</span></div>
      <div class="resource-body">
        <span class="status ${statusClass(challengeState(r, i))}">${challengeState(r, i)}</span>
        <h3>${r.title}</h3>
        <p class="muted">Recompensa: ${r.reward}<br>Fecha límite: ${r.deadline}</p>
        <div class="progress challenge-progress"><span style="width:${challengeProgress(r, i)}%"></span></div>
        <div class="actions">
          ${challengeState(r, i) === "Disponible" ? `<button class="secondary" data-challenge-detail="${i}">Ver detalle</button>` : ""}
          ${challengeCta(r, i)}
        </div>
      </div>
    </article>`).join("")}</div>`);
}

function challengeState(challenge, index) {
  return state.challengeOverrides[index]?.state || challenge.state;
}

function challengeProgress(challenge, index) {
  return state.challengeOverrides[index]?.progress ?? challenge.progress;
}

function challengeCta(challenge, index) {
  const current = challengeState(challenge, index);
  if (current === "Disponible") return `<button class="primary" data-challenge-join="${index}">Inscribirme</button>`;
  if (current === "Inscrito") return `<button class="ghost" data-challenge-detail="${index}">Continuar</button><button class="secondary" data-challenge-leave="${index}">Desinscribirme</button>`;
  if (current === "Pendiente validación") return `<button class="ghost" data-challenge-detail="${index}">Ver validacion</button>`;
  return `<button class="ghost" data-challenge-detail="${index}">Resumen</button>`;
}

function loyalty() {
  return page("Fidelización", "Programa de puntos y recompensas con datos ficticios.", `
    <div class="grid cols-3">
      ${metric("Saldo disponible", "3.840", "◈")}
      ${metric("Puntos por validar", "620", "◇")}
      ${metric("Nivel", "Premium", "☆")}
    </div>
    <div class="grid cols-2" style="margin-top:18px">
      <div class="panel"><h2>Historial</h2>${table(["Fecha","Movimiento","Puntos"], data.loyalty)}</div>
      <div class="panel"><h2>Recompensas</h2>${["Expositor sobremesa","Kit formación equipo","Material PLV premium"].map((x, i) => `<p><strong>${x}</strong><br><span class="muted">${(i + 4) * 250} puntos</span></p>`).join("")}</div>
    </div>`);
}

function wishlist() {
  return page("Wishlist", "Productos favoritos guardados para repetir pedido.", `<div class="grid cols-3">${data.products.slice(0,3).map(productCard).join("")}</div>`);
}

function shopEntry() {
  return page("Tienda online", "La tienda se abre en una ventana independiente con navegación y checkout propios.", `
    <div class="panel shop-entry">
      <h2>Tienda Vitae B2B</h2>
      <p class="muted">Abre el proceso de compra simulado con header de tienda, categorías, catálogo, compra rápida por CSV y productos comprados.</p>
      <button class="primary" onclick="openShopWindow()">Abrir tienda</button>
    </div>`);
}

function shop() {
  const categories = ["Todos", ...Array.from(new Set(data.products.map(product => product.cat)))];
  return `
    ${cartFeedback()}
    <div class="filters">
      <input type="search" placeholder="Buscar producto" data-local-search>
      ${categories.map((f, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`).join("")}
    </div>
    <div class="grid cols-3">${data.products.map(productCard).join("")}</div>
    ${shopCartDock("Carrito demo")}`;
}

function productCard(p) {
  const inputId = `qty-${p.id}`;
  const wasAdded = state.lastAdded?.id === p.id;
  const image = productImage(p);
  return `<article class="card product-card searchable filterable ${wasAdded ? "just-added" : ""}" data-filter-value="${p.cat}">
    <div class="product-art">
      <span class="product-badge">-${p.discount}</span>
      ${image ? `<img src="${image}" alt="${p.name}" loading="lazy">` : `<div class="product-box">V</div>`}
      <span class="product-source">Vitae</span>
    </div>
    <div class="product-body">
      <div class="product-meta">
        <span class="status ${statusClass(p.stock)}">${p.stock}</span>
        <span class="status info">${p.cat}</span>
      </div>
      <h3>${p.name}</h3>
      <p class="product-tagline">${p.tagline || p.cat}</p>
      <div class="buy-row">
        <div class="price-block"><span>Precio farmacia</span><strong>${euro(p.price)}</strong></div>
        <label><span>Cant.</span><input id="${inputId}" type="number" min="1" value="1" data-qty-for="${p.id}"></label>
        <button class="${wasAdded ? "primary" : "secondary"}" data-add="${p.id}">${wasAdded ? "Añadido" : "Añadir"}</button>
      </div>
    </div>
  </article>`;
}

function productImage(p) {
  const webpIds = new Set([14, 22, 30, 31, 36, 39, 44]);
  const ext = webpIds.has(p.id) ? "webp" : "jpg";
  return `assets/products/vit-${String(p.id).padStart(3, "0")}.${ext}`;
}

function renderShopWindow() {
  document.title = "Tienda Vitae B2B";
  document.body.innerHTML = `
    <div class="shop-shell">
      <header class="shop-header">
        <div class="shop-brand">
          <div class="brand-mark">V</div>
          <div><strong>Tienda Vitae</strong><span>Compra B2B demo</span></div>
        </div>
        <nav class="shop-tabs" aria-label="Secciones de tienda">
          ${shopTabButton("catalogo", "Catálogo")}
        </nav>
        <button class="secondary" data-checkout-open>Carrito · ${cartUnits()} · ${euro(cartTotal())}</button>
      </header>
      <main class="shop-main" id="shopView"></main>
    </div>
    <div id="modal" class="modal" aria-hidden="true"></div>`;
  renderShopView();
}

function shopTabButton(tab, label) {
  return `<button class="chip ${state.shopTab === tab ? "active" : ""}" data-shop-tab="${tab}">${label}</button>`;
}

function renderShopView() {
  const shopView = el("shopView");
  const views = {
    catalogo: shopCatalog,
    rapida: quickPurchase,
    comprados: purchasedProducts,
    checkout: checkoutPage,
    confirmation: confirmationPage
  };
  shopView.innerHTML = views[state.shopTab]();
  bindViewActions();
  document.querySelectorAll("[data-shop-tab]").forEach(btn => btn.addEventListener("click", () => {
    state.shopTab = btn.dataset.shopTab;
    renderShopWindow();
  }));
}

function shopCatalog() {
  return `
    <section class="shop-hero">
      <div>
        <span class="status">Farmacia Alameda</span>
        <h1>Proceso de compra Vitae</h1>
        <p>Catálogo B2B con tarifas, disponibilidad y checkout simulado para crear un pedido de reposición.</p>
      </div>
      <div class="shop-summary">
        ${kv("Productos en carrito", String(cartUnits()))}
        ${kv("Importe estimado", euro(cartTotal()))}
        <button class="primary" data-checkout-open>Finalizar compra</button>
      </div>
    </section>
    <div class="category-strip">
      ${["Articulaciones","Digestivo","Cardiovascular","Energía","Bienestar","Defensas"].map(cat => `<button class="secondary" data-category-jump="${cat}">${cat}</button>`).join("")}
    </div>
    ${shop()}`;
}

function quickPurchase() {
  return `
    <section class="panel">
      <div class="section-head" style="margin-top:0">
        <div><h1>Compra rápida por CSV</h1><p class="muted">Sube un archivo con columnas sku,cantidad para añadir productos al carrito.</p></div>
        <button class="secondary" data-download-sample>Descargar muestra</button>
      </div>
      <form class="quick-upload" data-csv-form>
        <input type="file" accept=".csv,text/csv" data-csv-file>
        <button class="primary">Añadir CSV al carrito</button>
      </form>
      <div class="csv-sample">
        <strong>Formato esperado</strong>
        <code>sku,producto,cantidad<br>VIT-001,Oseogen Articular,12<br>VIT-002,Omega Pro,6</code>
        <button class="secondary" data-add-sample-csv>Añadir muestra al carrito</button>
      </div>
      <div class="quick-sku-grid">
        ${data.products.map((product, index) => `<div><strong>VIT-${String(index + 1).padStart(3, "0")}</strong><span>${product.name}</span></div>`).join("")}
      </div>
    </section>
    ${shopCartDock("Carrito de compra rápida")}`;
}

function purchasedProducts() {
  const purchased = purchasedProductRows();
  return `
    <section class="panel">
      <div class="section-head" style="margin-top:0"><div><h1>Productos comprados</h1><p class="muted">Reposición basada en pedidos anteriores de la farmacia.</p></div></div>
      ${table(["Producto","Categoría","Última cantidad","Precio","Comprar"], purchased.map(p => [
        p.name,
        p.cat,
        String(p.lastQty),
        euro(p.price),
        `<div class="buy-row compact"><input type="number" min="1" value="${p.lastQty}" data-qty-for="${p.id}"><button class="secondary" data-add="${p.id}">Añadir</button></div>`
      ]))}
    </section>
    ${shopCartDock("Carrito de reposición")}`;
}

function purchasedProductRows() {
  const quantities = {};
  data.orders.forEach(order => order.lines.forEach(([name, qty]) => {
    const product = data.products.find(p => p.name === name);
    if (product) quantities[product.id] = Math.max(quantities[product.id] || 0, qty);
  }));
  return data.products.filter(p => quantities[p.id]).map(p => ({ ...p, lastQty: quantities[p.id] }));
}

function shopCartDock(title) {
  return `
    <div class="cart-dock ${state.lastAdded ? "cart-updated" : ""}">
      <div><strong>${title}</strong><br><span>${cartUnits()} unidades · ${euro(cartTotal())}</span>${state.lastAdded ? `<small>Último añadido: ${state.lastAdded.qty} x ${state.lastAdded.name}</small>` : ""}</div>
      <button class="primary" data-checkout-open ${state.cart.length ? "" : "disabled"}>Ver carrito</button>
    </div>`;
}

function cartFeedback() {
  if (!state.lastAdded) return "";
  return `
    <div class="cart-feedback" role="status">
      <strong>${state.lastAdded.name} añadido al carrito</strong>
      <span>${state.lastAdded.qty} unidades · carrito actualizado a ${cartUnits()} unidades por ${euro(cartTotal())}</span>
      <button class="secondary" data-checkout-open>Ver carrito</button>
    </div>`;
}

function checkoutPage() {
  return `
    <section class="checkout-page">
      <div class="section-head" style="margin-top:0">
        <div><h1>Checkout</h1><p class="muted">Proceso de compra simulado a pantalla completa.</p></div>
        <span class="status">${cartUnits()} unidades · ${euro(cartTotal())}</span>
      </div>
      ${checkoutContent()}
    </section>`;
}

function confirmationPage() {
  const order = state.orderConfirmation || createOrderConfirmation();
  const email = state.confirmationEmails.find(item => item.orderId === order.id) || createConfirmationEmail(order);
  return `
    <section class="confirmation-page">
      <div class="confirmation-hero">
        <span class="status">Pedido confirmado</span>
        <h1>${order.id}</h1>
        <p>El pedido se ha registrado correctamente. La confirmación se envía a ${email.to} usando la configuración SMTP de Capataz.</p>
        <div class="actions">
          <button class="primary" data-shop-tab="catalogo">Volver al catalogo</button>
          <button class="secondary" data-shop-tab="comprados">Reponer productos</button>
        </div>
      </div>
      <div class="grid cols-2">
        <article class="panel">
          <h2>Resumen del pedido</h2>
          ${kv("Fecha", order.date)}
          ${kv("Entrega", order.shipping)}
          ${kv("Pago", order.payment)}
          ${kv("Total", euro(order.total))}
        </article>
        <article class="panel">
          <h2>Correo generado</h2>
          ${kv("Para", email.to)}
          ${kv("Asunto", email.subject)}
          ${kv("Estado", email.status)}
          ${email.error ? `<p class="status danger">${email.error}</p>` : ""}
          <div class="actions" style="margin-top:16px">
            <button class="primary" data-send-confirmation-email="${order.id}">${email.status === "Enviado" ? "Reenviar" : "Enviar ahora"}</button>
            <button class="secondary" data-download-confirmation-email="${order.id}">Descargar .eml</button>
          </div>
        </article>
      </div>
      <article class="email-preview confirmation-email" aria-label="Correo de confirmación">
        <div class="email-preheader">${email.preheader}</div>
        <div class="email-hero">
          <div>
            <span>VITAE PEDIDOS</span>
            <h3>Pedido confirmado</h3>
            <p>${email.summary}</p>
          </div>
          <strong>${order.id}</strong>
        </div>
        <div class="email-body">
          <p>Hola ${data.pharmacy.owner},</p>
          <p>Hemos recibido el pedido <strong>${order.id}</strong> de <strong>${data.pharmacy.name}</strong>. La entrega se realizará en la dirección seleccionada.</p>
          <div class="email-info-grid">
            <div><span>Total</span><strong>${euro(order.total)}</strong></div>
            <div><span>Unidades</span><strong>${order.units}</strong></div>
            <div><span>Entrega</span><strong>${order.shipping}</strong></div>
            <div><span>Pago</span><strong>${order.payment}</strong></div>
          </div>
          ${table(["Producto","Cantidad","Subtotal"], order.lines.map(line => [line.name, String(line.qty), euro(line.subtotal)]))}
        </div>
        <div class="email-footer">Correo transaccional generado el ${email.createdAt}. Estado actual: ${email.status}.</div>
      </article>
    </section>`;
}

function backoffice() {
  const modules = adminModules();
  const active = modules[state.adminModule] || modules.usuarios;
  const rows = adminRows(state.adminModule);
  const visibleRows = filterAdminRows(rows);

  return page("Backoffice", "Área de administración completa con datos simulados, altas visuales y listados operativos.", `
    <div class="admin-summary">
      ${metric("Registros demo", String(Object.keys(modules).reduce((sum, key) => sum + adminRows(key).length, 0)), "▣")}
      ${metric("Módulos activos", String(Object.keys(modules).length), "⚙")}
      ${metric("Altas sesión", String(Object.values(state.adminCreated).reduce((sum, list) => sum + list.length, 0)), "＋")}
    </div>
    <div class="admin-layout">
      <aside class="admin-tabs">
        ${Object.entries(modules).map(([key, module]) => `
          <button class="admin-tab ${state.adminModule === key ? "active" : ""}" data-admin-module="${key}">
            <span>${module.icon}</span>
            <strong>${module.label}</strong>
            <small>${adminRows(key).length} registros</small>
          </button>`).join("")}
      </aside>
      <section class="admin-workspace">
        <div class="admin-head">
          <div>
            <h2>${active.label}</h2>
            <p class="muted">${active.description}</p>
          </div>
          <span class="status">${visibleRows.length} visibles</span>
        </div>
        ${state.adminNotice ? `<div class="admin-notice">${state.adminNotice}</div>` : ""}
        <div class="admin-tools">
          <input type="search" placeholder="Buscar en ${active.label.toLowerCase()}..." value="${state.adminSearch}" data-admin-search>
          <button class="secondary" data-admin-reset>Limpiar</button>
          <button class="primary" data-admin-focus>Nuevo registro</button>
        </div>
        <div class="admin-grid">
          <div class="panel admin-list">
            ${adminTable(active, visibleRows)}
          </div>
          <div class="panel admin-create-panel" id="adminCreatePanel">
            <h2>Crear ${active.singular}</h2>
            <p class="muted">Alta simulada para validar el flujo de gestión. No se guarda fuera de esta sesión.</p>
            ${adminCreateForm(state.adminModule, active)}
          </div>
        </div>
      </section>
    </div>`);
}

function adminModules() {
  return {
    usuarios: {
      label: "Usuarios",
      singular: "usuario",
      icon: "◎",
      description: "Gestión visual de accesos, roles y estado de invitaciones.",
      columns: [["nombre", "Nombre"], ["rol", "Rol"], ["email", "Email"], ["estado", "Estado"]],
      fields: [
        ["nombre", "Nombre", "text"],
        ["rol", "Rol", "select", ["Administrador Vitae", "Marketing", "Titular de farmacia", "Auxiliar", "Distribuidor"]],
        ["email", "Email", "email"],
        ["estado", "Estado", "select", ["Activo", "Invitado", "Pendiente"]]
      ]
    },
    contactos: {
      label: "Contactos",
      singular: "contacto",
      icon: "◌",
      description: "Personas vinculadas a farmacias, cuentas o distribuidores.",
      columns: [["nombre", "Nombre"], ["cargo", "Cargo"], ["cuenta", "Cuenta"], ["estado", "Estado"]],
      fields: [["nombre", "Nombre", "text"], ["cargo", "Cargo", "text"], ["cuenta", "Cuenta", "text"], ["estado", "Estado", "select", ["Activo", "Pendiente", "Inactivo"]]]
    },
    cuentas: {
      label: "Cuentas",
      singular: "cuenta",
      icon: "□",
      description: "Farmacias y distribuidores con datos comerciales de demostración.",
      columns: [["nombre", "Cuenta"], ["tipo", "Tipo"], ["zona", "Zona"], ["estado", "Estado"]],
      fields: [["nombre", "Cuenta", "text"], ["tipo", "Tipo", "select", ["Farmacia", "Distribuidor", "Grupo"]], ["zona", "Zona", "text"], ["estado", "Estado", "select", ["Activa", "Revisión", "Bloqueada"]]]
    },
    contenidos: {
      label: "Contenidos",
      singular: "contenido",
      icon: "◧",
      description: "Artículos, webinars, podcasts y estudios publicados en Knowledge.",
      columns: [["title", "Título"], ["type", "Tipo"], ["tag", "Categoría"], ["estado", "Estado"]],
      fields: [["title", "Título", "text"], ["type", "Tipo", "select", ["Artículo", "Webinar", "Podcast", "Estudio"]], ["tag", "Categoría", "text"], ["estado", "Estado", "select", ["Borrador", "Publicado", "Programado"]]]
    },
    formacion: {
      label: "Formación",
      singular: "recurso",
      icon: "◫",
      description: "Fichas, estudios, vídeos y presentaciones formativas.",
      columns: [["title", "Título"], ["type", "Tipo"], ["family", "Familia"], ["state", "Estado"]],
      fields: [["title", "Título", "text"], ["type", "Tipo", "select", ["Ficha técnica", "Estudio", "Vídeo", "Presentación"]], ["family", "Familia", "text"], ["state", "Estado", "select", ["No iniciada", "En curso", "Completada"]]]
    },
    marketing: {
      label: "Marketing",
      singular: "material",
      icon: "◩",
      description: "Materiales por campaña, producto y tipo de recurso.",
      columns: [["title", "Título"], ["type", "Tipo"], ["product", "Producto"], ["estado", "Estado"]],
      fields: [["title", "Título", "text"], ["type", "Tipo", "select", ["Creatividades", "Imágenes", "Vídeo", "Promocional"]], ["product", "Producto", "text"], ["estado", "Estado", "select", ["Listo", "Borrador", "Programado"]]]
    },
    casos: {
      label: "Casos",
      singular: "caso",
      icon: "!",
      description: "Seguimiento de incidencias, categorías y estados.",
      columns: [["id", "Caso"], ["category", "Categoría"], ["product", "Producto"], ["status", "Estado"]],
      fields: [["id", "Código", "text"], ["category", "Categoría", "select", ["Logística", "Producto", "Facturación"]], ["product", "Producto"], ["status", "Estado", "select", ["Abierto", "En proceso", "Resuelto"]]]
    },
    retos: {
      label: "Retos",
      singular: "reto",
      icon: "☆",
      description: "Retos comerciales, recompensas, fechas y validación.",
      columns: [["title", "Título"], ["state", "Estado"], ["reward", "Recompensa"], ["deadline", "Fecha límite"]],
      fields: [["title", "Título", "text"], ["state", "Estado", "select", ["Disponible", "Inscrito", "Pendiente validación", "Finalizado"]], ["reward", "Recompensa", "text"], ["deadline", "Fecha límite", "date"]]
    },
    fidelizacion: {
      label: "Fidelización",
      singular: "movimiento",
      icon: "◈",
      description: "Movimientos de puntos, recompensas y productos canjeables.",
      columns: [["fecha", "Fecha"], ["concepto", "Concepto"], ["puntos", "Puntos"], ["estado", "Estado"]],
      fields: [["fecha", "Fecha", "date"], ["concepto", "Concepto", "text"], ["puntos", "Puntos", "number"], ["estado", "Estado", "select", ["Validado", "Pendiente", "Canjeado"]]]
    }
  };
}

function adminBaseRows(module) {
  const map = {
    usuarios: [
      { nombre: "María Alameda", rol: "Titular de farmacia", email: data.pharmacy.email, estado: "Activo" },
      { nombre: "Clara Vives", rol: "Auxiliar", email: "clara.vives@farmaciaalameda.demo", estado: "Activo" },
      { nombre: "Nuria Soler", rol: "Marketing", email: "nuria.soler@vitae.demo", estado: "Invitado" }
    ],
    contactos: data.pharmacy.contacts.map(contact => {
      const [nombre, cargo] = contact.split(" · ");
      return { nombre, cargo, cuenta: data.pharmacy.name, estado: "Activo" };
    }),
    cuentas: [
      { nombre: data.pharmacy.name, tipo: "Farmacia", zona: "Valencia", estado: "Activa" },
      { nombre: "Distribuciones Levante", tipo: "Distribuidor", zona: "Este", estado: "Activa" },
      { nombre: "Farmacia Mar Central", tipo: "Farmacia", zona: "Alicante", estado: "Revisión" }
    ],
    contenidos: data.content.map(row => ({ ...row, estado: "Publicado" })),
    formacion: data.learning,
    marketing: data.campaigns.map(row => ({ ...row, estado: "Listo" })),
    casos: data.cases,
    retos: data.challenges,
    fidelizacion: data.loyalty.map(([fecha, concepto, puntos]) => ({ fecha, concepto, puntos, estado: puntos.startsWith("-") ? "Canjeado" : "Validado" }))
  };
  return map[module] || [];
}

function adminRows(module) {
  return [...adminBaseRows(module), ...(state.adminCreated[module] || [])];
}

function filterAdminRows(rows) {
  const term = state.adminSearch.trim().toLowerCase();
  if (!term) return rows;
  return rows.filter(row => Object.values(row).join(" ").toLowerCase().includes(term));
}

function adminTable(moduleConfig, rows) {
  if (!rows.length) return `<div class="empty-state"><h3>Sin resultados</h3><p class="muted">Prueba otra búsqueda o crea un registro nuevo.</p></div>`;
  return `
    <div class="table-wrap">
      <table class="admin-table">
        <thead><tr>${moduleConfig.columns.map(([, label]) => `<th>${label}</th>`).join("")}<th>Acciones</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => `<tr>
            ${moduleConfig.columns.map(([key]) => `<td>${adminCell(row[key], key)}</td>`).join("")}
            <td><button class="secondary" data-admin-detail="${index}">Ver</button></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function adminCell(value, key) {
  if (/estado|state|status/i.test(key)) return badge(value || "Activo");
  return value || "—";
}

function adminCreateForm(module, moduleConfig) {
  return `<form class="admin-form" data-admin-create="${module}">
    ${moduleConfig.fields.map(([name, label, type = "text", options = []]) => `
      <label>
        <span>${label}</span>
        ${type === "select" ? `<select name="${name}">${options.map(option => `<option>${option}</option>`).join("")}</select>` : `<input name="${name}" type="${type}" placeholder="${label}" required>`}
      </label>`).join("")}
    <button class="primary">Crear ${moduleConfig.singular}</button>
  </form>`;
}

function page(title, subtitle, body) {
  return `<div class="section-head" style="margin-top:0"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div><span class="status">${roles[state.role].label}</span></div>${body}`;
}

function kv(label, value) {
  return `<p><span class="muted">${label}</span><br><strong>${value}</strong></p>`;
}

function table(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function badge(text) {
  return `<span class="status ${statusClass(text)}">${text}</span>`;
}

function incidentForm() {
  return `<form class="form-grid" data-fake-form>
    <select><option>Logística</option><option>Producto</option><option>Facturación</option></select>
    <select><option>Omega Pro</option><option>Probiovance</option><option>Magnesio Plus</option></select>
    <select class="wide"><option>ALB-2026-2234</option><option>ALB-2026-2191</option></select>
    <textarea class="wide" placeholder="Descripción"></textarea>
    <input class="wide" type="file">
    <button class="primary">Crear incidencia</button>
  </form>`;
}

function cartTotal() {
  return state.cart.reduce((sum, line) => {
    const product = data.products.find(p => p.id === line.id);
    return sum + (product ? product.price * line.qty : 0);
  }, 0);
}

function cartUnits() {
  return state.cart.reduce((sum, line) => sum + line.qty, 0);
}

function addToCart(productId, qty) {
  const line = state.cart.find(item => item.id === productId);
  if (line) line.qty += qty;
  else state.cart.push({ id: productId, qty });
  saveSharedCart();
}

function loadSharedCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    state.cart = Array.isArray(saved)
      ? saved.filter(line => data.products.some(product => product.id === line.id) && Number(line.qty) > 0).map(line => ({ id: Number(line.id), qty: Number(line.qty) }))
      : [];
  } catch {
    state.cart = [];
  }
}

function saveSharedCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(state.cart));
}

function clearSharedCart() {
  state.cart = [];
  localStorage.removeItem(cartStorageKey);
}

function cartRows() {
  return state.cart.map(line => {
    const product = data.products.find(p => p.id === line.id);
    return [product.name, String(line.qty), euro(product.price), euro(product.price * line.qty)];
  });
}

function isShopWindow() {
  return new URLSearchParams(window.location.search).get("shop") === "1";
}

function bindViewActions() {
  document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => {
    if (!allowed(btn.dataset.go)) return;
    if (shopSectionTab(btn.dataset.go)) {
      openShopWindow(shopSectionTab(btn.dataset.go));
      return;
    }
    state.section = btn.dataset.go;
    renderNav();
    render();
  }));
  document.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => {
    const productId = Number(btn.dataset.add);
    const qtyInput = document.querySelector(`[data-qty-for="${productId}"]`);
    const qty = Math.max(1, Number(qtyInput?.value || 1));
    const product = data.products.find(p => p.id === productId);
    addToCart(productId, qty);
    state.lastAdded = { id: productId, name: product?.name || "Producto", qty };
    if (isShopWindow()) renderShopWindow();
    else render();
  }));
  document.querySelectorAll("[data-order]").forEach(btn => btn.addEventListener("click", () => {
    const order = data.orders.find(o => o.id === btn.dataset.order);
    openModal("Detalle de pedido", `
      <p class="muted">${order.date} · ${badge(order.status)}</p>
      ${table(["Producto","Cantidad","Importe"], order.lines)}
      <div class="actions" style="margin-top:16px"><button class="secondary">Descargar pedido</button><button class="primary">Repetir pedido</button></div>`);
  }));
  document.querySelectorAll("[data-challenge-detail]").forEach(btn => btn.addEventListener("click", () => openChallengeDetail(Number(btn.dataset.challengeDetail))));
  document.querySelectorAll("[data-challenge-join]").forEach(btn => btn.addEventListener("click", () => openChallengeSignup(Number(btn.dataset.challengeJoin))));
  document.querySelectorAll("[data-challenge-leave]").forEach(btn => btn.addEventListener("click", () => openChallengeUnsubscribe(Number(btn.dataset.challengeLeave))));
  document.querySelectorAll("[data-modal]").forEach(btn => btn.addEventListener("click", () => modalByType(btn.dataset.modal)));
  document.querySelectorAll("[data-resource-title]").forEach(btn => btn.addEventListener("click", () => openResourceDetail(btn.dataset.resourceTitle, btn.dataset.resourceType)));
  document.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => applyLocalFilter(btn)));
  document.querySelectorAll("[data-local-search]").forEach(input => input.addEventListener("input", () => applyLocalFilter(input.closest(".filters").querySelector(".chip.active"))));
  document.querySelectorAll("[data-category-jump]").forEach(btn => btn.addEventListener("click", () => {
    const chip = [...document.querySelectorAll("[data-filter]")].find(item => item.dataset.filter === btn.dataset.categoryJump);
    if (chip) applyLocalFilter(chip);
  }));
  document.querySelectorAll("[data-download-sample]").forEach(btn => btn.addEventListener("click", downloadCsvSample));
  document.querySelectorAll("[data-add-sample-csv]").forEach(btn => btn.addEventListener("click", addSampleCsvToCart));
  document.querySelectorAll("[data-csv-form]").forEach(form => form.addEventListener("submit", handleCsvUpload));
  document.querySelectorAll("[data-checkout-open]").forEach(btn => btn.addEventListener("click", () => {
    state.checkoutStep = "cart";
    state.shopTab = "checkout";
    renderShopWindow();
  }));
  document.querySelectorAll("[data-checkout-step]").forEach(btn => btn.addEventListener("click", () => {
    state.checkoutStep = btn.dataset.checkoutStep;
    if (isShopWindow()) renderShopWindow();
    else modalByType("checkout");
  }));
  document.querySelectorAll("[data-download-confirmation-email]").forEach(btn => btn.addEventListener("click", () => downloadConfirmationEmail(btn.dataset.downloadConfirmationEmail)));
  document.querySelectorAll("[data-send-confirmation-email]").forEach(btn => btn.addEventListener("click", () => sendConfirmationEmailById(btn.dataset.sendConfirmationEmail)));
  document.querySelectorAll("[data-admin-module]").forEach(btn => btn.addEventListener("click", () => {
    state.adminModule = btn.dataset.adminModule;
    state.adminSearch = "";
    state.adminNotice = "";
    render();
  }));
  document.querySelectorAll("[data-admin-search]").forEach(input => input.addEventListener("input", event => {
    state.adminSearch = event.target.value;
    render();
  }));
  document.querySelectorAll("[data-admin-reset]").forEach(btn => btn.addEventListener("click", () => {
    state.adminSearch = "";
    render();
  }));
  document.querySelectorAll("[data-admin-focus]").forEach(btn => btn.addEventListener("click", () => {
    document.getElementById("adminCreatePanel")?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.querySelector(".admin-form input, .admin-form select")?.focus();
  }));
  document.querySelectorAll("[data-admin-create]").forEach(form => form.addEventListener("submit", createAdminRecord));
  document.querySelectorAll("[data-admin-detail]").forEach(btn => btn.addEventListener("click", () => openAdminDetail(Number(btn.dataset.adminDetail))));
  document.querySelectorAll("[data-fake-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    openModal("Solicitud recibida", "<p>La demo ha registrado la acción de forma simulada. No se ha enviado información a ningún sistema externo.</p>");
  }));
}

function createAdminRecord(event) {
  event.preventDefault();
  const module = event.currentTarget.dataset.adminCreate;
  const moduleConfig = adminModules()[module];
  const record = Object.fromEntries(new FormData(event.currentTarget).entries());
  if (module === "casos" && !record.id) record.id = `CAS-${Math.floor(1100 + Math.random() * 800)}`;
  if (module === "retos" && record.deadline) record.deadline = new Date(record.deadline).toLocaleDateString("es-ES");
  state.adminCreated[module] = [{ ...record, creado: "Sesión actual" }, ...(state.adminCreated[module] || [])];
  state.adminNotice = `${moduleConfig.singular[0].toUpperCase()}${moduleConfig.singular.slice(1)} creado correctamente en la demo.`;
  state.adminSearch = "";
  render();
}

function openAdminDetail(index) {
  const moduleConfig = adminModules()[state.adminModule];
  const row = filterAdminRows(adminRows(state.adminModule))[index];
  openModal(`Detalle de ${moduleConfig.singular}`, `
    <div class="admin-detail">
      ${Object.entries(row).map(([key, value]) => `<p><span class="muted">${adminLabel(moduleConfig, key)}</span><br><strong>${value}</strong></p>`).join("")}
      <div class="actions"><button class="secondary">Editar</button><button class="secondary">Duplicar</button><button class="ghost">Archivar</button></div>
    </div>`);
}

function adminLabel(moduleConfig, key) {
  return moduleConfig.columns.find(([column]) => column === key)?.[1] || key;
}

function downloadCsvSample() {
  const csv = sampleCsv();
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "muestra-compra-rapida-vitae.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function sampleCsv() {
  const rows = [
    [1, 12],
    [2, 6],
    [4, 10]
  ].map(([id, qty]) => {
    const product = data.products.find(item => item.id === id);
    return `VIT-${String(product.id).padStart(3, "0")},${product.name},${qty}`;
  });
  return `sku,producto,cantidad\n${rows.join("\n")}\n`;
}

function addSampleCsvToCart() {
  const added = parseCsvProducts(sampleCsv());
  state.lastAdded = { id: null, name: "Muestra CSV", qty: added };
  state.shopTab = "checkout";
  state.checkoutStep = "cart";
  renderShopWindow();
}

function handleCsvUpload(event) {
  event.preventDefault();
  const file = event.currentTarget.querySelector("[data-csv-file]").files[0];
  if (!file) {
    openModal("CSV requerido", "<p>Selecciona un archivo CSV para añadir productos al carrito.</p>");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const added = parseCsvProducts(String(reader.result || ""));
    if (added) {
      state.lastAdded = { id: null, name: "Compra rápida CSV", qty: added };
      state.shopTab = "checkout";
      state.checkoutStep = "cart";
      renderShopWindow();
      return;
    }
    renderShopWindow();
    openModal("CSV sin productos", "<p>No se han encontrado SKUs válidos en el archivo. Usa códigos como VIT-001, VIT-002 o VIT-004.</p>");
  };
  reader.readAsText(file);
}

function parseCsvProducts(text) {
  const skuMap = Object.fromEntries(data.products.map((product, index) => [`VIT-${String(index + 1).padStart(3, "0")}`, product.id]));
  const rows = text.split(/\r?\n/).map(row => row.trim()).filter(Boolean);
  const headers = rows.shift()?.split(",").map(value => value.trim().toLowerCase()) || [];
  const skuIndex = headers.indexOf("sku");
  const qtyIndex = headers.indexOf("cantidad");
  let added = 0;
  rows.forEach(row => {
    const columns = row.split(",").map(value => value?.trim());
    const sku = columns[skuIndex >= 0 ? skuIndex : 0];
    const qtyRaw = columns[qtyIndex >= 0 ? qtyIndex : 1];
    const productId = skuMap[sku];
    const qty = Math.max(1, Number(qtyRaw || 0));
    if (productId && qty) {
      addToCart(productId, qty);
      added += 1;
    }
  });
  return added;
}

function applyLocalFilter(activeButton) {
  const filters = activeButton.closest(".filters");
  const term = filters.querySelector("[data-local-search]")?.value.trim().toLowerCase() || "";
  const selected = activeButton.dataset.filter || "Todos";
  filters.querySelectorAll("[data-filter]").forEach(btn => btn.classList.toggle("active", btn === activeButton));

  document.querySelectorAll(".filterable").forEach(card => {
    const filterValue = card.dataset.filterValue.toLowerCase();
    const text = card.textContent.toLowerCase();
    const matchesFilter = selected === "Todos" || filterValue.includes(selected.toLowerCase());
    const matchesSearch = !term || text.includes(term);
    card.style.display = matchesFilter && matchesSearch ? "" : "none";
  });
}

function openResourceDetail(title, type) {
  if (type === "Ficha técnica") {
    openModal("", technicalSheetDetail(), "modal-card wide-modal product-sheet-modal");
    return;
  }
  if (state.section === "formacion") {
    const details = {
      "Estudio": studyDetail(),
      "Vídeo": trainingVideoDetail(),
      "Presentación": trainingPresentationDetail()
    };
    openModal("", details[type] || genericResourceDetail(title, type), "modal-card wide-modal product-sheet-modal");
    return;
  }
  if (state.section === "knowledge") {
    openModal("", knowledgeDetail(title, type), "modal-card wide-modal product-sheet-modal");
    return;
  }
  if (state.section === "marketing") {
    openModal("", marketingDetail(title, type), "modal-card wide-modal product-sheet-modal");
    return;
  }

  openModal("Detalle", genericResourceDetail(title, type));
}

function genericResourceDetail(title, type) {
  return `<p>${title} · ${type}</p><p class="muted">Detalle simulado con recursos asociados, metadatos y acciones de demostración.</p>`;
}

function openChallengeDetail(index) {
  const challenge = data.challenges[index];
  const current = challengeState(challenge, index);
  const progress = challengeProgress(challenge, index);
  const email = state.challengeEmails[index];
  openModal("", `
    <section class="challenge-detail">
      <div class="challenge-detail-hero">
        <div>
          <span class="status ${statusClass(current)}">${current}</span>
          <h2>${challenge.title}</h2>
          <p>${challenge.goal}</p>
          <div class="sheet-actions">
            ${current === "Disponible" ? `<button class="primary" data-modal-challenge-join="${index}">Inscribirme al reto</button>` : ""}
            ${current === "Inscrito" ? `<button class="primary" data-fake-progress="${index}">Registrar avance</button>` : ""}
            ${current === "Inscrito" ? `<button class="secondary" data-modal-challenge-leave="${index}">Desinscribirme</button>` : ""}
            ${email ? `<button class="secondary" data-email-detail="${index}">Ver correo</button>` : ""}
            <button class="secondary">Descargar bases</button>
          </div>
        </div>
        <div class="challenge-prize">
          <span>Recompensa</span>
          <strong>${challenge.reward}</strong>
          <small>Fecha límite ${challenge.deadline}</small>
        </div>
      </div>

      <div class="sheet-metrics">
        ${sheetMetric("Categoría", challenge.category, "☆")}
        ${sheetMetric("Duración", challenge.duration, "◎")}
        ${sheetMetric("Participantes", String(challenge.participants), "◌")}
        ${sheetMetric("Progreso", `${progress}%`, "↗")}
      </div>

      <div class="challenge-progress-block">
        <div class="section-head" style="margin:0 0 10px"><h2>Avance del reto</h2><span class="muted">${progress}% completado</span></div>
        <div class="progress"><span style="width:${progress}%"></span></div>
      </div>

      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Pasos</h3>
          <ol class="step-list">
            ${challenge.steps.map((step, stepIndex) => `<li class="${stepIndex < Math.ceil(progress / 25) ? "done" : ""}">${step}</li>`).join("")}
          </ol>
        </article>
        <article class="sheet-panel">
          <h3>Condiciones</h3>
          ${kv("Requisito", challenge.requirement)}
          ${kv("Validación", challenge.validation)}
          ${kv("Funcionamiento", "La inscripción y el avance se guardan durante esta sesión.")}
        </article>
      </div>
    </section>`, "modal-card wide-modal product-sheet-modal");

  document.querySelectorAll("[data-modal-challenge-join]").forEach(btn => btn.addEventListener("click", () => openChallengeSignup(Number(btn.dataset.modalChallengeJoin))));
  document.querySelectorAll("[data-modal-challenge-leave]").forEach(btn => btn.addEventListener("click", () => openChallengeUnsubscribe(Number(btn.dataset.modalChallengeLeave))));
  document.querySelectorAll("[data-fake-progress]").forEach(btn => btn.addEventListener("click", () => advanceChallenge(Number(btn.dataset.fakeProgress))));
  document.querySelectorAll("[data-email-detail]").forEach(btn => btn.addEventListener("click", () => openChallengeEmail(Number(btn.dataset.emailDetail))));
}

function openChallengeSignup(index) {
  const challenge = data.challenges[index];
  openModal("Confirmar inscripción", `
    <form class="form-grid signup-form" data-challenge-signup-form="${index}">
      <p class="wide muted">Confirma el correo donde quieres recibir la información del reto. Al confirmar, enviaremos el correo de inscripción.</p>
      ${kv("Reto", challenge.title)}
      ${kv("Recompensa", challenge.reward)}
      <label class="wide">
        <span>Correo de confirmación</span>
        <input type="email" value="${data.pharmacy.email}" placeholder="tu@email.com" data-signup-email required>
      </label>
      <label class="wide check-field">
        <input type="checkbox" data-signup-confirm required>
        <span>Confirmo la inscripción de ${data.pharmacy.name} en este reto.</span>
      </label>
      <div class="wide actions">
        <button class="primary">Confirmar inscripción</button>
        <button class="secondary" type="button" data-close-signup>Cancelar</button>
      </div>
    </form>`);

  document.querySelectorAll("[data-challenge-signup-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.querySelector("[data-signup-email]").value.trim();
    if (!email || !form.querySelector("[data-signup-confirm]").checked) return;
    joinChallenge(Number(form.dataset.challengeSignupForm), email);
  }));
  document.querySelectorAll("[data-close-signup]").forEach(btn => btn.addEventListener("click", closeModal));
}

async function joinChallenge(index, email) {
  state.challengeOverrides[index] = { state: "Inscrito", progress: Math.max(25, data.challenges[index].progress) };
  state.challengeEmails[index] = buildChallengeEmail(index, email);
  render();
  openChallengeEmail(index);
  await sendChallengeEmail(index);
}

function openChallengeUnsubscribe(index) {
  const challenge = data.challenges[index];
  openModal("Desinscribirse del reto", `
    <div class="unsubscribe-box">
      <p>Vas a desinscribir a <strong>${data.pharmacy.name}</strong> del reto <strong>${challenge.title}</strong>.</p>
      <p class="muted">Se perderá el avance demo de esta sesión y el reto volverá a estar disponible para inscripción.</p>
      <div class="actions">
        <button class="primary" data-confirm-unsubscribe="${index}">Confirmar desinscripción</button>
        <button class="secondary" data-close-unsubscribe>Cancelar</button>
      </div>
    </div>`);

  document.querySelectorAll("[data-confirm-unsubscribe]").forEach(btn => btn.addEventListener("click", () => unsubscribeChallenge(Number(btn.dataset.confirmUnsubscribe))));
  document.querySelectorAll("[data-close-unsubscribe]").forEach(btn => btn.addEventListener("click", closeModal));
}

function unsubscribeChallenge(index) {
  state.challengeOverrides[index] = { state: "Disponible", progress: 0 };
  delete state.challengeEmails[index];
  render();
  openModal("Desinscripción confirmada", `
    <p>${data.pharmacy.name} ya no está inscrita en <strong>${data.challenges[index].title}</strong>.</p>
    <div class="actions" style="margin-top:16px">
      <button class="primary" data-reopen-available-challenge="${index}">Ver reto disponible</button>
    </div>`);
  document.querySelectorAll("[data-reopen-available-challenge]").forEach(btn => btn.addEventListener("click", () => openChallengeDetail(Number(btn.dataset.reopenAvailableChallenge))));
}

function advanceChallenge(index) {
  const currentProgress = challengeProgress(data.challenges[index], index);
  const nextProgress = Math.min(100, currentProgress + 25);
  state.challengeOverrides[index] = {
    state: nextProgress >= 100 ? "Pendiente validación" : "Inscrito",
    progress: nextProgress
  };
  render();
  openChallengeDetail(index);
}

function buildChallengeEmail(index, recipient = data.pharmacy.email) {
  const challenge = data.challenges[index];
  return {
    to: recipient,
    from: "retos@vitae.com",
    subject: `Inscripción confirmada: ${challenge.title}`,
    provider: "SMTP",
    status: "Enviando",
    error: "",
    createdAt: new Date().toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" }),
    preheader: `${data.pharmacy.name} ya participa en ${challenge.title}. Recompensa: ${challenge.reward}.`,
    challenge
  };
}

function openChallengeEmail(index) {
  const email = state.challengeEmails[index] || buildChallengeEmail(index);
  state.challengeEmails[index] = email;
  openModal("", `
    <section class="email-confirmation">
      <div class="email-meta-panel">
        <div>
          <span class="status ${email.status === "Error de envío" ? "danger" : email.status === "Enviado" ? "" : "warn"}">${email.status}</span>
          <h2>Confirmación de inscripción</h2>
          <p class="muted">${email.status === "Enviado" ? "El correo de inscripción se ha enviado correctamente." : email.status === "Error de envío" ? `No se ha podido enviar el correo: ${email.error}` : "Estamos enviando el correo de inscripción."}</p>
        </div>
        <div class="email-routing">
          ${kv("Para", email.to)}
          ${kv("Asunto", email.subject)}
          ${kv("Estado", email.status)}
        </div>
      </div>
      ${challengeEmailMarkup(email)}
      <div class="sheet-actions email-actions">
        <button class="primary" data-open-challenge-after-mail="${index}">Ir al reto</button>
        <button class="secondary" data-copy-email-subject="${index}">Copiar asunto</button>
      </div>
    </section>`, "modal-card wide-modal product-sheet-modal");

  document.querySelectorAll("[data-open-challenge-after-mail]").forEach(btn => btn.addEventListener("click", () => openChallengeDetail(Number(btn.dataset.openChallengeAfterMail))));
  document.querySelectorAll("[data-copy-email-subject]").forEach(btn => btn.addEventListener("click", () => {
    const item = state.challengeEmails[Number(btn.dataset.copyEmailSubject)];
    navigator.clipboard?.writeText(item.subject);
    btn.textContent = "Asunto copiado";
  }));
}

async function sendChallengeEmail(index) {
  const email = state.challengeEmails[index];
  if (!email) return;

  email.status = "Enviando";
  email.error = "";

  try {
    const response = await fetch("send-order-email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email.to,
        subject: email.subject,
        body: challengeEmailText(email)
      })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "No se pudo enviar");
    email.status = "Enviado";
  } catch (error) {
    email.status = "Error de envío";
    email.error = error.message;
  }

  openChallengeEmail(index);
}

function challengeEmailText(email) {
  const challenge = email.challenge;
  const steps = challenge.steps.map(step => `- ${step}`).join("\n");
  return `Hola ${data.pharmacy.owner},

Hemos confirmado la inscripción de ${data.pharmacy.name} en el reto ${challenge.title}. Ya podéis empezar a completar los pasos y registrar las evidencias desde el portal.

Objetivo:
${challenge.goal}

Recompensa: ${challenge.reward}
Fecha límite: ${challenge.deadline}
Duración: ${challenge.duration}
Categoría: ${challenge.category}
Validación: ${challenge.validation}

Pasos para completar el reto:
${steps}

Requisito principal:
${challenge.requirement}`;
}

function challengeEmailMarkup(email) {
  const challenge = email.challenge;
  return `
    <article class="email-preview" aria-label="Vista previa de correo">
      <div class="email-preheader">${email.preheader}</div>
      <div class="email-hero">
        <div>
          <span>VITAE RETOS</span>
          <h3>Tu farmacia ya está inscrita</h3>
          <p>${challenge.goal}</p>
        </div>
        <strong>${challenge.reward}</strong>
      </div>
      <div class="email-body">
        <p>Hola ${data.pharmacy.owner},</p>
        <p>Hemos confirmado la inscripción de <strong>${data.pharmacy.name}</strong> en el reto <strong>${challenge.title}</strong>. Ya podéis empezar a completar los pasos y registrar las evidencias desde el portal.</p>
        <div class="email-info-grid">
          <div><span>Fecha límite</span><strong>${challenge.deadline}</strong></div>
          <div><span>Duración</span><strong>${challenge.duration}</strong></div>
          <div><span>Categoría</span><strong>${challenge.category}</strong></div>
          <div><span>Validación</span><strong>${challenge.validation}</strong></div>
        </div>
        <h4>Pasos para completar el reto</h4>
        <ol>
          ${challenge.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
        <div class="email-callout">
          <strong>Requisito principal</strong>
          <span>${challenge.requirement}</span>
        </div>
        <a class="email-cta" href="#">Entrar al portal y continuar</a>
      </div>
    </article>`;
}

function studyDetail() {
  return `
    <section class="product-sheet">
      ${detailHero("Estudio clínico · Cardiovascular", "Omega Pro y perfil lipídico", "Resumen ejecutivo de un estudio ficticio para apoyar el consejo farmacéutico sobre suplementación con omega 3 de alta concentración.", "study")}
      <div class="sheet-metrics">
        ${sheetMetric("Muestra", "184 pacientes", "◌")}
        ${sheetMetric("Duración", "12 semanas", "◎")}
        ${sheetMetric("Lectura", "8 min", "◇")}
        ${sheetMetric("Nivel", "Avanzado", "↗")}
      </div>
      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Objetivo del estudio</h3>
          <p>Evaluar la evolución de marcadores cardiovasculares en adultos con hábitos de vida mejorables tras incorporar una pauta diaria de omega 3.</p>
          <div class="callout">Contenido demostrativo: no representa resultados clínicos reales.</div>
        </article>
        <article class="sheet-panel">
          <h3>Resultados clave</h3>
          <div class="evidence-row"><strong>78%</strong><span>mejora declarada de adherencia a la pauta</span></div>
          <div class="evidence-row"><strong>61%</strong><span>mayor comprensión del beneficio tras consejo</span></div>
          <div class="evidence-row"><strong>4.6</strong><span>valoración media del material por farmacéuticos</span></div>
        </article>
        <article class="sheet-panel">
          <h3>Aplicación en mostrador</h3>
          <ul class="check-list">
            <li>Identificar objetivo del cliente antes de recomendar.</li>
            <li>Explicar continuidad mínima y pauta diaria.</li>
            <li>Ofrecer material de apoyo para reforzar adherencia.</li>
          </ul>
        </article>
        <article class="sheet-panel">
          <h3>Documentos</h3>
          <div class="download-list">
            <button class="secondary">Resumen ejecutivo</button>
            <button class="secondary">Bibliografía simulada</button>
            <button class="secondary">Infografía para equipo</button>
          </div>
        </article>
      </div>
    </section>`;
}

function trainingVideoDetail() {
  return `
    <section class="product-sheet">
      ${detailHero("Vídeo formativo · Digestivo", "Cápsula Probiovance", "Microformación para explicar microbiota, recomendación activa y preguntas frecuentes en mostrador.", "video")}
      <div class="media-stage">
        <div class="video-frame"><div class="play-button">▶</div><span>04:35</span></div>
        <div class="media-side">
          ${sheetMetric("Progreso", "0%", "◌")}
        ${sheetMetric("Duración", "4 min", "◎")}
          ${sheetMetric("Test", "5 preguntas", "◇")}
        </div>
      </div>
      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Capítulos</h3>
          <ol class="step-list">
            <li>Contexto de recomendación digestiva</li>
            <li>Argumentos de producto y pauta</li>
            <li>Objeciones frecuentes del cliente</li>
            <li>Test rápido de comprensión</li>
          </ol>
        </article>
        <article class="sheet-panel">
          <h3>Material asociado</h3>
          <p>Incluye guion para formación interna, resumen para mostrador y test de validación ficticio.</p>
          <div class="sheet-actions"><button class="primary">Iniciar vídeo</button><button class="secondary">Descargar guion</button></div>
        </article>
      </div>
    </section>`;
}

function trainingPresentationDetail() {
  return `
    <section class="product-sheet">
      ${detailHero("Presentación · Mostrador", "Recomendación activa", "Deck interno para alinear al equipo en detección de necesidad, argumentario y seguimiento del cliente.", "presentation")}
      <div class="slides-preview">
        ${["Necesidad", "Producto", "Consejo", "Cierre"].map((slide, index) => `<div class="slide-mini"><strong>${index + 1}</strong><span>${slide}</span></div>`).join("")}
      </div>
      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Objetivos de aprendizaje</h3>
          <ul class="check-list">
            <li>Detectar oportunidades de recomendación sin forzar la venta.</li>
            <li>Construir una explicación breve y consistente.</li>
            <li>Registrar dudas frecuentes del equipo.</li>
          </ul>
        </article>
        <article class="sheet-panel">
          <h3>Acciones</h3>
          <div class="download-list">
            <button class="primary">Abrir presentación</button>
            <button class="secondary">Descargar PPT demo</button>
            <button class="secondary">Enviar al equipo</button>
          </div>
        </article>
      </div>
    </section>`;
}

function knowledgeDetail(title, type) {
  const meta = {
    "Artículo": ["Lectura", "6 min", "articulo"],
    "Webinar": ["Duración", "42 min", "webinar"],
    "Podcast": ["Audio", "18 min", "podcast"],
    "Estudio": ["Lectura", "10 min", "study"]
  }[type] || ["Recurso", "Disponible", "articulo"];

  return `
    <section class="product-sheet">
      ${detailHero(`${type} · Knowledge`, title, "Contenido editorial para mantenerse al día en suplementación, evidencia aplicada y consejo farmacéutico.", meta[2])}
      <div class="sheet-metrics">
        ${sheetMetric(meta[0], meta[1], "◎")}
        ${sheetMetric("Categoría", "Bienestar", "◇")}
        ${sheetMetric("Publicado", "Mayo 2026", "◌")}
        ${sheetMetric("Valoracion", "4.8/5", "☆")}
      </div>
      ${type === "Podcast" ? `<div class="audio-wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>` : ""}
      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Resumen</h3>
          <p>Contenido preparado para consulta rápida, con ideas clave, contexto científico simplificado y recomendaciones aplicables al día a día de la farmacia.</p>
        </article>
        <article class="sheet-panel">
          <h3>Ideas clave</h3>
          <ul class="check-list">
            <li>Qué necesidad del cliente ayuda a resolver.</li>
            <li>Cómo explicarlo en un lenguaje cercano.</li>
            <li>Qué materiales relacionados conviene revisar después.</li>
          </ul>
        </article>
        <article class="sheet-panel">
          <h3>Contenido relacionado</h3>
          <div class="download-list">
            <button class="secondary">Guardar en biblioteca</button>
            <button class="secondary">Ver bibliografía</button>
            <button class="secondary">Compartir con equipo</button>
          </div>
        </article>
        <article class="sheet-panel">
          <h3>Progreso</h3>
          <p class="muted">Marcado como pendiente para el equipo de Farmacia Alameda.</p>
          <div class="progress" style="margin-top:14px"><span style="width:36%"></span></div>
        </article>
      </div>
    </section>`;
}

function marketingDetail(title, type) {
  return `
    <section class="product-sheet">
      ${detailHero(`${type} · Marketing`, title, "Repositorio visual para activar campañas, escaparate, redes sociales y recomendación en mostrador con materiales listos para usar.", "marketing")}
      <div class="campaign-gallery">
        ${["Escaparate", "Mostrador", "Redes", "Pantalla"].map(label => `<div class="asset-tile"><strong>${label}</strong><span>${type}</span></div>`).join("")}
      </div>
      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Uso recomendado</h3>
          <p>Campaña de activación durante 3 semanas con foco en visibilidad de producto, conversación en mostrador y refuerzo visual en zonas de tránsito.</p>
          <div class="callout">Todos los archivos son recursos de ejemplo para la demo.</div>
        </article>
        <article class="sheet-panel">
          <h3>Archivos incluidos</h3>
          <div class="download-list">
            <button class="secondary">Pack imágenes</button>
            <button class="secondary">Vídeo vertical</button>
            <button class="secondary">Guía de campaña</button>
          </div>
        </article>
        <article class="sheet-panel">
          <h3>Metadatos</h3>
          ${kv("Producto", title.includes("Digestivo") ? "Probiovance" : title.includes("Sueño") ? "Sueño Natural" : "Magnesio Plus")}
          ${kv("Formato", type)}
          ${kv("Vigencia", "Junio - Julio 2026")}
        </article>
        <article class="sheet-panel">
          <h3>Checklist de activación</h3>
          <ul class="check-list">
            <li>Descargar materiales de escaparate.</li>
            <li>Asignar responsable de campaña.</li>
            <li>Registrar evidencia visual para reto asociado.</li>
          </ul>
        </article>
      </div>
    </section>`;
}

function detailHero(label, title, description, variant) {
  return `
    <div class="sheet-hero detail-hero ${variant}">
      <div class="sheet-copy">
        <span class="status">${label}</span>
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="sheet-actions">
          <button class="primary">${variant === "video" || variant === "webinar" || variant === "podcast" ? "Reproducir" : "Abrir recurso"}</button>
          <button class="secondary">Guardar</button>
          <button class="ghost">Compartir</button>
        </div>
      </div>
      <div class="detail-visual" aria-hidden="true">
        <div class="detail-symbol">${variant === "video" || variant === "webinar" ? "▶" : variant === "presentation" ? "▤" : variant === "marketing" ? "◩" : variant === "podcast" ? "≋" : "◆"}</div>
      </div>
    </div>`;
}

function technicalSheetDetail() {
  return `
    <section class="product-sheet">
      <div class="sheet-hero">
        <div class="sheet-copy">
          <span class="status">Ficha técnica · Articulaciones</span>
          <h2>Oseogen Articular</h2>
          <p>Complemento alimenticio de recomendación farmacéutica orientado al cuidado articular, movilidad diaria y mantenimiento del tejido conectivo.</p>
          <div class="sheet-actions">
            <button class="primary">Descargar ficha PDF</button>
            <button class="secondary">Añadir a formación</button>
            <button class="ghost">Compartir con equipo</button>
          </div>
        </div>
        <div class="sheet-packshot" aria-label="Envase simulado de Oseogen Articular">
          <div class="pack-card">
            <span>VITAE</span>
            <strong>Oseogen</strong>
            <small>Articular</small>
          </div>
          <div class="pack-shadow"></div>
        </div>
      </div>

      <div class="sheet-metrics">
        ${sheetMetric("Formato", "60 cápsulas", "◌")}
        ${sheetMetric("CN demo", "204681.5", "◇")}
        ${sheetMetric("Pauta", "2 al día", "◎")}
        ${sheetMetric("Rotación", "Alta", "↗")}
      </div>

      <div class="sheet-grid">
        <article class="sheet-panel">
          <h3>Beneficio principal</h3>
          <p>Apoyo nutricional para clientes que buscan mantener la movilidad y el confort articular dentro de una rutina activa.</p>
          <ul class="check-list">
            <li>Enfoque en articulaciones, cartílago y tejido conectivo.</li>
            <li>Perfil adecuado para recomendación estacional o continuada.</li>
            <li>Argumentario claro para consejo en mostrador.</li>
          </ul>
        </article>
        <article class="sheet-panel composition-panel">
          <h3>Composición destacada</h3>
          <div class="ingredient"><span>Colágeno tipo II</span><strong>40 mg</strong></div>
          <div class="ingredient"><span>Ácido hialurónico</span><strong>80 mg</strong></div>
          <div class="ingredient"><span>Vitamina C</span><strong>80 mg</strong></div>
          <div class="ingredient"><span>Manganeso</span><strong>1 mg</strong></div>
        </article>
        <article class="sheet-panel">
          <h3>Recomendación farmacéutica</h3>
          <p>Proponer en clientes con demanda de movilidad, deportistas ocasionales, personas con actividad laboral física o usuarios interesados en prevención articular.</p>
          <div class="callout">Mensaje clave: continuidad durante 8-12 semanas para valorar evolución percibida.</div>
        </article>
        <article class="sheet-panel">
          <h3>Evidencia y soporte</h3>
          <div class="evidence-row"><strong>3</strong><span>estudios de soporte disponibles</span></div>
          <div class="evidence-row"><strong>92%</strong><span>comprensión del argumento tras formación demo</span></div>
          <div class="evidence-row"><strong>4 min</strong><span>cápsula formativa asociada</span></div>
        </article>
      </div>

      <div class="sheet-grid lower">
        <article class="sheet-panel">
          <h3>Modo de empleo</h3>
          <p>Tomar 2 cápsulas al día, preferiblemente con una comida principal. No superar la dosis diaria expresamente recomendada.</p>
        </article>
        <article class="sheet-panel">
          <h3>Precauciones</h3>
          <p>Consultar en embarazo, lactancia, tratamiento anticoagulante o patologías crónicas. Mantener fuera del alcance de los niños.</p>
        </article>
        <article class="sheet-panel">
          <h3>Materiales relacionados</h3>
          <div class="download-list">
            <button class="secondary">Ficha técnica</button>
            <button class="secondary">Estudio clínico</button>
            <button class="secondary">Argumentario mostrador</button>
          </div>
        </article>
      </div>
    </section>`;
}

function sheetMetric(label, value, icon) {
  return `<div class="sheet-metric"><span>${icon}</span><small>${label}</small><strong>${value}</strong></div>`;
}

function modalByType(type) {
  const content = {
    account: `<form class="form-grid" data-fake-form><input placeholder="Campo a modificar"><input placeholder="Nuevo valor"><textarea class="wide" placeholder="Motivo de la solicitud"></textarea><button class="primary">Enviar solicitud</button></form>`,
    resource: `<p>Vista de detalle con resumen, metadatos, recursos descargables ficticios y progreso de formación simulado.</p><div class="progress"><span style="width:64%"></span></div>`,
    checkout: checkoutContent(),
    admin: `<p>Panel de edición visual con tablas, filtros, estados y acciones simuladas para la demostración interna.</p>`
  };
  openModal(type === "checkout" ? "Checkout simulado" : "Detalle", content[type]);
}

function checkoutContent() {
  const step = state.checkoutStep;
  return `
    <div class="checkout-steps">
      ${checkoutStepButton("cart", "Carrito")}
      ${checkoutStepButton("address", "Dirección")}
      ${checkoutStepButton("payment", "Pago")}
      ${checkoutStepButton("confirm", "Confirmación")}
    </div>
    <div class="checkout-body">
      ${checkoutStepContent(step)}
    </div>`;
}

function checkoutStepButton(step, label) {
  return `<button class="${state.checkoutStep === step ? "active" : ""}" data-checkout-step="${step}">${label}</button>`;
}

function checkoutStepContent(step) {
  if (step === "address") {
    return `
      <div class="checkout-panel">
        <h3>Dirección de envío</h3>
        <div class="checkout-options">
          ${data.pharmacy.shipping.map((address, index) => `
            <label class="checkout-option">
              <input type="radio" name="shipping-address" ${index === 0 ? "checked" : ""}>
              <span><strong>${address}</strong><small>Entrega estimada 24-48 h</small></span>
            </label>`).join("")}
        </div>
        <form class="form-grid checkout-form">
          <input placeholder="Contacto de recepción" value="Clara Vives">
          <input placeholder="Teléfono" value="+34 600 000 000">
          <textarea class="wide" placeholder="Observaciones de entrega">Horario preferente: mañana.</textarea>
        </form>
        ${checkoutActions("cart", "payment", "Volver al carrito", "Continuar a pago")}
      </div>`;
  }
  if (step === "payment") {
    return `
      <div class="checkout-panel">
        <h3>Pago</h3>
        <div class="checkout-options">
          <label class="checkout-option">
            <input type="radio" name="payment-method" checked>
            <span><strong>${data.pharmacy.billing}</strong><small>Forma de pago habitual de la farmacia</small></span>
          </label>
          <label class="checkout-option">
            <input type="radio" name="payment-method">
            <span><strong>Transferencia bancaria</strong><small>Pedido retenido hasta validación ficticia</small></span>
          </label>
        </div>
        <div class="checkout-summary">
          ${kv("Unidades", String(cartUnits()))}
          ${kv("Importe estimado", euro(cartTotal()))}
          ${kv("Descuento aplicado", "Tarifa B2B demo")}
        </div>
        ${checkoutActions("address", "confirm", "Volver a dirección", "Revisar pedido")}
      </div>`;
  }
  if (step === "confirm") {
    return `
      <div class="checkout-panel">
        <h3>Confirmación</h3>
        <p class="muted">Revisa el pedido antes de confirmar. Esta acción solo completa la demo y no genera un pedido real.</p>
        ${state.cart.length ? table(["Producto","Cantidad","Precio","Subtotal"], cartRows()) : "<p class='muted'>El carrito está vacío.</p>"}
        <div class="checkout-summary">
          ${kv("Entrega", data.pharmacy.shipping[0])}
          ${kv("Pago", data.pharmacy.billing)}
          ${kv("Total", euro(cartTotal()))}
        </div>
        <div class="actions" style="margin-top:16px">
          <button class="secondary" data-checkout-step="payment">Volver a pago</button>
          <button class="primary" onclick="completeCheckout()" ${state.cart.length ? "" : "disabled"}>Confirmar pedido</button>
        </div>
      </div>`;
  }
  return `
    <div class="checkout-panel">
      <h3>Carrito</h3>
      <p>Resumen del pedido demo: ${cartUnits()} ${cartUnits() === 1 ? "unidad" : "unidades"} por ${euro(cartTotal())}.</p>
      ${state.cart.length ? table(["Producto","Cantidad","Precio","Subtotal"], cartRows()) : "<p class='muted'>El carrito está vacío.</p>"}
      <div class="actions" style="margin-top:16px">
        <button class="secondary">Guardar borrador</button>
        <button class="primary" data-checkout-step="address" ${state.cart.length ? "" : "disabled"}>Continuar a dirección</button>
      </div>
    </div>`;
}

function checkoutActions(previous, next, previousLabel, nextLabel) {
  return `
    <div class="actions" style="margin-top:16px">
      <button class="secondary" data-checkout-step="${previous}">${previousLabel}</button>
      <button class="primary" data-checkout-step="${next}" ${state.cart.length ? "" : "disabled"}>${nextLabel}</button>
    </div>`;
}

function openModal(title, body, cardClass = "modal-card") {
  const modal = el("modal");
  modal.className = "modal open";
  modal.setAttribute("aria-hidden", "false");
  modal.innerHTML = `<div class="${cardClass}"><div class="modal-head">${title ? `<h2>${title}</h2>` : "<span></span>"}<button class="icon-btn" data-close>×</button></div>${body}</div>`;
  modal.querySelector("[data-close]").addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); }, { once: true });
  modal.querySelectorAll("[data-fake-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    openModal("Solicitud recibida", "<p>Acción registrada dentro de la demo con datos ficticios.</p>");
  }));
  modal.querySelectorAll("[data-checkout-step]").forEach(btn => btn.addEventListener("click", () => {
    state.checkoutStep = btn.dataset.checkoutStep;
    modalByType("checkout");
  }));
}

function closeModal() {
  const modal = el("modal");
  modal.className = "modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = "";
}

function createOrderConfirmation() {
  const createdAt = new Date();
  const lines = state.cart.map(line => {
    const product = data.products.find(p => p.id === line.id);
    return {
      name: product.name,
      qty: line.qty,
      price: product.price,
      subtotal: product.price * line.qty
    };
  });
  return {
    id: `PV-2026-${String(1500 + data.orders.length + state.confirmationEmails.length + 1).padStart(4, "0")}`,
    date: createdAt.toLocaleDateString("es-ES"),
    shipping: data.pharmacy.shipping[0],
    payment: data.pharmacy.billing,
    units: cartUnits(),
    total: cartTotal(),
    lines
  };
}

function createConfirmationEmail(order) {
  const email = {
    orderId: order.id,
    to: data.pharmacy.email,
    subject: `Confirmación de pedido ${order.id}`,
    preheader: `Pedido ${order.id} confirmado por ${euro(order.total)}`,
    summary: `${order.units} unidades confirmadas por ${euro(order.total)}.`,
    createdAt: new Date().toLocaleString("es-ES"),
    status: "Pendiente de envío",
    error: ""
  };
  state.confirmationEmails.push(email);
  return email;
}

function confirmationEmailText(email, order) {
  const lines = order.lines.map(line => `- ${line.name}: ${line.qty} uds · ${euro(line.subtotal)}`).join("\n");
  return `Hola ${data.pharmacy.owner},

Hemos recibido el pedido ${order.id} de ${data.pharmacy.name}.

Resumen:
${lines}

Total: ${euro(order.total)}
Entrega: ${order.shipping}
Pago: ${order.payment}

Este mensaje se ha preparado desde la demo del portal Vitae.`;
}

function emailMailtoHref(email, order) {
  return `mailto:${encodeURIComponent(email.to)}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(confirmationEmailText(email, order))}`;
}

function downloadConfirmationEmail(orderId) {
  const order = state.orderConfirmation;
  const email = state.confirmationEmails.find(item => item.orderId === orderId);
  if (!order || !email) return;
  const eml = [
    `To: ${email.to}`,
    `Subject: ${email.subject}`,
    "Content-Type: text/plain; charset=UTF-8",
    "",
    confirmationEmailText(email, order)
  ].join("\n");
  const blob = new Blob([eml], { type: "message/rfc822;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${order.id}-confirmacion.eml`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function sendConfirmationEmailById(orderId) {
  const order = state.orderConfirmation;
  const email = state.confirmationEmails.find(item => item.orderId === orderId);
  if (!order || !email) return;

  email.status = "Enviando";
  email.error = "";
  renderShopWindow();

  try {
    const response = await fetch("send-order-email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email.to,
        subject: email.subject,
        body: confirmationEmailText(email, order)
      })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "No se pudo enviar");
    email.status = "Enviado";
  } catch (error) {
    email.status = "Error de envío";
    email.error = error.message;
  }

  renderShopWindow();
}

function completeCheckout() {
  if (!state.cart.length) {
    if (isShopWindow()) {
      state.shopTab = "checkout";
      state.checkoutStep = "cart";
      renderShopWindow();
      return;
    }
    openModal("Carrito vacío", "<p>Añade productos antes de confirmar el pedido.</p>");
    return;
  }
  const order = createOrderConfirmation();
  state.orderConfirmation = order;
  const email = createConfirmationEmail(order);
  clearSharedCart();
  state.lastAdded = null;
  state.checkoutStep = "cart";
  if (isShopWindow()) {
    state.shopTab = "confirmation";
    renderShopWindow();
    sendConfirmationEmailById(email.orderId);
    return;
  }
  openModal("Pedido finalizado", "<p>El pedido se ha completado correctamente dentro de la demo. No se ha creado ningún pedido real.</p>");
}

function filterCards(term) {
  const normalized = term.trim().toLowerCase();
  document.querySelectorAll(".searchable").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(normalized) ? "" : "none";
  });
}

init();
