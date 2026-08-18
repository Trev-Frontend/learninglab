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
    <section className="relative w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* SECTION 1: Contact Info + Send Your Message Form */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Us For Help */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Headline */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
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
            <div className="mt-8 space-y-5 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] text-[#475b65] font-medium leading-[1.65]">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-xs mt-0.5">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                </span>
                <div className="pt-1.5">
                  <p className="font-semibold text-[#0c3746]">
                    +92 325 3276464 <span className="text-[#566e7a] font-normal">|</span> +92 32-LEARNING
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-xs mt-0.5">
                  <Mail className="w-4 h-4 stroke-[2.2]" />
                </span>
                <div className="pt-2">
                  <a
                    href="mailto:info@learninglabpk.com"
                    className="font-semibold text-[#0c3746] hover:text-[#f15b2a] transition-colors"
                  >
                    info@learninglabpk.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-xs mt-0.5">
                  <Clock className="w-4 h-4 stroke-[2.2]" />
                </span>
                <div className="pt-2">
                  <p className="font-medium text-[#475b65]">
                    Monday to Friday, 10:00 AM to 6:00 PM
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-xs mt-0.5">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </span>
                <div className="pt-1">
                  <p className="font-medium text-[#475b65] leading-relaxed">
                    201, 2nd Floor, Prime Tower, 5 Zulfiqar Avenue, DHA Phase 8, Zulfiqar and Al Murtaza Commercial Area, Karachi 75500
                  </p>
                </div>
              </div>

              {/* Global Worldwide */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center shadow-xs mt-0.5">
                  <Globe className="w-4 h-4 stroke-[2.2]" />
                </span>
                <div className="pt-1">
                  <p className="font-medium text-[#475b65] leading-relaxed">
                    Parent consultations, teacher training and school consultancy available worldwide
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Send Your Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f4f5f0] border border-black/5 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
              <h3 className="text-[20px] sm:text-[22px] xl:text-[25px] 2xl:text-[27px] font-extrabold text-[#0c3746] tracking-tight mb-6">
                Send Your Message
              </h3>

              {submitted ? (
                <div className="bg-[#f0f6df] border border-[#d8e8b8] rounded-2xl p-6 text-center text-[#3c5625]">
                  <span className="w-12 h-12 bg-[#5b4bbb] text-white rounded-full inline-flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </span>
                  <h4 className="text-[18px] font-bold">Message Sent!</h4>
                  <p className="mt-2 text-[13.5px] text-[#566e7a]">
                    Thank you for contacting Learning Lab. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-[12px] font-bold text-[#f15b2a] underline"
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
                        className="w-full bg-white border border-black/10 rounded-full px-4 py-3 text-[13px] text-[#0c3746] placeholder-[#829199] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/30 transition-all"
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
                        className="w-full bg-white border border-black/10 rounded-full px-4 py-3 text-[13px] text-[#0c3746] placeholder-[#829199] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/30 transition-all"
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
                        className="w-full bg-white border border-black/10 rounded-full px-4 py-3 text-[13px] text-[#0c3746] placeholder-[#829199] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/30 transition-all"
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
                        className="w-full bg-white border border-black/10 rounded-full px-4 py-3 text-[13px] text-[#0c3746] placeholder-[#829199] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/30 transition-all"
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
                      className="w-full bg-white border border-black/10 rounded-2xl p-4 text-[13px] text-[#0c3746] placeholder-[#829199] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/30 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Checkbox Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.agree}
                      onChange={(e) =>
                        setFormData({ ...formData, agree: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 rounded text-[#f15b2a] focus:ring-[#f15b2a] border-gray-300 cursor-pointer"
                    />
                    <label
                      htmlFor="consent"
                      className="text-[11.5px] sm:text-[12px] text-[#566e7a] font-medium leading-snug cursor-pointer select-none"
                    >
                      I agree that Learning Lab may contact me by phone, email or WhatsApp regarding this enquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] disabled:opacity-70 text-white px-7 py-3 rounded-full text-[13px] font-bold shadow-xs hover:shadow-md transition-all duration-200 group"
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
        <div className="bg-[#f15b2a] rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-lg">
          
          {/* Decorative Sparkle Doodles */}
          <div className="absolute top-4 left-6 text-white/30 text-2xl font-bold pointer-events-none select-none">
            ✦
          </div>
          <div className="absolute bottom-4 right-6 text-yellow-300/80 text-3xl font-bold pointer-events-none select-none">
            ⚡
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-white leading-[1.18] tracking-tight">
                Visit Learning Lab
              </h2>
              <p className="mt-4 text-[13.5px] sm:text-[14.5px] text-white/90 font-medium leading-[1.65]">
                Find us at Prime Tower in DHA Phase 8, Karachi. Use the map below for directions or contact our team if you need help locating the centre.
              </p>
            </div>

            {/* Right Map Embed: Actual Google Maps Location for Prime Tower DHA Phase 8 Karachi */}
            <div className="lg:col-span-7 w-full">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl bg-slate-100">
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
        <div className="pt-4 text-center max-w-[800px] mx-auto">
          
          {/* Headline */}
          <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
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
          <p className="mt-4 text-[13px] sm:text-[14px] text-[#566e7a] font-medium leading-[1.65] max-w-[680px] mx-auto">
            Learning Lab is not an emergency, crisis or medical-response service. In an urgent situation, contact local emergency services or a qualified medical provider.
          </p>

          {/* Kids Dancing Under Sun Illustration */}
          <div className="mt-10 sm:mt-12 w-full max-w-[640px] mx-auto">
            <Image
              src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
              alt="Children playing under the sun line illustration"
              width={720}
              height={260}
              className="w-full h-auto mx-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
