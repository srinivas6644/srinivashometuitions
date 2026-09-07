import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { TestimonialsSection } from '@/components/testimonials-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials | Srinivas Home Tuitions',
  description:
    'Read what parents and students in Hyderabad say about Srinivas Home Tuitions — real results, patient tutors and a hassle-free experience.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Loved by parents and students"
        description="Hear from families across Hyderabad who have seen real improvement with our home tutors."
      />
      <TestimonialsSection />
      <CtaBand />
    </>
  )
}
