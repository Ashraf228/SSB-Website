"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Anfrage gesendet");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white text-[#0E1A2B]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Kontakt</h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            className="w-full p-4 border rounded-lg"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-4 border rounded-lg"
            placeholder="E-Mail"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            className="w-full p-4 border rounded-lg"
            placeholder="Nachricht"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="bg-[#0E1A2B] text-white px-6 py-3 rounded-lg hover:bg-[#1E3352] transition"
          >
            Anfrage senden
          </button>
        </form>

        <p className="mt-6 text-gray-600">Telefon: +49 155 11410215</p>
      </div>
    </section>
  );
}