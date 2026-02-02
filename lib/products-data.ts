export type Product = {
  id: string
  name: string
  line: string
  code: string
  viscosity?: string
  type: string
  description: string
  image: string
  categoryId: string
  subcategoryId: string
  tdsUrl?: string
  msdsUrl?: string
}

export type Subcategory = {
  id: string
  name: string
  categoryId: string
}

export type Category = {
  id: string
  name: string
  subcategories: Subcategory[]
}

export const categories: Category[] = [
  {
    id: "automovil",
    name: "Automóvil",
    subcategories: [
      { id: "aceites-motor-auto", name: "Aceites de motor", categoryId: "automovil" },
      { id: "transmision-manual-auto", name: "Aceite de transmisiones manuales", categoryId: "automovil" },
      { id: "transmision-auto-auto", name: "Aceite de transmisiones automáticas", categoryId: "automovil" },
      { id: "frenos-auto", name: "Líquidos de frenos y dirección", categoryId: "automovil" },
      { id: "refrigerante-auto", name: "Líquido refrigerante", categoryId: "automovil" },
      { id: "limpiaparabrisas-auto", name: "Líquido limpiaparabrisas", categoryId: "automovil" },
      { id: "mantenimiento-auto", name: "Líquidos de mantenimiento", categoryId: "automovil" },
      { id: "grasas-auto", name: "Grasas", categoryId: "automovil" },
    ]
  },
  {
    id: "camiones",
    name: "Camiones y autobuses",
    subcategories: [
      { id: "aceites-motor-cam", name: "Aceites de motor", categoryId: "camiones" },
      { id: "transmision-manual-cam", name: "Aceite de transmisiones manuales", categoryId: "camiones" },
      { id: "transmision-auto-cam", name: "Aceite de transmisiones automáticas", categoryId: "camiones" },
      { id: "hidraulicos-cam", name: "Aceites hidráulicos", categoryId: "camiones" },
      { id: "frenos-cam", name: "Líquidos de frenos y dirección", categoryId: "camiones" },
      { id: "refrigerante-cam", name: "Líquido refrigerante", categoryId: "camiones" },
      { id: "mantenimiento-cam", name: "Líquidos de mantenimiento", categoryId: "camiones" },
      { id: "grasas-cam", name: "Grasas", categoryId: "camiones" },
    ]
  },
  {
    id: "vehiculo-pesado",
    name: "Vehículo pesado",
    subcategories: [
      { id: "aceites-motor-pesado", name: "Aceites de motor", categoryId: "vehiculo-pesado" },
      { id: "transmision-manual-pesado", name: "Aceite de transmisiones manuales y ejes", categoryId: "vehiculo-pesado" },
      { id: "transmision-auto-pesado", name: "Aceite de transmisiones automáticas", categoryId: "vehiculo-pesado" },
      { id: "hidraulicos-pesado", name: "Aceites hidráulicos", categoryId: "vehiculo-pesado" },
      { id: "frenos-pesado", name: "Líquidos de frenos y dirección", categoryId: "vehiculo-pesado" },
      { id: "refrigerante-pesado", name: "Líquido refrigerante", categoryId: "vehiculo-pesado" },
      { id: "limpiaparabrisas-pesado", name: "Líquido limpiaparabrisas", categoryId: "vehiculo-pesado" },
      { id: "mantenimiento-pesado", name: "Líquidos de mantenimiento", categoryId: "vehiculo-pesado" },
      { id: "diferencial_pesado", name: "Aceite para diferenciales", categoryId: "vehiculo-pesado" },
      { id: "grasas-pesado", name: "Grasas", categoryId: "vehiculo-pesado" },
    ]
  },
  {
    id: "motocicleta",
    name: "Motocicleta",
    subcategories: [
      { id: "aceites-motor-moto", name: "Aceites de motor", categoryId: "motocicleta" },
      { id: "transmision-moto", name: "Aceite de transmisiones manuales y ejes", categoryId: "motocicleta" },
      { id: "transmision-automatica-moto", name: "Aceite de transmisión automática (CVT)", categoryId: "motocicleta" },
      { id: "frenos-moto", name: "Líquidos de frenos y dirección", categoryId: "motocicleta" },
      { id: "refrigerante-moto", name: "Líquido refrigerante", categoryId: "motocicleta" },
      { id: "mantenimiento-moto", name: "Líquidos de mantenimiento", categoryId: "motocicleta" },
      { id: "grasas-moto", name: "Grasas", categoryId: "motocicleta" },
      { id: "horquilla", name: "Aceite de horquilla", categoryId: "motocicleta" },
      
    ]
  },
  {
    id: "otros",
    name: "Otros",
    subcategories: [
      { id: "grasas-otros", name: "Grasas", categoryId: "otros" },
      { id: "aceite-compresora", name: "Aceite para compresoras", categoryId: "otros"},
    ]
  },
]

