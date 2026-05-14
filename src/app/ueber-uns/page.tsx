import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Über Soulé Smart Business",
  description:
    "Soulé Smart Business entwickelt KI-Agenten und KI-Automatisierung für Unternehmen, um Prozesse zu automatisieren und Teams messbar zu entlasten.",
  path: "/ueber-uns",
});

const trustCards = [
  {
    title: "Praxisnah statt theoretisch",
    text: "Der Fokus liegt nicht auf abstrakten KI-Ideen, sondern auf realen Prozessen, Anfragen und Zeitfressern im Unternehmensalltag.",
  },
  {
    title: "Fokus auf messbare Entlastung",
    text: "Jede Lösung soll operative Arbeit reduzieren, Reaktionszeiten verbessern und Teams in wiederkehrenden Aufgaben entlasten.",
  },
  {
    title: "Individuelle KI-Agenten statt Standardlösungen",
    text: "Die Systeme werden auf konkrete Abläufe, Datenquellen und Anwendungsfälle abgestimmt statt pauschal übergestülpt.",
  },
  {
    title: "Verständliche Umsetzung ohne Technik-Komplexität",
    text: "Unternehmen sollen verstehen, was gebaut wird, warum es sinnvoll ist und wo die Grenzen der Lösung liegen.",
  },
  {
    title: "Kontrolle, Sicherheit und klare Grenzen",
    text: "KI-Agenten brauchen einen klaren Rahmen, saubere Wissensgrundlagen und definierte Übergaben, damit sie verlässlich unterstützen.",
  },
];

const workSteps = [
  "Prozesse verstehen",
  "Zeitfresser identifizieren",
  "passenden KI-Agenten konzipieren",
  "Lösung umsetzen",
  "testen und optimieren",
];

const missionParagraphs = [
  "Soulé Smart Business entwickelt KI-Lösungen aus einer klaren Haltung heraus: Work smarter, not harder.",
  "Im Zentrum stehen effiziente Arbeitsabläufe, sinnvolle Automatisierung und die Frage, wo Unternehmen täglich durch wiederkehrende Kommunikation und manuelle Prozesse ausgebremst werden.",
  "Das Ziel ist nicht, KI als Spielerei einzusetzen, sondern als praktisches Werkzeug für bessere Abläufe, sauberere Strukturen und mehr operative Entlastung.",
  "Wenn Support-Anfragen, Lead-Vorqualifizierung, Terminabstimmungen oder interne Rückfragen immer wieder dieselbe Zeit binden, entstehen genau dort die sinnvollsten Einsatzfelder für KI-Agenten.",
];

export default function UeberUnsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Über uns"
        title="KI-Agenten für Unternehmen, die smarter arbeiten wollen"
        description="Soulé Smart Business entwickelt KI-Lösungen, die wiederkehrende Aufgaben automatisieren, Teams entlasten und Unternehmensprozesse effizienter machen."
      />

      <Section className="bg-[#0B1220] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Mission
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Unser Ansatz entsteht aus dem Prinzip: Work smarter, not harder.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-white/78">
              {missionParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "font-medium text-white" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
              Orientierung
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              KI soll Arbeit reduzieren, nicht nur modern wirken.
            </h3>
            <p className="mt-5 text-base leading-8 text-white/72">
              Entscheidend ist nicht, ob ein Tool beeindruckend klingt, sondern ob es Anfragen
              sauber strukturiert, Kommunikation entlastet und wiederkehrende Aufgaben spürbar
              reduziert. Genau darauf ist der Ansatz ausgerichtet.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Warum Soulé Smart Business
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
              Vertrauen entsteht durch Klarheit, Nutzen und einen kontrollierten KI-Einsatz.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trustCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.9rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)] transition hover:-translate-y-1 hover:border-[rgba(30,51,82,0.22)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.1)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                  Soulé Smart Business
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Arbeitsweise
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
              Von Prozessverständnis zu einer Lösung, die im Alltag trägt.
            </h2>
          </div>

          <div className="space-y-4">
            {workSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-[1.6rem] border border-[var(--line)] bg-white px-5 py-5 shadow-[0_12px_32px_rgba(11,18,32,0.04)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface-0)] text-sm font-semibold text-[var(--accent-2)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-lg font-semibold text-[var(--ink-1)]">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[rgba(30,51,82,0.18)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] p-8 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)] md:p-10">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
            Positionierung
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Wir bauen keine KI, weil sie modern klingt. Wir bauen KI, wenn sie Arbeit reduziert.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-white/72">
            Jede Lösung soll einen klaren Zweck erfüllen: weniger manuelle Kommunikation,
            schnellere Reaktionen, bessere Struktur und mehr Zeit für wichtige Aufgaben.
          </p>
        </div>
      </Section>

      <CTASection
        eyebrow="Analyse"
        title="Prüfen wir, wo KI in Ihrem Unternehmen sinnvoll eingesetzt werden kann."
        description="Wenn Sie herausfinden möchten, welche wiederkehrenden Aufgaben sich mit KI-Agenten sinnvoll reduzieren lassen, ist eine kurze KI-Potenzialanalyse der richtige Einstieg."
      />
    </main>
  );
}
