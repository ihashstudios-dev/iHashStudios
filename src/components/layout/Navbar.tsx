"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Primary Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
            : "bg-white/80 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <BrandLogo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                      isActive
                        ? "text-[#245BFF] bg-[#245BFF]/5 font-semibold"
                        : "text-[#141B33] hover:text-[#245BFF] hover:bg-slate-100/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button href="/contact" size="sm" variant="primary" showArrow>
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-[#0D132A] bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#245BFF] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Modal (High Z-Index z-[999] so it cleanly overlays everything) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Backdrop Dimmer */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-[1000] border-l border-slate-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div>
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <BrandLogo size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1.5">
                {siteConfig.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-[#245BFF]/10 text-[#245BFF] font-semibold"
                          : "text-[#141B33] hover:bg-slate-50 hover:text-[#245BFF]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-[#245BFF]" : "opacity-40"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Button
                href="/contact"
                size="md"
                variant="primary"
                className="w-full"
                showArrow
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp: Quick Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
