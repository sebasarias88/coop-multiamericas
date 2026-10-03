"use client";

import { motion } from "motion/react";
import { SplitHeading } from "@/components/core/SplitHeading";
import { Flower } from "@/components/layout/Logo";

type Line = string | { text: string; className?: string };

/** Inner page hero: warm background, giant rotating flower and split heading. */
export function PageHero({ label, lines, intro }: { label: string; lines: Line[]; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FBF7EF_0%,#F6E3C4_100%)] pb-24 pt-40 md:pb-32 md:pt-48">
      <div aria-hidden className="absolute -right-24 top-16 opacity-[0.14] md:-right-10">
        <Flower className="animate-spin-slow h-[420px] w-[420px] md:h-[620px] md:w-[620px]" />
      </div>
      <div className="relative mx-auto max-w-[1320px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-petal"
        >
          <span className="h-2 w-2 rounded-full bg-sun" aria-hidden /> {label}
        </motion.p>
        <SplitHeading
          as="h1"
          immediate
          lines={lines}
          className="max-w-5xl font-display text-[13vw] font-extrabold leading-[0.95] tracking-[-0.04em] text-forest md:text-7xl lg:text-8xl"
        />
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-bark md:text-xl"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
