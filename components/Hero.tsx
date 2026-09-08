"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Send, Sparkles } from "lucide-react";
import { CrownDoodle, ScribbleDoodle, CloudBottomWave } from "./Doodles";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error submitting hero contact form:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-[#f5f8df] pt-4 sm:pt-6 lg:pt-8 pb-0 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center min-h-[520px] lg:min-h-[500px]">

          {/* Left Column: Heading, Description & CTAs */}
          <div className="lg:col-span-6 z-20 pt-2 pb-4 lg:py-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#5b4bbb]/10 border border-[#5b4bbb]/20 text-[#5b4bbb] px-4 py-1.5 rounded-full text-[12.5px] sm:text-[13.5px] font-extrabold mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialised Child Support & Learning</span>
            </div>

            <h1 className="text-[34px] sm:text-[44px] md:text-[48px] lg:text-[48px] xl:text-[56px] 2xl:text-[66px] font-extrabold text-[#0c3746] leading-[1.12] tracking-[-0.035em] max-w-[540px] xl:max-w-[660px] 2xl:max-w-[760px]">
              A Place for Every<br className="hidden sm:inline" />{" "}
              Child to Learn,<br className="hidden sm:inline" />{" "}
              Grow and Belong.
            </h1>

            <p className="mt-3.5 sm:mt-5 text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#0c3746] leading-[1.65] max-w-[500px] xl:max-w-[580px] 2xl:max-w-[640px] font-bold mx-auto lg:mx-0">
              Learning Lab supports children up to 15 years old through behavioural, ABA,
              speech and occupational therapies, assessments, learning programmes and
              enrichment activities.
            </p>

            {/* Quick Service Links / Highlights */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#0c3746] hover:bg-[#07242f] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[14px] xl:text-[15.5px] font-extrabold transition-all duration-200 group shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#0c3746] text-[#0c3746] hover:text-white border-[1.5px] border-[#0c3746]/20 hover:border-[#0c3746] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[14px] xl:text-[15.5px] font-extrabold transition-all duration-200 group shadow-2xs"
              >
                <span>About Us</span>
              </Link>
            </div>

            {/* Micro reassurance note */}
            <p className="mt-4 text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16px] text-[#0c3746]/80 font-extrabold text-center lg:text-left">
              ✨ You can contact us even when you only have a concern, not a diagnosis.
            </p>
          </div>

          {/* Right Column: Hero Contact / Quick Enquiry Card */}
          <div className="lg:col-span-6 relative w-full z-20 flex items-center justify-center lg:justify-end pb-6 lg:pb-8">

            {/* Floating Hot Air Balloon Doodle (Top-left of Card) */}
            <div className="absolute -left-3 sm:-left-4 lg:-left-6 -top-5 sm:-top-6 w-[50px] sm:w-[62px] lg:w-[70px] z-30 animate-float pointer-events-none">
              <Image
                src="/images/shape-img.png"
                alt="Hot Air Balloon Doodle"
                width={115}
                height={135}
                className="w-full h-auto drop-shadow-xs"
                priority
              />
            </div>

            {/* Crown Doodle (Top Right Accent) */}
            <div className="absolute -right-2 sm:-right-3 -top-4 sm:-top-5 w-[42px] sm:w-[50px] z-30 pointer-events-none animate-crown">
              <CrownDoodle className="w-full h-auto" />
            </div>

            {/* Scribble Doodle (Bottom Right Accent) */}
            <div className="absolute -right-3 -bottom-3 sm:-right-4 sm:-bottom-4 w-[40px] sm:w-[48px] z-30 pointer-events-none rotate-6 animate-pulse-subtle">
              <ScribbleDoodle className="w-full h-auto" />
            </div>

            {/* Form Card Container */}
            <div className="w-full max-w-[540px] xl:max-w-[580px] bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 xl:p-8 shadow-lg border border-[#0c3746]/10 relative z-10">
              
              {/* Form Header */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div>
                  <h2 className="text-[20px] sm:text-[23px] xl:text-[26px] font-extrabold text-[#0c3746] tracking-tight leading-tight">
                    Get in Touch with Us
                  </h2>
                  <p className="text-[12.5px] sm:text-[13.5px] text-[#566e7a] font-medium mt-0.5">
                    We’re here to help guide you and your child.
                  </p>
                </div>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f15b2a]/10 text-[#f15b2a] flex items-center justify-center flex-shrink-0">
                  <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </span>
              </div>

              {submitted ? (
                <div className="bg-[#f0f6df] border border-[#d8e8b8] rounded-2xl p-6 sm:p-8 text-center text-[#3c5625]">
                  <span className="w-12 h-12 bg-[#5b4bbb] text-white rounded-full inline-flex items-center justify-center mb-3 shadow-xs">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </span>
                  <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#0c3746]">
                    Enquiry Received!
                  </h3>
                  <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-[#566e7a] font-medium leading-relaxed">
                    Thank you for reaching out to Learning Lab. Our team will contact you shortly to assist with your query.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[13px] font-extrabold text-[#f15b2a] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  {/* Name Fields: First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name *"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-[#f8faf8] border border-black/10 focus:border-[#5b4bbb] rounded-xl px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] text-[#0c3746] placeholder-[#7d909a] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/15 transition-all font-medium"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-[#f8faf8] border border-black/10 focus:border-[#5b4bbb] rounded-xl px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] text-[#0c3746] placeholder-[#7d909a] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/15 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#f8faf8] border border-black/10 focus:border-[#5b4bbb] rounded-xl px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] text-[#0c3746] placeholder-[#7d909a] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/15 transition-all font-medium"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#f8faf8] border border-black/10 focus:border-[#5b4bbb] rounded-xl px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] text-[#0c3746] placeholder-[#7d909a] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/15 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      placeholder="How can we help you or your child? *"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#f8faf8] border border-black/10 focus:border-[#5b4bbb] rounded-xl p-3 sm:p-3.5 text-[13.5px] sm:text-[14px] text-[#0c3746] placeholder-[#7d909a] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/15 transition-all resize-none font-medium"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] active:bg-[#c93f11] text-white py-3 sm:py-3.5 px-6 rounded-full text-[14px] sm:text-[15px] font-extrabold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70 group"
                  >
                    {submitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[11.5px] text-center text-[#7d909a] font-medium pt-0.5">
                    🔒 We respect your privacy. All enquiries are kept strictly confidential.
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* Cloud / Scalloped Bottom Wave Divider */}
      <div className="relative z-20 -mt-6 sm:-mt-8 w-full leading-none">
        <CloudBottomWave />
      </div>
    </section>
  );
}
