import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soulesmartbusiness.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/leistungen`, lastModified: new Date() },
    { url: `${baseUrl}/branchen`, lastModified: new Date() },
    { url: `${baseUrl}/leistungen/websites`, lastModified: new Date() },
    { url: `${baseUrl}/leistungen/ki-automation`, lastModified: new Date() },
    { url: `${baseUrl}/leistungen/ki-agenten`, lastModified: new Date() },
    { url: `${baseUrl}/prozess`, lastModified: new Date() },
    { url: `${baseUrl}/ueber-uns`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    { url: `${baseUrl}/impressum`, lastModified: new Date() },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date() },
  ];
}
