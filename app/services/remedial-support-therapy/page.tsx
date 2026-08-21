import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import RemedialSupportContentSection from "@/components/RemedialSupportContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function RemedialSupportTherapyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Remedial Support & Therapy Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Closing learning gaps through support that matches how the child learns.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            Not all children learn academic concepts in the same way or at the same pace. Remedial Support & Therapy provides targetted instruction to build specific academic skills, remedial support & therapy identifies where learning difficulty lies and builds flexible ways to learn, understand and retain.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Remedial Support 3-Row Content Section */}
      <RemedialSupportContentSection />

      {/* "Parent involvement" Pre-Footer CTA with Remedial-specific paragraph */}
      <ParentInvolvementSection description="Parents receive regular updates and easy-to-manage home strategies whenever requested. Learning goals can coordinate with the school to support consistent learning support." />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
