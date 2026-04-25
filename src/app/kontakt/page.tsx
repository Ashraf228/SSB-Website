import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import OpenChatbotButton from "@/components/OpenChatbotButton";
import { contactDetails } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Soulé Smart Business: Formular, Telefonnummer, E-Mail, Adresse und Einstieg über den KI-Beratungsassistenten.",
};

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Direkter Kontakt, persönliches Gespräch oder Einstieg über die KI-Beratung."
        description="Das Kontaktformular und die direkte Erreichbarkeit bleiben bestehen. Gleichzeitig wird der Chatbot als primärer Beratungs-CTA vorbereitet."
      />

      <Section>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.95fr]">
          <ContactFormSection />

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                Kontakt
              </div>
              <div className="mt-5 space-y-3 text-base leading-8 text-[var(--muted)]">
                <div>Telefon: {contactDetails.phone}</div>
                <div>E-Mail: {contactDetails.email}</div>
                <div>
                  {contactDetails.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,#0B1220_0%,#1E3352_100%)] p-7 text-white shadow-[0_18px_56px_rgba(11,18,32,0.18)]">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                Primärer Beratungs-CTA
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Der Chatbot soll die erste Einschätzung direkt übernehmen.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                Besucher können so schneller in den Austausch kommen, während Kontaktformulare und persönliche Gespräche als zweiter Schritt bestehen bleiben.
              </p>
              <OpenChatbotButton className="mt-6 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
                KI-Beratung starten
              </OpenChatbotButton>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Persönlich oder digital"
        title="Beides bleibt möglich: direkter Kontakt und ein smarter Beratungseinstieg."
        description="So können Besucher selbst entscheiden, ob sie sofort sprechen oder zunächst digital Orientierung gewinnen möchten."
      />
    </main>
  );
}
