import type { Metadata } from "next";
import "./globals.css";

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
  const widgetLoaderSrc =
    process.env.NEXT_PUBLIC_CHAT_WIDGET_SRC || "https://widget.soulesmartbusiness.com/loader.js";
  const widgetSiteKey =
    process.env.NEXT_PUBLIC_CHAT_WIDGET_SITE_KEY || "Kunde 1";

  return (
    <html lang="de">
      <body>
        {widgetLoaderSrc && widgetSiteKey ? (
          <script
            id="ssb-chat-widget"
            src={widgetLoaderSrc}
            data-site-key={widgetSiteKey}
            defer
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
