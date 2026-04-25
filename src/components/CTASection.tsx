import OpenChatbotButton from "./OpenChatbotButton";
import OpenContactButton from "./OpenContactButton";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function CTASection({ eyebrow, title, description }: CTASectionProps) {
  return (
    <section className="px-6 pb-6 pt-8 md:px-10 md:pb-10">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-[linear-gradient(135deg,#0B1220_0%,#1E3352_100%)] px-8 py-12 text-white shadow-[0_28px_90px_rgba(11,18,32,0.28)] md:px-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">
              {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{description}</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <OpenChatbotButton className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--ink-1)] transition hover:bg-[var(--surface-1)]">
              KI-Beratung starten
            </OpenChatbotButton>
            <OpenContactButton className="rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              Gespräch anfragen
            </OpenContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
