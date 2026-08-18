import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import SchoolReadinessContentSection from "@/components/SchoolReadinessContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function SchoolReadinessPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* School Readiness Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Building the skills children need to participate in school.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            School readiness involves more than academic skills—it includes emotional regulation, self-care, social communication, independence and motor skills. School Readiness supports children in developing the prerequisite skills needed to enter school and participate in classroom life with confidence.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* School Readiness 3-Row Content Section */}
      <SchoolReadinessContentSection />

      {/* "Parent involvement" Pre-Footer CTA with School Readiness specific paragraph */}
      <ParentInvolvementSection description="Parents receive guidance on home routines that encourage independence and classroom readiness. School coordination can be arranged when requested to help the child settle into group learning environments." />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
