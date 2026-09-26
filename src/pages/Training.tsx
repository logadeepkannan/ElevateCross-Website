import { ArrowRight } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { trainingPrograms } from '@/data/training'
import type { TrainingCategory } from '@/types'

const categories: { key: TrainingCategory; label: string; description: string }[] = [
  {
    key: 'Technical',
    label: 'Technical Training',
    description: 'Hands-on skills for building with Power Platform and AI.',
  },
  {
    key: 'Soft Skills',
    label: 'Soft-Skill & Career Training',
    description: 'Communication and career-readiness workshops.',
  },
  {
    key: 'Seminars',
    label: 'College & Corporate Seminars',
    description: 'Introductory sessions for students and organizations.',
  },
]

export default function Training() {
  useSEO({
    title: 'Training',
    description:
      'Technical training, Power Platform and AI/Copilot workshops, soft-skill and career-building workshops, and college and corporate seminars.',
  })

  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Building capable teams, not just delivering projects"
        description="From hands-on technical workshops to career-readiness sessions, our training programs help individuals and organizations get more out of Microsoft technology and AI."
      />

      {categories.map((category) => {
        const programs = trainingPrograms.filter((p) => p.category === category.key)
        return (
          <section key={category.key} className="border-b border-subtle py-16 sm:py-20">
            <Container>
              <SectionHeader
                align="left"
                title={category.label}
                description={category.description}
                className="mx-0"
              />
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {programs.map((program, index) => (
                  <Reveal key={program.slug} delay={(index % 4) * 0.06}>
                    <div className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white shadow-md shadow-brand-purple-500/25">
                        <program.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-primary">{program.title}</h3>
                      <Badge variant="neutral" className="mt-2 w-fit">
                        {program.audience}
                      </Badge>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">
                        {program.description}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {program.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-xs text-secondary">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-purple-500" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        )
      })}

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="flex flex-col items-center rounded-3xl border border-subtle bg-surface-alt px-8 py-14 text-center">
            <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl">
              Looking to bring a workshop to your team or campus?
            </h2>
            <p className="mt-3 max-w-md text-sm text-secondary sm:text-base">
              We tailor sessions to your group's size, experience level, and goals.
            </p>
            <Button to="/contact" size="lg" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              Request a Workshop
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
