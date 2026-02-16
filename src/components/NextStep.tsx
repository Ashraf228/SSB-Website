"use client";

import { motion } from "framer-motion";

export default function NextStep({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-20 px-6 bg-[#0B1220] text-white">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/12 bg-white/5 backdrop-blur p-10 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold">Nächster Schritt</h3>
        <p className="mt-4 text-white/75 max-w-3xl leading-relaxed">
          Bereit für den nächsten Schritt? Wir sind es.
          <br />
          Wir analysieren Ihre Situation und zeigen konkrete Optionen auf – ohne Verkaufsdruck.
        </p>

        <motion.button
          onClick={onBook}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 px-7 py-3 rounded-xl bg-white text-[#0B1220] font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition"
        >
          Jetzt Beratungstermin buchen
        </motion.button>
      </div>
    </section>
  );
}