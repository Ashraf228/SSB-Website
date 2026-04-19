import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-0)] text-[var(--ink-2)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-[var(--ink-1)]">Soule Smart Business</div>
            <div className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Smart Business fuer Unternehmen: Prozesse optimieren, Zeit und Kosten
              sparen sowie Sichtbarkeit durch SEO und Google Ads aufbauen.
            </div>
            <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Ashraf Soule • Schulstrasse 36 • 65549 Limburg
              <br />
              Tel.: +49 155 11410215 • E-Mail: soulesmartbusiness@gmail.com
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link className="transition hover:text-[var(--ink-1)]" href="/impressum">
              Impressum
            </Link>
            <Link className="transition hover:text-[var(--ink-1)]" href="/datenschutz">
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="mt-8 h-px bg-[var(--line)]" />

        <div className="mt-6 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Soule Smart Business
        </div>
      </div>
    </footer>
  );
}
