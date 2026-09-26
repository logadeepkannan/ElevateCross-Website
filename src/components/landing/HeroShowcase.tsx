import type { LucideIcon } from 'lucide-react'
import { Code2, LayoutGrid } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

type SegmentTone = 'plain' | 'keyword' | 'function' | 'string' | 'comment'

interface CodeSegment {
  text: string
  tone?: SegmentTone
}

interface TrackPreview {
  icon: LucideIcon
  accent: 'purple' | 'teal'
  title: string
  subtitle: string
  tag: string
  lines: CodeSegment[][]
}

const tracks: TrackPreview[] = [
  {
    icon: Code2,
    accent: 'purple',
    title: 'Full-Stack Web App Track',
    subtitle: 'Custom SaaS, APIs & Cloud Systems',
    tag: 'React + Node',
    lines: [
      [
        { text: 'const ', tone: 'keyword' },
        { text: 'app = ' },
        { text: 'createEngine', tone: 'function' },
        { text: '({ track: ' },
        { text: "'FullStack'", tone: 'string' },
        { text: ' });' },
      ],
      [
        { text: 'app.' },
        { text: 'deployUI', tone: 'function' },
        { text: '({ framework: ' },
        { text: "'Next.js 14'", tone: 'string' },
        { text: ', auth: ' },
        { text: "'Enterprise SSO'", tone: 'string' },
        { text: ' });' },
      ],
      [{ text: '// Output: High performance scalable web application', tone: 'comment' }],
    ],
  },
  {
    icon: LayoutGrid,
    accent: 'teal',
    title: 'Power Platform & AI Track',
    subtitle: 'Power Apps, Copilots & Workflows',
    tag: 'Microsoft 365',
    lines: [
      [
        { text: 'Flow: ', tone: 'keyword' },
        { text: 'Power Automate', tone: 'function' },
        { text: ' + ' },
        { text: 'Dataverse Sync', tone: 'function' },
      ],
      [
        { text: 'Agent: ', tone: 'keyword' },
        { text: 'Copilot Studio ' },
        { text: '(AI Builder Enabled)', tone: 'string' },
      ],
      [{ text: '// Output: Rapid automated internal enterprise hub', tone: 'comment' }],
    ],
  },
]

const codeTones = {
  function: 'text-indigo-600 dark:text-indigo-400',
} as const

const accentStyles = {
  purple: {
    iconBg: 'bg-brand-purple-500/10 text-brand-purple-600 ring-1 ring-inset ring-brand-purple-500/20 dark:text-brand-purple-400',
    tag: 'bg-brand-purple-500/10 text-brand-purple-600 dark:text-brand-purple-400',
    keyword: 'text-brand-purple-600 dark:text-brand-purple-400',
    string: 'text-brand-teal-600 dark:text-brand-teal-400',
  },
  teal: {
    iconBg: 'bg-brand-teal-500/10 text-brand-teal-600 ring-1 ring-inset ring-brand-teal-500/20 dark:text-brand-teal-400',
    tag: 'bg-brand-teal-500/10 text-brand-teal-600 dark:text-brand-teal-400',
    keyword: 'text-brand-teal-600 dark:text-brand-teal-400',
    string: 'text-brand-purple-600 dark:text-brand-purple-400',
  },
} as const

export function HeroShowcase() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-subtle bg-surface p-4 shadow-2xl sm:p-6">
          <div className="flex items-center justify-between gap-3 border-b border-subtle pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-slate-400/60" />
              <span className="ml-2 hidden font-mono text-xs text-muted sm:inline">
                elevatecross-studio // architecture-overview
              </span>
            </div>
            <Badge variant="brand">Live Platform Preview</Badge>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
            {tracks.map((track) => {
              const accent = accentStyles[track.accent]
              return (
                <div key={track.title} className="rounded-2xl border border-subtle bg-surface-alt p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', accent.iconBg)}>
                        <track.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-primary">{track.title}</h4>
                        <p className="text-xs text-secondary">{track.subtitle}</p>
                      </div>
                    </div>
                    <span className={cn('shrink-0 rounded-full px-2.5 py-1 text-xs font-medium', accent.tag)}>
                      {track.tag}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 rounded-xl border border-subtle bg-surface p-3 font-mono text-xs">
                    {track.lines.map((segments, lineIndex) => (
                      <p key={lineIndex} className="break-words text-secondary">
                        {segments.map((segment, segmentIndex) => (
                          <span
                            key={segmentIndex}
                            className={cn(
                              segment.tone === 'keyword' && cn('font-semibold', accent.keyword),
                              segment.tone === 'function' && codeTones.function,
                              segment.tone === 'string' && accent.string,
                              segment.tone === 'comment' && 'text-muted',
                            )}
                          >
                            {segment.text}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
