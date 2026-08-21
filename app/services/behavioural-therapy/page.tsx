import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import BehaviouralTherapyContentSection from "@/components/BehaviouralTherapyContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

export default function BehaviouralTherapyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Behavioural Therapy Service Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[920px] mx-auto">
            Understanding behaviour and building more helpful ways to cope.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[820px] mx-auto font-medium">
            Behaviour is communication. A child may cry, refuse, withdraw, become aggressive or struggle with routines because they do not yet have another way to express a need, manage discomfort or respond to a situation. Behavioural Therapy helps us understand the pattern and teach practical skills that support safer, more successful participation.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image Exactly) */}
        <HeroMultiWave />
      </section>

      {/* Behavioural Therapy 3-Row Content Section */}
      <BehaviouralTherapyContentSection />

      {/* "Parent involvement" Pre-Footer CTA */}
      <ParentInvolvementSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
