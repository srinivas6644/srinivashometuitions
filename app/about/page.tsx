import { AboutSection } from '@/components/about-section'
import { CtaBand } from '@/components/cta-band'
import { HowItWorks } from '@/components/how-it-works'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Srinivas Home Tuitions',
  description:
    'Learn about Srinivas Home Tuitions in Hyderabad — our mission to deliver personalised, one-on-one home tuition with verified, experienced tutors for all classes and boards.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Personalised home tuition you can trust"
        description="Srinivas Home Tuitions connects families in Hyderabad and nearby areas with experienced, verified tutors for genuine one-on-one learning at home."
      />
      <AboutSection />
      <HowItWorks />
      <CtaBand />
    </>
  )
}
