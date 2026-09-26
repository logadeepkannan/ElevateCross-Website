import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Users, Globe, Zap, Sliders, Sparkles, ArrowRight, RotateCcw } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type Audience = 'internal' | 'external'
type Priority = 'speed' | 'custom'

interface Recommendation {
  title: string
  description: string
}

function getRecommendation(audience: Audience, priority: Priority): Recommendation {
  if (audience === 'internal' && priority === 'speed') {
    return {
      title: 'Recommended: Power Platform Track',
      description:
        'Build internal custom apps, document automation flows, and Copilots inside your existing Microsoft 365 environment in 2 to 4 weeks.',
    }
  }
  if (audience === 'external' || priority === 'custom') {
    return {
      title: 'Recommended: Full-Stack Web Development Track',
      description:
        'Ideal for customer-facing SaaS products, high-concurrency web applications, and tailor-made user experiences built with modern frameworks and cloud APIs.',
    }
  }
  return {
    title: 'Recommended: Hybrid Power + Web Track',
    description:
      'Combine Power Pages or Dataverse for back-office operations with a custom web client for external customers.',
  }
}

interface OptionCardProps {
  label: string
  description: string
  icon: LucideIcon
  onClick: () => void
}

function OptionCard({ label, description, icon: Icon, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className="group rounded-xl border border-subtle bg-surface p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand-purple-500/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-primary group-hover:text-brand-purple-600 dark:group-hover:text-brand-purple-400">
          {label}
        </span>
        <Icon className="h-4 w-4 shrink-0 text-muted" />
      </div>
      <p className="mt-1 text-xs text-secondary">{description}</p>
    </button>
  )
}

export function TrackMatcher() {
  const [step, setStep] = useState<1 | 2 | 'result'>(1)
  const [audience, setAudience] = useState<Audience | null>(null)
  const [priority, setPriority] = useState<Priority | null>(null)

  function handleAudience(value: Audience) {
    setAudience(value)
    setStep(2)
  }

  function handlePriority(value: Priority) {
    setPriority(value)
    setStep('result')
  }

  function reset() {
    setAudience(null)
    setPriority(null)
    setStep(1)
  }

  const recommendation = audience && priority ? getRecommendation(audience, priority) : null

  return (
    <section className="pb-20 sm:pb-28">
      <Container className="max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-brand-purple-500/30 bg-surface p-6 shadow-2xl sm:p-10">
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-purple-500/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-teal-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="mb-4 flex justify-center">
              <Badge variant="brand">Interactive Recommendation Tool</Badge>
            </div>
            <SectionHeader
              title="Not sure which track fits your project?"
              description="Answer 2 simple questions to get an instant tailored recommendation."
              titleClassName="text-3xl sm:text-4xl lg:text-5xl"
            />

            <div className="mt-8 rounded-2xl border border-subtle bg-surface-alt p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-purple-600 dark:text-brand-purple-400">
                      Step 1 of 2: Who is the primary audience?
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <OptionCard
                        label="Internal Company Employees"
                        description="Workflows, approvals, internal dashboards, document handling."
                        icon={Users}
                        onClick={() => handleAudience('internal')}
                      />
                      <OptionCard
                        label="External Customers / Public Users"
                        description="SaaS product, consumer web portal, public web app."
                        icon={Globe}
                        onClick={() => handleAudience('external')}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal-600 dark:text-brand-teal-400">
                      Step 2 of 2: What is your primary priority?
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <OptionCard
                        label="Speed to Market & M365 Integration"
                        description="Rapid 2-4 week build leveraging the Microsoft stack."
                        icon={Zap}
                        onClick={() => handlePriority('speed')}
                      />
                      <OptionCard
                        label="100% Custom UX & High Scalability"
                        description="Custom code, microservices, complex custom backend."
                        icon={Sliders}
                        onClick={() => handlePriority('custom')}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 'result' && recommendation && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 py-2 text-center"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple-500/10 text-brand-purple-600 ring-1 ring-inset ring-brand-purple-500/30 dark:text-brand-purple-400">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{recommendation.title}</h3>
                    <p className="mx-auto max-w-xl text-sm text-secondary">{recommendation.description}</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <Button to="/contact" icon={<ArrowRight className="h-4 w-4" />}>
                        Get a Custom Estimate
                      </Button>
                      <button
                        onClick={reset}
                        className={cn(
                          'inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-secondary ring-1 ring-inset ring-strong transition-colors hover:text-primary',
                        )}
                      >
                        <RotateCcw className="h-4 w-4" />
                        Start Over
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
