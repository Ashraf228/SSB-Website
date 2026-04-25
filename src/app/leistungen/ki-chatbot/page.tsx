import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import ChatbotWidgetPlaceholder from "@/components/ChatbotWidgetPlaceholder";

export const metadata: Metadata = {
  title: "KI-Chatbot",
  description:
    "Eigener KI-Chatbot und Beratungsassistent von Soulé Smart Business für FAQs, strukturierte Anfragen und vorbereitete Beratungsgespräche.",
};

export default function KIChatbotPage() {
  return (
    <main>
      <PageHero
        eyebrow="KI-Chatbot"
        title="Ein eigener Beratungsassistent für FAQs, Erstgespräche und strukturierte Anfragen."
        description="Der KI-Chatbot von Soulé Smart Business ist keine externe Standardlösung, sondern als eigener Assistent gedacht, der Fragen beantwortet, Orientierung gibt und Gespräche vorbereitet."
      />

      <Section>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div className="grid gap-6">
            {[
              {
                title: "FAQs beantworten",
                text: "Häufige Fragen lassen sich direkt im Chat beantworten, ohne dass Besucher erst nach Informationen suchen oder eine E-Mail schreiben müssen.",
              },
              {
                title: "Beratung vorbereiten oder übernehmen",
                text: "Der Assistent kann erste Informationen aufnehmen, den Bedarf strukturieren und die Grundlage für ein späteres Gespräch schaffen.",
              },
              {
                title: "Kundenanfragen strukturieren",
                text: "Statt unklarer Erstkontakte entstehen klarere Anliegen, bessere Vorqualifizierung und ein sauberer Übergang in den nächsten Schritt.",
              },
              {
                title: "Widget als nächster Ausbauschritt",
                text: "Später kann der Assistent als fest eingebundenes Widget auf der Website Besucher beraten und erste Einschätzungen direkt übernehmen.",
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

          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
              Widget Vorschau
            </div>
            <ChatbotWidgetPlaceholder mode="inline" />
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Chat als Einstieg"
        title="Der Chatbot wird zum primären Beratungs-CTA auf der gesamten Website."
        description="So erhalten Besucher schneller Orientierung, während dein Unternehmen strukturiertere und besser vorbereitete Anfragen bekommt."
      />
    </main>
  );
}
