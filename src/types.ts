export type Language = 'en' | 'ar';

export interface LocalizedText {
  en: string;
  ar: string;
}

export type ProjectCategory = 'all' | 'platforms' | 'ecommerce' | 'web';

export type ProjectVisualTheme = 'lms' | 'engyup' | 'almontaser' | 'ecommerce';

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  visualTheme: ProjectVisualTheme;
  logoPath?: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  domainLabel: string;
  liveUrl?: string;
  previewImagePath?: string;
  statusLabel: LocalizedText;
  summary: LocalizedText;
  architectureNote: LocalizedText;
  metrics: {
    label: LocalizedText;
    value: LocalizedText;
  }[];
  deliverables: LocalizedText[];
  estimatorPresetId: string;
}

export interface CapabilityItem {
  index: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  practiceTag: LocalizedText;
  deliverables: LocalizedText[];
  featured?: boolean;
  estimatorPresetId: string;
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: string;
  title: LocalizedText;
  status: LocalizedText;
  targetWindow: LocalizedText;
  summary: LocalizedText;
  modules: LocalizedText[];
  previewRows: {
    ref: string;
    title: LocalizedText;
    sector: LocalizedText;
    bidsCount: string;
    state: LocalizedText;
  }[];
}

export interface EstimatorProjectType {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  baseWeeks: number;
  complexityWeight: number;
  recommendedStack: string;
}

export interface EstimatorAddon {
  id: string;
  label: LocalizedText;
  weeks: number;
  complexityWeight: number;
}

export interface FaqItem {
  id: string;
  category: LocalizedText;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface TechStackItem {
  name: string;
  category: LocalizedText;
  badge: string;
  description: LocalizedText;
}
