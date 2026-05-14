"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import OpenContactButton from "./OpenContactButton";
import { navLinks } from "@/lib/site-content";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition md:px-6",
            scrolled
              ? "border-[var(--line)] bg-white/80 shadow-[0_16px_46px_rgba(11,18,32,0.12)] backdrop-blur"
              : "border-transparent bg-white/55 backdrop-blur",
          ].join(" ")}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt="Soulé Smart Business"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-2)]">
                Soulé Smart Business
              </div>
              <div className="text-xs text-[var(--muted)]">KI-Agenten und Automatisierung</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-sm font-medium transition",
                    active ? "text-[var(--ink-1)]" : "text-[var(--muted)] hover:text-[var(--ink-1)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <OpenContactButton className="rounded-full bg-[var(--ink-1)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">
              KI-Potenzial prüfen
            </OpenContactButton>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink-1)] lg:hidden"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0B1220]/70 backdrop-blur lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="ml-auto flex h-full w-full max-w-sm flex-col bg-[var(--surface-0)] px-6 pb-8 pt-24 shadow-2xl"
            >
              <nav className="space-y-2">
                {navLinks.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "block rounded-2xl px-4 py-3 text-base font-medium transition",
                        active
                          ? "bg-[var(--ink-1)] text-white"
                          : "bg-white text-[var(--ink-1)] hover:bg-[var(--surface-1)]",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6">
                <OpenContactButton className="w-full rounded-2xl bg-[var(--accent-2)] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[var(--ink-1)]">
                  KI-Potenzial prüfen
                </OpenContactButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
