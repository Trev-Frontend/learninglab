import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import FAQContentSection from "@/components/FAQContentSection";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="FAQs" />

      {/* FAQ Hero Banner */}
      <section className="faq-hero relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-24 sm:pb-32 text-white overflow-hidden">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[980px] mx-auto">
            Frequently Asked Questions
          </h1>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Main FAQ Accordion Content Section */}
      <FAQContentSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
