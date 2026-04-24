"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ContactCTA from "@/components/sections/ContactCTA";

const ease = [0.22, 1, 0.36, 1] as const;

const FALLBACK_GYM = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

// ─── Data ─────────────────────────────────────────────────────────────────────

const bullets = [
  "Potencia las capacidades físicas de tus estudiantes",
  "Genera sentido de pertenencia e identidad institucional",
  "Arrendamiento puro — 100% deducible de impuestos",
  "Activaciones wellness para conectar con tus estudiantes",
];

const wellnessBullets = [
  "Clases grupales",
  "Eventos de bienestar",
  "Capacitación de instructores",
];

const tiers = [
  {
    size: "Espacio pequeño",
    area: "80 – 110 m²",
    badge: "Ideal para campus pequeños",
    price: "Desde $280,000 MXN",
    items: [
      "2-3 caminadoras",
      "1-3 elípticas",
      "1-3 bicicletas",
      "1-4 estaciones multifuncionales",
      "Rack de mancuernas",
    ],
    accent: false,
  },
  {
    size: "Espacio mediano",
    area: "110 – 200 m²",
    badge: "El más solicitado",
    price: "Desde $600,000 MXN",
    items: [
      "4-5 caminadoras",
      "2-3 elípticas",
      "2-3 bicicletas Stages",
      "Equipos de fuerza Freemotion",
      "Zona funcional",
    ],
    accent: true,
  },
  {
    size: "Espacio grande",
    area: "200 – 300 m²+",
    badge: "Para grandes campus",
    price: "Hasta $2,300,000 MXN",
    items: [
      "5+ caminadoras Freemotion",
      "Bicicletas Stages SC",
      "Equipos Genesis fuerza",
      "Zona funcional completa",
      "Estudio clases grupales",
    ],
    accent: false,
  },
];

const maintenanceBullets = [
  "3 mantenimientos preventivos anuales incluidos en arrendamiento",
  "Refacciones originales con stock directo",
  "Técnicos certificados en los 32 estados",
];

