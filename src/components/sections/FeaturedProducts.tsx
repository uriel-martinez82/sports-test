import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const products = [
  {
    category: "Bicicletas Indoor Cycling",
    headline: "Potencia real. Datos reales. Resultados reales.",
    description:
      "Las bicicletas Stages combinan precisión de medición de potencia con el diseño más duradero del mercado. Ideales para estudios boutique y áreas de cycling de alto tráfico.",
    cta: "Conocer equipos",
    href: "#contacto",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=900&q=80",
    flip: false,
  },
  {
    category: "Equipos de Fuerza",
    headline: "Infraestructura para atletas serios.",
    description:
      "Racks, mancuerneros, máquinas de cable y equipo funcional Freemotion y Unofit. Diseñados para rendir en entornos comerciales de alta exigencia durante años.",
    cta: "Ver catálogo",
    href: "#contacto",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80",
    flip: true,
  },
  {
    category: "Caminadoras y Cardio",
    headline: "El equipo cardiovascular que tus miembros esperan.",
    description:
      "Desde caminadoras comerciales de última generación hasta elípticos y remos, ofrecemos la gama completa de cardio con pantallas interactivas y conectividad para tu gimnasio.",
    cta: "Explorar cardio",
    href: "#contacto",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=900&q=80",
    flip: false,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="equipos" className="bg-white">
      {products.map((p, i) => (
        <div
          key={p.category}
          className={`grid grid-cols-1 lg:grid-cols-2 ${
            i < products.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          {/* Image */}
          <AnimateIn
            direction={p.flip ? "right" : "left"}
            className={`relative overflow-hidden ${p.flip ? "lg:order-2" : "lg:order-1"} [aspect-ratio:4/3]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={p.category}
              className="w-full h-full object-cover object-center"
            />
          </AnimateIn>

          {/* Text */}
          <AnimateIn
            direction={p.flip ? "left" : "right"}
            delay={0.1}
            className={`flex flex-col justify-center px-8 py-16 lg:px-14 xl:px-20 ${
              p.flip ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <p className="text-[#CC1C1C] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {p.category}
            </p>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-black leading-tight tracking-tight mb-5">
              {p.headline}
            </h3>
            <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-8 max-w-md">
              {p.description}
            </p>
            <Link
              href={p.href}
              className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all duration-200 group"
            >
              {p.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </AnimateIn>
        </div>
      ))}
    </section>
  );
}
