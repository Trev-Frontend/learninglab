import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      avatar: "/images/7849aa8ae8183985fe0929e7d76cf2f5b84f2a3d.png",
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      author: "Nemo enim ipsam",
      role: "Student Father",
    },
    {
      id: 2,
      avatar: "/images/6a8dda26130e50c061a10f1ee6459f4d34f3ca98.png",
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      author: "Nemo enim ipsam",
      role: "Student Father",
    },
    {
      id: 3,
      avatar: "/images/e542f2c07e0d14af51f47d1a1e6497b3d4ecca1d.png",
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      author: "Nemo enim ipsam",
      role: "Student Father",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#584a93] text-white text-[11px] font-bold tracking-wider uppercase">
            TESTIMONIALS
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight text-center mt-4">
          What parents say about their{" "}
          <span className="relative inline-block">
            experience
            {/* Orange Brush Stroke Underline */}
            <svg
              className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 2 7 C 50 12, 110 12, 158 4"
                stroke="#f15b2a"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Testimonials Carousel Container */}
        <div className="relative mt-12 sm:mt-16 flex items-center justify-between">

          {/* Carousel Left Arrow Wrapper with Pencil Doodle Floating High Above */}
          <div className="relative flex-shrink-0 mr-2 sm:mr-4 z-20">
            {/* Pencil Doodle Floating High Above Left Arrow with Generous Space */}
            <div className="absolute -top-28 sm:-top-32 -left-6 sm:-left-8 w-[38px] sm:w-[48px] pointer-events-none animate-float -rotate-12">
              <Image
                src="/images/df33005b54beabcf1d10816095d806e1c17b9916.png"
                alt="Pencil Doodle"
                width={60}
                height={120}
                className="w-full h-auto"
              />
            </div>

            {/* Left Arrow Button */}
            <button
              type="button"
              aria-label="Previous Testimonials"
              className="w-10 h-10 rounded-full bg-[#584a93] hover:bg-[#483c7d] text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 w-full max-w-[1100px] mx-auto">
            {testimonials.map((card) => (
              <div
                key={card.id}
                className="relative bg-white rounded-[24px] border border-[#3d4a52]/30 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all min-h-[260px]"
              >
                <div>
                  {/* Avatar + 5 Stars Row */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                      <Image
                        src={card.avatar}
                        alt={card.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#f15b2a] text-[#f15b2a]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote Content */}
                  <p className="mt-4 text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16px] 2xl:text-[17.5px] text-[#475b65] leading-[1.65] font-medium">
                    {card.text}
                  </p>
                </div>

                {/* Card Footer: Author Info & Purple Quote */}
                <div>
                  <div className="w-full border-b border-dashed border-[#e2e8f0] my-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] font-bold text-[#0c3746]">
                        {card.author}
                      </h4>
                      <p className="text-[12px] xl:text-[13.5px] text-[#718096] font-medium mt-0.5">
                        {card.role}
                      </p>
                    </div>
                    {/* Purple Quote Icon */}
                    <div className="w-7 h-7 relative flex-shrink-0">
                      <Image
                        src="/images/cf4c469b4d086931b8a3ff1738b5a6f74b408622.png"
                        alt="Quote Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Carousel Right Arrow Wrapper with Sparkle Doodle below */}
          <div className="relative flex-shrink-0 ml-2 sm:ml-4 z-20">
            {/* Right Arrow Button */}
            <button
              type="button"
              aria-label="Next Testimonials"
              className="w-10 h-10 rounded-full bg-[#584a93] hover:bg-[#483c7d] text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Sparkle Doodle Floating Below Right Arrow */}
            <div className="absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 w-[28px] sm:w-[34px] pointer-events-none animate-pulse-subtle">
              <Image
                src="/images/f950e9b1957234923cc8fa162e3b1a6f5535cca9.png"
                alt="Sparkle Doodle"
                width={50}
                height={50}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
