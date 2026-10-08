"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Calculator, PiggyBank, ShieldCheck, Sparkles } from "lucide-react";
import { entryContribution, hero, site } from "@/content/site";
import { teamCelebration } from "@/assets/images";
import { SplitHeading } from "@/components/core/SplitHeading";
import { Magnetic } from "@/components/core/Magnetic";
import { Marquee } from "@/components/core/Marquee";
import { Flower } from "@/components/layout/Logo";

const ticker = ["Aporte contractual", "Crédito de libre inversión", "Crédito educativo", "Crédito solidario", "Seguros", "Bienestar social", "Exento del 4×1000"];
const cop = (v: number) => v.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

/** Neobank-style hero: bold type, framed people photo and floating app cards. */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const years = new Date().getFullYear() - site.foundedYear;
  const fee = entryContribution;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const c1x = useSpring(useTransform(mx, [-1, 1], [-22, 22]), { stiffness: 60, damping: 18 });
  const c1y = useSpring(useTransform(my, [-1, 1], [-16, 16]), { stiffness: 60, damping: 18 });
  const c2x = useSpring(useTransform(mx, [-1, 1], [18, -18]), { stiffness: 60, damping: 18 });
  const c2y = useSpring(useTransform(my, [-1, 1], [12, -12]), { stiffness: 60, damping: 18 });

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
      className="relative overflow-hidden bg-white pt-28 md:pt-32"
    >
      <div aria-hidden className="dots absolute right-0 top-0 h-[60%] w-1/2 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-6 pb-16 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
        <motion.div style={{ y: textY }}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blush px-3 py-1.5 text-sm font-semibold text-brand-deep">
              <Sparkles className="h-3.5 w-3.5" /> {hero.badge}
            </span>
          </div>
          <SplitHeading
            as="h1"
            immediate
            lines={["Juntos construimos", "un futuro", { text: "próspero y solidario.", className: "text-brand" }]}
            className="mt-8 font-display text-[12.5vw] font-black leading-[0.92] tracking-[-0.05em] text-ink sm:text-7xl lg:text-[4.3rem] xl:text-[4.9rem]"
          />
          <motion.p className="intro-fade mt-7 max-w-xl text-lg leading-relaxed text-graphite" style={{ "--d": "600ms" } as CSSProperties}
          >
            {site.tagline}
          </motion.p>
          <motion.div className="intro-fade mt-9 flex flex-wrap gap-3" style={{ "--d": "750ms" } as CSSProperties}
          >
            <Magnetic>
              <Link href="/asociarme" className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-[0_18px_40px_-14px_rgba(227,38,46,0.7)] transition-transform hover:scale-[1.03]">
                Quiero asociarme <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Magnetic>
            <Link href="/simulador" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-[14px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white">
              <Calculator className="h-5 w-5" /> Simular mi crédito
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6"
          >
            <li>
              <p className="font-display text-3xl font-black tracking-tight text-ink">{years}</p>
              <p className="text-sm text-smoke">años de historia</p>
            </li>
            <li>
              <p className="font-display text-3xl font-black tracking-tight text-ink">4×1000</p>
              <p className="text-sm text-smoke">exento en aportes</p>
            </li>
            <li>
              <p className="font-display text-3xl font-black tracking-tight text-ink">60</p>
              <p className="text-sm text-smoke">meses de plazo</p>
            </li>
          </motion.ul>
        </motion.div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[500px]">
          <motion.div
            initial={{ rotate: -14, scale: 0.8, opacity: 0 }}
            animate={{ rotate: -6, scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
            className="absolute inset-0 translate-x-6 translate-y-6 rounded-[44px] bg-brand"
          />
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0% round 44px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 44px)" }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[5/6] overflow-hidden rounded-[44px]"
          >
            <motion.div style={{ y: photoY }} className="absolute inset-[-8%_0]">
              <Image src={teamCelebration} alt="Asociados celebrando un logro en la oficina" fill preload placeholder="blur" sizes="(min-width:1024px) 540px, 100vw" className="object-cover object-[40%_50%]" />
            </motion.div>
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          <motion.div style={{ y: cardsY }} className="pointer-events-none absolute inset-0">
            <motion.div
              style={{ x: c1x, y: c1y }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="shadow-app absolute -left-4 top-10 w-56 rounded-3xl bg-white p-4 sm:-left-14"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-smoke">Cuota estimada</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-blush text-brand-deep"><Calculator className="h-3.5 w-3.5" /></span>
              </div>
              <p className="mt-2 font-display text-2xl font-black tracking-tight text-ink">Simúlala</p>
              <div className="mt-3 flex h-10 items-end gap-1" aria-hidden>
                {[40, 55, 35, 70, 50, 85, 65, 95].map((h, i) => (
                  <motion.span key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.3 + i * 0.06 }} className="flex-1 origin-bottom rounded-sm bg-brand/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ x: c2x, y: c2y }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="shadow-app absolute -right-2 bottom-24 w-60 rounded-3xl bg-ink p-4 text-white sm:-right-10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-sun"><PiggyBank className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs text-silver">Aporte social de ingreso</p>
                  <p className="font-display text-xl font-black">{cop(fee)}</p>
                </div>
              </div>
              <p className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-xs text-silver">Pago único al ingresar</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="shadow-app absolute -bottom-5 left-8 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-leaf/15 text-leaf"><ShieldCheck className="h-4 w-4" /></span>
              <span className="text-sm font-semibold text-ink">Seguro de vida incluido</span>
            </motion.div>

            <div className="absolute -right-6 -top-6 hidden sm:block">
              <Flower className="spin-slow h-20 w-20 drop-shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative -rotate-1 bg-brand py-5">
        <Marquee speed={36}>
          {ticker.map((t) => (
            <span key={t} className="mx-6 inline-flex items-center gap-6 font-display text-2xl font-black tracking-tight text-white md:text-3xl">
              {t}
              <Flower className="h-6 w-6 [&_circle]:fill-brand [&_ellipse]:fill-white" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="h-6 bg-white" />
    </section>
  );
}
