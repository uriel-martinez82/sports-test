import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

const segments = [
  {
    id: "indoor-cycling",
    title: "Indoor Cycling",
    subtitle: "Estudios boutique de alto rendimiento",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    href: "#contacto",
  },
  {
    id: "condominios",
    title: "Condominios",
    subtitle: "Amenidades que aumentan el valor del desarrollo",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    href: "#contacto",
  },
  {
    id: "desarrollos",
    title: "Desarrollos Inmobiliarios",
    subtitle: "Gimnasios como ventaja competitiva de venta",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    href: "#contacto",
  },
  {
    id: "hoteles",
    title: "Hoteles",
    subtitle: "Fitness centers que elevan la experiencia del huésped",
    image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=800&q=80",
    href: "#contacto",
  },
  {
    id: "empresas",
    title: "Empresas",
    subtitle: "Wellness corporativo para retener talento",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=80",
    href: "#contacto",
  },
  {
    id: "universidades",
    title: "Universidades",
    subtitle: "Instalaciones deportivas de clase mundial",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    href: "#contacto",
  },
];

export default function SpaceTypes() {
  return (
    <section id="soluciones" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn className="mb-14">
          <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Soluciones
          </p>
          <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight max-w-2xl">
            ¿Qué espacio equipamos?
          </h2>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-100">
          {segments.map((seg, i) => (
            <AnimateIn key={seg.id} delay={i * 0.07} direction="none">
              <Link
                href={seg.href}
                className="group relative block overflow-hidden bg-black"
                style={{ aspectRatio: "4/3" }}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={seg.image}
                  alt={seg.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Default overlay */}
                <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/25" />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-black text-xl lg:text-2xl leading-tight tracking-tight">
                    {seg.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1 font-light transition-all duration-300 max-h-0 overflow-hidden group-hover:max-h-8 group-hover:mt-1.5">
                    {seg.subtitle}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC1C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
