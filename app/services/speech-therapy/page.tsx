import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import SpeechTherapyContentSection from "@/components/SpeechTherapyContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function SpeechTherapyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Speech Therapy Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Helping children understand, express and connect.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[840px] mx-auto font-medium">
            Communication is central to learning, relationships and everyday independence. Speech Therapy is provided when a child has difficulty understanding language, expressing needs, producing speech clearly or using communication socially with others.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Speech Therapy 3-Row Content Section */}
      <SpeechTherapyContentSection />

      {/* "Parent involvement" Pre-Footer CTA with Speech-specific paragraph */}
      <ParentInvolvementSection description="Parents receive guidance after sessions and practical communication strategies that can be used during ordinary routines to promote relaxed language growth and home carryover." />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
