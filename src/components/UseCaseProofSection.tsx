"use client";

import { motion } from "framer-motion";
import OpenContactButton from "./OpenContactButton";

const scenarios = [
  {
    title: "Handwerksbetrieb",
    before:
      "Viele Anrufe, unvollständige Anfragen und wiederholte Rückfragen binden Kapazität schon vor dem eigentlichen Einsatz.",
    agent:
      "Der KI-Agent fragt Anliegen, Ort, Dringlichkeit und Kontaktdaten strukturiert ab und bereitet den nächsten Schritt vor.",
    after:
      "Anfragen kommen klarer an, Termine und Einsätze lassen sich besser vorbereiten und der Telefonaufwand sinkt.",
  },
  {
    title: "E-Commerce-Shop",
    before:
      "Wiederkehrende Fragen zu Produkten, Versand und Retouren kosten Zeit und bremsen Kaufentscheidungen aus.",
    agent:
      "Der KI-Agent beantwortet Standardfragen, empfiehlt passende Produkte und unterstützt bei der Orientierung im Shop.",
    after:
      "Weniger Supportaufwand, bessere Beratung im Kaufprozess und weniger unnötige Abbrüche bei offenen Fragen.",
  },
  {
    title: "IT-Systemhaus",
    before:
      "Einfache Supportfälle blockieren das Team, obwohl viele Anliegen zuerst sauber erfasst und vorbereitet werden könnten.",
    agent:
      "Der KI-Agent klassifiziert Anfragen, fragt relevante technische Daten ab und bereitet Tickets strukturiert vor.",
    after:
      "Bessere Tickets, schnellere Bearbeitung und mehr Fokus für das Team auf die wirklich komplexen Fälle.",
  },
];

const proofSignals = [
  "weniger manuelle Rückfragen",
  "schnellere Vorqualifizierung",
  "strukturiertere Übergaben",
  "bessere Erreichbarkeit",
  "messbare Entlastung nach Einführung prüfbar",
];

type UseCaseProofSectionProps = {
  eyebrow?: string;
  title?: string;
  className?: string;
};

export default function UseCaseProofSection({
  eyebrow = "Proof & Use Cases",
  title = "Beispielhafte KI-Agenten im Einsatz",
  className = "",
}: UseCaseProofSectionProps) {
  return (
    <section className={`px-6 py-16 md:px-10 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Die folgenden Beispiele zeigen typische Einsatzmöglichkeiten. Ergebnisse hängen vom
            Prozess, Datenbestand und Einsatzbereich ab.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <motion.article
              key={scenario.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.42, delay: index * 0.04, ease: "easeOut" }}
              className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_16px_44px_rgba(11,18,32,0.06)] transition hover:-translate-y-1 hover:border-[rgba(30,51,82,0.24)] hover:shadow-[0_26px_70px_rgba(11,18,32,0.12)]"
            >
              <div className="border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(248,250,252,1)_0%,rgba(243,244,246,0.92)_100%)] px-7 py-6">
                <div className="inline-flex rounded-full border border-[rgba(30,51,82,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                  Beispiel-Szenario
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                  {scenario.title}
                </h3>
              </div>

              <div className="space-y-5 p-7">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Vorher
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{scenario.before}</p>
                </div>

                <div className="rounded-[1.6rem] border border-[rgba(30,51,82,0.14)] bg-[var(--surface-0)] px-5 py-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    KI-Agent
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--ink-2)]">{scenario.agent}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                    Nachher
                  </div>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{scenario.after}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Einordnung
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-4xl">
              Geschäftlicher Nutzen zeigt sich vor allem in Struktur und Entlastung.
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Nicht jede Einführung sieht gleich aus. Der entscheidende Punkt ist, ob Anfragen
              klarer ankommen, Übergaben sauberer laufen und wiederkehrende Kommunikation
              kontrolliert reduziert wird.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[rgba(30,51,82,0.18)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] p-8 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
              Prüffelder
            </div>
            <div className="mt-6 space-y-4">
              {proofSignals.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/84"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <OpenContactButton className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
              KI-Potenzial prüfen
            </OpenContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
