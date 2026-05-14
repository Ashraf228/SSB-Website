"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ChatbotWidgetPlaceholderProps = {
  mode?: "floating" | "inline";
};

export default function ChatbotWidgetPlaceholder({
  mode = "floating",
}: ChatbotWidgetPlaceholderProps) {
  const [open, setOpen] = useState(mode === "inline");

  useEffect(() => {
    if (mode !== "floating") return;

    const openWidget = () => setOpen(true);
    window.addEventListener("ssb:open-chatbot", openWidget);
    return () => window.removeEventListener("ssb:open-chatbot", openWidget);
  }, [mode]);

  const shell = (
    <div className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[0_24px_80px_rgba(11,18,32,0.18)]">
      <div className="bg-[linear-gradient(135deg,#0B1220_0%,#1E3352_100%)] px-5 py-4 text-white">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          KI-Potenzial prüfen
        </div>
        <div className="mt-2 text-lg font-semibold">Soulé Smart Business Assistent</div>
      </div>

      <div className="space-y-4 bg-[var(--surface-0)] px-5 py-5 text-sm text-[var(--muted)]">
        <div className="rounded-2xl bg-white px-4 py-3 text-[var(--ink-1)] shadow-sm">
          Dieser Assistent beantwortet Fragen und hilft bei der ersten Einschätzung.
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3">
          Zum Beispiel:
          <div className="mt-2 space-y-2 text-[var(--ink-2)]">
            <div>&quot;Welche Lösung passt für mein Unternehmen?&quot;</div>
            <div>&quot;Wie kann ein KI-Agent Anfragen übernehmen?&quot;</div>
            <div>&quot;Wie laufen Website und Automatisierung zusammen?&quot;</div>
          </div>
        </div>
        <div className="rounded-full border border-[var(--line)] bg-white px-4 py-3 text-[var(--muted)]">
          Nachricht schreiben...
        </div>
      </div>
    </div>
  );

  if (mode === "inline") {
    return <div className="mx-auto w-full max-w-md">{shell}</div>;
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto w-[min(22rem,calc(100vw-1.5rem))]"
          >
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 bg-[#0B1220] px-3 py-1 text-xs font-semibold text-white"
              >
                Schließen
              </button>
            </div>
            {shell}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="pointer-events-auto rounded-full bg-[linear-gradient(135deg,#0B1220_0%,#1E3352_100%)] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(11,18,32,0.28)]"
      >
        KI-Potenzial prüfen
      </motion.button>
    </div>
  );
}
