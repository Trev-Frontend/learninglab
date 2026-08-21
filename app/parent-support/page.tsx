import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import ParentSupportContentSection from "@/components/ParentSupportContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function ParentSupportPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Parent Support" />

      {/* Parent Support Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[1000px] mx-auto">
            Parents should never be left outside the process.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-white/95 leading-[1.65] max-w-[880px] mx-auto font-medium">
            Child therapy works best when parents understand what is happening, know what skills are being worked on, and feel supported at home. Parent support is not separate from therapy; it is built into everything we do.
          </p>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Parent Support 3-Row Content Section */}
      <ParentSupportContentSection />

      {/* "Working with schools" Pre-Footer CTA */}
      <ParentInvolvementSection
        title="Working with schools"
        titleUnderline="schools"
        description="With parental consent, Learning Lab communicates with schools to align goals, share progress and arrange practical strategies. This ensures that support remains consistent across both home and school environments."
      />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
