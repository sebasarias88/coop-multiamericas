import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/content/site";
import { teamTable } from "@/assets/images";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="theme-dark relative overflow-hidden bg-ink">
      <div className="relative mx-auto max-w-[1320px] px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="relative overflow-hidden rounded-[40px] bg-brand">
          <div className="grid items-stretch lg:grid-cols-[1.4fr_1fr]">
            <div className="p-8 md:p-14">
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/70">Únete a la cooperativa</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.045em] text-white md:text-7xl">
                Sigamos construyendo un futuro próspero y solidario.
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/asociarme" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand transition-transform hover:scale-[1.03]">
                  Asóciate hoy <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </Link>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-[14px] font-semibold text-white transition-colors hover:bg-white/10">
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <Image src={teamTable} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-brand via-brand/30 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-silver">{site.tagline}</p>
          </div>
          <div>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-soft">Cooperativa</p>
            <ul className="space-y-2 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-silver hover:text-white">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-soft">Contacto</p>
            <address className="space-y-2 text-sm not-italic text-silver">
              <p>{site.address.city}, {site.address.country}</p>
              <a href={site.phoneHref} className="block hover:text-white">{site.phone}</a>
              <a href={`mailto:${site.emails.service}`} className="block break-all hover:text-white">{site.emails.service}</a>
              <a href={`mailto:${site.emails.legal}`} className="block break-all hover:text-white">{site.emails.legal}</a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-smoke md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <Link href="/privacidad" className="hover:text-white">Política de tratamiento de datos personales · Términos</Link>
        </div>

        <p aria-hidden className="pointer-events-none mt-10 select-none text-center font-display whitespace-nowrap text-[9.6vw] font-black leading-[0.8] tracking-[-0.06em] text-white/[0.05]">
          LAS AMÉRICAS
        </p>
      </div>
    </footer>
  );
}
