import { ServiceDetail } from "@/types";

export const servicesData: ServiceDetail[] = [
  {
    id: "web-applications",
    title: "Web Application Development",
    iconName: "Globe",
    tagline: "Scalable, modern cloud web platforms built to accelerate business operations.",
    overview:
      "We design and build custom, high-speed web applications engineered for seamless user experiences, rock-solid security, and effortless scalability across devices.",
    whoNeedsIt: [
      "Startups and growing ventures needing custom client-facing web portals.",
      "Businesses moving from fragmented spreadsheets to centralized cloud tools.",
      "Companies requiring secure customer dashboards, portals, and account hubs.",
      "Retailers and wholesalers scaling with bespoke online commerce systems.",
    ],
    problemsSolved: [
      "Inability of off-the-shelf software to match specific business workflows.",
      "Slow, unresponsive legacy web platforms that frustrate users.",
      "Disconnected customer communications and lack of real-time account visibility.",
      "High licensing costs for rigid SaaS tools that charge per user seat.",
    ],
    capabilities: [
      {
        title: "Business Websites",
        desc: "High-performance corporate web presences with fast load times, responsive layouts, and structured SEO.",
      },
      {
        title: "Custom Web Applications",
        desc: "Tailored business web tools designed specifically around your operational processes.",
      },
      {
        title: "Customer Portals",
        desc: "Secure self-service portals where clients view invoices, track requests, and access services 24/7.",
      },
      {
        title: "Admin Dashboards",
        desc: "Clean data management interfaces with role-based access, visual analytics, and exportable reports.",
      },
      {
        title: "E-Commerce Platforms",
        desc: "Custom commerce engines, product catalogs, and checkout experiences tailored to your business model.",
      },
    ],
    technologies: ["React", "Angular", "TypeScript", "Node.js", "REST APIs", "PostgreSQL"],
    sampleDeliverables: [
      "Responsive web application frontend",
      "Secure RESTful API integration",
      "Role-based administrative control panel",
      "Automated email notifications & alerts",
    ],
  },
  {
    id: "desktop-applications",
    title: "Windows Desktop Applications",
    iconName: "Monitor",
    tagline: "High-performance, offline-capable desktop systems for mission-critical operations.",
    overview:
      "When your operations demand instantaneous response times, heavy hardware peripherals (thermal receipt printers, barcode scanners), and zero dependency on unstable internet connections, our Windows desktop applications deliver reliable, uninterrupted execution.",
    whoNeedsIt: [
      "Wholesale distributors and manufacturers requiring rapid counter billing.",
      "Retailers and warehouses with continuous barcode scanning and label printing.",
      "Work environments with intermittent or restricted internet connectivity.",
      "Businesses seeking direct local hardware control and maximum computational speed.",
    ],
    problemsSolved: [
      "Billing counter delays caused by slow cloud loading and browser caching.",
      "System downtime during internet outages that paralyze customer checkout.",
      "Fragile browser-based printing that misaligns thermal receipts and invoices.",
      "Complex multi-window business tasks that feel sluggish in web browsers.",
    ],
    capabilities: [
      {
        title: "Billing & Point-of-Sale Software",
        desc: "Ultra-fast keyboard-first billing with instant SKU auto-complete, multi-tier pricing, and automated GST calculation.",
      },
      {
        title: "Inventory & Stock Management",
        desc: "Multi-level item categorization, variant tracking, low-stock threshold alerts, and real-time ledger audits.",
      },
      {
        title: "Business Management Systems",
        desc: "Integrated desktop platforms managing customer ledgers, daily journal entries, supplier accounts, and receivables.",
      },
      {
        title: "Desktop Productivity Tools",
        desc: "Specialized utilities for batch file conversions, local data parsing, automated document generation, and backups.",
      },
      {
        title: "Custom Windows Applications",
        desc: "Fully tailor-made native software engineered specifically for your workstation hardware and operating environment.",
      },
    ],
    technologies: ["Java", "JavaFX", "Spring Boot", "SQLite", "MySQL", "Apache PDFBox / iText"],
    sampleDeliverables: [
      "Windows native executable installer",
      "Direct thermal & desktop PDF printer drivers",
      "Encrypted local database with automated daily backups",
      "Dual-entry accounting ledger with undo/redo history",
    ],
  },
  {
    id: "custom-business-software",
    title: "Custom Business Software",
    iconName: "Layers",
    tagline: "Software engineered precisely around how your company operates.",
    overview:
      "Most commercial software forces your business to change its workflows to match the tool. We engineer bespoke business software that fits your exact processes, terminology, rules, and team structures.",
    whoNeedsIt: [
      "Enterprises outgrowing generic software packages.",
      "Firms with specialized manufacturing, wholesale, or distribution processes.",
      "Companies with unique pricing tiers, customer credit rules, or approval chains.",
      "Management teams needing unified operational dashboards without third-party lock-in.",
    ],
    problemsSolved: [
      "Paying for hundreds of generic features your business never touches.",
      "Forced workarounds where employees copy-paste between three incompatible systems.",
      "Inability to generate the exact executive reports and audit trails you need.",
      "Lack of ownership and vulnerability to third-party price increases.",
    ],
    capabilities: [
      {
        title: "CRM Systems",
        desc: "Customer relationship tracking focused on your pipeline, interaction history, and lead follow-up cycles.",
      },
      {
        title: "ERP Solutions",
        desc: "Unified software unifying purchasing, inventory, production cycles, invoicing, and reconciliation.",
      },
      {
        title: "Order Management",
        desc: "End-to-end order processing from quote generation to fulfillment, dispatch, and payment status.",
      },
      {
        title: "Customer Management & Ledgers",
        desc: "Detailed customer credit profiles, payment terms, debit/credit tracking, and balance reminders.",
      },
      {
        title: "Reporting & Business Intelligence",
        desc: "Actionable dashboards showing profit margins, top-selling items, cash flow velocity, and outstanding balances.",
      },
    ],
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "MySQL", "Docker"],
    sampleDeliverables: [
      "Custom business rules engine",
      "Multi-user role & permissions system",
      "Comprehensive audit trail & change logging",
      "Automated financial and operations reporting",
    ],
  },
  /* 
  // Service 4: Business Process Automation (Commented for now)
  {
    id: "business-automation",
    title: "Business Process Automation",
    iconName: "Cpu",
    tagline: "Eliminate repetitive manual tasks and let your team focus on high-value growth.",
    overview:
      "Manual data entry, cross-checking spreadsheets, and routine document generation cost valuable business hours and introduce preventable errors. We build automated pipelines that handle repetitive tasks reliably 24/7.",
    whoNeedsIt: [
      "Operations teams spending hours manually reconciling orders, invoices, or stock.",
      "Companies generating recurring invoices, statements, or compliance documents.",
      "Businesses receiving orders across multiple channels that must sync into one system.",
      "Fast-growing teams seeking to scale output without linearly increasing overhead.",
    ],
    problemsSolved: [
      "Costly human errors in data transcription, invoicing, and stock calculations.",
      "Hours lost every day on routine copy-paste work between software tools.",
      "Delayed customer communications and missed follow-ups.",
      "Bottlenecks that occur when key administrative staff are absent.",
    ],
    capabilities: [
      {
        title: "Workflow Automation",
        desc: "Automated trigger-and-action sequences that route tasks, send notifications, and update statuses.",
      },
      {
        title: "Repetitive Task Automation",
        desc: "Batch invoice creation, automatic receipt generation, daily ledger closing, and background data synchronization.",
      },
      {
        title: "Data Management & Normalization",
        desc: "Consolidate and validate data from CSVs, supplier feeds, and multiple databases into clean formats.",
      },
      {
        title: "Process Optimization",
        desc: "Streamline multistep business operations into fast, single-click or fully autonomous workflows.",
      },
      {
        title: "System Integration",
        desc: "Bridge communication between your accounting tools, inventory software, and web applications via REST APIs.",
      },
    ],
    technologies: ["Node.js", "Java", "Spring Boot", "REST APIs", "Docker", "Scheduled Workers"],
    sampleDeliverables: [
      "Background worker & scheduled automation scripts",
      "Multi-system API synchronization bridges",
      "Automated PDF document generators",
      "Operational anomaly alerts and logging",
    ],
  },
  // Service 5: Business Management Systems (Commented for now)
  {
    id: "business-management-systems",
    title: "Business Management Systems",
    iconName: "Briefcase",
    tagline: "Complete operational visibility from procurement to final delivery.",
    overview:
      "An integrated management system brings your entire company onto the same page. Monitor sales, inventory, cash flow, customer accounts, and staff activities from a unified, intuitive command center.",
    whoNeedsIt: [
      "Small and medium enterprises operating across multiple departments or branches.",
      "Wholesale merchants handling high volumes of inventory and complex credit terms.",
      "Business owners who need real-time operational clarity without calling multiple managers.",
    ],
    problemsSolved: [
      "Siloed departments working with conflicting figures and disconnected records.",
      "Lack of visibility into which customer accounts are overdue or over credit limits.",
      "Stock shrinkage and discrepancies between physical inventory and recorded sales.",
    ],
    capabilities: [
      {
        title: "Centralized Ledger Management",
        desc: "Accurate double-entry bookkeeping with real-time balance calculations, undo history, and audit trails.",
      },
      {
        title: "Multi-Tier Stock Controls",
        desc: "Item categorization with size bands, color variants, purchase prices, and customer-specific discount tiers.",
      },
      {
        title: "Cash Flow & Receivables Tracking",
        desc: "Clear visual timelines of incoming payments, aging receivables, and pending vendor payables.",
      },
      {
        title: "Staff & Activity Permissions",
        desc: "Granular access controls restricting who can edit pricing, view confidential margins, or delete transactions.",
      },
    ],
    technologies: ["Java", "JavaFX", "Spring Boot", "React", "PostgreSQL", "MySQL"],
    sampleDeliverables: [
      "Multi-department operational software suite",
      "Executive metrics dashboard",
      "Customer ledger statement generator",
      "Inventory reorder forecast system",
    ],
  },
  // Service 6: Custom Software Development (Commented for now)
  {
    id: "custom-software",
    title: "Custom Software Development",
    iconName: "Code2",
    tagline: "End-to-end software engineering built with long-term durability.",
    overview:
      "From technical architecture discovery and UI/UX design to robust backend engineering and deployment, we manage the complete development lifecycle for bespoke software initiatives.",
    whoNeedsIt: [
      "Entrepreneurs turning an innovative business idea into a market-ready product.",
      "Established organizations seeking a trusted long-term software engineering partner.",
      "Companies with complex legacy software requiring modernization or rewrite.",
    ],
    problemsSolved: [
      "Risk of project failure caused by poor architectural planning and inexperienced teams.",
      "Unmaintainable spaghetti code left behind by one-off freelance contractors.",
      "Software that crashes under increased operational volume or higher user loads.",
    ],
    capabilities: [
      {
        title: "Architecture & Technical Discovery",
        desc: "Detailed scoping, database schema design, and technical roadmapping before code is written.",
      },
      {
        title: "Full-Lifecycle Engineering",
        desc: "Iterative sprints with transparent milestone reviews, clean code architecture, and automated testing.",
      },
      {
        title: "Modern UI/UX Design",
        desc: "Intuitive, clean interfaces that reduce training time and eliminate operator mistakes.",
      },
      {
        title: "Deployment & Ongoing Maintenance",
        desc: "Safe production deployments, database backups, performance monitoring, and responsive support.",
      },
    ],
    technologies: ["React", "Angular", "TypeScript", "Java", "Spring Boot", "Node.js", "MySQL", "PostgreSQL", "Docker", "Git"],
    sampleDeliverables: [
      "Full source code ownership",
      "Technical architecture documentation",
      "Automated test suites & deployment scripts",
      "Maintenance & upgrade warranty",
    ],
  },
  */
];
