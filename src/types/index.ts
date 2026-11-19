export type ProjectType =
  | "Website Development"
  | "Web Application"
  | "Windows Desktop Application"
  | "Custom Business Software"
  | "Automation"
  | "Other";

export type ProjectStatus = "Completed Product" | "Production Prototype" | "Concept Architecture";

export type ProjectCategory = "All" | "Desktop Applications" | "Web Applications" | "Business Software";

export interface Project {
  id: string;
  title: string;
  category: "Desktop Applications" | "Web Applications" | "Business Software";
  status: ProjectStatus;
  shortDescription: string;
  fullDescription: string;
  clientType: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  imagePlaceholderText: string;
  tagline: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  overview: string;
  whoNeedsIt: string[];
  problemsSolved: string[];
  capabilities: { title: string; desc: string }[];
  technologies: string[];
  sampleDeliverables: string[];
}

export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  deliverable: string;
}
