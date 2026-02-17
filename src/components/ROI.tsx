"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function ROI({ onBook }: { onBook: () => void }) {
  const cards = [
    {
      title: "Zeit sparen",
      desc: "Automatisierung reduziert manuelle Abstimmungen, wiederkehrende Fragen und doppelte Arbeit – spürbar im Tagesgeschäft.",
      bullets: ["Terminabstimmung", "Vorqualifizierung", "Standard-Support"],
    },
    {
      title: "Kosten senken",
      desc: "Weniger administrative Aufgaben bedeutet weniger interne Belastung und mehr Fokus auf Wertschöpfung.",
      bullets: ["Weniger Aufwand pro Anfrage", "Entlastung des Teams", "Skalierung ohne sofortige Neueinstellungen"],
    },
    {
      title: "Umsatz & Abschlussquote",
      desc: "Strukturierte Anfragen, klare Prozesse und schnelle Antworten erhöhen die Wahrscheinlichkeit, dass Interessenten zu Kunden werden.",
      bullets: ["Schnellere Reaktionszeiten", "Bessere Lead-Qualität", "Mehr Vertrauen durch Professionalität"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Hintergrund-Effekt */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#1E3352] blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          ROI: Warum sich Website & KI-Automation rechnet
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-gray-300 max-w-3xl leading-relaxed"
        >
          Der größte Hebel entsteht durch weniger manuelle Arbeit, klarere Abläufe und schnellere Reaktionszeiten.
          Wir berechnen im Erstgespräch konkrete Potenziale – basierend auf Ihren Prozessen.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white border border-black/10 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0B1220]">{c.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{c.desc}</p>

              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-[#1E3352] font-semibold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mini-Rechner (seriös, ohne feste Versprechen) */}
        <div className="mt-12 rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 md:p-10">
          <div className="text-xl font-semibold text-[#0B1220]">Schnell-Check (Beispielrechnung)</div>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Wenn Ihr Team pro Woche z. B.{" "}
            <span className="font-semibold">3–6 Stunden</span> mit Terminabstimmung, Standardfragen oder
            manueller Vorqualifizierung verbringt, kann Automatisierung diesen Anteil häufig deutlich reduzieren.
            <br />
            <span className="text-gray-600 text-sm">
              Hinweis: Der tatsächliche Effekt hängt von Prozess, Volumen und Setup ab – wir prüfen das im Erstgespräch.
            </span>
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-5">
              <div className="text-sm text-gray-600">Hebel</div>
              <div className="mt-1 text-4xl md:text-5xl font-bold tracking-tight text-[#6DA3FF]">
                <CountUp end={80} duration={1.2} suffix="%" /> - <CountUp end={60} duration={1.2} suffix="%" />
              </div>
              <div className="mt-1 text-sm text-gray-700">
                Zeitersparnis bei wiederkehrenden Aufgaben
              </div>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-5">
              <div className="text-sm text-gray-600">Hebel</div>
              <div className="mt-1 text-4xl md:text-5xl font-bold tracking-tight text-[#6DA3FF]">
                bis zu <CountUp end={50} duration={1.2} suffix="%" />
              </div>
              <div className="mt-1 text-sm text-gray-700">
                Kostenreduktion im Prozess
              </div>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-5">
              <div className="text-sm text-gray-600">Hebel</div>
              <div className="mt-1 text-4xl md:text-5xl font-bold tracking-tight text-[#6DA3FF]">
                <CountUp end={24} duration={1.2} />/<CountUp end={7} duration={0.5} />
              </div>
              <div className="mt-1 text-sm text-gray-700">
                Verfügbarkeit ohne Personalaufwand
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              onClick={onBook}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-[#0B1220] text-white font-semibold hover:bg-[#1E3352] transition"
            >
              ROI-Check im Erstgespräch
            </motion.button>

            <div className="text-sm text-gray-600">
              30 Minuten – konkrete Optionen & Prioritäten.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}