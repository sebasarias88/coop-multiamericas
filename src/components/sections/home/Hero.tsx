"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Calculator } from "lucide-react";
import { hero, site } from "@/content/site";
import { SplitHeading } from "@/components/core/SplitHeading";
import { Magnetic } from "@/components/core/Magnetic";
import { OpenStatus } from "@/components/core/OpenStatus";

const layers = [
  { d: "M0 330 C180 230 300 280 440 200 C580 120 700 240 860 180 C1020 120 1140 210 1440 150 L1440 800 L0 800 Z", fill: "#B9CDB5", speed: 0.15, mouse: 6 },
  { d: "M0 420 C200 340 330 400 520 330 C700 265 860 360 1040 300 C1160 260 1300 290 1440 270 L1440 800 L0 800 Z", fill: "#8DB083", speed: 0.3, mouse: 12 },
  { d: "M0 520 C220 450 420 500 640 450 C860 400 1060 480 1440 420 L1440 800 L0 800 Z", fill: "#5E8A57", speed: 0.5, mouse: 20 },
  { d: "M0 620 C260 570 520 600 760 575 C1000 550 1180 590 1440 570 L1440 800 L0 800 Z", fill: "#3F6B45", speed: 0.7, mouse: 30 },
  { d: "M0 700 C300 660 560 690 820 670 C1080 650 1260 680 1440 670 L1440 800 L0 800 Z", fill: "#173A2C", speed: 0.9, mouse: 40 },
];

function Layer({ layer, progress, mx }: { layer: (typeof layers)[number]; progress: ReturnType<typeof useScroll>["scrollYProgress"]; mx: ReturnType<typeof useSpring> }) {
  const y = useTransform(progress, [0, 1], [0, -layer.speed * 260]);
  const x = useTransform(mx, (v) => v * layer.mouse);
  return (
    <motion.svg style={{ y, x }} viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-[-4%] bottom-0 h-full w-[108%]" aria-hidden>
      <path d={layer.d} fill={layer.fill} />
    </motion.svg>
  );
}

/** Quindío-inspired landscape with parallax mountain layers, drifting fog and a rising sun. */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mouse = useMotionValue(0);
  const mx = useSpring(mouse, { stiffness: 40, damping: 20 });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      onPointerMove={(e) => mouse.set((e.clientX / window.innerWidth - 0.5) * -1)}
      className="relative min-h-[100svh] overflow-hidden pb-[40vh] md:pb-[46vh] bg-[linear-gradient(180deg,#FBF7EF_0%,#F8E6C8_55%,#F3D3A4_100%)]"
    >
      <motion.div style={{ y: sunY }} aria-hidden className="absolute right-[10%] top-[38%] hidden h-40 w-40 md:block rounded-full bg-sun opacity-80 blur-[2px] md:h-56 md:w-56" />
      <div aria-hidden className="animate-drift absolute left-[-10%] top-[45%] h-24 w-[70%] rounded-full bg-white/70 blur-3xl" />

      <div className="absolute inset-x-0 bottom-0 h-[42%] md:h-[48%]">
        {layers.map((l, i) => (
          <Layer key={i} layer={l} progress={scrollYProgress} mx={mx} />
        ))}
        <div aria-hidden className="animate-drift absolute bottom-[28%] left-[20%] h-16 w-[60%] rounded-full bg-white/50 blur-2xl [animation-duration:24s]" />
      </div>

      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 mx-auto max-w-[1320px] px-6 pt-32 md:px-10 md:pt-40">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-sand">
            {hero.badge} · desde {site.foundedYear}
          </span>
          <OpenStatus />
        </div>
        <SplitHeading
          as="h1"
          immediate
          lines={[hero.title]}
          className="mt-8 max-w-5xl font-display text-[13vw] font-extrabold leading-[0.95] tracking-[-0.04em] text-forest sm:text-7xl lg:text-8xl xl:text-[6.6rem]"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-bark md:text-xl"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Magnetic>
            <Link href="/asociarme" className="group inline-flex items-center gap-2 rounded-full bg-petal px-7 py-4 font-bold text-white shadow-[0_20px_40px_-15px_rgba(179,50,31,0.6)] transition-transform hover:scale-[1.03]">
              Quiero asociarme <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Magnetic>
          <Link href="/simulador" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-7 py-4 font-bold text-forest backdrop-blur transition-colors hover:bg-white">
            <Calculator className="h-5 w-5" /> Simular mi crédito
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
