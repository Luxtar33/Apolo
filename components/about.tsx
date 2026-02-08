"use client";

import { Award, Users, Clock, Truck, Target, Eye } from "lucide-react";
import { useState } from "react";

const stats = [
  { icon: Clock, value: "15+", label: "Años de experiencia" },
  { icon: Users, value: "5,000+", label: "Clientes satisfechos" },
  { icon: Truck, value: "500+", label: "Entregas mensuales" },
  { icon: Award, value: "100%", label: "Productos certificados" },
];

const brands = [
  {
    logo: "/images/about/marcas/amalie.png",
    product: "/images/about/ProductosDestacados/amaliedestacado.png",
    name: "Amalie",
  },
  {
    logo: "/images/about/marcas/boil.png",
    product: "/images/about/ProductosDestacados/boildestacado.png",
    name: "Boil",
  },
  {
    logo: "/images/about/marcas/bosch.png",
    product: "/images/about/ProductosDestacados/boschdestacado.png",
    name: "Bosch",
  },
  {
    logo: "/images/about/marcas/chevron.png",
    product: "/images/about/ProductosDestacados/chevrondestacado.png",
    name: "Chevron",
  },
  {
    logo: "/images/about/marcas/frenosa.png",
    product: "/images/about/ProductosDestacados/frenosadestacado.png",
    name: "Frenosa",
  },
  {
    logo: "/images/about/marcas/honda.png",
    product: "/images/about/ProductosDestacados/hondadestacado.png",
    name: "Honda",
  },
  {
    logo: "/images/about/marcas/lysfiltros.png",
    product: "/images/about/ProductosDestacados/lysfiltrosdestacado.png",
    name: "Lys Filtros",
  },
  {
    logo: "/images/about/marcas/mannfilter.png",
    product: "/images/about/ProductosDestacados/mannfilterdestacado.png",
    name: "Mann Filter",
  },
  {
    logo: "/images/about/marcas/peak.png",
    product: "/images/about/ProductosDestacados/peakdestacado.png",
    name: "Peak",
  },
  {
    logo: "/images/about/marcas/sakura.webp",
    product: "/images/about/ProductosDestacados/sakuradestacado.png",
    name: "Sakura",
  },
  {
    logo: "/images/about/marcas/sonax.png",
    product: "/images/about/ProductosDestacados/sonaxdestacado.png",
    name: "Sonax",
  },
  {
    logo: "/images/about/marcas/versachem.webp",
    product: "/images/about/ProductosDestacados/versachemdestacado.png",
    name: "Versachem",
  },
  {
    logo: "/images/about/marcas/vextrom.png",
    product: "/images/about/ProductosDestacados/vextromdestacado.png",
    name: "Vextrom",
  },
  {
    logo: "/images/about/marcas/wagner.webp",
    product: "/images/about/ProductosDestacados/wagnerdestacado.png",
    name: "Wagner",
  },
  {
    logo: "/images/about/marcas/yamalube.svg",
    product: "/images/about/ProductosDestacados/yamalubedestacado.png",
    name: "Yamalube",
  },
];

