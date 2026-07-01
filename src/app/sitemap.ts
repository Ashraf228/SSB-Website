import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date() },
    { url: `${BASE_URL}/leistungen`, lastModified: new Date() },
    { url: `${BASE_URL}/branchen`, lastModified: new Date() },
    { url: `${BASE_URL}/leistungen/websites`, lastModified: new Date() },
    { url: `${BASE_URL}/leistungen/ki-automation`, lastModified: new Date() },
    { url: `${BASE_URL}/leistungen/ki-agenten`, lastModified: new Date() },
    { url: `${BASE_URL}/prozess`, lastModified: new Date() },
    { url: `${BASE_URL}/ueber-uns`, lastModified: new Date() },
    { url: `${BASE_URL}/faq`, lastModified: new Date() },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date() },
  ];
}
