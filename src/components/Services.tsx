"use client";

import { motion } from "framer-motion";
import SectionHighlight from "./SectionHighlight";
import RevealGroup, { RevealItem } from "./RevealGroup";

const services = [
  {
    title: "Websites",
    desc: "Moderne, responsive Websites mit klarer Struktur, starker Performance und professionellem Design – optimiert für Anfragen.",
  },
  {
    title: "KI-Rezeption",
    desc: "Automatisierte Terminvergabe und Vorqualifizierung von Anfragen – weniger Aufwand, mehr Struktur im Vertrieb.",
  },
  {
    title: "KI-Support",
    desc: "Antwortet auf Standardfragen, erstellt Tickets und entlastet Ihr Team – ideal für 1st-Level Support.",
  },
  {
    title: "KI-Wissensdatenbank",
    desc: "Unternehmenswissen zentral nutzbar machen: Antworten aus Dokumenten/FAQs/Prozessen – schnell und konsistent.",
  },
  {
    title: "Maßgeschneiderte Lösungen",
    desc: "Individuelle Automationen und Agenten, angepasst an Ihre Systeme und Prozesse (CRM, Mail, Kalender, Tools).",
  },
];

export default function Services({ onBook }: { onBook: () => void }) {
  return (
    <SectionHighlight className="py-24 px-6 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Glow für Tiefe */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#1E3352] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Leistungen</h2>

        <p className="mt-4 text-white/80 max-w-3xl">
          Fokus auf Websites als Basis Ihrer Online-Präsenz – ergänzt durch KI-Lösungen,
          die wiederkehrende Abläufe automatisieren und Ihr Team entlasten.
        </p>

        <RevealGroup>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <RevealItem key={s.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8 shadow-sm hover:shadow-xl transition overflow-hidden"
                >
                  {/* subtiler Glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#1E3352]/15 blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#0B1220]/10 blur-3xl" />
                  </div>

                  {/* Shine-Effekt */}
                  <div className="pointer-events-none absolute -inset-40 rotate-12 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent translate-x-[-60%] group-hover:translate-x-[220%] transition duration-700" />
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-4 text-white/80 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={onBook}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-7 py-3 rounded-xl bg-white text-[#0B1220] font-semibold hover:bg-white/90 transition shadow-sm"
          >
            Termin vereinbaren
          </motion.button>
        </div>
      </div>

      {/* dezente Trennlinie */}
      <div className="h-px bg-white/5 mt-16 max-w-6xl mx-auto" />
    </SectionHighlight>
  );
}