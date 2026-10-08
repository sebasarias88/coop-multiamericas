import type { Metadata } from "next";
import { laptopWork } from "@/assets/images";
import { PageHero } from "@/components/sections/PageHero";
import { Simulator } from "@/components/sections/Simulator";

export const metadata: Metadata = {
  title: "Simulador de crédito y ahorro",
  description: "Calcula tu cuota de crédito de libre inversión, educativo o solidario, o el rendimiento de tu aporte contractual.",
  alternates: { canonical: "/simulador" },
};

export default function SimulatorPage() {
  return (
    <>
      <PageHero image={laptopWork} label="Simuladores" lines={["Haz cuentas", { text: "con tranquilidad.", className: "text-brand" }]} intro="Elige la línea de crédito, el monto y el plazo, o simula cuánto recibirías con tu aporte contractual." />
      <section className="mx-auto max-w-[1320px] px-6 pb-28 md:px-10 md:pb-36">
        <Simulator />
      </section>
    </>
  );
}
