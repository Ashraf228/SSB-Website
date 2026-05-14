"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import OpenContactButton from "./OpenContactButton";
import Section from "./Section";
import UseCaseProofSection from "./UseCaseProofSection";

const problemCards = [
  {
    title: "Wiederkehrende Kundenfragen",
    problem: "Standardfragen landen immer wieder manuell beim Team.",
    effect: "Kapazität geht für Antworten verloren, die ein KI-Agent sofort übernehmen könnte.",
  },
  {
    title: "Manuelle Anfragebearbeitung",
    problem: "Erstkontakte werden gelesen, sortiert und einzeln eingeordnet.",
    effect: "Wertvolle Zeit wird schon vor dem eigentlichen Gespräch verbraucht.",
  },
  {
    title: "Unstrukturierte Leads",
    problem: "Interessenten kommen mit zu wenig Kontext im Unternehmen an.",
    effect: "Vertrieb und Beratung starten mit Lücken statt mit Klarheit.",
  },
  {
    title: "Support ohne Vorqualifizierung",
    problem: "Anliegen werden ungefiltert an Mitarbeiter weitergegeben.",
    effect: "Antwortzeiten steigen und Teams arbeiten unnötig reaktiv.",
  },
  {
    title: "Interne Wissenssuche",
    problem: "Informationen liegen verteilt in Dokumenten, Postfächern und Köpfen.",
    effect: "Antworten dauern länger und Wissen bleibt im Alltag schlecht nutzbar.",
  },
  {
    title: "Langsame Reaktionszeiten",
    problem: "Zwischen Anfrage, Antwort und nächstem Schritt entstehen Wartezeiten.",
    effect: "Interessenten springen ab und Prozesse ziehen sich unnötig.",
  },
];

const agentCards = [
  {
    title: "KI-Support-Agent",
    task: "Übernimmt wiederkehrende Fragen und Standardanliegen im Erstkontakt.",
    benefit: "Support-Teams werden entlastet und Kunden erhalten schneller Orientierung.",
    action: "Beispiel: beantwortet FAQs und bereitet Supportfälle vor.",
  },
  {
    title: "KI-Lead-Agent",
    task: "Qualifiziert Interessenten vor und sammelt die wichtigsten Informationen.",
    benefit: "Vertrieb und Beratung starten mit klareren, besser vorbereiteten Leads.",
    action: "Beispiel: fragt Bedarf, Priorität und Kontext strukturiert ab.",
  },
  {
    title: "KI-Termin-Agent",
    task: "Erkennt Terminwünsche und bereitet die Übergabe sauber vor.",
    benefit: "Weniger Abstimmungsaufwand und schnellere Terminvereinbarung.",
    action: "Beispiel: erfasst Kontaktdaten und Anliegen für das Gespräch.",
  },
  {
    title: "KI-Wissensdatenbank",
    task: "Liefert auf Basis definierter Inhalte schnell die richtigen Antworten.",
    benefit: "Wissen wird sofort nutzbar, statt in Dokumenten oder Köpfen zu stecken.",
    action: "Beispiel: ruft interne Prozessinfos oder Produktwissen im Dialog ab.",
  },
  {
    title: "KI-E-Commerce-Agent",
    task: "Unterstützt Kunden bei Orientierung, Produktauswahl und Kaufvorbereitung.",
    benefit: "Mehr Klarheit im Shop und weniger Beratungsaufwand für Standardfragen.",
    action: "Beispiel: empfiehlt passende Produkte oder beantwortet Kaufhürden.",
  },
  {
    title: "KI-Prozess-Agent",
    task: "Startet definierte Abläufe und übernimmt wiederkehrende Arbeitsschritte.",
    benefit: "Teams gewinnen Zeit, weil Prozesse nicht mehr komplett manuell laufen.",
    action: "Beispiel: stößt Workflows an und bereitet Folgeaktionen automatisch vor.",
  },
];

