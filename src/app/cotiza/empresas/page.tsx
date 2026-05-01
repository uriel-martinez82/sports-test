"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, MonitorPlay, Wrench, GraduationCap, CalendarCheck } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const ease = [0.22, 1, 0.36, 1] as const;

const FALLBACK_GYM = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";

// ─── Data ─────────────────────────────────────────────────────────────────────

const bullets = [
  "Reduce el ausentismo y mejora la productividad",
  "Beneficio diferenciador para atraer y retener talento",
  "Clases grupales con instructor certificado incluidas",
  "Arrendamiento deducible de impuestos — sin descapitalizarte",
];

const packages = [
  {
    title: "Empresa pequeña",
    subtitle: "Hasta 50 empleados · 30-50 m²",
    description:
      "Zona cardio básica + equipos de fuerza esenciales. Ideal para oficinas corporativas y startups.",
    items: ["2 caminadoras", "1 elíptica", "1 bicicleta", "Mancuernas y accesorios"],
    badge: "Desde $5,000 MXN/mes",
    image: "/images/casos/paquetes-04.jpg",
    fallback: "https://images.unsplash.com/photo-1571019614099-56d12ae14a76?w=800&q=80",
    accent: false,
  },
  {
    title: "Empresa mediana",
    subtitle: "50-200 empleados · 50-100 m²",
    description:
      "Zona cardio completa + fuerza + funcional. Para empresas que quieren ofrecer una experiencia premium.",
    items: ["4-6 caminadoras", "Elípticas", "Bicicletas Stages", "Multigym · Área funcional"],
    badge: "Cotización personalizada",
    image: "/images/casos/paquetes-01.jpg",
    fallback: FALLBACK_GYM,
    accent: true,
  },
  {
    title: "Empresa grande",
    subtitle: "+200 empleados · 100 m²+",
    description:
      "Gimnasio corporativo completo con zonas diferenciadas, estudio de clases grupales y tecnología Freemotion iFit®.",
    items: ["Cardio premium Freemotion", "Fuerza Genesis", "Indoor Cycling Stages", "Clases grupales"],
    badge: "Proyecto a medida",
    image: "/images/casos/stages-03.jpg",
    fallback: FALLBACK_GYM,
    accent: false,
  },
];

const includes = [
  {
    icon: MonitorPlay,
    title: "Render 4D del espacio",
    description: "Visualizá el gimnasio terminado antes de instalar un solo equipo.",
  },
  {
    icon: Wrench,
    title: "Instalación certificada",
    description: "Equipo técnico con cobertura en los 32 estados de la república.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación de instructores",
    description: "Formamos a tu equipo interno con certificación oficial por marca.",
  },
  {
    icon: CalendarCheck,
    title: "Mantenimiento preventivo",
    description: "3 servicios anuales incluidos en el contrato de arrendamiento.",
  },
];

const stats = [
  { value: "+100", label: "Proyectos por año" },
  { value: "+20",  label: "Años de experiencia" },
  { value: "32",   label: "Estados de la república" },
  { value: "100%", label: "Deducible en arrendamiento" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function EmpresasPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/casos/paquetes-01.jpg"
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
            Gimnasios Corporativos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            El gimnasio que cuida a tu equipo de trabajo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Un empleado saludable es un empleado productivo. Diseñamos, equipamos
            e instalamos el gimnasio corporativo perfecto para tu empresa.
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
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Cotiza el gimnasio de tu empresa
          </h2>
          <p className="text-white/60 text-base mt-3">Un asesor comercial se pondrá en contacto contigo a la brevedad.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.sportsolutions.com.mx/SportSolutions2025/form/FormEmpresasWeb/formperma/Yv7F58q_sESyXmAaUSe5eQykOKWUUl0hrqOtDWIHfpU"
            label="Form Empresas Web"
            height="811px"
          />
        </div>
      </section>

      {/* ── 3. POR QUÉ UN GIMNASIO EN TU EMPRESA ────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div>
              <AnimateIn>
                <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Por qué un gimnasio en tu empresa
                </p>
                <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                  Invierte en el bienestar de tu equipo
                </h2>
                <p className="text-black/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  Un gimnasio corporativo no es un lujo, es una herramienta estratégica. Reduce el
                  estrés laboral, mejora la productividad y es un beneficio diferenciador para
                  atraer y retener talento. En Sport Solutions diseñamos conceptos completamente
                  armados: no solo instalamos el equipo, también capacitamos instructores y ofrecemos
                  clases grupales en los horarios que tu empresa necesite.
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
                  src="/images/casos/stages-03.jpg"
                  alt="Gimnasio corporativo equipado por Sport Solutions"
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

      {/* ── 4. PAQUETES POR TAMAÑO ───────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Paquetes
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Soluciones para cada empresa
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100">
            {packages.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.1} direction="none">
                <div className={`flex flex-col h-full ${p.accent ? "bg-black" : "bg-white"} group`}>

                  {/* Imagen */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = p.fallback; }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#CC1C1C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        {p.badge}
                      </span>
                    </div>
                    {p.accent && (
                      <div className="absolute inset-0 bg-black/20" />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                    <h3 className={`text-xl lg:text-2xl font-black tracking-tight mb-1 ${p.accent ? "text-white" : "text-black"}`}>
                      {p.title}
                    </h3>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${p.accent ? "text-white/35" : "text-black/35"}`}>
                      {p.subtitle}
                    </p>
                    <p className={`text-sm font-light leading-relaxed mb-6 flex-1 ${p.accent ? "text-white/55" : "text-black/55"}`}>
                      {p.description}
                    </p>

                    {/* Items */}
                    <ul className="flex flex-col gap-2 mb-8">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-[#CC1C1C] shrink-0" />
                          <span className={`text-xs ${p.accent ? "text-white/50" : "text-black/50"}`}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`pt-5 border-t ${p.accent ? "border-white/10" : "border-gray-100"}`}>
                      <Link
                        href="#contacto"
                        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:gap-2.5 transition-all duration-200 group/link ${p.accent ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black"}`}
                      >
                        Cotizar este paquete
                        <ArrowRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LO QUE INCLUYE ────────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Servicio completo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Servicio completo para tu empresa
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-100">
            {includes.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 0.08} direction="none">
                  <div className="bg-white p-10 flex flex-col gap-5 h-full hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-11 h-11 bg-[#CC1C1C]/10 border border-[#CC1C1C]/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#CC1C1C]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-black font-bold text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-black/40 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
