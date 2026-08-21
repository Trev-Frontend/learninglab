import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import SchoolsTrainingContentSection from "@/components/SchoolsTrainingContentSection";
import TrainingFormatSection from "@/components/TrainingFormatSection";

export default function SchoolsTrainingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Schools & Training" />

      {/* Schools & Training Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[1020px] mx-auto">
            Helping educators create classrooms where more children can participate.
          </h1>

          {/* Sub-Paragraph */}
          <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-white/95 leading-[1.65] max-w-[920px] mx-auto font-medium">
            Learning Lab provides customized consultancy, training sessions and qualification support for schools, educators and early years settings looking to build more inclusive learning environments. Programs are structured around your schedule, classroom dynamics, and existing teaching framework.
          </p>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Schools & Training 4-Row Content Section */}
      <SchoolsTrainingContentSection />

      {/* Training Format CTA Section */}
      <TrainingFormatSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
