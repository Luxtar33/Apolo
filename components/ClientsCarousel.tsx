"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Client {
  logo: string;
  size?: {
    width: number;
    height: number;
  };
}

interface ClientsCarouselProps {
  clients: Client[];
}

export default function ClientsCarousel({ clients }: ClientsCarouselProps) {
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(5);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Duplicar elementos suficientes veces para animación infinita
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <div className="relative bg-[#0d0d0d] py-16 overflow-hidden">
      {/* Fondo con patrón de rejilla */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,1px) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Brillo superior */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C9A227]/8 via-transparent to-transparent pointer-events-none" />

      {/* Borde superior dorado con brillo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227]/60 to-[#C9A227]/20" />

      {/* Borde inferior dorado */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-40" />

      {/* Carrusel con animación infinita */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap items-center py-8">
          {duplicatedClients.map((client, index) => (
            <div
              key={`client-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
              style={{
                width: (client.size?.width || 160) + 20,
                height: (client.size?.height || 80) + 20,
              }}
            >
              {/* Marco decorativo */}
              <div className="relative group">
                {/* Borde dorado animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A227] via-[#FFD700] to-[#C9A227] rounded-lg opacity-40 group-hover:opacity-80 transition-all duration-500 blur-[1px] group-hover:blur-0" />
                
                {/* Marco principal */}
                <div className="relative bg-[#1a1a1a] rounded-lg p-3 border border-[#C9A227]/30 group-hover:border-[#C9A227]/70 transition-all duration-500">
                  {/* Esquina superior izquierda */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A227] rounded-tl-lg" />
                  {/* Esquina superior derecha */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A227] rounded-tr-lg" />
                  {/* Esquina inferior izquierda */}
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A227] rounded-bl-lg" />
                  {/* Esquina inferior derecha */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A227] rounded-br-lg" />
                  
                  {/* Imagen */}
                  <Image
                    src={client.logo}
                    alt={`Cliente ${index + 1}`}
                    width={client.size?.width || 160}
                    height={client.size?.height || 80}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10"
                  />
                </div>
                
                {/* Brillo en hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#C9A227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
