import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenContactButton from "@/components/OpenContactButton";
import UseCaseProofSection from "@/components/UseCaseProofSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "KI-Lösungen für Unternehmen",
  description:
    "KI-Agenten für Unternehmen, KI-Automatisierung und Systembasis für Websites: Support entlasten, Prozesse automatisieren und Kundenanfragen strukturieren.",
  path: "/leistungen",
});

const offeringCards = [
  {
    title: "KI-Support-Agent",
    href: "/leistungen/ki-agenten",
    problem: "Wiederkehrende Kundenfragen kosten täglich Zeit und blockieren dein Team.",
    solution:
      "Ein KI-Agent beantwortet Standardfragen, strukturiert Anliegen und bereitet die Übergabe sauber vor.",
    result: "Schnellere Antworten, weniger manuelle Rückfragen und ein entlasteter Support.",
  },
  {
    title: "KI-Lead-Agent",
    href: "/leistungen/ki-agenten",
    problem: "Anfragen kommen ungefiltert rein und wichtige Informationen fehlen oft.",
    solution:
      "Der Agent fragt Daten ab, qualifiziert Leads vor und übergibt Gespräche mit sauberem Kontext weiter.",
    result: "Bessere Erstgespräche, weniger Streuverlust und mehr qualifizierte Anfragen.",
  },
  {
    title: "KI-Wissensdatenbank",
    href: "/leistungen/ki-agenten",
    problem: "Wissen liegt verteilt in Dokumenten, Köpfen und einzelnen Systemen.",
    solution:
      "Ein Wissensagent macht Inhalte direkt abrufbar und liefert schneller die richtige Antwort.",
    result: "Weniger Suchaufwand, bessere Datenqualität und klarere interne Abläufe.",
  },
  {
    title: "KI-Prozessautomatisierung",
    href: "/leistungen/ki-automation",
    problem: "Viele Übergaben, doppelte Datenerfassung und wiederkehrende Kommunikation bremsen Prozesse.",
    solution:
      "KI-Agenten verbinden Anfrage, Vorqualifizierung, Entscheidung und Übergabe zu einem klaren Ablauf.",
    result: "Weniger manuelle Zwischenschritte, höhere Geschwindigkeit und skalierbare Prozesse.",
  },
  {
    title: "KI-E-Commerce-Agent",
    href: "/leistungen/ki-agenten",
    problem: "Produktfragen bleiben offen und Kaufentscheidungen ziehen sich unnötig in die Länge.",
    solution:
      "Ein beratender Agent unterstützt bei Orientierung, Produktauswahl und Vorqualifizierung im Shop.",
    result: "Mehr Klarheit im Kaufprozess, bessere Beratung und höhere Conversion-Chancen.",
  },
  {
    title: "Website als KI-Systembasis",
    href: "/leistungen/websites",
    problem: "Die Website sammelt Anfragen nicht sauber ein und bildet keine gute Basis für Automatisierung.",
    solution:
      "Eine klare Website-Struktur schafft Nutzerführung, Lead-Erfassung und die technische Grundlage für KI-Agenten.",
    result: "Mehr qualifizierte Anfragen, bessere Conversion und eine stabile digitale Systembasis.",
  },
];

const decisionItems = [
  {
    trigger: "Viele Kundenfragen",
    fit: "KI-Support-Agent",
    href: "/leistungen/ki-agenten",
  },
  {
    trigger: "Viele unqualifizierte Anfragen",
    fit: "KI-Lead-Agent",
    href: "/leistungen/ki-agenten",
  },
  {
    trigger: "Viel internes Wissen verstreut",
    fit: "KI-Wissensdatenbank",
    href: "/leistungen/ki-agenten",
  },
  {
    trigger: "Viele manuelle Abläufe",
    fit: "KI-Prozessautomatisierung",
    href: "/leistungen/ki-automation",
  },
  {
    trigger: "Produktberatung im Shop",
    fit: "KI-E-Commerce-Agent",
    href: "/leistungen/ki-agenten",
  },
  {
    trigger: "Website bringt zu wenig Anfragen",
    fit: "Website als KI-Systembasis",
    href: "/leistungen/websites",
  },
];

