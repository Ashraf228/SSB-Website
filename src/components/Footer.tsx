import Link from "next/link";
import { contactDetails } from "@/lib/site-content";

const footerLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/branchen", label: "Branchen" },
  { href: "/prozess", label: "Prozess" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
            Soulé Smart Business
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
            KI-Agenten und Automatisierungslösungen für Unternehmen mit Anspruch.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Soulé Smart Business entwickelt KI-Agenten und Automatisierungslösungen, die
            Unternehmen Zeit, Arbeit und Kosten sparen.
          </p>

          <div className="mt-6 text-sm leading-7 text-white/68">
            {contactDetails.address.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div className="mt-3">Tel.: {contactDetails.phone}</div>
            <div>E-Mail: {contactDetails.email}</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/18 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45 md:px-10">
        © {new Date().getFullYear()} Soulé Smart Business
      </div>
    </footer>
  );
}
