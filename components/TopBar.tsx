import React from "react";
import { Mail, Phone } from "lucide-react";
import { TopBarWave } from "./Doodles";

interface TopBarProps {
  variant?: "cream" | "purple";
}

export default function TopBar({ variant = "purple" }: TopBarProps) {
  const isCream = variant === "cream";

  return (
    <div
      className={`w-full text-[10px] sm:text-[11px] font-normal tracking-wide relative z-40 select-none -mt-[2px] pt-[2px] ${
        isCream ? "bg-[#f5f8df] text-[#0c3746]" : "bg-[#5b4bbb] text-white"
      }`}
    >
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 pb-1 flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-4">
        {/* Left Side Announcement */}
        <div
          className={`flex items-center text-center md:text-left font-medium tracking-normal text-[10px] sm:text-[11px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] ${
            isCream ? "text-[#0c3746]" : "text-white/95"
          }`}
        >
          <span>In-person therapy in Karachi</span>
          <span className={`mx-2.5 ${isCream ? "text-[#0c3746]/40" : "text-white/60"}`}>|</span>
          <span>Online parent consultations and professional training available worldwide</span>
        </div>

        {/* Right Side Contact & Working Hours */}
        <div
          className={`flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-1 text-[10px] sm:text-[11px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] ${
            isCream ? "text-[#3a4a52]" : "text-white/95"
          }`}
        >
          <a
            href="mailto:info@learninglabpk.com"
            className="flex items-center gap-1.5 hover:text-[#f15b2a] transition-colors"
          >
            <Mail className="w-3 h-3 opacity-90 stroke-[1.8]" />
            <span>info@learninglabpk.com</span>
          </a>

          <a
            href="tel:+923253276464"
            className="flex items-center gap-1.5 hover:text-[#f15b2a] transition-colors"
          >
            <Phone className="w-3 h-3 opacity-90 stroke-[1.8]" />
            <span>+92 325 3276464</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            <span>Monday to Friday, 10:00 AM to 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Scallop wave under the bar */}
      <TopBarWave
        color={isCream ? "#f5f8df" : "#5b4bbb"}
        bottomColor={isCream ? "#5b4bbb" : "#f5f8df"}
      />
    </div>
  );
}
