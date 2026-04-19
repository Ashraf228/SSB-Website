import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO und Google Ads in Limburg",
  description:
    "SEO und Google Ads in Limburg: mehr Sichtbarkeit für Unternehmen in Limburg und Umgebung durch eine saubere digitale Strategie.",
  alternates: { canonical: "https://soulesmartbusiness.com/seo-google-ads-limburg" },
};

export default function SeoGoogleAdsLimburgPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-0)] px-6 py-24 text-[var(--ink-1)]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">← Zur Startseite</Link>
        <div className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">Lokal</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">SEO und Google Ads in Limburg</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
          Für Unternehmen in Limburg und Umgebung können SEO und Google Ads ein starker
          Hebel sein, wenn Leistungen klar kommuniziert, Seiten sauber aufgebaut und
          Kampagnen auf echte Business-Ziele ausgerichtet sind.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Lokale Sichtbarkeit mit Struktur
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Regionale Suchanfragen funktionieren dann besonders gut, wenn Website,
              Leistungen, Standorte und Nutzerführung klar aufgebaut sind. So versteht
              Google besser, wofür dein Unternehmen in Limburg relevant ist.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Was Unternehmen davon haben
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Mehr qualifizierte lokale Anfragen, planbarere Reichweite und eine digitale
              Präsenz, die nicht nur sichtbar ist, sondern auch Vertrauen aufbaut und
              Kontakte wahrscheinlicher macht.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
