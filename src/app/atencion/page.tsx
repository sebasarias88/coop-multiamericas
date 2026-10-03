import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { service, site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/sections/Blocks";
import { ContactForm } from "@/components/core/ContactForm";
import { OpenStatus } from "@/components/core/OpenStatus";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Servicio al cliente",
  description: "Línea confiable MULTIAMERICAS, horarios de atención y agencia en Armenia, Quindío.",
  alternates: { canonical: "/atencion" },
};

export default function ServicePage() {
  return (
    <>
      <PageHero label="Servicio al cliente" lines={["Estamos para", { text: "atenderte.", className: "text-petal" }]} intro={service.intro} />
      <section className="mx-auto grid max-w-[1320px] gap-8 px-6 py-24 md:px-10 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="space-y-4">
          <Reveal className="theme-dark rounded-[32px] bg-forest p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-2 font-bold text-sun"><Clock className="h-5 w-5" /> Horario de atención</p>
              <OpenStatus />
            </div>
            <ul className="mt-6 space-y-2 font-display text-xl font-bold text-sand md:text-2xl">
              {site.hoursText.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <a href={site.phoneHref} className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-5 transition-colors hover:bg-white/15">
              <Phone className="h-6 w-6 text-sun" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-sage">Línea confiable MULTIAMERICAS</span>
                <span className="font-display text-2xl font-extrabold text-sand">{site.phone}</span>
              </span>
            </a>
          </Reveal>
          <Reveal className="grid gap-3 sm:grid-cols-2">
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-white p-6 hover:shadow-lg">
              <MapPin className="h-6 w-6 text-petal" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-stone">Agencia Armenia</p>
              <p className="mt-1 font-semibold text-forest">{site.address.street}</p>
            </a>
            <a href={`mailto:${site.emails.service}`} className="rounded-3xl bg-white p-6 hover:shadow-lg">
              <Mail className="h-6 w-6 text-petal" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-stone">Correo</p>
              <p className="mt-1 break-all font-semibold text-forest">{site.emails.service}</p>
            </a>
          </Reveal>
          <div className="rounded-[32px] bg-cream p-8">
            <Eyebrow>Te informamos sobre</Eyebrow>
            <RevealGroup className="flex flex-wrap gap-2">
              {service.topics.map((t) => (
                <RevealItem key={t} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest">{t}</RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
        <Reveal delay={0.1} className="rounded-[32px] bg-white p-7 md:p-12">
          <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight text-forest md:text-4xl">Escríbenos</h2>
          <ContactForm whatsapp={site.whatsapp} />
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10">
        <Reveal className="h-[420px] overflow-hidden rounded-[32px] border border-clay">
          <iframe
            title="Mapa de la agencia en Armenia"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&z=16&output=embed`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
