import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function CareAndProgressSection() {
  const points = [
    {
      title: "Open communication",
      description:
        "Parents know what the team is working on, why it matters and what can be practised outside sessions.",
    },
    {
      title: "Personalised planning",
      description:
        "Goals are based on assessment findings, practical priorities and the child's individual pace.",
    },
    {
      title: "Certified multidisciplinary team",
      description:
        "Clinical, therapy and education professionals work together when support is needed across more than one area.",
    },
    {
      title: "Visible progress tracking",
      description:
        "Session updates, every two weeks progress discussions and periodic reviews help families stay informed.",
    },
    {
      title: "Ethical practice",
      description:
        "We avoid fear-based language, rushed labels, quick-fix promises and one-size-fits-all recommendations.",
    },
    {
      title: "A welcoming environment",
      description:
        "Children are supported through safe, purposeful and engaging activities that build participation and confidence.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Creative 3-Image Collage & Doodles */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Collage Container */}
            <div className="relative w-full max-w-[440px] xl:max-w-[480px] h-[380px] sm:h-[430px] xl:h-[470px]">
              
              {/* Hot Air Balloon Doodle nicely positioned beside the bottom-left image */}
              <div className="absolute -left-12 sm:-left-16 top-[48%] -translate-y-1/2 w-[52px] sm:w-[62px] pointer-events-none z-20 animate-float -rotate-6">
                <Image
                  src="/images/shape-img.png"
                  alt="Hot Air Balloon Doodle"
                  width={80}
                  height={100}
                  className="w-full h-auto drop-shadow-xs"
                />
              </div>

              {/* Crown Doodle top right */}
              <div className="absolute right-[6%] sm:right-[10%] -top-3 sm:-top-5 w-[42px] sm:w-[50px] pointer-events-none z-20 rotate-12 animate-crown">
                <Image
                  src="/images/9f341c555c650e166e0887ba08b7c129a313678d.png"
                  alt="Crown Doodle"
                  width={60}
                  height={60}
                  className="w-full h-auto"
                />
              </div>

              {/* Image 1: Top Hedgehog Toy */}
              <div className="absolute left-[8%] sm:left-[10%] top-0 w-[52%] h-[50%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md z-10">
                <Image
                  src="/images/64cc31d70620c84412a1e2938e293e28e672fa75.jpg"
                  alt="Hedgehog learning activity"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>

              {/* Image 2: Bottom-Left Shoes */}
              <div className="absolute left-0 bottom-0 w-[48%] h-[56%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md z-10">
                <Image
                  src="/images/5400922f336eb9b1867b861c1c320672809f2492.jpg"
                  alt="Shoe lacing activity"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

              {/* Image 3: Center-Right Foreground Therapist & Child */}
              <div className="absolute right-[4%] sm:right-[6%] top-[14%] w-[54%] h-[80%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg z-20">
                <Image
                  src="/images/8f91b3d527ffa5ef8c84e538e217d2c86c08df18.jpg"
                  alt="Therapist with child at table"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>

            </div>

          </div>

          {/* Right Column: Heading & 6 Structured Bullet Points */}
          <div className="lg:col-span-6 relative z-10">
            
            {/* Headline with curved orange underline */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
              Care parents can understand and<br className="hidden sm:inline" />{" "}
              <span className="relative inline-block">
                progress they can follow.
                {/* Hand-drawn Orange underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 overflow-visible pointer-events-none"
                  viewBox="0 0 320 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 C 90 12, 230 12, 318 4"
                    stroke="#f15b2a"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* 6 Structured Feature Points */}
            <div className="mt-7 sm:mt-8 space-y-4 sm:space-y-5">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#584a93] text-white flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.8]" />
                  </div>
                  <div>
                    <h3 className="text-[14.5px] sm:text-[15.5px] lg:text-[17px] xl:text-[19px] 2xl:text-[21px] font-extrabold text-[#0c3746] leading-snug">
                      {point.title}
                    </h3>
                    <p className="mt-0.5 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18.5px] text-[#334650] leading-[1.6] font-medium">
                      {point.description}
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
