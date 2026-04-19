import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO und Google Ads fuer Unternehmen in Limburg, Hessen und Deutschland",
  description:
    "SEO und Google Ads fuer Unternehmen in Limburg, Hessen und Deutschland: mehr Sichtbarkeit, gezieltere Anfragen und ein sauberer Wachstumshebel auf Basis eines starken digitalen Setups.",
  alternates: { canonical: "https://soulesmartbusiness.com/seo-google-ads" },
};

const sections = [
  {
    title: "SEO fuer nachhaltige Sichtbarkeit",
    text: "SEO sorgt dafuer, dass dein Unternehmen langfristig relevanter gefunden wird. Dazu gehoeren Seitenstruktur, Inhalte, interne Verlinkung und klare Suchintentionen.",
  },
  {
    title: "Google Ads fuer gezielte Reichweite",
    text: "Google Ads ist sinnvoll, wenn Kampagnen an die Leistungen, Zielgruppen und Business-Ziele gekoppelt werden und nicht nur Budget verbrennen.",
  },
  {
    title: "Mehr Wirkung mit starkem Fundament",
    text: "Am besten funktionieren SEO und Ads, wenn Website, Prozesse und Angebote sauber aufgesetzt sind. Deshalb ist Sichtbarkeit bei mir Teil eines groesseren Smart-Business-Systems.",
  },
];

export default function SeoGoogleAdsPage() {
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
          SEO und Google Ads
        </div>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
          Mehr Sichtbarkeit mit SEO und Google Ads
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          SEO und Google Ads helfen Unternehmen dabei, gezielter gefunden zu werden und
          mehr relevante Anfragen aufzubauen. Ich setze diese Hebel nicht isoliert ein,
          sondern als sinnvolle Wachstumsergaenzung eines starken digitalen Setups fuer
          Unternehmen in Limburg, Hessen und ganz Deutschland.
        </p>

        <div className="mt-8 rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            SEO und Google Ads funktionieren am besten auf einem starken Fundament
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Wenn Angebote unklar sind, Seiten keine Struktur haben oder Prozesse intern
            nicht sauber laufen, wird Sichtbarkeit schnell teuer oder ineffizient.
            Deshalb sind SEO und Google Ads bei mir Teil eines smarten Business-Setups und
            nicht nur isolierte Marketing-Massnahmen.
          </p>
        </div>

        <div className="mt-14 grid gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
            >
              <div className="text-2xl font-semibold text-[var(--ink-1)]">
                {section.title}
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Lokale Suchsignale
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Diese Seite ist auch auf lokale Suchanfragen wie `SEO Limburg`,
              `Google Ads Limburg`, `SEO Agentur Hessen` oder `Google Ads fuer Unternehmen`
              ausgerichtet, damit regionale und ueberregionale Sichtbarkeit gleichzeitig
              aufgebaut werden kann.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Was Unternehmen davon haben
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Mehr qualifizierte Anfragen, besser planbare Reichweite und eine Website,
              die Suchintention, Nutzerfuehrung und Conversion staerker zusammenbringt.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            Weitere relevante Seiten
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/ki-agenten" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              KI-Agenten
            </Link>
            <Link href="/automatisierung" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              Automatisierung
            </Link>
            <Link href="/seo-google-ads-limburg" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              SEO und Google Ads in Limburg
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
