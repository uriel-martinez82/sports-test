"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

export default function HotelesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-[108px]">
        <div className="absolute inset-0">
          <Image
            src="/landings/hoteles_resorts/Soluciones-para-Hoteles-Resorts.jpg"
            alt="Soluciones para Hoteles y Resorts"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <AnimateIn>
            <p className="text-[#E8420C] text-xs font-black uppercase tracking-widest mb-4">
              Equipo de Gimnasio
            </p>
            <h1 className="font-condensed font-black text-5xl lg:text-7xl uppercase text-white leading-none tracking-tight mb-4 max-w-3xl">
              Para Hoteles & Resorts
            </h1>
            <p className="text-white/80 text-lg max-w-xl mt-4 leading-relaxed">
              Destaca tu oferta de servicios y ofrece a tus huéspedes las mejores experiencias fitness del momento.
            </p>
            <a
              href="#form"
              className="inline-block bg-[#E8420C] text-white font-black px-8 py-4 uppercase tracking-wider mt-8 hover:bg-[#d13a0a] transition-colors duration-200"
            >
              Cotiza el gimnasio de tu hotel
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── SECTION 1 — Soluciones personalizadas ────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <AnimateIn>
              <p className="text-[#E8420C] text-xs font-black uppercase tracking-widest mb-4">
                Soluciones Personalizadas
              </p>
              <h2 className="font-condensed font-black text-4xl uppercase text-black leading-tight tracking-tight mb-6">
                Para tu hotel o resort
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Ofrece experiencias innovadoras para complementar la estancia de tus huéspedes. Mejora tu gimnasio con los equipos de cardio de Freemotion, Shua, Stages o Unofit, y accede a las experiencias fitness más avanzadas del mundo.
                </p>
                <p>
                  Garantiza que tus huéspedes puedan disfrutar de un entrenamiento total de alta calidad y efectividad con nuestra completa línea de equipamiento de fuerza.
                </p>
                <p>
                  Dale un impulso a tu gimnasio y brinda a tus huéspedes una experiencia fitness única.
                </p>
              </div>
              <a
                href="#form"
                className="inline-block bg-[#E8420C] text-white font-black px-6 py-3 mt-6 uppercase tracking-wider hover:bg-[#d13a0a] transition-colors duration-200"
              >
                Habla con un especialista
              </a>
            </AnimateIn>

            {/* Right: image */}
            <AnimateIn direction="left" delay={0.1}>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/landings/hoteles_resorts/Panorama_Hotel_O-Grande.jpg"
                  alt="Hotel gimnasio equipado"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Caso de éxito ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="relative w-full overflow-hidden mb-10" style={{ aspectRatio: "16/7" }}>
              <Image
                src="/landings/hoteles_resorts/cala_de_mar_ixtapa_expertoenhoteles6-Grande.jpg"
                alt="Cala de Mar Ixtapa — caso de éxito Sport Solutions"
                fill
                className="object-cover object-center"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-condensed font-black text-3xl text-black text-center max-w-3xl mx-auto leading-snug">
              En Sport Solutions entendemos la importancia de ofrecer servicios de calidad que superen las expectativas de tus huéspedes.
            </h2>
          </AnimateIn>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────────────────── */}
      <section id="form" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Cotiza el gimnasio de tu hotel
          </h2>
          <p className="text-white/60 text-base mt-3">
            Un asesor comercial se pondrá en contacto contigo a la brevedad.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormularioGeneral/formperma/HUZg-O-8C31vPjux7xvDXNp4XjgVvP-bLTjq6Acu-O4"
            label="Formulario General"
            height="804px"
          />
        </div>
      </section>
    </>
  );
}
