"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Compass, Truck, Users, Wrench, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const bullets = [
  "Transmisión CarbonGlyde — garantía 10 años, sin mantenimiento",
  "Potenciómetro Stages Power — precisión ±2.5%, igual al usado por ciclistas profesionales",
  "Sistema Sprint Shift — ajuste rápido de resistencia para entrenamientos por intervalos",
  "Consola autogenerada — se carga con el pedaleo, sin baterías",
];

const models = [
  {
    name: "Stages SC2",
    tag: "Rhythm & Boutique",
    description:
      "Designed for the world's most popular rhythm classes. The RhythmBar™ accommodates all rhythm hand positions, SprintShift enables instant resistance changes, and CarbonGlyde delivers the smoothest ride available for boutique studios.",
    image: "/images/productos/sc2-stages.jpg",
  },
  {
    name: "Stages SC3",
    tag: "Más completo",
    description:
      "The global leader in premium indoor cycling. Features CarbonGlyde, magnetic braking, FitLoc, SprintShift, and the Stages Power meter — the most accurate direct power meter on the market, used by elite pro cycling teams worldwide.",
    image: "/images/productos/sc3-stages.jpg",
  },
];

const rooms = [
  {
    size: "Sala pequeña",
    area: "30 m²",
    bikes: "11 bicicletas",
    min: "$165,000",
    max: "$550,000",
  },
  {
    size: "Sala mediana",
    area: "50 m²",
    bikes: "20 bicicletas",
    min: "$300,000",
    max: "$828,000",
  },
  {
    size: "Sala grande",
    area: "60 m²",
    bikes: "30 bicicletas",
    min: "$306,000",
    max: "$1,170,000",
  },
];

