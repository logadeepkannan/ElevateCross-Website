import { Search, PenTool, Hammer, Rocket, LifeBuoy } from 'lucide-react'
import type { ProcessStep } from '@/types'

export const webProcessSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start by understanding your goals, users, and technical requirements.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and UI design map out the experience before a line of code is written.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Clean, tested code built in focused sprints with regular check-ins.',
    icon: Hammer,
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Automated pipelines ship your app to production safely and repeatably.',
    icon: Rocket,
  },
  {
    step: '05',
    title: 'Support',
    description: 'Ongoing monitoring, updates, and enhancements after launch.',
    icon: LifeBuoy,
  },
]
