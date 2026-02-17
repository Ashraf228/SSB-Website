import HomePage from "@/components/HomePage";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Soulé Smart Business",
    url: "https://soulesmartbusiness.com",
    telephone: "+4915511410215",
    email: "soulesmartbusiness@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schulstrasse 36",
      postalCode: "65552",
      addressLocality: "Eschhofen",
      addressCountry: "DE",
    },
    founder: "Ashraf Soulé",
    areaServed: "DE",
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