"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const cotizaItems = [
  { label: "Estudios Indoor Cycling",   href: "#contacto" },
  { label: "Condominios",               href: "#contacto" },
  { label: "Desarrollos Inmobiliarios", href: "#contacto" },
  { label: "Clubes",                    href: "#contacto" },
  { label: "Empresas",                  href: "#contacto" },
  { label: "Universidades",             href: "#contacto" },
];

const navLinks = [
  { label: "Equipo por categoría", href: "#equipos" },
  { label: "Marcas",               href: "#marcas" },
  { label: "Servicios",            href: "#servicios" },
  { label: "Blog",                 href: "#blog" },
  { label: "Contacto",             href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 bg-[#CC1C1C] flex items-center justify-center">
              <span className="text-white font-black text-[11px] leading-none tracking-tighter">SS</span>
            </div>
            <span className="text-white font-bold text-base tracking-tight">
              Sport Solutions
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* "Cotiza tu proyecto" con dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[13px] text-white/70 hover:text-white transition-colors duration-150 tracking-wide px-3 py-2 rounded-sm">
                Cotiza tu proyecto
                <ChevronDown
                  size={13}
                  className="mt-px transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`
                  absolute top-full left-0 mt-2 w-64
                  bg-white border border-gray-100
                  shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                  opacity-0 invisible translate-y-1
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-200 ease-out
                `}
              >
                {cotizaItems.map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-5 py-3.5
                      text-[13px] text-gray-700 hover:text-black hover:bg-gray-50
                      transition-colors duration-150
                      ${i < cotizaItems.length - 1 ? "border-b border-gray-100" : ""}
                    `}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CC1C1C] shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Links regulares */}
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] text-white/70 hover:text-white transition-colors duration-150 tracking-wide px-3 py-2"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="tel:+525500000000"
              className="flex items-center gap-2 text-[13px] font-bold text-white bg-[#CC1C1C] px-5 py-2.5 hover:bg-[#b51818] transition-colors duration-200 tracking-wide"
            >
              <Phone size={13} strokeWidth={2.5} />
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
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col">

            {/* Cotiza con acordeón */}
            <div className="border-b border-white/8">
              <button
                onClick={() => setMobileDropOpen(!mobileDropOpen)}
                className="flex items-center justify-between w-full text-white/80 text-[15px] py-3.5 hover:text-white transition-colors"
              >
                Cotiza tu proyecto
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileDropOpen && (
                <div className="flex flex-col pl-4 border-l-2 border-[#CC1C1C]/40 mb-3">
                  {cotizaItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileDropOpen(false); }}
                      className="text-white/55 text-sm py-2.5 hover:text-white transition-colors"
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
                className="text-white/80 text-[15px] py-3.5 hover:text-white transition-colors border-b border-white/8"
              >
                {l.label}
              </Link>
            ))}

            {/* CTA móvil */}
            <Link
              href="tel:+525500000000"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-[#CC1C1C] text-white font-bold text-sm px-6 py-4 hover:bg-[#b51818] transition-colors duration-200 tracking-wide"
            >
              <Phone size={15} strokeWidth={2.5} />
              Llámanos ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
