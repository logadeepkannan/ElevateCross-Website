import type { LucideIcon } from 'lucide-react'
import { Code, LayoutGrid, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

interface Track {
  icon: LucideIcon
  accent: 'purple' | 'teal'
  trackNumber: string
  title: string
  description: string
  highlights: string[]
  perks: string[]
  to: string
  ctaLabel: string
}

const tracks: Track[] = [
  {
    icon: Code,
    accent: 'purple',
    trackNumber: 'Track 01',
    title: 'Fullstack Web Application Development',
    description:
      'Custom web applications, APIs, and platforms built with modern frameworks — from your first user flow to a production-grade, scalable product.',
    highlights: ['React & Next.js', 'Node.js & APIs', 'Cloud & DevOps', 'Ongoing support'],
    perks: [
      'Custom user interfaces tailored to your brand identity',
      'High-performance REST & GraphQL API integrations',
      'Enterprise-grade security, OAuth SSO, and role management',
    ],
    to: '/web-development',
    ctaLabel: 'Explore Web Development',
  },
  {
    icon: LayoutGrid,
    accent: 'teal',
    trackNumber: 'Track 02',
    title: 'Power Platform Development',
    description:
      'Business applications, automated workflows, and AI-powered agents on Microsoft Power Apps, Power Automate, SharePoint, and Copilot Studio.',
    highlights: ['Power Apps & Automate', 'SharePoint & M365', 'Copilot Studio', 'API integration'],
    perks: [
      'Rapid deployment leveraging your existing M365 licensing',
      'Automated multi-stage approval processes & document AI',
      'Custom Copilots & AI agents for internal team productivity',
    ],
    to: '/power-platform-development',
    ctaLabel: 'Explore Power Platform',
  },
]

const accentStyles: Record<
  Track['accent'],
  { border: string; iconBg: string; iconText: string; cta: string; badge: string; glow: string; check: string }
> = {
  purple: {
    border: 'border-t-brand-purple-500',
    iconBg: 'bg-brand-purple-500/10 ring-1 ring-inset ring-brand-purple-500/20',
    iconText: 'text-brand-purple-600 dark:text-brand-purple-400',
    cta: 'bg-brand-purple-500/10 text-brand-purple-600 hover:bg-brand-purple-500/20 dark:text-brand-purple-400',
    badge: 'bg-brand-purple-500/10 text-brand-purple-600 ring-1 ring-inset ring-brand-purple-500/20 dark:text-brand-purple-400',
    glow: 'bg-brand-purple-500/10 group-hover:bg-brand-purple-500/20',
    check: 'text-brand-purple-600 dark:text-brand-purple-400',
  },
  teal: {
    border: 'border-t-brand-teal-500',
    iconBg: 'bg-brand-teal-500/10 ring-1 ring-inset ring-brand-teal-500/20',
    iconText: 'text-brand-teal-600 dark:text-brand-teal-400',
    cta: 'bg-brand-teal-500/10 text-brand-teal-600 hover:bg-brand-teal-500/20 dark:text-brand-teal-400',
    badge: 'bg-brand-teal-500/10 text-brand-teal-600 ring-1 ring-inset ring-brand-teal-500/20 dark:text-brand-teal-400',
    glow: 'bg-brand-teal-500/10 group-hover:bg-brand-teal-500/20',
    check: 'text-brand-teal-600 dark:text-brand-teal-400',
  },
}

export function TrackSelector() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple-600 dark:text-brand-purple-400">
            Choose Your Track
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {tracks.map((track, index) => {
            const accent = accentStyles[track.accent]
            return (
              <Reveal key={track.title} delay={index * 0.1}>
                <Link
                  to={track.to}
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-subtle border-t-2 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple-500/5 sm:p-10',
                    accent.border,
                  )}
                >
                  <div
                    className={cn(
                      'pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full blur-3xl transition-all duration-300',
                      accent.glow,
                    )}
                    aria-hidden="true"
                  />

                  <div className="relative flex items-center justify-between">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl',
                        accent.iconBg,
                        accent.iconText,
                      )}
                    >
                      <track.icon className="h-6 w-6" />
                    </div>
                    <span className={cn('rounded-full px-3 py-1 text-xs font-bold', accent.badge)}>
                      {track.trackNumber}
                    </span>
                  </div>

                  <h2 className="relative mt-6 text-2xl font-bold tracking-tight text-primary">{track.title}</h2>
                  <p className="relative mt-3 text-base leading-relaxed text-secondary">{track.description}</p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {track.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-subtle px-3 py-1 text-xs font-medium text-secondary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <ul className="relative mt-6 space-y-3 text-sm text-secondary">
                    {track.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <Check className={cn('mt-0.5 h-4 w-4 shrink-0', accent.check)} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className={cn(
                      'relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all',
                      accent.cta,
                    )}
                  >
                    {track.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
