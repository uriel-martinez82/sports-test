"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

// ── Hero slideshow ─────────────────────────────────────────────────────────────

const SLIDES = [
  "https://sportsolutions.com.mx/wp-content/uploads/2022/05/t22.9_FM_7575-scaled-e1653427427542.jpg",
  "https://sportsolutions.com.mx/wp-content/uploads/2022/05/ACTIVE-Studio-006.jpeg",
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState<number | null>(null);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const nextIdx = (current + 1) % SLIDES.length;
      setNext(nextIdx);
      setFading(true);
      setTimeout(() => {
        setCurrent(nextIdx);
        setNext(null);
        setFading(false);
      }, 800);
    }, 5000);
    return () => clearInterval(id);
  }, [current]);

  return (
    <>
      {/* Base image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SLIDES[current]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Fading next image */}
      {next !== null && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={SLIDES[next]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[800ms]"
          style={{ opacity: fading ? 1 : 0 }}
        />
      )}
    </>
  );
}

// ── Contact links ──────────────────────────────────────────────────────────────

const contactLinks = [
  { icon: Phone,         label: "(55) 5256 0727",               href: "tel:+525552560727" },
  { icon: MessageCircle, label: "(55) 7877 7449",               href: "https://wa.me/5215578777449" },
  { icon: Mail,          label: "ventas@sportsolutions.com.mx", href: "mailto:ventas@sportsolutions.com.mx" },
];

const equipaLinks = [
  { label: "Equipos para condominios y torres",        href: "/cotiza/condominios" },
  { label: "Equipos para gimnasios y clubes",          href: "/cotiza/clubes" },
  { label: "Equipos para gimnasios en universidades",  href: "/cotiza/universidades" },
  { label: "Equipos para estudios Indoor Cycling",     href: "/cotiza/indoor-cycling" },
  { label: "Asesoría Profesional",                     href: "/servicios/asesoria" },
  { label: "Mantenimiento Postventa",                  href: "/servicios/mantenimiento" },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ContactoPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-[108px] overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimateIn>
            <h1 className="font-black text-5xl lg:text-7xl uppercase text-white leading-none tracking-tight mb-6">
              Hablemos de Negocios
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              En Sport Solutions tenemos un amplio catálogo de equipos de fuerza, cardio y accesorios de alta calidad.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── CONTENT — 3 COLUMNS ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Col 1 — Hablemos de negocios */}
            <AnimateIn delay={0}>
              <h2 className="font-black text-xl text-black mb-4">
                Hablemos de negocios
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                En Sport Solutions tenemos un amplio catálogo de equipos de fuerza, cardio y accesorios de alta calidad, con el mayor rendimiento del mercado, para asegurar el éxito de tu estudio, club o gimnasio.
              </p>
            </AnimateIn>

            {/* Col 2 — Vías de comunicación */}
            <AnimateIn delay={0.08}>
              <h2 className="font-black text-xl text-black mb-6">
                Nuestras vías de Comunicación
              </h2>
              <ul className="flex flex-col gap-4">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors duration-150 group"
                      >
                        <span className="w-8 h-8 bg-[#E8420C]/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-[#E8420C]" />
                        </span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </AnimateIn>

            {/* Col 3 — Equipa tu gimnasio */}
            <AnimateIn delay={0.16}>
              <h2 className="font-black text-xl text-black mb-6">
                ¡Equipa tu Gimnasio!
              </h2>
              <ul className="flex flex-col gap-3">
                {equipaLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-150 group text-sm"
                    >
                      <ArrowRight size={14} className="text-[#E8420C] shrink-0 group-hover:translate-x-0.5 transition-transform duration-150" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── PARALLAX IMAGE ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: "300px",
          backgroundImage: "url('https://sportsolutions.com.mx/wp-content/uploads/2020/11/about-us-parallax-1.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-white font-black text-2xl uppercase tracking-wider max-w-3xl mx-auto leading-tight">
            Somos representantes exclusivos de Stages y Freemotion en México.
          </p>
        </div>
      </section>

      {/* ── FORM SECTION ───────────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Solicita asesoría personalizada
          </h2>
          <p className="text-white/60 text-base mt-3">Es un placer poder saber más de tu proyecto.</p>
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
