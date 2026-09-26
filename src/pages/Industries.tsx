import { ArrowRight } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { IndustryCard } from '@/components/cards/IndustryCard'
import { industries } from '@/data/industries'

export default function Industries() {
  useSEO({
    title: 'Industries',
    description:
      'Power Platform and AI solutions shaped around education, professional services, healthcare, manufacturing, technology, corporate operations, and SMBs.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Practical technology for how your industry actually works"
        description="The right solution depends on context. Here's how we typically apply Power Platform and AI across different types of organizations."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col items-center rounded-3xl border border-subtle bg-surface-alt px-8 py-14 text-center">
            <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl">
              Don't see your industry listed?
            </h2>
            <p className="mt-3 max-w-md text-sm text-secondary sm:text-base">
              Power Platform and AI automation apply broadly — tell us about your operations and
              we'll help identify where it fits.
            </p>
            <Button to="/contact" size="lg" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              Talk to Us
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