export function About() {
  const [activeProduct, setActiveProduct] = useState<{
    product: string;
    logo: string;
  } | null>(null);

  return (
    <section
      id="nosotros"
      className="relative "
      style={{
        backgroundImage: "url('/images/about/fondoabout6.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        {/* QUIÉNES SOMOS */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
          {/* Glow ambiental */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,rgba(255,193,7,0.08),transparent_60%)] blur-3xl" />

          <div className="relative z-10 px-4 sm:px-6 lg:px-14">
            {/* TEXTO */}
            <div className="text-white max-w-4xl mx-auto text-center mb-14 lg:mb-20">
              <span className="inline-block uppercase tracking-[0.35em] text-xs sm:text-sm text-[#f9db8b]">
                Sobre Nosotros
              </span>

              <h2
                className="mt-3 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight 
        text-white drop-shadow-[0_6px_18px_rgba(255,193,7,0.45)]"
              >
                Apolo <span className="text-yellow-400">Lubricantes</span>
              </h2>

              <div className="w-24 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mx-auto mt-4" />

              <p className="mt-6 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                Somos una empresa dedicada a la importación y distribución de
                lubricantes de alto rendimiento para los sectores automotriz,
                industrial y maquinaria pesada, con cobertura a nivel nacional.
              </p>

              <p className="mt-4 text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">
                Trabajamos con productos originales y certificados, brindando
                asesoría técnica especializada y un servicio confiable que
                protege la inversión de nuestros clientes.
              </p>

              <div
                className="mt-8 bg-black/60 backdrop-blur-md border border-yellow-400/30 
        p-5 rounded-xl max-w-xl mx-auto shadow-[0_0_30px_rgba(255,193,7,0.25)]"
              >
                <p className="italic text-sm text-white/90">
                  Creemos que un lubricante de calidad marca la diferencia en la
                  eficiencia, seguridad y vida útil de los equipos.
                </p>
              </div>
            </div>

            {/* TARJETAS */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="
              relative group
              rounded-2xl
              p-4 sm:p-6 lg:p-7
              bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#000000]
              border border-yellow-500/20
              shadow-[0_0_25px_rgba(255,193,7,0.18)]
              overflow-hidden
              transition-all duration-300
              hover:shadow-[0_0_40px_rgba(255,193,7,0.35)]
              hover:-translate-y-1
            "
                  >
                    {/* Glow animado */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
              bg-[radial-gradient(circle_at_top,rgba(255,193,7,0.18),transparent_65%)]"
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-yellow-500/10 
                flex items-center justify-center mb-3"
                      >
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        {stat.value}
                      </h3>

                      <p className="mt-1 text-[11px] sm:text-sm text-white/70">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* NUESTRA HISTORIA */}
        <div className="relative w-full py-20 sm:py-28">
          {/* Halo dorado */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[60%] h-full bg-[radial-gradient(circle,rgba(255,193,7,0.12),transparent_65%)] blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6">
            <div
              className="
              bg-black/70
              backdrop-blur-2xl
              border border-yellow-400/40
              rounded-3xl
              p-8 sm:p-12
              shadow-[0_0_60px_rgba(255,193,7,0.35)]
              transition-transform duration-300 hover:scale-[1.01]
            "
            >
              <span className="inline-block uppercase tracking-[0.35em] text-xs sm:text-sm text-[#f9db8b]">
                Nuestra Historia
              </span>

              <h3
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold 
        text-[#f0c14b] drop-shadow-[0_6px_20px_rgba(240,193,75,0.6)]"
              >
                Construyendo confianza con el tiempo
              </h3>

              <div className="w-24 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mx-auto my-6" />

              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                Apolo Lubricantes nace con la visión de ofrecer soluciones
                confiables y de alto desempeño en un mercado cada vez más
                exigente. A lo largo de los años hemos fortalecido nuestra red
                logística, consolidando relaciones duraderas con clientes y
                aliados estratégicos a nivel nacional.
              </p>
            </div>
          </div>
        </div>

        {/* MISIÓN Y VISIÓN */}
        <div className="relative w-full overflow-hidden py-14 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20 text-white">
            {/* MISIÓN */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Glow decorativo */}
              <div className="absolute -inset-6 bg-[radial-gradient(circle_at_left,rgba(255,193,7,0.12),transparent_60%)] blur-2xl" />

              {/* Imagen */}
              <div className="relative order-1 flex justify-center">
                <img
                  src="/images/about/mision.png"
                  alt="Misión Apolo Lubricantes"
                  className="max-h-[200px] sm:max-h-[260px] lg:max-h-[340px] w-auto object-contain 
          drop-shadow-[0_20px_40px_rgba(240,193,75,0.45)]"
                />
              </div>

              {/* Texto */}
              <div className="relative order-2 text-center lg:text-left space-y-4">
                <span className="inline-block uppercase tracking-[0.35em] text-xs text-[#f9db8b]">
                  Nuestra Misión
                </span>

                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
          text-[#f0c14b] leading-tight drop-shadow-[0_6px_18px_rgba(240,193,75,0.6)]"
                >
                  Compromiso con la calidad
                </h3>

                <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mx-auto lg:mx-0" />

                <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Brindar lubricantes de alto rendimiento que garanticen la
                  eficiencia, seguridad y durabilidad de los equipos
                  automotrices e industriales, ofreciendo asesoría técnica y un
                  servicio confiable a nivel nacional.
                </p>
              </div>
            </div>

            {/* VISIÓN */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Glow decorativo */}
              <div className="absolute -inset-6 bg-[radial-gradient(circle_at_right,rgba(255,193,7,0.12),transparent_60%)] blur-2xl" />

              {/* Texto */}
              <div className="relative order-2 lg:order-1 text-center lg:text-left space-y-4">
                <span className="inline-block uppercase tracking-[0.35em] text-xs text-[#f9db8b]">
                  Nuestra Visión
                </span>

                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0c14b] leading-tight drop-shadow-[0_6px_18px_rgba(240,193,75,0.6)]"
                >
                  Ser líderes a nivel nacional
                </h3>

                <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mx-auto lg:mx-0" />

                <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Consolidarnos como una empresa líder en la distribución de
                  lubricantes, reconocida por la calidad de nuestros productos,
                  innovación constante y confianza construida con nuestros
                  clientes.
                </p>
              </div>

              {/* Imagen */}
              <div className="relative order-1 lg:order-2 flex justify-center">
                <img
                  src="/images/about/vision.png"
                  alt="Visión Apolo Lubricantes"
                  className="max-h-[200px] sm:max-h-[260px] lg:max-h-[340px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(240,193,75,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MARCAS */}
        <div className="w-full py-12 sm:py-16 lg:py-20 space-y-8 lg:space-y-12 overflow-hidden">
          {/* Título */}
          <div className="relative z-10 text-center px-4">
            <h3
              className="text-[#f0c14b] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(255,193,7,0.35)]"
            >
              Marcas con las que trabajamos
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200">
              Aliados estratégicos que garantizan calidad y confianza
            </p>
          </div>

          {/* Carrusel 1 → izquierda a derecha */}
          <div className="relative w-full overflow-hidden py-6">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/80 to-transparent z-10" />
            <div
              className={`flex w-max animate-marquee gap-8 sm:gap-12 lg:gap-16 ${
                activeProduct ? "paused" : "pause-on-hover"
              }`}
            >
              {brands.concat(brands).map((item, i) => (
                <img
                  key={i}
                  src={item.logo}
                  alt={item.name}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain cursor-pointer
                    drop-shadow-[0_0_2px_rgba(255,255,255,0.9)]
                    drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
                    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
                    hover:scale-110
                    transition-all duration-300"
                  onClick={() =>
                    setActiveProduct({
                      product: item.product,
                      logo: item.logo,
                    })
                  }
                />
              ))}
            </div>
          </div>

          {/* Carrusel 2 → derecha a izquierda */}
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/80 to-transparent z-10" />
            <div className="flex w-max animate-marquee-reverse gap-8 sm:gap-12 lg:gap-16">
              {brands.concat(brands).map((item, i) => (
                <img
                  key={i}
                  src={item.logo}
                  alt={item.name}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
          </div>
        </div>
        {/* MODAL */}
        {activeProduct && (
          <div className="fixed left-0 top-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveProduct(null)}
            />

            {/* Tarjeta */}
            <div
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
              style={{
                backgroundImage: "url('/images/fondo10.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="backdrop-blur-sm p-6 sm:p-8">
                {/* BOTÓN */}
                <button
                  onClick={() => setActiveProduct(null)}
                  className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                  ✕
                </button>

                {/* LOGO */}
                <div className="flex justify-center mb-4">
                  <img
                    src={activeProduct.logo}
                    className="h-10 sm:h-12 object-contain"
                    alt="Marca"
                  />
                </div>

                {/* PRODUCTO */}
                <div className="flex justify-center">
                  <img
                    src={activeProduct.product}
                    className="max-h-56 sm:max-h-64 lg:max-h-72 object-contain drop-shadow-xl"
                    alt="Producto"
                  />
                </div>

                <div className="mt-4 sm:mt-6 flex flex-col items-center">
                  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] text-gray-700 uppercase">
                    Selección especial
                  </span>

                  <h4 className="mt-1 text-xl sm:text-2xl font-extrabold text-gray-900 drop-shadow-sm">
                    PRODUCTO DESTACADO
                  </h4>

                  <div className="mt-2 w-12 sm:w-16 h-[2px] sm:h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
