import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CrownDoodle, ScribbleDoodle, CloudBottomWave } from "./Doodles";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f5f8df] pt-2 sm:pt-3 lg:pt-4 pb-0 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[520px] lg:min-h-[470px]">

          {/* Left Column: Heading, Description & CTAs */}
          <div className="lg:col-span-6 z-20 pt-4 pb-4 lg:py-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[34px] sm:text-[44px] md:text-[48px] lg:text-[52px] xl:text-[62px] 2xl:text-[72px] font-extrabold text-[#0c3746] leading-[1.1] tracking-[-0.035em] max-w-[540px] xl:max-w-[660px] 2xl:max-w-[760px]">
              A Place for Every<br className="hidden sm:inline" />{" "}
              Child to Learn,<br className="hidden sm:inline" />{" "}
              Grow and Belong.
            </h1>

            <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20.5px] 2xl:text-[22.5px] text-[#0c3746] leading-[1.7] max-w-[500px] xl:max-w-[620px] 2xl:max-w-[680px] font-bold mx-auto lg:mx-0">
              Learning Lab supports children up to 15 years old through behavioural, ABA,
              speech and occupational therapies, assessments, learning programmes and
              enrichment activities. We help parents understand what their child may need,
              find a practical way forward and stay involved throughout the journey.
            </p>

            {/* CTA Buttons Row */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-5 sm:px-6 lg:px-7 xl:px-8 py-2.5 sm:py-3 xl:py-3.5 rounded-full text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] font-extrabold shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#f5f8df] hover:bg-[#0c3746] text-[#0c3746] hover:text-white border-[1.5px] border-[#0c3746] px-5 sm:px-6 lg:px-7 xl:px-8 py-2.5 sm:py-3 xl:py-3.5 rounded-full text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] font-extrabold transition-all duration-200 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Micro reassurance note */}
            <p className="mt-4 text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#0c3746] font-extrabold text-center lg:text-left">
              You can contact us even when you only have a concern, not a diagnosis.
            </p>
          </div>

          {/* Right Column: Visual Composition with Cutout & Doodles */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[550px] xl:h-[570px] flex items-end justify-center lg:justify-end z-10 select-none -mb-2 sm:-mb-6 md:-mb-8 mt-2 lg:mt-0">

            {/* Floating Hot Air Balloon Doodle (Left of children) */}
            <div className="absolute left-[2%] sm:left-[6%] lg:left-[0%] top-[8%] sm:top-[10%] lg:top-[5%] w-[58px] sm:w-[76px] md:w-[94px] lg:w-[72px] z-30 animate-float pointer-events-none">
              <Image
                src="/images/shape-img.png"
                alt="Hot Air Balloon Doodle"
                width={115}
                height={135}
                className="w-full h-auto drop-shadow-xs"
                priority
              />
            </div>

            {/* Hand-drawn Crown Doodle (Above the right girl's head) */}
            <div className="absolute right-[24%] sm:right-[28%] lg:right-[37%] top-[4%] sm:top-[6%] lg:top-[4%] w-[48px] sm:w-[64px] md:w-[84px] lg:w-[58px] z-30 pointer-events-none animate-crown">
              <CrownDoodle className="w-full h-auto" />
            </div>

            {/* Hand-drawn Yellow Scribble Doodle (Right edge near girl's elbow) */}
            <div className="absolute right-[1%] sm:right-[3%] bottom-[25%] sm:bottom-[30%] lg:right-[-15%] lg:bottom-[18%] w-[40px] sm:w-[54px] md:w-[70px] lg:w-[48px] z-30 pointer-events-none rotate-3">
              <ScribbleDoodle className="w-full h-auto" />
            </div>

            {/* Main Photo of the Two Girls */}
            <div className="relative w-full h-full max-w-[680px] lg:max-w-[640px] xl:max-w-[680px] lg:origin-bottom lg:translate-x-[-9%] lg:translate-y-8 lg:scale-[1.45]">
              <Image
                src="/images/fa9b422673ef1cd4bd7ffc14e23f2f2551290a42.png"
                alt="Two cheerful smiling children learning and holding books"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom filter drop-shadow-sm"
                priority
              />
            </div>

          </div>

        </div>
      </div>

      {/* Cloud / Scalloped Bottom Wave Divider */}
      <div className="relative z-20 -mt-10 w-full leading-none">
        <CloudBottomWave />
      </div>
    </section>
  );
}
