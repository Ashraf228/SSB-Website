"use client";

import { useState } from "react";
import SectionHighlight from "./SectionHighlight";

const faqs = [
  {
    q: "Wie läuft ein Website-Projekt ab?",
    a: "Nach einem kurzen Erstgespräch analysieren wir Ihre Ziele, erstellen ein klares Konzept und setzen die Website responsive und performant um. Danach folgt Feinschliff, Go-Live und auf Wunsch Wartung.",
  },
  {
    q: "Welche Tools können bei KI-Automationen angebunden werden?",
    a: "Typisch sind Kalender, E-Mail, CRM, Support-Systeme, Formulare, Datenbanken und interne Tools. Die Anbindung erfolgt je nach System via API oder Automations-Plattform.",
  },
  {
    q: "Was ist eine KI-Rezeption genau?",
    a: "Ein KI-gestützter Prozess, der Termine annimmt, Anfragen vorqualifiziert, häufige Fragen beantwortet und strukturierte Informationen an Ihr Team übergibt.",
  },
  {
    q: "Ist eine KI-Wissensdatenbank DSGVO-konform umsetzbar?",
    a: "Ja – je nach Setup. Wir planen Datenflüsse, Zugriffe und Speicherung so, dass Datenschutzanforderungen berücksichtigt werden (z. B. minimierte Daten, Rollen, Logging).",
  },
  {
    q: "Wie schnell kann ein Projekt starten?",
    a: "In der Regel nach dem Erstgespräch. Für Websites kann ein erster Entwurf sehr schnell stehen; KI-Integrationen hängen vom Umfang und den angebundenen Systemen ab.",
  },
  {
    q: "Was kostet das?",
    a: "Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und Aufwand und geben eine transparente Einschätzung mit Optionen (Basis/Erweitert).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionHighlight className="py-24 px-6 bg-[#F8FAFC] text-[#0B1220]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>

        <p className="mt-4 text-gray-700">
          Häufige Fragen zu Websites, KI-Rezeption, Support-Agenten und Wissensdatenbanken.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={f.q}
                className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur hover:shadow-sm transition"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span className="text-gray-500 text-xl">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionHighlight>
  );
}