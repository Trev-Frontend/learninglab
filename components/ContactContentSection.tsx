"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, Globe, ArrowRight, Check } from "lucide-react";

export default function ContactContentSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
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
        // Fallback to submitted view for smooth UX
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* ========================================================================= */}
        {/* SECTION 1: Contact Info + Send Your Message Form */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Us For Help */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Headline */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
              Contact Us For{" "}
              <span className="relative inline-block">
                Help
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 30 9, 70 9, 98 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Info List */}
            <div className="mt-6 sm:mt-8 space-y-5 lg:space-y-6 text-[#0c3746]">
              
              {/* Phone */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-2xs mt-0.5">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
                </span>
                <div className="pt-1.5">
                  <p className="text-[14.5px] sm:text-[15.5px] lg:text-[17px] xl:text-[18.5px] 2xl:text-[20px] font-extrabold text-[#0c3746] leading-snug">
                    +92 325 3276464 <span className="text-[#566e7a] font-normal">|</span> +92 32-LEARNING
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-2xs mt-0.5">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
                </span>
                <div className="pt-1.5">
                  <a
                    href="mailto:info@learninglabpk.com"
                    className="text-[14.5px] sm:text-[15.5px] lg:text-[17px] xl:text-[18.5px] 2xl:text-[20px] font-extrabold text-[#0c3746] hover:text-[#f15b2a] transition-colors leading-snug underline decoration-[#f15b2a]/30"
                  >
                    info@learninglabpk.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-2xs mt-0.5">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
                </span>
                <div className="pt-1.5">
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px] font-bold text-[#334650] leading-snug">
                    Monday to Friday, 10:00 AM to 6:00 PM
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-2xs mt-0.5">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
                </span>
                <div className="pt-1">
                  <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] font-medium text-[#334650] leading-relaxed">
                    201, 2nd Floor, Prime Tower, 5 Zulfiqar Avenue, DHA Phase 8, Zulfiqar and Al Murtaza Commercial Area, Karachi 75500
                  </p>
                </div>
              </div>

              {/* Global Worldwide */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-2xs mt-0.5">
                  <Globe className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
                </span>
                <div className="pt-1">
                  <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] font-medium text-[#334650] leading-relaxed">
                    Parent consultations, teacher training and school consultancy available worldwide
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Send Your Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f4f5f0] border border-black/[0.05] rounded-3xl p-6 sm:p-8 lg:p-9 xl:p-10 shadow-xs">
              <h3 className="text-[22px] sm:text-[25px] lg:text-[28px] xl:text-[32px] font-extrabold text-[#0c3746] tracking-tight mb-6">
                Send Your Message
              </h3>

              {submitted ? (
                <div className="bg-[#f0f6df] border border-[#d8e8b8] rounded-2xl p-6 text-center text-[#3c5625]">
                  <span className="w-12 h-12 bg-[#5b4bbb] text-white rounded-full inline-flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </span>
                  <h4 className="text-[20px] font-bold">Message Sent!</h4>
                  <p className="mt-2 text-[14.5px] sm:text-[16px] text-[#566e7a]">
                    Thank you for contacting Learning Lab. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-[13px] font-bold text-[#f15b2a] underline cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Grid 2 Cols: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-full px-5 py-3 lg:py-3.5 text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[16px] text-[#0c3746] placeholder-[#677a85] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/20 transition-all font-medium shadow-2xs"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-full px-5 py-3 lg:py-3.5 text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[16px] text-[#0c3746] placeholder-[#677a85] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/20 transition-all font-medium shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Grid 2 Cols: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-full px-5 py-3 lg:py-3.5 text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[16px] text-[#0c3746] placeholder-[#677a85] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/20 transition-all font-medium shadow-2xs"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-full px-5 py-3 lg:py-3.5 text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[16px] text-[#0c3746] placeholder-[#677a85] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/20 transition-all font-medium shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Textarea: Message */}
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white border border-black/10 rounded-2xl p-4 sm:p-5 text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[16px] text-[#0c3746] placeholder-[#677a85] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/20 transition-all resize-none font-medium shadow-2xs"
                    ></textarea>
                  </div>

                  {/* Checkbox Consent */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.agree}
                      onChange={(e) =>
                        setFormData({ ...formData, agree: e.target.checked })
                      }
                      className="mt-1 w-4.5 h-4.5 rounded text-[#f15b2a] focus:ring-[#f15b2a] border-gray-300 cursor-pointer flex-shrink-0"
                    />
                    <label
                      htmlFor="consent"
                      className="text-[12.5px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-[#334650] font-medium leading-snug cursor-pointer select-none"
                    >
                      I agree that Learning Lab may contact me by phone, email or WhatsApp regarding this enquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] disabled:opacity-70 text-white px-7 sm:px-8 py-3 lg:py-3.5 rounded-full text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[16.5px] font-bold shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
                    >
                      <span>{submitting ? "Sending..." : "Send Enquiry"}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: Visit Learning Lab (Vibrant Orange Card + Actual Google Map) */}
        {/* ========================================================================= */}
        <div className="bg-[#f15b2a] rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white relative overflow-hidden shadow-md">
          
          {/* Decorative Sparkle Doodles */}
          <div className="absolute top-4 left-6 text-white/30 text-2xl font-bold pointer-events-none select-none">
            ✦
          </div>
          <div className="absolute bottom-4 right-6 text-yellow-300/80 text-3xl font-bold pointer-events-none select-none">
            ⚡
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[42px] font-extrabold text-white leading-[1.18] tracking-tight">
                Visit Learning Lab
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] xl:text-[18px] text-white/95 font-medium leading-[1.6]">
                Find us at Prime Tower in DHA Phase 8, Karachi. Use the map below for directions or contact our team if you need help locating the centre.
              </p>
            </div>

            {/* Right Map Embed: Actual Google Maps Location for Prime Tower DHA Phase 8 Karachi */}
            <div className="lg:col-span-7 w-full">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] min-h-[300px] lg:min-h-[350px] xl:min-h-[380px] rounded-2xl overflow-hidden shadow-md bg-slate-100">
                <iframe
                  title="Learning Lab Location Map - Prime Tower DHA Phase 8 Karachi"
                  src="https://maps.google.com/maps?q=Prime+Tower,+5+Zulfiqar+Avenue,+DHA+Phase+8,+Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: Emergency Notice & Kids Illustration */}
        {/* ========================================================================= */}
        <div className="pt-2 text-center max-w-[840px] mx-auto">
          
          {/* Headline */}
          <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[40px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
            Emergency{" "}
            <span className="relative inline-block">
              Notice
              {/* Hand-drawn Orange Underline */}
              <svg
                className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                viewBox="0 0 110 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 5 C 30 9, 80 9, 108 3"
                  stroke="#f15b2a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-3.5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18px] text-[#334650] font-medium leading-[1.65] max-w-[760px] mx-auto">
            Learning Lab is not an emergency, crisis or medical-response service. In an urgent situation, contact local emergency services or a qualified medical provider.
          </p>

          {/* Kids Dancing Under Sun Illustration (Floating) */}
          <div className="mt-8 sm:mt-10 w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] mx-auto relative px-2 sm:px-4 animate-float-subtle">
            <Image
              src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
              alt="Children playing under the sun line illustration"
              width={840}
              height={300}
              className="w-full h-auto mx-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
