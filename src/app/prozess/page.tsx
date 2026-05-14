import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenContactButton from "@/components/OpenContactButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "KI-Agenten Einführung",
  description:
    "So führt Soulé Smart Business KI-Agenten strukturiert in Unternehmen ein: Prozesse analysieren, Support entlasten und Abläufe kontrolliert automatisieren.",
  path: "/prozess",
});

const processSteps = [
  {
    step: "01",
    title: "Prozessanalyse",
    text: "Wir prüfen, welche Aufgaben, Fragen und Abläufe aktuell Zeit kosten.",
  },
  {
    step: "02",
    title: "Automatisierungspotenzial",
    text: "Wir bewerten, welche Prozesse durch KI sinnvoll entlastet werden können.",
  },
  {
    step: "03",
    title: "Agentenkonzept",
    text: "Wir definieren Aufgaben, Datenquellen, Grenzen, Übergaben und Ziel des KI-Agenten.",
  },
  {
    step: "04",
    title: "Umsetzung",
    text: "Der KI-Agent wird entwickelt, angebunden und auf Ihre Inhalte vorbereitet.",
  },
  {
    step: "05",
    title: "Testphase",
    text: "Antworten, Übergaben und Abläufe werden geprüft und verbessert.",
  },
  {
    step: "06",
    title: "Integration",
    text: "Der Agent wird auf Website, Kontaktstrecke oder internen Prozess integriert.",
  },
  {
    step: "07",
    title: "Optimierung",
    text: "Nach dem Start wird gemessen, verbessert und erweitert.",
  },
];

const safetyItems = [
  "definierte Aufgabenbereiche",
  "Übergabe an Menschen bei Unsicherheit",
  "Wissensbasis statt freies Raten",
  "kontrollierte Antworten",
  "nachvollziehbare Prozesse",
];

const resultCards = [
  "weniger manuelle Kommunikation",
  "strukturierte Anfragen",
  "schnellere Reaktionszeiten",
  "entlastete Mitarbeiter",
  "bessere Datenqualität",
  "skalierbare Abläufe",
];

export default function ProzessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Prozess"
        title="So bringen wir KI-Agenten sinnvoll in Ihr Unternehmen"
        description="Von der Prozessanalyse bis zur laufenden Optimierung: Wir entwickeln KI-Agenten nicht isoliert, sondern entlang Ihrer echten Abläufe, Anfragen und Zeitfresser."
      />

      <Section>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[rgba(30,51,82,0.14)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] px-8 py-8 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)] md:flex md:items-end md:justify-between md:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
              Einstieg
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              KI-Agenten werden nur dann sinnvoll, wenn sie entlang realer Prozesse aufgebaut werden.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Deshalb beginnt der Prozess nicht mit einem Tool, sondern mit Ihren wiederkehrenden
              Aufgaben, typischen Fragen und operativen Engpässen.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <OpenContactButton className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
              KI-Potenzial prüfen
            </OpenContactButton>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)] transition hover:-translate-y-1 hover:border-[rgba(30,51,82,0.22)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.1)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                    Schritt {item.step}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                    {item.title}
                  </h2>
                </div>
                <div className="rounded-full bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--ink-2)]">
                  KI-Agenten Einführung
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Kontrolle
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
              KI mit klaren Grenzen statt blinder Automatisierung
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[rgba(30,51,82,0.18)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] p-8 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)]">
            <div className="space-y-4">
              {safetyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/84"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Ergebnis
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
              Was am Ende entstehen soll
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resultCards.map((item) => (
              <div
                key={item}
                className="rounded-[1.9rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)] transition hover:-translate-y-1 hover:border-[rgba(30,51,82,0.22)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.1)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                  Zielbild
                </div>
                <div className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Analyse"
        title="Lassen Sie uns prüfen, welche Prozesse sich bei Ihnen automatisieren lassen."
        description="Wenn Sie verstehen möchten, wo ein KI-Agent operative Arbeit reduziert und wie eine kontrollierte Einführung aussehen kann, ist eine kurze KI-Potenzialanalyse der richtige Einstieg."
      />
    </main>
  );
}
