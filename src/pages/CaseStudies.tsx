import { Info } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudies() {
  useSEO({
    title: 'Case Studies',
    description:
      'Concept projects demonstrating practical Power Platform and AI solution patterns: room booking, expense management, document approval, and more.',
  })

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Concept projects that show what's possible"
        description="These are self-directed concept builds designed to demonstrate solution patterns and technical approach — not commissioned client engagements."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="mb-12 flex items-start gap-3 rounded-2xl border border-subtle bg-surface-alt px-5 py-4 text-sm text-secondary">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple-500" />
            <p>
              Every project below is labeled <strong className="text-primary">Concept Project</strong> —
              a demonstration build created to illustrate a solution approach. We do not publish
              client names, testimonials, or performance figures for confidential engagements.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyDetailCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

function CaseStudyDetailCard({
  caseStudy,
  index,
}: {
  caseStudy: (typeof caseStudies)[number]
  index: number
}) {
  return (
    <div className="flex flex-col">
      <CaseStudyCard caseStudy={caseStudy} index={index} />
      <Reveal delay={0.05} className="mt-3 rounded-2xl border border-subtle bg-surface-alt p-5 text-sm text-secondary">
        <p>
          <span className="font-semibold text-primary">Problem: </span>
          {caseStudy.problem}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-primary">Approach: </span>
          {caseStudy.solution}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-primary">Outcome: </span>
          {caseStudy.outcome}
        </p>
      </Reveal>
    </div>
  )
}
