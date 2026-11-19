import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "blue" | "purple" | "navy" | "subtle" | "success" | "outline";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "brand",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full tracking-wide whitespace-nowrap select-none";

  const sizeStyles = {
    sm: "text-[11px] px-3 py-1 gap-1.5",
    md: "text-xs px-3.5 py-1.5 gap-2",
  };

  const variantStyles = {
    brand:
      "bg-gradient-to-r from-[#245BFF]/10 to-[#7628E8]/10 text-[#245BFF] border border-[#245BFF]/20 font-semibold",
    blue: "bg-[#245BFF]/10 text-[#245BFF] border border-[#245BFF]/20",
    purple: "bg-[#7628E8]/10 text-[#7628E8] border border-[#7628E8]/20",
    navy: "bg-[#0D132A] text-white border border-[#0D132A]",
    subtle: "bg-slate-100 text-slate-700 border border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    outline: "bg-transparent text-slate-600 border border-slate-300",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="inline-flex items-center justify-center shrink-0">{icon}</span>}
      <span className="inline-flex items-center justify-center gap-1.5 leading-normal">
        {children}
      </span>
    </span>
  );
}
