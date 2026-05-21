import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BusinessProblemsSection from "../components/BusinessProblemsSection";
import WhyPresenceSection from "../components/WhyPresenceSection";

import ProcessSection from "../components/ProcessSection";
import DemoProjectsSection from "../components/DemoProjectsSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

import FinalCTASection from "../components/FinalCTASection";
import WhatsAppFloatButton from "../components/WhatsAppFloatButton";
import StickyCTA from "../components/StickyCTA";
import PricingSection from "../components/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <Header />
      <main id="main" className="relative">
        <HeroSection />
        <ServicesSection />
        <BusinessProblemsSection />
        <ProcessSection />
        <FeaturesSection />
        <DemoProjectsSection />
        <WhyPresenceSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection/>


        <FinalCTASection />
      </main>

      <WhatsAppFloatButton />
      <StickyCTA />

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Local Growth Agency. All rights reserved.</p>
            <p className="text-slate-500">Built for lead generation — calls, WhatsApp & local visibility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

