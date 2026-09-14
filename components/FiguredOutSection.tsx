import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function FiguredOutSection() {
  const checklistRows = [
    {
      left: "Delayed speech or difficulty expressing needs",
      right: "Frequent tantrums, refusal, aggression or emotional outbursts",
    },
    {
      left: "Sensory sensitivities, overload or difficulty regulating",
      right: "Repetitive behaviour or stimming that is affecting daily routines",
    },
    {
      left: "Difficulty sitting, focusing or following instructions",
      right: "Challenges with reading, writing, communication or schoolwork",
    },
    {
      left: "Delays in play, independence, social interaction or everyday skills",
      right: "Concerns related to ASD, ADHD or global developmental delay",
    },
    {
      left: "School admission or school-readiness concerns",
      right: "Confusion about a diagnosis, assessment or the next step",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[430px_minmax(0,1fr)] gap-10 lg:gap-x-14 xl:gap-x-18 items-center">
          
          {/* Left Column: Girl Photo with Orange Blob Backdrop, Badges & Doodles */}
          <div className="relative flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[370px] xl:max-w-[410px]">
              
              {/* Organic Golden-Orange Blob Shape Behind the Girl */}
              <div className="absolute inset-0 -left-4 -right-4 -top-3 -bottom-2 -z-10 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 380 460"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-xs"
                >
                  <path
                    d="M 55 420 
                       C 15 350, 10 200, 48 135 
                       C 82 65, 155 12, 235 28 
                       C 315 44, 355 120, 355 220 
                       C 355 320, 320 405, 250 430 
                       C 180 450, 95 450, 55 420 Z"
                    fill="#f7a41d"
                  />
                </svg>
              </div>

              {/* Shining Lightbulb Doodle (Upper Right of Girl) */}
              <div className="absolute right-[4%] -top-[4%] sm:-top-[6%] w-[46px] sm:w-[54px] z-20 pointer-events-none animate-pulse-subtle">
                <Image
                  src="/images/e73f5f1daa0ba93b33aa76ea2a4843fa2391a2e7.png"
                  alt="Lightbulb Doodle"
                  width={65}
                  height={85}
                  className="w-full h-auto drop-shadow-xs"
                />
              </div>

              {/* Smiling Sun Doodle (Lower Left) */}
              <div className="absolute -left-6 sm:-left-8 lg:-left-10 bottom-[18%] sm:bottom-[20%] w-[58px] sm:w-[70px] z-20 pointer-events-none animate-float">
                <Image
                  src="/images/097e754c18f0ef0ee95022e3eaa2c5b6cd6e1f7f.png"
                  alt="Smiling Sun Doodle"
                  width={75}
                  height={75}
                  className="w-full h-auto drop-shadow-xs"
                />
              </div>

              {/* Main Photo of Girl with Floral Backpack from /newimages/ */}
              <div className="relative w-full aspect-[360/490]">
                <Image
                  src="/newimages/dffa6bcd1e89e4ef6a61b2c15133d19a1e024d39.png"
                  alt="Young student with floral backpack smiling over her shoulder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-contain object-bottom filter drop-shadow-sm relative z-10"
                  priority
                />
              </div>

              {/* 38+ Experience Badge (Lower Right, overlapping backpack) */}
              <div className="absolute -right-3 sm:-right-5 bottom-[16%] sm:bottom-[18%] w-[110px] sm:w-[130px] aspect-[1/1] z-20 flex items-center justify-center pointer-events-none drop-shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/e6073202e0325e1758f0ad1a4d4c6c5d9482f279.png"
                    alt="38+ Experience Badge"
                    fill
                    sizes="130px"
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pb-2 pr-1 select-none">
                    <span className="text-[24px] sm:text-[28px] font-black tracking-tight leading-none">
                      38+
                    </span>
                    <span className="text-[10.5px] sm:text-[12px] font-semibold tracking-wide text-white/95 mt-0.5">
                      Experience
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heading, Paragraphs & 2-Column Checklist */}
          <div className="relative z-10">
            
            {/* Main Headline: Row 1 "You do not need to have everything", Row 2 "figured out." */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] font-extrabold text-[#0c3746] leading-[1.18] tracking-tight">
              You do not need to have everything<br className="hidden sm:inline" />{" "}
              <span className="relative inline-block">
                figured out.
                {/* Hand-drawn Orange underline brush */}
                <svg
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 overflow-visible pointer-events-none"
                  viewBox="0 0 170 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 C 50 12, 120 12, 168 5"
                    stroke="#f15b2a"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Introductory copy */}
            <div className="mt-4 sm:mt-5 space-y-2.5 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px] text-[#3b4e57] leading-[1.65] font-normal max-w-[680px]">
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
            <div className="mt-6 sm:mt-7 relative">
              <h3 className="text-[14.5px] sm:text-[16px] lg:text-[17.5px] xl:text-[19.5px] font-bold text-[#0c3746] mb-4 sm:mb-4.5 tracking-tight">
                You may be here because your child is experiencing:
              </h3>

              {/* 2-Column Grid of Checkpoints - Row-by-Row Aligned */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3.5 sm:gap-y-4">
                {checklistRows.map((row, idx) => (
                  <React.Fragment key={idx}>
                    {/* Left Point */}
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#5b4bbb] text-white flex items-center justify-center mt-0.5 shadow-2xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16px] text-[#334650] font-medium leading-[1.48]">
                        {row.left}
                      </span>
                    </div>

                    {/* Right Point */}
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#5b4bbb] text-white flex items-center justify-center mt-0.5 shadow-2xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16px] text-[#334650] font-medium leading-[1.48]">
                        {row.right}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Lightning Bolt Doodle (Bottom Right Corner) */}
              <div className="absolute right-0 top-full mt-2 w-[24px] sm:w-[28px] pointer-events-none z-20 rotate-6 animate-pulse-subtle">
                <Image
                  src="/images/a2a71a253dbb9da8c3c7069bb0f7fc05945bc49d.png"
                  alt="Lightning Bolt Doodle"
                  width={40}
                  height={80}
                  className="w-full h-auto drop-shadow-xs"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
