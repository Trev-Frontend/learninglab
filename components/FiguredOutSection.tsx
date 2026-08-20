import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function FiguredOutSection() {
  const leftColumnPoints = [
    "Delayed speech or difficulty expressing needs",
    "Sensory sensitivities, overload or difficulty regulating",
    "Difficulty sitting, focusing or following instructions",
    "Delays in play, independence, social interaction or everyday skills",
    "School admission or school-readiness concerns",
  ];

  const rightColumnPoints = [
    "Frequent tantrums, refusal, aggression or emotional outbursts",
    "Repetitive behaviour or stimming that is affecting daily routines",
    "Challenges with reading, writing, communication or schoolwork",
    "Concerns related to ASD, ADHD or global developmental delay",
    "Confusion about a diagnosis, assessment or the next step",
  ];

  return (
    <section className="relative w-full bg-white py-10 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)] gap-8 lg:gap-x-16 xl:gap-x-20 items-center">
          
          {/* Left Column: Boy Photo, Badge & Doodles */}
          <div className="relative flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[340px] xl:max-w-[380px]">
              
              {/* Shining Lightbulb Doodle */}
              <div className="absolute right-[6%] -top-[5%] w-[48px] sm:w-[58px] z-20 pointer-events-none animate-pulse-subtle">
                <Image
                  src="/images/e73f5f1daa0ba93b33aa76ea2a4843fa2391a2e7.png"
                  alt="Lightbulb Doodle"
                  width={65}
                  height={85}
                  className="w-full h-auto"
                />
              </div>

              {/* Smiling Sun Doodle */}
              <div className="absolute left-1 sm:-left-[10%] lg:-left-[20%] bottom-[11%] w-[52px] sm:w-[68px] z-20 pointer-events-none animate-float">
                <Image
                  src="/images/097e754c18f0ef0ee95022e3eaa2c5b6cd6e1f7f.png"
                  alt="Smiling Sun Doodle"
                  width={75}
                  height={75}
                  className="w-full h-auto"
                />
              </div>

              {/* Main Photo of Boy with Backpack */}
              <div className="relative w-full aspect-[400/540]">
                <Image
                  src="/images/331c70886aafe2423f0038664473c101726efda2.png"
                  alt="Smiling boy with glasses and orange backpack"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-contain object-center filter drop-shadow-sm"
                  priority
                />
              </div>

              {/* 38+ Experience Badge */}
              <div className="absolute right-[-2%] bottom-[12%] w-[115px] sm:w-[135px] aspect-[1/1] z-20 flex items-center justify-center pointer-events-none drop-shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/e6073202e0325e1758f0ad1a4d4c6c5d9482f279.png"
                    alt="38+ Experience Badge"
                    fill
                    sizes="135px"
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pb-2 pr-1 select-none">
                    <span className="text-[24px] sm:text-[28px] font-black tracking-tight leading-none">
                      38+
                    </span>
                    <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-wide text-white/95 mt-0.5">
                      Experience
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heading, Paragraphs & 2-Column Checklist */}
          <div className="relative z-10">
            
            {/* Main Headline in 2 clean rows with curved brush underline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
              You do not need to have<br className="hidden sm:inline" />{" "}
              <span className="relative inline-block">
                everything figured out.
                {/* Hand-drawn Orange underline brush */}
                <svg
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 overflow-visible pointer-events-none"
                  viewBox="0 0 320 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 C 100 12, 230 12, 318 5"
                    stroke="#f15b2a"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Introductory copy */}
            <div className="font-figma-copy mt-4 space-y-2.5 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#3b4e57] leading-[1.65] font-medium max-w-[680px]">
              <p>
                Parents often contact us after receiving different opinions from relatives,
                schools, professionals or the internet. You may have been told to wait,
                become stricter or stop worrying. You may also be carrying questions that feel
                difficult to ask.
              </p>
              <p>
                Learning Lab offers a respectful place to discuss what you are noticing and
                understand what support may help.
              </p>
            </div>

            {/* Checklist Section */}
            <div className="mt-5 relative">
              <h3 className="font-figma-heading text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[18px] 2xl:text-[19.5px] font-extrabold text-[#0c3746] mb-3.5 tracking-tight">
                You may be here because your child is experiencing:
              </h3>

              {/* 2-Column Grid of Checkpoints */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 lg:gap-x-6 gap-y-2.5">
                
                {/* Column 1 */}
                <div className="space-y-2.5">
                  {leftColumnPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 group">
                      <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#584a93] text-white flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.8]" />
                      </div>
                      <span className="font-figma-copy text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16.5px] 2xl:text-[18px] text-[#2c3e47] font-semibold leading-[1.45]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-2.5">
                  {rightColumnPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 group">
                      <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#584a93] text-white flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.8]" />
                      </div>
                      <span className="font-figma-copy text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16.5px] 2xl:text-[18px] text-[#2c3e47] font-semibold leading-[1.45]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Lightning Bolt Doodle */}
              <div className="absolute right-0 top-full mt-2 w-[26px] sm:w-[30px] pointer-events-none z-20 rotate-6 animate-pulse-subtle">
                <Image
                  src="/images/a2a71a253dbb9da8c3c7069bb0f7fc05945bc49d.png"
                  alt="Lightning Bolt Doodle"
                  width={40}
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
