"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Monitor,
  Globe,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Code,
  Database,
  Printer,
  FileSpreadsheet,
} from "lucide-react";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = [
    "All",
    "Desktop Applications",
    "Web Applications",
    "Business Software",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Desktop Applications":
        return Monitor;
      case "Web Applications":
        return Globe;
      default:
        return Layers;
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Work Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <Badge
          variant="brand"
          size="md"
          icon={<Sparkles className="w-3.5 h-3.5 text-[#245BFF]" />}
          className="mb-4"
        >
          ENGINEERING PORTFOLIO & CASE STUDIES
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D132A] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Practical Software Built for Commercial Operations.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[#5B647E] max-w-3xl mx-auto leading-relaxed">
          Explore our completed software systems and production architectures. Every project is
          engineered for operational efficiency, data reliability, and longevity.
        </p>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0D132A] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-[#245BFF]/40 hover:text-[#245BFF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {filteredProjects.map((project, index) => {
          const CategoryIcon = getCategoryIcon(project.category);

          return (
            <article
              key={project.id}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Project Card Header */}
              <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-[#245BFF]/10 text-[#245BFF]">
                      <CategoryIcon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      {project.category}
                    </span>
                  </div>

                  {/* Clear Distinction for Status */}
                  <Badge
                    variant={
                      project.status === "Completed Product"
                        ? "success"
                        : project.status === "Production Prototype"
                        ? "brand"
                        : "subtle"
                    }
                    size="md"
                  >
                    {project.status}
                  </Badge>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D132A] tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-2 text-base font-semibold text-[#7628E8]">{project.tagline}</p>
                <p className="mt-4 text-base text-[#5B647E] leading-relaxed max-w-4xl">
                  {project.shortDescription}
                </p>
              </div>

              {/* Project Visual / Mockup Preview Panel */}
              <div className="bg-slate-50 p-6 sm:p-10 border-b border-slate-100">
                {project.id === "garment-manufacturing-management" ? (
                  /* Authentic Desktop Software UI Mockup */
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden max-w-4xl mx-auto">
                    {/* App Titlebar */}
                    <div className="bg-[#0D132A] px-4 py-2 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-[#245BFF]" />
                        <span className="font-semibold">
                          Rimith Apparels · Billing, Stock & Customer Ledger System
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                        <span>JavaFX 17 + SQLite</span>
                      </div>
                    </div>

                    {/* Operational Highlights Grid */}
                    <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 bg-slate-50/70">
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Stock Tracking
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          4-Tier Item Hierarchy
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          Item › SubCat › SizeBand › Tier
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Customer Ledger
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          Dual-Entry Accounting
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          25-Step Undo/Redo Engine
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Hardware Support
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          Direct Thermal Printing
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          Apache PDFBox & Tax Watermarks
                        </span>
                      </div>
                    </div>

                    {/* Ledger Sample View */}
                    <div className="p-5 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-slate-500 font-sans font-semibold">
                        <span>Real-Time Customer Balance Matrix</span>
                        <span className="text-[#245BFF] text-xs">Verified SQLite PBKDF2</span>
                      </div>
                      <div className="grid grid-cols-12 text-[11px] text-slate-400 font-semibold px-2">
                        <span className="col-span-3">Tx Date</span>
                        <span className="col-span-4">Particulars / SKU</span>
                        <span className="col-span-2 text-right">Debit</span>
                        <span className="col-span-3 text-right">Running Balance</span>
                      </div>
                      <div className="grid grid-cols-12 text-[11px] bg-slate-50 p-2 rounded items-center">
                        <span className="col-span-3 text-slate-600">2026-11-18 14:22</span>
                        <span className="col-span-4 text-slate-800 font-sans">
                          Tax Invoice #INV-1082 (Linen Shirts 40pcs)
                        </span>
                        <span className="col-span-2 text-right text-emerald-600 font-bold">
                          ₹28,400
                        </span>
                        <span className="col-span-3 text-right text-slate-900 font-bold">
                          ₹28,400 (Dr)
                        </span>
                      </div>
                      <div className="grid grid-cols-12 text-[11px] bg-white p-2 rounded items-center border border-slate-100">
                        <span className="col-span-3 text-slate-600">2026-11-18 16:05</span>
                        <span className="col-span-4 text-slate-800 font-sans">
                          NEFT Bank Settlement (UTR-774910)
                        </span>
                        <span className="col-span-2 text-right text-blue-600 font-bold">
                          ₹20,000 (Cr)
                        </span>
                        <span className="col-span-3 text-right text-slate-900 font-bold">
                          ₹8,400 (Dr)
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Modern Responsive Mockup Frame */
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-6 max-w-4xl mx-auto">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                        <span className="text-xs text-slate-400 font-mono ml-2">
                          https://preview.ihashstudios.com/{project.id}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#245BFF]">
                        Type-Safe Component Architecture
                      </span>
                    </div>

                    <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                      <Globe className="w-10 h-10 text-[#245BFF] mx-auto mb-3" />
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto">
                        Responsive layout system, semantic metadata, accessible interactive forms,
                        and zero-latency state transitions.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Challenge & Solution Grid */}
              <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    The Challenge
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Our Solution
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features & Architecture Specifications */}
              <div className="p-6 sm:p-10 lg:p-12">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Implemented Features & Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills & Metrics Bar */}
                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-semibold mr-1">Stack:</span>
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button href="/contact" size="sm" variant="outline" showArrow>
                    Build Something Similar
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Extensibility & Future Projects Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-3">
          <span className="inline-flex p-3 rounded-xl bg-[#245BFF]/10 text-[#245BFF]">
            <Code className="w-6 h-6" />
          </span>
          <h3 className="text-lg font-bold text-[#0D132A]">
            Have a project in mind for your company?
          </h3>
          <p className="text-sm text-[#5B647E] max-w-xl mx-auto">
            Whether you need a custom desktop billing system, a cloud customer portal, or an
            integrated inventory workflow, we can build it tailored to your specifications.
          </p>
          <div className="pt-2">
            <Button href="/contact" size="md" variant="primary" showArrow>
              Start a Project Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
