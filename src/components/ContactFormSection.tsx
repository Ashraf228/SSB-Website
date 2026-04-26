"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    hp: "",
  });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (form.hp) return;

    setLoading(true);
    setOk(null);
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
            "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder melden Sie sich telefonisch.",
        );
      }

      setOk("Danke! Ihre Anfrage wurde gesendet.");
      setForm({ name: "", email: "", phone: "", company: "", message: "", hp: "" });
    } catch (error) {
      setOk(
        error instanceof Error
          ? error.message
          : "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder melden Sie sich telefonisch.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_18px_48px_rgba(11,18,32,0.06)]"
    >
      <input
        value={form.hp}
        onChange={(e) => setForm({ ...form, hp: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-2xl border border-[var(--line)] px-4 py-3 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)]"
          placeholder="Name*"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="rounded-2xl border border-[var(--line)] px-4 py-3 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)]"
          placeholder="E-Mail*"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="rounded-2xl border border-[var(--line)] px-4 py-3 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)]"
          placeholder="Telefon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="rounded-2xl border border-[var(--line)] px-4 py-3 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)]"
          placeholder="Firma"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </div>

      <textarea
        className="mt-4 min-h-36 w-full rounded-2xl border border-[var(--line)] px-4 py-3 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)]"
        placeholder="Worum geht es?*"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />

      <div className="mt-4 text-xs text-[var(--muted)]">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.
      </div>

      {ok ? <div className="mt-4 text-sm text-[var(--ink-1)]">{ok}</div> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-full bg-[var(--ink-1)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)] disabled:opacity-60"
      >
        {loading ? "Wird gesendet..." : "Anfrage senden"}
      </button>
    </form>
  );
}
