import Link from "next/link";

type ServiceCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  bullets: string[];
};

export default function ServiceCard({
  eyebrow,
  title,
  description,
  href,
  bullets,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_16px_44px_rgba(11,18,32,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,18,32,0.12)]"
    >
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-2)]">
        {eyebrow}
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink-1)]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{description}</p>
      <div className="mt-6 space-y-3 text-sm text-[var(--ink-2)]">
        {bullets.map((bullet) => (
          <div key={bullet} className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-1)]" />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
      <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition group-hover:gap-3">
        Mehr erfahren
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
