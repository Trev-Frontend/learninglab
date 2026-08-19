import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function OurValuesSection() {
  const values = [
    {
      title: "Respect before labels",
      description:
        "We speak about children with dignity and focus on support needs rather than judgement.",
    },
    {
      title: "Clarity over fear",
      description:
        "Parents receive honest guidance without exaggerated promises or frightening language.",
    },
    {
      title: "Ethics in every interaction",
      description:
        "Recommendations are made according to assessed need, professional scope and the child's wellbeing.",
    },
    {
      title: "Progress grounded in evidence",
      description:
        "Goals are tracked through observation, data, parent feedback and formal review.",
    },
    {
      title: "Open communication",
      description:
        "Parents are informed, included and encouraged to raise concerns throughout the process.",
    },
    {
      title: "Participation and confidence",
      description:
        "We help children build skills that matter in learning, relationships and everyday life.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Creative 3-Image Collage & Doodles */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Collage Container */}
            <div className="relative w-full max-w-[460px] xl:max-w-[500px] h-[380px] sm:h-[430px] xl:h-[470px]">
              
              {/* Hot Air Balloon Doodle Floating Far Left */}
              <div className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 w-[52px] sm:w-[64px] pointer-events-none z-20 animate-float -rotate-6">
                <Image
                  src="/images/shape-img.png"
                  alt="Hot Air Balloon Doodle"
                  width={80}
                  height={100}
                  className="w-full h-auto drop-shadow-xs"
                />
              </div>

              {/* Crown Doodle top right */}
              <div className="absolute right-[6%] -top-4 w-[42px] sm:w-[50px] pointer-events-none z-20 rotate-12 animate-crown">
                <Image
                  src="/images/9f341c555c650e166e0887ba08b7c129a313678d.png"
                  alt="Crown Doodle"
                  width={60}
                  height={60}
                  className="w-full h-auto"
                />
              </div>

              {/* Image 1: Top-Left Sensory Gym Room with Blue Hammock & Ladder */}
              <div className="absolute left-[6%] top-0 w-[50%] h-[50%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md z-10">
                <Image
                  src="/images/3b83111c5b2520f22ff8dc201c50b09c9532fd29.jpg"
                  alt="Sensory gym room with blue hammock and climbing ladder"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>

              {/* Image 2: Bottom-Left Yellow Curved Table with Colorful Toys */}
              <div className="absolute left-0 bottom-0 w-[48%] h-[54%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md z-10">
                <Image
                  src="/images/570e872b69c48891eb76831b5861d6945ea4c67e.jpg"
                  alt="Yellow curved table with colorful learning blocks"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

              {/* Image 3: Center-Right Foreground Overhead Rice/Sand Tray Activity */}
              <div className="absolute right-[2%] top-[10%] w-[52%] h-[82%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-xl z-20">
                <Image
                  src="/images/4966022a35f53b7a80b815de4fb54b9d5cbfcc25.jpg"
                  alt="Overhead view of sensory rice tray activity on blue table"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>

            </div>

          </div>

          {/* Right Column: Headline & 6 Value Points */}
          <div className="lg:col-span-6 relative z-10">
            
            {/* Headline */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
              Our{" "}
              <span className="relative inline-block">
                Values
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
                  viewBox="0 0 120 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 C 40 12, 80 12, 118 4"
                    stroke="#f15b2a"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* 6 Value Points */}
            <div className="mt-7 sm:mt-8 space-y-4 sm:space-y-5">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#584a93] text-white flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.8]" />
                  </div>
                  <div>
                    <h3 className="text-[14.5px] sm:text-[15.5px] lg:text-[17px] xl:text-[19px] 2xl:text-[21px] font-extrabold text-[#0c3746] leading-snug">
                      {val.title}
                    </h3>
                    <p className="mt-0.5 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[19px] 2xl:text-[20.5px] text-[#0c3746] leading-[1.6] font-bold">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
