"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { portfolio, site, smmlv } from "@/content/site";
import { simulatorDefaults } from "@/content/simulator";
import { cn } from "@/lib/cn";

const cop = (v: number) => v.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

function Slider({ id, label, value, min, max, step, onChange, display }: { id: string; label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; display: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-bold uppercase tracking-[0.14em] text-stone">{label}</label>
        <span className="font-display text-2xl font-extrabold text-forest md:text-3xl">{display}</span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-4 w-full" />
    </div>
  );
}

function RateInput({ id, label, value, onChange, suffix }: { id: string; label: string; value: number; onChange: (v: number) => void; suffix: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-cream px-5 py-4">
      <label htmlFor={id} className="text-sm font-semibold text-bark">{label}</label>
      <span className="flex items-center gap-1 font-display font-bold text-forest">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step={0.05}
          min={0}
          max={5}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-20 rounded-lg border border-clay bg-white px-2 py-1 text-right outline-none focus:border-petal"
        />
        {suffix}
      </span>
    </div>
  );
}

function CreditSimulator() {
  const [lineKey, setLineKey] = useState<(typeof portfolio.credits)[number]["key"]>("libre");
  const line = portfolio.credits.find((c) => c.key === lineKey)!;
  const maxAmount = Math.min(line.maxSmmlv, lineKey === "educativo" ? 20 : line.maxSmmlv) * smmlv.value;
  const [amount, setAmount] = useState(10_000_000);
  const [months, setMonths] = useState(24);
  const [rate, setRate] = useState(simulatorDefaults.creditMonthlyRate);

  const a = Math.min(amount, maxAmount);
  const n = Math.min(months, line.maxMonths);

  const { payment, total, interest, schedule } = useMemo(() => {
    const r = rate / 100;
    const pay = r === 0 ? a / n : (a * r) / (1 - Math.pow(1 + r, -n));
    let balance = a;
    const rows: { interest: number; principal: number }[] = [];
    for (let i = 0; i < n; i++) {
      const it = balance * r;
      const pr = pay - it;
      balance -= pr;
      rows.push({ interest: it, principal: pr });
    }
    return { payment: pay, total: pay * n, interest: pay * n - a, schedule: rows };
  }, [a, n, rate]);

  const wa = `Hola, simulé un ${line.title.toLowerCase()} por ${cop(a)} a ${n} meses en la web. ¿Me pueden asesorar?`;

  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-8 border-b border-clay p-6 md:p-10 lg:border-b-0 lg:border-r">
        <div className="grid grid-cols-3 gap-2 rounded-full bg-cream p-1.5">
          {portfolio.credits.map((c) => (
            <button
              key={c.key}
              type="button"
              aria-pressed={lineKey === c.key}
              onClick={() => {
                setLineKey(c.key);
                setMonths((m) => Math.min(m, c.maxMonths));
              }}
              className={cn("relative rounded-full px-2 py-3 text-xs font-bold transition-colors sm:text-sm", lineKey === c.key ? "text-white" : "text-bark hover:text-forest")}
            >
              {lineKey === c.key && <motion.span layoutId="credit-pill" className="absolute inset-0 rounded-full bg-forest" />}
              <span className="relative">{c.title.replace("Crédito ", "").replace("de ", "")}</span>
            </button>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-bark">
          <strong className="text-forest">{line.amount} · {line.term}.</strong> {line.text}
        </p>
        <Slider id="amount" label="Monto" value={a} min={500_000} max={maxAmount} step={100_000} onChange={setAmount} display={cop(a)} />
        <Slider id="months" label="Plazo" value={n} min={1} max={line.maxMonths} step={1} onChange={setMonths} display={`${n} ${n === 1 ? "mes" : "meses"}`} />
        <RateInput id="rate" label="Tasa de referencia mes vencido" value={rate} onChange={setRate} suffix="% M.V." />
      </div>

      <div className="theme-dark flex flex-col justify-between gap-8 bg-forest p-6 md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Cuota mensual estimada</p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={Math.round(payment)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="mt-2 font-display text-5xl font-extrabold tracking-tight text-sand md:text-7xl"
            >
              {cop(payment)}
            </motion.p>
          </AnimatePresence>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-sage">Total a pagar</dt>
              <dd className="mt-1 font-display text-xl font-bold text-sand md:text-2xl">{cop(total)}</dd>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-sage">Intereses</dt>
              <dd className="mt-1 font-display text-xl font-bold text-sun md:text-2xl">{cop(interest)}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-4 text-xs font-semibold text-sage">
            <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-sand" /> Capital</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-sun" /> Intereses</span>
          </p>
          <div className="flex h-28 items-end gap-[2px]" aria-hidden>
            {schedule.map((s, i) => (
              <motion.div
                key={`${n}-${i}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * (0.6 / schedule.length), duration: 0.4 }}
                className="flex h-full flex-1 origin-bottom flex-col justify-end overflow-hidden rounded-t-sm"
              >
                <div className="bg-sun" style={{ height: `${(s.interest / payment) * 100}%` }} />
                <div className="bg-sand" style={{ height: `${(s.principal / payment) * 100}%` }} />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(wa)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-bold text-forest transition-transform hover:scale-[1.03]"
          >
            Solicitar asesoría <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </a>
          <p className="mt-4 text-xs leading-relaxed text-sage">
            Simulación ilustrativa con tasa de referencia editable. La tasa vigente la aprueba el Consejo de Administración y el crédito está sujeto a estudio. SMMLV {smmlv.year}: {cop(smmlv.value)}.
          </p>
        </div>
      </div>
    </div>
  );
}

function SavingsSimulator() {
  const [monthly, setMonthly] = useState(200_000);
  const [months, setMonths] = useState(12);
  const [rate, setRate] = useState(simulatorDefaults.savingsAnnualRate);

  const { final, deposited } = useMemo(() => {
    const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
    let bal = 0;
    for (let i = 0; i < months; i++) bal = (bal + monthly) * (1 + r);
    return { final: bal, deposited: monthly * months };
  }, [monthly, months, rate]);

  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-8 border-b border-clay p-6 md:p-10 lg:border-b-0 lg:border-r">
        <p className="text-sm leading-relaxed text-bark">
          <strong className="text-forest">Aporte contractual.</strong> Ahorra una cuota pactada durante un período y retírala al final con sus intereses, exento del 4×1000.
        </p>
        <Slider id="monthly" label="Aporte mensual" value={monthly} min={50_000} max={3_000_000} step={10_000} onChange={setMonthly} display={cop(monthly)} />
        <Slider id="smonths" label="Período" value={months} min={3} max={60} step={1} onChange={setMonths} display={`${months} meses`} />
        <RateInput id="srate" label="Rendimiento de referencia" value={rate} onChange={setRate} suffix="% E.A." />
      </div>
      <div className="theme-dark flex flex-col justify-between gap-8 bg-forest p-6 md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Al final del período recibirías</p>
          <p className="mt-2 font-display text-5xl font-extrabold tracking-tight text-sand md:text-7xl">{cop(final)}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-sage">Tus aportes</dt>
              <dd className="mt-1 font-display text-xl font-bold text-sand md:text-2xl">{cop(deposited)}</dd>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-sage">Rendimientos</dt>
              <dd className="mt-1 font-display text-xl font-bold text-sun md:text-2xl">{cop(final - deposited)}</dd>
            </div>
          </dl>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-sun" animate={{ width: `${Math.min(100, (deposited / final) * 100)}%` }} />
        </div>
        <p className="text-xs leading-relaxed text-sage">
          Simulación ilustrativa. Las tasas de rendimiento las aprueba el Consejo de Administración según la tasa promedio del DTF y las del sector financiero.
        </p>
      </div>
    </div>
  );
}

/** Credit + savings simulator (fills the empty "Simuladores" page of the old site). */
export function Simulator() {
  const [tab, setTab] = useState<"credit" | "savings">("credit");
  return (
    <div className="overflow-hidden rounded-[36px] border border-clay bg-white shadow-[0_40px_80px_-40px_rgba(23,58,44,0.35)]">
      <div className="flex gap-2 border-b border-clay p-3" role="tablist">
        {(
          [
            ["credit", "Simular crédito"],
            ["savings", "Simular ahorro"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            role="tab"
            type="button"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={cn("relative flex-1 rounded-full px-4 py-3 font-display font-bold transition-colors", tab === key ? "text-white" : "text-bark hover:text-forest")}
          >
            {tab === key && <motion.span layoutId="sim-tab" className="absolute inset-0 rounded-full bg-petal" />}
            <span className="relative">{label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
          {tab === "credit" ? <CreditSimulator /> : <SavingsSimulator />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
