import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Juntos construimos un futuro próspero y solidario`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(180deg, #FBF7EF 0%, #F3D3A4 60%, #5E8A57 60%, #173A2C 100%)", color: "#173A2C" }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>Cooperativa Las Américas</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1000 }}>Juntos construimos un futuro próspero y solidario.</div>
        <div style={{ display: "flex", fontSize: 26, color: "#FBF7EF" }}>Aporte y crédito desde 1998 · Bogotá</div>
      </div>
    ),
    size,
  );
}
