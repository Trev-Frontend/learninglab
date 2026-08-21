import React from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import EnrichmentProgrammesContentSection from "@/components/EnrichmentProgrammesContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function EnrichmentProgrammesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Enrichment Programmes Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Learning, creativity and confidence beyond the therapy room.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            Children thrive when given varied opportunities to express, explore, and learn in social environments. Enrichment Programmes are open to all children and run throughout the year, including seasonal and interest-based themes.
          </p>

          {/* Ask About Current Programmes Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f15b2a] hover:bg-[#d94a1b] text-white font-bold px-7 py-3 rounded-full text-[14px] transition-all shadow-md hover:shadow-lg"
            >
              Ask About Current Programmes &nbsp;&rarr;
            </Link>
          </div>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Enrichment Programmes 3-Row Content Section */}
      <EnrichmentProgrammesContentSection />

      {/* "Programme schedules change throughout the year." Pre-Footer CTA */}
      <ParentInvolvementSection
        title="Programme schedules change throughout the year."
        titleUnderline="year."
        description="Contact our team to enquire about current schedules and available sessions for your child."
      />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
