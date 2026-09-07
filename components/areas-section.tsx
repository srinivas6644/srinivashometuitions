import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MapPin } from 'lucide-react'

const areas = [
  'Uppal',
  'Medipally',
  'Boduppal',
  'Nacharam',
  'Ghatkesar',
  'Keesara',
  'Narapally',
  'Peerzadiguda',
  'Puppalguda',
  'Kokapet',
  'Nanakramguda',
  'Neknampur',
  'Tapovan Park',
  'Indira Nagar, Nacharam',
  'Telecom Nagar, Nacharam',
  'Shirdi Sai Nagar',
  'Sri Laxmi Nagar Colony',
  'Nemali Nagar, Keesara',
  'P Janardhan Reddy Nagar, Nacharam',
  'Greenland Colony, Madhava Reddy Colony, Nacharam',
]

export function AreasSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Home tutors across East Hyderabad"
          description="We provide doorstep tuition services across selected East Hyderabad localities, including Uppal, Medipally, Nacharam, Ghatkesar, Keesara, Puppalguda and Kokapet."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <Reveal key={area} delay={(i % 4) * 70}>
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-5 py-3.5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span className="font-medium text-foreground">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-muted-foreground">
            Not sure if we cover your area?{' '}
            <a href="#contact" className="font-semibold text-primary hover:underline">
              Get in touch
            </a>{' '}
            — we&apos;re expanding fast.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
