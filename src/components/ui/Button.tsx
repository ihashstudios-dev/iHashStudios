import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  isLoading = false,
  children,
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245BFF] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#245BFF] to-[#7628E8] text-white shadow-md shadow-[#245BFF]/20 hover:shadow-lg hover:shadow-[#245BFF]/30 hover:opacity-95 hover:-translate-y-0.5",
    secondary:
      "bg-[#0D132A] text-white hover:bg-[#151C3B] shadow-sm hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-white/80 backdrop-blur-sm text-[#0D132A] border border-slate-200 hover:border-[#245BFF]/50 hover:bg-[#245BFF]/5 hover:text-[#245BFF] shadow-subtle",
    ghost:
      "bg-transparent text-[#141B33] hover:text-[#245BFF] hover:bg-slate-100/70",
    white:
      "bg-white text-[#0D132A] hover:bg-slate-50 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedStyles}`} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${combinedStyles}`} disabled={isLoading} {...props}>
      {content}
    </button>
  );
}
