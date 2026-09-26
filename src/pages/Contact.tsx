import { Mail, Phone, MapPin } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { siteConfig } from '@/data/siteConfig'

const contactDetails = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`,
  },
  { icon: MapPin, label: 'Location', value: siteConfig.address, href: undefined },
]

export default function Contact() {
  useSEO({
    title: 'Contact',
    description:
      'Start a conversation about your Power Apps, Power Automate, SharePoint, Copilot Studio, AI automation, or training project.',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Tell us about your project, process, or idea. We'll follow up to talk through the right approach."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-primary">Contact details</h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                Prefer to reach out directly? Use any of the details below.
              </p>
              <div className="mt-6 space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple-500/10 text-brand-purple-600 dark:text-brand-purple-400">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-medium text-primary transition-colors hover:text-brand-purple-600 dark:hover:text-brand-purple-400"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-primary">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-inset ring-strong text-secondary transition-colors hover:text-primary hover:bg-surface-alt"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} direction="left" className="lg:col-span-3">
              <div className="rounded-2xl border border-subtle bg-surface p-6 shadow-sm sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
