import { LayoutGrid, Workflow, Bot, BookOpen, Plug, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Solution {
  slug: string
  name: string
  description: string
  outcomes: string[]
  technologies: string[]
  icon: LucideIcon
}

export const solutions: Solution[] = [
  {
    slug: 'business-applications',
    name: 'Business Applications',
    description:
      'Purpose-built apps that replace spreadsheets, paper forms, and email chains with a single structured tool your team actually wants to use.',
    outcomes: ['Faster request handling', 'Consistent data capture', 'Clear ownership of process steps'],
    technologies: ['Power Apps', 'Dataverse', 'Power Automate'],
    icon: LayoutGrid,
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    description:
      'Automating approvals, notifications, and data movement so work progresses without manual chasing.',
    outcomes: ['Reduced manual handoffs', 'Fewer delays and dropped tasks', 'Auditable process history'],
    technologies: ['Power Automate', 'SharePoint', 'Dataverse'],
    icon: Workflow,
  },
  {
    slug: 'ai-agents-copilot',
    name: 'AI Agents & Copilot Studio',
    description:
      'Conversational agents grounded in your own documents and systems, deployed where your team already works.',
    outcomes: ['Faster access to internal knowledge', 'Reduced repetitive support requests', 'Actionable AI, not just answers'],
    technologies: ['Copilot Studio', 'AI Builder', 'Power Automate'],
    icon: Bot,
  },
  {
    slug: 'knowledge-portals',
    name: 'Knowledge & Collaboration Portals',
    description:
      'Modern SharePoint intranets and knowledge hubs that make organizational information easy to find and maintain.',
    outcomes: ['Centralized documentation', 'Improved search & discoverability', 'Lower onboarding time'],
    technologies: ['SharePoint', 'Microsoft 365'],
    icon: BookOpen,
  },
  {
    slug: 'integration-data-sync',
    name: 'Integration & Data Sync',
    description:
      'Connecting Power Platform to the other systems your business depends on, so data stays accurate everywhere.',
    outcomes: ['Elimination of duplicate entry', 'Consistent data across systems', 'Reliable, monitored connections'],
    technologies: ['APIs', 'Azure Functions', 'Power Automate'],
    icon: Plug,
  },
  {
    slug: 'training-enablement',
    name: 'Training & Enablement',
    description:
      'Technical and soft-skill training that helps your team build, maintain, and extend solutions themselves.',
    outcomes: ['Reduced dependency on outside help', 'Confident internal makers', 'Stronger team capability overall'],
    technologies: ['Power Platform Workshops', 'AI/Copilot Training', 'Career Workshops'],
    icon: GraduationCap,
  },
]
