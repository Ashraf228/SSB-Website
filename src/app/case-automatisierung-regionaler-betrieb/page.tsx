import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case: Automatisierung und Sichtbarkeit für regionalen Betrieb",
  description:
    "Case-Szenario: Wie ein regionaler Betrieb durch Automatisierung, klare Website-Struktur und lokale Sichtbarkeit entlastet werden kann.",
  alternates: {
    canonical:
      "https://soulesmartbusiness.com/case-automatisierung-regionaler-betrieb",
  },
};

export default function CaseAutomatisierungRegionalerBetriebPage() {
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
          Automatisierung und Sichtbarkeit für regionalen Betrieb
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Ein typisches Szenario für einen regionalen Betrieb aus Limburg oder Umgebung:
          viele manuelle Abstimmungen, wiederkehrende Rückfragen und gleichzeitig der
          Wunsch, bei Google besser sichtbar zu sein.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-[var(--ink-1)]">Ausgangslage</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Anfragen laufen unstrukturiert ein, Informationen müssen manuell
              nachgereicht werden und die Website ist nicht optimal für lokale
              Sichtbarkeit ausgerichtet.
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-[var(--ink-1)]">Massnahmen</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Anfrageprozess strukturieren, wiederkehrende Schritte automatisieren und
              Website sowie lokale SEO-Signale für Suchanfragen in Limburg verbessern.
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-[var(--ink-1)]">Ergebnisbild</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Weniger operative Reibung, klarere Bearbeitungsschritte und bessere Chancen,
              über regionale Suchanfragen sichtbarer zu werden.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            Warum solche Case-Seiten SEO helfen
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Case-Seiten decken konkrete Suchintentionen und reale Problemszenarien ab.
            Das stärkt Relevanz für Begriffe wie `Automatisierung für Betriebe`,
            `digitale Prozesse Limburg` oder `SEO für regionale Unternehmen`.
          </p>
        </div>
      </div>
    </main>
  );
}
