import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { Button } from '@/components/ui/Button'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3)

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Concept Projects"
          title="Ideas we've prototyped to show what's possible"
          description="These are concept builds designed to demonstrate practical solution patterns — not commissioned client work or published case studies."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/case-studies" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            View all concept projects
          </Button>
        </div>
      </Container>
    </section>
  )
}
