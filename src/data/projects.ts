import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "garment-manufacturing-management",
    title: "Garment Manufacturing & Wholesale Management Software",
    category: "Desktop Applications",
    status: "Completed Product",
    tagline: "Desktop Billing, Multi-Tier Inventory & Ledger System",
    shortDescription:
      "A high-speed Windows desktop application designed specifically for apparel manufacturers and wholesale garment distributors to manage fast billing, variant-level inventory, customer credit ledgers, and automated reporting.",
    fullDescription:
      "Engineered for high-volume wholesale operations, this native desktop solution eliminates billing delays and inventory discrepancies. Built with Java and JavaFX, it provides an offline-first architecture with instant SKU lookups, multi-tier size and price categories, dual-entry accounting ledgers with 25-step transaction undo/redo, automated GST calculation, and direct thermal & desktop PDF invoice printing.",
    clientType: "Garment Manufacturing & Wholesale Distribution Industry",
    challenge:
      "Garment wholesale businesses deal with hundreds of style variants, multiple size bands, fluctuating tier pricing, and extensive credit ledgers. Traditional cloud-based tools suffered from lag during counter billing, internet disconnects, and lack of fine-tuned thermal receipt printing control.",
    solution:
      "We engineered a dedicated native desktop application with a responsive local SQLite database, PBKDF2-SHA256 data protection, rapid keyboard-driven billing, and a 4-tier garment catalog (Item > SubCategory > SizeBand > PriceTier). Invoices print in milliseconds directly to hardware printers without browser print dialog lag.",
    keyFeatures: [
      "Rapid Keyboard-Driven Invoicing with instant SKU auto-complete & returns mode",
      "Variant-Level Stock Tracking with low-stock alerts and CSV audit logs",
      "Dual-Entry Customer Ledger with real-time balance calculations & 25-step undo/redo",
      "Automated GST Calculation & Tax Invoices with custom branding watermarks",
      "Direct Thermal Receipt & Desktop PDF Printing (Apache PDFBox integration)",
      "Automated Daily Database Backups with encrypted local persistence",
    ],
    technologies: ["Java", "JavaFX (FXML + CSS)", "SQLite", "Apache PDFBox", "Apache POI", "Maven"],
    metrics: [
      { label: "Architecture", value: "Offline-First Desktop" },
      { label: "Invoice Generation", value: "Sub-Second" },
      { label: "Data Integrity", value: "Dual-Entry + PBKDF2" },
      { label: "Printer Support", value: "Direct Thermal & PDF" },
    ],
    imagePlaceholderText: "Desktop Billing & Customer Ledger Interface",
  },
  {
    id: "business-websites-portals",
    title: "Enterprise Business Websites & Client Portals",
    category: "Web Applications",
    status: "Completed Product",
    tagline: "High-Performance Digital Presence & Integrated Portals",
    shortDescription:
      "Custom business websites and customer-facing web portals engineered with modern responsive layouts, clean typography, search engine optimization, and lightning-fast page loading.",
    fullDescription:
      "We craft business websites that act as digital headquarters rather than passive brochures. Built on modern React and TypeScript architecture with clean CSS systems, our web projects feature structured metadata for search engine indexing, mobile-first responsive interfaces, accessible forms with robust validation, and seamless integration options for client communication channels.",
    clientType: "Growing Enterprises, B2B Companies & Service Providers",
    challenge:
      "Many corporate websites suffer from slow load times, bloated third-party plugins, broken mobile layouts, and generic agency templates that fail to communicate technical credibility and distinct business value.",
    solution:
      "We build clean, hand-crafted web applications using modern component-driven architectures. Zero unnecessary dependencies, semantic HTML hierarchy, optimized asset delivery, and conversion-centered interaction flows that guide visitors toward starting a project or inquiring directly.",
    keyFeatures: [
      "Mobile-First Responsive Design optimized across smartphone, tablet, and desktop viewports",
      "Clean Typography & Generous Whitespace for effortless content readability",
      "Fast Core Web Vitals with optimized assets and zero framework bloat",
      "Interactive Project Inquiry & Contact Workflows with real-time field validation",
      "Comprehensive SEO Metadata, dynamic XML sitemaps, and Open Graph previews",
      "Modular Architecture allowing easy extension with customer portals and admin tooling",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "REST APIs"],
    metrics: [
      { label: "Framework", value: "React & TypeScript" },
      { label: "Responsiveness", value: "Mobile to 4K Ultra" },
      { label: "Layout Philosophy", value: "Business-First UI/UX" },
      { label: "Code Quality", value: "Modular & Type-Safe" },
    ],
    imagePlaceholderText: "Modern Responsive Corporate Website & Portal",
  },
  {
    id: "modular-business-management-core",
    title: "Modular Business Management & Operations Platform",
    category: "Business Software",
    status: "Production Prototype",
    tagline: "Unified Multi-Module Inventory, Orders & Financial Dashboard",
    shortDescription:
      "A modular business software prototype integrating order intake, stock level tracking, customer ledger reconciliation, and executive dashboards into a unified system.",
    fullDescription:
      "Designed for expanding businesses outgrowing fragmented tools, this system architecture provides a standardized data layer connecting order processing, stock dispatch, receivables tracking, and managerial reporting. It supports both standalone workstation deployments and networked multi-user setups.",
    clientType: "Wholesale, Retail & Multi-Branch Commercial Operations",
    challenge:
      "Businesses often rely on one tool for billing, another for inventory, and paper books for customer balances. When records do not synchronize automatically, management loses track of outstanding receivables and dead inventory stock.",
    solution:
      "A unified business management architecture that treats inventory movements, invoices, and customer payments as atomic, synchronized transactions. Every action automatically updates stock levels and customer ledger balances simultaneously.",
    keyFeatures: [
      "Multi-Branch Stock Monitoring with reorder point warnings",
      "Integrated Customer Ledger with credit limits and overdue payment tracking",
      "Real-Time Sales Metrics & Executive Dashboard widgets",
      "Role-Based User Permissions for cashier, accountant, and manager roles",
      "Extensible RESTful API foundation for future web and mobile connectivity",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "REST APIs", "Docker"],
    metrics: [
      { label: "Status", value: "Active Prototype" },
      { label: "Data Model", value: "Relational & Normalized" },
      { label: "Scalability", value: "Modular Services" },
      { label: "Deployment", value: "Local or Private Cloud" },
    ],
    imagePlaceholderText: "Unified Business Management & Operations Dashboard",
  },
];
