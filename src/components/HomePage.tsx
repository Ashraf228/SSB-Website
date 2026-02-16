"use client";

import { useState } from "react";
import Hero from "./Hero";
import Services from "./Services";
import FAQ from "./FAQ";
import NextStep from "./NextStep";
import ContactModal from "./ContactModal";
import Footer from "./Footer";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Hero onBook={() => setOpen(true)} />
      <Services onBook={() => setOpen(true)} />
      <FAQ />
      <NextStep onBook={() => setOpen(true)} />
      <ContactModal open={open} onClose={() => setOpen(false)} />
        <Footer />
    </main>
  );
}