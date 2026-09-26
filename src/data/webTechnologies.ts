import { Code, Layers, FileCode, Server, Database, Palette, Cloud, Boxes } from 'lucide-react'
import type { TechItem } from '@/types'

export const webTechnologies: TechItem[] = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Layers },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Boxes },
]

export const webFlowStages = [
  { label: 'Frontend', icon: Code },
  { label: 'API', icon: Server },
  { label: 'Database', icon: Database },
  { label: 'Cloud', icon: Cloud },
]
