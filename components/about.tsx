import { Award, Users, Clock, Truck, Target, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { icon: Clock, value: "15+", label: "Años de experiencia" },
  { icon: Users, value: "5,000+", label: "Clientes satisfechos" },
  { icon: Truck, value: "500+", label: "Entregas mensuales" },
  { icon: Award, value: "100%", label: "Productos certificados" },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="
        relative
        
      "
    >
      <div className="w-full  space-y-24 ">
        {/* QUIÉNES SOMOS */}
        <div
          className="relative w-full min-h-[70vh]  overflow-hidden "
          style={{
            backgroundImage: "url('/images/about/fondoNosotros.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay degradado (más elegante que negro plano) */}

          {/* Contenido */}
          <div className="relative z-10 px-6 py-20 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* TEXTO IZQUIERDA */}
            <div className="text-white max-w-2xl">
              <span className="text-yellow-400 uppercase tracking-widest text-sm">
                Sobre Nosotros
              </span>

              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
                Apolo <span className="text-yellow-400">Lubricantes</span>
              </h2>

              <p className="mt-6 text-gray-200 leading-relaxed">
                Somos una empresa dedicada a la importación y distribución de
                lubricantes de alto rendimiento para los sectores automotriz,
                industrial y maquinaria pesada, con cobertura a nivel nacional.
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Trabajamos con productos originales y certificados, brindando
                asesoría técnica especializada y un servicio confiable que
                protege la inversión de nuestros clientes.
              </p>

              <div className="mt-8 bg-black/40 backdrop-blur-sm border-l-4 border-yellow-400 p-4 rounded-md">
                <p className="italic text-gray-200">
                  Creemos que un lubricante de calidad marca la diferencia en la
                  eficiencia, seguridad y vida útil de los equipos.
                </p>
              </div>
            </div>

            {/* TARJETAS ESTADÍSTICAS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="
                          relative
                          w-full
                          max-w-md
                          h-[160px]
                          rounded-2xl
                          p-6
                          bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#000000]
                          border border-yellow-500/20
                          shadow-[0_0_40px_rgba(255,193,7,0.25)]
                          overflow-hidden
                "
                  >
                    {/* Glow dorado */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,193,7,0.18),transparent_60%)]" />

                    {/* Contenido */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      {/* Ícono */}
                      <div className="w-11 h-11 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-yellow-400" />
                      </div>

                      {/* Texto */}
                      <div>
                        <h3 className="text-3xl font-semibold text-white">
                          {stat.value}
                        </h3>
                        <p className="mt-1 text-sm text-gray-300">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"></div>
        </div>

        {/* NUESTRA HISTORIA */}

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div
            className="
              bg-black/60
              backdrop-blur-xl
              border border-yellow-400/30
              rounded-3xl
              p-10
              shadow-[0_0_50px_rgba(255,193,7,0.25)]
            "
          >
            <span className="text-yellow-400 uppercase tracking-widest text-sm">
              Nuestra Historia
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Construyendo confianza con el tiempo
            </h3>

            <p className="mt-6 text-white/80 leading-relaxed">
              Apolo Lubricantes nace con la visión de ofrecer soluciones
              confiables y de alto desempeño en un mercado cada vez más
              exigente. A lo largo de los años hemos fortalecido nuestra red
              logística, consolidando relaciones duraderas con clientes y
              aliados estratégicos a nivel nacional.
            </p>
          </div>
        </div>

        <div className="relative w-full bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto ">
            {/* MISIÓN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="order-2 lg:order-1">
                <span className="text-yellow-500 uppercase tracking-widest text-sm">
                  Nuestra Misión
                </span>
                <h3 className="mt-3 text-3xl lg:text-4xl font-extrabold text-gray-900">
                  Compromiso con la calidad
                </h3>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Brindar lubricantes de alto rendimiento que garanticen la
                  eficiencia, seguridad y durabilidad de los equipos
                  automotrices e industriales, ofreciendo asesoría técnica y un
                  servicio confiable a nivel nacional.
                </p>
              </div>

              {/* Imagen derecha */}
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <img
                  src="/images/about/mision.png"
                  alt="Misión Apolo Lubricantes"
                  className="max-h-[380px] w-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* VISIÓN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen izquierda */}
              <div className="order-1 lg:order-1 flex justify-center items-center">
                <img
                  src="/images/about/vision.png"
                  alt="Visión Apolo Lubricantes"
                  className="max-h-[380px] w-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Texto */}
              <div className="order-2 lg:order-2">
                <span className="text-yellow-500 uppercase tracking-widest text-sm">
                  Nuestra Visión
                </span>
                <h3 className="mt-3 text-3xl lg:text-4xl font-extrabold text-gray-900">
                  Ser líderes a nivel nacional
                </h3>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Consolidarnos como una empresa líder en la distribución de
                  lubricantes, reconocida por la calidad de nuestros productos,
                  innovación constante y confianza construida con nuestros
                  clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
