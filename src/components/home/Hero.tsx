import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { flowStages as defaultFlowStages } from '@/data/technologies'
import type { LucideIcon } from 'lucide-react'

interface HeroCta {
  label: string
  to: string
}

interface FlowStage {
  label: string
  icon: LucideIcon
}

interface HeroProps {
  badgeText?: string
  heading?: ReactNode
  description?: ReactNode
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
  flowStages?: FlowStage[]
  flowCaption?: string
}

export function Hero({
  badgeText = 'Microsoft Power Platform & AI Studio',
  heading = (
    <>
      Transforming Business Processes with{' '}
      <span className="gradient-brand-text">Microsoft Power Platform & AI</span>
    </>
  ),
  description = (
    <>
      We design and build business applications, automated workflows, and AI-powered agents on
      Power Apps, Power Automate, SharePoint, and Copilot Studio — turning manual processes into
      practical, connected digital solutions.
    </>
  ),
  primaryCta = { label: 'Start a Project', to: '/contact' },
  secondaryCta = { label: 'Explore Solutions', to: '/solutions' },
  flowStages = defaultFlowStages,
  flowCaption = 'A connected flow from user-facing apps to intelligent, automated action.',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="absolute inset-0 -z-10 grid-fade" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-10%] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-purple-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10%] top-[20%] -z-10 h-72 w-72 rounded-full bg-brand-teal-500/20 blur-[100px]"
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6 inline-block"
          >
            <div
              className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-brand-purple-500/40 to-brand-teal-500/40 blur-lg"
              aria-hidden="true"
            />
            <div className="rounded-full bg-gradient-to-r from-brand-purple-500 to-brand-teal-500 p-px">
              <span className="flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-medium text-secondary">
                <Sparkles className="h-3.5 w-3.5 text-brand-purple-500" />
                {badgeText}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-secondary sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button to={primaryCta.to} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} size="lg" variant="secondary">
              {secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 sm:mt-20"
        >
          <TechFlow stages={flowStages} caption={flowCaption} />
        </motion.div>
      </Container>
    </section>
  )
}

function TechFlow({ stages, caption }: { stages: FlowStage[]; caption: string }) {
  return (
    <div className="relative mx-auto max-w-4xl rounded-2xl border border-subtle bg-surface/60 glass-panel p-6 shadow-xl shadow-brand-purple-500/5 sm:p-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-lg shadow-brand-purple-500/25"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.35,
                }}
              >
                <stage.icon className="h-6 w-6" />
              </motion.div>
              <span className="text-xs font-medium text-secondary sm:text-sm">{stage.label}</span>
            </div>
            {index < stages.length - 1 ? (
              <div className="hidden h-px w-8 flex-1 overflow-hidden bg-strong sm:block lg:w-12">
                <motion.div
                  className="h-full w-1/3 gradient-brand"
                  animate={{ x: ['-100%', '300%'] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.3,
                  }}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">{caption}</p>
    </div>
  )
}
