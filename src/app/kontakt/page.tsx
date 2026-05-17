import type { Metadata } from "next";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import OpenChatbotButton from "@/components/OpenChatbotButton";
import { contactDetails } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kostenlose KI-Potenzialanalyse",
  description:
    "Kostenlose KI-Potenzialanalyse für Unternehmen: prüfen, wo KI-Agenten Support entlasten, Kundenanfragen automatisieren und Prozesse effizienter machen.",
  path: "/kontakt",
});

const analysisPoints = [
  "Welche Aufgaben täglich Zeit kosten",
  "Welche Kundenfragen sich wiederholen",
  "Wo Anfragen unstrukturiert eingehen",
  "Welche Prozesse automatisiert werden können",
  "Welcher KI-Agent sinnvoll wäre",
];

const fitPoints = [
  "viele wiederkehrende Anfragen erhalten",
  "Support oder Kundenkommunikation entlasten möchten",
  "Leads besser vorqualifizieren wollen",
  "interne Abläufe strukturieren möchten",
  "KI sinnvoll und kontrolliert einsetzen wollen",
];

export default function KontaktPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-12 pt-16 md:px-10 md:pb-14 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,51,82,0.12),_transparent_34%),radial-gradient(circle_at_85%_8%,_rgba(11,18,32,0.08),_transparent_26%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Kontakt
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-6xl">
              Finden wir heraus, wo KI in Ihrem Unternehmen Zeit spart
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              In einem kurzen Gespräch prüfen wir, welche wiederkehrenden Aufgaben sich durch
              KI-Agenten automatisieren lassen – z. B. Support, Leads, Terminabfragen oder
              interne Prozesse.
            </p>
            <div className="mt-8 inline-flex max-w-full rounded-2xl border border-[var(--line)] bg-white/88 px-4 py-3 text-sm font-medium leading-6 text-[var(--ink-2)] shadow-[0_12px_32px_rgba(11,18,32,0.04)] backdrop-blur sm:rounded-full sm:px-5">
              Unverbindlich · praxisnah · auf konkrete Prozesse fokussiert
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-[rgba(30,51,82,0.14)] bg-[linear-gradient(135deg,rgba(11,18,32,0.98)_0%,rgba(30,51,82,0.95)_100%)] p-6 text-white shadow-[0_24px_80px_rgba(11,18,32,0.2)] sm:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
                Analyse
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Was wir gemeinsam prüfen
              </h2>
              <div className="mt-8 space-y-4">
                {analysisPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/84 sm:items-center sm:rounded-full"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <ContactFormSection />
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_16px_44px_rgba(11,18,32,0.05)] sm:p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
                Geeignet für
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
                Geeignet für Unternehmen, die ...
              </h2>
              <div className="mt-6 space-y-4">
                {fitPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 text-sm leading-6 text-[var(--ink-2)] sm:items-center sm:rounded-full"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-1)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_16px_44px_rgba(11,18,32,0.05)] sm:p-7">
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

            <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,#0B1220_0%,#1E3352_100%)] p-6 text-white shadow-[0_18px_56px_rgba(11,18,32,0.18)] sm:p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                Soforteinstieg
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Fragen zuerst digital klären
              </h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                Wenn Sie vor der Analyse zunächst verstehen möchten, welche Art von KI-Agent
                sinnvoll sein könnte, können Sie den KI-Agenten direkt starten.
              </p>
              <OpenChatbotButton className="mt-6 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
                KI-Potenzial prüfen
              </OpenChatbotButton>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Nächster Schritt"
        title="Offene Fragen? Lassen Sie uns Ihren KI-Anwendungsfall prüfen."
        description="Wenn Sie einschätzen möchten, wo ein KI-Agent oder eine Automatisierung in Ihrem Unternehmen den größten Hebel hat, ist eine kurze Analyse der sinnvollste Einstieg."
      />
    </main>
  );
}
