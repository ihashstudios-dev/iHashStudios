import React from "react";
import { Button } from "@/components/ui/Button";
import { MessageSquare, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0D132A] via-[#151C3B] to-[#0D132A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#245BFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7628E8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-[#245BFF]" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Have an Idea?{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Build It.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us what you&apos;re planning. We&apos;ll help turn your vision into a practical software
              solution that streamlines your operations and helps your business scale.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" showArrow>
                Start a Project
              </Button>
              <Button href="/contact" size="lg" variant="white">
                Contact Us
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#245BFF]" />
                <span>NDA & Confidentiality Respected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>24-Hour Inquiry Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#7628E8]" />
                <span>Direct Developer Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
