import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soulesmartbusiness.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/impressum`, lastModified: new Date() },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date() },
  ];
}