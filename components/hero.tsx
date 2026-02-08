"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Carousel3D from "./Carousel3D";
import TestimonialCarousel from "./TestimonialCarousel";
import ClientsCarousel from "./ClientsCarousel";

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
];

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Main Hero */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            {/* Desktop */}
            <source
              src="/video/videoinicio.mp4"
              media="(min-width: 768px)"
              type="video/mp4"
            />

            {/* Mobile */}
            <source
              src="/video/videoinicio3.mp4"
              media="(max-width: 767px)"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* "Encuentra el lubricante" Banner */}

      <div className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] overflow-hidden border-b border-[#C9A227]/20">
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.1),transparent_50%)]" />

        {/* Hexágonos fondo */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <pattern
              id="hexagons-sold"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="6,0 12,3 12,9 6,12 0,9 0,3"
                fill="none"
                stroke="#C9A227"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-sold)" />
          </svg>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227] hidden sm:block" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white text-center tracking-wider uppercase">
              <span className="text-[#C9A227]">Encuentra el lubricante</span>{" "}
              adecuado par tu vehículo
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227] hidden sm:block" />
          </div>
          <p className="text-center text-gray-400 mt-3 text-sm md:text-base">
            Calidad garantizada para tu motor
          </p>
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
            <div className="absolute inset-0 bg-secondary">
              <div className="absolute inset-0 opacity-20">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <pattern
                    id={`hexagons-${index}`}
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <polygon
                      points="4,0 8,2 8,6 4,8 0,6 0,2"
                      fill="none"
                      stroke="#0E0E0E"
                      strokeWidth="0.3"
                    />
                  </pattern>
                  <rect
                    width="100"
                    height="100"
                    fill={`url(#hexagons-${index})`}
                  />
                </svg>
              </div>
            </div>

            {/* Image with diagonal clip */}
            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  category.position === "right"
                    ? "polygon(0 0, 65% 0, 55% 100%, 0 100%)"
                    : "polygon(45% 0, 100% 0, 100% 100%, 35% 100%)",
              }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/50" />
            </div>

            {/* Content */}
            <div
              className={`absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 ${category.position === "right" ? "items-end" : "items-start"}`}
            >
              <div
                className={`flex items-center gap-2 md:gap-3 ${category.position === "left" ? "flex-row-reverse" : ""}`}
              >
                <div className="w-6 md:w-8 h-[2px] bg-primary" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide text-center sm:text-left">
                  {category.title}
                </h3>
              </div>
              <div
                className={`mt-3 md:mt-4 flex items-center gap-2 text-primary group-hover:gap-3 transition-all ${
                  category.position === "left" ? "flex-row-reverse" : ""
                }`}
              >
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  CONOCE
                </span>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* LO MÁS VENDIDO */}
      <div className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#141414] via-[#0e0e0e] to-[#080808] overflow-hidden border-b border-[#C9A227]/20">
        {/* Glow dorado superior */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.18),transparent_55%)]" />

        {/* Ruido / textura */}
        <div className="absolute inset-0 bg-[url('/images/textures/noise.png')] opacity-[0.07] mix-blend-overlay" />

        {/* Patrón hexagonal sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <pattern
              id="hexagons-sold"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="6,0 12,3 12,9 6,12 0,9 0,3"
                fill="none"
                stroke="#C9A227"
                strokeWidth="0.4"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-sold)" />
          </svg>
        </div>

        {/* Título */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic tracking-wider uppercase">
              <span className="text-[#C9A227] drop-shadow-[0_0_12px_rgba(201,162,39,0.7)]">
                Lo más
              </span>{" "}
              <span className="text-white">Vendido</span>
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227]" />
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Los productos favoritos de nuestros clientes, diseñados para máximo
            rendimiento.
          </p>
        </div>
      </div>

      {/* Carrusel 3D - Lo más Popular */}
      <div
        className="relative py-20 md:py-24 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero/fondo1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Oscurecer fondo */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        {/* Glow central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_60%)]" />

        {/* Bordes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-40" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
          {/* Logos en móvil */}
          <div className="flex lg:hidden gap-20 mb-4">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo 1"
              width={90}
              height={90}
              className="object-contain opacity-80"
            />
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo 2"
              width={90}
              height={90}
              className="object-contain opacity-80"
            />
          </div>

          {/* Logo Izquierdo */}
          <div className="hidden lg:block w-40 xl:w-48 opacity-80 hover:opacity-100 transition">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo izquierdo"
              width={200}
              height={200}
              className="object-contain drop-shadow-[0_0_14px_rgba(201,162,39,0.45)]"
            />
          </div>

          {/* Carrusel */}
          <div
            className=" relative
                w-[92vw] sm:w-[360px] md:w-[520px] lg:w-[700px] xl:w-[820px]
                max-w-[820px]
                h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]
                px-2 sm:px-6 lg:px-14
                flex-shrink-0"
          >
            <Carousel3D
              items={[
                {
                  content: (
                    <Image
                      src="/images/inicio/masvendido/calciorojo.png"
                      alt="Producto 1"
                      fill
                      className="object-contain"
                    />
                  ),
                  color: "255,193,7",
                },
                {
                  content: (
                    <Image
                      src="/images/inicio/masvendido/litioazul.png"
                      alt="Producto 2"
                      fill
                      className="object-contain"
                    />
                  ),
                  color: "255,193,7",
                },
              ]}
            />
          </div>

          {/* Logo Derecho */}
          <div className="hidden lg:block w-40 xl:w-48 opacity-80 hover:opacity-100 transition">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo derecho"
              width={200}
              height={200}
              className="object-contain drop-shadow-[0_0_14px_rgba(201,162,39,0.45)]"
            />
          </div>
        </div>
      </div>

      {/* "Lo mas popular" */}
      <div className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#141414] via-[#0e0e0e] to-[#080808] overflow-hidden border-b border-[#C9A227]/20">
        {/* Glow dorado superior */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.18),transparent_55%)]" />

        {/* Ruido / textura */}
        <div className="absolute inset-0 bg-[url('/images/textures/noise.png')] opacity-[0.07] mix-blend-overlay" />

        {/* Patrón hexagonal sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <pattern
              id="hexagons-sold"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="6,0 12,3 12,9 6,12 0,9 0,3"
                fill="none"
                stroke="#C9A227"
                strokeWidth="0.4"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-sold)" />
          </svg>
        </div>

        {/* Título */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic tracking-wider uppercase">
              <span className="text-[#C9A227] drop-shadow-[0_0_12px_rgba(201,162,39,0.7)]">
                Lo más
              </span>{" "}
              <span className="text-white">Popular</span>
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227]" />
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Las elecciones tops de esta temporada
          </p>
        </div>
      </div>

      {/* Carrusel 3D - Lo más Popular */}
      <div
        className="relative py-20 md:py-24 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero/fondo1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Oscurecer fondo */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        {/* Glow central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_60%)]" />

        {/* Bordes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-40" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
          {/* Logos en móvil */}
          <div className="flex lg:hidden gap-20 mb-4">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo 1"
              width={90}
              height={90}
              className="object-contain opacity-80"
            />
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo 2"
              width={90}
              height={90}
              className="object-contain opacity-80"
            />
          </div>

          {/* Logo Izquierdo */}
          <div className="hidden lg:block w-40 xl:w-48 opacity-80 hover:opacity-100 transition">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo izquierdo"
              width={200}
              height={200}
              className="object-contain drop-shadow-[0_0_14px_rgba(201,162,39,0.45)]"
            />
          </div>

          {/* Carrusel */}
          <div
            className=" relative
                w-[92vw] sm:w-[360px] md:w-[520px] lg:w-[700px] xl:w-[820px]
                max-w-[820px]
                h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]
                px-2 sm:px-6 lg:px-14
                flex-shrink-0"
          >
            <Carousel3D
              items={[
                {
                  content: (
                    <Image
                      src="/images/inicio/maspopulares/chicle.png"
                      alt="Producto 1"
                      fill
                      className="object-contain"
                    />
                  ),
                  color: "255, 193, 7",
                },
                {
                  content: (
                    <Image
                      src="/images/inicio/maspopulares/dolcegabbana.png"
                      alt="Producto 2"
                      fill
                      className="object-contain"
                    />
                  ),
                  color: "255, 152, 0",
                },
                {
                  content: (
                    <Image
                      src="/images/inicio/maspopulares/fresa.png"
                      alt="Producto 3"
                      fill
                      className="object-contain"
                    />
                  ),
                  color: "76, 175, 80",
                },
                {
                  content: (
                    <Image
                      src="/images/inicio/maspopulares/newcar.png"
                      alt="Producto 4"
                      fill
                      className="object-contain"
                    />
                  ),
                  color: "33, 150, 243",
                },
              ]}
            />
          </div>

          {/* Logo Derecho */}
          <div className="hidden lg:block w-40 xl:w-48 opacity-80 hover:opacity-100 transition">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo derecho"
              width={200}
              height={200}
              className="object-contain drop-shadow-[0_0_14px_rgba(201,162,39,0.45)]"
            />
          </div>
        </div>
      </div>

