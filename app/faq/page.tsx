import { CtaBand } from '@/components/cta-band'
import { FaqSection } from '@/components/faq-section'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Srinivas Home Tuitions',
  description:
    'Frequently asked questions about Srinivas Home Tuitions in Hyderabad — classes, boards, demo classes, tutor verification, areas served and fees.',
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about our home tuition services. Still have a question? Just reach out."
      />
      <FaqSection />
      <CtaBand />
    </>
  )
}
