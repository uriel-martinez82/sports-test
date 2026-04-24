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


export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-footer.png" alt="Sport Solutions" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-8">
              Diseñamos, equipamos e instalamos espacios fitness profesionales
              en toda la República Mexicana.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/sport_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/sportsolutionsmexico/?originalSubdomain=mx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UC-mz1P_sH8kWqgQzsFOMndw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-white transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9"/></svg>
              </a>
              <a href="https://www.facebook.com/sportsolutionsmx/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-white font-black text-sm uppercase tracking-widest mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-white/70 text-sm font-medium hover:text-white transition-colors"
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
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Sport Solutions México. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs">
            contacto@sportsolutions.com.mx
          </p>
        </div>
      </div>
    </footer>
  );
}
