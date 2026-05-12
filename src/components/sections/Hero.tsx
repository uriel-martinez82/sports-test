"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: '100vh', marginTop: 0, paddingTop: 0, overflow: 'hidden' }}>
      {/* Background video */}
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
        }}
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
            className="font-condensed font-black text-8xl md:text-9xl uppercase text-white leading-[0.9] tracking-tight mb-5"
          >
            Equipamos a los mejores gimnasios de México
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg mb-8"
          >
            Distribuidores exclusivos de las marcas líderes en fitness comercial. Diseño, instalación y servicio post-venta en todo el país.
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
