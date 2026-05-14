import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenChatbotButton from "@/components/OpenChatbotButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "KI-Agenten für Unternehmen",
  description:
    "KI-Agenten für Unternehmen: Support entlasten, Kundenanfragen automatisieren, Leads qualifizieren und strukturierte Übergaben ermöglichen.",
  path: "/leistungen/ki-agenten",
});

export default function KIAgentenPage() {
  return (
    <main>
      <PageHero
        eyebrow="KI-Agenten"
        title="KI-Agenten für Beratung, Support und Anfrageaufnahme"
        description="KI-Agenten beantworten Fragen, qualifizieren Anliegen, erfassen relevante Daten und übergeben Gespräche strukturiert an das richtige Team."
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                Problem
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
                Kundenfragen, Leads und Supportanfragen kosten täglich Zeit.
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  "Wiederkehrende Fragen landen manuell im Team.",
                  "Leads kommen ohne Struktur oder Vorqualifizierung an.",
                  "Supportanliegen werden ungefiltert weitergegeben.",
                  "Zwischen Anfrage und Antwort entstehen unnötige Wartezeiten.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#0B1220]/12 bg-[linear-gradient(160deg,#0B1220_0%,#1E3352_100%)] p-8 text-white shadow-[0_20px_60px_rgba(11,18,32,0.22)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
                Lösung
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Ein KI-Agent beantwortet, fragt ab, qualifiziert und übergibt sauber weiter.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/74">
                Statt dass jeder Erstkontakt komplett manuell bearbeitet wird, übernimmt ein KI-Agent
                den ersten Dialog, sammelt relevante Informationen und bereitet die Übergabe ans Team vor.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Fragen beantworten",
                  "Daten gezielt abfragen",
                  "Anliegen qualifizieren",
                  "Gespräche strukturiert übergeben",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Einsatzfelder
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Support",
                  text: "Ein KI-Agent beantwortet wiederkehrende Anfragen und entlastet das Team bei Standardfällen.",
                },
                {
                  title: "Lead-Qualifizierung",
                  text: "Interessenten werden vorqualifiziert, bevor sie in Vertrieb oder Beratung übergehen.",
                },
                {
                  title: "Terminvorbereitung",
                  text: "Terminwünsche, Kontaktdaten und Kontext werden vor dem Gespräch bereits sauber erfasst.",
                },
                {
                  title: "FAQ",
                  text: "Häufige Fragen lassen sich rund um die Uhr beantworten, ohne dass Mitarbeiter eingreifen müssen.",
                },
                {
                  title: "Produktberatung",
                  text: "Ein Agent kann Orientierung geben, passende Informationen liefern und Kaufentscheidungen vorbereiten.",
                },
                {
                  title: "Interne Wissensabfrage",
                  text: "Mitarbeiter greifen schneller auf relevantes Wissen zu, statt es manuell zusammensuchen zu müssen.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.9rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)] transition hover:-translate-y-1 hover:border-[var(--accent-2)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.1)]"
                >
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">{item.title}</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                Ergebnis
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Weniger manuelle Antworten",
                  "Schnellere Reaktionszeiten",
                  "Bessere Datenqualität",
                  "Weniger verlorene Anfragen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--ink-2)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                Nächster Schritt
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Wenn du sehen willst, wie ein KI-Agent Anfragen, Support oder Beratungsprozesse
                auf deiner Website übernehmen kann, ist der direkte Test der beste Einstieg.
              </p>
              <OpenChatbotButton className="mt-8 rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
                KI-Agent testen
              </OpenChatbotButton>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="KI-Agent"
        title="Ein KI-Agent wird zum ersten Ansprechpartner und entlastet Ihr Team schon vor dem eigentlichen Gespräch."
        description="Support, Lead-Qualifizierung, FAQ und strukturierte Anfrageaufnahme lassen sich dadurch konsistenter und schneller abbilden."
      />
    </main>
  );
}
