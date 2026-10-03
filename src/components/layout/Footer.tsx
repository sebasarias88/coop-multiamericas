import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { Mountains } from "@/components/sections/Mountains";

export function Footer() {
  return (
    <footer className="theme-dark relative overflow-hidden bg-forest">
      <Mountains variant="footer" className="absolute inset-x-0 top-0 h-40 w-full -translate-y-px" />
      <div className="relative mx-auto max-w-[1320px] px-6 pb-10 pt-48 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] text-sand md:text-7xl">
            Sigamos construyendo un futuro <span className="text-sun">próspero y solidario.</span>
          </h2>
          <Link
            href="/asociarme"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-sun px-8 py-5 font-bold text-forest transition-transform hover:scale-[1.04] md:self-auto"
          >
            Asóciate hoy <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[var(--line)] pt-12 md:grid-cols-4">
          <div className="space-y-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">{site.tagline}</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">Cooperativa</p>
            <ul className="space-y-2 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-[var(--muted)] hover:text-sand">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">Horario</p>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {site.hoursText.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">Agencia Armenia</p>
            <address className="space-y-2 text-sm not-italic text-[var(--muted)]">
              <p>{site.address.street}<br />{site.address.city}, {site.address.region}</p>
              <a href={site.phoneHref} className="block hover:text-sand">{site.phone}</a>
              <a href={`mailto:${site.emails.service}`} className="block break-all hover:text-sand">{site.emails.service}</a>
              <a href={`mailto:${site.emails.legal}`} className="block break-all hover:text-sand">{site.emails.legal}</a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <Link href="/privacidad" className="hover:text-sand">Política de tratamiento de datos personales · Términos</Link>
        </div>
      </div>
    </footer>
  );
}
