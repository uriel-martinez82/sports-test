"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const cotizaItems = [
  { label: "Estudios Indoor Cycling",   href: "/cotiza/indoor-cycling" },
  { label: "Condominios",               href: "/cotiza/condominios" },
  { label: "Desarrollos Inmobiliarios", href: "/cotiza/desarrollos-inmobiliarios" },
  { label: "Clubes",                    href: "/cotiza/clubes" },
  { label: "Empresas",                  href: "/cotiza/empresas" },
  { label: "Universidades",             href: "/cotiza/universidades" },
];

const equipoItems = [
  { label: "Bicicletas de Spinning",    href: "/equipo/bicicletas-de-spinning" },
  { label: "Caminadoras",               href: "/equipo/caminadoras" },
  { label: "Elípticas",                 href: "/equipo/elipticas" },
  { label: "Equipos de peso libre",     href: "/equipo/peso-libre" },
  { label: "Equipos de peso integrado", href: "/equipo/peso-integrado" },
  { label: "Equipo Funcional",          href: "/equipo/funcional" },
  { label: "Piso para gimnasio",        href: "/equipo/piso-gimnasio" },
];

const navLinks = [
  { label: "Marcas",    href: "#marcas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog",      href: "#blog" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]                 = useState(false);
  const [mobileDropOpen, setMobileDropOpen]     = useState(false);
  const [mobileEquipoOpen, setMobileEquipoOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[60px]">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Sport Solutions"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* "Cotiza tu proyecto" con dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-150 px-3 py-2">
                Cotiza tu proyecto
                <ChevronDown
                  size={11}
                  className="mt-px transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#E8420C]"
                />
              </button>

              {/* Dropdown panel */}
              <div className="
                absolute top-full left-0 mt-1 w-64
                bg-[#111111] border border-white/10
                shadow-[0_16px_40px_rgba(0,0,0,0.5)]
                opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200 ease-out
              ">
                <div className="h-[2px] bg-[#E8420C] w-full" />
                <div className="py-1">
                  {cotizaItems.map((item, i) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-5 py-3
                        text-[12px] font-medium tracking-wide uppercase
                        text-white/50 hover:text-white hover:bg-white/5
                        transition-colors duration-150
                        ${i < cotizaItems.length - 1 ? "border-b border-white/5" : ""}
                      `}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E8420C] shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* "Equipo por categoría" con dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-150 px-3 py-2">
                Equipo por categoría
                <ChevronDown
                  size={11}
                  className="mt-px transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#E8420C]"
                />
              </button>

              {/* Dropdown panel */}
              <div className="
                absolute top-full left-0 mt-1 w-64
                bg-[#111111] border border-white/10
                shadow-[0_16px_40px_rgba(0,0,0,0.5)]
                opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200 ease-out
              ">
                <div className="h-[2px] bg-[#E8420C] w-full" />
                <div className="py-1">
                  {equipoItems.map((item, i) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-5 py-3
                        text-[12px] font-medium tracking-wide uppercase
                        text-white/50 hover:text-white hover:bg-white/5
                        transition-colors duration-150
                        ${i < equipoItems.length - 1 ? "border-b border-white/5" : ""}
                      `}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E8420C] shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Links regulares */}
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-150 px-3 py-2"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="tel:+525500000000"
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.12em] uppercase text-white bg-[#E8420C] px-5 py-2.5 hover:bg-[#d13a0a] transition-colors duration-200"
            >
              <Phone size={12} strokeWidth={2.5} />
              Llámanos ahora
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col">

            {/* Cotiza con acordeón */}
            <div className="border-b border-white/[0.06]">
              <button
                onClick={() => setMobileDropOpen(!mobileDropOpen)}
                className="flex items-center justify-between w-full text-white/60 text-[12px] font-semibold tracking-[0.08em] uppercase py-3.5 hover:text-white transition-colors"
              >
                Cotiza tu proyecto
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileDropOpen ? "rotate-180 text-[#E8420C]" : ""}`}
                />
              </button>

              {mobileDropOpen && (
                <div className="flex flex-col pl-4 border-l-2 border-[#E8420C]/40 mb-3">
                  {cotizaItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileDropOpen(false); }}
                      className="text-white/40 text-[11px] font-medium tracking-wide uppercase py-2.5 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Equipo por categoría con acordeón */}
            <div className="border-b border-white/[0.06]">
              <button
                onClick={() => setMobileEquipoOpen(!mobileEquipoOpen)}
                className="flex items-center justify-between w-full text-white/60 text-[12px] font-semibold tracking-[0.08em] uppercase py-3.5 hover:text-white transition-colors"
              >
                Equipo por categoría
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileEquipoOpen ? "rotate-180 text-[#E8420C]" : ""}`}
                />
              </button>

              {mobileEquipoOpen && (
                <div className="flex flex-col pl-4 border-l-2 border-[#E8420C]/40 mb-3">
                  {equipoItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileEquipoOpen(false); }}
                      className="text-white/40 text-[11px] font-medium tracking-wide uppercase py-2.5 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Links regulares */}
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/60 text-[12px] font-semibold tracking-[0.08em] uppercase py-3.5 hover:text-white transition-colors border-b border-white/[0.06]"
              >
                {l.label}
              </Link>
            ))}

            {/* CTA móvil */}
            <Link
              href="tel:+525500000000"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-[#E8420C] text-white font-black text-[11px] tracking-[0.12em] uppercase px-6 py-4 hover:bg-[#d13a0a] transition-colors duration-200"
            >
              <Phone size={13} strokeWidth={2.5} />
              Llámanos ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}