import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatisierung fuer Dienstleister",
  description:
    "Automatisierung fuer Dienstleister: wiederkehrende Aufgaben, Anfragen und interne Ablaeufe effizienter organisieren.",
  alternates: { canonical: "https://soulesmartbusiness.com/automatisierung-dienstleister" },
};

export default function AutomatisierungDienstleisterPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-0)] px-6 py-24 text-[var(--ink-1)]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">← Zur Startseite</Link>
        <div className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">Branche</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">Automatisierung fuer Dienstleister</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
          Dienstleister profitieren stark von Automatisierung, wenn Rueckfragen, Angebote,
          Terminabstimmungen oder interne Freigaben zu viel operative Zeit kosten.
          Automatisierung hilft, Ablaufe robuster und skalierbarer zu machen.
        </p>
      </div>
    </main>
  );
}