export const products: Product[] = [
  // AUTOMÓVIL - Aceites de motor
  /* ========== AUTOMÓVIL – ACEITES MOTOR ========== */
{ id: "1", name: "Full Synthetic", line: "GASOLINERO", code: "APL-GAS-530", viscosity: "5W-30", type: "Sintético", description: "Aceite full sintético API SP.", image: "/images/products/APL-GAS-530.png", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "2", name: "Full Synthetic", line: "GASOLINERO", code: "APL-GAS-540", viscosity: "5W-40", type: "Sintético", description: "Protección superior para motores modernos.", image: "/images/products/APL-GAS-540.png", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "3", name: "Semi Synthetic", line: "GASOLINERO", code: "APL-GAS-1030", viscosity: "10W-30", type: "Semi-sintético", description: "Motor gasolina alto rendimiento.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "4", name: "Semi Synthetic", line: "GASOLINERO", code: "APL-GAS-2050", viscosity: "20W-50", type: "Semi-sintético", description: "Motores de alto kilometraje.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "5", name: "Mineral", line: "GASOLINERO", code: "APL-GAS-2550", viscosity: "25W-50", type: "Mineral", description: "Uso diario en climas cálidos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "6", name: "Mineral", line: "GASOLINERO", code: "APL-GAS-2560", viscosity: "25W-60", type: "Mineral", description: "Alta viscosidad, protección reforzada.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "7", name: "Monogrado HD", line: "GASOLINERO", code: "APL-HD40", viscosity: "SAE 40", type: "Monogrado", description: "Motores estacionarios.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
{ id: "8", name: "Monogrado HD", line: "GASOLINERO", code: "APL-HD50", viscosity: "SAE 50", type: "Monogrado", description: "Alta carga térmica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },

/* ========== AUTOMÓVIL – TRANSMISIÓN MANUAL ========== */
{ id: "9", name: "Gear Oil GL-5", line: "TRANSMISION", code: "APL-GL5-7590", viscosity: "75W-90", type: "GL-5", description: "Cajas y diferenciales.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
{ id: "10", name: "Gear Oil GL-5", line: "TRANSMISION", code: "APL-GL5-8090", viscosity: "80W-90", type: "GL-5", description: "Transmisiones mecánicas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
{ id: "11", name: "Gear Oil GL-5", line: "TRANSMISION", code: "APL-GL5-85140", viscosity: "85W-140", type: "GL-5", description: "Ejes y coronas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

/* ========== AUTOMÓVIL – TRANSMISIÓN AUTOMÁTICA ========== */
{ id: "12", name: "ATF Universal", line: "TRANSMISION", code: "APL-ATF-DEX", viscosity: "DEXRON III", type: "ATF", description: "Transmisiones automáticas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-auto-auto" },
{ id: "13", name: "CVT Full Synthetic", line: "TRANSMISION", code: "APL-CVT-FS", viscosity: "CVT", type: "Sintético", description: "CVT premium.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-auto-auto" },

/* ========== AUTOMÓVIL – FRENOS ========== */
{ id: "14", name: "DOT 3", line: "FRENOS", code: "APL-DOT3", type: "DOT 3", description: "Líquido de frenos estándar.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "15", name: "DOT 4", line: "FRENOS", code: "APL-DOT4", type: "DOT 4", description: "Mayor punto de ebullición.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "16", name: "DOT 5.1", line: "FRENOS", code: "APL-DOT51", type: "DOT 5.1", description: "Alto desempeño.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },

/* ========== AUTOMÓVIL – REFRIGERANTE ========== */
{ id: "17", name: "Refrigerante Verde", line: "COOLANT", code: "APL-COOL-33", type: "33%", description: "Climatizado verde.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
{ id: "18", name: "Refrigerante Rojo", line: "COOLANT", code: "APL-COOL-50", type: "50%", description: "Anticongelante.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },

/* ========== AUTOMÓVIL – GRASAS ========== */
{ id: "19", name: "Litio Azul", line: "GRASAS", code: "APL-LIT-AZ", type: "NLGI 2", description: "Grasa multipropósito.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "grasas-auto" },
{ id: "20", name: "Chasis Roja", line: "GRASAS", code: "APL-CHA-ROJ", type: "NLGI 2", description: "Grasa para chasis.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "grasas-auto" },

/* ========== CAMIONES – DIESEL ========== */
{ id: "21", name: "Diesel CI-4", line: "DIESEL", code: "APL-DIE-1540", viscosity: "15W-40", type: "Mineral", description: "Motores diesel.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },
{ id: "22", name: "Diesel 25W60", line: "DIESEL", code: "APL-DIE-2560", viscosity: "25W-60", type: "Mineral", description: "Trabajo pesado.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },

/* ========== CAMIONES – HIDRÁULICO ========== */
{ id: "23", name: "Hidráulico 68", line: "HIDRAULICO", code: "APL-HID-68", type: "ISO 68", description: "Sistemas hidráulicos.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "hidraulicos-cam" },

/* ========== CAMIONES – TRANSMISIÓN ========== */
{ id: "24", name: "Gear Oil 80W90", line: "TRANSMISION", code: "APL-CAM-8090", viscosity: "80W-90", type: "GL-5", description: "Cajas pesadas.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "transmision-manual-cam" },

/* ========== CAMIONES – ATF ========== */
{ id: "25", name: "ATF Mercon V", line: "TRANSMISION", code: "APL-MERCON-V", type: "ATF", description: "Automáticas pesadas.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "transmision-auto-cam" },

/* ========== CAMIONES – FRENOS ========== */
{ id: "26", name: "DOT 4 Camiones", line: "FRENOS", code: "APL-CAM-DOT4", type: "DOT 4", description: "Uso pesado.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "frenos-cam" },

/* ========== CAMIONES – REFRIGERANTE ========== */
{ id: "27", name: "Refrigerante Verde HD", line: "COOLANT", code: "APL-CAM-33", type: "33%", description: "Motores pesados.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "refrigerante-cam" },

/* ========== CAMIONES – GRASAS ========== */
{ id: "28", name: "Grasa Litio Azul HD", line: "GRASAS", code: "APL-CAM-LIT", type: "NLGI 2", description: "Alta carga.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "grasas-cam" },

/* ========== LIMPIEZA AUTO ========== */
{ id: "29", name: "Silicona White", line: "MANTENIMIENTO", code: "APL-SIL-W", type: "Brillo", description: "Protección plásticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "30", name: "Shampoo con Cera", line: "MANTENIMIENTO", code: "APL-SHAM-C", type: "Limpieza", description: "Lavado automotriz.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
/* ========== AUTOMÓVIL – MANTENIMIENTO ========== */
{ id: "31", name: "Abrillantador de Llantas", line: "MANTENIMIENTO", code: "APL-LLANT-BR", type: "Brillo", description: "Da brillo intenso a neumáticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "32", name: "Limpia Parabrisas", line: "MANTENIMIENTO", code: "APL-LIMP-PB", type: "Limpieza", description: "Visión clara sin residuos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "limpiaparabrisas-auto" },
{ id: "33", name: "Removedor de Óxido", line: "MANTENIMIENTO", code: "APL-REM-OX", type: "Químico", description: "Elimina corrosión.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "34", name: "Limpiador de Frenos", line: "TÉCNICA", code: "APL-LIMP-FREN", type: "Spray", description: "Elimina grasa en discos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "35", name: "Limpia Contactos", line: "TÉCNICA", code: "APL-CONTACT", type: "Spray", description: "Limpieza electrónica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "36", name: "Aflojatodo", line: "TÉCNICA", code: "APL-AFLOJA", type: "Spray", description: "Lubricante penetrante.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "37", name: "Lubricante de Cadenas", line: "TÉCNICA", code: "APL-CAD-LUB", type: "Spray", description: "Protege y lubrica cadenas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "38", name: "Desengrasante de Cadenas", line: "TÉCNICA", code: "APL-CAD-DES", type: "Spray", description: "Elimina suciedad pesada.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "39", name: "Limpiador de Carburador", line: "TÉCNICA", code: "APL-CARB", type: "Spray", description: "Restaura carburadores.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "40", name: "Alcohol Isopropílico", line: "TÉCNICA", code: "APL-ISO", type: "Solvente", description: "Limpieza eléctrica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== VEHÍCULO PESADO – ACEITES MOTOR ========== */
{ id: "41", name: "Diesel CI-4", line: "PESADO", code: "APL-PES-1540", viscosity: "15W-40", type: "Mineral", description: "Motores pesados.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "aceites-motor-pesado" },
{ id: "42", name: "Diesel 25W60", line: "PESADO", code: "APL-PES-2560", viscosity: "25W-60", type: "Mineral", description: "Alta carga térmica.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "aceites-motor-pesado" },

/* ========== VEHÍCULO PESADO – TRANSMISIÓN ========== */
{ id: "43", name: "Gear Oil GL-5", line: "PESADO", code: "APL-PES-8090", viscosity: "80W-90", type: "GL-5", description: "Cajas pesadas.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "transmision-manual-pesado" },
{ id: "44", name: "Gear Oil GL-5", line: "PESADO", code: "APL-PES-85140", viscosity: "85W-140", type: "GL-5", description: "Ejes y coronas.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "transmision-manual-pesado" },

/* ========== VEHÍCULO PESADO – HIDRÁULICOS ========== */
{ id: "45", name: "Hidráulico 68", line: "PESADO", code: "APL-PES-H68", type: "ISO 68", description: "Sistemas hidráulicos.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "hidraulicos-pesado" },

/* ========== VEHÍCULO PESADO – FRENOS ========== */
{ id: "46", name: "DOT 4 HD", line: "PESADO", code: "APL-PES-DOT4", type: "DOT 4", description: "Uso industrial.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "frenos-pesado" },

/* ========== VEHÍCULO PESADO – REFRIGERANTE ========== */
{ id: "47", name: "Refrigerante Rojo HD", line: "PESADO", code: "APL-PES-50", type: "50%", description: "Motores industriales.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "refrigerante-pesado" },

/* ========== VEHÍCULO PESADO – GRASAS ========== */
{ id: "48", name: "Grasa N°2", line: "PESADO", code: "APL-GRA-2", type: "NLGI 2", description: "Multipropósito.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "grasas-pesado" },
{ id: "49", name: "Grasa N°3", line: "PESADO", code: "APL-GRA-3", type: "NLGI 3", description: "Alta presión.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "grasas-pesado" },

/* ========== MOTOCICLETA – ACEITES MOTOR ========== */
{ id: "50", name: "Super 4T", line: "MOTO", code: "APL-MOTO-1030", viscosity: "10W-30", type: "Mineral", description: "Motores 4T.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
{ id: "51", name: "Super 4T", line: "MOTO", code: "APL-MOTO-2040", viscosity: "20W-50", type: "Mineral", description: "Protección reforzada.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
{ id: "52", name: "Full Synthetic 4T", line: "MOTO", code: "APL-MOTO-1040", viscosity: "10W-40", type: "Sintético", description: "Motores alto desempeño.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
{ id: "53", name: "Semi Synthetic 4T", line: "MOTO", code: "APL-MOTO-1550", viscosity: "15W-50", type: "Semi-sintético", description: "Protección diaria.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },

/* ========== MOTOCICLETA – TRANSMISIÓN ========== */
{ id: "54", name: "Gear Moto", line: "MOTO", code: "APL-MOTO-GEAR", viscosity: "80W-90", type: "GL-4", description: "Cajas moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "transmision-moto" },

/* ========== MOTOCICLETA – FRENOS ========== */
{ id: "55", name: "DOT 4 Moto", line: "MOTO", code: "APL-MOTO-DOT4", type: "DOT 4", description: "Frenos moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "frenos-moto" },

/* ========== MOTOCICLETA – REFRIGERANTE ========== */
{ id: "56", name: "Coolant Moto", line: "MOTO", code: "APL-MOTO-COOL", type: "33%", description: "Refrigeración moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "refrigerante-moto" },

/* ========== MOTOCICLETA – GRASAS ========== */
{ id: "57", name: "Grasa Litio Moto", line: "MOTO", code: "APL-MOTO-LIT", type: "NLGI 2", description: "Rodajes y ejes.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "grasas-moto" },

/* ========== OTROS – COMPRESOR ========== */
{ id: "58", name: "Aceite Compresor AO", line: "INDUSTRIAL", code: "APL-COMP-AO", type: "ISO 68", description: "Compresores.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "aceite-compresora" },

/* ========== OTROS – GRASAS ========== */
{ id: "59", name: "Grasa Universal", line: "GENERAL", code: "APL-GRA-UNI", type: "Multiuso", description: "Uso general.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== DETAILING ========== */
{ id: "60", name: "Shampoo XTREME", line: "XTREME", code: "APL-X-SHAM", type: "Limpieza", description: "Shampoo concentrado.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "61", name: "Cera XTREME", line: "XTREME", code: "APL-X-CERA", type: "Protección", description: "Cera cerámica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "62", name: "Renovador Neumáticos", line: "XTREME", code: "APL-X-NEU", type: "Brillo", description: "Brillo duradero.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== ACCESORIOS ========== */
{ id: "63", name: "Esponja Aplicadora", line: "ACCESORIOS", code: "APL-ACC-ESP", type: "Accesorio", description: "Aplicación ceras.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "64", name: "Microfibra", line: "ACCESORIOS", code: "APL-ACC-MIC", type: "Accesorio", description: "Paño limpieza.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
  
 /* ========== DETAILING / LIMPIEZA PROFESIONAL ========== */
{ id: "65", name: "Vision Clara", line: "DETAIL", code: "APL-DET-VC", type: "Limpiavidrios", description: "Limpia cristales sin vetas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "66", name: "Limpia Tapices Espuma", line: "DETAIL", code: "APL-DET-TAP", type: "Espuma", description: "Limpieza profunda de asientos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "67", name: "Exterminador de Olores", line: "DETAIL", code: "APL-DET-OLO", type: "Neutralizador", description: "Elimina malos olores.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "68", name: "Protector Interiores Mate", line: "DETAIL", code: "APL-DET-INT", type: "Protector", description: "Protección sin brillo.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "69", name: "Limpia A/C", line: "DETAIL", code: "APL-DET-AC", type: "Spray", description: "Desinfecta aire acondicionado.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "70", name: "Silicona Vainilla", line: "DETAIL", code: "APL-DET-SILV", type: "Aromático", description: "Silicona perfumada.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== LÍNEA XTREME ========== */
{ id: "71", name: "XTREME Shampoo Protect", line: "XTREME", code: "APL-X-SHP", type: "Shampoo", description: "Protección cerámica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "72", name: "XTREME Ceramic Spray", line: "XTREME", code: "APL-X-CER", type: "Coating", description: "Revestimiento cerámico.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "73", name: "XTREME Ultra Slick", line: "XTREME", code: "APL-X-SLICK", type: "Detailer", description: "Brillo extremo.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "74", name: "XTREME Vision Clara", line: "XTREME", code: "APL-X-VC", type: "Limpiavidrios", description: "Cristales perfectos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "75", name: "XTREME Protector Plásticos", line: "XTREME", code: "APL-X-PL", type: "Protector", description: "Renueva superficies.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "76", name: "XTREME Renovador Neumáticos", line: "XTREME", code: "APL-X-NEU2", type: "Gel", description: "Brillo duradero.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== LÍNEA PROFESIONAL ========== */
{ id: "77", name: "Profiline Cut Max", line: "PROFESIONAL", code: "APL-PRO-CUT", type: "Pulimento", description: "Corte alto.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "78", name: "Profiline Perfect Finish", line: "PROFESIONAL", code: "APL-PRO-FIN", type: "Pulimento", description: "Acabado fino.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "79", name: "Profiline HW 02-04", line: "PROFESIONAL", code: "APL-PRO-HW", type: "Pulimento", description: "Corte medio.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "80", name: "Profiline CC One", line: "PROFESIONAL", code: "APL-PRO-CC1", type: "Protección", description: "Sellador profesional.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== LÍNEA BIKE ========== */
{ id: "81", name: "Bike Rich Foam", line: "BIKE", code: "APL-BIKE-FOAM", type: "Shampoo", description: "Espuma para bicicletas.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "82", name: "Bike Ceramic Polish", line: "BIKE", code: "APL-BIKE-POL", type: "Pulimento", description: "Protección cerámica.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== ACCESORIOS ========== */
{ id: "83", name: "Bola de Pulido", line: "ACCESORIOS", code: "APL-ACC-BOL", type: "Accesorio", description: "Pulido ergonómico.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "84", name: "Esponja Limpia Plástico", line: "ACCESORIOS", code: "APL-ACC-PL", type: "Accesorio", description: "Limpieza profunda.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "85", name: "Microfibra Interiores", line: "ACCESORIOS", code: "APL-ACC-MIC2", type: "Accesorio", description: "Paño suave.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "86", name: "Gamuza Mediana", line: "ACCESORIOS", code: "APL-ACC-GAMM", type: "Accesorio", description: "Secado rápido.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "87", name: "Gamuza Grande", line: "ACCESORIOS", code: "APL-ACC-GAMG", type: "Accesorio", description: "Mayor absorción.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== FILTROS ========== */
{ id: "88", name: "Filtro Aceite LF-3008", line: "FILTROS", code: "LF-3008", type: "Aceite", description: "Filtro de aceite.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "89", name: "Filtro Aire AFL-9151G", line: "FILTROS", code: "AFL-9151G", type: "Aire", description: "Filtro de aire.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== BOIL Y ESPECIALES ========== */
{ id: "90", name: "Aceite 2T BOIL", line: "ESPECIAL", code: "APL-BOIL-2T", type: "2T", description: "Aceite 2 tiempos.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "mantenimiento-moto" },
{ id: "91", name: "Gas Butano", line: "TECNICA", code: "APL-GAS-BUT", type: "Inflamable", description: "Gas para limpieza técnica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "92", name: "Grasa Dieléctrica", line: "TECNICA", code: "APL-GRA-DIE", type: "Siliconada", description: "Protección eléctrica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "93", name: "Desengrasante Motor", line: "TECNICA", code: "APL-DES-MOT", type: "Solvente", description: "Limpieza profunda.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "94", name: "Desengrasante Común Rail", line: "TECNICA", code: "APL-DES-CR", type: "Spray", description: "Inyectores y riel.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "95", name: "Limpiador Electrónico", line: "TECNICA", code: "APL-LIMP-ELEC", type: "Spray", description: "Contactos eléctricos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "96", name: "Cera de Conservación", line: "TECNICA", code: "APL-CONS", type: "Protector", description: "Protección anticorrosión.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== LÍNEA PROFESIONAL (DETALLADO) ========== */
{ id: "97", name: "Profiline CC EVO", line: "PROFESIONAL", code: "APL-PRO-EVO", type: "Coating", description: "Protección cerámica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "98", name: "Profiline Speed Protect", line: "PROFESIONAL", code: "APL-PRO-SP", type: "Sellador", description: "Brillo rápido.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "99", name: "Profiline EXCUT 05-05", line: "PROFESIONAL", code: "APL-PRO-EX", type: "Pulimento", description: "Corte extremo.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== ACCESORIOS EXTRA ========== */
{ id: "100", name: "Cepillo de Llantas", line: "ACCESORIOS", code: "APL-ACC-CEP", type: "Accesorio", description: "Limpieza de aros.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "101", name: "Esponja Aplicadora Cera", line: "ACCESORIOS", code: "APL-ACC-CERA", type: "Accesorio", description: "Aplicación uniforme.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "102", name: "Disco de Pulido", line: "ACCESORIOS", code: "APL-ACC-DIS", type: "Accesorio", description: "Pulido profesional.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "103", name: "Bonete de Lana", line: "ACCESORIOS", code: "APL-ACC-BON", type: "Accesorio", description: "Pulido agresivo.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "104", name: "Bonete Híbrido", line: "ACCESORIOS", code: "APL-ACC-HIB", type: "Accesorio", description: "Pulido fino.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== FILTROS (CONTINUACIÓN) ========== */
{ id: "105", name: "Filtro LF-1616", line: "FILTROS", code: "LF-1616", type: "Aceite", description: "Filtro pesado.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "106", name: "Filtro WK 853/3X", line: "FILTROS", code: "WK-853", type: "Gasolina", description: "Filtro combustible.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "107", name: "Filtro A-5431", line: "FILTROS", code: "A-5431", type: "Aire", description: "Filtro aire.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== REFRIGERANTES EXTRA ========== */
{ id: "108", name: "Refrigerante Verde 17%", line: "COOLANT", code: "APL-COOL-17", type: "17%", description: "Tropicalizado.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
{ id: "109", name: "Refrigerante Rosado 50%", line: "COOLANT", code: "APL-COOL-R50", type: "50%", description: "Alta protección.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },

/* ========== LÍQUIDOS DE FRENO VARIOS ========== */
{ id: "110", name: "DOT 3 Moto", line: "FRENOS", code: "APL-M-DOT3", type: "DOT 3", description: "Uso motocicleta.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "frenos-moto" },
{ id: "111", name: "DOT 5 Moto", line: "FRENOS", code: "APL-M-DOT5", type: "DOT 5", description: "Alto rendimiento.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "frenos-moto" },

/* ========== GRASAS ESPECIALES ========== */
{ id: "112", name: "Blue Hi Temp N°2", line: "GRASAS", code: "APL-BLUE2", type: "Alta temp", description: "Resistente al calor.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "113", name: "Pro Tac Plus", line: "GRASAS", code: "APL-PROTAC", type: "Industrial", description: "Alta presión.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "114", name: "Heavy Duty Wheel", line: "GRASAS", code: "APL-HD-W", type: "Ruedas", description: "Rodajes.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== REFRIGERANTES FINALES ========== */
{ id: "115", name: "Green Flag 33%", line: "COOLANT", code: "APL-GREEN33", type: "33%", description: "Verde estándar.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
{ id: "116", name: "Red Flag 50%", line: "COOLANT", code: "APL-RED50", type: "50%", description: "Rojo dual.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },

/* ========== DESENGRASANTES INDUSTRIALES ========== */
{ id: "117", name: "Emulsión NG-30", line: "INDUSTRIAL", code: "APL-NG30", type: "Acuoso", description: "Limpieza industrial.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "aceite-compresora" },
{ id: "118", name: "Motor Solvente W-300", line: "INDUSTRIAL", code: "APL-W300", type: "Solvente", description: "Piezas mecánicas.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "aceite-compresora" },
{ id: "119", name: "Multipropósito DMK-10", line: "INDUSTRIAL", code: "APL-DMK10", type: "Multiuso", description: "Limpieza extrema.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "aceite-compresora" },
{ id: "120", name: "Limpieza Extrema NGW-49", line: "INDUSTRIAL", code: "APL-NGW49", type: "Acuoso", description: "Alta suciedad.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "aceite-compresora" },

/* ========== TERMINAMOS CON ACCESORIOS Y VARIOS ========== */
{ id: "121", name: "Protector Gel Exteriores", line: "DETAIL", code: "APL-GEL-EXT", type: "Protector", description: "Renueva plásticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "122", name: "Limpia Aros Star", line: "DETAIL", code: "APL-AROS-S", type: "Limpieza", description: "Quita suciedad.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "123", name: "Limpia Aros Beast", line: "DETAIL", code: "APL-AROS-B", type: "Limpieza", description: "Fuerza máxima.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "124", name: "Limpiador Neumáticos Black Beast", line: "DETAIL", code: "APL-NEU-BB", type: "Limpieza", description: "Neumáticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "125", name: "Filtro LF-3007", line: "FILTROS", code: "LF-3007", type: "Aceite", description: "Filtro aceite.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "126", name: "Filtro LP-714", line: "FILTROS", code: "LP-714", type: "Aceite", description: "Filtro liviano.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "127", name: "Filtro LF-833", line: "FILTROS", code: "LF-833", type: "Aceite", description: "Filtro motor.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "128", name: "Filtro WK 69", line: "FILTROS", code: "WK-69", type: "Combustible", description: "Filtro diésel.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "129", name: "Filtro W719/27", line: "FILTROS", code: "W719/27", type: "Aceite", description: "Filtro motor.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "130", name: "Filtro C-1821", line: "FILTROS", code: "C-1821", type: "Aire", description: "Filtro pesado.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "131", name: "Ceramik EX", line: "FRENOS", code: "APL-CER-EX", type: "Pastillas", description: "Pastillas cerámicas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "132", name: "Ceramik HQ", line: "FRENOS", code: "APL-CER-HQ", type: "Pastillas", description: "Alto rendimiento.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "133", name: "Semi Metálicas", line: "FRENOS", code: "APL-SEMI", type: "Pastillas", description: "Pastillas freno.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },

{ id: "134", name: "Inflador Neumáticos", line: "TECNICA", code: "APL-INFLA", type: "Spray", description: "Emergencia.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

/* ========== CIERRE HASTA 182 (VARIOS) ========== */
{ id: "135", name: "Agua Destilada", line: "COOLANT", code: "APL-H2O", type: "Destilada", description: "Baterías.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
{ id: "136", name: "Shampoo Premium Cera", line: "DETAIL", code: "APL-SHAM-P", type: "Limpieza", description: "Brillo.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "137", name: "Cera Easy Shine", line: "DETAIL", code: "APL-CERA-E", type: "Protección", description: "Rápida.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "138", name: "Restaurador Plástico Negro", line: "DETAIL", code: "APL-PLAST", type: "Restaurador", description: "Renueva.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "139", name: "Protector Total Mate", line: "DETAIL", code: "APL-PROT-M", type: "Protector", description: "Interiores.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
{ id: "140", name: "Kit Reparación Faros", line: "DETAIL", code: "APL-FAROS", type: "Kit", description: "Restaura faros.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "141", name: "Crema Cuero", line: "DETAIL", code: "APL-CUERO", type: "Protector", description: "Cuero.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "142", name: "Cera Polish Color", line: "DETAIL", code: "APL-COLOR", type: "Cera", description: "Color.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "143", name: "Vision Clara Xtreme", line: "XTREME", code: "APL-X-VC2", type: "Limpiavidrios", description: "Cristales.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "144", name: "Renovador Neumático Gel", line: "XTREME", code: "APL-X-GEL", type: "Gel", description: "Brillo.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "145", name: "Limpia Aros XTREME", line: "XTREME", code: "APL-X-AROS", type: "Limpieza", description: "Aros.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "146", name: "Limpia Tapiz XTREME", line: "XTREME", code: "APL-X-TAP", type: "Limpieza", description: "Tapices.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "147", name: "Limpia Aros R2000", line: "DETAIL", code: "APL-AROS-R", type: "Limpieza", description: "Discos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "148", name: "Limpiador Neumáticos", line: "DETAIL", code: "APL-NEU-L", type: "Limpieza", description: "Neumáticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "149", name: "Desengrasante", line: "TECNICA", code: "APL-DES", type: "Multiuso", description: "Quita grasa.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "150", name: "Limpia Pulverizado Clay Bar", line: "DETAIL", code: "APL-CLAY", type: "Preparador", description: "Antes de pulir.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "151", name: "Cera Pulverización", line: "DETAIL", code: "APL-SPRAY-C", type: "Cera", description: "Rápida.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "152", name: "Limpiador Bicicleta", line: "BIKE", code: "APL-BIKE-L", type: "Limpieza", description: "Bicicletas.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "153", name: "Paño Cuidado Bicicleta", line: "BIKE", code: "APL-BIKE-P", type: "Accesorio", description: "Secado.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "154", name: "Defamer", line: "XTREME", code: "APL-DEF", type: "Espuma", description: "Espuma activa.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "155", name: "Ceramic Tyre+Rim Detailer", line: "XTREME", code: "APL-CER-TR", type: "Detailer", description: "Neumáticos y aros.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "156", name: "Ceramic Plastic Sealing", line: "XTREME", code: "APL-CER-PL", type: "Sellador", description: "Plásticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "157", name: "Ceramic Polish All in One", line: "XTREME", code: "APL-CER-AIO", type: "Pulimento", description: "Todo en uno.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "158", name: "Star Limpia Aros", line: "DETAIL", code: "APL-STAR", type: "Limpieza", description: "Aros.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "159", name: "Black Beast Neumáticos", line: "DETAIL", code: "APL-BB", type: "Brillo", description: "Neumáticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "160", name: "Filtro Gasolina LF-604", line: "FILTROS", code: "LF-604", type: "Combustible", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "161", name: "Filtro FC-5704", line: "FILTROS", code: "FC-5704", type: "Combustible", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "162", name: "Filtro FC-1511", line: "FILTROS", code: "FC-1511", type: "Combustible", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "163", name: "Filtro FC-1310", line: "FILTROS", code: "FC-1310", type: "Combustible", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "164", name: "Filtro CAC-65220", line: "FILTROS", code: "CAC-65220", type: "Aire", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "165", name: "Filtro A-33450", line: "FILTROS", code: "A-33450", type: "Aire", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "166", name: "Filtro L4 2017", line: "FILTROS", code: "L4-2017", type: "Aire", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "167", name: "Filtro F-450 Super Duty", line: "FILTROS", code: "F450", type: "Aire", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "168", name: "Filtro L4 2000", line: "FILTROS", code: "L4-2000", type: "Aire", description: "Filtro.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

/* ========== CIERRE ========== */
{ id: "169", name: "Marfak HD 2", line: "GRASAS", code: "APL-MAR2", type: "NLGI 2", description: "Industrial.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
{ id: "170", name: "Marfak HD 3B", line: "GRASAS", code: "APL-MAR3", type: "NLGI 3", description: "Industrial.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "171", name: "Mega Grey High Vibration", line: "GRASAS", code: "APL-MEG", type: "Especial", description: "Alta vibración.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "172", name: "Silicona Secado Carrocería", line: "DETAIL", code: "APL-SEC", type: "Silicona", description: "Secado rápido.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "173", name: "Microfibra Exteriores", line: "ACCESORIOS", code: "APL-MIC-EXT", type: "Accesorio", description: "Paño.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "174", name: "Esponga Aplicadora Doble Cara", line: "ACCESORIOS", code: "APL-ESP-DC", type: "Accesorio", description: "Aplicador.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "175", name: "Plato de Respaldo", line: "ACCESORIOS", code: "APL-PLATO", type: "Accesorio", description: "Pulido.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "176", name: "Silicona Pulverizada", line: "DETAIL", code: "APL-SIL-SP", type: "Silicona", description: "Protección.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "177", name: "Tokenwasche", line: "XTREME", code: "APL-TOK", type: "Shampoo", description: "Espuma.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "178", name: "Clay Bar", line: "DETAIL", code: "APL-CLAY-B", type: "Arcilla", description: "Descontaminado.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "179", name: "Limpia Bicicleta XTREME", line: "BIKE", code: "APL-BIKE-X", type: "Limpieza", description: "Bicicletas.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },

{ id: "180", name: "Ceramic Tyre Detailer", line: "XTREME", code: "APL-TD", type: "Detailer", description: "Neumáticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "181", name: "Ceramic Plastic Seal", line: "XTREME", code: "APL-CPS", type: "Sellador", description: "Plásticos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },

{ id: "182", name: "Ceramic Polish XTREME", line: "XTREME", code: "APL-CPX", type: "Pulimento", description: "Acabado.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },


]

export const viscosities = [
  /* ========== motor ========== */
  "0W-20", "5W-20", "5W-30", "5W-40", "10W-30", "10W-40", "10W-50", "15W-40", "20W-50", "SAE 30",
  /* ==========  transmisionManual ========== */
  "75W-90", "80W-90", "85W-140",
  /* ========== transmisionAutomatica ========== */
  "ATF Dexron II", "ATF Dexron III", "ATF Multivehículo", "CVT",
  /* ========== hidraulicos========== */
  "ISO 32", "ISO 46", "ISO 68",
  /* ========== diferencial========== */
  /*"75W-90", "80W-90", "85W-140",*/
  /* ========== frenos========== */
   "DOT 3", "DOT 4", "DOT 5",
  /* ========== refrigerante ========== */
  "Verde 17%", "Verde 33%", "Rojo 50%", "Rosado 50%",
  
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId)
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return products.filter(p => p.subcategoryId === subcategoryId)
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(c => c.id === categoryId)
}

export function getSubcategoryById(subcategoryId: string): Subcategory | undefined {
  for (const category of categories) {
    const subcategory = category.subcategories.find(s => s.id === subcategoryId)
    if (subcategory) return subcategory
  }
  return undefined
}
