import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D132A] text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#245BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#7628E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo variant="white" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* WhatsApp direct link */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition-colors"
                aria-label="Chat with iHash Studios on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>

              {/* Instagram link */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 text-pink-300 border border-pink-500/20 text-xs font-semibold transition-colors"
                aria-label="Follow iHash Studios on Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#245BFF]" />
              <span>Full source-code ownership & enterprise data security</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 block truncate"
                    title={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-[#245BFF] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-[#245BFF] shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#245BFF] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Taking New Projects</span>
              </div>
              <span>Have a project in mind? We respond within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} <span className="text-slate-300 font-semibold">{siteConfig.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-mono">TAGLINE: {siteConfig.tagline}</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
