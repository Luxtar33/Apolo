"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const categoryBanners = [
  {
    id: "automovil",
    title: "AUTOMOVILES",
    image: "/images/categories/automobiles.jpg",
    href: "/productos?category=automovil",
    position: "right" as const,
  },
  {
    id: "vehiculo-pesado",
    title: "VEHICULO PESADO",
    image: "/images/categories/trucks.jpg",
    href: "/productos?category=vehiculo-pesado",
    position: "left" as const,
  },
  {
    id: "motocicleta",
    title: "MOTOCICLETA",
    image: "/images/categories/motorcycles.jpg",
    href: "/productos?category=motocicleta",
    position: "right" as const,
  },
]

export function Hero() {
  return (
    <section className="relative">
      {/* Main Hero */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background removed to show global fondo.jpeg */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/70 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic text-white leading-tight">
                LIBERA TODO TU POTENCIAL
              </h1>
              
              <div className="w-16 h-1 bg-[#C21A1A]" />
              
              <Link 
                href="/productos"
                className="inline-flex items-center gap-2 text-white hover:text-[#C21A1A] transition-colors group w-fit"
              >
                <span className="text-sm md:text-base font-medium tracking-wide">
                  DESCUBRA NUESTRAS INNOVADORAS GAMAS
                </span>
                <div className="w-6 h-6 rounded-full bg-[#C21A1A] flex items-center justify-center group-hover:bg-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-white group-hover:text-[#C21A1A]" />
                </div>
              </Link>
            </div>

            {/* Product Image */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative w-[350px] h-[450px]">
                <Image
                  src="/images/oil-bottle-hero.jpg"
                  alt="Aceite Apolo Premium"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Encuentra el lubricante" Banner */}
      <div className="bg-white py-8 relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <pattern id="hexagons" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="5,0 10,2.5 10,7.5 5,10 0,7.5 0,2.5" fill="none" stroke="#1C1C1C" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#hexagons)"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-[#C21A1A] hidden sm:block" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-[#1C1C1C] text-center">
              ENCUENTRA EL LUBRICANTE ADECUADO PARA TU VEHICULO
            </h2>
          </div>
        </div>
      </div>

      {/* Category Banners */}
      <div className="flex flex-col">
        {categoryBanners.map((category, index) => (
          <Link 
            key={category.id}
            href={category.href}
            className="group relative h-[200px] md:h-[250px] overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#2F2F2F]">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
                  <pattern id={`hexagons-${index}`} width="8" height="8" patternUnits="userSpaceOnUse">
                    <polygon points="4,0 8,2 8,6 4,8 0,6 0,2" fill="none" stroke="#0B0B0B" strokeWidth="0.3"/>
                  </pattern>
                  <rect width="100" height="100" fill={`url(#hexagons-${index})`}/>
                </svg>
              </div>
            </div>

            {/* Image with diagonal clip */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: category.position === "right" 
                  ? "polygon(0 0, 65% 0, 55% 100%, 0 100%)" 
                  : "polygon(45% 0, 100% 0, 100% 100%, 35% 100%)"
              }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2F2F2F]/50" />
            </div>

            {/* Content */}
            <div 
              className={`absolute inset-0 flex flex-col justify-center ${
                category.position === "right" 
                  ? "items-end pr-8 md:pr-16 lg:pr-24" 
                  : "items-start pl-8 md:pl-16 lg:pl-24"
              }`}
            >
              <div className={`flex items-center gap-3 ${category.position === "left" ? "flex-row-reverse" : ""}`}>
                <div className="w-8 h-1 bg-[#C21A1A]" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div 
                className={`mt-4 flex items-center gap-2 text-[#C21A1A] group-hover:gap-3 transition-all ${
                  category.position === "left" ? "flex-row-reverse" : ""
                }`}
              >
                <span className="text-sm font-medium tracking-wide">CONOCE</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
