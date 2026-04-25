import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Prozess",
  description:
    "Der Arbeitsprozess von Soulé Smart Business: Analyse, Strategie, Umsetzung, Optimierung und langfristige Begleitung.",
};

export default function ProzessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Prozess"
        title="Ein klarer Ablauf von der Analyse bis zur langfristigen Begleitung."
        description="Damit digitale Projekte nicht im Unklaren starten, folgt die Zusammenarbeit einer nachvollziehbaren Struktur mit klaren Prioritäten."
      />

      <Section>
        <div className="mx-auto grid max-w-6xl gap-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                    Schritt {item.step}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">{item.title}</h2>
                </div>
                <div className="rounded-full bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--ink-2)]">
                  Soulé Smart Business
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Nächster Schritt"
        title="Ein klarer Prozess schafft bessere Entscheidungen und sauberere Ergebnisse."
        description="Wenn du wissen willst, wo dein sinnvollster Einstieg liegt, ist der Chat oder ein kurzes Gespräch der beste erste Schritt."
      />
    </main>
  );
}
