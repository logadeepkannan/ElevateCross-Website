import { useSEO } from '@/hooks/useSEO'
import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { HowWeWork } from '@/components/home/HowWeWork'
import { CopilotSection } from '@/components/home/CopilotSection'
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview'
import { IndustriesPreview } from '@/components/home/IndustriesPreview'
import { CtaBanner } from '@/components/home/CtaBanner'

export default function PowerPlatformHome() {
  useSEO({
    title: 'Microsoft Power Platform & AI Solutions',
    description:
      'ElevateCross builds Power Apps, Power Automate, SharePoint, and Copilot Studio solutions that automate real business processes with practical AI.',
  })

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <ProblemSolution />
      <HowWeWork />
      <CopilotSection />
      <CaseStudiesPreview />
      <IndustriesPreview />
      <CtaBanner />
    </>
  )
}
