import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Hero } from "@/components/sections/home/Hero";
import { QuickServices, PrinciplesStack, ValuesRow, Eyebrow, Title } from "@/components/sections/Blocks";
import { Simulator } from "@/components/sections/Simulator";
import { MembershipCta } from "@/components/sections/MembershipCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";
import { Counter } from "@/components/core/Counter";
import { ScrubText } from "@/components/core/ScrubText";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { about, hero, portfolio, site } from "@/content/site";
import { boardroom, handshakeContract, tabletReview } from "@/assets/images";

export default function HomePage() {
  const years = new Date().getFullYear() - site.foundedYear;
  return (
    <>
      <Hero />

      {/* Statement */}
      <section className="theme-dark relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow className="text-brand-soft">Gracias por ser parte</Eyebrow>
            <ScrubText text={hero.message} className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-5xl" />
            <RevealGroup className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-[28px] bg-white/10">
              {[
                { n: years, l: "años de historia" },
                { n: 3, l: "líneas de crédito" },
                { n: 7, l: "principios cooperativos" },
              ].map((x) => (
                <RevealItem key={x.l} className="bg-ink p-5 md:p-8">
                  <Counter to={x.n} className="font-display text-5xl font-black tracking-tight text-brand md:text-7xl" />
                  <p className="mt-1 text-sm text-silver">{x.l}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <ParallaxImage src={boardroom} alt="Reunión de asociados" className="aspect-[3/4] rounded-[32px]" sizes="25vw" />
            <ParallaxImage src={tabletReview} alt="Asesoría personalizada" className="mt-16 aspect-[3/4] rounded-[32px]" sizes="25vw" strength={18} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Conoce y utiliza nuestros servicios</Eyebrow>
            <Title lines={["Todo lo que necesitas,", { text: "en un solo lugar.", className: "text-brand" }]} />
          </div>
          <Reveal>
            <Link href="/servicios" className="group inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-white">
              Ver portafolio <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <QuickServices />
      </section>

      {/* Benefits split */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 py-28 md:px-10 md:py-36 lg:grid-cols-2">
          <div className="relative">
            <div aria-hidden className="absolute inset-0 -rotate-3 rounded-[40px] bg-brand" />
            <ParallaxImage src={handshakeContract} alt="Asociado firmando su aporte" className="relative aspect-[5/4] rounded-[40px]" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div>
            <Eyebrow>Aporte contractual</Eyebrow>
            <Title lines={["Ahorra con", { text: "beneficios reales.", className: "text-brand" }]} />
            <Reveal>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">{portfolio.contribution.text.split(".")[0]}.</p>
            </Reveal>
            <RevealGroup className="mt-8 space-y-3">
              {portfolio.contribution.benefits.map((b) => (
                <RevealItem key={b} className="flex items-start gap-4 rounded-2xl bg-white p-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white"><Check className="h-4 w-4" /></span>
                  <span className="pt-1 font-medium text-ink">{b}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>Simulador</Eyebrow>
            <Title lines={["Planea tu crédito", { text: "o tu ahorro.", className: "text-brand" }]} />
          </div>
          <Reveal><p className="text-lg text-graphite">Calcula en segundos tu cuota mensual o cuánto recibirías con tu aporte contractual.</p></Reveal>
        </div>
        <Reveal><Simulator /></Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-20 md:px-10">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>Principios cooperativos</Eyebrow>
          <Title lines={["Lo que nos", { text: "hace cooperativa.", className: "text-brand" }]} />
        </div>
        <PrinciplesStack />
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <Eyebrow>Valores corporativos</Eyebrow>
        <ValuesRow />
        <Reveal>
          <p className="mt-10 max-w-3xl text-lg text-graphite">{about.intro}</p>
        </Reveal>
      </section>

      <MembershipCta />
    </>
  );
}
