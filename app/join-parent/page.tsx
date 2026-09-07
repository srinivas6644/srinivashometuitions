import { JoinParentForm } from '@/components/join-parent-form'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join as Parent | Srinivas Home Tuitions',
  description:
    'Looking for a home tutor in Hyderabad? Share your requirements with Srinivas Home Tuitions and we will match your child with the right tutor.',
}

export default function JoinParentPage() {
  return (
    <>
      <PageHero
        eyebrow="Join as Parent"
        title="Find the right tutor for your child"
        description="Tell us your requirements below. On submit, your details open in WhatsApp — just press send and our team will get in touch."
      />
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <JoinParentForm />
        </div>
      </section>
    </>
  )
}
