"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    message: "",
    company: "",
    hp: "", // honeypot
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null);

    if (form.hp) return; // spam

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("request failed");

      setOk("Danke! Ihre Anfrage wurde gesendet.");
      setForm({ name: "", email: "", phone: "", message: "", company: "", hp: "" });
    } catch {
      setOk("Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie an: +49 155 11410215");
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
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-3xl bg-white text-[#0B1220] shadow-2xl overflow-hidden"
          >
            <div className="p-7 md:p-8 border-b border-black/10 flex items-center justify-between">
              <div>
                <div className="text-xl font-bold">Termin anfragen</div>
                <div className="text-sm text-gray-600 mt-1">
                  Kurz beschreiben – ich melde mich schnellstmöglich zurück.
                </div>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-black">
                ✕
              </button>
            </div>

            <form onSubmit={submit} className="p-7 md:p-8 space-y-4">
              {/* honeypot hidden */}
              <input
                value={form.hp}
                onChange={(e) => setForm({ ...form, hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="w-full p-3.5 border rounded-xl"
                  placeholder="Name*"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  className="w-full p-3.5 border rounded-xl"
                  placeholder="E-Mail*"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="w-full p-3.5 border rounded-xl"
                  placeholder="Telefon (optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="w-full p-3.5 border rounded-xl"
                  placeholder="Firma (optional)"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <textarea
                className="w-full p-3.5 border rounded-xl"
                placeholder="Worum geht es? (Website, KI-Rezeption, Support, Wissensdatenbank …)*"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <div className="text-xs text-gray-600">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.
              </div>

              {ok && <div className="text-sm text-gray-800">{ok}</div>}

              <button
                disabled={loading}
                className="w-full mt-2 px-6 py-3 rounded-xl bg-[#0B1220] text-white font-semibold hover:bg-[#1E3352] transition disabled:opacity-60"
              >
                {loading ? "Senden..." : "Anfrage senden"}
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