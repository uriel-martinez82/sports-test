import type { Metadata } from "next";
import { Geist, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
