import { useSEO } from '@/hooks/useSEO'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/siteConfig'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing this website, you agree to these terms of service. If you do not agree, please do not use this site.`,
  },
  {
    title: 'Use of Content',
    body: 'All content on this site, including text, graphics, and branding, is the property of ' +
      siteConfig.companyName +
      ' unless otherwise noted, and may not be reproduced without permission.',
  },
  {
    title: 'No Warranty',
    body: 'This website and its content are provided "as is" without warranties of any kind. Case studies described on this site are labeled concept projects and are illustrative, not commissioned client engagements.',
  },
  {
    title: 'Limitation of Liability',
    body: `${siteConfig.companyName} is not liable for any indirect, incidental, or consequential damages arising from use of this website.`,
  },
  {
    title: 'Third-Party Links',
    body: 'This site may link to third-party websites, including Microsoft product pages. We are not responsible for the content or practices of those external sites.',
  },
  {
    title: 'Changes to These Terms',
    body: 'We may revise these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.',
  },
  {
    title: 'Contact',
    body: `Questions about these terms can be directed to ${siteConfig.email}.`,
  },
]

export default function Terms() {
  useSEO({
    title: 'Terms of Service',
    description: `Terms of service for ${siteConfig.companyName}.`,
  })

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Terms of Service
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
