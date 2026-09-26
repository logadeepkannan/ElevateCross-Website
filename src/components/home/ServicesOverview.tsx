import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { Button } from '@/components/ui/Button'
import { services as defaultServices } from '@/data/services'
import type { Service } from '@/types'

interface ServicesOverviewProps {
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  services?: Service[]
  viewAllTo?: string
  viewAllLabel?: string
}

export function ServicesOverview({
  eyebrow = 'What We Do',
  title = 'End-to-end Power Platform & AI services',
  description = 'From the first workflow diagram to a fully deployed AI agent, we cover the tools that make up a modern Microsoft business application stack.',
  services = defaultServices,
  viewAllTo = '/services',
  viewAllLabel = 'View all services',
}: ServicesOverviewProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} to={viewAllTo} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to={viewAllTo} variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            {viewAllLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}
