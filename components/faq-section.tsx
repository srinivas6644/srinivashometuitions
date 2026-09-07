'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'What happens after a parent enquires?',
    a: 'We first learn about the student’s class, subjects, goals and preferred routine. We then discuss a suitable tutor and explain the next steps before lessons are arranged.',
  },
  {
    q: 'Can the tutor teach at our home in Pocharam?',
    a: 'Home sessions can be arranged based on tutor availability and the family’s locality. Share your area with us so we can confirm the practical options.',
  },
  {
    q: 'How do you decide which tutor is a good fit?',
    a: 'We consider the subject requirement, class level, learning pace, preferred language and schedule. This helps us suggest someone who can work comfortably with the student.',
  },
  {
    q: 'Which subjects can students study?',
    a: 'Support is available for school subjects, languages, intermediate streams and selected degree subjects. Tell us what the student is finding difficult and we can guide you.',
  },
  {
    q: 'How are class days and timings arranged?',
    a: 'Parents and tutors agree on a practical weekly routine around school and other commitments. The number of sessions can be discussed according to the learner’s needs.',
  },
  {
    q: 'How will we know how the student is progressing?',
    a: 'Parents can speak with the tutor about covered topics, practice completed and areas needing attention. Regular feedback keeps the study plan useful at home and in school.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before booking your first class."
        />

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.q} delay={(i % 3) * 60}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
