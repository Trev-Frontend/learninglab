import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import KinderCrateContentSection from "@/components/KinderCrateContentSection";

export default function KinderCratePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* KinderCrate Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[880px] mx-auto">
            Purposeful activity packs for curious, growing minds.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[820px] mx-auto font-medium">
            KinderCrate brings together hands-on activities for children aged 3 to 12. Each physical pack is designed to make learning active, engaging and easier to practise beyond the classroom.
          </p>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Main KinderCrate Content Section */}
      <KinderCrateContentSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
