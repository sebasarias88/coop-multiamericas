"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { membership } from "@/content/site";
import { cn } from "@/lib/cn";

const tabs = [
  { key: "natural", label: "Personas naturales" },
  { key: "legal", label: "Personas jurídicas" },
  { key: "rights", label: "Derechos" },
  { key: "duties", label: "Deberes" },
] as const;

/** Membership requirements, rights and duties in animated tabs. */
export function MembershipTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("natural");
  const items = membership[tab];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Información para asociarse">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={cn("relative shrink-0 rounded-full px-5 py-3 font-bold transition-colors", tab === t.key ? "text-white" : "bg-white text-bark hover:text-forest")}
          >
            {tab === t.key && <motion.span layoutId="member-tab" className="absolute inset-0 rounded-full bg-forest" />}
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ol
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mt-8 grid gap-3 md:grid-cols-2"
        >
          {items.map((it, i) => (
            <motion.li
              key={it}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-4 rounded-3xl bg-white p-6"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf"><Check className="h-4 w-4" /></span>
              <span className="pt-1.5 text-forest">{it}</span>
            </motion.li>
          ))}
        </motion.ol>
      </AnimatePresence>
      {tab === "rights" && <p className="mt-6 text-sm text-stone">{membership.rightsNote}</p>}
    </div>
  );
}
