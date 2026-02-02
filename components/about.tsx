import { Award, Users, Clock, Truck } from "lucide-react"

const stats = [
  { icon: Clock, value: "15+", label: "Años de experiencia" },
  { icon: Users, value: "5,000+", label: "Clientes satisfechos" },
  { icon: Truck, value: "500+", label: "Entregas mensuales" },
  { icon: Award, value: "100%", label: "Productos certificados" },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground text-balance">
              Tu socio confiable en <span className="text-primary">lubricantes</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En <strong className="text-foreground">Apolo Lubricantes</strong>, nos especializamos en la distribución 
                de aceites y lubricantes de alta calidad para todo tipo de vehículos y maquinaria.
              </p>
              <p>
                Contamos con una amplia gama de productos que incluyen aceites de motor, líquidos de transmisión, 
                refrigerantes, grasas y más, todos diseñados para maximizar el rendimiento y la vida útil de tus equipos.
              </p>
              <p>
                Nuestro compromiso es brindarte productos certificados con los más altos estándares de calidad, 
                respaldados por un servicio de atención personalizado y entregas puntuales.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
