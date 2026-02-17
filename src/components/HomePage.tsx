"use client";

import { useState } from "react";
import Hero from "./Hero";
import Services from "./Services";
import FAQ from "./FAQ";
import NextStep from "./NextStep";
import ContactModal from "./ContactModal";
import Footer from "./Footer";
import Problem from "./Problem";
import Process from "./Process";
import WhySoule from "./WhySoule";
import Scenarios from "./Scenarios";
import ROI from "./ROI";
import ROICalculator from "./ROICalculator";
import StickyCTA from "./StickyCTA";
import SectionTransition from "./SectionTransition";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Hero onBook={() => setOpen(true)} />
      <Problem onBook={() => setOpen(true)} />
        <SectionTransition direction="lightToDark" />
      <Services onBook={() => setOpen(true)} />
       <SectionTransition direction="darkToLight" />
      <Scenarios onBook={() => setOpen(true)} />
        <SectionTransition direction="lightToDark" />
      <ROI onBook={() => setOpen(true)} />
        <SectionTransition direction="darkToLight" />
      <ROICalculator onBook={() => setOpen(true)} />
        <SectionTransition direction="lightToDark" />
      <Process onBook={() => setOpen(true)} />
        <SectionTransition direction="darkToLight" />
      <WhySoule />
      <FAQ />
      <SectionTransition direction="lightToDark" />
      <NextStep onBook={() => setOpen(true)} />
      <StickyCTA onBook={() => setOpen(true)} isModalOpen={open} />
      <ContactModal open={open} onClose={() => setOpen(false)} />
        <Footer />
    </main>
  );
}