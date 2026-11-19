import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Globe,
  Monitor,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Activity,
  Boxes,
  Zap,
} from "lucide-react";

export function ServicesSection() {
  const coreServices = [
    {
      id: "web-applications",
      title: "Web Application Development",
      description:
        "High-performance cloud platforms and portals engineered with responsive layouts, accessible UI, and modern API architectures.",
      icon: Globe,
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-blue-600 border-blue-200",
      items: [
        "Business websites & landing portals",
        "Custom web applications & SaaS",
        "Secure customer self-service portals",
        "Real-time admin dashboards & analytics",
        "E-commerce platforms & product catalogs",
      ],
      visualType: "web",
    },
    {
      id: "desktop-applications",
      title: "Windows Desktop Applications",
      description:
        "Offline-first, high-speed native desktop software for rapid billing, direct printer integration, and mission-critical transactions.",
      icon: Monitor,
      color: "from-purple-600 to-indigo-700",
      accentBg: "bg-purple-50 text-purple-600 border-purple-200",
      items: [
        "High-speed billing & point-of-sale software",
        "Multi-tier inventory & stock management",
        "Business management & accounting systems",
        "Specialized desktop productivity tools",
        "Custom Windows native applications",
      ],
      visualType: "desktop",
    },
    {
      id: "custom-business-software",
      title: "Custom Business Software",
      description:
        "Bespoke software tailored around your unique commercial rules, approval chains, and industry-specific workflows.",
      icon: Layers,
      color: "from-sky-600 to-blue-700",
      accentBg: "bg-sky-50 text-sky-600 border-sky-200",
      items: [
        "Custom CRM & lead tracking systems",
        "Specialized ERP & operations solutions",
        "End-to-end order management pipelines",
        "Customer ledger & debit/credit balances",
        "Management reporting & audit intelligence",
      ],
      visualType: "business",
    },
    /*
    {
      id: "business-automation",
      title: "Business Automation",
      description:
        "Automate repetitive data reconciliation, batch invoicing, and cross-platform syncing so your team can focus on growth.",
      icon: Cpu,
      color: "from-indigo-600 to-purple-800",
      accentBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      items: [
        "End-to-end workflow automation",
        "Repetitive daily task automation",
        "Data management & normalization pipelines",
        "Operational process optimization",
        "Multi-system API & database integration",
      ],
      visualType: "automation",
    },
    */
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFF] relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Services"
          title="Technology That Works for Your Business."
          description="We build tailored software solutions designed to simplify operations, eliminate bottlenecks, and scale your business without unnecessary complexity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle hover gradient accent on top edge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#245BFF] to-[#7628E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-200 group-hover:scale-105 ${service.accentBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      iHash Service
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D132A] tracking-tight group-hover:text-[#245BFF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5B647E] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="mt-5 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Capabilities & Solutions
                    </h4>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#245BFF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mini Visual Preview Mockup Box */}
                  <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    {service.visualType === "web" && (
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          HTTPS / REST / WebSocket
                        </span>
                        <span className="text-[#245BFF] font-semibold">Web & Mobile Ready</span>
                      </div>
                    )}
                    {service.visualType === "desktop" && (
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          Windows Native EXE · Offline
                        </span>
                        <span className="text-[#7628E8] font-semibold">Instant Hardware POS</span>
                      </div>
                    )}
                    {service.visualType === "business" && (
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-purple-500" />
                          Custom Multi-Tier Ledgers
                        </span>
                        <span className="text-[#245BFF] font-semibold">Zero SaaS Seats</span>
                      </div>
                    )}
                    {service.visualType === "automation" && (
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Scheduled Background Pipelines
                        </span>
                        <span className="text-emerald-600 font-semibold">Zero Manual Work</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#245BFF] hover:text-[#7628E8] transition-colors group/link"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Request Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
