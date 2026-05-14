import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ zu KI-Agenten",
  description:
    "Häufige Fragen zu KI-Agenten für Unternehmen, KI-Automatisierung, Support-Entlastung, Sicherheit, Umsetzung und Kosten.",
  path: "/faq",
});

const faqGroups = [
  {
    title: "Grundlagen",
    intro:
      "Diese Fragen klären, was ein KI-Agent ist, worin der Unterschied zu einfachen Chatbots liegt und warum das Thema für Unternehmen relevant ist.",
    items: [
      {
        q: "Was ist ein KI-Agent?",
        a: "Ein KI-Agent ist ein digitaler Assistent, der nicht nur Fragen beantwortet, sondern Informationen strukturiert verarbeitet, Daten abfragt, Anliegen einordnet und Folgeprozesse vorbereitet. Er kann damit operative Aufgaben übernehmen, statt nur als einfache Chatoberfläche zu dienen.",
      },
      {
        q: "Was ist der Unterschied zwischen Chatbot und KI-Agent?",
        a: "Ein klassischer Chatbot folgt oft festen Regeln und beantwortet vordefinierte Fragen. Ein KI-Agent versteht Kontexte besser, kann Informationen aus mehreren Quellen nutzen, Gespräche gezielt führen, Anliegen vorqualifizieren und Übergaben an Teams sauber vorbereiten.",
      },
      {
        q: "Welche Aufgaben kann ein KI-Agent übernehmen?",
        a: "Typische Aufgaben sind Anfrageannahme, FAQ-Beantwortung, Lead-Qualifizierung, Terminvorbereitung, Support-Vorstrukturierung, Wissenszugriff, E-Mail-Vorbereitung oder die Auslösung nachgelagerter Workflows.",
      },
      {
        q: "Für welche Branchen eignen sich KI-Agenten?",
        a: "KI-Agenten eignen sich besonders für Branchen mit wiederkehrenden Fragen, hoher Kommunikationslast und klaren Prozessen. Dazu zählen zum Beispiel Dienstleister, E-Commerce, Handwerk, IT-Systemhäuser, Immobilien und Gesundheitswesen.",
      },
    ],
  },
  {
    title: "Einsatz & Integration",
    intro:
      "Hier geht es um die praktische Nutzung im Unternehmen, die Einbindung in bestehende Systeme und typische operative Anwendungsfälle.",
    items: [
      {
        q: "Muss ich technische Vorkenntnisse haben?",
        a: "Nein. Die technische Konzeption und Umsetzung wird vorbereitet und strukturiert begleitet. Entscheidend ist vor allem, welche Anfragen, Prozesse oder Wissensbereiche heute Zeit kosten und wo der größte operative Hebel liegt.",
      },
      {
        q: "Kann der KI-Agent mit meiner Website verbunden werden?",
        a: "Ja. Ein KI-Agent kann direkt auf Ihrer Website eingebunden werden und dort Beratung, Support, Lead-Erfassung oder FAQ übernehmen. Die Website wird dabei zur Systembasis für Anfrageführung, Conversion und Automatisierung.",
      },
      {
        q: "Kann der KI-Agent Kundenanfragen vorqualifizieren?",
        a: "Ja. Er kann gezielt Informationen abfragen, Anliegen strukturieren, Dringlichkeit erkennen und nur die relevanten Fälle oder vollständigeren Anfragen an Ihr Team übergeben.",
      },
      {
        q: "Kann der KI-Agent Supportanfragen beantworten?",
        a: "Ja. Für wiederkehrende Standardfragen, erste Orientierung, Ticket-Vorbereitung oder interne Wissensabfragen ist ein KI-Agent sehr gut geeignet. Komplexe Fälle können sauber an Mitarbeiter übergeben werden.",
      },
      {
        q: "Kann ich klein starten und später erweitern?",
        a: "Ja. Ein sinnvoller Einstieg ist oft ein klar eingegrenzter Use Case, zum Beispiel FAQ, Lead-Qualifizierung oder Support-Vorqualifizierung. Danach kann der Agent schrittweise um weitere Prozesse, Datenquellen oder Integrationen erweitert werden.",
      },
      {
        q: "Warum lohnt sich ein KI-Agent für mein Unternehmen?",
        a: "Weil wiederkehrende Kommunikation, manuelle Vorarbeit und unstrukturierte Anfragen teuer sind. Ein KI-Agent reduziert operative Last, beschleunigt Reaktionszeiten und verbessert die Qualität von Anfragen und Übergaben.",
      },
    ],
  },
  {
    title: "Sicherheit & Kontrolle",
    intro:
      "Diese Fragen adressieren typische Bedenken zu Daten, Antwortqualität und Eskalation, wenn ein Agent an Grenzen stößt.",
    items: [
      {
        q: "Was passiert, wenn der KI-Agent eine Frage nicht beantworten kann?",
        a: "Dann sollte er das transparent machen, fehlende Informationen gezielt abfragen oder das Anliegen an einen Menschen übergeben. Ziel ist nicht, jede Antwort zu erzwingen, sondern verlässlich zu unterstützen und Risiken sauber zu begrenzen.",
      },
      {
        q: "Wie wird verhindert, dass falsche Antworten gegeben werden?",
        a: "Durch klare Wissensgrundlagen, passende Systemregeln, begrenzte Aufgabenbereiche, kontrollierte Antwortpfade und saubere Übergaben bei Unsicherheit. Ein guter KI-Agent wird nicht einfach frei gelassen, sondern fachlich und technisch eingegrenzt.",
      },
      {
        q: "Werden Kundendaten sicher verarbeitet?",
        a: "Das hängt vom konkreten Setup, den eingesetzten Systemen und den Datenflüssen ab. Datenschutz, Zugriffsrechte, Speicherorte und die Art der verarbeiteten Informationen müssen sauber geplant werden, damit Sicherheit und praktische Nutzbarkeit zusammenpassen.",
      },
    ],
  },
  {
    title: "Kosten & Umsetzung",
    intro:
      "Diese Fragen helfen bei der Einordnung von Aufwand, Projektstart und Investitionsrahmen.",
    items: [
      {
        q: "Wie lange dauert die Umsetzung?",
        a: "Das hängt vom Umfang ab. Ein klar abgegrenzter Anwendungsfall kann vergleichsweise zügig umgesetzt werden. Komplexere Agenten mit mehreren Datenquellen, Prozessen oder Systemanbindungen benötigen entsprechend mehr Konzeption und Abstimmung.",
      },
      {
        q: "Was kostet ein KI-Agent?",
        a: "Die Kosten hängen von Zielbild, Komplexität, Wissensbasis, Integrationen und gewünschtem Funktionsumfang ab. Sinnvoll ist eine kurze Analyse, um Aufwand und Prioritäten realistisch einzuordnen, statt pauschale Preise zu nennen.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen rund um KI-Agenten für Unternehmen"
        description="Diese Seite beantwortet typische Fragen und Einwände zu KI-Agenten, Automatisierung, Integration, Sicherheit und Umsetzung. Viele dieser Themen kann später auch der KI-Agent direkt auf der Website übernehmen."
      />

      <Section>
        <div className="mx-auto max-w-7xl space-y-10">
          {faqGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,0.86)_100%)] p-8 shadow-[0_16px_44px_rgba(11,18,32,0.05)] md:p-10"
            >
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
                  {group.title}
                </div>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{group.intro}</p>
              </div>

              <div className="mt-8">
                <FAQAccordion items={group.items} />
              </div>
            </section>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Offene Fragen"
        title="Offene Fragen? Lassen Sie uns Ihren KI-Anwendungsfall prüfen."
        description="Wenn Sie einschätzen möchten, wo ein KI-Agent in Ihrem Unternehmen sinnvoll ansetzt, ist ein kurzes Gespräch oder der Chat der schnellste Weg zu einer klaren Einordnung."
      />
    </main>
  );
}
