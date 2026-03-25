"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden bg-black">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="text-white/55 text-xs font-semibold uppercase tracking-[0.22em] mb-5"
        >
          Equipamiento Profesional · México
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="text-[clamp(2.8rem,8vw,6rem)] font-black text-white leading-[0.88] tracking-tight mb-6 max-w-4xl"
        >
          Equipamos el gimnasio perfecto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="text-white/55 text-lg lg:text-xl font-light max-w-lg mb-10 leading-relaxed"
        >
          Distribuidores exclusivos de las mejores marcas fitness del mundo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center bg-white text-black font-bold text-sm px-9 py-4 hover:bg-white/90 transition-colors duration-200 tracking-wide"
          >
            Cotiza tu proyecto
          </Link>
          <Link
            href="#equipos"
            className="inline-flex items-center justify-center border border-white/80 text-white font-medium text-sm px-9 py-4 hover:bg-white/10 transition-colors duration-200 tracking-wide"
          >
            Ver equipos
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/35"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/40" />
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
