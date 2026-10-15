import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Srinivas Home Tuitions',
  description:
    'Contact Srinivas Home Tuitions in Hyderabad, Hyderabad. Call 8897104332 or message us on WhatsApp to book a free demo class today.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with us"
        description="Reach out to book a free demo class or ask any question — we usually respond within a few hours."
      />
      <ContactSection />
    </>
  )
}
