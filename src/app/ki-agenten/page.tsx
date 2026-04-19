import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KI-Agenten fuer Unternehmen in Limburg, Hessen und ganz Deutschland",
  description:
    "Individuelle KI-Agenten fuer Unternehmen in Limburg, Hessen und ganz Deutschland: Support, interne Prozesse, Wissenszugriff, Lead-Qualifizierung und smarte Automationen.",
  alternates: { canonical: "https://soulesmartbusiness.com/ki-agenten" },
};

const useCases = [
  {
    title: "KI-Agenten fuer Support und Kundenanfragen",
    text: "Anfragen koennen vorsortiert, haeufige Fragen schneller beantwortet und relevante Informationen strukturiert aufbereitet werden.",
  },
  {
    title: "Interne Wissensagenten fuer schnelleren Informationszugriff",
    text: "Wissen aus Dokumenten, PDFs, Prozessen oder Leitfaeden wird schneller nutzbar, damit Teams nicht staendig nach Informationen suchen muessen.",
  },
  {
    title: "Agenten fuer Lead-Qualifizierung und Terminvorbereitung",
    text: "Leads koennen besser vorbereitet, qualifiziert und an den richtigen naechsten Schritt uebergeben werden.",
  },
  {
    title: "KI-Agenten fuer wiederkehrende Team-Prozesse",
    text: "KI-Agenten koennen Aufgaben vorbereiten, Informationen zusammenfassen und operative Routinen im Alltag spuerbar entlasten.",
  },
];

const benefits = [
  "Weniger manuelle Rueckfragen im Unternehmen",
  "Schnellere Bearbeitung standardisierter Aufgaben",
  "Besserer Zugriff auf internes Wissen",
  "Mehr Struktur in wiederkehrenden Prozessen",
];

export default function KIAgentenPage() {
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
          KI-Agenten
        </div>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
          Individuelle KI-Agenten fuer Unternehmen
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          KI-Agenten helfen Unternehmen dabei, Informationen schneller verfuegbar zu
          machen, Aufgaben sauberer zu bearbeiten und wiederkehrende Prozesse intelligent
          zu unterstuetzen. Ich entwickle individuelle Agentenloesungen fuer Unternehmen
          in Limburg, Hessen und ganz Deutschland, die sich am realen Alltag deines
          Unternehmens orientieren.
        </p>

        <div className="mt-8 rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            Wann KI-Agenten fuer Unternehmen sinnvoll sind
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Immer dann, wenn Teams viel Zeit mit Rueckfragen, Informationssuche,
            Vorqualifizierung, Standardantworten oder wiederkehrenden Bearbeitungsschritten
            verlieren. KI-Agenten fuer Unternehmen sind besonders dann wertvoll, wenn
            Prozesse nicht nur digitaler, sondern wirklich intelligenter werden sollen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
            >
              <div className="text-lg font-semibold text-[var(--ink-1)]">{item.title}</div>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Was KI-Agenten im Unternehmen verbessern koennen
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              KI-Agenten koennen Support entlasten, Wissen schneller nutzbar machen,
              standardisierte Aufgaben vorbereiten und Informationen aus verschiedenen
              Quellen strukturierter bereitstellen. Dadurch entsteht ein smarteres Business,
              das weniger von manueller Reibung abhaengig ist.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Wenn du nach `KI-Agenten fuer Unternehmen`, `KI-Agenten Limburg` oder
              `KI-Agenten fuer den Mittelstand` suchst, ist meistens genau das der
              Hintergrund: Prozesse sollen effizienter, schneller und verlaesslicher werden.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Vorteile im Ueberblick
            </h2>
            <div className="mt-6 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--muted)]">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent-1)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
            Weitere relevante Seiten
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/automatisierung" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              Automatisierung fuer Unternehmen
            </Link>
            <Link href="/ki-agenten-handwerk" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
              KI-Agenten fuer Handwerksbetriebe
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
