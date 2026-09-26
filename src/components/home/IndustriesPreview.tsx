import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { industries } from '@/data/industries'

export function IndustriesPreview() {
  return (
    <section className="bg-surface-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Who We Work With"
          title="Solutions built around your industry's realities"
          description="Every industry has its own workflows and constraints. Our solutions are shaped around how your teams actually operate."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={(index % 7) * 0.05}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-subtle bg-surface px-3 py-6 text-center transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald-500/10 text-brand-emerald-500">
                  <industry.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-primary">{industry.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/industries" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            Explore industries
          </Button>
        </div>
      </Container>
    </section>
  )
}
