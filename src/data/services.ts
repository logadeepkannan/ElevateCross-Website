import {
  LayoutGrid,
  Workflow,
  Share2,
  Bot,
  Sparkles,
  Globe,
  Plug,
  Grid3x3,
} from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'power-apps',
    name: 'Power Apps',
    shortDescription: 'Custom business applications built fast, without the overhead of traditional development.',
    description:
      'We design and build canvas and model-driven apps that digitize manual processes, connect to your data, and give teams a purpose-built interface for daily work.',
    icon: LayoutGrid,
    capabilities: [
      'Canvas app design & development',
      'Model-driven apps on Dataverse',
      'Responsive layouts for mobile & tablet',
      'Role-based access and approvals',
    ],
    useCases: ['Inspection & field apps', 'Internal request portals', 'Inventory & asset tracking'],
  },
  {
    slug: 'power-automate',
    name: 'Power Automate',
    shortDescription: 'Automated workflows that remove repetitive work and connect your systems.',
    description:
      'From simple notifications to multi-step approval chains spanning several systems, we design automations that are reliable, observable, and easy to maintain.',
    icon: Workflow,
    capabilities: [
      'Approval & notification flows',
      'Scheduled & triggered automations',
      'Cross-system data synchronization',
      'Error handling & monitoring',
    ],
    useCases: ['Expense approvals', 'Document routing', 'Data sync between systems'],
  },
  {
    slug: 'sharepoint',
    name: 'SharePoint',
    shortDescription: 'Intranets, knowledge portals, and document systems that people actually use.',
    description:
      'We build modern SharePoint sites and document libraries with clean information architecture, metadata-driven organization, and integrations into your wider Microsoft 365 environment.',
    icon: Share2,
    capabilities: [
      'Modern site & intranet design',
      'Document management & metadata',
      'Permissions & governance',
      'Search & knowledge portals',
    ],
    useCases: ['Company intranets', 'Knowledge bases', 'Team document hubs'],
  },
  {
    slug: 'copilot-studio',
    name: 'Copilot Studio',
    shortDescription: 'Conversational AI agents that answer questions and take action on your data.',
    description:
      'We design Copilot Studio agents that connect to SharePoint, Dataverse, and Power Automate so teams and customers can get answers and trigger workflows through natural conversation.',
    icon: Bot,
    capabilities: [
      'Custom AI agent design',
      'Grounding on SharePoint & business data',
      'Action-taking via Power Automate',
      'Multi-channel deployment (Teams, web)',
    ],
    useCases: ['Internal help desk agents', 'Customer-facing FAQ agents', 'AI business assistants'],
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortDescription: 'Practical AI applied to real processes — document understanding, classification, and more.',
    description:
      'We combine AI Builder, Copilot Studio, and Azure services with Power Platform to automate work that used to require manual review, from document processing to intelligent routing.',
    icon: Sparkles,
    capabilities: [
      'AI Builder model integration',
      'Document & form processing',
      'Intelligent classification & routing',
      'AI-assisted decision support',
    ],
    useCases: ['Invoice & form extraction', 'Smart ticket routing', 'Content summarization'],
  },
  {
    slug: 'power-pages',
    name: 'Power Pages',
    shortDescription: 'Secure external-facing websites and portals connected to your business data.',
    description:
      'We build Power Pages portals for partners, customers, and the public — with authentication, forms, and data connected directly to Dataverse and back-office systems.',
    icon: Globe,
    capabilities: [
      'Customer & partner portals',
      'Secure authentication & roles',
      'Dataverse-connected forms',
      'Custom branding & pages',
    ],
    useCases: ['Customer self-service portals', 'Partner application intake', 'Public information sites'],
  },
  {
    slug: 'api-integration',
    name: 'API Integration',
    shortDescription: 'Connecting Power Platform to the other systems your business already runs on.',
    description:
      'We integrate Power Platform and Microsoft 365 with third-party systems using REST APIs, custom connectors, and Azure Functions to keep data flowing accurately across your stack.',
    icon: Plug,
    capabilities: [
      'Custom connector development',
      'REST & webhook integrations',
      'Azure Functions for custom logic',
      'Data mapping & transformation',
    ],
    useCases: ['CRM & ERP connections', 'Third-party data sync', 'Custom middleware'],
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    shortDescription: 'Getting more value out of the Microsoft 365 tools your organization already has.',
    description:
      'We help teams configure, extend, and connect Microsoft 365 — Teams, Outlook, SharePoint, and beyond — into a cohesive digital workplace with Power Platform underneath.',
    icon: Grid3x3,
    capabilities: [
      'Teams app & workflow integration',
      'Microsoft 365 configuration',
      'Governance & adoption support',
      'Cross-app automation',
    ],
    useCases: ['Teams-based workflows', 'Digital workplace setup', 'Collaboration governance'],
  },
]
