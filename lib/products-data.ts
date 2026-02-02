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
      { id: "transmision-manual-auto", name: "Aceite de transmisiones manuales y ejes", categoryId: "automovil" },
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
      { id: "transmision-manual-cam", name: "Aceite de transmisiones manuales y ejes", categoryId: "camiones" },
      { id: "transmision-auto-cam", name: "Aceite de transmisiones automáticas", categoryId: "camiones" },
      { id: "hidraulicos-cam", name: "Aceites hidráulicos", categoryId: "camiones" },
      { id: "frenos-cam", name: "Líquidos de frenos y dirección", categoryId: "camiones" },
      { id: "refrigerante-cam", name: "Líquido refrigerante", categoryId: "camiones" },
      { id: "limpiaparabrisas-cam", name: "Líquido limpiaparabrisas", categoryId: "camiones" },
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
      { id: "utto", name: "UTTO", categoryId: "vehiculo-pesado" },
      { id: "stou", name: "STOU", categoryId: "vehiculo-pesado" },
      { id: "hidraulicos-pesado", name: "Aceites hidráulicos", categoryId: "vehiculo-pesado" },
      { id: "frenos-pesado", name: "Líquidos de frenos y dirección", categoryId: "vehiculo-pesado" },
      { id: "refrigerante-pesado", name: "Líquido refrigerante", categoryId: "vehiculo-pesado" },
      { id: "limpiaparabrisas-pesado", name: "Líquido limpiaparabrisas", categoryId: "vehiculo-pesado" },
      { id: "mantenimiento-pesado", name: "Líquidos de mantenimiento", categoryId: "vehiculo-pesado" },
      { id: "grasas-pesado", name: "Grasas", categoryId: "vehiculo-pesado" },
    ]
  },
  {
    id: "motocicleta",
    name: "Motocicleta y vehículo todoterreno",
    subcategories: [
      { id: "aceites-motor-moto", name: "Aceites de motor", categoryId: "motocicleta" },
      { id: "transmision-moto", name: "Aceite de transmisiones manuales y ejes", categoryId: "motocicleta" },
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
    ]
  },
]

