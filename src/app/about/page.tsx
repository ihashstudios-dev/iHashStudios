import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Target,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  HeartHandshake,
  Cpu,
  ArrowRight,
  Code2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Our Vision & Philosophy",
  description:
    "Learn about iHash Studios, our mission to help businesses simplify operations through practical software solutions, and our commitment to clean engineering.",
};

export default function AboutPage() {
  const philosophies = [
    {
      title: "Business-First Engineering",
      desc: "Software exists to solve operational challenges and create real value. We never build complexity for the sake of it; every feature must serve a clear commercial purpose.",
      icon: Target,
    },
    {
      title: "Pragmatic Architecture",
      desc: "We select the right tool for the job. If high-speed counter billing requires offline native desktop software, we build with JavaFX and SQLite. If client access demands cloud availability, we build with React and Spring Boot.",
      icon: Cpu,
    },
    {
      title: "Full Code Ownership & Integrity",
      desc: "We believe clients should own their digital assets. We deliver complete, well-documented source code without vendor lock-in or recurring per-user software licensing.",
      icon: Lock,
    },
    {
      title: "Long-Term Partnership",
      desc: "Our relationship does not end at delivery. We provide ongoing support, system maintenance, and iterative upgrades as your business operations expand.",
      icon: HeartHandshake,
    },
  ];

  const approaches = [
    {
      step: "01",
      title: "Deep Workflow Discovery",
      desc: "Before writing any code, we study your day-to-day operations, transaction volumes, user roles, and existing bottlenecks.",
    },
    {
      step: "02",
      title: "Ergonomic Interface Design",
      desc: "We design user interfaces that your staff can use immediately without weeks of training, focusing on speed and minimal keystrokes.",
    },
    {
      step: "03",
      title: "Robust Test-Driven Code",
      desc: "Every database transaction, invoice calculation, and API route is tested against edge cases to ensure zero operational crashes.",
    },
    {
      step: "04",
      title: "Direct Engineering Access",
      desc: "You collaborate directly with the software engineers crafting your solution, ensuring quick answers without bureaucratic account layers.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* About Us Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-24">
        <Badge
          variant="brand"
          size="md"
          icon={<Sparkles className="w-3.5 h-3.5 text-[#245BFF]" />}
          className="mb-4"
        >
          ABOUT IHASH STUDIOS
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D132A] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Building Technology That Moves Businesses Forward.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[#5B647E] max-w-3xl mx-auto leading-relaxed">
          iHash Studios is a software development studio dedicated to transforming business ideas into
          reliable, high-performance digital solutions.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#245BFF] flex items-center justify-center mb-6 border border-blue-200/60 shadow-xs">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#245BFF] uppercase tracking-wider block mb-2">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D132A] tracking-tight mb-4">
              Simplifying Operations Through Software.
            </h2>
            <p className="text-base text-[#5B647E] leading-relaxed">
              To help businesses simplify operations and bring their ideas to life through practical,
              well-architected software solutions that eliminate repetitive effort and reduce errors.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7628E8] flex items-center justify-center mb-6 border border-purple-200/60 shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7628E8] uppercase tracking-wider block mb-2">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D132A] tracking-tight mb-4">
              Your Trusted Software Partner.
            </h2>
            <p className="text-base text-[#5B647E] leading-relaxed">
              To become a trusted software development partner for businesses looking to innovate,
              digitize manual processes, and grow sustainably through reliable technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="rounded-3xl bg-[#F8FAFF] border border-slate-200/80 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold text-[#245BFF] uppercase tracking-wider block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D132A] tracking-tight">
              A Software Studio Rooted in Practical Craftsmanship.
            </h2>
            <p className="text-base sm:text-lg text-[#5B647E] leading-relaxed">
              iHash Studios was founded on a simple principle: businesses do not need bloated, generic
              templates or overcomplicated frameworks that break after a few months. They need
              purpose-built software that fits like a glove, launches quickly, and performs reliably
              every single day.
            </p>
            <p className="text-base sm:text-lg text-[#5B647E] leading-relaxed">
              We specialize in bridging the gap between desktop workstations and cloud platforms.
              Whether an apparel manufacturer requires an offline-capable billing and inventory system
              with instant thermal receipt printing, or a growing enterprise needs a secure customer
              portal, we build with strong typing, clean architecture, and rigorous data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#245BFF] uppercase tracking-wider block mb-2">
            Guiding Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D132A]">
            Our Engineering Philosophy
          </h2>
          <p className="text-sm sm:text-base text-[#5B647E] mt-3">
            Core principles that guide every decision, line of code, and client interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-subtle hover:border-[#245BFF]/30 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#245BFF] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0D132A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5B647E] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Development Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#245BFF] uppercase tracking-wider block mb-2">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D132A]">
            Our Development Approach
          </h2>
          <p className="text-sm sm:text-base text-[#5B647E] mt-3">
            A disciplined, collaborative workflow from initial concept to ongoing production support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((app) => (
            <div
              key={app.step}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#245BFF]/10 text-[#245BFF] inline-block mb-3">
                  {app.step}
                </span>
                <h3 className="text-base font-bold text-[#0D132A] mb-2">{app.title}</h3>
                <p className="text-xs text-[#5B647E] leading-relaxed">{app.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Studio Phase</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0D132A] to-[#151C3B] text-white p-8 sm:p-12 lg:p-14 border border-white/10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[#245BFF] uppercase tracking-wider block">
                Our Guarantee
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Our Commitment to Engineering Quality
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We never ship untested code or cut corners on database security. Every software product
                undergoes strict code reviews, data validation checks, and operational walkthroughs to
                guarantee that your day-to-day business continues running without interruption.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <Button href="/contact" size="lg" variant="primary" showArrow>
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
