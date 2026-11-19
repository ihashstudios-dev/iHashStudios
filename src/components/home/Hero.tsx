import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroIllustration } from "./HeroIllustration";
import {
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#245BFF]/5 via-[#7628E8]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="brand"
                size="md"
                icon={<Sparkles className="w-3.5 h-3.5 text-[#245BFF]" />}
              >
                INNOVATION THROUGH SOFTWARE
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D132A] tracking-tight leading-[1.08]">
              Your Ideas.
              <br />
              <span className="bg-gradient-to-r from-[#245BFF] via-[#5B3DF5] to-[#7628E8] bg-clip-text text-transparent">
                Our Technology.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#5B647E] leading-relaxed max-w-xl">
              We transform ideas into powerful digital solutions. From web applications to Windows
              desktop software, we build technology that helps businesses work smarter and grow faster.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button href="/contact" size="lg" variant="primary" showArrow>
                Start Your Project
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Explore Our Services
              </Button>
            </div>

            {/* Value Indicators */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#245BFF] shrink-0" />
                <span className="font-medium">Tailored Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#7628E8] shrink-0" />
                <span className="font-medium">100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-medium">Desktop & Web Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Custom Software Mockup */}
          <div className="lg:col-span-6 w-full">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
