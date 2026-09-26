import { ArrowRight, Check } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'

export default function Services() {
  useSEO({
    title: 'Services',
    description:
      'Power Apps, Power Automate, SharePoint, Copilot Studio, AI automation, Power Pages, API integration, and Microsoft 365 services.',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every layer of the Microsoft business application stack"
        description="We design, build, and connect the tools that make up a modern Power Platform and AI solution — from the app your team touches every day to the agent that automates work behind the scenes."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-lg shadow-brand-purple-500/25">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2.5 text-sm text-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple-500" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  direction="left"
                  delay={0.08}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="rounded-2xl border border-subtle bg-surface-alt p-8">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Common Use Cases
                    </p>
                    <div className="mt-4 space-y-3">
                      {service.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="rounded-xl border border-subtle bg-surface px-4 py-3 text-sm font-medium text-primary"
                        >
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal className="mt-24 flex flex-col items-center rounded-3xl border border-subtle bg-surface-alt px-8 py-14 text-center">
            <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl">
              Not sure which service fits your problem?
            </h2>
            <p className="mt-3 max-w-md text-sm text-secondary sm:text-base">
              Tell us what you're trying to solve and we'll help map it to the right technology.
            </p>
            <Button to="/contact" size="lg" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              Start a Project
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
