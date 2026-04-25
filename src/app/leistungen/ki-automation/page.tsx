import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenChatbotButton from "@/components/OpenChatbotButton";

export const metadata: Metadata = {
  title: "KI-Automation",
  description:
    "KI-Automation für Unternehmen: Prozesse beschleunigen, manuelle Arbeit reduzieren und digitale Abläufe strukturierter aufbauen.",
};

export default function KIAutomationPage() {
  return (
    <main>
      <PageHero
        eyebrow="KI-Automation"
        title="Digitale Abläufe, die Zeit sparen und operative Reibung reduzieren."
        description="KI-Automation ist dann stark, wenn sie nicht theoretisch bleibt, sondern wiederkehrende Prozesse wirklich vereinfacht und sauber in den Unternehmensalltag eingebunden wird."
      />

      <Section>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            {
              title: "Prozessautomatisierung",
              text: "Wiederkehrende Schritte, Statuswechsel und Übergaben lassen sich strukturierter abbilden, damit weniger Leerlauf und weniger manuelle Abstimmung entsteht.",
            },
            {
              title: "Kostenreduktion",
              text: "Weniger Routinearbeit und weniger operative Reibung bedeuten langfristig mehr Ruhe, mehr Kapazität und effizientere Nutzung bestehender Ressourcen.",
            },
            {
              title: "Effizienzsteigerung",
              text: "Teams arbeiten schneller, konsistenter und mit klareren Abläufen, wenn Informationen und Prozessschritte sauber vorbereitet werden.",
            },
            {
              title: "Praxisbeispiele",
              text: "Terminprozesse, Support-Strecken, Wissensdatenbanken, Anfragevorqualifizierung und wiederkehrende interne Workflows gehören zu den typischen Einsatzfeldern.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <OpenChatbotButton className="rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
            KI-Beratung starten
          </OpenChatbotButton>
        </div>
      </Section>

      <CTASection
        eyebrow="System statt Insellösung"
        title="Automation wirkt am stärksten, wenn Website, Anfrageführung und interne Prozesse zusammenpassen."
        description="Darum wird KI-Automation bei Soulé Smart Business nicht isoliert gedacht, sondern als Teil einer durchgängigen digitalen Struktur."
      />
    </main>
  );
}
