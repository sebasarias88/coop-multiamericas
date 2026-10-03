import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/home/Hero";
import { QuickServices, PrinciplesStack, ValuesRow, Eyebrow, Title } from "@/components/sections/Blocks";
import { Simulator } from "@/components/sections/Simulator";
import { MembershipCta } from "@/components/sections/MembershipCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";
import { Counter } from "@/components/core/Counter";
import { ScrubText } from "@/components/core/ScrubText";
import { Marquee } from "@/components/core/Marquee";
import { about, hero, portfolio, site } from "@/content/site";

export default function HomePage() {
  const years = new Date().getFullYear() - site.foundedYear;
  return (
    <>
      <Hero />

      <section className="theme-dark bg-forest">
        <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
          <ScrubText text={hero.message} className="max-w-5xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-sand md:text-6xl" />
          <RevealGroup className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-4">
            {[
              { n: years, s: "", l: "años de historia cooperativa" },
              { n: 3, s: "", l: "líneas de crédito para ti y tu familia" },
              { n: 60, s: "", l: "meses de plazo en libre inversión" },
              { n: 7, s: "", l: "principios cooperativos" },
            ].map((x) => (
              <RevealItem key={x.l} className="bg-forest p-6 md:p-10">
                <Counter to={x.n} suffix={x.s} className="font-display text-5xl font-extrabold text-sun md:text-7xl" />
                <p className="mt-2 text-sm text-sage">{x.l}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Conoce y utiliza nuestros servicios</Eyebrow>
            <Title lines={["Todo lo que necesitas,", { text: "en un solo lugar.", className: "text-petal" }]} />
          </div>
          <Reveal>
            <Link href="/servicios" className="group inline-flex items-center gap-2 font-bold text-petal">
              Ver portafolio completo <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
        <QuickServices />
      </section>

      <div className="border-y border-clay bg-cream py-6">
        <Marquee speed={38}>
          {portfolio.insurance.map((s) => (
            <span key={s} className="mx-6 inline-flex items-center gap-6 font-display text-2xl font-bold text-forest md:text-4xl">
              {s}
              <span className="h-3 w-3 rounded-full bg-sun" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>

      <section className="mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>Simulador</Eyebrow>
            <Title lines={["Planea tu crédito", { text: "o tu ahorro.", className: "text-petal" }]} />
          </div>
          <Reveal><p className="text-lg text-bark">Calcula en segundos tu cuota mensual o cuánto recibirías con tu aporte contractual.</p></Reveal>
        </div>
        <Reveal><Simulator /></Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-20 md:px-10">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>Principios cooperativos</Eyebrow>
          <Title lines={["Lo que nos", { text: "hace cooperativa.", className: "text-petal" }]} />
        </div>
        <PrinciplesStack />
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <Eyebrow>Valores corporativos</Eyebrow>
        <ValuesRow />
        <Reveal>
          <p className="mt-10 max-w-3xl text-lg text-bark">{about.intro}</p>
        </Reveal>
      </section>

      <MembershipCta />
    </>
  );
}
