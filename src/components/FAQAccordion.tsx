"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FAQItem = {
  q: string;
  a: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
            className="rounded-[1.6rem] border border-[var(--line)] bg-white shadow-[0_12px_32px_rgba(11,18,32,0.04)] transition hover:border-[rgba(30,51,82,0.22)]"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(30,51,82,0.22)] focus-visible:ring-offset-2"
            >
              <span className="text-lg font-semibold text-[var(--ink-1)]">{item.q}</span>
              <span className="text-2xl text-[var(--muted)]">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen ? <div className="px-6 pb-6 text-base leading-7 text-[var(--muted)]">{item.a}</div> : null}
          </motion.div>
        );
      })}
    </div>
  );
}
