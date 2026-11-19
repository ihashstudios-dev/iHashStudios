import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  Monitor,
  Layers,
  Cpu,
  Briefcase,
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Comprehensive software engineering services: Web Application Development, Windows Desktop Applications, Custom Business Software, Process Automation, and Business Management Systems.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Monitor":
        return Monitor;
      case "Layers":
        return Layers;
      case "Cpu":
        return Cpu;
      case "Briefcase":
        return Briefcase;
      default:
        return Code2;
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Services Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-24">
        <Badge
          variant="brand"
          size="md"
          icon={<Sparkles className="w-3.5 h-3.5 text-[#245BFF]" />}
          className="mb-4"
        >
          END-TO-END SOFTWARE CAPABILITIES
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D132A] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Software Solutions Engineered for Real Business Results.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[#5B647E] max-w-3xl mx-auto leading-relaxed">
          From fast offline desktop billing to scalable cloud web applications, we build bespoke
          technology that removes friction, eliminates manual busywork, and accelerates business growth.
        </p>

        {/* Quick Jump Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {servicesData.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#245BFF] hover:border-[#245BFF]/40 shadow-subtle transition-all"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* Individual Detailed Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {servicesData.map((service, index) => {
          const Icon = getIcon(service.iconName);
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-32 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Header: Service Number, Title & Tagline */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#245BFF] to-[#7628E8] text-white flex items-center justify-center shadow-md shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#245BFF] uppercase tracking-wider block">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D132A] tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <Button href={`/contact?service=${encodeURIComponent(service.title)}`} size="md" variant="primary" showArrow>
                  Discuss This Service
                </Button>
              </div>

              {/* Tagline & Overview */}
              <div className="mt-8">
                <p className="text-lg font-semibold text-[#7628E8]">{service.tagline}</p>
                <p className="mt-2 text-base text-[#5B647E] leading-relaxed max-w-4xl">
                  {service.overview}
                </p>
              </div>

              {/* Two Column Breakdown: Who Needs It & Business Problems Solved */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Who Needs It */}
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-4 text-[#0D132A] font-bold text-sm uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#245BFF]" />
                    <span>Who Needs This Service?</span>
                  </div>
                  <ul className="space-y-3">
                    {service.whoNeedsIt.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#245BFF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Problems It Solves */}
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-4 text-[#0D132A] font-bold text-sm uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>Business Problems It Solves</span>
                  </div>
                  <ul className="space-y-3">
                    {service.problemsSolved.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Core Features & Capabilities */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                  Key Capabilities & Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {service.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-subtle hover:border-[#245BFF]/30 transition-colors"
                    >
                      <h4 className="text-base font-bold text-[#0D132A] mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#245BFF]" />
                        {cap.title}
                      </h4>
                      <p className="text-xs text-[#5B647E] leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Deliverables Strip */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Technologies Involved:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:text-right">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Ready to build?
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#245BFF] hover:text-[#7628E8] transition-colors"
                  >
                    <span>Request a tailored proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
