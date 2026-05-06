import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://soulesmartbusiness.com"),
  title: {
    default: "Soule Smart Business | KI, Automatisierung und smartes Business",
    template: "%s | Soule Smart Business",
  },
  description:
    "Smart Business für Unternehmen mit Fokus auf KI, Automatisierung und effiziente Prozesse. SEO und Google Ads unterstützen als Wachstumsergänzung.",
  applicationName: "Soule Smart Business",
  alternates: { canonical: "https://soulesmartbusiness.com" },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://soulesmartbusiness.com",
    siteName: "Soule Smart Business",
    title: "Soule Smart Business | KI, Automatisierung und smartes Business",
    description:
      "Ich helfe Unternehmen, KI sinnvoll einzusetzen, Prozesse zu automatisieren und ihr Business smarter aufzustellen. SEO und Google Ads ergänzen das Wachstum.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Soule Smart Business" }],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soule Smart Business | KI, Automatisierung und smartes Business",
    description:
      "KI und Automatisierung für smartes Business. SEO und Google Ads als sinnvolle Wachstumsergänzung.",
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
        <Script id="ssb-widget-process-polyfill" strategy="beforeInteractive">
          {`
            window.global = window.global || window;
            window.process = window.process || { env: { NODE_ENV: "production" } };
          `}
        </Script>
        <Script
          id="ssb-widget-loader"
          src="https://widget.soulesmartbusiness.com/loader.js"
          data-site-key="kunde-1"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
