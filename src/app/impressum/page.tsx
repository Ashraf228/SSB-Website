import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition"
        >
          ← Zur Startseite
        </Link>

        <h1 className="text-4xl font-bold mt-10">Impressum</h1>

        <section className="mt-10 space-y-8 text-white/80 leading-relaxed">
          <div>
            <div className="text-white font-semibold">Angaben gemäß § 5 TMG</div>
            <div className="mt-2">
              Ashraf Soulé
              <br />
              Soulé Smart Business
              <br />
              Schulstrasse 36
              <br />
              65552 Eschhofen
              <br />
              Deutschland
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Kontakt</div>
            <div className="mt-2">
              Telefon: +49 155 11410215
              <br />
              E-Mail: soulesmartbusiness@gmail.com
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Umsatzsteuer</div>
            <div className="mt-2">
              Kleinunternehmer im Sinne von § 19 UStG (keine Ausweisung der Umsatzsteuer).
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Haftung für Inhalte</div>
            <div className="mt-2">
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte
              auf diesen Seiten verantwortlich. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte übernehmen wir keine Gewähr.
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Haftung für Links</div>
            <div className="mt-2">
              Diese Website enthält ggf. Links zu externen Websites Dritter. Auf deren Inhalte
              haben wir keinen Einfluss. Deshalb übernehmen wir für diese fremden Inhalte keine Gewähr.
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Urheberrecht</div>
            <div className="mt-2">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}