import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import ContactContentSection from "@/components/ContactContentSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Contact" />

      {/* Contact Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[960px] mx-auto">
            Let&apos;s understand what your child may need.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] text-white/95 leading-[1.65] max-w-[880px] mx-auto font-medium">
            You do not need to know the name of a therapy or have a diagnosis before contacting us. Tell us what you have noticed, and our team will help you understand the most suitable next step.
          </p>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Main Contact Content Section (with Map & Form) */}
      <ContactContentSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
