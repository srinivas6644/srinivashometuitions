import { JoinTutorForm } from '@/components/join-tutor-form'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join as Tutor | Srinivas Home Tuitions',
  description:
    'Become a home tutor with Srinivas Home Tuitions in Hyderabad. Register your details and join our WhatsApp community to get the latest tuition openings.',
}

export default function JoinTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="Join as Tutor"
        title="Become a Srinivas Home Tuitions tutor"
        description="Fill in your details below to register as a tutor. On submit, your information opens in WhatsApp — just press send to complete."
      />
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <JoinTutorForm />
        </div>
      </section>
    </>
  )
}
