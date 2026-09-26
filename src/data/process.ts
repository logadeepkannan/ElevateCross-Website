import { Search, PenTool, Hammer, Zap, TrendingUp, Mail, BookOpen, RefreshCw, ClipboardList } from 'lucide-react'
import type { ProcessStep, ProblemSolution } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We learn how your team actually works today and identify where friction and manual effort live.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Design',
    description: 'We map the target process and technical approach before writing a single line of configuration.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Build',
    description: 'We build the app, flow, or agent iteratively, checking in early and often.',
    icon: Hammer,
  },
  {
    step: '04',
    title: 'Automate',
    description: 'We connect systems and remove manual steps so the solution runs with minimal intervention.',
    icon: Zap,
  },
  {
    step: '05',
    title: 'Improve',
    description: 'We monitor real usage and refine the solution as your business needs evolve.',
    icon: TrendingUp,
  },
]

export const problemSolutions: ProblemSolution[] = [
  {
    problem: 'Manual approval chains buried in email',
    technology: 'Power Automate + SharePoint',
    solution: 'Structured, trackable approval workflow',
    benefit: 'Faster decisions with a clear audit trail',
    icon: Mail,
  },
  {
    problem: 'Scattered knowledge across drives and chats',
    technology: 'SharePoint + Copilot Studio',
    solution: 'Searchable knowledge portal with an AI assistant',
    benefit: 'Employees find answers in seconds, not hours',
    icon: BookOpen,
  },
  {
    problem: 'Repetitive data entry across disconnected systems',
    technology: 'Power Automate + APIs',
    solution: 'Automated data synchronization',
    benefit: 'Less manual work, fewer data entry errors',
    icon: RefreshCw,
  },
  {
    problem: 'No easy way for staff to submit requests',
    technology: 'Power Apps + Dataverse',
    solution: 'Purpose-built request & tracking app',
    benefit: 'A single, consistent front door for the whole team',
    icon: ClipboardList,
  },
]
