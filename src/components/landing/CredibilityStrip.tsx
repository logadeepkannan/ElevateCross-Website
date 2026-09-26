import { Reveal } from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'

const items = ['2 Delivery Tracks', 'End-to-End Delivery', 'Remote-First, Global Reach', 'Direct Communication']

export function CredibilityStrip() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <Reveal className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          {items.map((item, index) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-sm font-medium text-secondary">{item}</span>
              {index < items.length - 1 ? (
                <span className="h-1 w-1 rounded-full bg-muted" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
