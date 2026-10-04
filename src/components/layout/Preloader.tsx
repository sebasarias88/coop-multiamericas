"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { markIntroDone } from "@/lib/intro";

const petals = [
  { color: "#E3262E", rotate: 0 },
  { color: "#FFC233", rotate: 120 },
  { color: "#1FA463", rotate: 240 },
];

/** Once per session: the three petals of the logo bloom, then the curtain lifts. */
export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("coop-intro") === "1";
      sessionStorage.setItem("coop-intro", "1");
    } catch {}
    // Phones skip the intro entirely so content (LCP) paints immediately.
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (seen || small || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const skip = requestAnimationFrame(() => {
        setVisible(false);
        markIntroDone();
      });
      return () => cancelAnimationFrame(skip);
    }
    window.__lenis?.stop();
    const t = setTimeout(() => {
      setVisible(false);
      window.__lenis?.start();
      markIntroDone();
    }, 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          aria-hidden
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] grid place-items-center bg-ink max-md:hidden"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.svg viewBox="-50 -50 100 100" className="h-32 w-32" animate={{ rotate: 120 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}>
              {petals.map((p, i) => (
                <motion.ellipse
                  key={p.color}
                  cx="0"
                  cy="-20"
                  rx="15"
                  ry="21"
                  fill={p.color}
                  transform={`rotate(${p.rotate})`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.18, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ transformOrigin: "0px 0px" }}
                />
              ))}
              <motion.circle r="7" fill="#FFFFFF" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
            </motion.svg>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="font-display text-2xl font-black text-snow"
            >
              Juntos crecemos.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
