import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenChatbotButton from "@/components/OpenChatbotButton";
import OpenContactButton from "@/components/OpenContactButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Websites als KI-Systembasis",
  description:
    "Websites als Grundlage für KI-Agenten, Kundenanfragen, Leads und Prozesse: klare Nutzerführung, Conversion und technische Systembasis für Unternehmen.",
  path: "/leistungen/websites",
});

export default function WebsitesLeistungPage() {
  return (
    <main>
      <PageHero
        eyebrow="Website-Erstellung"
        title="Websites, die KI-Agenten und digitale Prozesse möglich machen"
        description="Eine moderne Website ist nicht nur digitale Visitenkarte, sondern Einstiegspunkt für Anfragen, Beratung, Lead-Erfassung und Automatisierung."
      />

      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                Systembasis
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
                Die Website ist der Einstiegspunkt für Anfragen, Beratung und Automatisierung.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Eine Website entscheidet darüber, wie klar Nutzer geführt werden, wie gut Anfragen
                entstehen und wie sauber KI-Agenten, Formulare und Prozesse später zusammenarbeiten.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#0B1220]/12 bg-[linear-gradient(160deg,#0B1220_0%,#1E3352_100%)] p-8 text-white shadow-[0_20px_60px_rgba(11,18,32,0.22)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
                Fokus
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Klare Nutzerführung",
                  "Bessere Kontaktanfragen",
                  "Integration von KI-Agenten",
                  "Schnelle Ladezeiten",
                  "Vertrauensbildende Struktur",
                  "SEO als Unterstützung, nicht Hauptangebot",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Klare Anfrageführung",
                text: "Besucher werden sauber zu den richtigen Informationen und zum passenden nächsten Schritt geführt.",
              },
              {
                title: "Technische Grundlage für KI-Agenten",
                text: "Der Webauftritt wird so aufgebaut, dass Chatbot, Formulare, Lead-Erfassung und Automatisierung sinnvoll integriert werden können.",
              },
              {
                title: "Conversion statt nur Design",
                text: "Nicht nur ein schöner Auftritt, sondern ein System, das Anfragen, Beratung und Prozesse unterstützt.",
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

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                Ergebnis
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Mehr qualifizierte Anfragen",
                  "Bessere Conversion",
                  "Technische Grundlage für Automatisierung",
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
                Wenn du prüfen willst, ob dein aktueller Webauftritt als Basis für KI-Agenten,
                Lead-Erfassung und digitale Prozesse tragfähig ist, ist die Analyse der richtige Einstieg.
              </p>
              <OpenContactButton className="mt-8 rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
                Website als KI-Systembasis prüfen
              </OpenContactButton>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Systembasis"
        title="Die Website ist nicht das Endprodukt, sondern die Infrastruktur für Agenten, Anfragen und digitale Abläufe."
        description="Deshalb wird der Webauftritt nicht isoliert als Designprojekt gedacht, sondern als Grundlage für Conversion, KI und Automatisierung."
      />
    </main>
  );
}
