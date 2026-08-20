import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  borderRadius: string;
  offsetClass: string;
}

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "We listen first",
      description:
        "We begin with the parents' concerns, the child's routine, school feedback and what has already been tried.",
      bgColor: "bg-[#F7FAE2]",
      offsetClass: "lg:mt-10",
    },
    {
      number: "02",
      title: "We assess needs",
      description:
        "Observation and structured assessment help us understand current abilities, challenges and support needs.",
      bgColor: "bg-[#FFDEE4]",
      offsetClass: "lg:mt-0",
    },
    {
      number: "03",
      title: "We create a plan",
      description:
        "Goals are selected around communication, behaviour, learning, regulation, independence and participation.",
      bgColor: "bg-[#E3E8FF]",
      offsetClass: "lg:mt-10",
    },
    {
      number: "04",
      title: "We review together",
      description:
        "Parents receive regular updates while plans are reviewed and adjusted as the child progresses.",
      bgColor: "bg-[#DBFFF9]",
      offsetClass: "lg:mt-0",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
            A clear, thoughtful process,<br className="hidden sm:inline" />{" "}
            <span className="relative inline-block">
              so families do not feel lost.
              {/* Hand-drawn Orange underline brush */}
              <svg
                className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 overflow-visible pointer-events-none"
                viewBox="0 0 340 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 7 C 100 12, 250 12, 338 4"
                  stroke="#f15b2a"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-[14.5px] sm:text-[16px] lg:text-[18px] xl:text-[20.5px] 2xl:text-[22px] text-[#0c3746] leading-[1.65] max-w-[840px] mx-auto font-bold">
            Our work begins with listening. We then use consultation, observation and assessment to understand the child&apos;s current strengths and needs before recommending a personalised plan.
          </p>
        </div>

        {/* 4 Figma Process Cards Grid (Uniform Rounded Rectangles with Staggered Offsets & Card Design Overlay Graphics) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8 items-start">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative ${step.bgColor} ${step.offsetClass} rounded-[32px] sm:rounded-[40px] px-5 py-6 sm:px-6 sm:py-7 xl:px-7 xl:py-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg min-h-[250px] sm:min-h-[270px] xl:min-h-[290px] justify-start group shadow-xs overflow-hidden`}
            >
              {/* Top-Left & Bottom-Right Figma Card Accent Overlays (Card 1) */}
              {idx === 0 && (
                <>
                  <img
                    src="/cards/carddesign1.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute top-0 left-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-top-left"
                  />
                  <img
                    src="/cards/carddesign2.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute bottom-0 right-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-bottom-right"
                  />
                </>
              )}

              {/* Top-Left & Bottom-Right Figma Card Accent Overlays (Card 2) */}
              {idx === 1 && (
                <>
                  <img
                    src="/cards/2card (2).png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute top-0 left-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-top-left"
                  />
                  <img
                    src="/cards/2card (1).png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute bottom-0 right-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-bottom-right"
                  />
                </>
              )}

              {/* Top-Left & Bottom-Right Figma Card Accent Overlays (Card 3) */}
              {idx === 2 && (
                <>
                  <img
                    src="/cards/3acrdtop.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute top-0 left-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-top-left"
                  />
                  <img
                    src="/cards/3crdbottom.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute bottom-0 right-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-bottom-right"
                  />
                </>
              )}

              {/* Top-Left & Bottom-Right Figma Card Accent Overlays (Card 4) */}
              {idx === 3 && (
                <>
                  <img
                    src="/cards/4crdtop.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute top-0 left-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-top-left"
                  />
                  <img
                    src="/cards/4crdbottom (1).png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute bottom-0 right-0 w-[22%] sm:w-[24%] max-w-[90px] h-auto pointer-events-none z-0 opacity-85 object-contain object-bottom-right"
                  />
                </>
              )}

              {/* Top Circular White Step Badge */}
              <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xs flex items-center justify-center mb-6 sm:mb-7 transition-transform group-hover:scale-105">
                <span className="text-[14.5px] sm:text-[16px] font-extrabold text-[#070713] tracking-tight">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="relative z-10 text-[19px] sm:text-[21px] lg:text-[22px] xl:text-[24px] font-extrabold text-[#070713] mb-3 tracking-tight leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="relative z-10 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] text-[#4B5563] leading-[1.6] font-medium max-w-[270px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
