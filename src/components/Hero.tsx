"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeChips from "./MarqueeChips";

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center justify-center px-6 bg-[#0B1220] text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/70 via-[#0B1220]/60 to-[#0B1220]" />
        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.55)]" />
      </div>

      {/* Brand Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-25 bg-gradient-to-b from-[#1E3352] to-transparent" />

      <div className="relative max-w-5xl w-full text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-fit"
        >
          <Image
            src="/logo-white.png"
            alt="Soulé Smart Business"
            width={300}
            height={300}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="mt-8 text-4xl md:text-6xl font-bold tracking-tight"
        >
          Digitale Systeme, die Ihr Unternehmen effizienter machen.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mt-6 text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed"
        >
          Soulé Smart Business entwickelt moderne Web-Infrastrukturen und
          intelligente KI-Lösungen, die Prozesse automatisieren,
          Kosten reduzieren und langfristige Wettbewerbsvorteile schaffen.
        </motion.p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <motion.button
            onClick={onBook}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl bg-white text-[#0B1220] font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition"
          >
            Kostenlose Erstberatung sichern
          </motion.button>

          <div className="text-sm text-white/60">
            30 Minuten Analyse – unverbindlich.
          </div>
        </div>

        {/* Trust Statements */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
          <span>✔ Strategischer Digitalisierungspartner</span>
          <span>✔ Maßgeschneiderte Lösungen</span>
          <span>✔ Fokus auf Effizienz & Kostenreduktion</span>
        </div>

        {/* Moving Trust / Tech Chips */}
        <MarqueeChips />
      </div>

      {/* Soft transition to next section */}
      <div className="pointer-events-none absolute left-0 right-0 -bottom-24 h-48">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1220]/35 to-[#F3F4F6]" />
        <div className="absolute inset-0 blur-2xl bg-gradient-to-b from-transparent via-[#0B1220]/18 to-[#F3F4F6]" />
      </div>
    </section>
  );
}