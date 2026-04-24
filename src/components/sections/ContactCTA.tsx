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

export default function ContactCTA({
  title = "¿Listo para equipar tu espacio?",
  subtitle = "Cuéntanos sobre tu proyecto y un especialista te contactará en menos de 24 horas hábiles con una propuesta personalizada.",
}: {
  title?: string;
  subtitle?: string;
}) {
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
    <section id="contacto" className="relative bg-white py-32 lg:py-44 overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=30"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-5"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <AnimateIn>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
                Contacto
              </p>
              <h2 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-5">
                {title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm mb-10">
                {subtitle}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="flex flex-col gap-4 text-sm">
                <a href="mailto:contacto@sportsolutions.com.mx" className="text-gray-800 font-medium hover:text-black transition-colors">
                  contacto@sportsolutions.com.mx
                </a>
                <a href="tel:+525500000000" className="text-gray-800 font-medium hover:text-black transition-colors">
                  +52 55 0000 0000
                </a>
                <span className="text-gray-800 font-medium">Ciudad de México, México</span>
              </div>
            </AnimateIn>
          </div>

          {/* Right: form */}
          <AnimateIn direction="left" delay={0.15}>
            <div className="bg-gray-50 border border-gray-200 shadow-sm p-10 lg:p-14">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-12 h-12 bg-[#CC1C1C] flex items-center justify-center mb-2">
                    <span className="text-white font-black text-lg">✓</span>
                  </div>
                  <h3 className="text-black font-bold text-xl">¡Mensaje enviado!</h3>
                  <p className="text-black/50 text-sm leading-relaxed max-w-xs">
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
                    <label className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                      Tipo de proyecto
                    </label>
                    <select
                      required
                      value={form.project}
                      onChange={set("project")}
                      className="bg-white border border-gray-300 px-5 py-4 text-gray-900 text-sm focus:outline-none focus:border-gray-400 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-white text-black/40">Selecciona una opción</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-white text-black">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tamaño del espacio, número de equipos, fecha estimada..."
                      className="bg-white border border-gray-300 px-5 py-4 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full bg-[#CC1C1C] text-white font-black text-base py-5 hover:bg-[#b51818] transition-colors duration-200 tracking-widest uppercase"
                  >
                    Solicitar cotización
                  </button>

                  <p className="text-black/20 text-xs text-center">
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
      <label className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-white border border-gray-300 px-5 py-4 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
      />
    </div>
  );
}
