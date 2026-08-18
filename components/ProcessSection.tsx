import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  borderRadius: string;
}

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "We listen first",
      description:
        "We begin with the parents' concerns, the child's routine, school feedback and what has already been tried.",
      bgColor: "bg-[#edf5d5]",
      accentColor: "text-[#0c3746]",
      borderRadius: "rounded-[32px]",
    },
    {
      number: "02",
      title: "We assess needs",
      description:
        "Observation and structured assessment help us understand current abilities, challenges and support needs.",
      bgColor: "bg-[#fae2e2]",
      accentColor: "text-[#0c3746]",
      borderRadius: "rounded-[32px]",
    },
    {
      number: "03",
      title: "We create a plan",
      description:
        "Goals are selected around communication, behaviour, learning, regulation, independence and participation.",
      bgColor: "bg-[#e5ecfb]",
      accentColor: "text-[#0c3746]",
      borderRadius: "rounded-[32px]",
    },
    {
      number: "04",
      title: "We review together",
      description:
        "Parents receive regular updates while plans are reviewed and adjusted as the child progresses.",
      bgColor: "bg-[#d5f3ec]",
      accentColor: "text-[#0c3746]",
      borderRadius: "rounded-[32px]",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0c3746] leading-[1.18] tracking-tight">
            A clear{" "}
            <span className="relative inline-block">
              process, so families do not
              {/* Hand-drawn Orange underline brush */}
              <svg
                className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 overflow-visible pointer-events-none"
                viewBox="0 0 320 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 7 C 90 12, 230 12, 318 4"
                  stroke="#f15b2a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            feel lost.
          </h2>

          <p className="mt-4 text-[13.5px] sm:text-[14.5px] text-[#566e7a] leading-[1.6] max-w-[660px] mx-auto font-normal">
            Our work begins with listening. We then use consultation, observation and assessment to understand the child&apos;s current strengths and needs before recommending a personalised plan.
          </p>
        </div>

        {/* 4 Process Cards Grid without hard borders and balanced sizing */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative ${step.bgColor} ${step.borderRadius} p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[290px] sm:min-h-[320px] justify-start group`}
            >
              {/* Top Step Number Badge */}
              <div className="w-11 h-7 rounded-full bg-white shadow-2xs flex items-center justify-center mb-6 sm:mb-8 transition-transform group-hover:scale-105">
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0c3746] tracking-wide">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-[18px] sm:text-[19px] font-extrabold text-[#0c3746] mb-3 tracking-tight leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.55] font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
