"use client";

import { useState, useEffect, useRef } from "react";
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

type Panel = "cotiza" | "equipo" | null;

const NAV_LINK_CLASS =
  "relative flex items-center gap-1 text-[14px] font-medium uppercase tracking-[0.05em] text-white transition-colors duration-150 px-3 h-full hover:text-[#E8420C]";

export default function Navbar() {
  const [openPanel, setOpenPanel]           = useState<Panel>(null);
  const [menuOpen, setMenuOpen]             = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [mobileEquipoOpen, setMobileEquipoOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  // Close panel on outside click
  useEffect(() => {
    if (!openPanel) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openPanel]);

  const toggle = (panel: Panel) =>
    setOpenPanel((prev) => (prev === panel ? null : panel));

  const closeAll = () => {
    setOpenPanel(null);
    setMenuOpen(false);
    setMobileDropOpen(false);
    setMobileEquipoOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Sport Solutions"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-stretch h-14"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {/* Cotiza tu proyecto */}
            <button
              onClick={() => toggle("cotiza")}
              className={`${NAV_LINK_CLASS} ${openPanel === "cotiza" ? "text-[#E8420C]" : ""}`}
            >
              Cotiza tu proyecto
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${openPanel === "cotiza" ? "rotate-180" : ""}`}
              />
              {openPanel === "cotiza" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8420C]" />
              )}
            </button>

            {/* Equipo por categoría */}
            <button
              onClick={() => toggle("equipo")}
              className={`${NAV_LINK_CLASS} ${openPanel === "equipo" ? "text-[#E8420C]" : ""}`}
            >
              Equipo por categoría
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${openPanel === "equipo" ? "rotate-180" : ""}`}
              />
              {openPanel === "equipo" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8420C]" />
              )}
            </button>

            {/* Simple links */}
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpenPanel(null)}
                className={NAV_LINK_CLASS}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA — text link style */}
          <div className="hidden lg:flex items-center">
            <Link
              href="tel:+525500000000"
              className="flex items-center gap-2 text-[#E8420C] text-[14px] font-medium uppercase tracking-[0.05em] hover:text-white transition-colors duration-150"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <Phone size={14} strokeWidth={2} />
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

      {/* ── Red accent line when a panel is open ─────────────────────────── */}
      {openPanel && (
        <div className="hidden lg:block h-[3px] bg-[#E8420C] w-full" />
      )}

      {/* ── Mega menu — Cotiza ───────────────────────────────────────────── */}
      {openPanel === "cotiza" && (
        <div className="hidden lg:block w-full bg-[#f0f0f0] shadow-xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <h2
                className="text-2xl font-black uppercase tracking-wider text-black"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Soluciones para tu negocio
              </h2>
              <button
                onClick={() => setOpenPanel(null)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-black/50 hover:text-black transition-colors"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <X size={14} />
                Cerrar
              </button>
            </div>

            {/* 6-card grid */}
            <div className="grid grid-cols-3 gap-4">
              {cotizaItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpenPanel(null)}
                  className="group flex flex-col gap-3"
                >
                  {/* Image placeholder */}
                  <div className="w-full aspect-video bg-black/10 group-hover:bg-black/20 transition-colors duration-150" />
                  <span
                    className="text-[14px] font-bold text-black group-hover:text-[#E8420C] transition-colors duration-150"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Mega menu — Equipo ───────────────────────────────────────────── */}
      {openPanel === "equipo" && (
        <div className="hidden lg:block w-full bg-[#f0f0f0] shadow-xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <h2
                className="text-2xl font-black uppercase tracking-wider text-black"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Equipo para todo tipo de entrenamiento
              </h2>
              <button
                onClick={() => setOpenPanel(null)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-black/50 hover:text-black transition-colors"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <X size={14} />
                Cerrar
              </button>
            </div>

            {/* 2-column link list */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-1 max-w-xl">
              {equipoItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpenPanel(null)}
                  className="text-[14px] font-medium text-black py-2 border-b border-black/10 hover:text-[#E8420C] hover:border-[#E8420C] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ──────────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div
            className="max-w-7xl mx-auto px-6 py-5 flex flex-col"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {/* Cotiza */}
            <div className="border-b border-white/[0.06]">
              <button
                onClick={() => setMobileDropOpen(!mobileDropOpen)}
                className="flex items-center justify-between w-full text-white text-[13px] font-medium tracking-[0.05em] uppercase py-3.5 hover:text-[#E8420C] transition-colors"
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
                      onClick={closeAll}
                      className="text-white/50 text-[13px] font-medium tracking-[0.05em] uppercase py-2.5 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Equipo */}
            <div className="border-b border-white/[0.06]">
              <button
                onClick={() => setMobileEquipoOpen(!mobileEquipoOpen)}
                className="flex items-center justify-between w-full text-white text-[13px] font-medium tracking-[0.05em] uppercase py-3.5 hover:text-[#E8420C] transition-colors"
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
                      onClick={closeAll}
                      className="text-white/50 text-[13px] font-medium tracking-[0.05em] uppercase py-2.5 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple links */}
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={closeAll}
                className="text-white text-[13px] font-medium tracking-[0.05em] uppercase py-3.5 hover:text-[#E8420C] transition-colors border-b border-white/[0.06]"
              >
                {l.label}
              </Link>
            ))}

            {/* CTA móvil */}
            <Link
              href="tel:+525500000000"
              onClick={closeAll}
              className="mt-5 flex items-center justify-center gap-2 text-[#E8420C] text-[13px] font-medium tracking-[0.05em] uppercase py-4 border border-[#E8420C]/40 hover:text-white hover:border-white transition-colors duration-150"
            >
              <Phone size={14} strokeWidth={2} />
              Llámanos ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
