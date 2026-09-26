import type { ComponentType, SVGProps } from 'react'
import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  path: string
}

export interface SocialLink {
  label: string
  url: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export interface Service {
  slug: string
  name: string
  shortDescription: string
  description: string
  icon: LucideIcon
  capabilities: string[]
  useCases: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ProblemSolution {
  problem: string
  technology: string
  solution: string
  benefit: string
  icon: LucideIcon
}

export type CaseStudyStatus = 'Concept Project'

export interface CaseStudy {
  slug: string
  title: string
  category: string
  status: CaseStudyStatus
  summary: string
  problem: string
  solution: string
  outcome: string
  technologies: string[]
  icon: LucideIcon
}

export interface Industry {
  slug: string
  name: string
  description: string
  focusAreas: string[]
  icon: LucideIcon
}

export type BlogCategory =
  | 'Power Platform'
  | 'SharePoint'
  | 'Automation'
  | 'AI'
  | 'Copilot Studio'
  | 'Career'
  | 'Learning'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  readTime: string
  publishedDate: string
  author: string
}

export type TrainingCategory = 'Technical' | 'Soft Skills' | 'Seminars'

export interface TrainingProgram {
  slug: string
  title: string
  category: TrainingCategory
  audience: string
  description: string
  topics: string[]
  icon: LucideIcon
}

export interface TechItem {
  name: string
  icon: LucideIcon
}

export type ProjectType =
  | 'Power Apps'
  | 'Power Automate'
  | 'SharePoint'
  | 'Copilot Studio'
  | 'AI Automation'
  | 'Power Pages'
  | 'Training'
  | 'Other'

export interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: ProjectType | ''
  message: string
}

export type Theme = 'light' | 'dark'
