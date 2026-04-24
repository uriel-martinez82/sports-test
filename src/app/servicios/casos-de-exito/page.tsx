"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import ContactCTA from "@/components/sections/ContactCTA";

const HERO = "https://sportsolutions.com.mx/wp-content/uploads/2020/12/Stages0015-1024x768.jpg";
const FALLBACK = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

export default function CasosDeExitoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end pt-[108px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO}
          alt="Casos de Éxito — Sport Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <AnimateIn>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Servicio · Casos de Éxito
            </p>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4">
              Casos de Éxito
            </h1>
            <p className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Somos representantes oficiales de Stages en México
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 1. STAGES CASE ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <AnimateIn>
              <div className="mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2020/11/StagesCycling.png"
                  alt="Stages Cycling"
                  className="h-10 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight tracking-tight mb-6">
                Distribuidores oficiales de la mejor bicicleta de Indoor Cycling del mundo
              </h2>
              <div className="border-l-2 border-[#CC1C1C] pl-6">
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-3">
                  "Contar con un socio como Sport Solutions, que ya tiene una trayectoria impecable en el mercado, para nosotros ha sido esencial."
                </blockquote>
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">
                  Javier Santín — Stages Cycling University
                </p>
              </div>
            </AnimateIn>

            {/* Right: image */}
            <AnimateIn direction="left" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2020/12/Stages011-1024x768.jpg"
                  alt="Stages Indoor Cycling"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK; }}
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 2. OCTANE CASE ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: image */}
            <AnimateIn direction="right" delay={0.1} className="order-2 lg:order-1">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2020/12/Gimnasio001-1024x768.jpg"
                  alt="Octane Fitness"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK; }}
                />
              </div>
            </AnimateIn>

            {/* Right: text */}
            <AnimateIn className="order-1 lg:order-2">
              <div className="mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2020/11/Octane-logo-Sport-Solutions.png"
                  alt="Octane Fitness"
                  className="h-10 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight tracking-tight mb-6">
                9 años como distribuidor oficial de Octane en México
              </h2>
              <div className="border-l-2 border-[#CC1C1C] pl-6">
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-3">
                  "Sport Solutions realmente respalda lo que nosotros somos en cuanto a servicio y garantías."
                </blockquote>
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">
                  Mónica Hernández — Directora Comercial LATAM
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <ContactCTA title="Tenemos la solución para cada proyecto" />
    </>
  );
}
