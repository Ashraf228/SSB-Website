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
      </div>
    </main>
  );
}
