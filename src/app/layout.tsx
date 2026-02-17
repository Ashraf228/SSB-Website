import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soulesmartbusiness.com"),
  title: {
    default: "Soulé Smart Business | Websites & KI-Automation für Unternehmen",
    template: "%s | Soulé Smart Business",
  },
  description:
    "Strategischer Digitalisierungspartner: moderne Websites als Fundament und maßgeschneiderte KI-Lösungen zur Automatisierung, Effizienzsteigerung und Kostenreduktion.",
  applicationName: "Soulé Smart Business",
  alternates: { canonical: "https://soulesmartbusiness.com" },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://soulesmartbusiness.com",
    siteName: "Soulé Smart Business",
    title: "Soulé Smart Business | Websites & KI-Automation",
    description:
      "Moderne Websites und intelligente KI-Lösungen, die Prozesse automatisieren, Kosten reduzieren und Unternehmen effizienter machen.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Soulé Smart Business" }],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulé Smart Business | Websites & KI-Automation",
    description:
      "Moderne Websites und KI-Automation für Unternehmen – Effizienz steigern, Kosten senken, Prozesse automatisieren.",
    images: ["/og.jpg"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}