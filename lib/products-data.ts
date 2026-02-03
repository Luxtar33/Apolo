export type Product = {
  id: string
  name: string
  line: string
  code: string
  brand: string
  viscosity?: string
  type: string
  presentation: string
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
  /* ================== MARCA: APOLO ================== */
  /* --- GRASAS --- */
  { id: "1", name: "Calcio Rojo", line: "GRASAS", code: "APL-GRA-CAL", brand: "Apolo", viscosity: "", type: "Calcio", presentation: "Pote", description: "Grasa multipropósito.", image: "/images/products/calciorojo.bmp", categoryId: "automovil", subcategoryId: "grasas-auto" },

  { id: "2", name: "Litio Azul", line: "GRASAS", code: "APL-GRA-LIT", brand: "Apolo", viscosity: "", type: "Litio", presentation: "Pote", description: "Alta temperatura.", image: "/images/products/litioazul.bmp", categoryId: "automovil", subcategoryId: "grasas-auto" },

  /* --- ACEITES --- */
  { id: "3", name: "GL-5", line: "TRANSMISIÓN", code: "APL-GL5-7590", brand: "Apolo", viscosity: "75W90", type: "GL-5", presentation: "1/4 Gal", description: "Cajas manuales.", image: "/images/products/gl575w90.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  { id: "4", name: "GL-5", line: "TRANSMISIÓN", code: "APL-GL5-8090", brand: "Apolo", viscosity: "80W90", type: "GL-5", presentation: "Balde", description: "Protección de engranajes.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  { id: "5", name: "GL-5", line: "TRANSMISIÓN", code: "APL-GL5-85140", brand: "Apolo", viscosity: "85W140", type: "GL-5", presentation: "Balde", description: "Uso severo.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  { id: "6", name: "CI-4", line: "DIÉSEL", code: "APL-DIE-1540", brand: "Apolo", viscosity: "15W40", type: "CI-4", presentation: "Balde", description: "Motor diésel.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },

  { id: "7", name: "Super 4T", line: "MOTO", code: "APL-MOTO-1030", brand: "Apolo", viscosity: "10W30", type: "Sintético", presentation: "1/4 Gal", description: "Moto full sintético.", image: "/images/products/smart10w30.bmp", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },

  { id: "8", name: "Super 4T", line: "MOTO", code: "APL-MOTO-2050", brand: "Apolo", viscosity: "20W50", type: "Sintético", presentation: "1/4 Gal", description: "Moto alto rendimiento.", image: "/images/products/smart20w50.bmp", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },

  /* ================== MARCA: OVERTS ================== */
  /* --- SILICONAS --- */
  { id: "9",  name: "Silicona Fresa", line: "SILICONA", code: "OVT-SIL-FRE-120", brand: "Overts", viscosity: "", type: "Aroma", presentation: "120 ml", description: "Aromatizante.", image: "/images/products/fresa.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },
  { id: "10", name: "Silicona Fresa", line: "SILICONA", code: "OVT-SIL-FRE-300", brand: "Overts", viscosity: "", type: "Aroma", presentation: "300 ml", description: "Aromatizante.", image: "/images/products/fresa.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },

  { id: "11", name: "Silicona Chicle", line: "SILICONA", code: "OVT-SIL-CHI-120", brand: "Overts", viscosity: "", type: "Aroma", presentation: "120 ml", description: "Aromatizante.", image: "/images/products/chicle.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },
  { id: "12", name: "Silicona Chicle", line: "SILICONA", code: "OVT-SIL-CHI-300", brand: "Overts", viscosity: "", type: "Aroma", presentation: "300 ml", description: "Aromatizante.", image: "/images/products/chicle.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },

  { id: "13", name: "Silicona Dolce Gabbana", line: "SILICONA", code: "OVT-SIL-DOL-120", brand: "Overts", viscosity: "", type: "Aroma", presentation: "120 ml", description: "Aromatizante.", image: "/images/products/dolcegarbana.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },
  { id: "14", name: "Silicona Dolce Gabbana", line: "SILICONA", code: "OVT-SIL-DOL-300", brand: "Overts", viscosity: "", type: "Aroma", presentation: "300 ml", description: "Aromatizante.", image: "/images/products/dolcegarbana.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },

  { id: "15", name: "Silicona New Car", line: "SILICONA", code: "OVT-SIL-NEW-120", brand: "Overts", viscosity: "", type: "Aroma", presentation: "120 ml", description: "Aromatizante.", image: "/images/products/newcar.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },
  { id: "16", name: "Silicona New Car", line: "SILICONA", code: "OVT-SIL-NEW-300", brand: "Overts", viscosity: "", type: "Aroma", presentation: "300 ml", description: "Aromatizante.", image: "/images/products/newcar.bmp", categoryId: "otros", subcategoryId: "mantenimiento-auto" },

  /* --- TRANSMISIÓN MONOGRADO --- */
  { id: "17", name: "SAE 90", line: "TRANSMISIÓN", code: "OVT-TR-90-Q", brand: "Overts", viscosity: "SAE 90", type: "Monogrado", presentation: "1/4 Gal", description: "Transmisión.", image: "/images/products/sae90gal.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
  { id: "18", name: "SAE 90", line: "TRANSMISIÓN", code: "OVT-TR-90-B", brand: "Overts", viscosity: "SAE 90", type: "Monogrado", presentation: "Balde", description: "Transmisión.", image: "/images/products/sae90balde.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  { id: "19", name: "SAE 140", line: "TRANSMISIÓN", code: "OVT-TR-140-Q", brand: "Overts", viscosity: "SAE 140", type: "Monogrado", presentation: "1/4 Gal", description: "Transmisión.", image: "/images/products/sae140gal.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
  { id: "20", name: "SAE 140", line: "TRANSMISIÓN", code: "OVT-TR-140-B", brand: "Overts", viscosity: "SAE 140", type: "Monogrado", presentation: "Balde", description: "Transmisión.", image: "/images/products/sae140balde.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  { id: "21", name: "GL-5 250", line: "TRANSMISIÓN", code: "OVT-TR-250-B", brand: "Overts", viscosity: "250", type: "GL-5", presentation: "Balde", description: "Carga extrema.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  /* --- TRANSMISIÓN MULTIGRADO --- */
  { id: "22", name: "80W90", line: "TRANSMISIÓN", code: "OVT-TR-8090-Q", brand: "Overts", viscosity: "80W90", type: "Multigrado", presentation: "1/4 Gal", description: "Uso general.", image: "/images/products/sae80w90gal.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },
  { id: "23", name: "80W90", line: "TRANSMISIÓN", code: "OVT-TR-8090-B", brand: "Overts", viscosity: "80W90", type: "Multigrado", presentation: "Balde", description: "Uso general.", image: "/images/products/sae80w90balde.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  { id: "24", name: "GL-4 85W140", line: "TRANSMISIÓN", code: "OVT-TR-85140-E", brand: "Overts", viscosity: "85W140", type: "GL-4", presentation: "1/8 Gal", description: "Alta carga.", image: "/images/products/gl485w140.bmp", categoryId: "automovil", subcategoryId: "transmision-manual-auto" },

  /* --- MONOGRADO MOTORES --- */
  { id: "25", name: "HD 30", line: "MOTORES", code: "OVT-HD30-Q", brand: "Overts", viscosity: "SAE 30", type: "Monogrado", presentation: "1/4 Gal", description: "Motor.", image: "/images/products/hd30gal.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  { id: "26", name: "HD 30", line: "MOTORES", code: "OVT-HD30-B", brand: "Overts", viscosity: "SAE 30", type: "Monogrado", presentation: "Balde", description: "Motor.", image: "/images/products/hd30balde.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },

  { id: "27", name: "HD 40", line: "MOTORES", code: "OVT-HD40-Q", brand: "Overts", viscosity: "SAE 40", type: "Monogrado", presentation: "1/4 Gal", description: "Motor.", image: "/images/products/hd40gal.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  { id: "28", name: "HD 40", line: "MOTORES", code: "OVT-HD40-B", brand: "Overts", viscosity: "SAE 40", type: "Monogrado", presentation: "Balde", description: "Motor.", image: "/images/products/hd40balde.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },

  { id: "29", name: "HD 50", line: "MOTORES", code: "OVT-HD50-Q", brand: "Overts", viscosity: "SAE 50", type: "Monogrado", presentation: "1/4 Gal", description: "Motor.", image: "/images/products/hd50gal.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  { id: "30", name: "HD 50", line: "MOTORES", code: "OVT-HD50-B", brand: "Overts", viscosity: "SAE 50", type: "Monogrado", presentation: "Balde", description: "Motor.", image: "/images/products/hd50balde.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },

  /* --- DIÉSEL MOTORES --- */
  { id: "31", name: "15W40 API CI-4", line: "DIÉSEL", code: "OVT-DIE-1540-B", brand: "Overts", viscosity: "15W40", type: "CI-4", presentation: "Balde", description: "Diésel.", image: "/images/products/15w40apicl4.bmp", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },
  { id: "32", name: "25W50 API SI-4", line: "DIÉSEL", code: "OVT-DIE-2550-B", brand: "Overts", viscosity: "25W50", type: "SI-4", presentation: "Balde", description: "Diésel.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },
  { id: "33", name: "25W60 API SH-4", line: "DIÉSEL", code: "OVT-DIE-2560-B", brand: "Overts", viscosity: "25W60", type: "SH-4", presentation: "Balde", description: "Diésel.", image: "/images/products/placeholder.jpg", categoryId: "camiones", subcategoryId: "aceites-motor-cam" },

  { id: "34", name: "Hidráulico 68", line: "HIDRÁULICO", code: "OVT-HID-68-B", brand: "Overts", viscosity: "ISO 68", type: "Hidráulico", presentation: "Balde", description: "Maquinaria.", image: "/images/products/hidraulic69.bmp", categoryId: "camiones", subcategoryId: "hidraulicos-cam" },

  { id: "35", name: "ATF - Hidrolina", line: "HIDRÁULICO", code: "OVT-ATF-18", brand: "Overts", viscosity: "ATF", type: "Automático", presentation: "1/8 Gal", description: "Dirección.", image: "/images/products/atfhidrolina8gal.bmp", categoryId: "camiones", subcategoryId: "transmision-auto-cam" },
  { id: "36", name: "ATF - Hidrolina", line: "HIDRÁULICO", code: "OVT-ATF-14", brand: "Overts", viscosity: "ATF", type: "Automático", presentation: "1/4 Gal", description: "Dirección.", image: "/images/products/atfhidrolinagal.bmp", categoryId: "camiones", subcategoryId: "transmision-auto-cam" },
  { id: "37", name: "ATF - Hidrolina", line: "HIDRÁULICO", code: "OVT-ATF-B", brand: "Overts", viscosity: "ATF", type: "Automático", presentation: "Balde", description: "Dirección.", image: "/images/products/atfhidrolinabalde.bmp", categoryId: "camiones", subcategoryId: "transmision-auto-cam" },

  { id: "38", name: "Compressor AO", line: "INDUSTRIAL", code: "OVT-COMP-18", brand: "Overts", viscosity: "AO", type: "Compresor", presentation: "1/8 Gal", description: "Compresora.", image: "/images/products/compresoraogal.bmp", categoryId: "otros", subcategoryId: "aceite-compresora" },
  { id: "39", name: "Compressor AO", line: "INDUSTRIAL", code: "OVT-COMP-14", brand: "Overts", viscosity: "AO", type: "Compresor", presentation: "1/4 Gal", description: "Compresora.", image: "/images/products/compresoraogal.bmp", categoryId: "otros", subcategoryId: "aceite-compresora" },

  /* --- MOTO 4T FULL SINTÉTICO --- */
  { id: "40", name: "Super 4T 10W30", line: "MOTO 4T", code: "OVT-MOTO-1030", brand: "Overts", viscosity: "10W30", type: "Sintético", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/super4t10w30gal.bmp", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "41", name: "Super 4T 10W40", line: "MOTO 4T", code: "OVT-MOTO-1040", brand: "Overts", viscosity: "10W40", type: "Sintético", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/super4t10w40gal.bmp", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "42", name: "Super 4T 15W50", line: "MOTO 4T", code: "OVT-MOTO-1550", brand: "Overts", viscosity: "15W50", type: "Sintético", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "43", name: "Super 4T 20W50", line: "MOTO 4T", code: "OVT-MOTO-2050", brand: "Overts", viscosity: "20W50", type: "Sintético", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/super4t20w50gal.bmp", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },

  /* --- MOTO 4T MINERAL --- */
  { id: "44", name: "SAE 20W50", line: "MOTO 4T", code: "OVT-MOTO-S2050", brand: "Overts", viscosity: "20W50", type: "Mineral", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "45", name: "SAE 25W50", line: "MOTO 4T", code: "OVT-MOTO-S2550", brand: "Overts", viscosity: "25W50", type: "Mineral", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/placeholder.jpg", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },
  { id: "46", name: "SAE 25W60", line: "MOTO 4T", code: "OVT-MOTO-S2560", brand: "Overts", viscosity: "25W60", type: "Mineral", presentation: "1/4 Gal", description: "Moto.", image: "/images/products/sae25w60.bpm", categoryId: "motocicleta", subcategoryId: "aceites-motor-moto" },

  /* --- MOTORES GASOLINEROS --- */
  { id: "47", name: "20W50 API SN", line: "GASOLINERO", code: "OVT-GAS-2050SN", brand: "Overts", viscosity: "20W50", type: "API SN", presentation: "1/4 Gal", description: "Gasolina.", image: "/images/products/20w50apisngal.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },
  { id: "48", name: "25W50 API SN", line: "GASOLINERO", code: "OVT-GAS-2550SN", brand: "Overts", viscosity: "25W50", type: "API SN", presentation: "Balde", description: "Gasolina.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },

{ id: "49", name: "25W60 API SN", line: "GASOLINERO", code: "OVT-GAS-2560SN", brand: "Overts", viscosity: "25W60", type: "API SN", presentation: "1/4 Gal", description: "Alta viscosidad.", image: "/images/products/20w60apisngal.bmp", categoryId: "automovil", subcategoryId: "aceites-motor-auto" },

/* --- GRASAS AUTOMOTRICES --- */
{ id: "50", name: "Litium Azul", line: "GRASAS", code: "OVT-GRA-LIT-B", brand: "Overts", viscosity: "", type: "Litio", presentation: "Balde", description: "Alta temperatura.", image: "/images/products/litiumazul.bmp", categoryId: "automovil", subcategoryId: "grasas-auto" },

{ id: "51", name: "Chasis GLN 2", line: "GRASAS", code: "OVT-GRA-GL2-B", brand: "Overts", viscosity: "", type: "NLGI 2", presentation: "Balde", description: "Chasis.", image: "/images/products/chasisgln2.bmp", categoryId: "automovil", subcategoryId: "grasas-auto" },

{ id: "52", name: "Rodaje N°3", line: "GRASAS", code: "OVT-GRA-ROD3-B", brand: "Overts", viscosity: "", type: "NLGI 3", presentation: "Balde", description: "Rodamientos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "grasas-auto" },

/* --- LÍQUIDO DE FRENO --- */
{ id: "53", name: "DOT 4", line: "FRENOS", code: "OVT-DOT4-4", brand: "Overts", viscosity: "", type: "DOT 4", presentation: "4 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "54", name: "DOT 4", line: "FRENOS", code: "OVT-DOT4-8", brand: "Overts", viscosity: "", type: "DOT 4", presentation: "8 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "55", name: "DOT 4", line: "FRENOS", code: "OVT-DOT4-12", brand: "Overts", viscosity: "", type: "DOT 4", presentation: "12 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },

{ id: "56", name: "DOT 5", line: "FRENOS", code: "OVT-DOT5-12", brand: "Overts", viscosity: "", type: "DOT 5", presentation: "12 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },

{ id: "57", name: "DOT 3", line: "FRENOS", code: "OVT-DOT3-4", brand: "Overts", viscosity: "", type: "DOT 3", presentation: "4 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "58", name: "DOT 3", line: "FRENOS", code: "OVT-DOT3-8", brand: "Overts", viscosity: "", type: "DOT 3", presentation: "8 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "59", name: "DOT 3", line: "FRENOS", code: "OVT-DOT3-12", brand: "Overts", viscosity: "", type: "DOT 3", presentation: "12 oz", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },
{ id: "60", name: "DOT 3", line: "FRENOS", code: "OVT-DOT3-B", brand: "Overts", viscosity: "", type: "DOT 3", presentation: "Bidón", description: "Frenos.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "frenos-auto" },

/* --- REFRIGERANTES --- */
{ id: "61", name: "Refrigerante Verde", line: "COOLANT", code: "OVT-REF-17", brand: "Overts", viscosity: "", type: "17%", presentation: "1 Gal", description: "Anticorrosivo.", image: "/images/products/verde17.bmp", categoryId: "automovil", subcategoryId: "refrigerante-auto" },

{ id: "62", name: "Refrigerante Verde", line: "COOLANT", code: "OVT-REF-33", brand: "Overts", viscosity: "", type: "33%", presentation: "1 Gal", description: "Mayor duración.", image: "/images/products/verde33.bmp", categoryId: "automovil", subcategoryId: "refrigerante-auto" },

{ id: "63", name: "Refrigerante Rojo", line: "COOLANT", code: "OVT-REF-R33", brand: "Overts", viscosity: "", type: "33%", presentation: "1 Gal", description: "Protección térmica.", image: "/images/products/placeholder.jpg", categoryId: "automovil", subcategoryId: "refrigerante-auto" },

{ id: "64", name: "Refrigerante Rojo", line: "COOLANT", code: "OVT-REF-R50", brand: "Overts", viscosity: "", type: "50%", presentation: "1 Gal", description: "Máxima protección.", image: "/images/products/rojo50.bmp", categoryId: "automovil", subcategoryId: "refrigerante-auto" },
]

export const viscosities = [
  /* ========== MOTOR ========== */
  "0W-20",
  "5W-20",
  "5W-30",
  "5W-40",
  "10W-30",
  "10W-40",
  "10W-50",
  "15W-40",
  "20W-50",
  "25W-50",
  "25W-60",
  "SAE 30",
  "SAE 40",
  "SAE 50",

  /* ========== TRANSMISIÓN MANUAL ========== */
  "75W-90",
  "80W-90",
  "85W-140",
  "SAE 90",
  "SAE 140",
  "GL-5 250",

  /* ========== TRANSMISIÓN AUTOMÁTICA ========== */
  "ATF",
  "ATF Dexron II",
  "ATF Dexron III",
  "ATF Multivehículo",
  "CVT",

  /* ========== HIDRÁULICOS ========== */
  "ISO 32",
  "ISO 46",
  "ISO 68",

  /* ========== FRENOS ========== */
  "DOT 3",
  "DOT 4",
  "DOT 5",

  /* ========== REFRIGERANTE ========== */
  "Verde 17%",
  "Verde 33%",
  "Rojo 33%",
  "Rojo 50%",
];

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
