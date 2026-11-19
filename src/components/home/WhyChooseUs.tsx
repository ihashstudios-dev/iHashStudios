import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Sparkles,
  Target,
  Layers,
  TrendingUp,
  Smile,
  Headphones,
  Check,
} from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Tailored Solutions",
      subtitle: "Zero generic one-size-fits-all compromises",
      description:
        "Every line of software is engineered to match your specific industry operations, data fields, pricing models, and team workflow.",
      icon: Sparkles,
      tag: "Custom Built",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Business-Focused Development",
      subtitle: "Technology that directly impacts your bottom line",
      description:
        "We prioritize commercial value over technical vanity. We focus on cutting operational hours, preventing billing errors, and accelerating fulfillment.",
      icon: Target,
      tag: "ROI Driven",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Modern Technologies",
      subtitle: "Proven, battle-tested modern engineering",
      description:
        "From Java & JavaFX for ultra-responsive offline desktop systems to React, TypeScript, and Spring Boot for cloud platforms, we build on reliable tech.",
      icon: Layers,
      tag: "Type-Safe",
      gradient: "from-blue-600 to-sky-600",
    },
    {
      title: "Scalable Architecture",
      subtitle: "Engineered to handle your business growth",
      description:
        "Modular database schemas and clean separation of concerns ensure your software runs as smoothly with 100,000 transactions as it does with 100.",
      icon: TrendingUp,
      tag: "High Volume",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "User-Friendly Interfaces",
      subtitle: "Ergonomic designs your staff can adopt in minutes",
      description:
        "Minimal training required. Rapid keyboard shortcuts for counter billing, clear typography, and clean layouts eliminate operator mistakes.",
      icon: Smile,
      tag: "Intuitive UI",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Reliable Support & Partnership",
      subtitle: "Direct access to the engineers who wrote your code",
      description:
        "No outsourced helpdesk queues. You communicate directly with our development studio for timely updates, maintenance, and technical advice.",
      icon: Headphones,
      tag: "Direct Access",
      gradient: "from-indigo-600 to-purple-700",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="The iHash Advantage"
          title="Software Built Around Your Business."
          description="We combine engineering rigor with deep commercial empathy. Here is why businesses trust iHash Studios as their software development partner."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl p-7 bg-[#F8FAFF] border border-slate-200/80 hover:border-[#245BFF]/40 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#245BFF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0D132A] group-hover:text-[#245BFF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#7628E8] mt-1 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-[#5B647E] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Verified Studio Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
