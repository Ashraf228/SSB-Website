"use client";

import { useState } from "react";

const solutionOptions = [
  "KI-Support-Agent",
  "KI-Lead-Agent",
  "KI-Wissensdatenbank",
  "KI-Prozessautomatisierung",
  "KI-E-Commerce-Agent",
  "Noch unklar",
];

export default function ContactFormSection() {
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

      setOk(
        "Nach Ihrer Anfrage prüfen wir kurz den beschriebenen Anwendungsfall und melden uns mit einer Einschätzung, welche KI-Lösung sinnvoll wäre.",
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
          : "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder melden Sie sich telefonisch.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_48px_rgba(11,18,32,0.06)] md:p-8"
    >
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-2)]">
        Analyseanfrage
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink-1)]">
        Kostenlose KI-Potenzialanalyse anfragen
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
        Beschreiben Sie kurz, wo heute Zeit verloren geht. Wir prüfen darauf aufbauend,
        welcher KI-Agent oder welche Automatisierung in Ihrem Unternehmen sinnvoll wäre.
      </p>

      <input
        value={form.hp}
        onChange={(e) => setForm({ ...form, hp: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink-2)]">Name</label>
          <input
            className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
            placeholder="Ihr Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink-2)]">Unternehmen</label>
          <input
            className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
            placeholder="Unternehmen"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink-2)]">E-Mail</label>
          <input
            className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
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
            className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
            placeholder="Telefonnummer"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink-2)]">Branche</label>
          <input
            className="w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
            placeholder="z. B. Handwerk, E-Commerce, IT"
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink-2)]">Gewünschte Lösung</label>
          <select
            className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
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

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium text-[var(--ink-2)]">
          Welche Prozesse kosten aktuell viel Zeit?
        </label>
        <textarea
          className="min-h-40 w-full rounded-2xl border border-[var(--line)] px-4 py-3.5 text-[var(--ink-1)] outline-none transition focus:border-[var(--accent-2)] focus:ring-2 focus:ring-[rgba(30,51,82,0.12)]"
          placeholder="z. B. viele wiederkehrende Supportfragen, ungefilterte Leads, Terminabsprachen oder interne Rückfragen"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>

      <div className="mt-5 text-xs leading-6 text-[var(--muted)]">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu.
      </div>

      {ok ? (
        <div className="mt-5 rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-0)] px-4 py-4 text-sm leading-7 text-[var(--ink-1)]">
          {ok}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[var(--ink-1)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)] disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Wird gesendet..." : "Kostenlose Analyse anfragen"}
      </button>
    </form>
  );
}
