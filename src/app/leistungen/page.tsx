import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceCards } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Überblick über die Leistungen von Soulé Smart Business: Websites, KI-Automation, Beratungsassistent, Sichtbarkeit und digitale Anfrageprozesse.",
};

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        title="Alle Leistungen in einer klaren Übersicht."
        description="Von modernen Websites über KI-Automation bis zum eigenen Beratungsassistenten: Jede Leistung bekommt eine eigene Seite mit klarem Einstieg."
      />

      <Section>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Beratung"
        title="Nicht sicher, welcher Einstieg für dein Unternehmen sinnvoll ist?"
        description="Dann ist der Chatbot oder ein kurzes Gespräch der beste erste Schritt. So klären wir priorisiert, welche Lösung zuerst Wirkung bringt."
      />
    </main>
  );
}
