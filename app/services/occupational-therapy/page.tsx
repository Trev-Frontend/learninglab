import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import OccupationalTherapyContentSection from "@/components/OccupationalTherapyContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function OccupationalTherapyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Occupational Therapy Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Supporting regulation, movement and everyday independence.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            Occupational Therapy supports children in growing the physical, sensory, motor and practical skills needed for daily life, play, learning and self-care. Occupational Therapy is helpful when sensory processing differences, motor difficulties, or coordination challenges affect daily routines, learning or participation.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Occupational Therapy 3-Row Content Section */}
      <OccupationalTherapyContentSection />

      {/* "Parent involvement" Pre-Footer CTA with Occupational-specific paragraph */}
      <ParentInvolvementSection description="Parents receive guidance on practical strategies and environmental adaptations that can be continued at home. Recommendations may include sensory routines, movement breaks, or task modifications." />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
