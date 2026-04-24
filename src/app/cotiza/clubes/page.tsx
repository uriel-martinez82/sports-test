"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ContactCTA from "@/components/sections/ContactCTA";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

const bullets = [
  "Catálogo completo: cardio, fuerza y entrenamiento funcional",
  "Diseño de layout personalizado para tu espacio",
  "Instalación certificada y puesta en marcha",
  "Garantías directas y soporte técnico continuo",
];

const clients = [
  "Santos Laguna",
  "Chivas",
  "Atlas",
  "Cruz Azul",
  "Nelson Vargas",
  "Sports World",
  "Sport City",
];

const products = [
  {
    title: "Zona Cardio",
    badge: "Freemotion · Stages",
    description:
      "Caminadoras Freemotion REFLEX, elípticas y bicicletas Stages. La tecnología iFit® con más de 16,000 entrenamientos interactivos grabados alrededor del mundo.",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2022/05/t22.9_FM_7575-scaled-e1653427427542.jpg",
    fallback: "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    title: "Zona Fuerza",
    badge: "Freemotion Genesis",
    description:
      "Equipos de peso integrado y libre Freemotion Genesis, Epic y Dual Cable Cross. La línea más completa para entrenamientos de fuerza de alto rendimiento.",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2022/03/Freemotion-back-01.jpg",
    fallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    title: "Zona Funcional",
    badge: "Unofit · Pavigym",
    description:
      "Equipos Unofit para entrenamiento funcional, piso Pavigym resistente y accesorios. Diseñamos el concepto completo según el perfil de tus socios.",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2021/03/IF2060-Chica.png",
    fallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
];

const tiers = [
  {
    size: "Gimnasio pequeño",
    area: "Hasta 100 m²",
    description: "Cardio + fuerza básica, ideal para clubes familiares.",
    accent: false,
  },
  {
    size: "Gimnasio mediano",
    area: "100 – 300 m²",
    description: "Cardio completo + fuerza + funcional, para clubes deportivos.",
    accent: true,
  },
  {
    size: "Gimnasio grande",
    area: "300 m² +",
    description: "Equipamiento premium completo, para grandes clubes y cadenas.",
    accent: false,
  },
];

const stats = [
  { value: "+100", label: "Proyectos por año" },
  { value: "+20",  label: "Años de experiencia" },
  { value: "32",   label: "Estados de la república" },
  { value: "+500", label: "Espacios equipados" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ClubesPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sportsolutions.com.mx/wp-content/uploads/2022/03/Freemotion-back-01.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"; }}
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
            Clubes y Gimnasios
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            Equipa el gimnasio que tus socios merecen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Soluciones integrales para clubes deportivos, familiares y gimnasios
            comerciales. Venta, arrendamiento e instalación certificada en todo México.
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
        title="Cotiza el equipamiento de tu club"
        subtitle="Muy pronto un asesor comercial se pondrá en contacto contigo."
      />

      {/* ── 3. POR QUÉ SPORT SOLUTIONS ───────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué Sport Solutions
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  El equipo que eligen los mejores clubes de México
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Los socios de un club no solo buscan mantenerse en forma, buscan vivir una
                  experiencia integral. El gimnasio es un punto clave en tu propuesta de valor y
                  debe mantenerse siempre actualizado y funcional. En Sport Solutions equipamos
                  clubes con más de 20 años de experiencia y presencia en los 32 estados.
                </p>
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

            <AnimateIn direction="left" delay={0.1} className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                  alt="Club deportivo equipado por Sport Solutions"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
                <div className="text-4xl font-black text-white leading-none">32</div>
                <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                  Estados de la república
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 4. CLIENTES DESTACADOS ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Clientes destacados
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black tracking-tight mb-3">
              Confían en nosotros
            </h2>
            <p className="text-black/35 text-sm mb-14">
              Clubes deportivos y gimnasios líderes de México
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {clients.map((name, i) => (
                <span
                  key={name}
                  className="text-black/70 font-bold text-lg tracking-tight hover:text-black transition-colors duration-200 cursor-default"
                >
                  {name}
                  {i < clients.length - 1 && (
                    <span className="text-black/15 font-light ml-10">·</span>
                  )}
                </span>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-black/20 text-xs mt-10 uppercase tracking-widest">
              Entre muchos otros clubes en los 32 estados de México
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 5. EQUIPOS PARA TU CLUB ──────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Catálogo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Equipo para cada zona de tu gimnasio
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100">
            {products.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.1} direction="none">
                <div className="bg-white group flex flex-col h-full">

                  <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "4/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain object-center p-6 transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = p.fallback; }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#CC1C1C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-black text-black tracking-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-black/55 text-sm font-light leading-relaxed mb-6 flex-1">
                      {p.description}
                    </p>
                    <div className="pt-5 border-t border-gray-100">
                      <Link
                        href="#contacto"
                        className="inline-flex items-center gap-2 text-black/50 text-xs font-semibold uppercase tracking-widest hover:text-black hover:gap-2.5 transition-all duration-200 group/link"
                      >
                        Cotizar
                        <ArrowRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INVERSIÓN REFERENCIAL ─────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Inversión
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Rangos de inversión para equipar tu club
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100">
            {tiers.map((t, i) => (
              <AnimateIn key={t.size} delay={i * 0.1} direction="none">
                <div className={`flex flex-col h-full p-10 lg:p-14 ${t.accent ? "bg-[#CC1C1C]" : "bg-white"}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${t.accent ? "text-white/70" : "text-black/30"}`}>
                    {t.area}
                  </p>
                  <h3 className={`text-2xl font-black tracking-tight mb-4 leading-tight ${t.accent ? "text-white" : "text-black"}`}>
                    {t.size}
                  </h3>
                  <p className={`text-sm font-light leading-relaxed flex-1 mb-10 ${t.accent ? "text-white/80" : "text-black/45"}`}>
                    {t.description}
                  </p>
                  <Link
                    href="#contacto"
                    className={`inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest px-6 py-4 transition-all duration-200 group ${
                      t.accent
                        ? "bg-white text-[#CC1C1C] hover:bg-white/90"
                        : "border border-black/20 text-black hover:bg-gray-50"
                    }`}
                  >
                    Solicitar cotización
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
