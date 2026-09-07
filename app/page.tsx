import { AboutSection } from '@/components/about-section'
import { AreasSection } from '@/components/areas-section'
import { ClassesBoards } from '@/components/classes-boards'
import { CtaBand } from '@/components/cta-band'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { LocationMap } from '@/components/location-map'
import { ServicesSection } from '@/components/services-section'
import { SubjectsSection } from '@/components/subjects-section'
import { WhyChooseUs } from '@/components/why-choose-us'

export default function Page() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <SubjectsSection />
      <ClassesBoards />
      <AreasSection />
      <LocationMap />
      <HowItWorks />
      <CtaBand />
    </>
  )
}
