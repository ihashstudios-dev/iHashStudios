import { TechnologyItem } from "@/types";

export const technologiesData: TechnologyItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven user interfaces with fast state management and reactive rendering.",
    iconName: "Atom",
  },
  {
    name: "Angular",
    category: "Frontend",
    description: "Robust enterprise frontend framework for scalable single-page applications.",
    iconName: "Component",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Strict compile-time type safety preventing runtime bugs across client and server.",
    iconName: "FileCode2",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Modern ES6+ JavaScript powering responsive web interactions and logic.",
    iconName: "FileJson",
  },
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic, accessible document structure for optimal web accessibility and SEO.",
    iconName: "Code",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Modern responsive styling, flexbox/grid layouts, and clean animations.",
    iconName: "Palette",
  },

  // Backend
  {
    name: "Java",
    category: "Backend",
    description: "High-performance, strongly-typed foundation for mission-critical enterprise systems.",
    iconName: "Coffee",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    description: "Production-ready enterprise microservices and secure backend RESTful architectures.",
    iconName: "Server",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven, asynchronous JavaScript runtime for high-throughput network APIs.",
    iconName: "Cpu",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "Standardized, documented JSON API endpoints connecting client apps to data layers.",
    iconName: "Network",
  },
  {
    name: "JavaFX",
    category: "Backend",
    description: "Modern desktop GUI platform with hardware-accelerated graphics and CSS styling.",
    iconName: "Monitor",
  },

  // Database
  {
    name: "MySQL",
    category: "Database",
    description: "Reliable, high-speed relational database management for transactional systems.",
    iconName: "Database",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Advanced open-source object-relational database with ACID compliance and JSON support.",
    iconName: "HardDrive",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    description: "Distributed version control system ensuring safe code collaboration and history.",
    iconName: "GitBranch",
  },
  {
    name: "Docker",
    category: "Tools",
    description: "Containerization enabling consistent deployment across development and production.",
    iconName: "Boxes",
  },
  {
    name: "Maven",
    category: "Tools",
    description: "Dependency management and standardized automated build system for Java ecosystems.",
    iconName: "Wrench",
  },
  {
    name: "Jenkins",
    category: "Tools",
    description: "Continuous integration and automated build automation pipelines.",
    iconName: "Workflow",
  },
];
