"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, ExternalLink } from "lucide-react";

export interface Testimonial {
  id: number;
  initials: string;
  avatarBg: string;
  avatarTextColor: string;
  rating: number;
  text: string;
  author: string;
  role: string;
  googleReviewUrl: string;
}

export default function TestimonialsSection() {
  const defaultGoogleUrl = "https://share.google/hGmRw3TVCdPQtb11E";

  const testimonials: Testimonial[] = [
    {
      id: 1,
      initials: "TA",
      avatarBg: "bg-[#f3e8ff]",
      avatarTextColor: "text-[#6b21a8]",
      rating: 5,
      text: "I am coming to the Learning Lab for almost six months now and my child comes very happily and enjoys the bond with his therapists . Entirety is very cooperative and really we are a family JazakAllah",
      author: "Tooba Alvi",
      role: "Google Review • Verified Parent",
      googleReviewUrl: "https://share.google/KXPqxaKoWfiSU0CRg",
    },
    {
      id: 2,
      initials: "SD",
      avatarBg: "bg-[#e0f2fe]",
      avatarTextColor: "text-[#0369a1]",
      rating: 5,
      text: "All the sessions are a reflection of a lot of hard work, in-depth inquiry and thorough research.",
      author: "Shamsah Dhanani",
      role: "Google Review • Verified Parent",
      googleReviewUrl: "https://share.google/F4YroRWFQflD0VKFM",
    },
    {
      id: 3,
      initials: "GH",
      avatarBg: "bg-[#eef2ff]",
      avatarTextColor: "text-[#3730a3]",
      rating: 5,
      text: "Very beneficial institute for learners",
      author: "Ghulam Hussain",
      role: "Google Review • Verified Parent",
      googleReviewUrl: "https://share.google/fgzi8FWFa2T5jqp9Y",
    },
    {
      id: 4,
      initials: "SK",
      avatarBg: "bg-[#ecfdf5]",
      avatarTextColor: "text-[#047857]",
      rating: 5,
      text: "Nice",
      author: "Sohail Khan",
      role: "Google Review • Verified Parent",
      googleReviewUrl: "https://share.google/1EpvL8I0mz2haWRXM",
    },
    {
      id: 5,
      initials: "SQ",
      avatarBg: "bg-[#0097a7]",
      avatarTextColor: "text-white",
      rating: 5,
      text: "The Learning Lab is like a second home for us. My son is treated like family and he has made remarkable progress under their care.",
      author: "Saba Qayyum",
      role: "Google Review • Verified Parent",
      googleReviewUrl: "https://share.google/MlIYw0utFRQlFjq9d",
    },
    {
      id: 6,
      initials: "FK",
      avatarBg: "bg-[#fef3c7]",
      avatarTextColor: "text-[#b45309]",
      rating: 5,
      text: "5-Star Rating for Learning Lab on Google Business.",
      author: "Farhad Karamally",
      role: "Google Local Guide • Verified Rating",
      googleReviewUrl: defaultGoogleUrl,
    },
    {
      id: 7,
      initials: "MM",
      avatarBg: "bg-[#f1f5f9]",
      avatarTextColor: "text-[#475569]",
      rating: 3,
      text: "3-Star Rating for Learning Lab on Google Business.",
      author: "Murtaza Ali Merchant",
      role: "Google Local Guide • Verified Rating",
      googleReviewUrl: defaultGoogleUrl,
    },
    {
      id: 8,
      initials: "KS",
      avatarBg: "bg-[#faf5ff]",
      avatarTextColor: "text-[#7e22ce]",
      rating: 5,
      text: "5-Star Rating for Learning Lab on Google Business.",
      author: "Kenan Ahmed Siddiqi",
      role: "Google Local Guide • Verified Rating",
      googleReviewUrl: defaultGoogleUrl,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive Items Per Page Handler
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Maximum index so we don't scroll past empty slots
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto-play timer every 5 seconds (pauses when hovered)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#584a93] text-white text-[11px] sm:text-[12px] xl:text-[13px] font-extrabold tracking-wider uppercase">
            TESTIMONIALS
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight text-center mt-4">
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

        {/* Testimonials Carousel Slider Container */}
        <div
          className="relative mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Desktop Left Arrow Button (Hidden on Mobile) */}
          <div className="hidden sm:block relative flex-shrink-0 mr-2 sm:mr-3.5 z-20">
            {/* Pencil Doodle Floating High Above Left Arrow */}
            <div className="absolute -top-28 sm:-top-32 -left-6 sm:-left-8 w-[38px] sm:w-[48px] pointer-events-none animate-float -rotate-12">
              <Image
                src="/images/df33005b54beabcf1d10816095d806e1c17b9916.png"
                alt="Pencil Doodle"
                width={60}
                height={120}
                className="w-full h-auto"
              />
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#584a93] hover:bg-[#483c7d] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Sliding Carousel Viewport */}
          <div className="w-full overflow-hidden max-w-[1140px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((card) => (
                <div
                  key={card.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 flex flex-col"
                >
                  <div className="relative bg-white rounded-[24px] border border-[#3d4a52]/20 p-5 sm:p-6 xl:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all h-full min-h-[220px] xl:min-h-[245px] group">
                    <div>
                      {/* Top Row: Initials Avatar + Un-blocked 5 Stars */}
                      <div className="flex items-center gap-3">
                        {/* Initials Avatar */}
                        <div
                          className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full ${card.avatarBg} ${card.avatarTextColor} font-extrabold text-[14px] xl:text-[16px] flex items-center justify-center shadow-2xs flex-shrink-0 border border-black/5`}
                        >
                          {card.initials}
                        </div>

                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {[...Array(card.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 xl:w-4.5 xl:h-4.5 fill-[#f15b2a] text-[#f15b2a]"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Quote Content */}
                      <p className="mt-3.5 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] text-[#1c333d] leading-[1.6] font-semibold">
                        &ldquo;{card.text}&rdquo;
                      </p>
                    </div>

                    {/* Card Footer: Author Info with Clickable Google Review Link */}
                    <div className="mt-4 pb-2">
                      <div className="w-full border-b border-dashed border-[#e2e8f0] my-2.5" />
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px] font-extrabold text-[#0c3746]">
                            {card.author}
                          </h3>

                          {/* Clean Clickable Google Link with Orange Icon */}
                          <a
                            href={card.googleReviewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${card.author}'s Google Review`}
                            className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] text-[#584a93] hover:text-[#f15b2a] font-bold mt-0.5 transition-colors group/link"
                          >
                            <span>{card.role}</span>
                            <ExternalLink className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#f15b2a] stroke-[2.5] flex-shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bottom-Right Corner Double Quotes Badge */}
                    <div className="absolute -bottom-3 -right-3 sm:-right-3.5 bg-white px-2 py-1 rounded-full border border-[#3d4a52]/20 shadow-2xs flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 xl:w-6.5 xl:h-6.5 relative flex-shrink-0">
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
          </div>

          {/* Desktop Right Arrow Button (Hidden on Mobile) */}
          <div className="hidden sm:block relative flex-shrink-0 ml-2 sm:ml-3.5 z-20">
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#584a93] hover:bg-[#483c7d] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
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

        {/* Mobile Navigation Controls (Arrows + Pagination Dots Row on Mobile Screens) */}
        <div className="mt-7 flex items-center justify-center gap-4 sm:gap-2">
          {/* Mobile Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="sm:hidden w-9 h-9 rounded-full bg-[#584a93] text-white flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#f15b2a]"
                    : "w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                }`}
              />
            ))}
          </div>

          {/* Mobile Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="sm:hidden w-9 h-9 rounded-full bg-[#584a93] text-white flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Google Business Callout Link */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href={defaultGoogleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#f8fafc] hover:bg-[#fff1eb] border border-[#cbd5e1] hover:border-[#f15b2a] text-[#0c3746] hover:text-[#f15b2a] px-6 sm:px-8 py-3 rounded-full text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17px] font-bold shadow-2xs hover:shadow-xs transition-all duration-200 group text-center"
          >
            <span>Verified 4.8 ★★★★★ on Google Business • View all reviews on Google</span>
            <ExternalLink className="w-4 h-4 stroke-[2.2] transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
