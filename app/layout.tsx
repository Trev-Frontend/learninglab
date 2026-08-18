import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Learning Lab - Global Facilitation Pvt Ltd",
  description: "A Place for Every Child to Learn, Grow and Belong. Behavioural, ABA, speech and occupational therapies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} min-h-screen bg-[#f4f6e1] font-sans antialiased text-[#1c2c34] selection:bg-[#f15b2a] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
