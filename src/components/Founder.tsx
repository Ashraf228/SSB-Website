"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Strategischer Ansatz",
    desc: "Nicht nur Websites oder einzelne Tools, sondern digitale Strukturen, die im Alltag funktionieren und langfristig entlasten.",
  },
  {
    title: "Fokus auf Effizienz",
    desc: "Mehr Struktur, weniger Aufwand und klarere Abläufe – damit Unternehmen Zeit sparen und sich auf ihr Kerngeschäft konzentrieren können.",
  },
  {
    title: "Langfristige Begleitung",
    desc: "Ziel ist nicht ein einmaliges Projekt, sondern eine digitale Entwicklung, die mit dem Unternehmen mitwächst.",
  },
];

export default function Founder() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#0B1220] text-white">
      {/* Hintergrund-Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#1E3352] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Linke Seite */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Über Soulé Smart Business
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Digitale Lösungen sollten nicht nur gut aussehen –
              <span className="block text-white/75 mt-2">
                sie sollten echten Nutzen bringen.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-white/80 leading-relaxed text-base md:text-lg">
              <p>
                Ich bin <span className="text-white font-semibold">Ashraf Soulé</span>, Gründer von Soulé Smart Business.
              </p>

              <p>
                Ich unterstütze Unternehmen dabei, ihre digitale Präsenz zu verbessern und interne Abläufe effizienter zu gestalten.
              </p>

              <p>
                Dabei geht es nicht nur um Websites oder einzelne Tools, sondern um eine klare digitale Struktur, die im Alltag funktioniert und langfristig entlastet.
              </p>

              <p>
                Viele Unternehmen arbeiten bereits digital – jedoch oft ohne klare Prozesse. Anfragen kommen ungefiltert rein, Termine werden manuell abgestimmt und wiederkehrende Aufgaben kosten unnötig Zeit.
              </p>

              <p className="text-white font-medium">
                Genau hier setze ich an.
              </p>

              <p>
                Als bewusst schlank aufgestelltes Unternehmen kann ich flexibel, direkt und ohne unnötige Komplexität arbeiten. Mein Ziel ist es, Unternehmen nicht nur kurzfristig zu unterstützen, sondern sie langfristig als Digitalisierungspartner zu begleiten.
              </p>
            </div>
          </motion.div>

          {/* Rechte Seite */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7 shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#1E3352]/20 blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="text-sm text-white/50 font-medium">
                    Soulé Smart Business
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-white/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-7">
              <div className="text-sm text-white/50 font-medium">
                Mein Fokus
              </div>
              <div className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
                Mehr Struktur.
                <br />
                Weniger Aufwand.
                <br />
                Bessere Abläufe.
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-white/10 mt-20 max-w-6xl mx-auto" />
      </div>
    </section>
  );
}