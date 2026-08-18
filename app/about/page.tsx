import React from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import OurValuesSection from "@/components/OurValuesSection";
import TeamSection from "@/components/TeamSection";
import OurCentreSection from "@/components/OurCentreSection";

export default function AboutPage() {
  const pillars = [
    {
      id: 1,
      title: "Our Mission",
      image: "/images/37da56d9320f4b075066935308e56719fbec96f0.jpg",
      description:
        "To provide ethical, personalised and evidence-based therapy, learning support and professional training that help children build practical skills, give parents greater clarity and equip educators to create more inclusive learning environments.",
      bgAccent: "from-[#8b77e8] to-[#6d55df]",
    },
    {
      id: 2,
      title: "Our Vision",
      image: "/images/d1803e0d49822aa8d87c16ac4a768818438cefc4.jpg",
      description:
        "A future where every child is welcomed into opportunities to learn, participate and grow, while families and schools receive the understanding and guidance needed to support them.",
      bgAccent: "from-[#7b61ff] to-[#593bee]",
    },
    {
      id: 3,
      title: "Our Approach",
      image: "/images/824ba16d6b08a37885eac2b71ef9e1b8f39d488b.jpg",
      description:
        "No single method suits every child. Our team combines clinical observation, assessment findings, evidence-based practice, play-based learning, ABA principles where appropriate, EYFS guidance and academic milestones to create meaningful goals.",
      bgAccent: "from-[#8c6eff] to-[#6543ed]",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar (Cream with dark text & scalloped bottom wave) */}
      <TopBar variant="cream" />

      {/* Brand Navbar (Purple background with white logo & links matching Figma) */}
      <Navbar variant="purple" activeNav="About" />

      {/* About Us Hero Section (Vibrant Purple Banner) */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Hero Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[900px] mx-auto">
            A place built around possibility, not exclusion.
          </h1>

          {/* Hero Sub-Paragraph 1 */}
          <p className="mt-5 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[820px] mx-auto font-medium">
            Learning Lab is an inclusive therapy, learning and training centre where children are welcomed as individuals. We support children up to 15 years old through therapy, assessments, remedial support, school readiness, enrichment programmes and personalised learning experiences.
          </p>

          {/* Hero Sub-Paragraph 2 */}
          <p className="mt-4 text-[13.5px] sm:text-[14.5px] text-white/90 leading-[1.65] max-w-[820px] mx-auto font-medium">
            Our work also extends to parents, teachers and schools through consultation, professional training, classroom support and educational programmes.
          </p>

        </div>

        {/* 3-Layered Wave Divider (Matching Figma Image 1 Exactly) */}
        <HeroMultiWave />
      </section>

      {/* "Why Learning Lab Was Created" Section */}
      <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Headline */}
          <div className="text-center">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
              Why{" "}
              <span className="relative inline-block">
                Learning Lab
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 C 60 12, 140 12, 198 4"
                    stroke="#f15b2a"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Was Created
            </h2>

            {/* Intro Paragraph 1 */}
            <p className="mt-5 text-[13.5px] sm:text-[14px] text-[#566e7a] max-w-[780px] mx-auto leading-[1.65] font-medium">
              Learning Lab Global Facilitation Pvt. Ltd. was established in July 2024 with a clear purpose: to create a place where children with diverse needs can build skills, participate in meaningful activities and access opportunities that are too often closed to them.
            </p>

            {/* Intro Paragraph 2 */}
            <p className="mt-3.5 text-[13.5px] sm:text-[14px] text-[#566e7a] max-w-[780px] mx-auto leading-[1.65] font-medium">
              Families are frequently told that a child is not ready, does not fit or cannot be accommodated. Learning Lab was created to begin from a different question: what does this child need in order to participate, learn and grow?
            </p>
          </div>

          {/* 3 Pillars Grid: Our Mission, Our Vision, Our Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-14 sm:mt-16">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="flex flex-col items-center text-center group">
                
                {/* Organic Blob Photo Container with Purple Gradient Backdrop Accent */}
                <div className="relative w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] flex items-center justify-center">
                  
                  {/* Purple Accent Backdrop Blob */}
                  <div
                    className={`absolute inset-0 rounded-[50%_40%_60%_40%/40%_50%_40%_60%] bg-gradient-to-br ${pillar.bgAccent} opacity-85 scale-105 group-hover:scale-110 transition-transform duration-500`}
                  />

                  {/* Organic Circular/Blob Photo Frame */}
                  <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden shadow-lg border-4 border-white z-10">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="260px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0c3746] mt-6 tracking-tight">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[13px] sm:text-[13.5px] text-[#566e7a] leading-[1.6] font-medium max-w-[340px]">
                  {pillar.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* "Our Values" Section */}
      <OurValuesSection />

      {/* Leadership & Therapy Academic Team Section */}
      <TeamSection />

      {/* "Our Centre" Section */}
      <OurCentreSection />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
