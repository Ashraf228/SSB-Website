"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import OpenChatbotButton from "./OpenChatbotButton";
import OpenContactButton from "./OpenContactButton";
import CTASection from "./CTASection";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import { founderHighlights, navLinks, serviceCards } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,51,82,0.16),_transparent_34%),radial-gradient(circle_at_85%_12%,_rgba(11,18,32,0.08),_transparent_26%),linear-gradient(180deg,_#f8fafc_0%,_#f3f4f6_56%,_#ffffff_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.5),transparent_80%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-[-18%] flex items-center justify-center md:right-[-10%]">
          <img
            src="/logo-mark.png"
            alt=""
            aria-hidden="true"
            className="h-[22rem] w-[22rem] object-contain opacity-[0.08] blur-3xl sm:h-[28rem] sm:w-[28rem] md:h-[36rem] md:w-[36rem] lg:h-[46rem] lg:w-[46rem]"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--ink-2)] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
              KI, Automatisierung und digitale Struktur für moderne Unternehmen
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.06, ease: "easeOut" }}
              className="mt-8 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink-1)] sm:text-5xl md:text-7xl"
            >
              Digitale Lösungen, die nicht nur gut aussehen, sondern dein Unternehmen
              smarter arbeiten lassen.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.14, ease: "easeOut" }}
              className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]"
            >
              Soulé Smart Business verbindet moderne Websites, KI-Automation, digitale
              Anfrageprozesse und einen eigenen Beratungsassistenten zu einem klaren
              System für Effizienz, Sichtbarkeit und bessere Abläufe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.22, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <OpenChatbotButton className="rounded-full bg-[var(--ink-1)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(11,18,32,0.18)] transition hover:bg-[var(--accent-2)]">
                KI-Beratung starten
              </OpenChatbotButton>
              <OpenContactButton className="rounded-full border border-[var(--line-strong)] bg-white/70 px-7 py-4 text-base font-semibold text-[var(--ink-1)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
                Gespräch anfragen
              </OpenContactButton>
            </motion.div>

            <div className="mt-10 grid gap-3 text-sm text-[var(--ink-2)] sm:grid-cols-2">
              {[
                "Websites mit klarer Conversion-Struktur",
                "Eigener KI-Chatbot als Beratungsassistent",
                "Automationen für Anfragen, Termine und Workflows",
                "Premium-Auftritt mit sauberer Nutzerführung",
              ].map((item) => (
                <div key={item} className="rounded-full border border-[var(--line)] bg-white/72 px-4 py-3 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(230,236,244,0.75))] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(160deg,#0B1220_0%,#1E3352_48%,#0B1220_100%)] p-8 text-white shadow-[0_34px_100px_rgba(11,18,32,0.28)]">
              <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="text-sm uppercase tracking-[0.3em] text-white/50">Soulé Smart Business</div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">
                Von der Website bis zum KI-Assistenten auf einer sauberen Struktur aufgebaut.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Website", value: "klar", text: "Auftritt, Struktur und Nutzerführung" },
                  { label: "KI", value: "smart", text: "Beratung, Antworten und Prozesse" },
                  { label: "Abläufe", value: "ruhiger", text: "Weniger manuelle Reibung im Alltag" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    <div className="text-sm text-white/55">{item.label}</div>
                    <div className="mt-2 text-3xl font-semibold">{item.value}</div>
                    <div className="mt-2 text-sm text-white/70">{item.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm font-medium text-white/60">Was Besucher sofort erleben</div>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/78">
                  {[
                    "Leistungen verstehen",
                    "Chatbot testen",
                    "Anfrage vorbereiten",
                    "Beratung anstoßen",
                    "Struktur erkennen",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/12 bg-white/8 px-3 py-2">
                      {item}
                    </span>
                  ))}
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
              Hauptleistungen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
              Ein klarer Überblick über die wichtigsten Lösungen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Die Website führt jetzt bewusst auf eigene Unterseiten, damit Besucher
              schneller verstehen, welche Leistungen es gibt und wo sie direkt einsteigen können.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceCards.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition hover:gap-3"
            >
              Alle Leistungen ansehen
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--surface-1)]">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Warum Soulé Smart Business
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
              Schlank, klar und auf echte Entlastung ausgelegt.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Kein Sammelsurium aus Einzellösungen, sondern ein strukturierter digitaler
              Aufbau, der Website, Beratung, Anfrageprozesse und Automationen miteinander verbindet.
            </p>
          </div>

          <div className="grid gap-5">
            {founderHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_34px_rgba(11,18,32,0.05)]"
              >
                <div className="text-lg font-semibold text-[var(--ink-1)]">{item.title}</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Primärer CTA"
        title="Die Beratung startet zuerst im Chat – und danach, wenn gewünscht, im Gespräch."
        description="Der eigene Beratungsassistent soll später häufige Fragen übernehmen, Orientierung geben und Erstgespräche vorbereiten. Gleichzeitig bleibt das persönliche Gespräch als nächster Schritt erhalten."
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
            Mehr entdecken
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-5xl">
            Weitere Seiten für einen klaren Einstieg.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {navLinks
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[1.6rem] border border-[var(--line)] bg-white px-5 py-5 text-base font-medium text-[var(--ink-1)] shadow-[0_14px_30px_rgba(11,18,32,0.04)] transition hover:-translate-y-1 hover:border-[var(--accent-2)]"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
