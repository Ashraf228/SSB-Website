import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { BASE_URL, SITE_NAME, buildPageMetadata } from "@/lib/seo";

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
    name: SITE_NAME,
    url: BASE_URL,
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
      "KI-Agenten für Unternehmen in Limburg",
      "KI-Agenten für Unternehmen in Frankfurt",
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
