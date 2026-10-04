import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[85svh] max-w-[1320px] flex-col justify-center px-6 pt-32 md:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Error 404</p>
      <h1 className="mt-4 font-display text-6xl font-black tracking-tight text-ink md:text-8xl">Esta página no existe.</h1>
      <p className="mt-6 max-w-md text-graphite">Volvamos juntos al inicio.</p>
      <Link href="/" className="mt-10 inline-flex w-fit rounded-full bg-brand px-7 py-4 font-bold text-white">Ir al inicio</Link>
    </section>
  );
}
