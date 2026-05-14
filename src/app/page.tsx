import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "KI-Agenten für Unternehmen",
  description:
    "KI-Agenten für Unternehmen: Support entlasten, Kundenanfragen automatisieren, Leads qualifizieren und Prozesse effizienter machen.",
  path: "/",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Soulé Smart Business",
    url: "https://soulesmartbusiness.com",
    telephone: "+4915511410215",
    email: "hello@soulesmartbusiness.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schulstrasse 36",
      postalCode: "65549",
      addressLocality: "Limburg",
      addressCountry: "DE",
    },
    founder: "Ashraf Soulé",
    areaServed: "DE",
    description:
      "Soulé Smart Business entwickelt KI-Agenten und KI-Automatisierung für Unternehmen, um Support zu entlasten, Leads zu qualifizieren und Prozesse zu beschleunigen.",
    knowsAbout: [
      "KI-Agenten",
      "KI-Support-Agenten",
      "KI-Lead-Agenten",
      "KI-Wissensdatenbank",
      "KI-Prozessautomatisierung",
      "KI im E-Commerce",
      "Digitale Prozessentlastung",
    ],
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
