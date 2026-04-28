"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, MapPin, CalendarDays, Wrench, HeartHandshake } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const ease = [0.22, 1, 0.36, 1] as const;

const FALLBACK_IMG = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80";

// ─── Data ─────────────────────────────────────────────────────────────────────

const bullets = [
  "Incrementa la plusvalía de todos los departamentos",
  "Amenidad diferenciadora en un mercado competitivo",
  "Genera comunidad entre residentes",
  "Los residentes ahorran hasta 35% vs membresía externa",
];

type PricingRow = { item: string; price: string };

type Solution = {
  tag: string;
  title: string;
  description: string;
  perks: string[];
  cta: string;
  accent: boolean;
  image?: string;
  pricing?: PricingRow[];
  terms?: string;
};

const solutions: Solution[] = [
  {
    tag: "Opción A",
    title: "Compra Directa",
    description:
      "Adquiere el equipo con asesoría técnica completa, diseño del layout, instalación certificada y garantía directa con nosotros.",
    perks: [
      "Layout personalizado",
      "Instalación certificada",
      "Garantía directa",
    ],
    cta: "Cotizar compra",
    accent: false,
  },
  {
    tag: "Opción B",
    title: "Arrendamiento Flexible",
    description:
      "Sin descapitalizarte. Contrato directo con la AC del condominio, sin instituciones financieras.",
    perks: [
      "Enganche bajo — pago inicial del 20%",
      "Pagos deducibles de impuestos",
      "3 mantenimientos preventivos anuales incluidos",
      "Opción de compra al 25% del valor al final",
    ],
    pricing: [
      { item: "2 Caminadoras profesionales", price: "desde $3,999/mes" },
      { item: "1 Multigym de uso rudo",      price: "desde $2,999/mes" },
      { item: "3 Bicicletas profesionales",  price: "desde $2,399/mes" },
      { item: "Paquete básico completo",     price: "desde $5,000/mes" },
    ],
    terms: "Contrato a 36 meses · 3 mantenimientos preventivos anuales incluidos",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2022/08/Cotiza-tu-proyecto.jpg",
    cta: "Cotizar arrendamiento",
    accent: true,
  },
];

const products = [
  {
    name: "Caminadora Unofit X8400",
    description:
      "Uso profesional, estructura robusta para alto tráfico. Garantía 7 años en estructura, 3 en motor.",
    price: "Desde $3,999 MXN/mes",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2020/12/caminadora-x8400-unofit-g1-e1616518527384.jpg",
  },
  {
    name: "Equipo Multigym",
    description:
      "Equipo de peso integrado de uso rudo, ideal para espacios reducidos con alta demanda.",
    price: "Desde $2,999 MXN/mes",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2021/03/IF2060-Chica.png",
  },
  {
    name: "Bicicleta Indoor Unofit Pro+",
    description:
      "Construida para clases de spinning y uso intensivo diario. Ideal para sala de bicicletas.",
    price: "Desde $2,399 MXN/mes (x3 unidades)",
    image: "https://sportsolutions.com.mx/wp-content/uploads/2021/03/bicicleta-para-indoor-cycling-bs001-unofit-m1.jpg",
  },
];

