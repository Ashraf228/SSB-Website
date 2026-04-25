"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import ChatbotWidgetPlaceholder from "./ChatbotWidgetPlaceholder";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setOpen(true);
    window.addEventListener("ssb:open-contact", openModal);
    return () => window.removeEventListener("ssb:open-contact", openModal);
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ContactModal open={open} onClose={() => setOpen(false)} />
      <ChatbotWidgetPlaceholder />
    </>
  );
}
