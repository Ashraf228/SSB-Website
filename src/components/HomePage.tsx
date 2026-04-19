"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import Footer from "./Footer";

const servicePillars = [
  {
    eyebrow: "KI",
    title: "KI-Loesungen, die im Unternehmen wirklich entlasten",
    text: "Ich entwickle smarte KI-gestuetzte Loesungen, die Informationen schneller verfuegbar machen, wiederkehrende Aufgaben vereinfachen und Teams im Alltag konkret unterstuetzen.",
    bullets: ["Schnellere Antworten", "Weniger manuelle Rueckfragen", "Mehr Entlastung im Tagesgeschaeft"],
  },
  {
    eyebrow: "Automatisierung",
    title: "Prozesse automatisieren statt Zeit zu verlieren",
    text: "Der Fokus liegt auf smartem Business: weniger manuelle Arbeit, weniger Reibung und klarere digitale Ablaeufe. So sparen Unternehmen Zeit, senken Kosten und gewinnen operative Ruhe.",
    bullets: ["Automatisierte Routinen", "Klare digitale Workflows", "Weniger Reibung zwischen Aufgaben"],
  },
  {
    eyebrow: "Wachstum",
    title: "SEO und Google Ads als Verstaerker",
    text: "Wenn die internen Grundlagen stehen, unterstuetze ich Unternehmen dabei, auch nach aussen sichtbarer zu werden. SEO und Google Ads sind dabei kein Selbstzweck, sondern ein strategisches Nebenprodukt eines smarten Business-Setups.",
    bullets: ["Mehr Sichtbarkeit bei Google", "Bessere Reichweite fuer relevante Leistungen", "Mehr qualifizierte Anfragen"],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Analyse",
    text: "Wir identifizieren Engpaesse, manuelle Zeitfresser und Potenziale fuer KI und Automatisierung im aktuellen Setup.",
  },
  {
    step: "02",
    title: "Strategie",
    text: "Ich entwickle ein klares Konzept fuer smarte Prozesse, KI-Einsatz, Automatisierung und bei Bedarf fuer Sichtbarkeit.",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Die Loesungen werden pragmatisch umgesetzt, priorisiert und an deinen operativen Alltag angepasst.",
  },
  {
    step: "04",
    title: "Optimierung",
    text: "Wir verbessern, was funktioniert, und bauen Prozesse, Automationen und Sichtbarkeit schrittweise weiter aus.",
  },
];

const highlights = [
  "Smart Business statt Einzelmassnahmen",
  "KI und Automatisierung mit Praxisbezug",
  "Fokus auf Zeitersparnis und Kostenkontrolle",
  "SEO und Google Ads als Wachstumsergaenzung",
];

