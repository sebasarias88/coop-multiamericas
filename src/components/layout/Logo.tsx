import { cn } from "@/lib/cn";

/** Three-petal flower inspired by the cooperative's logo (red, yellow, green). */
export function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <ellipse cx="20" cy="12" rx="7.5" ry="10" fill="#B3321F" />
      <ellipse cx="11" cy="26" rx="7.5" ry="10" transform="rotate(-60 11 26)" fill="#F0A92C" />
      <ellipse cx="29" cy="26" rx="7.5" ry="10" transform="rotate(60 29 26)" fill="#5E9C3F" />
      <circle cx="20" cy="22" r="3.2" fill="#FBF7EF" />
    </svg>
  );
}

/**
 * Provisional mark for Cooperativa Las Américas.
 * Replace with the official logo from /public/brand when available.
 */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Flower className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[19px] font-extrabold tracking-tight", tone === "dark" ? "text-forest" : "text-sand")}>Las Américas</span>
        <span className={cn("mt-1 text-[9.5px] font-semibold uppercase tracking-[0.16em]", tone === "dark" ? "text-stone" : "text-sage")}>
          Cooperativa de aporte y crédito
        </span>
      </span>
    </span>
  );
}
