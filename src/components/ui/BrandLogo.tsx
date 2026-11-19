"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "default" | "white";
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  variant = "default",
  className = "",
  showTagline = true,
  size = "md",
}: BrandLogoProps) {
  // Dimensions calibrated to preserve exact 1024x685 (1.495 : 1) original aspect ratio
  const dimensions = {
    sm: { width: 38, height: 25, fontSize: "text-base sm:text-lg", tagSize: "text-[7px] sm:text-[7.5px]" },
    md: { width: 48, height: 32, fontSize: "text-lg sm:text-xl", tagSize: "text-[8px] sm:text-[8.5px]" },
    lg: { width: 62, height: 41, fontSize: "text-xl sm:text-2xl", tagSize: "text-[9px] sm:text-[10px]" },
  };

  const current = dimensions[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245BFF] rounded-xl whitespace-nowrap ${className}`}
      aria-label="iHash Studios - INNOVATION THROUGH SOFTWARE"
    >
      {/* Official Supplied Logo Mark Container */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-xl transition-transform ${
          variant === "white"
            ? "bg-white p-1 shadow-sm border border-white/20"
            : "p-0.5"
        }`}
      >
        <Image
          src="/logo.png"
          alt="iHash Studios Official Logo Mark"
          width={current.width}
          height={current.height}
          priority
          className="object-contain w-auto h-auto shrink-0"
          style={{
            maxWidth: current.width,
            maxHeight: current.height,
            aspectRatio: "1024 / 685",
          }}
        />
      </div>

      {/* Brand Typography & Tagline */}
      <div className="flex flex-col text-left justify-center select-none">
        <span
          className={`font-black tracking-tight leading-none ${current.fontSize} ${
            variant === "white" ? "text-white" : "text-[#0D132A]"
          }`}
        >
          iHash<span className="text-[#7628E8] font-bold">Studios</span>
        </span>

        {/* Tagline: Century Gothic Regular */}
        {showTagline && (
          <span
            className={`uppercase tracking-[0.22em] mt-1 font-normal ${current.tagSize} ${
              variant === "white" ? "text-slate-300" : "text-[#5B647E]"
            }`}
            style={{
              fontFamily:
                "'Century Gothic', CenturyGothic, AppleGothic, 'URW Gothic L', 'Poppins', sans-serif",
              fontWeight: 400,
            }}
          >
            INNOVATION THROUGH SOFTWARE
          </span>
        )}
      </div>
    </Link>
  );
}
