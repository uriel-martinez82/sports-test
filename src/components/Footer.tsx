import Link from "next/link";

const cols = [
  {
    heading: "Soluciones",
    links: [
      { label: "Indoor Cycling",            href: "#" },
      { label: "Condominios",               href: "#" },
      { label: "Desarrollos Inmobiliarios", href: "#" },
      { label: "Hoteles",                   href: "#" },
      { label: "Empresas",                  href: "#" },
      { label: "Universidades",             href: "#" },
    ],
  },
  {
    heading: "Marcas",
    links: [
      { label: "Stages",     href: "#" },
      { label: "Freemotion", href: "#" },
      { label: "Unofit",     href: "#" },
      { label: "Pavigym",    href: "#" },
      { label: "Impulse",    href: "#" },
      { label: "Xebex",      href: "#" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Nosotros",   href: "#" },
      { label: "Servicios",  href: "#servicios" },
      { label: "Blog",       href: "#" },
      { label: "Contacto",   href: "#contacto" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn",  href: "#" },
  { label: "Facebook",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-[#CC1C1C] flex items-center justify-center">
                <span className="text-white font-black text-[11px]">SS</span>
              </div>
              <span className="text-white font-bold text-base tracking-tight">Sport Solutions</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Diseñamos, equipamos e instalamos espacios fitness profesionales
              en toda la República Mexicana.
            </p>
            <div className="flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-white/40 text-xs hover:text-white transition-colors uppercase tracking-widest"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-white/40 text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Sport Solutions México. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            contacto@sportsolutions.com.mx
          </p>
        </div>
      </div>
    </footer>
  );
}