{/* "Terecomendamos" */}
      <div className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#141414] via-[#0e0e0e] to-[#080808] overflow-hidden border-b border-[#C9A227]/20">
        {/* Glow dorado superior */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.18),transparent_55%)]" />

        {/* Ruido / textura */}
        <div className="absolute inset-0 bg-[url('/images/textures/noise.png')] opacity-[0.07] mix-blend-overlay" />

        {/* Patrón hexagonal sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <pattern
              id="hexagons-sold"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="6,0 12,3 12,9 6,12 0,9 0,3"
                fill="none"
                stroke="#C9A227"
                strokeWidth="0.4"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-sold)" />
          </svg>
        </div>

        {/* Título */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic tracking-wider uppercase">
              <span className="text-[#C9A227] drop-shadow-[0_0_12px_rgba(201,162,39,0.7)]">
                Te
              </span>{" "}
              <span className="text-white">Recomendamos</span>
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227]" />
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Selección especial para ti
          </p>
        </div>
      </div>

      
      {/* Carrusel 3D - Lo más Popular */}
      <div
        className="relative py-20 md:py-24 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero/fondo1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Oscurecer fondo */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        {/* Glow central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_60%)]" />

        {/* Bordes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-40" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
          {/* Logos en móvil */}
          <div className="flex lg:hidden gap-20 mb-4">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo 1"
              width={90}
              height={90}
              className="object-contain opacity-80"
            />
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo 2"
              width={90}
              height={90}
              className="object-contain opacity-80"
            />
          </div>

          {/* Logo Izquierdo */}
          <div className="hidden lg:block w-40 xl:w-48 opacity-80 hover:opacity-100 transition">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo izquierdo"
              width={200}
              height={200}
              className="object-contain drop-shadow-[0_0_14px_rgba(201,162,39,0.45)]"
            />
          </div>

          {/* Carrusel */}
          <div
            className=" relative
                w-[92vw] sm:w-[360px] md:w-[520px] lg:w-[700px] xl:w-[820px]
                max-w-[820px]
                h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]
                px-2 sm:px-6 lg:px-14
                flex-shrink-0"
          >
            <Carousel3D
            items={[
              {
                content: (
                  <Image
                    src="/images/inicio/recomendado/15w40.png"
                    alt="Producto 1"
                    fill
                    className="object-contain"
                  />
                ),
                color: "255, 193, 7",
              },
              {
                content: (
                  <Image
                    src="/images/inicio/recomendado/hidraulico68.png"
                    alt="Producto 2"
                    fill
                    className="object-contain"
                  />
                ),
                color: "255, 152, 0",
              },
              {
                content: (
                  <Image
                    src="/images/inicio/recomendado/Sae25w60.png"
                    alt="Producto 3"
                    fill
                    className="object-contain"
                  />
                ),
                color: "76, 175, 80",
              },
            ]}
          />
          </div>

          {/* Logo Derecho */}
          <div className="hidden lg:block w-40 xl:w-48 opacity-80 hover:opacity-100 transition">
            <Image
              src="/images/logoApolo.png" // CAMBIA
              alt="Logo derecho"
              width={200}
              height={200}
              className="object-contain drop-shadow-[0_0_14px_rgba(201,162,39,0.45)]"
            />
          </div>
        </div>
      </div>


      

      {/* "Nuestros Clientes" */}

      <div className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] overflow-hidden border-b border-[#C9A227]/20">
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.1),transparent_50%)]" />

        {/* Hexágonos fondo */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <pattern
              id="hexagons-sold"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="6,0 12,3 12,9 6,12 0,9 0,3"
                fill="none"
                stroke="#C9A227"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-sold)" />
          </svg>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227] hidden sm:block" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white text-center tracking-wider uppercase">
              <span className="text-[#C9A227]">Nuestros </span> Clientes
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227] hidden sm:block" />
          </div>
          <p className="text-center text-gray-400 mt-3 text-sm md:text-base">
            La mejor experiencia en lubricantes
          </p>
        </div>
      </div>

      {/* Carrusel de Clientes - Logos/Fotos */}
      <ClientsCarousel
        clients={[
          {
            logo: "/images/products/placeholder.jpg",
          },
          {
            logo: "/images/products/placeholder.jpg",
            size: { width: 180, height: 90 },
          },
          {
            logo: "/images/products/placeholder.jpg",
          },
          {
            logo: "/images/products/placeholder.jpg",
            size: { width: 140, height: 70 },
          },
          {
            logo: "/images/products/placeholder.jpg",
          },
          {
            logo: "/images/products/placeholder.jpg",
            size: { width: 200, height: 100 },
          },
          {
            logo: "/images/products/placeholder.jpg",
          },
          {
            logo: "/images/products/placeholder.jpg",
            size: { width: 160, height: 80 },
          },
        ]}
      />

      {/* "Lo que dicen en Google" */}

      <div className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] overflow-hidden border-b border-[#C9A227]/20">
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.1),transparent_50%)]" />

        {/* Hexágonos fondo */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <pattern
              id="hexagons-sold"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="6,0 12,3 12,9 6,12 0,9 0,3"
                fill="none"
                stroke="#C9A227"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-sold)" />
          </svg>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227] hidden sm:block" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white text-center tracking-wider uppercase">
              <span className="text-[#C9A227]">Lo que dicen</span> en Google
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227] hidden sm:block" />
          </div>
          <p className="text-center text-gray-400 mt-3 text-sm md:text-base">
            Reseñas de clientes satisfechos
          </p>
        </div>
      </div>

      {/* Carrusel de Testimonios - Google Reviews */}
      <TestimonialCarousel
        testimonials={[
          {
            name: "Carlos Rodríguez",
            rating: 5,
            text: "Excelente atención y productos de primera calidad. El aceite que me recomendaron mejoró significativamente el rendimiento de mi moto.",
            image:
              "https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=C9A227&color=fff",
          },
          {
            name: "María González",
            rating: 5,
            text: "Los mejores lubricantes de la zona. Personal muy capacitado y precios justos. Totalmente recomendada.",
            image:
              "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=C9A227&color=fff",
          },
          {
            name: "Pedro Martínez",
            rating: 5,
            text: "Desde que uso los productos de Apolo Lubricantes, mi motor funciona como nuevo. Servicio profesional y rapido.",
            image:
              "https://ui-avatars.com/api/?name=Pedro+Martinez&background=C9A227&color=fff",
          },
          {
            name: "Ana López",
            rating: 5,
            text: "Gran variedad de productos para todo tipo de vehículos. El atendimento es excepcional y muy profesionales.",
            image:
              "https://ui-avatars.com/api/?name=Ana+Lopez&background=C9A227&color=fff",
          },
          {
            name: "Roberto Sánchez",
            rating: 5,
            text: "Excelente local con productos de primera. Me han atendido siempre con rapides y eficiencia. Muy satisfecho.",
            image:
              "https://ui-avatars.com/api/?name=Roberto+Sanchez&background=C9A227&color=fff",
          },
        ]}
      />
    </section>
  );
}
