import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export default function HomeCTA() {
  return (
    <section className="bg-white py-36 lg:py-52">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="text-5xl lg:text-7xl font-black text-black tracking-tight leading-tight mb-12">
            ¿Listo para equipar
            <br className="hidden sm:block" /> tu espacio?
          </h2>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-black text-white font-bold text-lg px-14 py-6 hover:bg-black/80 transition-colors duration-200 tracking-wide"
          >
            Cotiza tu proyecto
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
