import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/website", destination: "/leistungen/websites", permanent: true },
      { source: "/automatisierung", destination: "/leistungen/ki-automation", permanent: true },
      {
        source: "/automatisierung-dienstleister",
        destination: "/leistungen/ki-automation",
        permanent: true,
      },
      { source: "/ki-agenten", destination: "/leistungen/ki-agenten", permanent: true },
      { source: "/ki-agenten-handwerk", destination: "/leistungen/ki-agenten", permanent: true },
      { source: "/leisten/ki-chatbot", destination: "/leistungen/ki-agenten", permanent: true },
      { source: "/leistungen/ki-chatbot", destination: "/leistungen/ki-agenten", permanent: true },
      { source: "/seo-google-ads", destination: "/leistungen", permanent: true },
      { source: "/seo-google-ads-limburg", destination: "/leistungen", permanent: true },
      {
        source: "/case-ki-agent-dienstleister",
        destination: "/leistungen/ki-agenten",
        permanent: true,
      },
      {
        source: "/case-automatisierung-regionaler-betrieb",
        destination: "/leistungen/ki-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
