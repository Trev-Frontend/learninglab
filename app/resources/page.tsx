import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import ResourcesContentSection from "@/components/ResourcesContentSection";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Resources" />

      {/* Resources Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[980px] mx-auto">
            Clear information for parents and educators.
          </h1>

          {/* Sub-Paragraphs */}
          <div className="mt-5 space-y-3 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-white/95 leading-[1.65] max-w-[880px] mx-auto font-medium">
            <p>
              The Learning Lab resource centre shares practical, respectful information about child development, communication, behaviour, learning, sensory needs, school participation and inclusive education.
            </p>
            <p className="text-white/85 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px]">
              Resources are written to inform and guide. They do not replace an individual consultation, assessment or professional recommendation.
            </p>
          </div>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Main Resources Content Section */}
      <ResourcesContentSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
