"use client";

import { motion } from "framer-motion";

export default function Process({ onBook }: { onBook: () => void }) {
  const steps = [
    {
      nr: "01",
      title: "Analyse & Ziele",
      desc: "Wir verstehen Ihre aktuelle Situation, Ziele und Engpässe – und identifizieren konkrete Potenziale für Effizienz und Automatisierung.",
    },
    {
      nr: "02",
      title: "Strategie & Konzept",
      desc: "Sie erhalten eine klare Struktur: welche Maßnahmen zuerst Sinn ergeben (Website, Prozesse, KI), inkl. Priorisierung und Umsetzungspfad.",
    },
    {
      nr: "03",
      title: "Umsetzung & Integration",
      desc: "Wir implementieren Website und/oder KI-Lösungen sauber in Ihre bestehende Infrastruktur (z. B. Kalender, E-Mail, CRM, Support).",
    },
    {
      nr: "04",
      title: "Optimierung & Partnerschaft",
      desc: "Nach dem Go-Live optimieren wir weiter: bessere Abläufe, weniger Aufwand, mehr Automatisierung – als langfristiger Partner.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Glow für Tiefe */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#1E3352] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          So entsteht Ihr digitales Effizienzsystem.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-white/80 max-w-3xl leading-relaxed"
        >
          Klarer Ablauf, schnelle Abstimmung, saubere Umsetzung. Sie erhalten eine nachvollziehbare Strategie
          und eine Lösung, die langfristig entlastet.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <motion.div
              key={s.nr}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8 hover:shadow-lg transition overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#1E3352]/30 blur-2xl" />

              <div className="relative">
                <div className="text-sm font-semibold text-[#6DA3FF]">{s.nr}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-white/80 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            onClick={onBook}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-7 py-3 rounded-xl bg-white text-[#0B1220] font-semibold hover:bg-white/90 transition shadow-sm"
          >
            Kostenlose Erstberatung sichern
          </motion.button>

          <div className="text-sm text-white/60">
            30 Minuten Analyse – unverbindlich. Sie erhalten konkrete Optionen und nächste Schritte.
          </div>
        </div>

        <div className="h-px bg-white/5 mt-16 max-w-6xl mx-auto" />
      </div>
    </section>
  );
}