import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { contact, footerLinks, socials } from '../../data/siteData'

const socialIcons = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  Instagram,
  YouTube: Youtube,
}

export default function Footer() {
  return (
    <footer className="bg-brand text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-white">Tulas International School</p>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            <a href={contact.mapUrl} className="hover:text-accent">{contact.address}</a>
          </address>
          <p className="mt-3 text-sm">
            Landline: <a href={`tel:${contact.landlines[0]}`} className="hover:text-accent">{contact.landlines[0]}</a>,{' '}
            <a href={`tel:${contact.landlines[1]}`} className="hover:text-accent">{contact.landlines[1]}</a>
          </p>
          <p className="mt-1 text-sm">
            Admission Helpline: <a href={`tel:${contact.helpline}`} className="hover:text-accent">{contact.helpline}</a>
          </p>
          <a href={`mailto:${contact.email}`} className="mt-1 block text-sm hover:text-accent">{contact.email}</a>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-3 md:justify-end">
          {socials.map((social) => {
            const Icon = socialIcons[social.name]
            return (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-brand"
                >
                  <Icon size={18} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">
        Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved
      </p>
    </footer>
  )
}
