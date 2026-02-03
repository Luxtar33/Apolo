import { Award, Users, Clock, Truck, Target, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

        {/* Nueva sección de Misión y Visión */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          <Card className="bg-background border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                En Apolo Lubricantes nos dedicamos en ser los mejores importadores y distribuidores de lubricantes de aceites a nivel nacional llegando a todos los rincones del país con productos originales de máxima calidad, asesorías técnicas especializadas y un servicio confiable, contribuyendo al óptimo desempeño de motores, gasolineros, petroleros y maquinarias e impulsando su durabilidad y la satisfacción de nuestros clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser el referente líder en lubricantes en el Perú, impulsando el desarrollo automotriz e industrial mediante una red logística innovadora, tecnología de vanguardia y un compromiso inquebrantable con la sostenibilidad y la confianza de nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
