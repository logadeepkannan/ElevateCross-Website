import { Code, Server, Cloud, Database, ShoppingCart, Plug, ShieldCheck, Wrench } from 'lucide-react'
import type { Service } from '@/types'

export const webServices: Service[] = [
  {
    slug: 'frontend-development',
    name: 'Frontend Development',
    shortDescription: 'Fast, responsive interfaces built with React, Next.js, and modern component architecture.',
    description:
      'We build accessible, pixel-precise interfaces with React and Next.js, focused on performance, responsiveness, and a component architecture that stays easy to extend.',
    icon: Code,
    capabilities: [
      'React & Next.js applications',
      'Responsive, mobile-first layouts',
      'Reusable component libraries',
      'Accessibility & performance tuning',
    ],
    useCases: ['Marketing sites & web apps', 'Customer dashboards', 'Internal tools'],
  },
  {
    slug: 'backend-apis',
    name: 'Backend & APIs',
    shortDescription: 'Robust REST and GraphQL APIs and backend services built for scale and security.',
    description:
      'We design backend services and APIs with clear boundaries, strong typing, and the observability you need to run them confidently in production.',
    icon: Server,
    capabilities: [
      'REST & GraphQL API design',
      'Authentication & authorization',
      'Background jobs & queues',
      'Logging & monitoring',
    ],
    useCases: ['Customer-facing APIs', 'Internal service layers', 'Mobile app backends'],
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud & DevOps',
    shortDescription: 'CI/CD pipelines, containerization, and cloud infrastructure on AWS and Azure.',
    description:
      'We set up infrastructure and deployment pipelines so shipping changes is fast, repeatable, and safe — from a single container to a multi-service cloud architecture.',
    icon: Cloud,
    capabilities: [
      'CI/CD pipeline setup',
      'Containerization with Docker',
      'Cloud infrastructure on AWS & Azure',
      'Monitoring & alerting',
    ],
    useCases: ['Automated deployments', 'Scalable cloud hosting', 'Infrastructure modernization'],
  },
  {
    slug: 'database-design',
    name: 'Database Design',
    shortDescription: 'Efficient relational and NoSQL data models built for performance.',
    description:
      'We design schemas and data models that stay fast and consistent as your data grows, choosing the right database for the job and tuning it for real query patterns.',
    icon: Database,
    capabilities: [
      'Relational & NoSQL schema design',
      'Query & index optimization',
      'Data migrations',
      'Backup & recovery planning',
    ],
    useCases: ['Multi-tenant SaaS data models', 'Reporting & analytics stores', 'Legacy data migrations'],
  },
  {
    slug: 'ecommerce-solutions',
    name: 'E-commerce Solutions',
    shortDescription: 'Custom storefronts and checkout experiences that convert.',
    description:
      'We build custom storefronts, product catalogs, and checkout flows integrated with the payment and inventory systems your business already runs on.',
    icon: ShoppingCart,
    capabilities: [
      'Custom storefront design & build',
      'Payment gateway integration',
      'Inventory & order management',
      'Performance-optimized checkout',
    ],
    useCases: ['Direct-to-consumer stores', 'B2B ordering portals', 'Subscription commerce'],
  },
  {
    slug: 'third-party-integrations',
    name: 'Third-Party Integrations',
    shortDescription: 'Connecting your app to payment gateways, CRMs, and external APIs.',
    description:
      'We integrate the third-party services your product depends on — payments, CRM, email, analytics — with reliable error handling and clear data contracts.',
    icon: Plug,
    capabilities: [
      'Payment & billing integrations',
      'CRM & marketing tool integrations',
      'Custom webhook handling',
      'Third-party API wrappers',
    ],
    useCases: ['CRM & billing connections', 'Marketing automation hooks', 'Custom middleware'],
  },
  {
    slug: 'performance-security',
    name: 'Performance & Security',
    shortDescription: 'Optimization, audits, and hardening for production-grade apps.',
    description:
      'We audit and harden existing applications — improving load times, fixing security gaps, and putting monitoring in place so issues surface before your users notice.',
    icon: ShieldCheck,
    capabilities: [
      'Performance audits & optimization',
      'Security reviews & hardening',
      'Dependency & vulnerability management',
      'Load testing',
    ],
    useCases: ['Pre-launch audits', 'Slow app diagnosis', 'Security compliance prep'],
  },
  {
    slug: 'maintenance-support',
    name: 'Maintenance & Support',
    shortDescription: 'Ongoing updates, monitoring, and support after launch.',
    description:
      'We keep applications healthy after launch with proactive monitoring, dependency updates, bug fixes, and a clear channel for new feature work.',
    icon: Wrench,
    capabilities: [
      'Ongoing bug fixes & updates',
      'Uptime & error monitoring',
      'Dependency & security patching',
      'Incremental feature delivery',
    ],
    useCases: ['Post-launch support plans', 'Legacy app maintenance', 'Long-term product partnerships'],
  },
]
