import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    summary: "Understand the client's business, requirements and objectives.",
    details:
      "We begin by examining your existing workflows, pain points, daily operations, and commercial objectives. We identify which bottlenecks cost the most time or money, ensuring software is designed to solve real business needs.",
    deliverable: "Clear Requirements Outline & Scope Assessment",
  },
  {
    step: "02",
    title: "Plan",
    summary: "Define features, architecture and project scope.",
    details:
      "We architect the data models, choose the right technology stack (desktop native vs cloud web), define module boundaries, and map out realistic development milestones with clear deliverables.",
    deliverable: "Architecture Blueprint & Milestone Roadmap",
  },
  {
    step: "03",
    title: "Design",
    summary: "Create intuitive interfaces and user experiences.",
    details:
      "We design clean, ergonomic user interfaces tailored to your team's day-to-day work patterns. For desktop billing, we focus on keyboard shortcuts and rapid data entry; for web portals, we focus on clarity and accessibility.",
    deliverable: "Interactive Layouts & Component Design System",
  },
  {
    step: "04",
    title: "Develop",
    summary: "Build, test and refine the software.",
    details:
      "Using clean code standards, strict typing, and structured databases, we build the application in iterative increments. Every feature is tested against real-world edge cases before client review.",
    deliverable: "Production-Grade Codebase with Verification",
  },
  {
    step: "05",
    title: "Deliver",
    summary: "Deploy the solution and provide support.",
    details:
      "We install and deploy the software into your operational environment, configure hardware peripherals (printers, scanners) or cloud hosting, provide staff walkthroughs, and ensure reliable ongoing support.",
    deliverable: "Production Deployment, User Walkthrough & Support",
  },
];
