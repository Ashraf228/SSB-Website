"use client";

import { motion } from "framer-motion";

export default function WhySoule() {
  const points = [
    {
      title: "Strategischer Digitalisierungspartner",
      desc: "Wir denken nicht in einzelnen Projekten, sondern in langfristigen digitalen Strukturen, die Ihr Unternehmen nachhaltig entlasten.",
    },
    {
      title: "Hybrid aus Web & KI",
      desc: "Websites sind das Fundament. KI-Lösungen sind der nächste Schritt. Beides greift bei uns strategisch ineinander.",
    },
    {
      title: "Fokus auf Effizienz",
      desc: "Unser Ziel ist nicht nur ein schönes Design, sondern reduzierte Kosten, automatisierte Abläufe und messbare Entlastung.",
    },
    {
      title: "Langfristige Zusammenarbeit",
      desc: "Nach dem Go-Live endet unsere Arbeit nicht. Digitale Systeme werden kontinuierlich optimiert.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC] text-[#0B1220]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Warum Soulé Smart Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-700 max-w-3xl leading-relaxed"
        >
          Digitale Projekte sind kein Selbstzweck. Sie müssen Prozesse vereinfachen,
          Kosten senken und Wachstum ermöglichen.
          Genau darauf ist unsere Arbeit ausgerichtet.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {points.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white border border-black/10 p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}