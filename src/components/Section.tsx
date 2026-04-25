type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return <section className={`px-6 py-16 md:px-10 md:py-20 ${className}`}>{children}</section>;
}
