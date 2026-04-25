import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Häufige Fragen zu Websites, KI-Automation, Beratungsassistenten und digitalen Anfrageprozessen bei Soulé Smart Business.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen zu Leistungen, Prozessen und digitalen Lösungen."
        description="Viele Fragen kann später auch der KI-Chatbot direkt beantworten. Diese Seite dient als zentraler Einstieg für wiederkehrende Themen."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <FAQAccordion />
        </div>
      </Section>

      <CTASection
        eyebrow="Schnelle Orientierung"
        title="Der KI-Chatbot soll häufige Fragen später direkt auf der Website beantworten."
        description="So bekommen Besucher sofort eine erste Einschätzung und können bei Bedarf direkt in Beratung oder Anfrage übergehen."
      />
    </main>
  );
}
