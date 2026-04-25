"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA({
  onTest,
  onBook,
  isModalOpen,
}: {
  onTest: () => void;
  onBook: () => void;
  isModalOpen: boolean;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-5 left-0 right-0 z-40 px-4"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl border border-white/12 bg-[#0B1220]/90 px-4 py-3 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-white/85">
              Agent live testen oder direkt besprechen, wie KI und Automatisierung dein Unternehmen entlasten können.
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                onClick={onTest}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-[#0B1220] transition hover:bg-white/90"
              >
                Agent testen
              </button>
              <button
                onClick={onBook}
                className="rounded-xl border border-white/18 bg-white/8 px-4 py-2 font-semibold text-white transition hover:bg-white/14"
              >
                Analyse anfragen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
