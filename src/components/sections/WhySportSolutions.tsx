import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

const sections = [
  {
    id: "services",
    imageRight: true,
    dark: false,
    image:
      "/images/hero/cotiza-tu-proyecto.jpg",
    title: "No solo vendemos equipos",
    subtitle: "Creamos el gimnasio perfecto para tu espacio",
    body: "Asesoría, diseño de layout, instalación certificada y soporte continuo en los 32 estados de México.",
    cta: "Conoce nuestros servicios",
    href: "#contacto",
  },
  {
    id: "brands-feature",
    imageRight: false,
    dark: false,
    image:
      "https://stagescycling.com/media/.renditions/wysiwyg/stages-cycling/category-pages/sc-series/stages_eqx_scbikes_700x450.jpg",
    title: "Las mejores marcas del mundo",
    subtitle: "Distribuidores exclusivos de Stages y Freemotion en México",
    body: "La tecnología que usan los mejores estudios y clubes del mundo, ahora disponible para tu proyecto.",
    cta: "Ver marcas",
    href: "#marcas",
  },
  {
    id: "support",
    imageRight: true,
    dark: false,
    image:
      "/images/mantenimiento/maintenance-2.jpg",
    title: "Soporte que no te abandona",
    subtitle: "Garantías directas. Técnicos certificados.",
    body: "Refacciones originales, mantenimiento preventivo y asistencia técnica en todo el país.",
    cta: "Conoce el servicio",
    href: "#contacto",
  },
];

export default function WhySportSolutions() {
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} className={s.dark ? "bg-black" : "bg-white"}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div
              className={`relative min-h-[340px] lg:min-h-[600px] overflow-hidden ${
                s.imageRight ? "lg:order-2" : "lg:order-1"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=80'; }}
              />
            </div>

            {/* Text */}
            <AnimateIn
              delay={0.12}
              className={`flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24 ${
                s.imageRight ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <h2
                className={`text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight mb-4 ${
                  s.dark ? "text-white" : "text-black"
                }`}
              >
                {s.title}
              </h2>
              <p
                className={`text-xl font-medium mb-5 leading-snug ${
                  s.dark ? "text-white/65" : "text-black/55"
                }`}
              >
                {s.subtitle}
              </p>
              <p
                className={`text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md ${
                  s.dark ? "text-white/45" : "text-black/45"
                }`}
              >
                {s.body}
              </p>
              <Link
                href={s.href}
                className={`inline-flex items-center gap-3 font-semibold text-sm uppercase tracking-widest w-fit group ${
                  s.dark ? "text-white" : "text-black"
                }`}
              >
                {s.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </AnimateIn>
          </div>
        </section>
      ))}
    </>
  );
}
