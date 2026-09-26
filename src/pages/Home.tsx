import { useSEO } from '@/hooks/useSEO'
import { Hero } from '@/components/landing/Hero'
import { CredibilityStrip } from '@/components/landing/CredibilityStrip'
import { HeroShowcase } from '@/components/landing/HeroShowcase'
import { WhyElevateCross } from '@/components/landing/WhyElevateCross'
import { TrackSelector } from '@/components/landing/TrackSelector'
import { TrackMatcher } from '@/components/landing/TrackMatcher'
import { CtaBanner } from '@/components/home/CtaBanner'
import { TrustStrip } from '@/components/home/TrustStrip'
import { technologies } from '@/data/technologies'
import { webTechnologies } from '@/data/webTechnologies'

const combinedTechnologies = [...webTechnologies, ...technologies]

export default function Home() {
  useSEO({
    title: 'Web Application & Power Platform Development',
    description:
      'ElevateCross builds custom fullstack web applications and Microsoft Power Platform & AI solutions. Explore both service tracks to find the right fit for your project.',
  })

  return (
    <>
      <Hero />
      <CredibilityStrip />
      <HeroShowcase />
      <TrustStrip items={combinedTechnologies} label="Technologies & platforms we work across" />
      <WhyElevateCross />
      <TrackSelector />
      <TrackMatcher />
      <CtaBanner
        title="Not sure which fits your project?"
        description="Tell us what you're trying to build — we'll help you figure out the right approach."
        ctaLabel="Talk to Us"
      />
    </>
  )
}
