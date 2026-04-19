import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case: KI-Agent und Anfrageprozess für Dienstleister",
  description:
    "Praxisnahes Beispiel, wie ein KI-Agent für Dienstleister Anfragen besser qualifiziert, Wissen schneller bereitstellt und Prozesse entlastet.",
  alternates: {
    canonical: "https://soulesmartbusiness.com/case-ki-agent-dienstleister",
  },
};

export default function CaseKIAgentDienstleisterPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-0)] px-6 py-24 text-[var(--ink-1)]">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
        >
          ← Zur Startseite
        </Link>

        <div className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
          Case
        </div>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
          KI-Agent und Anfrageprozess für Dienstleister
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Viele Dienstleister erhalten laufend Anfragen, beantworten dieselben Rückfragen
          immer wieder und verlieren Zeit bei der Vorqualifizierung. Ein KI-Agent kann
          hier als intelligenter Vorfilter, Wissenszugang und Entlastung im ersten
          Kontaktpunkt dienen.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--ink-1)]">Vorher</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Viele manuelle Rückfragen, unklare Lead-Qualität, langsame Reaktionszeiten
              und Informationen, die verteilt in Dokumenten, Mails oder Köpfen liegen.
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--ink-1)]">Nachher</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Ein KI-Agent beantwortet Standardfragen, sortiert Anfragen vor, greift auf
              relevantes Wissen zu und übergibt qualifiziertere Kontakte an den nächsten
              Prozessschritt.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Was dieser KI-Agent verbessert
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Weniger manuelle Rückfragen, bessere Vorqualifizierung, schnellerer
              Wissenszugriff und mehr operative Ruhe im Alltag. Genau solche Cases sind für
              Unternehmen spannend, die nach `KI-Agenten für Dienstleister` oder
              `KI-Agenten für Unternehmen` suchen.
            </p>
        </div>
      </div>
    </main>
  );
}
