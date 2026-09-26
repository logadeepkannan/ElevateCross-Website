import { useSEO } from '@/hooks/useSEO'
import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { HowWeWork } from '@/components/home/HowWeWork'
import { WebDevHighlights } from '@/components/webdev/WebDevHighlights'
import { CtaBanner } from '@/components/home/CtaBanner'
import { webServices } from '@/data/webServices'
import { webTechnologies, webFlowStages } from '@/data/webTechnologies'
import { webProcessSteps } from '@/data/webProcess'

export default function WebDevelopment() {
  useSEO({
    title: 'Fullstack Web Application Development',
    description:
      'ElevateCross designs and builds custom web applications, APIs, and cloud infrastructure with React, Next.js, and Node.js — from first release to long-term scale.',
  })

  return (
    <>
      <Hero
        badgeText="Fullstack Web Application Development"
        heading={
          <>
            Custom Web Applications Built for{' '}
            <span className="gradient-brand-text">Your Growth</span>
          </>
        }
        description="We design and build fullstack web applications, APIs, and cloud infrastructure — turning your product idea into a fast, secure, and scalable application."
        primaryCta={{ label: 'Start a Project', to: '/contact' }}
        secondaryCta={{ label: 'Explore Power Platform', to: '/power-platform-development' }}
        flowStages={webFlowStages}
        flowCaption="A connected stack from user interface to cloud infrastructure."
      />
      <TrustStrip items={webTechnologies} label="Built with a modern web stack" />
      <ServicesOverview
        eyebrow="What We Build"
        title="End-to-end web application services"
        description="From the first wireframe to a deployed, monitored application, we cover the full stack your product needs."
        services={webServices}
        viewAllTo="/contact"
        viewAllLabel="Discuss your project"
      />
      <HowWeWork
        eyebrow="How We Work"
        title="A clear process from idea to launch"
        description="No black boxes. Every project moves through the same five stages so you always know what's happening and why."
        steps={webProcessSteps}
      />
      <WebDevHighlights />
      <CtaBanner
        title="Ready to build your web application?"
        description="Tell us about the product you're building — we'll help you scope a practical first step."
        ctaLabel="Start a Project"
        ctaTo="/contact"
      />
    </>
  )
}
