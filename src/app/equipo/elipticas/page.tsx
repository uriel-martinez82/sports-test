"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Leaf, Flame, Hammer, Wrench } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ContactCTA from "@/components/sections/ContactCTA";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const bullets = [
  "Bajo impacto articular — ideal para todos los usuarios",
  "Alta durabilidad en uso comercial intensivo",
  "Garantía directa en estructura y componentes",
  "Soporte técnico certificado en 32 estados",
];

const models = [
  {
    name: "Unofit X9201",
    badge: "Más vendida",
    description:
      "Elíptica comercial de uso rudo con zancada ajustable. Resistencia magnética, pantalla LCD y programas de entrenamiento integrados.",
    specs: ["Zancada 50cm", "20 niveles de resistencia", "Peso máx 150kg"],
    image:
      "/images/productos/eliptica-unofit-x9201.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    name: "Impulse RE500",
    badge: "Premium",
    description:
      "Elíptica de uso comercial con diseño ergonómico avanzado. Resistencia electromagnética, consola intuitiva y estructura de acero reforzado para alto tráfico.",
    specs: [
      "Resistencia electromagnética",
      "16 programas",
      "Estructura acero",
    ],
    image:
      "/images/productos/eliptica-unofit-re500.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    name: "Max Trainer (Escaladora)",
    badge: "Alta intensidad",
    description:
      "Combina el movimiento de elíptica con escaladora para un entrenamiento de cuerpo completo. Quema hasta 2.5x más calorías que una elíptica convencional.",
    specs: ["Movimiento combinado", "Alta intensidad", "Bajo impacto"],
    image:
      "/images/productos/escaladora-max-trainer.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    name: "Freemotion Pro 3700",
    badge: "Freemotion",
    description:
      "Elíptica premium con conectividad iFit® y pantalla táctil. Zancada guiada que se adapta al movimiento natural del usuario para máxima comodidad.",
    specs: ["iFit® incluido", "Pantalla táctil", "Zancada adaptativa"],
    image:
      "/images/productos/pro3700c.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    name: "Unofit X9201 Pro",
    badge: "Uso intensivo",
    description:
      "Versión reforzada para espacios de altísimo tráfico. Mayor resistencia en rodamientos y estructura, ideal para gimnasios con más de 200 usuarios diarios.",
    specs: [
      "Uso ultra comercial",
      "Rodamientos reforzados",
      "Garantía extendida",
    ],
    image:
      "/images/general/eliptica-unofit-x9201-2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    name: "Impulse RE500 Pro",
    badge: "Corporativo",
    description:
      "Diseño elegante para gimnasios corporativos y hoteles. Operación silenciosa, consola premium y acabados de alta gama que elevan la imagen de cualquier espacio.",
    specs: [
      "Operación silenciosa",
      "Diseño premium",
      "Ideal hoteles y empresas",
    ],
    image:
      "/images/general/eliptica-unofit-re500-2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
];

const benefits = [
  {
    icon: Leaf,
    name: "Bajo impacto articular",
    description:
      "Protege rodillas y articulaciones, apto para usuarios de todas las edades.",
  },
  {
    icon: Flame,
    name: "Cardio efectivo",
    description:
      "Activa tren superior e inferior simultáneamente para máximo gasto calórico.",
  },
  {
    icon: Hammer,
    name: "Durabilidad comercial",
    description:
      "Construidas para miles de horas de uso sin degradación.",
  },
  {
    icon: Wrench,
    name: "Fácil mantenimiento",
    description:
      "Sistemas magnéticos sin desgaste mecánico excesivo.",
  },
];

const stats = [
  { value: "+500", label: "Elípticas instaladas" },
  { value: "3",    label: "Marcas distribuidas" },
  { value: "32",   label: "Estados con soporte" },
  { value: "+20",  label: "Años de experiencia" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ElipticasPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/productos/elipticas.jpg"
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
            Elípticas Profesionales
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Bajo impacto, alto rendimiento. Las elípticas más duraderas para
            uso comercial intensivo.
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
        title="Cotiza tus elípticas"
        subtitle="Muy pronto un asesor comercial se pondrá en contacto contigo."
      />

      {/* ── 3. INTRO ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Texto */}
            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué elegirnos
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  El equipo favorito de tus usuarios
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Las elípticas son el equipo de cardio más utilizado en
                  gimnasios comerciales por su bajo impacto articular y alta
                  efectividad cardiovascular. En Sport Solutions distribuimos
                  Unofit, Impulse y Freemotion — marcas diseñadas para resistir
                  el uso más exigente con mínimo mantenimiento.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <ul className="flex flex-col gap-4">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-black/75 text-sm lg:text-base leading-relaxed">
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
                  src="/images/general/eliptica-unofit-x9201-2.jpg"
                  alt="Elíptica Unofit en uso comercial"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=1200&q=80";
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
              Modelos disponibles
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

                    {/* Specs */}
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

      {/* ── 5. BENEFICIOS ────────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Ventajas
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Beneficios clave
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-gray-100">
            {benefits.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimateIn key={f.name} delay={i * 0.08} direction="none">
                  <div className="bg-white p-10 lg:p-14 flex flex-col gap-5 h-full hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#CC1C1C]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-black font-bold text-xl leading-snug">
                        {f.name}
                      </h3>
                      <p className="text-black/40 text-sm leading-relaxed">
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
    </>
  );
}
