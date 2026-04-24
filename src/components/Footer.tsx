import Link from "next/link";
import { Linkedin, Instagram, Youtube, Facebook } from "lucide-react";

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
  { icon: Linkedin,  href: "https://www.linkedin.com/company/sportsolutionsmexico/?originalSubdomain=mx", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sport_solutions/", label: "Instagram" },
  { icon: Youtube,   href: "https://www.youtube.com/channel/UC-mz1P_sH8kWqgQzsFOMndw", label: "YouTube" },
  { icon: Facebook,  href: "https://www.facebook.com/sportsolutionsmx/", label: "Facebook" },
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
            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/50 hover:text-white transition-colors duration-150"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
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
