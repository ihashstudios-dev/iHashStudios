"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { ProjectType } from "@/types";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  RefreshCw,
  Building,
  User,
  Mail,
  Phone,
  FileText,
  DollarSign,
  Briefcase,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: ProjectType;
  estimatedBudget: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  description?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  projectType: "Web Application",
  estimatedBudget: "Flexible / To Discuss",
  description: "",
};

const projectTypeOptions: ProjectType[] = [
  "Website Development",
  "Web Application",
  "Windows Desktop Application",
  "Custom Business Software",
  // "Automation",
  "Other",
];

const budgetOptions = [
  "Flexible / To Discuss",
  "Under $1,000 / ₹75,000",
  "$1,000 – $3,000 / ₹75,000 – ₹2,50,000",
  "$3,000 – $10,000 / ₹2,50,000 – ₹8,00,000",
  "$10,000+ / ₹8,00,000+",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Please provide a valid phone number.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please tell us briefly about your project.";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Please provide a bit more detail (at least 20 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const accessKey = siteConfig.contact.web3FormsAccessKey;

      // If an access key is configured, post directly to Web3Forms for instant delivery to ihashstudios@gmail.com
      if (accessKey && accessKey.trim() !== "" && !accessKey.includes("YOUR_ACCESS_KEY")) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            subject: `New Project Inquiry: ${formData.projectType} from ${formData.name}`,
            from_name: `${formData.name} (via iHash Studios Website)`,
            to: siteConfig.contact.email,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.companyName || "Not specified",
            project_type: formData.projectType,
            message: formData.description,
          }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to deliver inquiry email.");
        }
      } else {
        // Fallback simulation when access key hasn't been set in .env.local yet
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      const refCode = `IHS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(refCode);
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "There was a temporary issue submitting your request. Please try again or reach out directly via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setSubmissionId("");
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-card text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Inquiry Reference: #{submissionId}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D132A]">
            Project Details Received!
          </h3>
          <p className="text-sm sm:text-base text-[#5B647E] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our engineering
            lead will review your {formData.projectType} requirements and reach out via{" "}
            <strong className="text-slate-800">{formData.email}</strong> within 24 hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-600">
          <div className="flex justify-between">
            <span className="text-slate-400">Project Type:</span>
            <span className="font-semibold text-slate-800">{formData.projectType}</span>
          </div>
          {formData.companyName && (
            <div className="flex justify-between">
              <span className="text-slate-400">Company:</span>
              <span className="font-semibold text-slate-800">{formData.companyName}</span>
            </div>
          )}
          {/* {formData.estimatedBudget && (
            <div className="flex justify-between">
              <span className="text-slate-400">Estimated Budget:</span>
              <span className="font-semibold text-slate-800">{formData.estimatedBudget}</span>
            </div>
          )} */}
        </div>

        <div className="pt-2">
          <Button onClick={handleReset} variant="outline" size="md">
            <RefreshCw className="w-4 h-4 mr-2" />
            Send Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-card space-y-6"
    >
      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Johnson"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF] ${
                errors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-white"
              }`}
            />
          </div>
          {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Business Email <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF] ${
                errors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-white"
              }`}
            />
          </div>
          {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Phone & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF] ${
                errors.phone ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-white"
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Acme Wholesale Ltd."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF]"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Project Type (Estimated Budget commented out for now) */}
      <div>
        <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Type of Project <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF] cursor-pointer"
          >
            {projectTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 
      <div>
        <label htmlFor="estimatedBudget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Estimated Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
        </label>
        <div className="relative">
          <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            id="estimatedBudget"
            name="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={handleChange}
            className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF] cursor-pointer"
          >
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      */}

      {/* Row 4: Project Description */}
      <div>
        <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Project Description & Requirements <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us what you're planning: the problems you're trying to solve, required features (e.g. desktop billing, customer portal, ERP integration), or your target launch date."
            className={`w-full p-4 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245BFF] ${
              errors.description ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-white"
            }`}
          />
        </div>
        {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
      </div>

      {/* Form Submission Button */}
      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          className="w-full"
          isLoading={isSubmitting}
          showArrow
        >
          Submit Project Inquiry
        </Button>
      </div>

      <p className="text-center text-[11px] text-slate-500">
        We respect your privacy. All inquiries are covered by mutual non-disclosure and confidentiality.
      </p>
    </form>
  );
}