const includes = [
  {
    icon: Compass,
    title: "Asesoría en diseño del espacio",
    description: "Layout, distribución y concepto visual optimizados para tu metraje y aforo.",
  },
  {
    icon: Truck,
    title: "Entrega e instalación certificada",
    description: "Técnicos certificados por Stages realizan la instalación y ajuste fino de cada bicicleta.",
  },
  {
    icon: Users,
    title: "Capacitación para instructores",
    description: "Training oficial sobre el equipo para que tus coaches saquen el máximo provecho desde el día uno.",
  },
  {
    icon: Wrench,
    title: "Soporte técnico y refacciones",
    description: "Cobertura nacional con refacciones originales y tiempos de respuesta garantizados.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndoorCyclingPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/productos/stages-eqx.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="text-white/65 text-xs font-semibold uppercase tracking-[0.22em] mb-6"
          >
            Indoor Cycling · Stages Cycling México
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            Abre tu estudio de Indoor Cycling
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Distribuidor exclusivo de Stages Cycling en México — la bicicleta #1
            de los estudios más reconocidos del país.
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

      {/* ── 2. POR QUÉ STAGES ────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Texto */}
            <div>
              <AnimateIn>
                {/* Logo Stages */}
                <div className="mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/marcas/stages-logo.svg"
                    alt="Stages Cycling"
                    className="h-7 w-auto"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>

                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué Stages
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  La bicicleta que usan los mejores estudios
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-8 max-w-md">
                  Sport Solutions es distribuidor exclusivo de Stages Cycling en México.
                  La serie SC es la bicicleta elegida por estudios líderes como Síclo y SoulCycle,
                  diseñada para resistir las clases más demandantes con mínimo mantenimiento.
                </p>

                {/* Cita Equinox */}
                <blockquote className="border-l-2 border-[#CC1C1C] pl-5 mb-10 max-w-md">
                  <p className="text-black/75 text-sm lg:text-base italic leading-relaxed mb-2">
                    &ldquo;We&apos;ve partnered exclusively with Stages to bring the most technologically
                    advanced group indoor cycles to our clubs.&rdquo;
                  </p>
                  <cite className="text-black/35 text-xs font-semibold uppercase tracking-widest not-italic">
                    — Equinox
                  </cite>
                </blockquote>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <ul className="flex flex-col gap-4 mb-10">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-black/75 text-sm lg:text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <Link
                  href="#contacto"
                  className="inline-flex items-center border border-black/70 text-black font-semibold text-base px-10 py-4 hover:bg-black hover:text-white transition-all duration-200 tracking-wide"
                >
                  Habla con un especialista
                </Link>
              </AnimateIn>
            </div>

            {/* Imagen */}
            <AnimateIn direction="left" delay={0.1} className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/productos/stages-range.jpg"
                  alt="Gama completa de bicicletas Stages SC Series"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
                <div className="text-4xl font-black text-white leading-none">#1</div>
                <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                  Marca en estudios boutique
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 3. MODELOS DISPONIBLES ───────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Catálogo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Elige tu modelo
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
            {models.map((m, i) => (
              <AnimateIn key={m.name} delay={i * 0.1} direction="none">
                <div className="bg-white group flex flex-col h-full">
                  {/* Imagen */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#CC1C1C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        {m.tag}
                      </span>
                    </div>
                    {/* Logo badge */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/marcas/stages-logo.svg"
                        alt="Stages Cycling"
                        className="h-4 w-auto"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight mb-3">
                      {m.name}
                    </h3>
                    <p className="text-black/55 text-sm lg:text-base font-light leading-relaxed mb-8 flex-1">
                      {m.description}
                    </p>
                    <Link
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                    >
                      Ver detalles
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CUÁNTO CUESTA ─────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Inversión
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight max-w-2xl">
              Rangos de inversión reales
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100 mb-10">
            {rooms.map((r, i) => (
              <AnimateIn key={r.size} delay={i * 0.08} direction="none">
                <div className="bg-white p-10 lg:p-12 flex flex-col gap-6 h-full hover:bg-gray-50 transition-colors duration-300">
                  <div>
                    <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      {r.size}
                    </p>
                    <p className="text-black/25 text-sm">{r.area} · {r.bikes}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-black/40 text-xs uppercase tracking-widest">Desde</p>
                    <p className="text-5xl font-black text-black leading-none tracking-tight">
                      {r.min}
                    </p>
                    <p className="text-black/40 text-xs uppercase tracking-widest mt-2">Hasta</p>
                    <p className="text-3xl font-black text-[#CC1C1C] leading-none tracking-tight">
                      {r.max}
                    </p>
                    <p className="text-black/30 text-xs mt-1">MXN</p>
                  </div>

                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-black/55 text-xs font-semibold uppercase tracking-widest hover:text-black hover:gap-3 transition-all duration-200 group mt-auto"
                  >
                    Cotizar esta sala
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <p className="text-black/35 text-sm leading-relaxed border-l-2 border-[#CC1C1C]/50 pl-4 max-w-2xl">
              Los estudios de indoor cycling generan ganancias 55% mayores que cualquier otro
              tipo de estudio — <span className="text-black/55">ASF (Association of Fitness Studios)</span>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 5. LO QUE INCLUYE ────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Servicio completo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Lo que incluye
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-100">
            {includes.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 0.08} direction="none">
                  <div className="bg-white p-10 flex flex-col gap-5 h-full hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#CC1C1C]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-black font-bold text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-black/40 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. FORMULARIO ────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Solicita asesoría personalizada
          </h2>
          <p className="text-white/60 text-base mt-3">Haz tu consulta ahora mismo y nos pondremos en contacto contigo para brindarte el mejor asesoramiento para el éxito de tu estudio de indoor cycling.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormIndoorCyclingWebGENERALduplicadosanti1/formperma/vY-hSplFoTb8uEGwrQfsGzgskOoykRJ72K_VBH271v0"
            label="Form Indoor Cycling"
            height="922px"
          />
        </div>
      </section>
    </>
  );
}
