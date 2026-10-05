import Image from "next/image";
import { cn } from "@/lib/cn";

/** The cooperative's official three-petal mark (vector, from the original logo). */
export function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="5.4 3.5 85.4 78.5" fillRule="evenodd" className={className} aria-hidden>
      <path fill="#93181d" d="M47.2 51.1c-4.2.1-7.5-5.6-9.8-11.8a33 33 0 0 1-1.8-19.7c1.8-7 6.7-14.2 11.6-15 5-.6 10 5.2 12.4 12a31 31 0 0 1-.2 21.5c-2.7 6.9-8 12.9-12.2 13" />
      <path fill="#e06280" d="m37.6 14.2 5.5 4.6 5-5.5-6.2-5.5a25 25 0 0 0-4.3 6.4" />
      <path fill="#e06280" d="M58.6 14.2 53 18.8l-5-5.5 6.2-5.5q2.6 2.6 4.3 6.4Zm0 0" />
      <path fill="#fcf888" d="m41.9 7.8 6.2 5.5 6.2-5.5q-3.3-3.5-7-3.1a10 10 0 0 0-5.4 3.1" />
      <path fill="#93181d" d="M48.6 51.5c2.1-3.7 8.7-3.5 15.2-2.2a32 32 0 0 1 17.8 8.6c5 5.1 8.7 13.1 6.7 17.7s-9.5 5.8-16.6 4.4a31 31 0 0 1-18.2-11.4c-4.6-5.8-7-13.4-4.9-17.1" />
      <path fill="#e06280" d="m85.2 62.4-6.8 2.3 2.1 7.1 7.9-2.4q-1-3.5-3.2-7m-10.9 18-1.1-7.2 7.3-1.4 1.5 8.3q-3.6.8-7.7.3m0 0" />
      <path fill="#fcf888" d="m88.4 69.4-7.9 2.4 1.5 8.3q4.7-1 6.3-4.5 1.1-2.7 0-6.2" />
      <path fill="#93181d" d="M47.6 51.5c-2.1-3.7-8.7-3.5-15.2-2.2a33 33 0 0 0-17.8 8.6c-5 5.2-8.7 13.2-6.7 17.8 2 4.5 9.5 5.8 16.6 4.3a31 31 0 0 0 18.2-11.3c4.5-5.9 7-13.5 4.9-17.2" />
      <path fill="#e06280" d="m11 62.4 6.8 2.3-2.1 7.2-7.9-2.5q1-3.5 3.2-7m11 18 1-7.1-7.3-1.4-1.5 8.2q3.5.8 7.7.3Zm0 0" />
      <path fill="#fcf888" d="m7.8 69.4 7.9 2.5-1.5 8.2c-3-.7-5.4-2.2-6.3-4.4q-1.1-2.8-.1-6.3" />
    </svg>
  );
}

/** Official Las Américas logo: compact lockup for light backgrounds, full logo in white for dark ones. */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  if (tone === "light") {
    return (
      <Image
        src="/brand/las-americas-logo-light.svg"
        alt="Las Américas — Cooperativa Multiactiva de Aporte y Crédito"
        width={1900}
        height={905}
        unoptimized
        className={cn("h-auto w-60", className)}
      />
    );
  }
  return (
    <Image
      src="/brand/las-americas-lockup.svg"
      alt="Las Américas — Cooperativa Multiactiva de Aporte y Crédito"
      width={1895}
      height={800}
      unoptimized
      preload
      className={cn("h-12 w-auto md:h-14", className)}
    />
  );
}
