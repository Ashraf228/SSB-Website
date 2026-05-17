"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutionOptions = [
  "KI-Support-Agent",
  "KI-Lead-Agent",
  "KI-Wissensdatenbank",
  "KI-Prozessautomatisierung",
  "KI-E-Commerce-Agent",
  "Noch unklar",
];

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    solution: "Noch unklar",
    message: "",
    hp: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null);

    if (form.hp) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.error ||
            "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie an: +49 155 11410215",
        );
      }

      setOk(
        "Ihre Anfrage wurde gesendet. Wir prüfen den Anwendungsfall und melden uns mit einer Einschätzung.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        solution: "Noch unklar",
        message: "",
        hp: "",
      });
    } catch (error) {
      setOk(
        error instanceof Error
          ? error.message
          : "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie an: +49 155 11410215",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[calc(100vh-1.5rem)] w-full max-w-2xl overflow-hidden rounded-[1.75rem] bg-white text-[#0B1220] shadow-2xl sm:max-h-[90vh] sm:rounded-[2rem]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-black/10 p-5 sm:gap-6 sm:p-7 md:p-8">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1E3352]">
                  Analyseanfrage
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  Kostenlose KI-Potenzialanalyse anfragen
                </div>
                <div className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                  Beschreiben Sie kurz, welche Aufgaben, Anfragen oder Prozesse aktuell Zeit
                  kosten. Wir prüfen, welcher KI-Agent sinnvoll wäre.
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-black/10 p-2 text-gray-500 transition hover:border-black/20 hover:text-black"
                aria-label="Modal schließen"
              >
                ✕
              </button>
            </div>

            <form onSubmit={submit} className="max-h-[calc(100vh-10rem)] space-y-4 overflow-y-auto p-5 sm:max-h-[calc(90vh-140px)] sm:p-7 md:p-8">
              <input
                value={form.hp}
                onChange={(e) => setForm({ ...form, hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--ink-2)]">Name</label>
                  <input
                    className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--ink-2)]">Unternehmen</label>
                  <input
                    className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                    placeholder="Unternehmen"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--ink-2)]">E-Mail</label>
                  <input
                    className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                    placeholder="name@unternehmen.de"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--ink-2)]">Telefon optional</label>
                  <input
                    className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                    placeholder="Telefonnummer"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--ink-2)]">Branche</label>
                  <input
                    className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                    placeholder="z. B. Handwerk, E-Commerce, IT"
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--ink-2)]">Gewünschte Lösung</label>
                  <select
                    className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                    value={form.solution}
                    onChange={(e) => setForm({ ...form, solution: e.target.value })}
                    required
                  >
                    {solutionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--ink-2)]">
                  Welche Prozesse kosten aktuell viel Zeit?
                </label>
                <textarea
                  className="min-h-36 w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
                  placeholder="z. B. viele wiederkehrende Supportfragen, ungefilterte Leads, Terminabsprachen oder interne Rückfragen"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <div className="text-xs leading-6 text-gray-600">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.
              </div>

              {ok ? (
                <div className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-0)] px-4 py-4 text-sm leading-7 text-[var(--ink-1)]">
                  {ok}
                </div>
              ) : null}

              <button
                disabled={loading}
                className="mt-2 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#0B1220] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1E3352] disabled:opacity-60"
              >
                {loading ? "Wird gesendet..." : "Kostenlose Analyse anfragen"}
              </button>

              <div className="text-center text-sm text-gray-600">
                Alternativ: +49 155 11410215
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
