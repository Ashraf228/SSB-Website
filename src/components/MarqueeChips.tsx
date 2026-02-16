"use client";

import { motion } from "framer-motion";

export default function MarqueeChips() {
  const chips = [
    "Responsive",
    "Performance",
    "SEO-Basics",
    "Automationen",
    "DSGVO-orientiert",
    "KI-Rezeption",
    "KI-Support",
    "KI-Agenten",
    "Wissensdatenbank (RAG)",
    "Lead-Qualifizierung",
    "Kalender-Integration",
    "CRM-Integration",
    "Ticket-Automation",
    "Workflow-Optimierung",
    "API-Integrationen",
  ];

  // Wir duplizieren die Liste, damit der Loop nahtlos ist
  const loop = [...chips, ...chips];

  return (
    <div className="mt-10 relative w-full overflow-hidden">
      {/* soft edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0B1220] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0B1220] to-transparent z-10" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((x, i) => (
          <span
            key={`${x}-${i}`}
            className="whitespace-nowrap px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 text-sm"
          >
            {x}
          </span>
        ))}
      </motion.div>
    </div>
  );
}