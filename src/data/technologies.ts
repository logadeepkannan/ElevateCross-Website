import {
  LayoutGrid,
  Workflow,
  Share2,
  Bot,
  Globe,
  Database,
  Sparkles,
  Grid3x3,
} from 'lucide-react'
import type { TechItem } from '@/types'

export const technologies: TechItem[] = [
  { name: 'Power Apps', icon: LayoutGrid },
  { name: 'Power Automate', icon: Workflow },
  { name: 'SharePoint', icon: Share2 },
  { name: 'Copilot Studio', icon: Bot },
  { name: 'Power Pages', icon: Globe },
  { name: 'Dataverse', icon: Database },
  { name: 'AI Builder', icon: Sparkles },
  { name: 'Microsoft 365', icon: Grid3x3 },
]

export const flowStages = [
  { label: 'Power Apps', icon: LayoutGrid },
  { label: 'Power Automate', icon: Workflow },
  { label: 'SharePoint', icon: Share2 },
  { label: 'Copilot Studio', icon: Bot },
  { label: 'APIs', icon: Globe },
]
