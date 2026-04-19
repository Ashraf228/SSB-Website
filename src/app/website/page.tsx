export default function Websites() {
  return (
    <main className="min-h-screen bg-[var(--surface-0)] px-6 py-24 text-[var(--ink-1)]">
      <div className="mx-auto max-w-4xl">
        <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
          Websites
        </div>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em]">
          Professionelle Websites für Unternehmen
        </h1>

        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
          Eine moderne Website ist mehr als eine digitale Visitenkarte. Sie ist ein
          zentraler Baustein für Sichtbarkeit, Vertrauen und qualifizierte Anfragen.
          Ich entwickle Websites, die klar kommunizieren, strukturiert aufgebaut sind
          und sich sinnvoll mit SEO und Google Ads verbinden lassen.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Was eine starke Website heute leisten muss
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Sie soll dein Angebot verständlich machen, Vertrauen aufbauen, Anfragen
              vereinfachen und gleichzeitig die Grundlage für SEO, Google Ads und
              digitale Prozesse schaffen. Genau deshalb denke ich Websites nicht nur
              visuell, sondern immer als Teil eines smarten Business-Setups.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">
              Worauf der Fokus liegt
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Klare Botschaften, saubere Seitenstruktur, mobile Nutzbarkeit, starke
              Nutzerführung und ein Aufbau, der spätere Automatisierungen oder
              Agentenlösungen sinnvoll mittragen kann.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
