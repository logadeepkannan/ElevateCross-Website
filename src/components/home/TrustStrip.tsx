import { Container } from '@/components/ui/Container'
import { technologies as defaultTechnologies } from '@/data/technologies'
import type { TechItem } from '@/types'

interface TrustStripProps {
  items?: TechItem[]
  label?: string
}

export function TrustStrip({
  items: techItems = defaultTechnologies,
  label = 'Built on the Microsoft ecosystem',
}: TrustStripProps) {
  const items = [...techItems, ...techItems]

  return (
    <section className="border-y border-subtle bg-surface-alt py-8">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-alt to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-alt to-transparent sm:w-32" />
        <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
          {items.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-secondary"
            >
              <tech.icon className="h-4 w-4 text-muted" />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