const useCases = [
  "Erstkontakt mit Kunden",
  "FAQ beantworten",
  "Daten abfragen",
  "Anliegen klassifizieren",
  "Tickets vorbereiten",
  "Produktempfehlungen geben",
  "Termine vorbereiten",
  "Mitarbeiterwissen abrufen",
  "E-Mails vorbereiten",
  "Workflows starten",
];

const taskSteps = [
  "Anfrage erkannt",
  "Kunde vorqualifiziert",
  "Antwort vorbereitet",
  "Terminwunsch erfasst",
  "Übergabe an Team möglich",
];

const processPreviewSteps = [
  {
    step: "01",
    title: "Analyse",
    text: "Wir prüfen, wo Anfragen, Support oder interne Abläufe aktuell unnötig Zeit und Kapazität binden.",
  },
  {
    step: "02",
    title: "Agentenkonzept",
    text: "Darauf aufbauend definieren wir, welche Agenten, Daten und Automationen in Ihrem Fall sinnvoll sind.",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Der Agent wird technisch aufgebaut, inhaltlich vorbereitet und auf Ihren Anwendungsfall zugeschnitten.",
  },
  {
    step: "04",
    title: "Integration",
    text: "Wir binden den KI-Agenten in Website, Anfragewege, Support oder interne Prozesse ein.",
  },
  {
    step: "05",
    title: "Optimierung",
    text: "Nach dem Start werden Antworten, Übergaben und Abläufe auf reale Nutzung und Wirkung geschärft.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate px-6 pb-18 pt-16 md:px-10 md:pb-24 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(30,51,82,0.26),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(245,166,91,0.12),transparent_20%),linear-gradient(180deg,#f8fafc_0%,#eef3f9_48%,#ffffff_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(16,24,40,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,40,0.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_78%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-[-18%] flex items-center justify-center md:right-[-8%]">
          <img
            src="/logo-mark.png"
            alt=""
            aria-hidden="true"
            className="h-[22rem] w-[22rem] object-contain opacity-[0.08] blur-3xl sm:h-[30rem] sm:w-[30rem] md:h-[38rem] md:w-[38rem] lg:h-[48rem] lg:w-[48rem]"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/82 px-4 py-2 text-sm text-[var(--ink-2)] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
              KI-Agenten und Automatisierung für Unternehmen
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, delay: 0.06, ease: "easeOut" }}
              className="mt-8 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--ink-1)] sm:text-5xl md:text-7xl"
            >
              KI-Agenten, die Arbeit abnehmen – nicht nur Fragen beantworten
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, delay: 0.14, ease: "easeOut" }}
              className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]"
            >
              Wir entwickeln KI-Lösungen, die Kundenanfragen beantworten, Leads qualifizieren,
              Support entlasten und wiederkehrende Prozesse automatisieren.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, delay: 0.22, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <OpenContactButton className="rounded-full bg-[var(--ink-1)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(11,18,32,0.18)] transition hover:bg-[var(--accent-2)]">
                KI-Potenzial prüfen
              </OpenContactButton>
              <Link
                href="/leistungen"
                className="rounded-full border border-[var(--line-strong)] bg-white/72 px-7 py-4 text-center text-base font-semibold text-[var(--ink-1)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
              >
                Lösungen ansehen
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-3 text-sm text-[var(--ink-2)] sm:grid-cols-2">
              {[
                "Kundenanfragen automatisieren",
                "Support entlasten",
                "Leads besser vorbereiten",
                "Repetitive Arbeit reduzieren",
              ].map((item) => (
                <div key={item} className="rounded-full border border-[var(--line)] bg-white/78 px-4 py-3 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(30,51,82,0.28),rgba(255,255,255,0.12))] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(160deg,#0B1220_0%,#16263f_48%,#0B1220_100%)] p-8 text-white shadow-[0_34px_100px_rgba(11,18,32,0.3)]">
              <div className="pointer-events-none absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" />
              <div className="text-sm uppercase tracking-[0.3em] text-white/45">Live Agent Flow</div>
              <h2 className="mt-3 max-w-lg text-2xl font-semibold leading-tight">
                Ein KI-Agent erkennt Anliegen, strukturiert Informationen und bereitet den nächsten Schritt vor.
              </h2>

              <div className="mt-8 space-y-3">
                {taskSteps.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 transition hover:border-white/18 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-white/70">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-white/84">{item}</span>
                    </div>
                    <span className="rounded-full border border-emerald-400/18 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      aktiv
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="text-sm text-white/52">Ergebnis</div>
                  <div className="mt-2 text-3xl font-semibold">klarer</div>
                  <div className="mt-2 text-sm text-white/70">Anfragen, Antworten und nächste Schritte</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="text-sm text-white/52">Effekt</div>
                  <div className="mt-2 text-3xl font-semibold">weniger</div>
                  <div className="mt-2 text-sm text-white/70">manuelle Reibung im Tagesgeschäft</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Problem
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
              Wo Unternehmen täglich Zeit verlieren
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {problemCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
                className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)] transition hover:-translate-y-1 hover:border-[var(--accent-2)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.1)]"
              >
                <div className="text-lg font-semibold text-[var(--ink-1)]">{item.title}</div>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.problem}</p>
                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--ink-2)]">
                  Geschäftlicher Effekt: {item.effect}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--surface-1)]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              KI-Agenten
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
              Digitale Mitarbeiter für wiederkehrende Aufgaben
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {agentCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.42, delay: index * 0.03, ease: "easeOut" }}
                className="group rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)] transition hover:-translate-y-1 hover:border-[var(--accent-2)] hover:shadow-[0_26px_70px_rgba(11,18,32,0.12)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">{item.title}</div>
                  <span className="rounded-full border border-emerald-500/18 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                    24/7 einsatzbereit
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  <span className="font-medium text-[var(--ink-1)]">Aufgabe:</span> {item.task}
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  <span className="font-medium text-[var(--ink-1)]">Nutzen:</span> {item.benefit}
                </p>
                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--ink-2)] transition group-hover:border-[var(--accent-2)]">
                  {item.action}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Use Cases
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
              Typische Aufgaben, die ein KI-Agent übernehmen kann
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-[var(--line)] bg-white px-5 py-5 text-sm font-medium text-[var(--ink-1)] shadow-[0_14px_34px_rgba(11,18,32,0.04)] transition hover:-translate-y-1 hover:border-[var(--accent-2)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <UseCaseProofSection className="bg-[var(--surface-1)]" />

      <Section className="bg-[var(--surface-1)]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Vorher
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
              Von manueller Arbeit zu automatisierten Abläufen
            </h2>
            <div className="mt-8 space-y-3">
              {[
                "Viele Rückfragen",
                "Verstreute Informationen",
                "Manuelle Bearbeitung",
                "Lange Antwortzeiten",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#0B1220]/12 bg-[linear-gradient(160deg,#0B1220_0%,#1E3352_100%)] p-8 text-white shadow-[0_20px_60px_rgba(11,18,32,0.22)]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
              Nachher
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Strukturierte Anfragen",
                "Automatische Antworten",
                "Schnellere Bearbeitung",
                "Entlastete Mitarbeiter",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white/82">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Prozess
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
              Analyse → Agentenkonzept → Umsetzung → Integration → Optimierung
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processPreviewSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_34px_rgba(11,18,32,0.04)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                  Schritt {item.step}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[var(--ink-1)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 pb-8 pt-6 md:px-10 md:pb-12">
        <div className="mx-auto max-w-6xl rounded-[2.3rem] bg-[linear-gradient(135deg,#0B1220_0%,#1E3352_100%)] px-8 py-12 text-white shadow-[0_28px_90px_rgba(11,18,32,0.28)] md:px-12">
          <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">
                Nächster Schritt
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Finden wir heraus, wo KI in Ihrem Unternehmen sofort Zeit spart.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                In einem kurzen Gespräch prüfen wir, welche wiederkehrenden Aufgaben sich automatisieren
                lassen und welcher KI-Agent für Ihr Unternehmen sinnvoll ist.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <OpenContactButton className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
                Kostenlose Analyse anfragen
              </OpenContactButton>
              <Link
                href="/leistungen"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Lösungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
