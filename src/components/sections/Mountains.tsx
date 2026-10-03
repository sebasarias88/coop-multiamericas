import { cn } from "@/lib/cn";

/** Reusable mountain silhouettes inspired by the Quindío coffee landscape. */
export function Mountains({ variant = "divider", className }: { variant?: "divider" | "footer"; className?: string }) {
  if (variant === "footer") {
    return (
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className={cn(className)} aria-hidden>
        <path d="M0 0h1440v60c-120 30-260 70-420 40S760 20 600 50 300 120 160 90 40 40 0 60Z" fill="#FBF7EF" />
        <path d="M0 60c40-20 100-10 160 30s200 30 300 0 220-70 340-50 260 70 400 60 200-40 240-30v10c-60 0-140 30-240 30s-240-50-400-40-220 60-340 50S260 90 160 100 40 60 0 80Z" fill="#B9CDB5" opacity="0.25" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={cn(className)} aria-hidden>
      <path d="M0 120V70c160-40 300-60 470-30s300 60 470 20 330-70 500-30v90Z" fill="currentColor" />
    </svg>
  );
}
