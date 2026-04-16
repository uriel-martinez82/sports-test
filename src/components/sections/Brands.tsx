"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

type Brand = {
  id: string;
  name: string;
  category: string;
  logoSrc?: string;
};

const brands: Brand[] = [
  {
    id: "stages",
    name: "Stages",
    category: "Indoor Cycling",
    logoSrc:
      "https://stagescycling.com/static/version1761039453/frontend/Stages/default/en_US/images/logo.svg",
  },
  { id: "freemotion", name: "FREEMOTION.", category: "Cardio & Fuerza" },
  { id: "unofit",     name: "UNOFIT",      category: "Equipamiento" },
  { id: "pavigym",   name: "PAVIGYM",     category: "Pisos" },
  { id: "impulse",   name: "IMPULSE",     category: "Fuerza" },
];

function BrandItem({ brand }: { brand: Brand }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="flex items-center gap-12 px-16 py-10 border-r border-black/8 group cursor-default">
      <div className="flex flex-col items-center gap-2">
        {brand.logoSrc && !logoFailed ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={brand.logoSrc}
            alt={brand.name}
            onError={() => setLogoFailed(true)}
            className="h-8 object-contain invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <span className="text-black/70 font-black text-4xl tracking-tight group-hover:text-black transition-colors duration-300">
            {brand.name}
          </span>
        )}
        <span className="text-black/30 text-xs uppercase tracking-[0.18em] font-medium">
          {brand.category}
        </span>
      </div>
    </div>
  );
}

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section
      id="marcas"
      className="bg-white py-20 lg:py-28 overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-black tracking-tight">
            Marcas que distribuimos
          </h2>
        </AnimateIn>
      </div>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden border-t border-b border-black/8 py-px">
        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .brands-marquee {
            animation: marquee-scroll 28s linear infinite;
          }
          .brands-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="brands-marquee flex w-max">
          {doubled.map((brand, i) => (
            <BrandItem key={`${brand.id}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
