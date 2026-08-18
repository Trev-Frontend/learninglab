import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import ABATherapyContentSection from "@/components/ABATherapyContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function ABATherapyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* ABA Therapy Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Structured, individualised support for learning and everyday skills.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            Applied Behaviour Analysis (ABA) focuses on building functional communication, daily skills, engagement and learning readiness through structured, individualised teaching. ABA strategies are used thoughtfully when a child needs meaningful skill building and support through an ABA programme.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* ABA Therapy 3-Row Content Section */}
      <ABATherapyContentSection />

      {/* "Parent involvement" Pre-Footer CTA with ABA-specific paragraph */}
      <ParentInvolvementSection description="Parents receive regular updates and are guided on how to support progress at home between sessions. Formal progress reviews ensure that strategies remain aligned with family priorities." />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
