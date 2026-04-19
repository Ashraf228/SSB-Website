import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KI-Agenten für Handwerksbetriebe",
  description:
    "KI-Agenten für Handwerksbetriebe: Anfragen besser bearbeiten, Wissen schneller nutzen und interne Prozesse entlasten.",
  alternates: { canonical: "https://soulesmartbusiness.com/ki-agenten-handwerk" },
};

export default function KIAgentenHandwerkPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-0)] px-6 py-24 text-[var(--ink-1)]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-2)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">← Zur Startseite</Link>
        <div className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">Branche</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">KI-Agenten für Handwerksbetriebe</h1>
        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
          Handwerksbetriebe profitieren besonders von KI-Agenten, wenn Anfragen schneller
          eingeordnet, Termine besser vorbereitet und wiederkehrende Informationen sauberer
          bereitgestellt werden sollen. Gerade in regionalen Betrieben in Limburg und
          Hessen entsteht so mehr Entlastung im Tagesgeschäft.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Wo KI-Agenten im Handwerk helfen
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Zum Beispiel bei der Vorqualifizierung von Anfragen, bei Standardantworten,
              bei der Aufbereitung von Leistungsinfos, bei Terminvorbereitung oder beim
              schnelleren Zugriff auf internes Wissen und wiederkehrende Abläufe.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Warum das gerade regional wichtig ist
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Viele Betriebe arbeiten mit knappen Kapazitäten. Wenn Anfragen sauberer
              gefiltert, Informationen schneller bereitgestellt und Prozesse klarer
              vorbereitet werden, entsteht spürbar mehr Ruhe im Tagesgeschäft.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
