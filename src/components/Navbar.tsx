"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Equipo",    href: "#equipos" },
  { label: "Marcas",   href: "#marcas" },
  { label: "Servicios",href: "#servicios" },
  { label: "Blog",     href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 bg-[#CC1C1C] flex items-center justify-center">
              <span className="text-white font-black text-[11px] leading-none tracking-tighter">SS</span>
            </div>
            <span className="text-white font-bold text-base tracking-tight">
              Sport Solutions
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] text-white/70 hover:text-white transition-colors duration-150 tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contacto"
              className="text-[13px] font-semibold text-white border border-white/70 px-5 py-2 hover:bg-white hover:text-black transition-all duration-200"
            >
              Cotiza tu proyecto
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
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 text-base hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 border border-white text-white font-semibold text-sm px-6 py-3 text-center hover:bg-white hover:text-black transition-all duration-200"
            >
              Cotiza tu proyecto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
