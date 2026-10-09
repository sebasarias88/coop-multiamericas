import type { Metadata } from "next";
import { advisoryMeeting } from "@/assets/images";
import { Headphones, Mail, MapPin, Phone } from "lucide-react";
import { service, site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/sections/Blocks";
import { ContactForm } from "@/components/core/ContactForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Servicio al cliente",
  description: "Línea confiable MULTIAMERICAS, correo y canales de atención de la cooperativa en Bogotá.",
  alternates: { canonical: "/atencion" },
};

export default function ServicePage() {
  return (
    <>
      <PageHero image={advisoryMeeting} label="Servicio al cliente" lines={["Estamos para", { text: "atenderte.", className: "text-brand" }]} intro={service.intro} />
      <section className="mx-auto grid max-w-[1320px] gap-8 px-6 pb-28 pt-24 md:px-10 md:pb-36 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="space-y-4">
          <Reveal className="theme-dark rounded-[32px] bg-ink p-8 md:p-10">
            <p className="flex items-center gap-2 font-bold text-brand-soft"><Headphones className="h-5 w-5" /> Canales de atención</p>
            <p className="mt-6 font-display text-2xl font-bold leading-tight text-snow md:text-3xl">
              Llámanos, escríbenos por WhatsApp o déjanos tu mensaje: un asesor te responde.
            </p>
            <a href={site.phoneHref} className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-5 transition-colors hover:bg-white/15">
              <Phone className="h-6 w-6 text-brand-soft" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-silver">Línea confiable MULTIAMERICAS</span>
                <span className="font-display text-2xl font-black text-snow">{site.phone}</span>
              </span>
            </a>
          </Reveal>
          <Reveal className="grid gap-3">
            <div className="rounded-3xl border border-line bg-white p-6">
              <MapPin className="h-6 w-6 text-brand" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-smoke">Ubicación</p>
              <p className="mt-1 font-semibold text-ink">{site.address.city}, {site.address.country}</p>
            </div>
            <a href={`mailto:${site.emails.service}`} className="rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-lg">
              <Mail className="h-6 w-6 text-brand" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-smoke">Correo</p>
              <p className="mt-1 break-all font-semibold text-ink">{site.emails.service}</p>
            </a>
          </Reveal>
          <div className="rounded-[32px] bg-paper p-8">
            <Eyebrow>Te informamos sobre</Eyebrow>
            <RevealGroup className="flex flex-wrap gap-2">
              {service.topics.map((t) => (
                <RevealItem key={t} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">{t}</RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
        <Reveal delay={0.1} className="shadow-app rounded-[32px] border border-line bg-white p-7 md:p-12">
          <h2 className="mb-8 font-display text-3xl font-black tracking-tight text-ink md:text-4xl">Escríbenos</h2>
          <ContactForm whatsapp={site.whatsapp} />
        </Reveal>
      </section>
    </>
  );
}
