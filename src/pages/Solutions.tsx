import { ArrowRight } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { solutions } from '@/data/solutions'

export default function Solutions() {
  useSEO({
    title: 'Solutions',
    description:
      'Packaged Power Platform and AI solutions: business applications, workflow automation, Copilot Studio agents, knowledge portals, integrations, and training.',
  })

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Outcome-focused solutions, not just tools"
        description="Each solution combines the right mix of Power Platform and AI technology around a specific business outcome — built to fit how your organization actually works."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={(index % 2) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-7 shadow-sm transition-shadow hover:shadow-lg sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-md shadow-brand-purple-500/25">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-primary">{solution.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {solution.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Typical Outcomes
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {solution.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-secondary">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-purple-500" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-subtle pt-5">
                    {solution.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface-alt px-2.5 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col items-center rounded-3xl border border-subtle bg-surface-alt px-8 py-14 text-center">
            <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl">
              Have a process in mind that doesn't fit neatly into one box?
            </h2>
            <p className="mt-3 max-w-md text-sm text-secondary sm:text-base">
              Most real projects blend a few of these solutions together. Let's talk through yours.
            </p>
            <Button to="/contact" size="lg" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              Start a Conversation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
