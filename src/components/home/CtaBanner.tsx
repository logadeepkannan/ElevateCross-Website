import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

interface CtaBannerProps {
  title?: ReactNode
  description?: ReactNode
  ctaLabel?: string
  ctaTo?: string
}

export function CtaBanner({
  title = "Ready to automate the process that's slowing your team down?",
  description = "Tell us about the workflow, app, or AI idea you have in mind — we'll help you scope a practical first step.",
  ctaLabel = 'Start a Project',
  ctaTo = '/contact',
}: CtaBannerProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-16 text-center sm:px-16">
            <div
              className="absolute inset-0 grid-fade opacity-20 mix-blend-overlay"
              aria-hidden="true"
            />
            <h2 className="relative text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
              {description}
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button to={ctaTo} size="lg" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
                {ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
