"use client";

import React from "react";
import {
  Monitor,
  Database,
  Printer,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glows */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-[#245BFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#7628E8]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Card 1: Windows Desktop Application Window (Inspired by native billing & ledger software) */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
          {/* Windows-style Header bar */}
          <div className="bg-[#0D132A] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#245BFF] flex items-center justify-center text-white">
                <Monitor className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-white tracking-wide">
                iHash Desktop Engine v2.4 <span className="text-slate-400 font-normal">· Billing & Inventory POS</span>
              </span>
            </div>
            {/* Windows minimize / maximize / close buttons */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            </div>
          </div>

          {/* Window Body: High-speed POS / Billing Interface */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-50/60 to-white">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#245BFF]/10 text-[#245BFF] font-semibold text-[10px]">
                  F2 · QUICK INVOICE
                </span>
                <span className="text-slate-500 font-mono text-[11px]">INV-2026-0849</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-medium text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Printer Online (Direct ESC/POS)</span>
              </div>
            </div>

            {/* Table Mockup */}
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-12 text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-slate-100/70 rounded">
                <span className="col-span-5">Item / SubCategory</span>
                <span className="col-span-2 text-center">Size Band</span>
                <span className="col-span-2 text-right">Qty</span>
                <span className="col-span-3 text-right">Total (GST)</span>
              </div>

              <div className="grid grid-cols-12 items-center px-2 py-1.5 rounded bg-white border border-slate-100 text-[11px]">
                <span className="col-span-5 font-medium text-slate-800 truncate">
                  Premium Linen Shirt - Navy
                </span>
                <span className="col-span-2 text-center text-slate-500 text-[10px] bg-slate-100 rounded px-1">
                  XL (42)
                </span>
                <span className="col-span-2 text-right font-mono text-slate-700">40 pcs</span>
                <span className="col-span-3 text-right font-mono font-semibold text-slate-900">
                  ₹28,400.00
                </span>
              </div>

              <div className="grid grid-cols-12 items-center px-2 py-1.5 rounded bg-white border border-slate-100 text-[11px]">
                <span className="col-span-5 font-medium text-slate-800 truncate">
                  Twill Chino - Khaki
                </span>
                <span className="col-span-2 text-center text-slate-500 text-[10px] bg-slate-100 rounded px-1">
                  32 Regular
                </span>
                <span className="col-span-2 text-right font-mono text-slate-700">25 pcs</span>
                <span className="col-span-3 text-right font-mono font-semibold text-slate-900">
                  ₹18,750.00
                </span>
              </div>
            </div>

            {/* Summary strip */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Database className="w-3.5 h-3.5 text-[#7628E8]" />
                  <span>SQLite Local Encrypted</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                  Net Payable (Auto GST)
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-[#0D132A]">
                  ₹47,150.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Two Floating Columns (Cloud Portal + Code Engine) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Column A: Cloud Web Dashboard Widget */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#245BFF]/10 text-[#245BFF]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Cloud Web Portal</h4>
                    <p className="text-[10px] text-slate-500">Real-Time Sync API</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  99.98% SLA
                </span>
              </div>

              {/* Sparkline Graphic */}
              <div className="h-14 flex items-end gap-1.5 pt-2 pb-1">
                {[35, 50, 45, 65, 55, 78, 62, 85, 72, 94].map((height, i) => (
                  <div key={i} className="flex-1 bg-slate-100 rounded-t relative h-full flex items-end">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-[#245BFF] to-[#7628E8] transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 mt-2">
              <span>Sync latency: 24ms</span>
              <span className="text-[#245BFF] font-medium flex items-center gap-0.5">
                Live Metrics <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Column B: Clean Code Terminal Widget */}
          <div className="p-4 rounded-xl bg-[#0D132A] text-slate-300 border border-slate-800 shadow-subtle flex flex-col justify-between font-mono">
            <div>
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-[#245BFF]" />
                  <span>InvoiceController.java</span>
                </div>
                <span className="text-[9px] text-[#7628E8] font-bold">SPRING BOOT</span>
              </div>

              <div className="text-[11px] leading-relaxed space-y-0.5 text-slate-400">
                <div>
                  <span className="text-purple-400">@PostMapping</span>
                  <span className="text-slate-500">(</span>
                  <span className="text-emerald-400">&quot;/api/v1/invoices&quot;</span>
                  <span className="text-slate-500">)</span>
                </div>
                <div>
                  <span className="text-blue-400">public</span>{" "}
                  <span className="text-amber-300">ResponseEntity</span>
                  <span className="text-slate-300">&lt;</span>
                  <span className="text-sky-300">Invoice</span>
                  <span className="text-slate-300">&gt;</span>{" "}
                  <span className="text-white">create</span>
                  <span className="text-slate-500">() &#123;</span>
                </div>
                <div className="pl-3 text-[10px] text-slate-400">
                  <span className="text-slate-500">// Atomic ledger + PDF</span>
                  <br />
                  <span className="text-blue-400">return</span> ledgerService.process();
                </div>
                <div className="text-slate-500">&#125;</div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 mt-2">
              <span className="flex items-center gap-1 text-emerald-400 font-sans">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Type Safe
              </span>
              <span className="text-[#245BFF]">JavaFX + React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
