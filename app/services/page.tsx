import { ClassesBoards } from '@/components/classes-boards'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { ServicesSection } from '@/components/services-section'
import { SubjectsSection } from '@/components/subjects-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Srinivas Home Tuitions',
  description:
    'Home tuition services in Hyderabad for all classes from LKG to Degree — primary, high school, intermediate and degree coaching across all subjects and boards.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tuition for every class, subject and board"
        description="From playful primary lessons to focused board exam prep, our tutors cover the full range of subjects and curricula."
      />
      <ServicesSection />
      <SubjectsSection />
      <ClassesBoards />
      <CtaBand />
    </>
  )
}
