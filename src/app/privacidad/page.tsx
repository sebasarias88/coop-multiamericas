import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Política de tratamiento de datos personales", alternates: { canonical: "/privacidad" } };

// NOTE: base text aligned with Ley 1581 de 2012; have it reviewed by the cooperative's legal team.
export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-40 text-graphite md:pt-48">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand">Legal</p>
      <h1 className="font-display text-4xl font-black tracking-tight text-ink md:text-6xl">Política de tratamiento de datos personales y términos</h1>
      <div className="mt-12 space-y-8 leading-relaxed [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        <section><h2>Responsable</h2><p>{site.legalName}. {site.address.street}, {site.address.city}, {site.address.region}. Correo: {site.emails.service}. Teléfono: {site.phone}.</p></section>
        <section><h2>Finalidad</h2><p>Tratamos los datos de asociados y visitantes para gestionar la vinculación, prestar los servicios de aporte y crédito, enviar información de la cooperativa y cumplir obligaciones legales, conforme a la Ley 1581 de 2012.</p></section>
        <section><h2>Derechos del titular</h2><p>Puedes conocer, actualizar, rectificar y suprimir tus datos, solicitar prueba de la autorización, revocarla y presentar quejas ante la Superintendencia de Industria y Comercio.</p></section>
        <section><h2>Términos de uso</h2><p>La información y los simuladores de este sitio son ilustrativos y no constituyen una oferta vinculante. Todo crédito está sujeto a estudio y aprobación. Notificaciones judiciales: {site.emails.legal}.</p></section>
      </div>
    </article>
  );
}
