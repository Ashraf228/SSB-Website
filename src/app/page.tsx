import HomePage from "@/components/HomePage";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Soule Smart Business",
    url: "https://soulesmartbusiness.com",
    telephone: "+4915511410215",
    email: "soulesmartbusiness@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schulstrasse 36",
      postalCode: "65549",
      addressLocality: "Limburg",
      addressCountry: "DE",
    },
    founder: "Ashraf Soule",
    areaServed: "DE",
    description:
      "Smart Business fuer Unternehmen mit Fokus auf KI, Automatisierung und effiziente Prozesse. SEO und Google Ads dienen als Wachstumsergaenzung.",
    knowsAbout: [
      "KI im Unternehmen",
      "Automatisierung",
      "Prozessoptimierung",
      "SEO",
      "Google Ads",
      "Websites fuer Unternehmen",
      "Digitale Effizienz",
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
