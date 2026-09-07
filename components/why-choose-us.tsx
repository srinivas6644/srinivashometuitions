import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CalendarClock, MapPin, ShieldCheck, Sparkles, TrendingUp, Wallet } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Careful Tutor Matching',
    text: 'We listen to the learner’s needs before suggesting a tutor whose subject approach and manner feel suitable.',
  },
  {
    icon: CalendarClock,
    title: 'A Routine That Fits',
    text: 'Families can discuss weekday or weekend slots that work with school, travel and activities.',
  },
  {
    icon: TrendingUp,
    title: 'Progress You Can Discuss',
    text: 'Lessons stay connected to classroom needs, with space to review what is improving and what needs more practice.',
  },
  {
    icon: Wallet,
    title: 'Clear Fee Conversations',
    text: 'You receive straightforward information about the class arrangement before regular tuition begins.',
  },
  {
    icon: MapPin,
    title: 'Convenient Home Sessions',
    text: 'Students learn in a familiar setting around Pocharam and nearby Hyderabad communities.',
  },
  {
    icon: Sparkles,
    title: 'Learning With Context',
    text: 'Tutors adapt examples, pace and practice to the student instead of forcing one method on every learner.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why parents in Hyderabad trust us"
          description="We go beyond tutoring — we build confident, independent learners with a support system parents can rely on."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