const faqItems = [
  {
    question: "Fuer welche Unternehmen ist das interessant?",
    answer:
      "Vor allem fuer kleine und mittlere Unternehmen, Dienstleister und lokale Betriebe, die mit KI und Automatisierung effizienter arbeiten und ihr Business smarter aufstellen wollen.",
  },
  {
    question: "Liegt der Fokus auf Marketing oder auf Prozessen?",
    answer:
      "Primaer auf smartem Business durch KI und Automatisierung. SEO und Google Ads kommen dann dazu, wenn sie als Verstaerker sinnvoll sind und zur Gesamtstrategie passen.",
  },
  {
    question: "Wo spart ein Unternehmen konkret Zeit und Kosten?",
    answer:
      "Zum Beispiel bei manuellen Rueckfragen, wiederkehrenden Standardaufgaben, ineffizienten Abstimmungen, langsamer Lead-Bearbeitung oder fehlenden digitalen Prozessen.",
  },
  {
    question: "Arbeitest du projektbasiert oder langfristig?",
    answer:
      "Beides ist moeglich. Manche Unternehmen brauchen einen gezielten Einstieg in KI und Automatisierung, andere wollen ihr smartes Business laufend weiterentwickeln.",
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="overflow-hidden bg-[var(--surface-0)] text-[var(--ink-1)]">
        <section className="relative isolate">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(216,232,255,0.9),_transparent_38%),radial-gradient(circle_at_85%_15%,_rgba(255,217,176,0.55),_transparent_26%),linear-gradient(180deg,_#f6f8fc_0%,_#eef3f8_58%,_#ffffff_100%)]" />
          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 md:pb-28 md:pt-8">
            <header className="flex items-center justify-between gap-4 rounded-full border border-[var(--line)] bg-white/78 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur md:px-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-black.png"
                  alt="Soule Smart Business"
                  width={42}
                  height={42}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold tracking-[0.2em] text-[var(--ink-2)] uppercase">
                    Soule Smart Business
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    Smart Business mit KI, Automatisierung und Wachstum
                  </div>
                </div>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-[var(--ink-1)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]"
              >
                Strategiegespraech anfragen
              </button>
            </header>

            <div className="grid gap-12 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pt-24">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--ink-2)] shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
                  KI nutzen. Prozesse automatisieren. Business smarter machen.
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
                  className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--ink-1)] md:text-7xl"
                >
                  Smart Business fuer Unternehmen, die mit KI und Automatisierung Zeit und Kosten sparen wollen.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.7, ease: "easeOut" }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl"
                >
                  Ich helfe Unternehmen dabei, KI sinnvoll einzusetzen, Prozesse zu
                  automatisieren und Arbeitsablaeufe smarter zu gestalten. SEO und Google
                  Ads unterstuetzen dabei als Ergaenzung, um mehr Sichtbarkeit und
                  qualifizierte Anfragen zu erreichen.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.7, ease: "easeOut" }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <button
                    onClick={() => setOpen(true)}
                    className="rounded-full bg-[var(--accent-2)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-[var(--ink-1)]"
                  >
                    Unverbindliche Analyse starten
                  </button>
                  <a
                    href="#leistungen"
                    className="rounded-full border border-[var(--line-strong)] bg-white/70 px-7 py-4 text-base font-semibold text-[var(--ink-1)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
                  >
                    Leistungen ansehen
                  </a>
                </motion.div>

                <div className="mt-10 flex flex-wrap gap-3 text-sm text-[var(--ink-2)]">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-white/72 px-4 py-2 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -inset-5 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(216,232,255,0.4))] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(160deg,#10233f_0%,#163256_45%,#0f1728_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-[0.3em] text-white/50">
                        Business Snapshot
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold leading-tight">
                        Mehr Struktur zwischen KI, Prozessen und operativem Alltag
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                      smart business
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <div className="text-sm text-white/55">Automatisierung</div>
                      <div className="mt-2 text-3xl font-semibold">-20h</div>
                      <div className="mt-2 text-sm text-white/70">
                        weniger manuelle Abstimmung im Monat
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <div className="text-sm text-white/55">KI</div>
                      <div className="mt-2 text-3xl font-semibold">smarter</div>
                      <div className="mt-2 text-sm text-white/70">
                        schnellere Informationen statt Leerlauf
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <div className="text-sm text-white/55">Wachstum</div>
                      <div className="mt-2 text-3xl font-semibold">klarer</div>
                      <div className="mt-2 text-sm text-white/70">
                        SEO und Ads als sinnvoller Verstaerker
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-sm font-medium text-white/60">
                      Typische Hebel
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/78">
                      {[
                        "KI-Workflows",
                        "Automationen",
                        "Digitale Prozesse",
                        "Anfragen filtern",
                        "SEO-Struktur",
                        "Google Ads",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-white/8 px-3 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-[var(--ink-2)] md:grid-cols-4 md:px-10">
            <div>
              <div className="font-semibold text-[var(--ink-1)]">Weniger Leerlauf</div>
              <p className="mt-2 leading-6 text-[var(--muted)]">
                Klare Prozesse statt wiederkehrender Improvisation im Alltag.
              </p>
            </div>
            <div>
              <div className="font-semibold text-[var(--ink-1)]">Mehr Planbarkeit</div>
              <p className="mt-2 leading-6 text-[var(--muted)]">
                KI und Automationen schaffen mehr Klarheit im operativen Alltag.
              </p>
            </div>
            <div>
              <div className="font-semibold text-[var(--ink-1)]">Mehr Effizienz</div>
              <p className="mt-2 leading-6 text-[var(--muted)]">
                Technologie wird dort eingesetzt, wo sie real entlastet.
              </p>
            </div>
            <div>
              <div className="font-semibold text-[var(--ink-1)]">Mehr Fokus</div>
              <p className="mt-2 leading-6 text-[var(--muted)]">
                Weniger Chaos in operativen Ablaeufen bedeutet mehr Raum fuer Wachstum und Sichtbarkeit.
              </p>
            </div>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Leistungen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
              Drei Hebel, die dein Unternehmen smarter aufstellen
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Ich kombiniere operative Optimierung mit digitaler Sichtbarkeit. Das Ziel
              ist nicht einfach nur ein modernes Auftreten, sondern ein smartes System,
              das mit KI und Automatisierung im Alltag funktioniert und Wachstum unterstuetzt.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {servicePillars.map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                  {item.eyebrow}
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-[var(--ink-1)]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                  {item.text}
                </p>
                <div className="mt-6 space-y-3 text-sm text-[var(--ink-2)]">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-1)]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--ink-1)] text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
                Wachstum als Nebenprodukt
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Sichtbarkeit wird wertvoll, wenn die internen Grundlagen stimmen.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Wenn KI, Prozesse und Automatisierung sinnvoll aufgebaut sind, lassen sich
                SEO und Google Ads viel gezielter einsetzen. So wird Sichtbarkeit zu einem
                Hebel, der auf einem starken Fundament aufsetzt.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7">
                <div className="text-lg font-semibold">SEO mit Substanz</div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Ich optimiere Struktur, Inhalte und Seitenlogik so, dass dein Unternehmen
                  relevanter gefunden wird und Suchmaschinen dein Angebot klarer verstehen.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7">
                <div className="text-lg font-semibold">Google Ads mit Fokus</div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Keine Anzeigen ohne Richtung. Kampagnen werden an Leistungen, Zielgruppen
                  und echte Business-Ziele gekoppelt, statt einfach nur Budget zu verbrennen.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7 md:col-span-2">
                <div className="text-lg font-semibold">Website als Basis fuer Automatisierung und Sichtbarkeit</div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Deine Website soll nicht nur gut aussehen. Sie soll Informationen klar
                  transportieren, Prozesse unterstuetzen und Besucher in qualifizierte
                  Kontaktanfragen fuehren.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
                Zusammenarbeit
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
                Klar, strukturiert und auf Wirkung ausgelegt
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Ich arbeite nicht nach dem Prinzip "ein bisschen von allem", sondern mit
                klarer Priorisierung. Erst kommen KI, Automatisierung und smarte Prozesse,
                dann die passenden Wachstumshebel nach aussen.
              </p>
            </div>

            <div className="grid gap-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-2)]">
                        Schritt {step.step}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-[var(--ink-1)]">
                        {step.title}
                      </h3>
                    </div>
                    <div className="rounded-full bg-[var(--surface-1)] px-3 py-1 text-xs font-medium text-[var(--ink-2)]">
                      smart business
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-1)]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
            <div className="grid gap-6 rounded-[2.2rem] border border-[var(--line)] bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)] md:grid-cols-[1fr_0.9fr] md:p-10">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
                  Warum ich
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
                  Technologie soll Unternehmen entlasten, nicht ueberfordern.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Ich verbinde operative Perspektive mit digitalem Denken. Das bedeutet:
                  weniger leere Buzzwords, mehr Klarheit, mehr Umsetzbarkeit und mehr Fokus
                  auf messbare Verbesserung durch smarte Business-Systeme.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Ich denke in Prozessen, nicht nur in Einzelleistungen.",
                  "Ich setze Technologie dort ein, wo sie Zeit und Kosten spart.",
                  "Ich verbinde Website, Sichtbarkeit und operative Optimierung zu einem klaren System.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-1)] p-5 text-sm leading-7 text-[var(--ink-2)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              FAQ
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
              Haeufige Fragen
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.6rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-lg font-semibold text-[var(--ink-1)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10">
          <div className="mx-auto max-w-6xl rounded-[2.4rem] bg-[linear-gradient(135deg,#122541_0%,#183a60_52%,#0f1728_100%)] px-8 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)] md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
                  Naechster Schritt
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Lass uns herausfinden, wo dein Unternehmen smarter werden kann.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  In einem unverbindlichen Gespraech schauen wir auf Prozesse,
                  KI-Potenziale, Automatisierung und konkrete Optimierungspotenziale.
                  Klar, praxisnah und ohne Verkaufsdruck.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full bg-white px-7 py-4 text-base font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]"
                >
                  Strategiegespraech anfragen
                </button>
                <div className="text-sm text-white/60">
                  30 Minuten. Unverbindlich. Direkt auf dein Unternehmen bezogen.
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
