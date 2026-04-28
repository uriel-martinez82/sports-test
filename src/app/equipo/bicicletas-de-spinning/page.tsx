"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, Shield, Activity, Music } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const bullets = [
  "Distribuidor exclusivo en México",
  "Instalación y puesta en marcha certificada",
  "Refacciones originales con stock directo",
  "Garantía 10 años en estructura",
];

const models = [
  {
    name: "Stages SC2",
    badge: "Rhythm & Dance",
    description:
      "Diseñada para clases de bike dance y ritmo. Manubrio RythmBar™ que permite todas las posiciones de mano. SprintShift™ para cambios instantáneos de resistencia. CarbonGlyde™ sin mantenimiento por 10 años.",
    specs: [
      "Sin potenciómetro de serie (disponible como upgrade)",
      "Peso máximo usuario: 136 kg",
      "Ajuste 4D de sillín y manubrio",
    ],
    image:
      "https://sportsolutions.com.mx/wp-content/uploads/2020/12/SC2-STAGES-1024x1024.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    name: "Stages SC3",
    badge: "El más completo",
    description:
      "El modelo más avanzado de la serie SC. Potenciómetro Stages Power de serie con precisión ±2.5%. Consola autogenerada que se carga con el pedaleo. La elección de Equinox y los clubes más exigentes del mundo.",
    specs: [
      "Stages Power meter incluido",
      "Consola autogenerada",
      "Freno magnético",
      "Peso máximo usuario: 136 kg",
    ],
    image:
      "https://sportsolutions.com.mx/wp-content/uploads/2020/12/SC3-STAGES-1024x1024.jpg",
    fallback:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
];

const techFeatures = [
  {
    icon: Shield,
    name: "CarbonGlyde™",
    description:
      "Transmisión de carbono sin mantenimiento, garantía 10 años.",
  },
  {
    icon: Zap,
    name: "SprintShift™",
    description:
      "Ajuste instantáneo de resistencia para entrenamientos por intervalos.",
  },
  {
    icon: Activity,
    name: "Stages Power",
    description:
      "El potenciómetro más preciso del mercado, usado por equipos profesionales de ciclismo.",
  },
  {
    icon: Music,
    name: "RythmBar™",
    description:
      "Manubrio diseñado para todas las posiciones de bike dance y ritmo.",
  },
];

const stats = [
  { value: "#1",    label: "Marca en estudios boutique" },
  { value: "10",    label: "Años de garantía en estructura" },
  { value: "±2.5%", label: "Precisión del potenciómetro" },
  { value: "+500",  label: "Estudios equipados en México" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BicicletasDeSpinningPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sportsolutions.com.mx/wp-content/uploads/2022/09/Stages-event-back04.jpg"
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
            Bicicletas de Spinning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Distribuidor exclusivo de Stages Cycling en México. La bicicleta
            elegida por los mejores estudios del mundo.
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
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Cotiza tu bicicleta Stages
          </h2>
          <p className="text-white/60 text-base mt-3">Un asesor comercial se pondrá en contacto contigo a la brevedad.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormIndoorCyclingWebSC3duplicadosanti/formperma/R9ltGr4fBPhZ5iNSR5dzqSDuBLj2t7hRWdHU-uB5yNQ"
            label="Form Indoor Cycling SC3"
            height="962px"
          />
        </div>
      </section>

      {/* ── 3. INTRO DE MARCA ────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Texto */}
            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué Stages
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  La marca #1 en Indoor Cycling
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Stages Cycling es la bicicleta elegida por los estudios boutique
                  más reconocidos del mundo como Equinox, SoulCycle y Síclo. En
                  Sport Solutions somos distribuidores exclusivos en México, lo que
                  nos permite ofrecerte el mejor precio, soporte técnico certificado
                  y refacciones originales.
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
                  src="https://sportsolutions.com.mx/wp-content/uploads/2021/01/Estudios-01.jpg"
                  alt="Estudio equipado con Stages Cycling"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=80";
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 4. CATÁLOGO DE PRODUCTOS ─────────────────────────────────────── */}
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
              <AnimateIn key={m.name} delay={i * 0.1} direction="none">
                <div className="bg-white group flex flex-col h-full">
                  {/* Imagen */}
                  <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "1/1" }}>
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
                        <li key={s} className="flex items-start gap-2 text-sm text-black/50">
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

      {/* ── 5. TECNOLOGÍA STAGES ─────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Innovación
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Tecnología que marca la diferencia
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-gray-100">
            {techFeatures.map((f, i) => {
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
