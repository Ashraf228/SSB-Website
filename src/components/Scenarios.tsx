"use client";

import { motion } from "framer-motion";

export default function Scenarios({ onBook }: { onBook: () => void }) {
  const scenarios = [
    {
      title: "Dienstleistungsunternehmen",
      problem:
        "Viele Anfragen per Website und E-Mail, manuelle Terminabstimmung und unklare Vorqualifizierung.",
      solution:
        "Website mit integrierter KI-Rezeption, automatisierte Terminbuchung und strukturierte Anfragen.",
      result:
        "Weniger administrativer Aufwand, klarere Prozesse und mehr Zeit für das Kerngeschäft.",
    },
    {
      title: "Wachsendes KMU",
      problem:
        "Wiederkehrende Support-Fragen belasten das Team, interne Informationen sind verteilt.",
      solution:
        "KI-Support-Agent + Wissensdatenbank, die Antworten automatisiert und Wissen zentral verfügbar macht.",
      result:
        "Schnellere Reaktionszeiten, geringere Personalkosten und skalierbare Strukturen.",
    },
    {
      title: "Lokaler Betrieb / Handwerk",
      problem:
        "Unstrukturierte Anfragen, Telefonüberlastung und keine digitale Vorqualifizierung.",
      solution:
        "Moderne Website mit klarer Anfrageführung und automatisierter Terminlogik.",
      result:
        "Mehr qualifizierte Anfragen und weniger Zeitverlust durch manuelle Abstimmungen.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F3F4F6] text-[#0B1220]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          So könnte es bei Ihnen aussehen.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-700 max-w-3xl leading-relaxed"
        >
          Jedes Unternehmen ist anders – die Prinzipien erfolgreicher Digitalisierung sind jedoch vergleichbar.
          Hier einige typische Szenarien:
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {scenarios.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white border border-black/10 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>

              <div className="mt-4">
                <div className="text-sm font-semibold text-gray-600">
                  Herausforderung:
                </div>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  {s.problem}
                </p>
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold text-gray-600">
                  Lösung:
                </div>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  {s.solution}
                </p>
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold text-[#1E3352]">
                  Ergebnis:
                </div>
                <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                  {s.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={onBook}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl bg-[#0B1220] text-white font-semibold hover:bg-[#1E3352] transition"
          >
            Individuelle Analyse starten
          </motion.button>
        </div>
      </div>
    </section>
  );
}