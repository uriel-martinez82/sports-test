"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Lightbulb, LayoutGrid, Wrench, HeartHandshake } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const ease = [0.22, 1, 0.36, 1] as const;

const FALLBACK_GYM = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

// ─── Data ─────────────────────────────────────────────────────────────────────

const bullets = [
  "Aumenta la plusvalía de todas las unidades",
  "Diferenciador clave frente a la competencia",
  "Atrae al comprador millennial — 4 de cada 10 compradores en México",
  "Los habitantes ahorran entre 30 y 35% vs membresía externa",
];

const products = [
  {
    name: "Caminadora Freemotion T22.9 REFLEX",
    description:
      "La caminadora con el sistema de amortiguamiento más avanzado del mercado. Reduce el impacto tibial hasta 52%. Pantalla táctil 22\", conectividad iFit® con más de 16,000 entrenamientos.",
    badge: "Premium",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2022/05/t22.9_FM_7575-scaled-e1653427427542.jpg",
    fallback: "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
  },
  {
    name: "Bicicleta Stages SC2",
    description:
      "La bicicleta elegida por los mejores estudios boutique del mundo. RythmBar™, SprintShift™, CarbonGlyde™. Garantía 10 años en estructura.",
    badge: "Distribuidor exclusivo",
    image: "https://stagescycling.com/media/.renditions/wysiwyg/stages-cycling/category-pages/sc-series/SC_Indoor_Series_Sc2_820_by_615.jpg",
    fallback: FALLBACK_GYM,
  },
];

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Conocemos tu proyecto",
    description:
      "Perfil de compradores, metraje y concepto del desarrollo para entender tus necesidades exactas.",
  },
  {
    number: "02",
    icon: LayoutGrid,
    title: "Diseñamos el espacio",
    description:
      "Layout, zonas cardio/fuerza/funcional y render del gimnasio integrado a la identidad del desarrollo.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Instalación certificada",
    description:
      "Equipo técnico certificado con cobertura en los 32 estados de la república.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Soporte continuo",
    description:
      "Garantías directas, mantenimiento preventivo y refacciones originales en todo momento.",
  },
];

const stats = [
  { value: "+100", label: "Proyectos inmobiliarios" },
  { value: "+20",  label: "Años de experiencia" },
  { value: "32",   label: "Estados de la república" },
  { value: "+500", label: "Espacios equipados" },
];

// ─── Brand Banner ──────────────────────────────────────────────────────────────

function BrandBanner() {
  const [bannerError, setBannerError] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] text-center mb-10">
            Somos representantes exclusivos de Stages y Freemotion en México.
          </p>

          {!bannerError ? (
            /* Banner unificado */
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://sportsolutions.com.mx/wp-content/uploads/2023/09/StagesFreemotion.png"
                alt="Stages Cycling y Freemotion — Distribuidores exclusivos en México"
                className="max-h-24 w-auto object-contain"
                style={{ filter: "brightness(0)" }}
                onError={() => setBannerError(true)}
              />
            </div>
          ) : (
            /* Fallback: logos por separado */
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
              <div className="flex flex-col items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://stagescycling.com/static/version1761039453/frontend/Stages/default/en_US/images/logo.svg"
                  alt="Stages Cycling"
                  className="h-8 w-auto"
                  style={{ filter: "brightness(0)" }}
                />
                <span className="text-black/25 text-[10px] uppercase tracking-widest">Indoor Cycling</span>
              </div>

              <div className="w-px h-10 bg-black/10 hidden sm:block" />

              <div className="flex flex-col items-center gap-3">
                <span className="text-black font-black text-2xl tracking-tight">FREEMOTION.</span>
                <span className="text-black/25 text-[10px] uppercase tracking-widest">Cardio & Fuerza</span>
              </div>
            </div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DesarrollosInmobiliariosPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sportsolutions.com.mx/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-20.07.45.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"; }}
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
            Desarrollos Inmobiliarios
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            El gimnasio que impulsa las ventas de tu desarrollo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Trabajamos con desarrolladores desde la etapa de planeación.
            Asesoría, diseño de layout, instalación y soporte postventa.
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
      <section id="contacto" className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ZohoForm
            src="https://forms.sportsolutions.com.mx/SportSolutions2025/form/FormDesarrolloInmobiliarioWebduplicadosanti/formperma/5irKSG9aL0vYRuMTYkulhUrukD2njPGO1If3ya_1hw4"
            label="Form Desarrollo Inmobiliario"
            height="902px"
          />
        </div>
      </section>

      {/* ── 3. POR QUÉ UN GIMNASIO ───────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué un gimnasio en tu desarrollo
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  Una amenidad que acelera tus ventas
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Hoy más que nunca, los compradores buscan desarrollos que integren el bienestar como
                  parte de su estilo de vida. Un gimnasio bien equipado es una herramienta poderosa
                  para elevar la plusvalía y acelerar las ventas. Los millennials representan 4 de cada
                  10 compradores potenciales de vivienda en México y priorizan amenidades fitness al
                  elegir dónde vivir.
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
                  src="https://sportsolutions.com.mx/wp-content/uploads/2022/08/Desarrollos-inmobiliarios-Sport-Solutions.jpg"
                  alt="Gimnasio en desarrollo inmobiliario equipado por Sport Solutions"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK_GYM; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
                <div className="text-4xl font-black text-white leading-none">4/10</div>
                <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                  Compradores priorizan fitness
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 4. BANNER DE MARCAS ──────────────────────────────────────────── */}
      <BrandBanner />

      {/* ── 5. EQUIPOS DESTACADOS ────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Catálogo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Equipos para tu desarrollo
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
            {products.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 0.1} direction="none">
                <div className="bg-white group flex flex-col h-full">

                  <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "16/9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
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
                      {p.name}
                    </h3>
                    <p className="text-black/55 text-sm font-light leading-relaxed mb-6 flex-1">
                      {p.description}
                    </p>
                    <div className="pt-5 border-t border-gray-100">
                      <Link
                        href="#contacto"
                        className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                      >
                        Ver detalles
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. NUESTRO PROCESO ───────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-16">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Proceso
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Así trabajamos con tu desarrollo
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-gray-100">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={step.number} delay={i * 0.1} direction="none">
                  <div className="bg-white border border-gray-100 shadow-md p-10 lg:p-14 flex flex-col gap-6 h-full hover:bg-gray-50 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <span className="text-7xl font-black text-black leading-none tracking-tighter select-none">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#CC1C1C]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-gray-900 font-bold text-xl leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.description}
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
