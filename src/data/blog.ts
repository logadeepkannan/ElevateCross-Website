import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'power-apps-vs-power-pages',
    title: 'Power Apps vs. Power Pages: Choosing the Right Tool',
    excerpt:
      'A practical breakdown of when to build an internal Power Apps solution versus an external-facing Power Pages portal.',
    category: 'Power Platform',
    readTime: '6 min read',
    publishedDate: '2026-01-12',
    author: 'ElevateCross Team',
  },
  {
    slug: 'sharepoint-information-architecture',
    title: 'Designing SharePoint Information Architecture That Scales',
    excerpt:
      'How thoughtful metadata and navigation planning keeps a growing SharePoint site usable over time.',
    category: 'SharePoint',
    readTime: '7 min read',
    publishedDate: '2025-12-18',
    author: 'ElevateCross Team',
  },
  {
    slug: 'power-automate-error-handling',
    title: 'Error Handling Patterns for Power Automate Flows',
    excerpt: 'Practical patterns for building flows that fail gracefully and stay easy to troubleshoot.',
    category: 'Automation',
    readTime: '5 min read',
    publishedDate: '2025-12-02',
    author: 'ElevateCross Team',
  },
  {
    slug: 'grounding-copilot-studio-agents',
    title: 'Grounding Copilot Studio Agents on Real Business Data',
    excerpt: 'How to connect a Copilot Studio agent to SharePoint and Dataverse for accurate, useful answers.',
    category: 'Copilot Studio',
    readTime: '8 min read',
    publishedDate: '2025-11-20',
    author: 'ElevateCross Team',
  },
  {
    slug: 'ai-builder-document-processing',
    title: 'Using AI Builder for Document Processing',
    excerpt: 'An overview of how AI Builder models can extract structured data from everyday business forms.',
    category: 'AI',
    readTime: '6 min read',
    publishedDate: '2025-11-05',
    author: 'ElevateCross Team',
  },
  {
    slug: 'from-classroom-to-power-platform-career',
    title: 'From Classroom to Career: Getting Started with Power Platform',
    excerpt: 'Guidance for students exploring a career in Microsoft business applications and automation.',
    category: 'Career',
    readTime: '5 min read',
    publishedDate: '2025-10-22',
    author: 'ElevateCross Team',
  },
  {
    slug: 'how-to-approach-automation-projects',
    title: 'How to Approach Your First Automation Project',
    excerpt: 'A framework for identifying, scoping, and delivering a first successful automation win.',
    category: 'Learning',
    readTime: '6 min read',
    publishedDate: '2025-10-08',
    author: 'ElevateCross Team',
  },
]

export const blogCategories = [
  'Power Platform',
  'SharePoint',
  'Automation',
  'AI',
  'Copilot Studio',
  'Career',
  'Learning',
] as const
