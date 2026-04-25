import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { founderHighlights, founderParagraphs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Über Ashraf Soulé und Soulé Smart Business: transparent, professionell und mit Fokus auf Effizienz, Struktur und langfristige Partnerschaft.",
};

export default function UeberUnsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Über uns"
        title="Transparente Zusammenarbeit, schlanke Struktur und ein klarer Fokus auf Wirkung."
        description="Soulé Smart Business ist bewusst fokussiert aufgebaut: direkt, partnerschaftlich und auf Lösungen ausgerichtet, die Unternehmen langfristig entlasten."
      />

      <Section className="bg-[#0B1220] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Founder Section
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Ashraf Soulé und der Anspruch, digitale Struktur mit echtem Nutzen zu verbinden.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-white/78">
              {founderParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 || paragraph === "Genau hier setze ich an." ? "font-medium text-white" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {founderHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="text-sm text-white/50">Soulé Smart Business</div>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/75 leading-7">{item.desc}</p>
              </div>
            ))}

            <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7">
              <div className="text-sm text-white/50">Langfristige Partnerschaft</div>
              <div className="mt-3 text-2xl font-semibold leading-tight">
                Mehr Struktur. Weniger Aufwand. Bessere digitale Abläufe.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Zusammenarbeit"
        title="Startup-nah in der Arbeitsweise, professionell in der Umsetzung."
        description="Kurze Wege, direkte Abstimmung und ein klarer Blick auf langfristige digitale Entwicklung statt kurzfristiger Einzelmaßnahmen."
      />
    </main>
  );
}
