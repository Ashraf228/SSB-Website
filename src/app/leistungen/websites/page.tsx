import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import OpenChatbotButton from "@/components/OpenChatbotButton";
import OpenContactButton from "@/components/OpenContactButton";

export const metadata: Metadata = {
  title: "Website-Erstellung",
  description:
    "Moderne responsive Websites mit klarer Struktur, Google-gerechtem Aufbau und starker Anfrageführung für Unternehmen.",
};

export default function WebsitesLeistungPage() {
  return (
    <main>
      <PageHero
        eyebrow="Website-Erstellung"
        title="Moderne Websites, die Vertrauen aufbauen und Anfragen klar führen."
        description="Websites sind oft der erste Kontaktpunkt. Deshalb müssen sie nicht nur hochwertig wirken, sondern Nutzer sauber durch Inhalte, Leistungen und Anfragewege führen."
      />

      <Section>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            {
              title: "Responsive und modern",
              text: "Saubere Darstellung auf Desktop, Tablet und Mobile mit einem klaren Premium-Auftritt, der zur Marke passt.",
            },
            {
              title: "Google-gerechter Aufbau",
              text: "Klare Seitenlogik, verständliche Inhalte und eine Struktur, die Suchmaschinen dein Angebot leichter einordnen lässt.",
            },
            {
              title: "Conversion-Struktur",
              text: "Wichtige Informationen, klare CTAs und eine Nutzerführung, die Besucher zielgerichtet zu Anfrage oder Beratung führt.",
            },
            {
              title: "Kontakt- und Anfrageführung",
              text: "Formulare, Beratungseinstiege und spätere KI-Elemente werden so eingebunden, dass aus Besuchern leichter echte Anfragen werden.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 sm:flex-row">
          <OpenChatbotButton className="rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
            KI-Beratung starten
          </OpenChatbotButton>
          <OpenContactButton className="rounded-full border border-[var(--line-strong)] px-6 py-4 text-sm font-semibold text-[var(--ink-1)] transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]">
            Gespräch anfragen
          </OpenContactButton>
        </div>
      </Section>

      <CTASection
        eyebrow="Nächster Schritt"
        title="Wenn die Website sauber steht, werden Sichtbarkeit und Prozesse deutlich wirksamer."
        description="Deshalb ist der Webauftritt bei Soulé Smart Business nie nur Design, sondern Teil einer klaren digitalen Struktur."
      />
    </main>
  );
}
