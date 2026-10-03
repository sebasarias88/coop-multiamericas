import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow, Title } from "@/components/sections/Blocks";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";
import { TiltCard } from "@/components/core/TiltCard";

export const metadata: Metadata = {
  title: "Portafolio de servicios",
  description: "Aporte contractual exento del 4×1000, crédito de libre inversión, educativo y solidario, y seguros con Consorcio en Seguros Ltda.",
  alternates: { canonical: "/servicios" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Portafolio de servicios" lines={["Diseñado para ti", { text: "y tu familia.", className: "text-petal" }]} intro={portfolio.intro} />

      <section id="aportes" className="mx-auto max-w-[1320px] scroll-mt-28 px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Aportes</Eyebrow>
            <Title lines={[portfolio.contribution.title]} />
            <Reveal><p className="mt-6 text-lg leading-relaxed text-bark">{portfolio.contribution.text}</p></Reveal>
          </div>
          <RevealGroup className="grid gap-3">
            {portfolio.contribution.benefits.map((b) => (
              <RevealItem key={b} className="flex items-start gap-4 rounded-3xl bg-white p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf"><Check className="h-5 w-5" /></span>
                <span className="pt-2 font-semibold text-forest">{b}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="creditos" className="theme-dark scroll-mt-28 bg-forest">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
          <Eyebrow className="text-sun">Créditos</Eyebrow>
          <h2 className="mb-14 font-display text-4xl font-extrabold tracking-[-0.03em] text-sand md:text-6xl">Tres líneas, un mismo compromiso.</h2>
          <RevealGroup className="grid gap-5 lg:grid-cols-3">
            {portfolio.credits.map((c, i) => (
              <RevealItem key={c.key} className="group">
                <TiltCard max={5} className="h-full rounded-[32px]">
                  <article className="flex h-full flex-col rounded-[32px] border border-white/10 bg-white/5 p-8">
                    <span className="font-display text-sm font-bold text-sun">0{i + 1}</span>
                    <h3 className="mt-6 font-display text-3xl font-extrabold text-sand">{c.title}</h3>
                    <p className="mt-4 leading-relaxed text-sage">{c.text}</p>
                    <dl className="mt-auto grid grid-cols-2 gap-3 pt-8">
                      <div className="rounded-2xl bg-white/10 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-sage">Monto</dt><dd className="mt-1 font-bold text-sand">{c.amount}</dd></div>
                      <div className="rounded-2xl bg-white/10 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-sage">Plazo</dt><dd className="mt-1 font-bold text-sand">{c.term}</dd></div>
                    </dl>
                  </article>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <Link href="/simulador" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-bold text-forest">
              Simular mi crédito <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <Eyebrow>Crédito educativo</Eyebrow>
        <Title className="mb-12" lines={["Requisitos y", { text: "documentos.", className: "text-petal" }]} />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <RevealGroup className="space-y-3">
            {portfolio.educationRequirements.map((r) => (
              <RevealItem key={r} className="rounded-3xl bg-white p-6 text-forest">{r}</RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="overflow-x-auto rounded-[28px] border border-clay bg-white">
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="bg-cream text-sm uppercase tracking-wider text-stone">
                  <th className="px-6 py-4 font-bold">Documento</th>
                  <th className="px-6 py-4 text-center font-bold">Solicitante</th>
                  <th className="px-6 py-4 text-center font-bold">Codeudor(es)</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.educationDocs.map((d) => (
                  <tr key={d.doc} className="border-t border-clay">
                    <td className="px-6 py-4 font-semibold text-forest">{d.doc}</td>
                    <td className="px-6 py-4 text-center">{d.applicant ? <Check className="mx-auto h-5 w-5 text-leaf" aria-label="Sí" /> : <span className="text-stone">—</span>}</td>
                    <td className="px-6 py-4 text-center">{d.cosigner ? <Check className="mx-auto h-5 w-5 text-leaf" aria-label="Sí" /> : <span className="text-stone">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <Reveal>
          <div className="rounded-[40px] bg-sun p-8 md:p-14">
            <div className="flex items-center gap-3 text-forest">
              <ShieldCheck className="h-7 w-7" />
              <p className="font-bold uppercase tracking-[0.16em]">Consorcio en Seguros Ltda.</p>
            </div>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.03em] text-forest md:text-6xl">Protege lo que más quieres.</h2>
            <ul className="mt-10 flex flex-wrap gap-3">
              {portfolio.insurance.map((s) => (
                <li key={s} className="rounded-full bg-white/70 px-5 py-3 font-semibold text-forest">{s}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
