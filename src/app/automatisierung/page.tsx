import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatisierung für Unternehmen in Limburg, Hessen und Deutschland",
  description:
    "Automatisierung für Unternehmen in Limburg, Hessen und Deutschland: wiederkehrende Aufgaben reduzieren, Prozesse beschleunigen und Zeit sowie Kosten sparen.",
  alternates: { canonical: "https://soulesmartbusiness.com/automatisierung" },
};

const benefits = [
  {
    title: "Weniger manuelle Routineaufgaben",
    text: "Wiederkehrende Aufgaben kosten oft mehr Zeit als sie auf den ersten Blick scheinen. Automatisierung reduziert diese Reibung deutlich.",
  },
  {
    title: "Sauberere Übergaben zwischen Schritten und Teams",
    text: "Wenn Prozesse sauber definiert und digital verknüpft sind, entstehen weniger Missverständnisse und weniger Leerlauf.",
  },
  {
    title: "Schnellere Bearbeitung von Anfragen und internen Aufgaben",
    text: "Anfragen, Freigaben und Standardprozesse laufen strukturierter, schneller und verlässlicher.",
  },
  {
    title: "Mehr Transparenz in wiederkehrenden Prozessen",
    text: "Unternehmen sehen klarer, wo Aufgaben hängen bleiben, wo Zeit verloren geht und wo Automatisierung am meisten bringt.",
  },
];

export default function AutomatisierungPage() {
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
          Automatisierung
        </div>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
          Automatisierung für Unternehmen
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Automatisierung spart nicht nur Zeit, sondern reduziert operative Reibung. Ich
          helfe Unternehmen in Limburg, Hessen und ganz Deutschland dabei, wiederkehrende
          Aufgaben klarer zu strukturieren und digitale Workflows aufzubauen, die im
          Alltag zuverlässig entlasten.
        </p>

        <div className="mt-8 rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            Warum Automatisierung für Unternehmen so viel Hebel hat
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Viele Unternehmen verlieren täglich Zeit durch manuelle Zwischenschritte,
            doppelte Bearbeitung, unklare Übergaben und fehlende digitale Struktur.
            Automatisierung für Unternehmen setzt genau dort an und sorgt dafür, dass
            Aufgaben robuster, schneller und verlässlicher ablaufen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
            >
              <div className="text-lg font-semibold text-[var(--ink-1)]">{item.title}</div>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Typische Automatisierungsfelder
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Zum Beispiel bei Lead-Bearbeitung, internen Freigaben, Anfrageprozessen,
              Wissensweitergabe, Datenaufbereitung oder standardisierten Aufgaben im Team.
              So entsteht mehr operative Ruhe und ein effizienteres Smart-Business-Setup.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Wichtige Suchsignale
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Diese Seite ist bewusst auf Begriffe wie `Automatisierung für Unternehmen`,
              `Prozessautomatisierung Unternehmen`, `Automatisierung Limburg` und
              `Automatisierung Mittelstand` ausgerichtet, damit Google den konkreten
              Suchintent sauber erkennen kann.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            Weitere relevante Seiten
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/ki-agenten" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              KI-Agenten für Unternehmen
            </Link>
            <Link href="/automatisierung-dienstleister" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              Automatisierung für Dienstleister
            </Link>
            <Link href="/seo-google-ads" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              SEO und Google Ads
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
