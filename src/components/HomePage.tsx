"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import Footer from "./Footer";

const servicePillars = [
  {
    eyebrow: "KI",
    href: "/ki-agenten",
    title: "KI-Lösungen und Agenten, die im Unternehmen wirklich entlasten",
    text: "Ich entwickle smarte KI-gestützte Lösungen und KI-Agenten, die Informationen schneller verfügbar machen, wiederkehrende Aufgaben vereinfachen und Teams im Alltag konkret unterstützen.",
    bullets: ["KI-Agenten für verschiedene Bereiche", "Schnellere Antworten", "Mehr Entlastung im Tagesgeschäft"],
  },
  {
    eyebrow: "Automatisierung",
    href: "/automatisierung",
    title: "Prozesse automatisieren statt Zeit zu verlieren",
    text: "Der Fokus liegt auf smartem Business: weniger manuelle Arbeit, weniger Reibung und klarere digitale Abläufe. So sparen Unternehmen Zeit, senken Kosten und gewinnen operative Ruhe.",
    bullets: ["Automatisierte Routinen", "Klare digitale Workflows", "Weniger Reibung zwischen Aufgaben"],
  },
  {
    eyebrow: "Wachstum",
    href: "/seo-google-ads",
    title: "SEO und Google Ads als Verstärker",
    text: "Wenn die internen Grundlagen stehen, unterstütze ich Unternehmen dabei, auch nach außen sichtbarer zu werden. SEO und Google Ads sind dabei kein Selbstzweck, sondern ein strategisches Nebenprodukt eines smarten Business-Setups.",
    bullets: ["Mehr Sichtbarkeit bei Google", "Bessere Reichweite für relevante Leistungen", "Mehr qualifizierte Anfragen"],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Analyse",
    text: "Wir identifizieren Engpässe, manuelle Zeitfresser und Potenziale für KI und Automatisierung im aktuellen Setup.",
  },
  {
    step: "02",
    title: "Strategie",
    text: "Ich entwickle ein klares Konzept für smarte Prozesse, KI-Einsatz, Automatisierung und bei Bedarf für Sichtbarkeit.",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Die Lösungen werden pragmatisch umgesetzt, priorisiert und an deinen operativen Alltag angepasst.",
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
  "Individuelle KI-Agenten für nahezu jeden Bereich",
  "Fokus auf Zeitersparnis und Kostenkontrolle",
  "SEO und Google Ads als Wachstumsergänzung",
];

const faqItems = [
  {
    question: "Für welche Unternehmen ist das interessant?",
    answer:
      "Vor allem für kleine und mittlere Unternehmen, Dienstleister und lokale Betriebe, die mit KI und Automatisierung effizienter arbeiten und ihr Business smarter aufstellen wollen.",
  },
  {
    question: "Liegt der Fokus auf Marketing oder auf Prozessen?",
    answer:
      "Primär auf smartem Business durch KI und Automatisierung. SEO und Google Ads kommen dann dazu, wenn sie als Verstärker sinnvoll sind und zur Gesamtstrategie passen.",
  },
  {
    question: "Kannst du auch individuelle KI-Agenten bauen?",
    answer:
      "Ja. Ich entwickle individuelle KI-Agenten und Automationen für unterschiedliche Bereiche, zum Beispiel für Support, interne Prozesse, Anfragen, Wissenszugriff, Marketing oder andere wiederkehrende Aufgaben im Unternehmen.",
  },
  {
    question: "Wo spart ein Unternehmen konkret Zeit und Kosten?",
    answer:
      "Zum Beispiel bei manuellen Rückfragen, wiederkehrenden Standardaufgaben, ineffizienten Abstimmungen, langsamer Lead-Bearbeitung oder fehlenden digitalen Prozessen.",
  },
  {
    question: "Arbeitest du projektbasiert oder langfristig?",
    answer:
      "Beides ist möglich. Manche Unternehmen brauchen einen gezielten Einstieg in KI und Automatisierung, andere wollen ihr smartes Business laufend weiterentwickeln.",
  },
];

const seoEntryPages = [
  {
    title: "KI-Agenten für Unternehmen",
    href: "/ki-agenten",
    text: "Individuelle Agentenlösungen für Support, Prozesse, Wissen und Anfragen.",
  },
  {
    title: "Automatisierung für Unternehmen",
    href: "/automatisierung",
    text: "Wiederkehrende Aufgaben reduzieren und digitale Workflows sauberer aufbauen.",
  },
  {
    title: "SEO und Google Ads",
    href: "/seo-google-ads",
    text: "Mehr Sichtbarkeit als gezielte Wachstumsergänzung auf starkem Fundament.",
  },
  {
    title: "SEO und Google Ads in Limburg",
    href: "/seo-google-ads-limburg",
    text: "Regionale Sichtbarkeit für Unternehmen in Limburg und Umgebung.",
  },
];

const casePages = [
  {
    title: "Case: KI-Agent und Anfrageprozess für Dienstleister",
    href: "/case-ki-agent-dienstleister",
    text: "Ein Beispiel dafür, wie Anfragen schneller qualifiziert und Prozesse entlastet werden können.",
  },
  {
    title: "Case: Automatisierung und Sichtbarkeit für regionalen Betrieb",
    href: "/case-automatisierung-regionaler-betrieb",
    text: "Ein Szenario, wie interne Abläufe und digitale Sichtbarkeit gleichzeitig verbessert werden können.",
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const revealUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, ease: "easeOut" as const },
  };

  return (
    <>
      <main className="overflow-hidden bg-[var(--surface-0)] text-[var(--ink-1)]">
        <section className="relative isolate">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(216,232,255,0.9),_transparent_38%),radial-gradient(circle_at_85%_15%,_rgba(255,217,176,0.55),_transparent_26%),linear-gradient(180deg,_#f6f8fc_0%,_#eef3f8_58%,_#ffffff_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.5),transparent_78%)]" />
          <div className="hero-orb pointer-events-none absolute left-[8%] top-28 h-56 w-56 rounded-full bg-[rgba(31,79,134,0.08)] blur-3xl" />
          <div className="hero-orb hero-orb-delay pointer-events-none absolute right-[10%] top-16 h-64 w-64 rounded-full bg-[rgba(245,166,91,0.12)] blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 md:pb-28 md:pt-8">
            <motion.header
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-[var(--line)] bg-white/78 px-4 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row sm:items-center sm:rounded-full sm:px-6 sm:py-3"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-black.png"
                  alt="Soule Smart Business"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full object-cover md:h-16 md:w-16"
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
                className="w-full rounded-full bg-[var(--ink-1)] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[var(--accent-2)] sm:w-auto sm:px-5 sm:py-2.5"
              >
                Strategiegespräch anfragen
              </button>
            </motion.header>

            <div className="grid gap-12 pt-12 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pt-24">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--ink-2)] shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
                  <span className="truncate sm:whitespace-normal">
                    KI nutzen. Agenten bauen. Prozesse automatisieren. Business smarter machen.
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
                  className="mt-8 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--ink-1)] sm:text-5xl md:text-7xl"
                >
                  Smart Business für Unternehmen, die mit KI und Automatisierung Zeit und Kosten sparen wollen.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.7, ease: "easeOut" }}
                  className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8 md:text-xl"
                >
                  Ich helfe Unternehmen dabei, KI sinnvoll einzusetzen, Prozesse zu
                  automatisieren und individuelle KI-Agenten für nahezu jeden Bereich zu
                  entwickeln. SEO und Google Ads unterstützen dabei als Ergänzung, um
                  mehr Sichtbarkeit und qualifizierte Anfragen zu erreichen.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.7, ease: "easeOut" }}
                  className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
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

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--ink-2)]">
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
                className="relative float-gentle"
              >
                <div className="absolute -inset-5 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(216,232,255,0.4))] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(160deg,#10233f_0%,#163256_45%,#0f1728_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
                  <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="pointer-events-none absolute right-6 top-6 h-28 w-28 rounded-full border border-white/10 bg-white/[0.03] blur-2xl" />
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
                      <div className="mt-2 text-3xl font-semibold">Agenten</div>
                      <div className="mt-2 text-sm text-white/70">
                        für Support, Prozesse, Wissen und mehr
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <div className="text-sm text-white/55">Wachstum</div>
                      <div className="mt-2 text-3xl font-semibold">klarer</div>
                      <div className="mt-2 text-sm text-white/70">
                        SEO und Ads als sinnvoller Verstärker
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                        Einsatzfelder
                      </div>
                      <div className="mt-3 text-sm leading-6 text-white/78">
                        Support, Lead-Qualifizierung, Wissenszugriff, interne Prozesse,
                        Automationen und individuelle KI-Agenten.
                      </div>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                        Fokus
                      </div>
                      <div className="mt-3 text-sm leading-6 text-white/78">
                        Weniger Reibung im Alltag, schnellere Abläufe und ein Setup, das
                        spürbar entlastet.
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
                        "KI-Agenten",
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
                KI-Agenten, KI und Automationen schaffen mehr Klarheit im operativen Alltag.
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
                Weniger Chaos in operativen Abläufen bedeutet mehr Raum für Wachstum und Sichtbarkeit.
              </p>
            </div>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <motion.div className="max-w-2xl" {...revealUp}>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Leistungen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
              Drei Hebel, die dein Unternehmen smarter aufstellen
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Ich kombiniere operative Optimierung mit digitaler Sichtbarkeit. Das Ziel
              ist nicht einfach nur ein modernes Auftreten, sondern ein smartes System,
              das mit KI, KI-Agenten und Automatisierung im Alltag funktioniert und Wachstum unterstützt.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {servicePillars.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
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
                <Link
                  href={item.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition hover:gap-3"
                >
                  Mehr erfahren
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--ink-1)] text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-10">
            <motion.div {...revealUp}>
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
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              <motion.div
                {...revealUp}
                transition={{ duration: 0.5, delay: 0.02, ease: "easeOut" }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="text-lg font-semibold">SEO mit Substanz</div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Ich optimiere Struktur, Inhalte und Seitenlogik so, dass dein Unternehmen
                  relevanter gefunden wird und Suchmaschinen dein Angebot klarer verstehen.
                </p>
              </motion.div>
              <motion.div
                {...revealUp}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="text-lg font-semibold">Google Ads mit Fokus</div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Keine Anzeigen ohne Richtung. Kampagnen werden an Leistungen, Zielgruppen
                  und echte Business-Ziele gekoppelt, statt einfach nur Budget zu verbrennen.
                </p>
              </motion.div>
              <motion.div
                {...revealUp}
                transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7 md:col-span-2"
              >
                <div className="text-lg font-semibold">Website als Basis für Automatisierung und Sichtbarkeit</div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Deine Website soll nicht nur gut aussehen. Sie soll Informationen klar
                  transportieren, Prozesse unterstützen, KI-Lösungen anschlussfähig
                  machen und Besucher in qualifizierte Kontaktanfragen führen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <motion.div {...revealUp}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
                Zusammenarbeit
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
                Klar, strukturiert und auf Wirkung ausgelegt
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Ich arbeite nicht nach dem Prinzip "ein bisschen von allem", sondern mit
                klarer Priorisierung. Erst kommen KI, Automatisierung und smarte Prozesse,
                einschließlich individueller Agentenlösungen, dann die passenden Wachstumshebel nach außen.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-1)]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
            <motion.div
              {...revealUp}
              className="grid gap-6 rounded-[2.2rem] border border-[var(--line)] bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)] md:grid-cols-[1fr_0.9fr] md:p-10"
            >
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
                  Warum ich
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
                  Technologie soll Unternehmen entlasten, nicht überfordern.
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
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: "easeOut" }}
                    className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-1)] p-5 text-sm leading-7 text-[var(--ink-2)]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <motion.div className="max-w-3xl" {...revealUp}>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              SEO-Struktur
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
              Wichtige Einstiegsseiten für Google und Besucher
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Damit Google die Themen sauber einordnen kann, sind die wichtigsten
              Leistungen und Suchintentionen auf eigene Seiten verteilt. Das verbessert
              interne Verlinkung, Keyword-Klarheit und thematische Tiefe.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {seoEntryPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-xl font-semibold text-[var(--ink-1)]">{page.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{page.text}</p>
                <Link
                  href={page.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition hover:gap-3"
                >
                  Seite ansehen
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--surface-1)]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
            <motion.div className="max-w-3xl" {...revealUp}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
                Cases
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
                Beispiel-Szenarien für reale Unternehmensprobleme
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                Cases helfen nicht nur bei Vertrauen und Conversion, sondern auch bei SEO.
                Sie zeigen Google und Besuchern, wie KI, Automatisierung und Sichtbarkeit
                konkret zusammenspielen können.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {casePages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--ink-1)]">{page.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">{page.text}</p>
                  <Link
                    href={page.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition hover:gap-3"
                  >
                    Case ansehen
                    <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              FAQ
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink-1)] md:text-5xl">
              Häufige Fragen
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-[1.6rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-lg font-semibold text-[var(--ink-1)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10">
          <div className="mx-auto max-w-6xl rounded-[2.4rem] bg-[linear-gradient(135deg,#122541_0%,#183a60_52%,#0f1728_100%)] px-8 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)] md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
                  Nächster Schritt
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Lass uns herausfinden, wo dein Unternehmen smarter werden kann.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  In einem unverbindlichen Gespräch schauen wir auf Prozesse,
                  KI-Potenziale, Automatisierung und konkrete Optimierungspotenziale.
                  Klar, praxisnah und ohne Verkaufsdruck.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full bg-white px-7 py-4 text-base font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]"
                >
                  Strategiegespräch anfragen
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
