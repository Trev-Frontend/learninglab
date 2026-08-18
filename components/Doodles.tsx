import React from "react";

export function CrownDoodle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Hand-drawn radiant burst dashes */}
        <line x1="50" y1="4" x2="50" y2="15" stroke="#1c2730" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="28" y1="9" x2="34" y2="19" stroke="#1c2730" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="72" y1="9" x2="66" y2="19" stroke="#1c2730" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="14" y1="21" x2="23" y2="28" stroke="#1c2730" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="86" y1="21" x2="77" y2="28" stroke="#1c2730" strokeWidth="2.8" strokeLinecap="round" />

        {/* Crown Body with yellow fill and dark outline */}
        <path
          d="M 22 66 L 16 35 L 36 48 L 50 26 L 64 48 L 84 35 L 78 66 Z"
          fill="#fdd835"
          stroke="#1c2730"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Crown base curved stroke */}
        <path
          d="M 21 66 C 40 70, 60 70, 79 66"
          stroke="#1c2730"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Little tips */}
        <circle cx="16" cy="35" r="2.5" fill="#1c2730" />
        <circle cx="50" cy="26" r="3" fill="#1c2730" />
        <circle cx="84" cy="35" r="2.5" fill="#1c2730" />
      </svg>
    </div>
  );
}

export function ScribbleDoodle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-85"
      >
        <path
          d="M 20 18 C 45 12, 75 16, 85 24 
             C 65 30, 22 34, 18 42 
             C 38 46, 78 48, 88 56 
             C 68 62, 20 68, 22 76 
             C 42 80, 80 82, 90 88
             C 65 92, 30 96, 35 102"
          stroke="#fdd835"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function TopBarWave({ color = "#654fe6" }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none z-20 block -mb-[1px]">
      <svg
        viewBox="-10 0 1460 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-[101%] -ml-[0.5%] h-3 sm:h-3.5 md:h-4 block"
        style={{ color, fill: "currentColor" }}
      >
        <path d="M-10,0 
          C 50,26 110,26 170,0 
          C 230,26 290,26 350,0 
          C 410,26 470,26 530,0 
          C 590,26 650,26 710,0 
          C 770,26 830,26 890,0 
          C 950,26 1010,26 1070,0 
          C 1130,26 1190,26 1250,0 
          C 1310,26 1370,26 1430,0 
          C 1445,15 1455,0 1470,0
          L1470,0 L-10,0 Z" />
      </svg>
    </div>
  );
}

export function HeroMultiWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
      <svg
        className="relative block w-full h-[65px] sm:h-[85px] md:h-[105px]"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Top Translucent White/Lavender Wave */}
        <path
          d="M0,35 Q360,95 720,45 T1440,55 L1440,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.35)"
        />
        {/* Layer 2: Middle Soft White Wave */}
        <path
          d="M0,55 Q360,15 720,65 T1440,35 L1440,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.65)"
        />
        {/* Layer 3: Foreground Solid White Wave */}
        <path
          d="M0,72 Q360,110 720,60 T1440,80 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

export function CloudBottomWave() {
  return (
    <div className="w-full overflow-hidden leading-none pointer-events-none select-none">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 md:h-24 fill-white"
      >
        <path d="M0,55 
          C 45,30 90,30 135,55 
          C 180,20 240,20 285,55 
          C 340,15 410,15 465,55 
          C 520,25 580,25 635,55 
          C 690,10 770,10 825,55 
          C 880,25 940,25 995,55 
          C 1050,15 1130,15 1185,55 
          C 1240,25 1310,25 1365,55 
          C 1405,35 1425,35 1440,55 
          L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
