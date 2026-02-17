"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Preset = {
  key: "konservativ" | "realistisch" | "hoch";
  label: string;
  rate: number; // Anteil der eingesparten Zeit
  hint: string;
};

const presets: Preset[] = [
  {
    key: "konservativ",
    label: "Konservativ",
    rate: 0.2,
    hint: "Standardfragen teilweise automatisiert",
  },
  {
    key: "realistisch",
    label: "Realistisch",
    rate: 0.35,
    hint: "typisch bei klaren Prozessen und sauberer Integration",
  },
  {
    key: "hoch",
    label: "Hoch",
    rate: 0.5,
    hint: "bei hohem Volumen und stark standardisierbaren Abläufen",
  },
];

function formatEUR(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(value)));
}

export default function ROICalculator({ onBook }: { onBook: () => void }) {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(4);
  const [hourlyRate, setHourlyRate] = useState<number>(60);
  const [preset, setPreset] = useState<Preset>(presets[1]); // realistisch

  const result = useMemo(() => {
    const h = Math.max(0, Math.min(80, hoursPerWeek));
    const rate = Math.max(0, Math.min(500, hourlyRate));
    const savedHoursWeek = h * preset.rate;

    // grobe Annahmen: 4.33 Wochen pro Monat
    const savedMonth = savedHoursWeek * 4.33 * rate;
    const savedYear = savedMonth * 12;

    // Bandbreite ±15% (zeigt "Range" statt falscher Präzision)
    const lowMonth = savedMonth * 0.85;
    const highMonth = savedMonth * 1.15;
    const lowYear = savedYear * 0.85;
    const highYear = savedYear * 1.15;

    return {
      savedHoursWeek,
      lowMonth,
      highMonth,
      lowYear,
      highYear,
    };
  }, [hoursPerWeek, hourlyRate, preset]);

  return (
    <section className="py-24 px-6 bg-[#F8FAFC] text-[#0B1220]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            ROI-Rechner: Zeitersparnis → Kostenvorteil
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Geben Sie grob an, wie viel Zeit pro Woche für Terminabstimmung, Standardfragen
            oder manuelle Vorqualifizierung draufgeht. Der Rechner zeigt eine konservative
            Bandbreite möglicher Einsparungen.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* Inputs */}
          <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8">
            <div className="text-xl font-semibold">Ihre Eingaben</div>

            <div className="mt-6">
              <label className="text-sm font-semibold text-gray-700">
                Aufwand pro Woche (Stunden)
              </label>
              <div className="mt-2 flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={40}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="number"
                  min={0}
                  max={80}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-24 p-2 border rounded-xl"
                />
              </div>
              <div className="mt-2 text-xs text-gray-600">
                Beispiel: Terminabstimmung + wiederkehrende Support-Fragen + Vorqualifizierung
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-semibold text-gray-700">
                Interner Stundensatz (EUR)
              </label>
              <div className="mt-2 flex items-center gap-4">
                <input
                  type="range"
                  min={20}
                  max={200}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="number"
                  min={0}
                  max={500}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-24 p-2 border rounded-xl"
                />
              </div>
              <div className="mt-2 text-xs text-gray-600">
                Typisch: Lohnkosten + Overhead + Opportunitätskosten
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-gray-700">
                Einsparquote (Schätzung)
              </div>

              <div className="mt-3 grid sm:grid-cols-3 gap-3">
                {presets.map((p) => {
                  const active = p.key === preset.key;
                  return (
                    <button
                      key={p.key}
                      onClick={() => setPreset(p)}
                      className={[
                        "text-left rounded-2xl border p-4 transition",
                        active
                          ? "border-[#1E3352]/40 bg-[#1E3352]/10"
                          : "border-black/10 bg-white hover:bg-black/[0.02]",
                      ].join(" ")}
                      type="button"
                    >
                      <div className="font-semibold">{p.label}</div>
                      <div className="mt-1 text-xs text-gray-600">{p.hint}</div>
                      <div className="mt-2 text-xs font-semibold text-[#1E3352]">
                        {Math.round(p.rate * 100)}% Zeitersparnis
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-xs text-gray-600 leading-relaxed">
              Hinweis: Das ist eine grobe Orientierung. Der tatsächliche Effekt hängt von
              Volumen, Prozessqualität, Datenlage und Integrationen ab.
            </div>
          </div>

          {/* Results */}
          <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8">
            <div className="text-xl font-semibold">Ergebnis (Bandbreite)</div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-5">
                <div className="text-sm text-gray-600">Geschätzte Zeitersparnis</div>
                <div className="mt-1 text-2xl font-bold">
                  {result.savedHoursWeek.toFixed(1)} Std/Woche
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  basierend auf {Math.round(preset.rate * 100)}% Einsparquote
                </div>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-5">
                <div className="text-sm text-gray-600">Monatliche Einsparung</div>
                <div className="mt-1 text-2xl font-bold">
                  {formatEUR(result.lowMonth)} – {formatEUR(result.highMonth)}
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  grobe Bandbreite (±15%)
                </div>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] border border-black/10 p-5 sm:col-span-2">
                <div className="text-sm text-gray-600">Jährliche Einsparung</div>
                <div className="mt-1 text-3xl font-bold">
                  {formatEUR(result.lowYear)} – {formatEUR(result.highYear)}
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Orientierung auf Basis Ihrer Eingaben
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                onClick={onBook}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-xl bg-[#0B1220] text-white font-semibold hover:bg-[#1E3352] transition"
              >
                ROI im Erstgespräch prüfen
              </motion.button>

              <div className="text-sm text-gray-600">
                30 Minuten – konkrete Optionen & Prioritäten.
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-600 leading-relaxed">
              Disclaimer: Die Berechnung ist unverbindlich und dient nur als Orientierung.
              Einsparungen sind abhängig von Prozess, Datenlage und Umsetzung.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}