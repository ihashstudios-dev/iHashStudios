"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";
import { CheckCircle2, ChevronRight, Sparkles, Layers, ShieldCheck } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Proven Methodology"
          title="From Idea to Implementation."
          description="A transparent, five-step delivery framework ensuring your software is built on time, within scope, and aligned with your operational goals."
        />

        {/* Desktop Process Stepper Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white border-[#245BFF] shadow-md ring-2 ring-[#245BFF]/10"
                    : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-black px-2 py-0.5 rounded ${
                      isActive
                        ? "bg-gradient-to-r from-[#245BFF] to-[#7628E8] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {step.step}
                  </span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#245BFF]" />}
                </div>
                <h3
                  className={`text-sm font-bold truncate ${
                    isActive ? "text-[#0D132A]" : "text-slate-600"
                  }`}
                >
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box (Desktop) */}
        <div className="hidden lg:block">
          <div className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-card">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-[#245BFF]">
                    {processSteps[activeStep].step}
                  </span>
                  <div className="h-6 w-px bg-slate-200" />
                  <h3 className="text-2xl font-extrabold text-[#0D132A]">
                    {processSteps[activeStep].title}
                  </h3>
                </div>

                <p className="text-base font-semibold text-slate-800">
                  {processSteps[activeStep].summary}
                </p>

                <p className="text-sm text-[#5B647E] leading-relaxed">
                  {processSteps[activeStep].details}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Key Milestone:{" "}
                    <strong className="text-[#0D132A]">
                      {processSteps[activeStep].deliverable}
                    </strong>
                  </span>
                </div>
              </div>

              <div className="col-span-4 bg-slate-50 rounded-xl p-6 border border-slate-200/80 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#245BFF] to-[#7628E8] text-white mx-auto flex items-center justify-center mb-3 shadow-md">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Phase {processSteps[activeStep].step} Complete
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Full client sign-off before proceeding to the next milestone.
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245BFF]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Studio Quality Gate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Step Timeline View */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl bg-white border border-slate-200/90 p-5 shadow-subtle"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#245BFF]/10 text-[#245BFF]">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#0D132A]">{step.title}</h3>
              </div>
              <p className="text-xs font-semibold text-slate-700 mb-1">{step.summary}</p>
              <p className="text-xs text-[#5B647E] leading-relaxed mb-3">{step.details}</p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
