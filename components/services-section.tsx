import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Baby, BookMarked, FlaskConical, GraduationCap, Languages, Laptop, PencilRuler, Trophy } from 'lucide-react'

const services = [
  {
    icon: Baby,
    title: 'Foundation Learning',
    text: 'Gentle, activity-led support that helps younger learners in Pocharam build daily study habits.',
  },
  {
    icon: BookMarked,
    title: 'School Subject Support',
    text: 'Steady guidance in maths, science and languages for Classes 6 to 10, shaped around school lessons.',
  },
  {
    icon: FlaskConical,
    title: 'Intermediate Guidance',
    text: 'Clear explanations and practice planning for MPC, BiPC and commerce students in Hyderabad.',
  },
  {
    icon: GraduationCap,
    title: 'College Subject Help',
    text: 'Focused assistance with university subjects, assignments and the topics that need another explanation.',
  },
  {
    icon: Trophy,
    title: 'Revision Planning',
    text: 'Topic checklists, practice papers and calm preparation routines for school and board examinations.',
  },
  {
    icon: Languages,
    title: 'Language Practice',
    text: 'Practical support for reading, writing, grammar and confident communication in English, Telugu or Hindi.',
  },
  {
    icon: Laptop,
    title: 'Live Online Classes',
    text: 'Interactive one-to-one lessons for families who prefer a dependable online learning arrangement.',
  },
  {
    icon: PencilRuler,
    title: 'Homework & Doubt Help',
    text: 'Patient walkthroughs that help students finish schoolwork and understand where they got stuck.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Tutoring for every stage of learning"
          description="From tiny tots to degree students, we offer a complete range of home tuition services tailored to each level."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 80}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/25 text-primary transition-transform group-hover:scale-110">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
