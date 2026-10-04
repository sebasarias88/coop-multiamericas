import type { Metadata } from "next";
import { teamTable } from "@/assets/images";
import { HeartHandshake, ShieldCheck } from "lucide-react";
import { membership } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow, Title } from "@/components/sections/Blocks";
import { MembershipTabs } from "@/components/sections/MembershipTabs";
import { MembershipCta } from "@/components/sections/MembershipCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Cómo asociarme",
  description: "Requisitos de admisión, derechos, deberes y beneficios de los asociados de la Cooperativa Las Américas.",
  alternates: { canonical: "/asociarme" },
};

export default function JoinPage() {
  return (
    <>
      <PageHero image={teamTable} label="Cómo asociarme" lines={["Hazte parte de", { text: "la cooperativa.", className: "text-brand" }]} intro={membership.definition} />
      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-32">
        <Eyebrow>Requisitos, derechos y deberes</Eyebrow>
        <Title className="mb-12" lines={["Todo claro", { text: "desde el inicio.", className: "text-brand" }]} />
        <MembershipTabs />
      </section>

      <section id="beneficios" className="theme-dark scroll-mt-28 bg-ink">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
          <Eyebrow className="text-brand-soft">Beneficios</Eyebrow>
          <h2 className="mb-14 font-display text-4xl font-black tracking-[-0.03em] text-snow md:text-6xl">Más que ahorro y crédito.</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-5 flex items-center gap-2 font-bold text-brand-soft"><ShieldCheck className="h-5 w-5" /> Generales</p>
              <RevealGroup className="space-y-4">
                {membership.benefits.general.map((b) => (
                  <RevealItem key={b.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                    <h3 className="font-display text-2xl font-bold text-snow">{b.title}</h3>
                    <p className="mt-2 text-silver">{b.text}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
            <div>
              <p className="mb-5 flex items-center gap-2 font-bold text-brand-soft"><HeartHandshake className="h-5 w-5" /> Sociales</p>
              <RevealGroup className="space-y-4">
                {membership.benefits.social.map((b) => (
                  <RevealItem key={b.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                    <h3 className="font-display text-2xl font-bold text-snow">{b.title}</h3>
                    <p className="mt-2 text-silver">{b.text}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>
      <div className="h-28" />
      <Reveal><MembershipCta /></Reveal>
    </>
  );
}
