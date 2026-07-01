import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { BASE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `KI-Agenten für Unternehmen | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Soulé Smart Business entwickelt KI-Agenten für Unternehmen in Limburg, Frankfurt und deutschlandweit: Support entlasten, Kundenanfragen automatisieren und Prozesse effizienter machen.",
  applicationName: SITE_NAME,
  alternates: { canonical: BASE_URL },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `KI-Agenten für Unternehmen | ${SITE_NAME}`,
    description:
      "KI-Agenten für Unternehmen, KI-Automatisierung, Support-Entlastung und strukturierte Kundenanfragen.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: `KI-Agenten für Unternehmen | ${SITE_NAME}`,
    description:
      "KI-Agenten für Unternehmen, KI-Automatisierung und entlastete Prozesse für Support, Leads und Anfragen.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.global = window.global || window;
              window.process = window.process || { env: { NODE_ENV: "production" } };
            `,
          }}
        />
        <script
          src="https://widget.soulesmartbusiness.com/loader.js"
          data-site-key="soulesmartbusiness"
          async
        />
      </body>
    </html>
  );
}
