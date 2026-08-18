import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import AssessmentsContentSection from "@/components/AssessmentsContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function AssessmentsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Assessments Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Clarity before conclusions.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            Understanding a child's strengths and developmental needs is the first step toward effective support. Assessments clarify the nature of difficulty and what support should follow. We offer formal and informal assessments across developmental, psychological, communication, motor and academic areas.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Assessments 3-Row Content Section */}
      <AssessmentsContentSection />

      {/* "Formal and informal assessment" Pre-Footer CTA with Assessments specific title & paragraph */}
      <ParentInvolvementSection
        title="Formal and informal assessment"
        titleUnderline="assessment"
        description="Formal assessments provide standardized scoring and diagnostic clarity, whereas informal assessments offer quick observations to guide therapy goals and intervention planning. Both are used based on clinical need."
      />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
