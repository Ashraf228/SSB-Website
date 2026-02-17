"use client";

type Props = {
  direction?: "lightToDark" | "darkToLight";
};

export default function SectionTransition({ direction = "lightToDark" }: Props) {
  const base =
    direction === "lightToDark"
      ? {
          // hell -> dunkel
          from: "from-[#F3F4F6]",
          mid: "via-[#0B1220]/10",
          to: "to-[#0B1220]",
        }
      : {
          // dunkel -> hell
          from: "from-[#0B1220]",
          mid: "via-[#0B1220]/10",
          to: "to-[#F3F4F6]",
        };

  return (
    <div className="relative h-8 md:h-16 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${base.from} ${base.mid} ${base.to}`} />
      {/* super subtiler Blur (kein Balken) */}
      <div className={`absolute inset-0 blur-lg opacity-20 bg-gradient-to-b ${base.from} ${base.mid} ${base.to}`} />
    </div>
  );
}