import { AnimateIn } from "@/components/ui/AnimateIn";

const brands = [
  { name: "Stages",     category: "Indoor Cycling" },
  { name: "Freemotion", category: "Cardio & Fuerza" },
  { name: "Unofit",     category: "Equipamiento" },
  { name: "Pavigym",    category: "Pisos" },
  { name: "Impulse",    category: "Fuerza" },
  { name: "Xebex",      category: "Funcional" },
];

export default function Brands() {
  return (
    <section id="marcas" className="bg-[#111111] py-28 lg:py-36 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Marcas
            </p>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
              Marcas que distribuimos
            </h2>
          </div>
          <p className="text-white/35 text-sm max-w-xs leading-relaxed sm:text-right">
            Distribuidores autorizados y certificados en México
          </p>
        </AnimateIn>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-t border-b border-white/8 py-px">
        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .brands-marquee { animation: marquee-scroll 28s linear infinite; }
          .brands-marquee:hover { animation-play-state: paused; }
        `}</style>

        <div className="brands-marquee flex w-max">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-16 py-10 border-r border-white/8 group cursor-default"
            >
              {/* Logo placeholder */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/90 font-black text-4xl tracking-tight group-hover:text-[#CC1C1C] transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-white/30 text-xs uppercase tracking-[0.18em] font-medium">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
