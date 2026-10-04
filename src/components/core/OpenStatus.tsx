"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Status = { open: boolean; label: string };

const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const fmt = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h < 12 ? "a. m." : h === 12 ? "m." : "p. m.";
  const h12 = h > 12 ? h - 12 : h;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
};

/** Computes open/closed status in Colombia's timezone from site.hours. */
export function getStatus(now = new Date()): Status {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Bogota", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(now);
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.find((p) => p.type === "weekday")!.value);
  const minutes = Number(parts.find((p) => p.type === "hour")!.value) % 24 * 60 + Number(parts.find((p) => p.type === "minute")!.value);

  const today = site.hours.filter((h) => (h.days as readonly number[]).includes(wd));
  const current = today.find((h) => minutes >= toMin(h.open) && minutes < toMin(h.close));
  if (current) return { open: true, label: `Abierto ahora · hasta las ${fmt(current.close)}` };

  const laterToday = today.find((h) => toMin(h.open) > minutes);
  if (laterToday) return { open: false, label: `Cerrado · abrimos hoy a las ${fmt(laterToday.open)}` };

  for (let i = 1; i <= 7; i++) {
    const d = (wd + i) % 7;
    const next = site.hours.find((h) => (h.days as readonly number[]).includes(d));
    if (next) return { open: false, label: `Cerrado · abrimos el ${i === 1 ? "mañana" : DAY_NAMES[d]} a las ${fmt(next.open)}` };
  }
  return { open: false, label: "Cerrado" };
}

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
};
let cache: { key: number; value: Status } | null = null;
const snapshot = () => {
  const key = Math.floor(Date.now() / 60_000);
  if (!cache || cache.key !== key) cache = { key, value: getStatus() };
  return cache.value;
};

/** Live "open now" badge based on Colombian time. */
export function OpenStatus({ className }: { className?: string }) {
  const status = useSyncExternalStore(subscribe, snapshot, () => null);
  if (!status) return <span className={cn("inline-flex h-9 w-56 rounded-full bg-paper", className)} aria-hidden />;
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink backdrop-blur", className)} role="status">
      <span className="relative flex h-2.5 w-2.5">
        {status.open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />}
        <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", status.open ? "bg-leaf" : "bg-brand")} />
      </span>
      {status.label}
    </span>
  );
}
