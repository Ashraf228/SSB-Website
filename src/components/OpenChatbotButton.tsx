"use client";

const WIDGET_SRC = "https://widget.soulesmartbusiness.com/loader.js";
const WIDGET_SITE_KEY = "soulesmartbusiness";
const WIDGET_HOST_ID = "ssb-chat-host";

type OpenChatbotButtonProps = {
  children: React.ReactNode;
  className?: string;
};

type WidgetWindow = Window & {
  AIChatbotWidgetSDK?: {
    initHostedWidget?: (script: HTMLScriptElement) => void;
  };
};

function findWidgetLauncher() {
  const host = document.getElementById(WIDGET_HOST_ID);
  if (!host) return null;

  const shadowLauncher = host.shadowRoot?.querySelector<HTMLButtonElement>("button");
  if (shadowLauncher) return shadowLauncher;

  return host.querySelector<HTMLButtonElement>("button");
}

function ensureWidgetScript() {
  const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
  if (existingScript) return existingScript;

  const script = document.createElement("script");
  script.src = WIDGET_SRC;
  script.async = true;
  script.dataset.siteKey = WIDGET_SITE_KEY;
  document.body.appendChild(script);
  return script;
}

function tryOpenWidget(script: HTMLScriptElement, attempt = 0) {
  const launcher = findWidgetLauncher();
  if (launcher) {
    launcher.click();
    return;
  }

  if (attempt === 0) {
    (window as WidgetWindow).AIChatbotWidgetSDK?.initHostedWidget?.(script);
  }

  if (attempt >= 12) return;

  window.setTimeout(() => {
    tryOpenWidget(script, attempt + 1);
  }, attempt < 4 ? 160 : 280);
}

export default function OpenChatbotButton({ children, className }: OpenChatbotButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        const script = ensureWidgetScript();
        tryOpenWidget(script);
      }}
      className={className}
    >
      {children}
    </button>
  );
}
