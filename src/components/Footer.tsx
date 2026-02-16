import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-white font-semibold">Soulé Smart Business</div>
            <div className="mt-2 text-sm">
              Ashraf Soulé • Schulstrasse 36 • 65552 Eschhofen
              <br />
              Tel.: +49 155 11410215 • E-Mail: soulesmartbusiness@gmail.com
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link className="hover:text-white transition" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-white transition" href="/datenschutz">
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="mt-8 h-px bg-white/10" />

        <div className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Soulé Smart Business
        </div>
      </div>
    </footer>
  );
}