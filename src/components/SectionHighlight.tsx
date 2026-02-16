"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionHighlight({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          window.setTimeout(() => setActive(false), 900);
        }
      },
      { threshold: 0.28 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref as any}
      className={[
        "relative transition-[box-shadow,transform] duration-700 ease-out",
        active
          ? "shadow-[0_0_0_1px_rgba(30,51,82,0.12),0_0_80px_rgba(30,51,82,0.12)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}