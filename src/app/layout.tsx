import type { Metadata } from "next";
import { Geist, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sport Solutions | Equipamiento Profesional para Gimnasios",
  description:
    "Diseñamos, equipamos e instalamos espacios fitness profesionales en México. Más de 15 años de experiencia con marcas líderes: Stages, Freemotion, Unofit y Pavigym.",
  keywords:
    "equipamiento gimnasio, gym comercial, indoor cycling, equipo fitness profesional, México",
  openGraph: {
    title: "Sport Solutions | Equipamiento Profesional para Gimnasios",
    description:
      "Diseñamos, equipamos e instalamos espacios fitness profesionales en México.",
    url: "https://sportsolutions.com.mx",
    siteName: "Sport Solutions",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${barlow.variable} ${barlowCondensed.variable} h-full`}>
      <head>
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGLSSV4');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white antialiased overflow-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGLSSV4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="zoho-crm-tracking"
          src="https://crm.zoho.com/crm/javascript/zcga.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
