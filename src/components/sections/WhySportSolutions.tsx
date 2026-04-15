import Link from "next/link";
import { Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const bullets = [
  "Distribuidores exclusivos de marcas líderes en México",
  "Más de 100 proyectos equipados e instalados por año",
  "Equipo técnico certificado por cada fabricante",
  "Asesoría integral: diseño, equipamiento e instalación",
];

export default function WhySportSolutions() {
  return (
    <section className="bg-black py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <AnimateIn>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Por qué elegirnos
              </p>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-6">
                No solo vendemos equipos. Entregamos proyectos listos.
              </h2>
              <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                Desde la consultoría inicial hasta la instalación y puesta en marcha,
                acompañamos cada etapa para garantizar el mejor resultado.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <ul className="flex flex-col gap-4 mb-10">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                      <Check size={11} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="text-white/75 text-sm lg:text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <Link
                href="#contacto"
                className="inline-flex items-center border border-white/70 text-white font-semibold text-base px-10 py-4 hover:bg-white hover:text-black transition-all duration-200 tracking-wide"
              >
                Habla con un especialista
              </Link>
            </AnimateIn>
          </div>

          {/* Right: image */}
          <AnimateIn direction="left" delay={0.1} className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1200&q=80"
                alt="Gimnasio profesional equipado por Sport Solutions"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating stat */}
            <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
              <div className="text-4xl font-black text-white leading-none">+15</div>
              <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                Años de experiencia
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
