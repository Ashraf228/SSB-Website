import type { Metadata } from "next";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenContactButton from "@/components/OpenContactButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "KI-Agenten für verschiedene Branchen",
  description:
    "KI-Agenten für Unternehmen in Handwerk, E-Commerce, IT-Systemhäusern, Dienstleistung, Immobilien und Gesundheitswesen.",
  path: "/branchen",
});

const industryCards = [
  {
    title: "Handwerk",
    problem:
      "Anfragen kommen ungefiltert rein, Notdienst-Themen brauchen schnelle Reaktion und Termine werden oft noch manuell vorbereitet.",
    solution:
      "Ein KI-Agent nimmt Anfragen rund um die Uhr an, filtert Dringlichkeit und bereitet Folgeprozesse direkt vor.",
    benefit:
      "Weniger verlorene Anfragen, schnellere Erstreaktion und mehr Struktur in der Einsatzplanung.",
    useCases: [
      "24/7 Anfrageannahme",
      "Notdienst-Anfragen",
      "Terminvorbereitung",
      "Angebotsvorqualifizierung",
    ],
  },
  {
    title: "E-Commerce",
    problem:
      "Produktfragen, Versandthemen und Retourenanliegen binden Zeit, obwohl viele Antworten wiederkehrend sind.",
    solution:
      "Ein beratender KI-Agent unterstützt Kunden im Kaufprozess und übernimmt einen großen Teil standardisierter Kommunikation.",
    benefit:
      "Mehr Orientierung im Shop, weniger Rückfragen im Support und bessere Conversion-Chancen.",
    useCases: [
      "Produktberatung",
      "FAQ",
      "Versandfragen",
      "Retourenfragen",
    ],
  },
  {
    title: "IT-Systemhäuser",
    problem:
      "Supportanfragen, Onboarding-Fragen und internes Wissen erzeugen hohen Druck auf Technik und Service.",
    solution:
      "Ein KI-Agent übernimmt First-Level-Anliegen, strukturiert Tickets und macht Wissen schneller nutzbar.",
    benefit:
      "Sauber vorbereitete Supportfälle, schnellere Reaktion und weniger operative Unterbrechungen.",
    useCases: [
      "First-Level-Support",
      "Ticket-Vorqualifizierung",
      "Wissensdatenbank",
      "Kunden-Onboarding",
    ],
  },
  {
    title: "Dienstleister",
    problem:
      "Interessenten melden sich mit unklaren Anliegen und Teams verlieren Zeit in Erstgesprächen ohne Vorqualifizierung.",
    solution:
      "Ein KI-Agent sammelt die relevanten Informationen, bereitet Beratung vor und hält die Kommunikation sauber zusammen.",
    benefit:
      "Bessere Lead-Qualität, effizientere Erstgespräche und weniger manuelle Abstimmung.",
    useCases: [
      "Lead-Qualifizierung",
      "Beratungsvorbereitung",
      "Terminabfrage",
      "Kundenkommunikation",
    ],
  },
  {
    title: "Immobilien",
    problem:
      "Viele wiederkehrende Objektfragen, unklare Interessentenanfragen und manuelle Abstimmung bei Besichtigungen kosten Zeit.",
    solution:
      "Ein KI-Agent beantwortet Standardfragen, qualifiziert Interessenten und sammelt fehlende Unterlagen strukturiert ein.",
    benefit:
      "Weniger Leerlauf in der Kommunikation und deutlich besser vorbereitete Kontakte.",
    useCases: [
      "Interessentenqualifizierung",
      "Objektfragen",
      "Besichtigungstermine",
      "Dokumentenabfrage",
    ],
  },
  {
    title: "Gesundheitswesen",
    problem:
      "Terminfragen, wiederkehrende Informationen und interne Abstimmungen binden Kapazität im Tagesgeschäft.",
    solution:
      "Ein KI-Agent beantwortet häufige Fragen, strukturiert Anfragen vor und entlastet Teams bei standardisierten Abläufen.",
    benefit:
      "Mehr Ruhe in der Kommunikation, schnellere Antworten und mehr Zeit für die eigentliche Betreuung.",
    useCases: [
      "Terminfragen",
      "FAQ",
      "Patienteninformationen",
      "interne Prozessentlastung",
    ],
  },
];

const sharedPainPoints = [
  "wiederkehrende Fragen",
  "manuelle Datenerfassung",
  "langsame Reaktionszeiten",
  "unstrukturierte Anfragen",
  "hoher Kommunikationsaufwand",
];

export default function BranchenPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-14 pt-20 md:px-10 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,51,82,0.12),_transparent_34%),radial-gradient(circle_at_85%_8%,_rgba(11,18,32,0.08),_transparent_26%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Branchen
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-6xl">
              KI-Agenten für verschiedene Branchen
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Jede Branche verliert Zeit an wiederkehrende Fragen, manuelle Abläufe und
              unstrukturierte Anfragen. Wir entwickeln KI-Agenten, die genau diese Prozesse
              automatisieren.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <OpenContactButton className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
                Branchenpotenzial prüfen
              </OpenContactButton>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {industryCards.map((industry) => (
            <article
              key={industry.title}
              className="group rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.06)] transition hover:-translate-y-1 hover:border-[rgba(30,51,82,0.24)] hover:shadow-[0_26px_70px_rgba(11,18,32,0.12)]"
            >
              <div className="inline-flex rounded-full border border-[rgba(30,51,82,0.12)] bg-[var(--surface-0)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                Branche
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                {industry.title}
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Typisches Problem
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{industry.problem}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Passende KI-Lösung
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{industry.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Konkreter Nutzen
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{industry.benefit}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                  Use Cases
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {industry.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface-0)] px-4 py-2 text-sm text-[var(--ink-2)]"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Branchenübergreifend
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
              Was alle Branchen gemeinsam haben
            </h2>
            <div className="mt-8 space-y-4">
              {sharedPainPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--ink-2)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-1)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[rgba(30,51,82,0.18)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] p-8 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
              Ansatz
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Genau dort setzen KI-Agenten an.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              Ob Support, Beratung, Vorqualifizierung oder interne Abläufe: Der gemeinsame Hebel
              liegt fast immer in wiederkehrender Kommunikation, fehlender Struktur und
              zeitraubenden Übergaben. KI-Agenten schaffen hier Entlastung, ohne dass Prozesse
              unübersichtlich werden.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Analyse"
        title="Welche Prozesse kosten in Ihrer Branche täglich Zeit?"
        description="In einer kurzen Analyse prüfen wir, welche Aufgaben ein KI-Agent in Ihrem Unternehmen übernehmen kann."
      />
    </main>
  );
}
