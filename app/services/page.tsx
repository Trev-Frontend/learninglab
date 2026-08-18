import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import ServicesGridSection from "@/components/ServicesGridSection";
import NotSureWhereToBeginSection from "@/components/NotSureWhereToBeginSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar (Cream with dark text & scalloped bottom wave) */}
      <TopBar variant="cream" />

      {/* Brand Navbar (Purple background with white logo & links matching Figma) */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Services Main Hero Section (Vibrant Purple Banner) */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[960px] mx-auto">
            Support built around what the child needs now.
          </h1>

          {/* Hero Sub-Paragraph 1 */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] text-white/95 leading-[1.65] max-w-[880px] mx-auto font-medium">
            A child may need help in one area or several. Some families begin with a clear recommendation, while others only know that something does not feel right. Our team helps parents choose an appropriate starting point through consultation and assessment.
          </p>

          {/* Hero Sub-Paragraph 2 */}
          <p className="mt-4 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] text-white/95 leading-[1.65] max-w-[880px] mx-auto font-medium">
            Services are mainly delivered individually. Group work is introduced when it supports specific goals or programme activities.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image 1 Exactly) */}
        <HeroMultiWave />
      </section>

      {/* 9 Pastel Cards Services Grid */}
      <ServicesGridSection />

      {/* "Not Sure Where To Begin?" Pre-Footer CTA */}
      <NotSureWhereToBeginSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
