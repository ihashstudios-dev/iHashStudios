import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact iHash Studios – Start Your Project",
  description:
    "Contact iHash Studios to discuss your web application, Windows desktop software, or custom business software project. Direct WhatsApp, email, and inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Contact Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <Badge
          variant="brand"
          size="md"
          icon={<Sparkles className="w-3.5 h-3.5 text-[#245BFF]" />}
          className="mb-4"
        >
          START A CONVERSATION
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D132A] tracking-tight leading-[1.1] max-w-3xl mx-auto">
          Let&apos;s Discuss Your Project.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5B647E] max-w-2xl mx-auto leading-relaxed">
          Tell us about your operational challenges, ideas, or requirements. We&apos;ll schedule a
          technical consultation and provide a clear, practical roadmap.
        </p>
      </section>

      {/* Main Grid: Form on Left/Main, Direct Channels on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Direct Channels & Studio Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Quick Connect Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 p-6 sm:p-7 shadow-subtle">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Need a Quick Chat?</h3>
                  <span className="text-xs text-emerald-700 font-semibold">Direct WhatsApp</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Connect directly with our engineering team on WhatsApp for quick inquiries, scope
                questions, or project estimates.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Contact Channels */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-card space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Direct Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-[#245BFF]/10 text-[#245BFF] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">
                      Email Consultation
                    </span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#245BFF] transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">
                      Instagram Updates
                    </span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-pink-600 transition-colors">
                      {siteConfig.contact.instagramHandle}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-purple-50 text-[#7628E8] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">
                      Telephone
                    </span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#245BFF] transition-colors">
                      {siteConfig.contact.displayPhone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">
                      Studio Location
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Response Guarantee */}
            <div className="rounded-2xl bg-[#0D132A] text-white p-6 space-y-3 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                <Clock className="w-4 h-4 text-[#245BFF]" />
                <span>Response Time Guarantee</span>
              </div>
              <h4 className="text-base font-bold">24-Hour Technical Review</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every inquiry is personally reviewed by an engineering lead. We will outline
                feasibility, potential tech stack options, and ball-park timelines within one business day.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
