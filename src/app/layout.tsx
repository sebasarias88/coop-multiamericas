import type { Metadata, Viewport } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource-variable/onest";
import "./globals.css";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/core/SmoothScroll";
import { Cursor } from "@/components/core/Cursor";
import { ScrollProgress } from "@/components/core/ScrollProgress";
import { WhatsAppButton } from "@/components/core/WhatsAppButton";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Cooperativa de aporte y crédito en Bogotá`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: ["cooperativa", "aporte y crédito", "crédito de libre inversión", "crédito educativo", "ahorro", "Bogotá", "Multiamericas"],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Juntos construimos un futuro próspero y solidario`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#e3262e" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  alternateName: "MULTIAMERICAS",
  url: site.url,
  telephone: site.phone,
  email: site.emails.service,
  foundingDate: String(site.foundedYear),
  address: { "@type": "PostalAddress", addressLocality: site.address.city, addressCountry: "CO" },
};

const introScript = `(function(){try{var d=document.documentElement;var m=function(q){return window.matchMedia(q).matches};if(m("(max-width: 767px)")||m("(prefers-reduced-motion: reduce)")||sessionStorage.getItem("coop-intro")==="1"){d.dataset.intro="done"}}catch(e){document.documentElement.dataset.intro="done"}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" suppressHydrationWarning>
      <head>
        {/* Decides before first paint whether the intro plays, so hero text can animate with CSS alone. */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-screen bg-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
          Saltar al contenido
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <Preloader />
        <ScrollProgress />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton phone={site.whatsapp} message="Hola, quiero información sobre la cooperativa." teaser="¿Quieres asociarte? Te asesoramos por WhatsApp." />
      </body>
    </html>
  );
}
