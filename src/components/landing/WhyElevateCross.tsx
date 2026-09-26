import { ChevronRight, CircleCheck, LayoutGrid, MessageSquare, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

const reasons = [
  {
    title: 'End-to-end delivery',
    description: 'From the first conversation to post-launch support, one team owns the outcome.',
    icon: CircleCheck,
    footer: 'Full lifecycle',
    accent: 'purple',
  },
  {
    title: 'Two specialized tracks',
    description: 'Dedicated expertise in fullstack web development and Microsoft Power Platform — not a generalist grab-bag.',
    icon: LayoutGrid,
    footer: 'Targeted expertise',
    accent: 'teal',
  },
  {
    title: 'Clear, honest process',
    description: 'You always know what is being built, why, and what happens next.',
    icon: MessageSquare,
    footer: 'Direct access',
    accent: 'purple',
  },
  {
    title: 'Built to scale',
    description: 'Solutions designed to grow with your business, not just launch and be forgotten.',
    icon: TrendingUp,
    footer: 'Future proof',
    accent: 'teal',
  },
] as const

const accentStyles = {
  purple: {
    badge: 'bg-brand-purple-500/10 text-brand-purple-600 ring-brand-purple-500/20 dark:text-brand-purple-400',
    card: 'hover:border-brand-purple-500/40 hover:shadow-brand-purple-500/10',
    footer: 'text-brand-purple-600 dark:text-brand-purple-400',
  },
  teal: {
    badge: 'bg-brand-teal-500/10 text-brand-teal-600 ring-brand-teal-500/20 dark:text-brand-teal-400',
    card: 'hover:border-brand-teal-500/40 hover:shadow-brand-teal-500/10',
    footer: 'text-brand-teal-600 dark:text-brand-teal-400',
  },
} as const

export function WhyElevateCross() {
  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <SectionHeader
          eyebrow="Why ElevateCross"
          title={
            <>
              One studio, built the{' '}
              <span className="gradient-brand-text">
                right
                <br />
                way
              </span>
            </>
          }
          description="We combine deep Microsoft platform expertise with modern full-stack web engineering."
          className="max-w-3xl"
          titleClassName="text-4xl sm:text-5xl lg:text-6xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const styles = accentStyles[reason.accent]
            return (
              <Reveal
                key={reason.title}
                delay={index * 0.08}
                className={`flex flex-col justify-between rounded-2xl border border-subtle bg-surface p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.card}`}
              >
                <div>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ${styles.badge}`}>
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-primary">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{reason.description}</p>
                </div>
                <div className={`mt-6 flex items-center justify-between border-t border-subtle pt-4 text-xs font-semibold ${styles.footer}`}>
                  <span>{reason.footer}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
