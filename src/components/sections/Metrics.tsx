"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";

const stats = [
  {
    prefix: "+",
    target: 100,
    suffix: "",
    label: "Proyectos por año",
    detail: "Espacios fitness instalados anualmente en toda la República.",
  },
  {
    prefix: "+",
    target: 15,
    suffix: "",
    label: "Años de experiencia",
    detail: "Liderando el mercado de equipamiento fitness en México.",
  },
  {
    prefix: "",
    target: 6,
    suffix: "",
    label: "Marcas exclusivas",
    detail: "Las marcas más reconocidas del mundo bajo un mismo techo.",
  },
  {
    prefix: "+",
    target: 500,
    suffix: "",
    label: "Clientes satisfechos",
    detail: "Desde condominios boutique hasta grandes complejos hoteleros.",
  },
];

function Counter({
  prefix,
  target,
  suffix,
}: {
  prefix: string;
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, prefix, target, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-black py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/8 border border-white/8">
          {stats.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.08} className="p-10 lg:p-14 overflow-hidden">
              <div className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-5">
                <Counter prefix={s.prefix} target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-white font-semibold text-base mb-2 leading-tight">
                {s.label}
              </div>
              <div className="text-white/35 text-sm leading-relaxed">
                {s.detail}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
