import { ArrowRight } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { companyValues } from '@/data/values'
import { siteConfig } from '@/data/siteConfig'

export default function About() {
  useSEO({
    title: 'About',
    description:
      'ElevateCross is a modern Microsoft Power Platform and AI automation studio focused on innovation, simplicity, reliability, learning, and business impact.',
  })

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A modern Microsoft & AI studio, built around real business problems"
        description={siteConfig.description}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl">
                We build practical solutions, not just demos
              </h2>
              <p className="mt-4 text-balance text-base leading-relaxed text-secondary sm:text-lg">
                Our focus is Microsoft Power Platform, SharePoint, Microsoft 365, and Copilot
                Studio — combined with AI automation to solve the everyday process problems that
                slow teams down. We approach every engagement as a partnership: understanding how
                your team works today before proposing how technology should change it.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {companyValues.map((value, index) => (
              <Reveal key={value.title} delay={(index % 5) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 text-left shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple-500/10 text-brand-purple-600 dark:text-brand-purple-400">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col items-center rounded-3xl border border-subtle bg-surface-alt px-8 py-14 text-center">
            <h2 className="text-balance text-2xl font-bold text-primary sm:text-3xl">
              Want to work together?
            </h2>
            <p className="mt-3 max-w-md text-sm text-secondary sm:text-base">
              We're always open to discussing new projects, training engagements, and ideas.
            </p>
            <Button to="/contact" size="lg" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              Get in Touch
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
