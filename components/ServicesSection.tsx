import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Behavioral Therapy",
      description:
        "Practical support for behaviour, routines, communication, emotional regulation and everyday participation.",
      image: "/images/0dd514193e0e2ede6e8dbf530e38f7bee6600173.jpg",
      isHighlighted: false,
      bgColor: "bg-white",
      textColor: "text-[#0c3746]",
      descColor: "text-[#566e7a]",
      tags: ["Behavior", "Communication", "Routines"],
      tagBg: "bg-[#fff1eb] text-[#e05324]",
      dividerBorder: "border-[#f0ece9]",
    },
    {
      title: "Speech Therapy",
      description:
        "Support for understanding language, expressing needs, speech development and social communication.",
      image: "/images/c748fb700e005d98ac4af35f1ba41f9a00b2d378.jpg",
      isHighlighted: true,
      bgColor: "bg-[#fae738]",
      textColor: "text-[#0c3746]",
      descColor: "text-[#284350]",
      tags: ["Speech", "Language", "Understanding"],
      tagBg: "bg-[#eedb2c] text-[#0c3746]",
      dividerBorder: "border-[#edd820]",
    },
    {
      title: "Remedial Support & Therapy",
      description:
        "Individualised academic support that strengthens foundational skills and responds to how the child learns.",
      image: "/images/0a64b02b2a7e5f81b9d4fe2e4549797b672ccf4f.jpg",
      isHighlighted: false,
      bgColor: "bg-white",
      textColor: "text-[#0c3746]",
      descColor: "text-[#566e7a]",
      tags: ["Support", "Foundational Skill", "Learning"],
      tagBg: "bg-[#fff1eb] text-[#e05324]",
      dividerBorder: "border-[#f0ece9]",
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#5b4bbb] text-white pt-6 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      
      {/* Top Scallop Wave from White Section to Purple Section */}
      <div className="w-full overflow-hidden leading-none z-10 hidden -mt-7 sm:-mt-8 mb-6 sm:mb-8 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="w-full h-5 sm:h-7 md:h-8 fill-white"
        >
          <path d="M0,0 
            C 60,30 120,30 180,0 
            C 240,30 300,30 360,0 
            C 420,30 480,30 540,0 
            C 600,30 660,30 720,0 
            C 780,30 840,30 900,0 
            C 960,30 1020,30 1080,0 
            C 1140,30 1200,30 1260,0 
            C 1320,30 1380,30 1440,0 
            L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background Doodles */}
        {/* Hot Air Balloon (Top Left - Floating) */}
        <div className="absolute left-[2%] sm:left-[5%] top-[0%] w-[44px] sm:w-[54px] pointer-events-none opacity-80 z-10 animate-float">
          <Image
            src="/images/1241e545d4b20e3352d0671e66397a6616db0500.png"
            alt="Hot Air Balloon Doodle"
            width={60}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Crown (Top Right - Floating Crown) */}
        <div className="hidden sm:block absolute right-[5%] sm:right-[9%] top-[1%] sm:top-[3%] w-[44px] sm:w-[52px] pointer-events-none z-10 animate-crown">
          <Image
            src="/images/9f341c555c650e166e0887ba08b7c129a313678d.png"
            alt="Crown Doodle"
            width={60}
            height={60}
            className="w-full h-auto"
          />
        </div>

        {/* Star (Top Left Header Area - Pulsing) */}
        <div className="absolute left-[3%] sm:left-[6%] top-[12%] sm:top-[8%] w-[34px] sm:w-[42px] pointer-events-none z-20 animate-pulse-subtle">
          <Image
            src="/images/be42050e723a90220a193b7157b26b96bcadfcfc.png"
            alt="Star Doodle"
            width={45}
            height={45}
            className="w-full h-auto"
          />
        </div>

        {/* Paper Airplane (Bottom Right - Subtle Float) */}
        <div className="absolute -right-2 sm:right-[1%] bottom-[4%] sm:bottom-[8%] w-[60px] sm:w-[80px] pointer-events-none opacity-80 z-10 animate-float-subtle">
          <Image
            src="/images/eafa199f841323b88e5690e54e8a5adc0652f40f.png"
            alt="Paper Airplane Doodle"
            width={100}
            height={130}
            className="w-full h-auto"
          />
        </div>

        {/* Header Title & Subtitle */}
        <div className="text-center max-w-[900px] mx-auto relative z-20">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] font-extrabold text-white leading-[1.2] tracking-tight">
            Support designed around the child,<br className="hidden sm:inline" />{" "}
            not only the{" "}
            <span className="relative inline-block">
              diagnosis.
              {/* Hand-drawn Orange underline */}
              <svg
                className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 overflow-visible pointer-events-none"
                viewBox="0 0 160 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 7 C 50 12, 110 12, 158 5"
                  stroke="#f15b2a"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <div className="mt-4 sm:mt-5 space-y-1.5 text-[14.5px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[21.5px] text-white leading-[1.65] max-w-[840px] mx-auto font-bold">
            <p>
              Some children need therapy. Some need help with learning, school participation, communication, regulation or confidence.
            </p>
            <p>
              Our team helps parents choose a suitable starting point instead of placing every child into the same programme.
            </p>
          </div>
        </div>

        {/* Carousel & Cards Section with comfortable space for arrows */}
        <div className="mt-10 sm:mt-12 relative z-20 px-0 sm:px-12 md:px-14">
          
          {/* Navigation Arrows (Hidden on small mobile screens) */}
          <button
            aria-label="Previous service"
            className="hidden sm:flex absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 text-white items-center justify-center backdrop-blur-xs transition-all z-30 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            aria-label="Next service"
            className="hidden sm:flex absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 text-white items-center justify-center backdrop-blur-xs transition-all z-30 shadow-md cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* 3 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`${service.bgColor} rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group select-none`}
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative w-full aspect-[4/3] rounded-[16px] sm:rounded-[18px] overflow-hidden bg-black/5 mb-4 sm:mb-5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-extrabold ${service.textColor} mb-2.5 tracking-tight leading-snug`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] ${service.descColor} leading-[1.6] font-bold`}>
                    {service.description}
                  </p>
                </div>

                {/* Dashed Separator & Tags */}
                <div className="mt-5 pt-4 border-t border-dashed border-black/10">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`${service.tagBg} px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14.5px] 2xl:text-[15.5px] font-bold tracking-tight whitespace-nowrap`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Centered Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 flex justify-center relative z-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-7 py-3 rounded-full text-[13.5px] sm:text-[14px] font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
