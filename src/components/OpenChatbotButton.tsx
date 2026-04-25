"use client";

type OpenChatbotButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function OpenChatbotButton({ children, className }: OpenChatbotButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("ssb:open-chatbot"))}
      className={className}
    >
      {children}
    </button>
  );
}
