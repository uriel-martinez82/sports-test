"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const brands = [
  {
    name: "UNOFIT",
    logo: "/landings/apertura_gimnasios/logo-unofit-300x83.png",
    logoBg: "bg-white",
    bullets: [
      "Marca propia de Sport Solutions",
      "Equipos de calidad similar a gama premium",
      "Ahorro de hasta 60% en inversión inicial",
      "Eliminación de intermediarios en la cadena",
      "Diseñada para gimnasios comerciales y corporativos",
      "Ideal para nuevos proyectos o expansión",
      "Enfoque en rentabilidad y rápido retorno",
    ],
  },
  {
    name: "SHUA",
    logo: "/landings/apertura_gimnasios/SHUA logo white.png",
    logoBg: "bg-gray-900",
    bullets: [
      "Más de 420 tecnologías patentadas",
      "Equipo de I+D con más de 160 especialistas",
      "Proveedor oficial en Beijing 2022",
      "Primera marca china de fitness en los Juegos Olímpicos",
      "Empresa listada en la Bolsa de Shanghái",
      "Innovación basada en investigación científica",
    ],
  },
  {
    name: "FREEMOTION",
    logo: "/landings/apertura_gimnasios/Freemotion-logo-ss.png",
    logoBg: "bg-white",
    bullets: [
      "Más de 400 patentes activas",
      "Parte de iFIT líder en tecnología fitness",
      "Creadores del Incline Trainer con 30% inclinación",
      "Sistema de amortiguación REFLEX patentado",
      "Utilizada por Orangetheory Fitness",
      "Durabilidad comprobada en operación continua +12 hrs/día",
    ],
  },
];

export default function AperturaGimansiosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-[108px]"
        style={{
          backgroundImage: "url('/landings/apertura_gimnasios/Foto principal.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <AnimateIn>
            <p className="text-[#E8420C] text-xs font-black uppercase tracking-widest mb-4">
              Apertura de Gimnasio
            </p>
            <h1 className="font-condensed font-black text-5xl lg:text-7xl uppercase text-white leading-none tracking-tight mb-4 max-w-3xl">
              Abre tu propio gimnasio con equipo profesional
            </h1>
            <p className="text-white/80 text-lg max-w-xl mt-4 leading-relaxed">
              Invierte inteligentemente con equipo de gimnasio profesional diseñado para brindar la mejor experiencia a tus usuarios. Contamos con paquetes en venta directa y opciones de arrendamiento y financiamiento.
            </p>
            <a
              href="#form"
              className="inline-block bg-[#E8420C] text-white font-black px-8 py-4 uppercase tracking-wider mt-8 hover:bg-[#d13a0a] transition-colors duration-200"
            >
              Cotiza tu proyecto
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── SECTION 1 — ¿Por qué invertir? ──────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <AnimateIn>
              <h2 className="font-condensed font-black text-4xl uppercase text-black leading-tight tracking-tight mb-6">
                ¿Por qué invertir en un gimnasio comercial?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Invertir en un gimnasio comercial es apostar por un mercado en crecimiento y con alta demanda. En México, la industria supera los 38 mil millones de pesos anuales, con más de 20 mil gimnasios y 7 millones de usuarios activos. Esto permite generar ingresos recurrentes mediante membresías, clases y servicios adicionales, creando un modelo escalable, rentable y sostenible a largo plazo.
              </p>
              <a
                href="#form"
                className="inline-block bg-[#E8420C] text-white font-black px-8 py-4 uppercase tracking-wider hover:bg-[#d13a0a] transition-colors duration-200"
              >
                Habla con un especialista
              </a>
            </AnimateIn>

            {/* Right: image */}
            <AnimateIn direction="left" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landings/apertura_gimnasios/Foto 2 Vertical.jpg"
                  alt="Gimnasio comercial equipado"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Marcas ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="text-center mb-14">
            <h2 className="font-condensed font-black text-4xl uppercase text-black tracking-tight">
              Marcas que distribuimos
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <AnimateIn key={brand.name} delay={i * 0.08} direction="none">
                <div className="bg-white border border-gray-100 shadow-sm flex flex-col h-full">
                  {/* Logo area */}
                  <div className={`${brand.logoBg} flex items-center justify-center p-8 min-h-[100px]`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <h3 className="font-condensed font-black text-2xl uppercase text-black tracking-tight">
                      {brand.name}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {brand.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8420C] shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────────────────── */}
      <section id="form" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Cotiza la apertura de tu gimnasio
          </h2>
          <p className="text-white/60 text-base mt-3">
            Un asesor comercial se pondrá en contacto contigo a la brevedad.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormAperturadeGimnasio2026/formperma/3VhUe6B-EpUYVbc7WXrhqmjEaW-bzgjY6RGiWD6QUH0"
            label="Form Apertura de Gimnasio 2026"
            height="863px"
          />
        </div>
      </section>
    </>
  );
}
