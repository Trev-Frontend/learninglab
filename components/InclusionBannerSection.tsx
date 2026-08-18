import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InclusionBannerSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Orange Rounded Container Card */}
        <div className="relative w-full bg-[#f15b2a] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Headline, Narrative Copy & CTA Button */}
            <div className="lg:col-span-6 relative z-10 flex flex-col justify-between h-full min-h-[280px]">
              <div>
                {/* Headline */}
                <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-white leading-[1.2] tracking-tight">
                  A wider conversation about<br />
                  inclusion
                </h2>

                {/* Paragraph Description */}
                <p className="mt-4 text-[13px] sm:text-[14px] text-white/95 leading-[1.65] font-medium max-w-[460px]">
                  Watch Rutba Damani join the OTS Educational Podcast for a discussion on autism, parenting, the education system, child psychology and the social barriers that can leave children and families feeling excluded.
                </p>
              </div>

              {/* Button & White Star Doodle Row */}
              <div className="mt-7 sm:mt-8 flex items-center justify-between">
                <Link
                  href="/schools-training"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-white/90 text-[#f15b2a] text-[13.5px] font-bold shadow-xs transition-all"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                {/* White Star Doodle */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 relative opacity-95">
                  <Image
                    src="/images/be42050e723a90220a193b7157b26b96bcadfcfc.png"
                    alt="Star Doodle"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Photo Card & Yellow Lightning Doodle */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              
              {/* Photo Container Card */}
              <div className="relative w-full max-w-[500px] h-[260px] sm:h-[320px] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-xl border-2 border-white/20">
                <Image
                  src="/images/2d214957761585d1a899f737eb876086eb45e60b.jpg"
                  alt="Podcast discussion on inclusion"
                  fill
                  sizes="500px"
                  className="object-cover"
                />
              </div>

              {/* Yellow Lightning Bolt Doodle Sticking Out On The Right Edge */}
              <div className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-[32px] sm:w-[40px] pointer-events-none z-20 animate-pulse-subtle">
                <Image
                  src="/images/a2a71a253dbb9da8c3c7069bb0f7fc05945bc49d.png"
                  alt="Lightning Doodle"
                  width={60}
                  height={80}
                  className="w-full h-auto"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
