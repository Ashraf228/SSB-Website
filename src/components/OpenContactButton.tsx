"use client";

type OpenContactButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function OpenContactButton({ children, className }: OpenContactButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("ssb:open-contact"))}
      className={className}
    >
      {children}
    </button>
  );
}
