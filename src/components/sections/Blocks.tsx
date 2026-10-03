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
      <p className={cn("mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-petal", className)}>
        <span className="h-2 w-2 rounded-full bg-sun" aria-hidden />
        {children}
      </p>
    </Reveal>
  );
}

export function Title({ lines, className }: { lines: Line[]; className?: string }) {
  return (
    <SplitHeading lines={lines} className={cn("font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-forest md:text-6xl", className)} />
  );
}

const icons = { aporte: PiggyBank, credito: CreditCard, portal: MonitorSmartphone, bienestar: HandHeart, pagos: Landmark, negocio: Rocket } as const;
const tones = ["bg-forest text-sand", "bg-white text-forest", "bg-sun text-forest", "bg-white text-forest", "bg-petal text-white", "bg-cream text-forest"];

export function QuickServices() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {quickServices.map((s, i) => {
        const Icon = icons[s.key];
        return (
          <RevealItem key={s.key}>
            <Link
              href={s.href}
              className={cn(
                "group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[32px] p-8 transition-transform duration-500 hover:-translate-y-1.5",
                tones[i],
              )}
            >
              <span aria-hidden className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-current opacity-[0.07] transition-transform duration-700 group-hover:scale-[1.6]" />
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-current/10">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <div className="mt-10">
                <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{s.title}</h3>
                <p className="mt-1 opacity-80">{s.text}</p>
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
  const colors = ["#173A2C", "#3F6B45", "#5E9C3F", "#F0A92C", "#E0573F", "#B3321F", "#0E2A1F"];
  const dark = [true, true, true, false, true, true, true];
  return (
    <ol className="relative">
      {about.principles.map((p, i) => (
        <li key={p} className="sticky" style={{ top: `${96 + i * 18}px` }}>
          <div
            className="mb-6 flex min-h-[240px] flex-col justify-between gap-10 rounded-[36px] p-8 shadow-[0_-20px_40px_-30px_rgba(0,0,0,0.4)] md:min-h-[280px] md:flex-row md:items-end md:p-12"
            style={{ background: colors[i], color: dark[i] ? "#FBF7EF" : "#173A2C" }}
          >
            <span className="font-display text-7xl font-extrabold leading-none opacity-90 md:text-9xl">{String(i + 1).padStart(2, "0")}</span>
            <p className="max-w-2xl font-display text-2xl font-bold leading-snug md:text-4xl">{p}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ValuesRow() {
  return (
    <RevealGroup className="grid gap-px overflow-hidden rounded-[32px] border border-clay bg-clay sm:grid-cols-2 lg:grid-cols-5">
      {about.values.map((v) => (
        <RevealItem key={v.title} className="group bg-sand p-8 transition-colors duration-500 hover:bg-forest">
          <h3 className="font-display text-2xl font-extrabold text-forest transition-colors group-hover:text-sun">{v.title}</h3>
          <p className="mt-3 text-bark transition-colors group-hover:text-sage">{v.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
