"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { technologiesData } from "@/data/technologies";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Boxes,
  Cpu,
  Monitor,
  Workflow,
  HardDrive,
  GitBranch,
  Coffee,
  Component,
  Atom,
  FileCode2,
  FileJson,
  Code,
  Palette,
  Network,
} from "lucide-react";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Frontend" | "Backend" | "Database" | "Tools"
  >("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;

  const filteredTechnologies =
    activeCategory === "All"
      ? technologiesData
      : technologiesData.filter((item) => item.category === activeCategory);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Atom":
        return Atom;
      case "Component":
        return Component;
      case "FileCode2":
        return FileCode2;
      case "FileJson":
        return FileJson;
      case "Code":
        return Code;
      case "Palette":
        return Palette;
      case "Coffee":
        return Coffee;
      case "Server":
        return Server;
      case "Cpu":
        return Cpu;
      case "Network":
        return Network;
      case "Monitor":
        return Monitor;
      case "Database":
        return Database;
      case "HardDrive":
        return HardDrive;
      case "GitBranch":
        return GitBranch;
      case "Boxes":
        return Boxes;
      case "Wrench":
        return Wrench;
      case "Workflow":
        return Workflow;
      default:
        return Code2;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Competence"
          title="Battle-Tested Technology Stack."
          description="We do not follow trends blindly. We build on resilient, strongly-typed, and enterprise-supported technologies designed for long-term production reliability."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0D132A] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredTechnologies.map((tech) => {
            const Icon = getIcon(tech.iconName);
            return (
              <div
                key={tech.name}
                className="group p-5 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 hover:border-[#245BFF]/40 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#245BFF] group-hover:scale-110 group-hover:bg-[#245BFF] group-hover:text-white transition-all duration-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0D132A] group-hover:text-[#245BFF] transition-colors">
                    {tech.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#5B647E] leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Production Ready</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
