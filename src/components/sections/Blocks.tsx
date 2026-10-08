"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, CreditCard, HandHeart, Landmark, MonitorSmartphone, PiggyBank, Rocket } from "lucide-react";
import { about, quickServices } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/core/Reveal";
import { SplitHeading } from "@/components/core/SplitHeading";
import { cn } from "@/lib/cn";

type Line = string | { text: string; className?: string };

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal y={12}>
      <p className={cn("mb-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.16em] text-brand", className)}>
        <span className="h-2 w-6 rounded-full bg-brand" aria-hidden />
        {children}
      </p>
    </Reveal>
  );
}

export function Title({ lines, className }: { lines: Line[]; className?: string }) {
  return <SplitHeading lines={lines} className={cn("font-display text-4xl font-black leading-[0.95] tracking-[-0.045em] text-ink md:text-6xl", className)} />;
}

const icons = { aporte: PiggyBank, credito: CreditCard, portal: MonitorSmartphone, bienestar: HandHeart, pagos: Landmark, negocio: Rocket } as const;

/** App-style service tiles that flood red on hover. */
export function QuickServices() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {quickServices.map((s, i) => {
        const Icon = icons[s.key];
        return (
          <RevealItem key={s.key}>
            <Link
              href={s.href}
              className="group relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-[32px] border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-[0_30px_60px_-30px_rgba(227,38,46,0.5)]"
            >
              <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blush text-brand-deep transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <span className="font-display text-sm font-bold text-silver transition-colors group-hover:text-white/60">0{i + 1}</span>
              </div>
              <div className="relative mt-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.03em] text-ink transition-colors group-hover:text-white md:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-graphite transition-colors group-hover:text-white/85">{s.text}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-brand">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}

/** Seven cooperative principles as cards that stack while scrolling (CSS sticky). */
export function PrinciplesStack() {
  const styles = [
    "bg-brand text-white",
    "bg-ink text-white",
    "bg-paper text-ink",
    "bg-brand-deep text-white",
    "bg-ink-2 text-white",
    "bg-white text-ink border border-line",
    "bg-brand text-white",
  ];
  return (
    <ol className="relative">
      {about.principles.map((p, i) => (
        <li key={p} className="sticky" style={{ top: `${100 + i * 16}px` }}>
          <div className={cn("mb-6 flex min-h-[240px] flex-col gap-6 md:justify-between md:gap-8 rounded-[40px] p-8 shadow-[0_-24px_50px_-30px_rgba(0,0,0,0.45)] md:min-h-[300px] md:flex-row md:items-start md:p-12", styles[i])}>
            <span className="font-display text-8xl font-black leading-none tracking-[-0.06em] opacity-90 md:text-[10rem]">{String(i + 1).padStart(2, "0")}</span>
            <p className="max-w-2xl font-display md:pt-6 text-2xl font-bold leading-snug tracking-[-0.02em] md:text-4xl">{p}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ValuesRow() {
  return (
    <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {about.values.map((v, i) => (
        <RevealItem key={v.title} className="group rounded-[28px] border border-line bg-white p-7 transition-colors duration-500 hover:border-ink hover:bg-ink">
          <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
          <h3 className="mt-8 font-display text-2xl font-black tracking-[-0.03em] text-ink transition-colors group-hover:text-white">{v.title}</h3>
          <p className="mt-2 text-graphite transition-colors group-hover:text-silver">{v.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
