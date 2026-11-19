import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  badgeVariant?: "brand" | "blue" | "purple" | "navy" | "subtle";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  badgeVariant = "brand",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-3.5 ${isCenter ? "flex justify-center" : "flex justify-start"}`}>
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D132A] tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#5B647E] leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
