"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  variant?: "cream" | "purple";
  activeNav?: string;
}

export default function Navbar({ variant = "cream", activeNav }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isPurple = variant === "purple";

  const servicesList = [
    { name: "All Services", href: "/services" },
    { name: "Behavioural Therapy", href: "/services/behavioural-therapy" },
    { name: "ABA Therapy", href: "/services/aba-therapy" },
    { name: "Speech Therapy", href: "/services/speech-therapy" },
    { name: "Occupational Therapy", href: "/services/occupational-therapy" },
    { name: "Remedial Support & Therapy", href: "/services/remedial-support-therapy" },
    { name: "School Readiness", href: "/services/school-readiness" },
    { name: "Early Intervention", href: "/services/early-intervention" },
    { name: "Assessments", href: "/services/assessments" },
    { name: "Enrichment Programmes", href: "/services/enrichment-programmes" },
    { name: "KinderCrate Activity Packs", href: "/kindercrate" },
  ];

  return (
    <header className={`w-full relative z-50 transition-colors ${isPurple ? "bg-[#5b4bbb] text-white" : "bg-[#f5f8df] text-[#0c3746]"}`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-10 h-10 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/images/learning-lab-logo-mark 1.png"
              alt="Learning Lab Logo"
              width={40}
              height={40}
              className="object-contain w-10 h-10"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-[17px] sm:text-[18px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px] font-extrabold tracking-tight leading-none ${isPurple ? "text-white" : "text-[#0c3746]"}`}>
              Learning Lab
            </span>
            <span className={`text-[8.5px] sm:text-[9.5px] xl:text-[10.5px] font-medium leading-tight mt-0.5 ${isPurple ? "text-white/80" : "text-[#566e7a]"}`}>
              Global Facilitation Pvt Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] font-semibold">
          <Link
            href="/"
            className={`transition-colors ${activeNav === "Home" ? (isPurple ? "text-white font-bold" : "text-[#0c3746] font-bold") : (isPurple ? "text-white/90 hover:text-white" : "text-[#324f5e] hover:text-[#f15b2a]")}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${activeNav === "About" ? (isPurple ? "text-white font-bold" : "text-[#0c3746] font-bold") : (isPurple ? "text-white/90 hover:text-white" : "text-[#324f5e] hover:text-[#f15b2a]")}`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/services"
              className={`flex items-center gap-1 transition-colors ${activeNav === "Services" ? (isPurple ? "text-white font-bold" : "text-[#0c3746] font-bold") : (isPurple ? "text-white/90 hover:text-white" : "text-[#324f5e] hover:text-[#f15b2a]")}`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200 stroke-[2.2]" />
            </Link>

            {/* Dropdown Menu Container */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[250px] bg-white rounded-2xl shadow-xl border border-black/5 py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {servicesList.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="block px-4 py-2.5 text-[13px] xl:text-[14px] font-semibold text-[#0c3746] hover:bg-[#f5f8df] hover:text-[#f15b2a] transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/parent-support"
            className={`transition-colors ${activeNav === "Parent Support" ? (isPurple ? "text-white font-bold" : "text-[#0c3746] font-bold") : (isPurple ? "text-white/90 hover:text-white" : "text-[#324f5e] hover:text-[#f15b2a]")}`}
          >
            Parent Support
          </Link>
          <Link
            href="/schools-training"
            className={`transition-colors ${activeNav === "Schools & Training" ? (isPurple ? "text-white font-bold" : "text-[#0c3746] font-bold") : (isPurple ? "text-white/90 hover:text-white" : "text-[#324f5e] hover:text-[#f15b2a]")}`}
          >
            Schools & Training
          </Link>
          <Link
            href="/resources"
            className={`transition-colors ${activeNav === "Resources" ? (isPurple ? "text-white font-bold" : "text-[#0c3746] font-bold") : (isPurple ? "text-white/90 hover:text-white" : "text-[#324f5e] hover:text-[#f15b2a]")}`}
          >
            Resources
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-5 xl:px-7 py-2.5 xl:py-3 rounded-full text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/contact"
            className="sm:hidden inline-flex items-center gap-1.5 bg-[#f15b2a] text-white px-3.5 py-1.5 rounded-full text-xs font-bold"
          >
            <span>Contact</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${isPurple ? "text-white hover:bg-white/10" : "text-[#0c3746] hover:bg-black/5"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t border-black/5 px-6 py-5 shadow-lg flex flex-col gap-3.5 text-[14px] font-semibold ${isPurple ? "bg-[#5b4bbb] text-white" : "bg-[#f5f8df] text-[#1e3b48]"}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          
          {/* Mobile Services Submenu Toggle */}
          <div>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center justify-between w-full py-1 text-left"
            >
              <span className={activeNav === "Services" ? "font-bold" : ""}>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="pl-4 pt-2 flex flex-col gap-2 border-l border-white/20 my-1">
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[13px] opacity-90 hover:opacity-100 py-0.5"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/parent-support" onClick={() => setMobileMenuOpen(false)} className={activeNav === "Parent Support" ? "font-bold" : ""}>Parent Support</Link>
          <Link href="/schools-training" onClick={() => setMobileMenuOpen(false)} className={activeNav === "Schools & Training" ? "font-bold" : ""}>Schools & Training</Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className={activeNav === "Resources" ? "font-bold" : ""}>Resources</Link>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full justify-center items-center gap-2 bg-[#f15b2a] text-white py-2.5 rounded-full text-sm font-bold"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
