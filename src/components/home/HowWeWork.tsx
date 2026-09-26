import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { processSteps as defaultProcessSteps } from '@/data/process'
import type { ProcessStep } from '@/types'

interface HowWeWorkProps {
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  steps?: ProcessStep[]
}

export function HowWeWork({
  eyebrow = 'How We Work',
  title = 'A clear process from idea to automated reality',
  description = "No black boxes. Every project moves through the same five stages so you always know what's happening and why.",
  steps: processSteps = defaultProcessSteps,
}: HowWeWorkProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div
            className="absolute top-7 left-0 hidden h-px w-full bg-strong lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-md shadow-brand-purple-500/25">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="mt-4 text-xs font-semibold tracking-wide text-muted">
                STEP {step.step}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
