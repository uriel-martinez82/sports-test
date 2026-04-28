"use client";

import { Clock, Settings, Wrench, Package } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const HERO = "https://sportsolutions.com.mx/wp-content/uploads/2023/07/MAINTENANCE_LOGAN_3882-1-1024x683.jpg";
const FALLBACK = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

const services = [
  {
    icon: Settings,
    title: "Mantenimiento Preventivo",
    description: "Visitas programadas para mantener tu equipo en óptimas condiciones.",
  },
  {
    icon: Wrench,
    title: "Soporte Técnico",
    description: "Técnicos certificados capacitados en las marcas que distribuimos.",
  },
  {
    icon: Clock,
    title: "Atención Inmediata",
    description: "Respuesta rápida ante fallas para minimizar el tiempo de inactividad.",
  },
  {
    icon: Package,
    title: "Venta de Repuestos Originales",
    description: "Refacciones para Octane, Impulse, Stages, True, UnoFit, Freemotion, Hydromassage y Xebex.",
  },
];

export default function MantenimientoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end pt-[108px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO}
          alt="Mantenimiento — Sport Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <AnimateIn>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Servicio · Mantenimiento
            </p>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4">
              Servicio técnico y mantenimiento programado
            </h1>
            <p className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Nuestro objetivo es tu satisfacción total
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 1. SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Lo que ofrecemos
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Nuestros servicios
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimateIn key={s.title} delay={i * 0.08} direction="none">
                  <div className="bg-white border border-gray-100 shadow-sm p-10 flex flex-col gap-5 h-full hover:shadow-md transition-shadow duration-200">
                    <div className="w-12 h-12 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#CC1C1C]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-xl mb-2">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
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
                Para nosotros es muy importante contar con un proveedor del tamaño de Sport Solutions ya que nos apoyan desde la selección de equipos y con un servicio postventa robusto.
              </blockquote>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">
                Rodrigo Cabré — Director de Compras, Sports World
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 3. NOTE ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="flex gap-4 items-start max-w-3xl">
              <div className="w-1 shrink-0 bg-[#CC1C1C] self-stretch" />
              <p className="text-gray-600 text-base leading-relaxed">
                Los técnicos de Sport Solutions están capacitados para dar servicio solo a las marcas que distribuimos. Es posible realizar visitas de diagnóstico para otros equipos, pero no garantizamos el arreglo.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Solicita mantenimiento
          </h2>
          <p className="text-white/60 text-base mt-3">Técnicos certificados listos para atenderte.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormularioMantenimiento/formperma/EsMhzkhEkYUWzRwv6ok0ZvjbyLgBVg-D4YhdTfml-Gw"
            label="Formulario Mantenimiento"
            height="804px"
          />
        </div>
      </section>
    </>
  );
}
