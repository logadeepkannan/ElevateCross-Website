import { Zap, TrendingUp, ShieldCheck, MessageSquare } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

const highlights = [
  {
    title: 'Performance-first',
    description: 'Fast load times and smooth interactions, tuned from day one, not bolted on later.',
    icon: Zap,
  },
  {
    title: 'Scalable architecture',
    description: 'Built to handle growth in users, data, and features without a rewrite.',
    icon: TrendingUp,
  },
  {
    title: 'Secure by design',
    description: 'Authentication, data handling, and infrastructure built on security best practices.',
    icon: ShieldCheck,
  },
  {
    title: 'Clear communication',
    description: 'Regular updates and a straightforward process — no black boxes.',
    icon: MessageSquare,
  },
]

export function WebDevHighlights() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why ElevateCross"
          title="Built the right way, from the start"
          description="Every web application we ship is built to perform, scale, and stay secure long after launch."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="rounded-2xl border border-subtle bg-surface p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white shadow-md shadow-brand-purple-500/25">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