const stats = [
  { value: "+100", label: "Proyectos por año" },
  { value: "+20",  label: "Años de experiencia" },
  { value: "32",   label: "Estados de la república" },
  { value: "100%", label: "Deducible en arrendamiento" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function UniversidadesPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sportsolutions.com.mx/wp-content/uploads/2025/09/Copia-de-12102024-IMG_5300-scaled.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = FALLBACK_GYM; }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="text-white/65 text-xs font-semibold uppercase tracking-[0.22em] mb-6"
          >
            Gimnasios para Universidades
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            El gimnasio que transforma la vida universitaria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            El gimnasio ya no es un lujo en las universidades, es una parte esencial
            de la propuesta de valor institucional. Arrendamiento puro 100% deducible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
          >
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center bg-white text-black font-bold text-base px-10 py-5 hover:bg-white/90 transition-colors duration-200 tracking-wide"
            >
              Cotiza tu proyecto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FORMULARIO ────────────────────────────────────────────────── */}
      <ContactCTA
        title="Cotiza el gimnasio de tu universidad"
        subtitle="Muy pronto un asesor comercial se pondrá en contacto contigo."
      />

      {/* ── 3. POR QUÉ UN GIMNASIO EN TU UNIVERSIDAD ────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué un gimnasio en tu universidad
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  Bienestar estudiantil que genera sentido de pertenencia
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Las nuevas generaciones valoran profundamente el bienestar físico, mental y
                  emocional. Un gimnasio bien equipado es parte esencial de la propuesta de valor
                  de cualquier institución educativa moderna. En Sport Solutions trabajamos en
                  conjunto con las áreas académicas, deportiva y de infraestructura para garantizar
                  que el diseño, selección de equipos e instalación cumplan con los más altos
                  estándares.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <ul className="flex flex-col gap-4 mb-10">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-black/75 text-sm lg:text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <Link
                  href="#contacto"
                  className="inline-flex items-center border border-black/70 text-black font-semibold text-base px-10 py-4 hover:bg-black hover:text-white transition-all duration-200 tracking-wide"
                >
                  Habla con un especialista
                </Link>
              </AnimateIn>
            </div>

            <AnimateIn direction="left" delay={0.1} className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2025/09/6.jpg"
                  alt="Gimnasio universitario equipado por Sport Solutions"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK_GYM; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
                <div className="text-4xl font-black text-white leading-none">100%</div>
                <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                  Deducible en arrendamiento
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 4. ACTIVACIONES WELLNESS ─────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Imagen — izquierda */}
            <AnimateIn direction="right" delay={0.1} className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2023/10/Activacion-wellness-sport-solutions.webp"
                  alt="Activación wellness Sport Solutions"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </AnimateIn>

            {/* Texto — derecha */}
            <div className="order-1 lg:order-2">
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Activaciones wellness
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  Activaciones wellness para tus estudiantes
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Organizamos experiencias que permiten desarrollar un estilo de vida activo y
                  saludable en tu universidad. Desde clases de fitness hasta momentos de relajación,
                  creamos activaciones que conectan emocionalmente con tus estudiantes y promueven
                  el uso del gimnasio.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <ul className="flex flex-col gap-4 mb-10">
                  {wellnessBullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-black/75 text-sm lg:text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                >
                  Conocer más sobre activaciones
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PAQUETES POR TAMAÑO ───────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Paquetes
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Paquetes según el tamaño de tu espacio
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100">
            {tiers.map((t, i) => (
              <AnimateIn key={t.size} delay={i * 0.1} direction="none">
                <div className={`flex flex-col h-full p-10 lg:p-14 ${t.accent ? "bg-[#CC1C1C]" : "bg-white"}`}>

                  <div className="mb-8">
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${t.accent ? "text-white/70" : "text-black/30"}`}>
                      {t.badge}
                    </p>
                    <h3 className={`text-2xl font-black tracking-tight leading-tight mb-1 ${t.accent ? "text-white" : "text-black"}`}>
                      {t.size}
                    </h3>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${t.accent ? "text-white/60" : "text-black/25"}`}>
                      {t.area}
                    </p>
                  </div>

                  {/* Items */}
                  <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${t.accent ? "bg-white/60" : "bg-[#CC1C1C]"}`} />
                        <span className={`text-sm leading-relaxed ${t.accent ? "text-white/80" : "text-black/45"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Precio */}
                  <div className={`py-4 border-t mb-6 ${t.accent ? "border-white/20" : "border-gray-100"}`}>
                    <p className={`text-2xl font-black tracking-tight ${t.accent ? "text-white" : "text-black/70"}`}>
                      {t.price}
                    </p>
                  </div>

                  <Link
                    href="#contacto"
                    className={`inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest px-6 py-4 transition-all duration-200 group ${
                      t.accent
                        ? "bg-white text-[#CC1C1C] hover:bg-white/90"
                        : "border border-black/15 text-black hover:bg-gray-50"
                    }`}
                  >
                    Solicitar cotización
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MANTENIMIENTO Y SOPORTE ───────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Mantenimiento y soporte
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  Soporte técnico certificado
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Nuestros técnicos están capacitados exclusivamente para dar servicio a las marcas
                  que distribuimos. Garantías directas, mejor tiempo de respuesta en refacciones y
                  asistencia técnica continua para que tu espacio siempre esté en perfecto
                  funcionamiento.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <ul className="flex flex-col gap-4 mb-10">
                  {maintenanceBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#CC1C1C] flex items-center justify-center">
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </span>
                      <span className="text-black/75 text-sm lg:text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <Link
                  href="#contacto"
                  className="inline-flex items-center border border-black/70 text-black font-semibold text-base px-10 py-4 hover:bg-black hover:text-white transition-all duration-200 tracking-wide"
                >
                  Solicitar información
                </Link>
              </AnimateIn>
            </div>

            <AnimateIn direction="left" delay={0.1} className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sportsolutions.com.mx/wp-content/uploads/2023/07/MAINTENANCE_LOGAN_3882-1.jpg"
                  alt="Técnico certificado de Sport Solutions realizando mantenimiento"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = FALLBACK_GYM; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 bg-black/90 border border-white/10 px-6 py-4 backdrop-blur-sm">
                <div className="text-4xl font-black text-white leading-none">3x</div>
                <div className="text-white/50 text-xs font-medium mt-1 uppercase tracking-widest">
                  Mantenimientos anuales incluidos
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
