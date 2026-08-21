import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FiguredOutSection from "@/components/FiguredOutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import CareAndProgressSection from "@/components/CareAndProgressSection";
import ParentsProcessSection from "@/components/ParentsProcessSection";
import TherapyBannerSection from "@/components/TherapyBannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InclusionBannerSection from "@/components/InclusionBannerSection";
import NotSureCTASection from "@/components/NotSureCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-clip">
      {/* Top Notification Announcement Bar */}
      <TopBar variant="purple" />

      {/* Main Brand Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Figured Out / Experience & Concerns Section */}
      <FiguredOutSection />

      {/* 4-Step Process Section */}
      <ProcessSection />

      {/* Services Showcase Section */}
      <ServicesSection />

      {/* Care and Progress Section */}
      <CareAndProgressSection />

      {/* Parents Process Section */}
      <ParentsProcessSection />

      {/* Therapy in Karachi & Guidance Banner Section */}
      <TherapyBannerSection />

      {/* Parent Testimonials Section */}
      <TestimonialsSection />

      {/* A Wider Conversation About Inclusion Banner Section */}
      <InclusionBannerSection />

      {/* Not Sure What Your Child Needs CTA Section */}
      <NotSureCTASection />

      {/* Main Brand Footer */}
      <Footer />
    </main>
  );
}
