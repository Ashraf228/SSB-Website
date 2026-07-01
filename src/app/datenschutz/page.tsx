import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Datenschutz",
    description:
      "Datenschutzhinweise von Soulé Smart Business zur Verarbeitung personenbezogener Daten auf dieser Website.",
    path: "/datenschutz",
  }),
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition"
        >
          ← Zur Startseite
        </Link>

        <h1 className="text-4xl font-bold mt-10">Datenschutzerklärung</h1>

        <section className="mt-10 space-y-10 text-white/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white">1. Verantwortlicher</h2>
            <p className="mt-3">
              Ashraf Soulé, Soulé Smart Business
              <br />
              Schulstrasse 36, 65549 Limburg, Deutschland
              <br />
              E-Mail: hello@soulesmartbusiness.com
              <br />
              Telefon: +49 155 11410215
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">2. Allgemeine Hinweise</h2>
            <p className="mt-3">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung
              dieser Website sowie zur Bearbeitung von Anfragen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">3. Hosting (Vercel)</h2>

            <p className="mt-3">
              Diese Website wird über die Plattform <strong>Vercel</strong> gehostet. Anbieter ist
              die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>

            <p className="mt-3">
              Beim Aufruf der Website werden durch Vercel bzw. die technische Infrastruktur
              automatisch Daten verarbeitet, die für den Betrieb und die Auslieferung der Website
              erforderlich sind (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Referrer-URL,
              Browser-/Geräteinformationen sowie Server-Logfiles).
            </p>

            <p className="mt-3">
              Die Verarbeitung erfolgt zur Bereitstellung, Sicherheit und Stabilität der Website
              (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an einer
              zuverlässigen und sicheren Darstellung unseres Online-Angebots).
            </p>

            <p className="mt-3">
              Es kann dabei zu einer Verarbeitung von Daten in den USA kommen. Für die Übermittlung
              werden geeignete Garantien genutzt, insbesondere Standardvertragsklauseln (SCC) im
              Rahmen eines Auftragsverarbeitungsvertrags (Art. 28 DSGVO / Art. 46 DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">4. Kontaktaufnahme</h2>
            <p className="mt-3">
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, verarbeiten wir die
              von Ihnen übermittelten Daten (z. B. Name, E-Mail, Telefonnummer, Nachricht),
              um Ihre Anfrage zu bearbeiten.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen/Vertrag)
              und/oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
            </p>
            <p className="mt-3">
              Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind,
              sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              5. KI-Chatfenster / Beratungsassistent
            </h2>
            <p className="mt-3">
              Auf dieser Website ist ein KI-Chatfenster von Soulé Smart Business eingebunden. Das
              Chatfenster dient dazu, Fragen zu unseren Leistungen zu beantworten, erste
              Einschätzungen zu KI-Agenten und Automatisierung zu geben sowie Kontakt- oder
              Beratungsanfragen vorzubereiten.
            </p>
            <p className="mt-3">
              Wenn Sie das Chatfenster nutzen, können insbesondere folgende Daten verarbeitet werden:
              Ihre eingegebenen Nachrichten, technische Sitzungsdaten, Zeitpunkt der Nutzung,
              aufgerufene Seite, Browser-/Geräteinformationen sowie Kontaktdaten, sofern Sie diese im
              Chat freiwillig angeben (z. B. Name, Unternehmen, E-Mail-Adresse oder Telefonnummer).
            </p>
            <p className="mt-3">
              Die Verarbeitung erfolgt zur Bereitstellung des Chatfensters, zur Beantwortung Ihrer
              Fragen, zur Vorbereitung einer Beratung sowie zur technischen Sicherheit und
              Verbesserung des Dienstes. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer effizienten Kommunikation und Bereitstellung eines
              digitalen Beratungsangebots). Wenn Sie über den Chat eine konkrete Anfrage stellen oder
              eine Beratung wünschen, kann zusätzlich Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) einschlägig sein.
            </p>
            <p className="mt-3">
              Bitte geben Sie im Chat keine besonderen Kategorien personenbezogener Daten im Sinne
              von Art. 9 DSGVO, keine Passwörter, Zugangsdaten, Zahlungsdaten, API-Schlüssel,
              vertraulichen Unternehmensgeheimnisse oder sonstige sensiblen Informationen ein.
            </p>
            <p className="mt-3">
              Chatverläufe und daraus entstehende Anfragen werden nur so lange gespeichert, wie dies
              für die Bearbeitung, technische Bereitstellung, Nachvollziehbarkeit oder gesetzliche
              Aufbewahrungspflichten erforderlich ist. Soweit Daten für eine konkrete Anfrage nicht
              mehr erforderlich sind, werden sie gelöscht oder anonymisiert.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              6. Cookies, lokale Speicherung und Tracking
            </h2>
            <p className="mt-3">
              Diese Website verwendet derzeit keine Marketing-Cookies und keine externen
              Werbetracking-Tools. Für den Betrieb des KI-Chatfensters können jedoch technisch
              notwendige Informationen im Browser gespeichert oder ausgelesen werden, z. B. um eine
              Chat-Sitzung zu ermöglichen, den Chatstatus zu halten oder die technische Bereitstellung
              sicherzustellen.
            </p>
            <p className="mt-3">
              Falls zukünftig Analyse- oder Marketing-Tools eingesetzt werden, wird diese
              Datenschutzerklärung entsprechend ergänzt und, soweit erforderlich, eine Einwilligung
              eingeholt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">7. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer Daten. Zudem haben Sie
              das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
