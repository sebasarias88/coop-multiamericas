import localFont from "next/font/local";

/**
 * Self-hosted fonts via next/font: preloaded, hashed and served with a
 * metric-matched fallback so text never jumps when the real font arrives.
 */
export const display = localFont({
  src: "./fonts/schibsted-grotesk-latin-wght-normal.woff2",
  weight: "400 900",
  variable: "--font-schibsted",
  display: "swap",
});

export const sans = localFont({
  src: "./fonts/onest-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-onest",
  display: "swap",
});

export const fontVariables = [display.variable, sans.variable].join(" ");
