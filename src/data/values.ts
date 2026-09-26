import { Lightbulb, Feather, ShieldCheck, BookOpenCheck, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface CompanyValue {
  title: string
  description: string
  icon: LucideIcon
}

export const companyValues: CompanyValue[] = [
  {
    title: 'Innovation',
    description:
      'We stay close to what Power Platform and AI can actually do today, and apply it where it creates real value.',
    icon: Lightbulb,
  },
  {
    title: 'Simplicity',
    description:
      'The best solution is the one your team can actually use and maintain — not the most complex one we could build.',
    icon: Feather,
  },
  {
    title: 'Reliability',
    description:
      'Automations and apps are only useful if they work consistently. We build with monitoring and error handling in mind.',
    icon: ShieldCheck,
  },
  {
    title: 'Learning',
    description:
      'We share what we know through training and workshops, because capable teams outlast any single project.',
    icon: BookOpenCheck,
  },
  {
    title: 'Business Impact',
    description:
      'Every technical decision is judged by one question: does this actually make the work easier or faster?',
    icon: TrendingUp,
  },
]
