"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-20 md:px-10 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,51,82,0.12),_transparent_34%),radial-gradient(circle_at_85%_8%,_rgba(11,18,32,0.08),_transparent_26%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--ink-1)] md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
