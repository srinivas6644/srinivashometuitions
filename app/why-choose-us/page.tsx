import { AreasSection } from '@/components/areas-section'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { WhyChooseUs } from '@/components/why-choose-us'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Us | Srinivas Home Tuitions',
  description:
    'Verified tutors, flexible timings, proven results and affordable fees — discover why families in Hyderabad choose Srinivas Home Tuitions for home tuition.',
}

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Reasons parents trust Srinivas Home Tuitions"
        description="We go beyond marks — building confidence, concept clarity and consistent progress with tutors you can rely on."
      />
      <WhyChooseUs />
      <AreasSection />
      <CtaBand />
    </>
  )
}