const stats = [
  { value: "+500", label: "Condominios equipados" },
  { value: "+20",  label: "Años de experiencia" },
  { value: "+100", label: "Proyectos por año" },
  { value: "32",   label: "Estados de la república" },
];

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Visita y levantamiento",
    description:
      "Vamos a tu edificio, evaluamos el espacio y el equipo actual para diseñar la mejor solución.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Propuesta personalizada",
    description:
      "Cotización con opciones de compra y arrendamiento lista para presentar al comité del condominio.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Instalación certificada",
    description:
      "Equipo técnico certificado instala y pone en marcha el proyecto con mínima interrupción.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Soporte continuo",
    description:
      "Garantías directas, refacciones originales y mantenimiento preventivo incluido en el contrato.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CondominiosPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sportsolutions.com.mx/wp-content/uploads/2022/08/Condominios-y-torres-de-departamentos-Sport-Solutions.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
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
            Condominios y Torres de Departamentos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            El gimnasio que eleva el valor de tu propiedad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Más de 500 condominios equipados en México.
            Venta, arrendamiento e instalación certificada.
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
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormularioCondominiosSitioWeb2025V2ARRIBAduplicado/formperma/QmXs4SDNAquBktLey0riYhqZL9rsHf3o6MNVfftFW_0"
            label="Formulario Condominios 2025 V2"
            height="860px"
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
                  Por qué un gimnasio en tu condominio
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  La amenidad más valorada por tus residentes
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  El gimnasio es la primera amenidad que consideran los desarrolladores al diseñar un
                  nuevo edificio. Un gimnasio bien equipado puede aumentar entre 3.5 y 9 USD por mes
                  el cargo por servicio, y diferencia tu propiedad en un mercado altamente competitivo.
                  Los residentes ahorran entre 30 y 35% al tener el gimnasio en su propio edificio.
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
                  src="https://sportsolutions.com.mx/wp-content/uploads/2022/08/Arrendamiento-Sport.jpg"
                  alt="Gimnasio en condominio equipado por Sport Solutions"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
                <div className="text-4xl font-black text-white leading-none">+500</div>
                <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                  Condominios equipados
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 4. NUESTRAS SOLUCIONES ───────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Soluciones
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Dos formas de equipar tu condominio
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
            {solutions.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.1} direction="none">
                <div className={`flex flex-col h-full ${s.accent ? "bg-black text-white" : "bg-white text-black"}`}>

                  {s.image && (
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  )}

                  <div className="flex flex-col flex-1 p-10 lg:p-14">
                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${s.accent ? "text-[#CC1C1C]" : "text-black/40"}`}>
                      {s.tag}
                    </span>

                    <h3 className={`text-3xl lg:text-4xl font-black tracking-tight mb-5 ${s.accent ? "text-white" : "text-black"}`}>
                      {s.title}
                    </h3>

                    <p className={`text-base font-light leading-relaxed mb-8 ${s.accent ? "text-white/55" : "text-black/55"}`}>
                      {s.description}
                    </p>

                    {s.pricing && (
                      <div className="mb-8 border border-white/10 divide-y divide-white/8">
                        {s.pricing.map((row) => (
                          <div key={row.item} className="flex items-center justify-between px-5 py-3.5">
                            <span className="text-white/60 text-sm">{row.item}</span>
                            <span className="text-white font-bold text-sm whitespace-nowrap ml-4">{row.price}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="flex flex-col gap-3 mb-6">
                      {s.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-3">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                            <Check size={11} strokeWidth={3} className="text-white" />
                          </span>
                          <span className={`text-sm leading-relaxed ${s.accent ? "text-white/70" : "text-black/65"}`}>{perk}</span>
                        </li>
                      ))}
                    </ul>

                    {s.terms && (
                      <p className="text-white/30 text-xs mb-8 leading-relaxed border-l border-white/15 pl-3">
                        {s.terms}
                      </p>
                    )}

                    <Link
                      href="#contacto"
                      className={`inline-flex items-center gap-2 text-sm font-semibold mt-auto hover:gap-3 transition-all duration-200 group ${s.accent ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"}`}
                    >
                      {s.cta}
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EQUIPOS PARA TU CONDOMINIO ────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Catálogo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Equipos ideales para condominios
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100">
            {products.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 0.1} direction="none">
                <div className="bg-white group flex flex-col h-full">

                  {/* Imagen */}
                  <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "4/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain object-center p-6 transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#CC1C1C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        Arrendamiento disponible
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-black text-black tracking-tight mb-3">
                      {p.name}
                    </h3>
                    <p className="text-black/55 text-sm font-light leading-relaxed mb-6 flex-1">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-[#CC1C1C] font-black text-base">{p.price}</span>
                      <Link
                        href="#contacto"
                        className="inline-flex items-center gap-1.5 text-black/50 text-xs font-semibold uppercase tracking-widest hover:text-black hover:gap-2.5 transition-all duration-200 group/link"
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

      {/* ── 7. EL PROCESO ────────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-16">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Proceso
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Así trabajamos contigo
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-100">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={step.number} delay={i * 0.1} direction="none">
                  <div className="bg-white border border-gray-100 shadow-md p-10 flex flex-col gap-6 h-full hover:bg-gray-50 hover:shadow-lg transition-shadow duration-200">
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
