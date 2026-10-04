import type { Metadata } from "next";
import { boardroom } from "@/assets/images";
import { about } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { PrinciplesStack, ValuesRow, Eyebrow, Title } from "@/components/sections/Blocks";
import { RevealGroup, RevealItem } from "@/components/core/Reveal";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Cooperativa Multiactiva de Aporte y Crédito Las Américas: historia, misión, visión, principios y valores.",
  alternates: { canonical: "/quienes-somos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero image={boardroom} label="Quiénes somos" lines={["Una cooperativa hecha", { text: "de personas.", className: "text-brand" }]} intro={about.intro} />
      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <RevealGroup className="grid gap-5 md:grid-cols-2">
          <RevealItem className="theme-dark rounded-[36px] bg-ink p-10 md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-soft">Misión</p>
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-snow md:text-3xl">{about.mission}</p>
          </RevealItem>
          <RevealItem className="rounded-[36px] bg-brand p-10 text-white md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Visión 2028</p>
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-white md:text-3xl">{about.vision}</p>
          </RevealItem>
        </RevealGroup>
      </section>
      <section className="mx-auto max-w-[1320px] px-6 pb-20 md:px-10">
        <Eyebrow>Principios corporativos</Eyebrow>
        <Title className="mb-14" lines={["Siete principios,", { text: "una sola forma de hacer.", className: "text-brand" }]} />
        <PrinciplesStack />
      </section>
      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <Eyebrow>Valores corporativos</Eyebrow>
        <ValuesRow />
      </section>
    </>
  );
}
