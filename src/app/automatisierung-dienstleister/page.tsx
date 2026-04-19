import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatisierung für Dienstleister",
  description:
    "Automatisierung für Dienstleister: wiederkehrende Aufgaben, Anfragen und interne Abläufe effizienter organisieren.",
  alternates: { canonical: "https://soulesmartbusiness.com/automatisierung-dienstleister" },
};

export default function AutomatisierungDienstleisterPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-0)] px-6 py-24 text-[var(--ink-1)]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">← Zur Startseite</Link>
        <div className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">Branche</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">Automatisierung für Dienstleister</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
          Dienstleister profitieren stark von Automatisierung, wenn Rückfragen, Angebote,
          Terminabstimmungen oder interne Freigaben zu viel operative Zeit kosten.
          Automatisierung hilft, Abläufe robuster und skalierbarer zu machen.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Typische Hebel für Dienstleister
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Anfrageannahme, Terminvorbereitung, Angebotsprozesse, interne Übergaben,
              Nachfassstrecken und wiederkehrende Kommunikation lassen sich oft deutlich
              strukturierter und effizienter aufsetzen.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Der konkrete Nutzen
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Weniger manuelle Rückfragen, schnellere Reaktionszeiten, mehr Transparenz
              im Prozess und ein Team, das sich stärker auf wertschöpfende Aufgaben
              konzentrieren kann.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
