import {
  GraduationCap,
  Briefcase,
  HeartPulse,
  Factory,
  Cpu,
  Building2,
  Store,
} from 'lucide-react'
import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    slug: 'education',
    name: 'Education',
    description:
      'Student services, administrative workflows, and knowledge portals for schools and universities.',
    focusAreas: ['Student request portals', 'Faculty workflow automation', 'Campus knowledge hubs'],
    icon: GraduationCap,
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Client engagement tracking, document workflows, and internal operations apps.',
    focusAreas: ['Client onboarding apps', 'Engagement approvals', 'Document automation'],
    icon: Briefcase,
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Non-clinical operational tools for scheduling, intake, and internal coordination.',
    focusAreas: ['Facility & resource scheduling', 'Staff request workflows', 'Internal knowledge portals'],
    icon: HeartPulse,
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description: 'Field data capture, inspection apps, and process automation for plant operations.',
    focusAreas: ['Inspection & quality apps', 'Maintenance request flows', 'Inventory tracking'],
    icon: Factory,
  },
  {
    slug: 'technology',
    name: 'Technology',
    description: 'Internal tooling, approval systems, and AI-assisted workflows for tech teams.',
    focusAreas: ['Internal tooling', 'DevOps request automation', 'AI-assisted support'],
    icon: Cpu,
  },
  {
    slug: 'corporate-operations',
    name: 'Corporate Operations',
    description: 'Cross-department process automation for HR, finance, and administrative teams.',
    focusAreas: ['HR & onboarding workflows', 'Finance approvals', 'Facilities & resource management'],
    icon: Building2,
  },
  {
    slug: 'smbs',
    name: 'SMBs',
    description: 'Practical, cost-effective digital tools that help growing businesses scale operations.',
    focusAreas: ['Lightweight business apps', 'Customer & vendor portals', 'Process automation'],
    icon: Store,
  },
]
