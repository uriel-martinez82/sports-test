"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const segments = [
  {
    id: "indoor-cycling",
    title: "Indoor Cycling",
    image:
      "/images/segmentos/indoor-cycling-stages.jpg",
    href: "/cotiza/indoor-cycling",
  },
  {
    id: "condominios",
    title: "Condominios",
    image:
      "/images/segmentos/condominios.jpg",
    href: "/cotiza/condominios",
  },
  {
    id: "desarrollos",
    title: "Desarrollos Inmobiliarios",
    image:
      "/images/segmentos/desarrollos-inmobiliarios.jpg",
    href: "/cotiza/desarrollos-inmobiliarios",
  },
  {
    id: "clubes",
    title: "Clubes Deportivos",
    image:
      "/images/segmentos/estudios-hiit.jpg",
    href: "/cotiza/clubes",
  },
  {
    id: "empresas",
    title: "Empresas",
    image:
      "/images/casos/paquetes-01.jpg",
    href: "/cotiza/empresas",
  },
  {
    id: "universidades",
    title: "Universidades",
    image:
      "/images/hero/hero-img-5300.jpg",
    href: "/cotiza/universidades",
  },
];

export default function SpaceTypes() {
  return (
    <section id="soluciones" className="bg-white py-16 lg:py-24">
      {/* Section header */}
      <AnimateIn className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <h2 className="text-4xl lg:text-5xl font-black text-black tracking-tight">
          ¿Qué espacio equipamos?
        </h2>
      </AnimateIn>

      {/* Mobile: horizontal scroll | Desktop: 3-col × 2-row grid */}
      <div className="overflow-x-auto lg:overflow-visible">
        <div className="flex gap-3 px-6 pb-4 w-max lg:w-auto lg:flex-none lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-0.5 lg:bg-gray-100 lg:max-w-7xl lg:mx-auto">
          {segments.map((seg, i) => (
            <AnimateIn
              key={seg.id}
              delay={i * 0.06}
              direction="none"
              className="w-72 flex-shrink-0 lg:w-auto lg:flex-shrink"
            >
              <Link
                href={seg.href}
                className="group relative block overflow-hidden bg-black aspect-[4/3]"
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={seg.image}
                  alt={seg.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80";
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Permanent bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Label + arrow */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex items-end justify-between">
                  <h3 className="text-white font-bold text-xl lg:text-2xl leading-tight">
                    {seg.title}
                  </h3>
                  <ArrowRight
                    size={20}
                    className="text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                  />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
