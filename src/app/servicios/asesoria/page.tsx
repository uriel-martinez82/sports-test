"use client";

import { Search, LayoutGrid, Tag, GraduationCap } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ContactCTA from "@/components/sections/ContactCTA";

const HERO = "https://sportsolutions.com.mx/wp-content/uploads/2020/12/Stages011-1024x768.jpg";
const FALLBACK = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Detección de Necesidades",
    description: "Evaluamos cada requerimiento: el espacio, el concepto y el flujo de usuarios.",
  },
  {
    number: "02",
    icon: LayoutGrid,
    title: "Diseño y Planeación",
    description: "Layout con dimensiones, áreas de circulación, ambientación y uso general.",
  },
  {
    number: "03",
    icon: Tag,
    title: "Propuestas Comerciales",
    description: "Opciones adaptables al perfil del proyecto con distintas marcas y financiamiento.",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Capacitación y Certificación",
    description: "Apoyamos con capacitación de entrenadores: cursos, talleres y certificaciones.",
  },
];

export default function AsesoriaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end pt-[108px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO}
          alt="Asesoría Profesional — Sport Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <AnimateIn>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Servicio · Asesoría Profesional
            </p>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4">
              Nos adaptamos a tu presupuesto, espacio y preferencias
            </h1>
            <p className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Brindamos soluciones rentables a gimnasios de todo tipo
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 1. PROCESO ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Proceso
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              ¿Cómo lo hacemos?
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
                      <h3 className="text-gray-900 font-bold text-xl leading-snug">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. TESTIMONIAL ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-[#CC1C1C] text-6xl font-black leading-none mb-6">"</div>
              <blockquote className="text-gray-800 text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                Trabajamos con Sport Solutions desde hace varios años, principalmente por su servicio de capacitación a instructores y personal de servicio técnico.
              </blockquote>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">
                Enrique Vera — Fundador de Sportium
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <ContactCTA title="Agenda tu asesoría sin costo" />
    </>
  );
}
