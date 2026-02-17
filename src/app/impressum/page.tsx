import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

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
              65549 Limburg
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
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine 
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten 
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
              werden wir diese Inhalte umgehend entfernen.
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Haftung für Links</div>
            <div className="mt-2">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr 
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder 
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der 
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum 
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der 
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend 
              entfernen.
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Urheberrecht</div>
            <div className="mt-2">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
              nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf 
              dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Inhalte umgehend entfernen.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}