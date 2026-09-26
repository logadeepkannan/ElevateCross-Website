import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Container'
import { siteConfig, footerLinks } from '@/data/siteConfig'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-subtle bg-surface-alt">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-secondary">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-inset ring-strong text-secondary transition-colors hover:text-primary hover:bg-surface"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">Get Started</h3>
            <p className="mt-4 text-sm text-secondary">
              Have a project or workflow you want to automate?
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple-600 transition-colors hover:text-brand-teal-600 dark:text-brand-purple-400 dark:hover:text-brand-teal-400"
            >
              Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-subtle pt-8 text-sm text-muted sm:flex-row">
          <p>
            © {year} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link key={link.path} to={link.path} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
