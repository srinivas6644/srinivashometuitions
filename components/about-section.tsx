import { Reveal } from '@/components/reveal'
import { Award, BookOpen, HeartHandshake, Users } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  {
    icon: Users,
    title: 'Attention That Adjusts',
    text: 'Each session makes room for the student’s questions, pace and preferred way of understanding.',
  },
  {
    icon: BookOpen,
    title: 'Useful Study Practice',
    text: 'Tutors connect explanations with examples, written work and the topics students meet at school.',
  },
  {
    icon: Award,
    title: 'Thoughtful Tutor Selection',
    text: 'We look for dependable tutors who can explain patiently and work respectfully with families.',
  },
  {
    icon: HeartHandshake,
    title: 'Parents Stay Involved',
    text: 'Simple conversations about attendance, practice and next steps keep home support aligned.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <Reveal className="relative order-last lg:order-first">
          <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-accent/20" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl">
            <Image
              src="/about-teaching.png"
              alt="Tutor and student celebrating progress during a home tuition session"
              width={680}
              height={560}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              About Srinivas Home Tuitions
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Srinivas Home Tuitions helps families around Pocharam and Hyderabad create a more comfortable study routine at home.
              We connect students with patient tutors who take time to understand the learner before planning each lesson.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From strengthening a school subject to preparing for an important assessment, our sessions are designed to give students practical support without adding pressure. Families can choose an arrangement that suits their home, schedule and learning priorities.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
