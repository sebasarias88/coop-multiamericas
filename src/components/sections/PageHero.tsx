"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SplitHeading } from "@/components/core/SplitHeading";
import { Flower } from "@/components/layout/Logo";

type Line = string | { text: string; className?: string };

/** Inner-page hero: bold black type, red accent and a framed photo on a tilted red card. */
export function PageHero({ label, lines, intro, image }: { label: string; lines: Line[]; intro?: string; image?: StaticImageData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pb-20 pt-36 md:pb-24 md:pt-40 lg:flex lg:min-h-[min(100svh,880px)] lg:items-center lg:pb-14 lg:pt-28">
      <div aria-hidden className="dots absolute right-0 top-0 h-full w-1/2 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p className="intro-fade mb-6 inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1.5 text-sm font-semibold text-brand" style={{ "--d": "0ms" } as CSSProperties}
          >
            <Flower className="h-4 w-4" /> {label}
          </motion.p>
          <SplitHeading
            as="h1"
            immediate
            lines={lines}
            className="max-w-4xl font-display text-[12.5vw] font-black leading-[0.92] tracking-[-0.05em] text-ink md:text-7xl lg:text-[clamp(3.6rem,9.5svh,5.4rem)]"
          />
          {intro && (
            <motion.p className="intro-fade mt-8 max-w-2xl text-lg leading-relaxed text-graphite md:text-xl" style={{ "--d": "500ms" } as CSSProperties}
            >
              {intro}
            </motion.p>
          )}
        </div>
        {image ? (
          <motion.div style={{ y: imgY }} className="relative hidden aspect-[4/5] h-[min(62svh,560px)] justify-self-center lg:block">
            <motion.div
              aria-hidden
              initial={{ rotate: -12, opacity: 0 }}
              animate={{ rotate: 5, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-[40px] bg-brand"
            />
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0% round 40px)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 40px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="relative h-full overflow-hidden rounded-[40px]"
            >
              <Image src={image} alt="" fill placeholder="blur" sizes="460px" className="object-cover" />
            </motion.div>
          </motion.div>
        ) : (
          <div aria-hidden className="relative hidden justify-center lg:flex">
            <Flower className="spin-slow h-72 w-72 opacity-90" />
          </div>
        )}
      </div>
    </section>
  );
}
