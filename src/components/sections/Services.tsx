import Link from "next/link";
import { ArrowRight, RefreshCw, Wrench, Users } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const services = [
  {
    icon: RefreshCw,
    title: "Arrendamiento",
    description:
      "Accede a equipamiento premium sin inversión inicial. Planes de renta flexibles con mantenimiento incluido, ideales para proyectos nuevos o temporadas de alta demanda.",
    cta: "Conocer planes",
    href: "#contacto",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Servicio técnico certificado con cobertura nacional. Mantenimiento preventivo y correctivo para mantener tus equipos funcionando al 100% en todo momento.",
    cta: "Solicitar servicio",
    href: "#contacto",
  },
  {
    icon: Users,
    title: "Asesoría Profesional",
    description:
      "Consultoría integral de diseño de espacios fitness. Desde el layout y el equipamiento hasta la imagen del área, optimizamos cada metro cuadrado.",
    cta: "Agendar consulta",
    href: "#contacto",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-28 lg:py-36 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn className="mb-14">
          <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Servicios
          </p>
          <h2 className="text-4xl lg:text-6xl font-black text-black tracking-tight">
            Más que equipamiento
          </h2>
        </AnimateIn>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimateIn
                key={s.title}
                delay={i * 0.1}
                className="bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="p-12 flex flex-col h-full gap-7">
                  <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center">
                    <Icon size={18} className="text-[#CC1C1C]" />
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-black font-bold text-xl leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-black/45 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 text-black/60 text-xs font-semibold uppercase tracking-widest hover:text-black hover:gap-3 transition-all duration-200 group"
                  >
                    {s.cta}
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