const beforeItems = [
  "manuelle Antworten",
  "unklare Anfragen",
  "verstreute Informationen",
  "langsame Übergaben",
];

const afterItems = [
  "strukturierte Anfragen",
  "automatische Vorqualifizierung",
  "schnellere Bearbeitung",
  "entlastete Mitarbeiter",
];

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Lösungen"
        title="KI-Lösungen, die operative Arbeit im Unternehmen reduzieren"
        description="Von Support über Lead-Qualifizierung bis Prozessautomatisierung: Wir entwickeln KI-Agenten, die wiederkehrende Aufgaben übernehmen und Teams messbar entlasten."
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] px-7 py-8 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)] md:flex-row md:items-end md:justify-between md:px-10">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
                Angebotsübersicht
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                KI-Agenten und Automatisierung als klarer Angebotskern.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/72 md:text-lg">
                Der Fokus liegt auf Lösungen, die Support entlasten, Leads vorqualifizieren,
                Wissen schneller nutzbar machen und wiederkehrende Prozesse automatisieren.
              </p>
            </div>

            <OpenContactButton className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
              KI-Potenzial prüfen
            </OpenContactButton>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {offeringCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.06)] transition hover:-translate-y-1 hover:border-[rgba(30,51,82,0.24)] hover:shadow-[0_26px_70px_rgba(11,18,32,0.12)]"
            >
              <div className="inline-flex rounded-full border border-[rgba(30,51,82,0.12)] bg-[var(--surface-0)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                KI-Lösung
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                {item.title}
              </h3>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Kurzproblem
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{item.problem}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Lösung
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{item.solution}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Ergebnis
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{item.result}</p>
                </div>
              </div>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition group-hover:gap-3">
                Zur Lösung
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-2">
          <UseCaseProofSection
            eyebrow="Beispiele"
            title="Beispielhafte KI-Agenten im Einsatz"
            className="px-0 pb-0 pt-16 md:px-0 md:pb-0 md:pt-16"
          />
        </div>

        <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)] md:p-10">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
            Orientierung
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
            Welche KI-Lösung passt zu Ihrem Unternehmen?
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {decisionItems.map((item) => (
              <Link
                key={item.trigger}
                href={item.href}
                className="group flex items-start justify-between gap-4 rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-0)] px-5 py-5 transition hover:border-[rgba(30,51,82,0.22)] hover:bg-white"
              >
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Wenn bei Ihnen ...
                  </div>
                  <div className="mt-2 text-lg font-semibold text-[var(--ink-1)]">{item.trigger}</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-sm text-[var(--muted)]">passt meist</div>
                  <div className="mt-1 text-sm font-semibold text-[var(--ink-1)]">{item.fit}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[rgba(30,51,82,0.14)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Vorher
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
              Reaktive, manuelle Abläufe kosten Zeit und Fokus.
            </h2>
            <div className="mt-8 space-y-4">
              {beforeItems.map((item) => (
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
              Nachher
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              KI-Agenten schaffen Struktur, Geschwindigkeit und Entlastung.
            </h2>
            <div className="mt-8 space-y-4">
              {afterItems.map((item) => (
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

        <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-[var(--line)] bg-white px-8 py-10 shadow-[0_16px_44px_rgba(11,18,32,0.05)] md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                Analyse
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
                Prüfen wir, welcher KI-Agent für Ihr Unternehmen sinnvoll ist.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
                In einem kurzen Gespräch klären wir, wo in Ihrem Unternehmen wiederkehrende
                Aufgaben Zeit kosten, wie Anfragen aktuell laufen und welche KI-Lösung den
                größten operativen Hebel hat.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <OpenContactButton className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
                Kostenlose Analyse anfragen
              </OpenContactButton>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Nächster Schritt"
        title="Support, Leads und Prozesse müssen nicht dauerhaft manuell laufen."
        description="Wenn Sie prüfen möchten, wie ein KI-Agent in Ihrem Unternehmen sinnvoll eingesetzt werden kann, ist der Chat oder ein kurzes Analysegespräch der richtige Einstieg."
      />
    </main>
  );
}
