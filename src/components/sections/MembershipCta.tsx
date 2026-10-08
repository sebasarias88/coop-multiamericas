import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { entryContribution } from "@/content/site";
import { Reveal } from "@/components/core/Reveal";

export function MembershipCta() {
  const fee = entryContribution.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
  return (
    <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] bg-ink p-8 text-white md:p-16">
          <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand opacity-40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Asóciate</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.03em] md:text-6xl">
                Empieza con tu aporte social y disfruta todos los beneficios.
              </h2>
            </div>
            <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur md:p-8">
              <p className="text-sm font-semibold text-white/80">Aporte social de ingreso</p>
              <p className="mt-1 font-display text-5xl font-black">{fee}</p>
              <p className="mt-2 text-sm text-white/70">Pago único al ingresar. La cuota de admisión la reglamenta el Consejo de Administración.</p>
              <Link href="/asociarme" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-brand transition-transform hover:scale-[1.03]">
                Ver requisitos <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
