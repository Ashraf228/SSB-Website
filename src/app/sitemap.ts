import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soulesmartbusiness.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/ki-agenten`, lastModified: new Date() },
    { url: `${baseUrl}/ki-agenten-handwerk`, lastModified: new Date() },
    { url: `${baseUrl}/automatisierung`, lastModified: new Date() },
    { url: `${baseUrl}/automatisierung-dienstleister`, lastModified: new Date() },
    { url: `${baseUrl}/seo-google-ads`, lastModified: new Date() },
    { url: `${baseUrl}/seo-google-ads-limburg`, lastModified: new Date() },
    { url: `${baseUrl}/case-ki-agent-dienstleister`, lastModified: new Date() },
    { url: `${baseUrl}/case-automatisierung-regionaler-betrieb`, lastModified: new Date() },
    { url: `${baseUrl}/website`, lastModified: new Date() },
    { url: `${baseUrl}/impressum`, lastModified: new Date() },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date() },
  ];
}
