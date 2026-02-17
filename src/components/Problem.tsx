"use client";

import { motion } from "framer-motion";

export default function Problem({ onBook }: { onBook: () => void }) {
  const points = [
    {
      title: "Unstrukturierte Anfragen",
      desc: "Kontakt über Website, E-Mail oder Social Media kommt oft ungefiltert an – das kostet Zeit und reduziert die Abschlussquote.",
    },
    {
      title: "Manuelle Terminabstimmung",
      desc: "Hin und her per Nachricht oder Telefon bindet Ressourcen und sorgt für unnötige Verzögerungen.",
    },
    {
      title: "Wiederkehrende Support-Fragen",
      desc: "Standardfragen wiederholen sich täglich – ohne Automatisierung wird das schnell zum Kostenfaktor.",
    },
    {
      title: "Fehlende digitale Prozesse",
      desc: "Ohne klare digitale Struktur entstehen Reibungsverluste – intern wie extern.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F3F4F6] text-[#0B1220]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          Wachstum darf nicht an ineffizienten Prozessen scheitern.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-gray-700 max-w-3xl leading-relaxed"
        >
          Viele Unternehmen verlieren täglich Zeit und Potenzial durch manuelle Abläufe und fehlende Struktur.
          Wir entwickeln digitale Systeme, die entlasten – und langfristig Kosten reduzieren.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {points.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-2xl bg-white/80 backdrop-blur border border-black/10 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            onClick={onBook}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-7 py-3 rounded-xl bg-[#0B1220] text-white font-semibold hover:bg-[#1E3352] transition shadow-sm"
          >
            Kostenlose Erstberatung sichern
          </motion.button>

          <div className="text-sm text-gray-600">
            30 Minuten Analyse – unverbindlich. Sie erhalten konkrete Optionen, ohne Verkaufsdruck.
          </div>
        </div>
      </div>
    </section>
  );
}