export const products: Product[] = [
  // AUTOMÓVIL - Aceites de motor
  { id: "1", name: "Apolo Synthetic", line: "PRO LINE", code: "APL-001", viscosity: "5W-30", type: "Sintético", description: "Aceite sintético de alto rendimiento con excelente protección contra el desgaste y ahorro de combustible.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto", tdsUrl: "/docs/tds/apolo-synthetic.pdf", msdsUrl: "/docs/msds/apolo-synthetic.pdf" },
  { id: "2", name: "Apolo Premium", line: "PREMIUM", code: "APL-002", viscosity: "10W-40", type: "Semi-sintético", description: "Aceite semi-sintético con tecnología avanzada para motores modernos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto", tdsUrl: "/docs/tds/apolo-premium.pdf", msdsUrl: "/docs/msds/apolo-premium.pdf" },
  { id: "3", name: "Apolo Económico", line: "CLASSIC", code: "APL-003", viscosity: "20W-50", type: "Mineral", description: "Aceite mineral de calidad para motores con alto kilometraje.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  { id: "4", name: "Apolo Full Synthetic", line: "PRO LINE", code: "APL-004", viscosity: "0W-20", type: "Sintético", description: "Aceite 100% sintético para máxima eficiencia de combustible.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  { id: "5", name: "Apolo High Mileage", line: "PREMIUM", code: "APL-005", viscosity: "10W-30", type: "Semi-sintético", description: "Formulado especialmente para vehículos con más de 100,000 km.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  
  // AUTOMÓVIL - Transmisiones manuales
  { id: "6", name: "Apolo Gear Oil", line: "TRANSMISSION", code: "APL-010", viscosity: "75W-90", type: "GL-5", description: "Aceite para transmisiones manuales con protección extrema presión.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
  { id: "7", name: "Apolo Trans MTF", line: "TRANSMISSION", code: "APL-011", viscosity: "80W-90", type: "GL-4", description: "Aceite para cajas de cambio manuales sincronizadas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
  
  // AUTOMÓVIL - Transmisiones automáticas
  { id: "8", name: "Apolo ATF III", line: "TRANSMISSION", code: "APL-020", type: "Dexron III", description: "Fluido para transmisiones automáticas compatible con Dexron III.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-auto-auto" },
  { id: "9", name: "Apolo ATF Multi", line: "TRANSMISSION", code: "APL-021", type: "Multi-Vehicle", description: "Fluido multi-vehículo para diversas transmisiones automáticas.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-auto-auto" },
  
  // AUTOMÓVIL - Frenos
  { id: "10", name: "Apolo Brake DOT 4", line: "FLUIDS", code: "APL-030", type: "DOT 4", description: "Líquido de frenos de alto punto de ebullición para seguridad máxima.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
  { id: "11", name: "Apolo Power Steering", line: "FLUIDS", code: "APL-031", type: "ATF", description: "Fluido para dirección hidráulica con aditivos anti-desgaste.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
  
  // AUTOMÓVIL - Refrigerante
  { id: "12", name: "Apolo Coolant Green", line: "COOLANT", code: "APL-040", type: "Verde", description: "Refrigerante verde con protección anticorrosiva.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
  { id: "13", name: "Apolo Coolant Red", line: "COOLANT", code: "APL-041", type: "Rojo OAT", description: "Refrigerante de larga duración tecnología OAT.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
  
  // AUTOMÓVIL - Limpiaparabrisas
  { id: "14", name: "Apolo Limpiaparabrisas", line: "CARE", code: "APL-050", type: "Concentrado", description: "Líquido limpiaparabrisas concentrado multiuso.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "limpiaparabrisas-auto" },
  
  // AUTOMÓVIL - Mantenimiento
  { id: "15", name: "Apolo Engine Flush", line: "CARE", code: "APL-055", type: "Limpiador", description: "Limpiador interno de motor antes del cambio de aceite.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "mantenimiento-auto" },
  
  // AUTOMÓVIL - Grasas
  { id: "16", name: "Apolo Grasa Multiuso", line: "GREASE", code: "APL-060", type: "Litio", description: "Grasa de litio para aplicaciones generales automotrices.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "grasas-auto" },
  
  // CAMIONES - Aceites de motor
  { id: "17", name: "Apolo Diesel HD", line: "HEAVY DUTY", code: "APL-100", viscosity: "15W-40", type: "CI-4", description: "Aceite para motores diésel de servicio pesado.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },
  { id: "18", name: "Apolo Diesel Ultra", line: "HEAVY DUTY", code: "APL-101", viscosity: "10W-40", type: "CK-4", description: "Aceite premium para motores diésel de última generación.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },
  { id: "19", name: "Apolo Diesel Fleet", line: "HEAVY DUTY", code: "APL-102", viscosity: "15W-40", type: "CJ-4", description: "Aceite económico para flotas de camiones.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },
  
  // CAMIONES - Transmisiones
  { id: "20", name: "Apolo Heavy Gear", line: "TRANSMISSION", code: "APL-110", viscosity: "85W-140", type: "GL-5", description: "Aceite para diferenciales de servicio pesado.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "transmision-manual-cam" },
  { id: "21", name: "Apolo ATF HD", line: "TRANSMISSION", code: "APL-120", type: "Allison TES 295", description: "Fluido para transmisiones automáticas Allison.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "transmision-auto-cam" },
  
  // CAMIONES - Hidráulicos
  { id: "22", name: "Apolo Hydraulic 68", line: "HYDRAULIC", code: "APL-130", type: "ISO 68", description: "Aceite hidráulico antidesgaste ISO 68.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "hidraulicos-cam" },
  
  // CAMIONES - Frenos
  { id: "23", name: "Apolo Brake DOT 4 HD", line: "FLUIDS", code: "APL-140", type: "DOT 4", description: "Líquido de frenos para servicio pesado.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "frenos-cam" },
  
  // CAMIONES - Refrigerante
  { id: "24", name: "Apolo Coolant HD", line: "COOLANT", code: "APL-150", type: "ELC", description: "Refrigerante de larga vida para motores diésel.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "refrigerante-cam" },
  
  // CAMIONES - Mantenimiento
  { id: "25", name: "Apolo Adblue", line: "CARE", code: "APL-160", type: "DEF", description: "Solución de urea para sistemas SCR.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "mantenimiento-cam" },
  
  // CAMIONES - Grasas
  { id: "26", name: "Apolo Grasa EP", line: "GREASE", code: "APL-170", type: "EP2", description: "Grasa de extrema presión para chasis de camiones.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "grasas-cam" },
  
  // VEHÍCULO PESADO - Aceites
  { id: "27", name: "Apolo Mining Oil", line: "INDUSTRIAL", code: "APL-200", viscosity: "15W-40", type: "CK-4", description: "Aceite para maquinaria minera y de construcción.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "aceites-motor-pesado" },
  { id: "28", name: "Apolo TO-4 30", line: "INDUSTRIAL", code: "APL-210", viscosity: "SAE 30", type: "TO-4", description: "Aceite para transmisiones y mandos finales Caterpillar.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "transmision-manual-pesado" },
  { id: "29", name: "Apolo Powershift", line: "INDUSTRIAL", code: "APL-220", type: "TO-4", description: "Aceite para transmisiones powershift.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "transmision-auto-pesado" },
  
  // VEHÍCULO PESADO - UTTO/STOU
  { id: "30", name: "Apolo UTTO", line: "AGRICULTURAL", code: "APL-230", type: "Universal", description: "Aceite universal para tractores - transmisión y húmedo.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "utto" },
  { id: "31", name: "Apolo STOU 15W-40", line: "AGRICULTURAL", code: "APL-240", viscosity: "15W-40", type: "STOU", description: "Aceite super tractor - motor, transmisión e hidráulico.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "stou" },
  
  // VEHÍCULO PESADO - Hidráulicos
  { id: "32", name: "Apolo Hydraulic 46", line: "HYDRAULIC", code: "APL-250", type: "ISO 46", description: "Aceite hidráulico antidesgaste para maquinaria pesada.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "hidraulicos-pesado" },
  
  // VEHÍCULO PESADO - Otros
  { id: "33", name: "Apolo Brake Fluid HD", line: "FLUIDS", code: "APL-260", type: "DOT 4", description: "Líquido de frenos para maquinaria pesada.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "frenos-pesado" },
  { id: "34", name: "Apolo Coolant Industrial", line: "COOLANT", code: "APL-270", type: "SCA", description: "Refrigerante con aditivos SCA para motores industriales.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "refrigerante-pesado" },
  { id: "35", name: "Apolo Grasa Minera", line: "GREASE", code: "APL-290", type: "EP Moly", description: "Grasa con molibdeno para aplicaciones mineras.", image: "/images/products/placeholder.jpg", categoryId: "vehiculo-pesado", subcategoryId: "grasas-pesado" },
  
  // MOTOCICLETA - Aceites de motor
  { id: "36", name: "Apolo Moto 4T", line: "MOTO", code: "APL-300", viscosity: "10W-40", type: "JASO MA2", description: "Aceite para motos 4 tiempos con embrague húmedo.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "37", name: "Apolo Moto Synthetic", line: "MOTO PRO", code: "APL-301", viscosity: "10W-50", type: "JASO MA2", description: "Aceite 100% sintético para motos de alto rendimiento.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "38", name: "Apolo Scooter", line: "MOTO", code: "APL-302", viscosity: "10W-40", type: "JASO MB", description: "Aceite especial para scooters con transmisión CVT.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "39", name: "Apolo Moto Racing", line: "MOTO PRO", code: "APL-303", viscosity: "5W-40", type: "JASO MA2", description: "Aceite de competición para motos deportivas.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "40", name: "Apolo 2T", line: "MOTO", code: "APL-304", type: "JASO FC", description: "Aceite para motores 2 tiempos de baja emisión.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  
  // MOTOCICLETA - Transmisión
  { id: "41", name: "Apolo Gear Moto", line: "MOTO", code: "APL-310", viscosity: "80W-90", type: "GL-4", description: "Aceite para transmisiones separadas de motos.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "transmision-moto" },
  
  // MOTOCICLETA - Frenos
  { id: "42", name: "Apolo Brake Moto", line: "MOTO", code: "APL-320", type: "DOT 4", description: "Líquido de frenos de alto rendimiento para motos.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "frenos-moto" },
  
  // MOTOCICLETA - Refrigerante
  { id: "43", name: "Apolo Coolant Moto", line: "MOTO", code: "APL-330", type: "Silicato free", description: "Refrigerante sin silicatos para motos.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "refrigerante-moto" },
  
  // MOTOCICLETA - Mantenimiento
  { id: "44", name: "Apolo Chain Lube", line: "MOTO CARE", code: "APL-340", type: "Cadena", description: "Lubricante en spray para cadenas de moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "mantenimiento-moto" },
  { id: "45", name: "Apolo Filter Oil", line: "MOTO CARE", code: "APL-341", type: "Filtro", description: "Aceite para filtros de aire de espuma.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "mantenimiento-moto" },
  
  // MOTOCICLETA - Grasas
  { id: "46", name: "Apolo Grasa Rodamientos", line: "MOTO", code: "APL-350", type: "Rodamientos", description: "Grasa para rodamientos de ruedas de moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "grasas-moto" },
  
  // MOTOCICLETA - Horquilla
  { id: "47", name: "Apolo Fork Oil 5W", line: "MOTO PRO", code: "APL-360", viscosity: "5W", type: "Horquilla", description: "Aceite de horquilla ligero para mejor respuesta.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "horquilla" },
  { id: "48", name: "Apolo Fork Oil 10W", line: "MOTO PRO", code: "APL-361", viscosity: "10W", type: "Horquilla", description: "Aceite de horquilla estándar.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "horquilla" },
  { id: "49", name: "Apolo Fork Oil 15W", line: "MOTO PRO", code: "APL-362", viscosity: "15W", type: "Horquilla", description: "Aceite de horquilla para suspensiones firmes.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "horquilla" },
  
  // OTROS - Grasas
  { id: "50", name: "Apolo Grasa Universal", line: "GENERAL", code: "APL-400", type: "Multiuso", description: "Grasa multiusos para aplicaciones generales.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
  { id: "51", name: "Apolo Grasa Alta Temp", line: "GENERAL", code: "APL-401", type: "Alta temperatura", description: "Grasa resistente a altas temperaturas.", image: "/images/products/placeholder.jpg", categoryId: "otros", subcategoryId: "grasas-otros" },
]

export const viscosities = [
  "0W-20", "5W-20", "5W-30", "5W-40", "10W-30", "10W-40", "10W-50",
  "15W-40", "20W-50", "75W-90", "80W-90", "85W-140", "SAE 30"
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
