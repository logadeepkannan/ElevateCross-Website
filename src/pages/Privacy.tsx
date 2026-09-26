import { useSEO } from '@/hooks/useSEO'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/siteConfig'

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you submit our contact form, we collect the information you provide directly, such as your name, email address, company, project type, and message. We do not collect sensitive personal information through this site.',
  },
  {
    title: 'How We Use Information',
    body: 'Information submitted through our contact form is used solely to respond to your inquiry and discuss potential projects. We do not sell or share your information with third parties for marketing purposes.',
  },
  {
    title: 'Cookies & Local Storage',
    body: 'This site uses local browser storage to remember your light/dark theme preference. This data stays on your device and is not transmitted to us.',
  },
  {
    title: 'Data Retention',
    body: 'We retain contact form submissions only as long as necessary to respond to your inquiry and maintain a record of business communications.',
  },
  {
    title: 'Your Rights',
    body: `You may request access to, correction of, or deletion of any information you've submitted to us by contacting us at ${siteConfig.email}.`,
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this privacy policy from time to time. Changes will be reflected on this page.',
  },
]

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy',
    description: `Privacy policy for ${siteConfig.companyName}.`,
  })

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: January 2026</p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.04}>
                <h2 className="text-lg font-semibold text-primary">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
