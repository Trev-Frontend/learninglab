import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import EarlyInterventionContentSection from "@/components/EarlyInterventionContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function EarlyInterventionPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Early Intervention Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Early support for emerging developmental concerns.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            When a young child shows early signs of a communication delay, sensory processing concerns, motor difficulties or behavioural challenges, early support makes a significant difference. Early Intervention is designed so that families do not have to wait for delays to broaden before receiving guidance.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Early Intervention 3-Row Content Section */}
      <EarlyInterventionContentSection />

      {/* "Parent involvement" Pre-Footer CTA with Early Intervention specific paragraph */}
      <ParentInvolvementSection description="Parents are closely involved through session updates, guidance and regular progress reviews. This helps families understand how to support progress, home routines, and promote general growth." />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
