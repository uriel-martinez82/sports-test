"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content — bottom left, Peloton-style */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="text-8xl md:text-9xl font-black text-white leading-[0.88] tracking-tight mb-5"
          >
            Equipa tu
            <br />
            gimnasio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg mb-8"
          >
            Distribuidores exclusivos. México.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center bg-white text-black font-bold text-base px-10 py-5 hover:bg-white/90 transition-colors duration-200 tracking-wide"
            >
              Cotiza tu proyecto
            </Link>
            <Link
              href="#soluciones"
              className="inline-flex items-center justify-center border border-white/80 text-white font-medium text-base px-10 py-5 hover:bg-white/10 transition-colors duration-200 tracking-wide"
            >
              Ver equipos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
