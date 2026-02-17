"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA({
  onBook,
  isModalOpen,
}: {
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
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/12 bg-[#0B1220]/90 backdrop-blur px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
            <div className="text-white/85 text-sm">
              Kostenlose Erstberatung: 30 Minuten Analyse – unverbindlich.
            </div>
            <button
              onClick={onBook}
              className="shrink-0 px-4 py-2 rounded-xl bg-white text-[#0B1220] font-semibold hover:bg-white/90 transition"
            >
              Termin sichern
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}