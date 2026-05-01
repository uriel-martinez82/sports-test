"use client";

import { Building2, Dumbbell, GraduationCap, Hotel, TreePine, Users } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const HERO = "/images/hero/t22-fm-7575-2.jpg";
const FALLBACK = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

const audience = [
  {
    icon: Dumbbell,
    title: "Gimnasio Comercial",
    description: "Si vas a iniciar tu propio gimnasio o renovar equipos, tenemos planes de financiamiento.",
  },
  {
    icon: Building2,
    title: "Residencial",
    description: "Necesitas renovar o instalar un gimnasio en tu condominio ya constituido.",
  },
  {
    icon: TreePine,
    title: "Club de Golf y/o Tenis",
    description: "Amplía o renueva tu área fitness como Asociación Civil.",
  },
  {
    icon: Hotel,
    title: "Hotel",
    description: "Renueva tu área fitness para ser más atractivo a tus huéspedes.",
  },
  {
    icon: Users,
    title: "Corporativo",
    description: "Ofrece un área fitness a tus colaboradores en oficinas o planta.",
  },
  {
    icon: GraduationCap,
    title: "Universidad",
    description: "Amplía la oferta de fitness para tus estudiantes.",
  },
];

const benefits = [
  "Sin garantías si el área de análisis aprueba el proyecto",
  "Inicia con poco capital inicial",
  "Contrato balanceado, sencillo y claro",
  "Flexibilidad para cancelar durante la vigencia",
  "Utiliza tu flujo mensual para tener la mejor área fitness",
  "Deduce el pago de renta como gasto mensual",
];

export default function ArrendamientoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end pt-[108px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO}
          alt="ArrendaFitness — Sport Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <AnimateIn>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Servicio · Arrendamiento
            </p>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4">
              ArrendaFitness
            </h1>
            <p className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
              La manera fácil de tener el gimnasio y área fitness que tus instalaciones necesita
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 1. INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimateIn>
              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight mb-6">
                Diseña un nuevo espacio o renueva tu área fitness con baja inversión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Condiciones sencillas y trámites ligeros. Si tu proyecto es de 1 millón de pesos o más de 20 equipos, contáctanos — hemos creado una solución integral única en el mercado.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 2. ¿PARA QUIÉN ES? ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Solución para
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              ¿Para quién es?
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audience.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 0.07} direction="none">
                  <div className="bg-white border border-gray-100 shadow-sm p-8 flex flex-col gap-4 h-full hover:shadow-md transition-shadow duration-200">
                    <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#CC1C1C]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. ¿POR QUÉ ARRENDAFITNESS? ────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Beneficios
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight mb-8">
                ¿Por qué ArrendaFitness?
              </h2>
              <ul className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-700 text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/cotiza-tu-proyecto.jpg"
                  alt="Área fitness arrendada"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Quiero arrendar equipo
          </h2>
          <p className="text-white/60 text-base mt-3">Aprovecha nuestras ventajas financieras.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/Arrendamiento2026/formperma/2gwBaoKosJZ-dm5c08T2KdhW5lmrkQaKzZ2mISMYJrQ"
            label="Arrendamiento 2026"
            height="1482px"
          />
        </div>
      </section>
    </>
  );
}
