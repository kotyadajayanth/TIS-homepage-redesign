import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { classes, contact, states } from '../../data/siteData'

const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-accent dark:border-slate-700 dark:bg-slate-800 dark:text-white'

export default function Enquiry() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="enquire" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Contact Us." title="Enquire Now!" text="Our admissions team will get back to you shortly." />
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="mt-1 shrink-0 text-amber-600 dark:text-accent" size={20} />
                <span>
                  Admission Helpline No. <a href={`tel:${contact.helpline}`} className="font-semibold">{contact.helplineLabel}</a>
                  <br />
                  Landline No. {contact.landlines.join(', ')}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 shrink-0 text-amber-600 dark:text-accent" size={20} />
                <a href={`mailto:${contact.email}`} className="font-semibold">{contact.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-amber-600 dark:text-accent" size={20} />
                <a href={contact.mapUrl}>{contact.address}</a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {sent ? (
            <p role="status" className="rounded-2xl bg-brand p-8 text-lg font-semibold text-white">
              Thank you! Our admissions team will contact you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8 dark:border-slate-800">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Parent name</span>
                <input name="name" type="text" required autoComplete="name" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Phone number</span>
                <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-sm font-medium">Select Class</span>
                  <select name="class" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>Select Class</option>
                    {classes.map((name) => <option key={name}>{name}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium">Select State</span>
                  <select name="state" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>Select State</option>
                    {states.map((name) => <option key={name}>{name}</option>)}
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="min-h-12 w-full rounded-full bg-accent px-6 py-3 font-semibold text-brand transition-colors hover:bg-yellow-400"
              >
                Enquire Now
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
