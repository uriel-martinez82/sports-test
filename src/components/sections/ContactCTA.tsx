"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const projectTypes = [
  "Condominio",
  "Indoor Cycling / Boutique",
  "Hotel",
  "Corporativo",
  "Desarrollo Inmobiliario",
  "Universidad",
  "Otro",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
};

export default function ContactCTA() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", project: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative bg-black py-32 lg:py-44 overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=30"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <AnimateIn>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Contacto
              </p>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
                ¿Listo para equipar tu espacio?
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed max-w-sm mb-10">
                Cuéntanos sobre tu proyecto y un especialista te contactará en
                menos de 24 horas hábiles con una propuesta personalizada.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="flex flex-col gap-4 text-sm">
                <a href="mailto:contacto@sportsolutions.com.mx" className="text-white/50 hover:text-white transition-colors">
                  contacto@sportsolutions.com.mx
                </a>
                <a href="tel:+525500000000" className="text-white/50 hover:text-white transition-colors">
                  +52 55 0000 0000
                </a>
                <span className="text-white/30">Ciudad de México, México</span>
              </div>
            </AnimateIn>
          </div>

          {/* Right: form */}
          <AnimateIn direction="left" delay={0.15}>
            <div className="bg-white/5 border border-white/10 p-10 lg:p-14">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-12 h-12 bg-[#CC1C1C] flex items-center justify-center mb-2">
                    <span className="text-white font-black text-lg">✓</span>
                  </div>
                  <h3 className="text-white font-bold text-xl">¡Mensaje enviado!</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    Un especialista de Sport Solutions te contactará en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Nombre" type="text" value={form.name} onChange={set("name")} placeholder="Tu nombre" required />
                    <Field label="Email" type="email" value={form.email} onChange={set("email")} placeholder="tu@empresa.com" required />
                  </div>

                  <Field label="Teléfono" type="tel" value={form.phone} onChange={set("phone")} placeholder="+52 55 0000 0000" />

                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Tipo de proyecto
                    </label>
                    <select
                      required
                      value={form.project}
                      onChange={set("project")}
                      className="bg-white/5 border border-white/20 px-5 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-black text-white/40">Selecciona una opción</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-black text-white">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tamaño del espacio, número de equipos, fecha estimada..."
                      className="bg-white/5 border border-white/20 px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full bg-[#CC1C1C] text-white font-black text-base py-5 hover:bg-[#b51818] transition-colors duration-200 tracking-widest uppercase"
                  >
                    Solicitar cotización
                  </button>

                  <p className="text-white/20 text-xs text-center">
                    Sin spam · Respuesta en menos de 24 horas hábiles
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

// Small reusable input field
function Field({
  label, type, value, onChange, placeholder, required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.18em]">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-white/5 border border-white/20 px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors"
      />
    </div>
  );
}
