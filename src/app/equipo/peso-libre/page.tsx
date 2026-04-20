"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Compass, ListChecks, Truck, Wrench } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ContactCTA from "@/components/sections/ContactCTA";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const bullets = [
  "Mancuernas y barras de uso comercial intensivo",
  "Racks, jaulas y soportes de acero reforzado",
  "Acabados premium que elevan la imagen del espacio",
  "Asesoría en diseño y distribución de la zona",
];

const models = [
  {
    name: "Línea Unofit Peso Libre",
    badge: "Uso comercial",
    description:
      "Mancuernas hexagonales recubiertas en uretano, bancos de peso ajustables y racks de almacenamiento. Construidos para resistir el uso más intensivo con acabados que duran años.",
    specs: [
      "Mancuernas 2-50kg",
      "Bancos ajustables",
      "Racks de almacenamiento",
    ],
    image:
      "https://sportsolutions.com.mx/wp-content/uploads/2021/01/Unofit-equipos-peso-libre.jpg",
    fallback:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    name: "TRUE Fitness Composite Strength",
    badge: "Premium",
    description:
      "La línea de fuerza más completa de TRUE Fitness. Jaulas de potencia, racks olímpicos y estaciones de peso libre con acabados de acero inoxidable y pintura electrostática de alta durabilidad.",
    specs: ["Jaulas olímpicas", "Racks de potencia", "Acero reforzado"],
    image:
      "https://sportsolutions.com.mx/wp-content/uploads/2021/01/Composite-Strength-TRUE-Fitness.jpg",
    fallback:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    name: "Paquetes Completos",
    badge: "Llave en mano",
    description:
      "Diseñamos y equipamos tu zona de peso libre completa: desde el rack de mancuernas hasta la jaula de potencia, con instalación certificada y layout optimizado para tu espacio.",
    specs: [
      "Diseño incluido",
      "Instalación certificada",
      "Garantía directa",
    ],
    image:
      "https://sportsolutions.com.mx/wp-content/uploads/2020/12/Paquetes-03.jpg",
    fallback:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
];

const includes = [
  {
    icon: Compass,
    name: "Diseño del layout",
    description:
      "Distribución optimizada de zonas para maximizar el espacio disponible.",
  },
  {
    icon: ListChecks,
    name: "Selección de equipo",
    description:
      "Asesoría personalizada según perfil de usuarios y presupuesto.",
  },
  {
    icon: Truck,
    name: "Instalación certificada",
    description: "Técnicos especializados en los 32 estados.",
  },
  {
    icon: Wrench,
    name: "Soporte continuo",
    description:
      "Garantías directas y refacciones originales con stock permanente.",
  },
];

const stats = [
  { value: "+100", label: "Zonas equipadas" },
  { value: "3",    label: "Marcas premium" },
  { value: "32",   label: "Estados con soporte" },
  { value: "+20",  label: "Años de experiencia" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PesoLibrePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sportsolutions.com.mx/wp-content/uploads/2020/12/Paquetes-03.jpg"
          alt=""
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80";
          }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="text-white/65 text-xs font-semibold uppercase tracking-[0.22em] mb-6"
          >
            Equipo para gimnasio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            Equipos de Peso Libre
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Mancuernas, barras, racks y accesorios de uso comercial para
            gimnasios de alto rendimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
          >
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center bg-white text-black font-bold text-base px-10 py-5 hover:bg-white/90 transition-colors duration-200 tracking-wide"
            >
              Cotiza tu proyecto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FORMULARIO ────────────────────────────────────────────────── */}
      <ContactCTA
        title="Cotiza tu zona de peso libre"
        subtitle="Muy pronto un asesor comercial se pondrá en contacto contigo."
      />

      {/* ── 3. INTRO ─────────────────────────────────────────────────────── */}
      <section className="bg-black py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Texto */}
            <div>
              <AnimateIn>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué elegirnos
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                  La zona que nunca falla en ningún gimnasio
                </h2>
                <p className="text-white/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  La zona de peso libre es el corazón de cualquier gimnasio. Es
                  el área más utilizada y la que más exige en términos de
                  durabilidad y acabados. En Sport Solutions equipamos desde
                  pequeños estudios hasta grandes clubes con equipos de uso
                  comercial de las mejores marcas: Unofit, TRUE Fitness e Impulse.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <ul className="flex flex-col gap-4">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-white/75 text-sm lg:text-base leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>

            {/* Imagen */}
            <AnimateIn direction="left" delay={0.1} className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2021/01/Unofit-equipos-peso-libre.jpg"
                  alt="Zona de peso libre equipada por Sport Solutions"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 4. CATÁLOGO ──────────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Catálogo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Equipo disponible
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
            {models.map((m, i) => (
              <AnimateIn key={m.name} delay={(i % 2) * 0.1} direction="none">
                <div className="bg-white group flex flex-col h-full">
                  {/* Imagen */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "1/1", backgroundColor: "#f5f5f5" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image}
                      alt={m.name}
                      onError={(e) => {
                        e.currentTarget.src = m.fallback;
                      }}
                      className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105 p-8"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#CC1C1C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        {m.badge}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight mb-3">
                      {m.name}
                    </h3>
                    <p className="text-black/55 text-sm lg:text-base font-light leading-relaxed mb-6 flex-1">
                      {m.description}
                    </p>

                    <ul className="flex flex-col gap-2 mb-8 border-t border-gray-100 pt-6">
                      {m.specs.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-black/50"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#CC1C1C] flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#contacto"
                      className="inline-flex items-center justify-center bg-black text-white font-bold text-sm px-8 py-4 hover:bg-black/80 transition-colors duration-200 tracking-wide"
                    >
                      Solicitar cotización
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LO QUE INCLUYE CADA PROYECTO ─────────────────────────────── */}
      <section className="bg-[#111111] py-28 lg:py-36 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Servicio completo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Lo que incluye cada proyecto
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-white/5">
            {includes.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimateIn key={f.name} delay={i * 0.08} direction="none">
                  <div className="bg-[#111111] p-10 lg:p-14 flex flex-col gap-5 h-full hover:bg-white/[0.03] transition-colors duration-300">
                    <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#CC1C1C]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white font-bold text-xl leading-snug">
                        {f.name}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. STATS ─────────────────────────────────────────────────────── */}
      <section className="bg-black py-28 lg:py-36 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/8 border border-white/8">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08} className="p-12 lg:p-14">
                <div className="text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-4">
                  {s.value}
                </div>
                <div className="text-white/55 text-sm leading-relaxed">
                  {s.label}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
