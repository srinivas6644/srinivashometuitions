import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Kavitha Rao',
    role: 'Parent, Class 5 · CBSE',
    initials: 'KR',
    text: 'The tutor takes time to explain each step and never rushes my daughter. Her homework routine has become much more settled.',
  },
  {
    name: 'Naveen Kumar',
    role: 'Parent, Class 8 · State Board',
    initials: 'NK',
    text: 'We wanted support close to our home in Pocharam. The communication was clear from the beginning, and the classes fit our evenings well.',
  },
  {
    name: 'Farah Begum',
    role: 'Parent, Intermediate · MPC',
    initials: 'FB',
    text: 'The physics sessions have helped my son ask better questions in class. We appreciate the patient explanations and regular practice.',
  },
  {
    name: 'Sanjay Reddy',
    role: 'Parent, Class 2 · ICSE',
    initials: 'SR',
    text: 'Our son enjoys the reading activities and is more willing to sit with his books now. The tutor has a calm, friendly approach.',
  },
  {
    name: 'Meena Thomas',
    role: 'Parent, Class 10 · CBSE',
    initials: 'MT',
    text: 'The revision plan made the syllabus feel manageable. We could see which chapters needed attention without putting extra pressure on her.',
  },
  {
    name: 'Harish Varma',
    role: 'Student, B.Com',
    initials: 'HV',
    text: 'I needed help with a few accounting topics and received explanations that made the calculations easier to follow. The sessions were focused and practical.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by parents across Hyderabad"
          description="Don't just take our word for it — hear what families have to say about their experience."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <Quote className="size-8 text-accent" />
                <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
