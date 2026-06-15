import Link from 'next/link'
import Logo from './Logo'
import { MessageCircle } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/studio', label: 'TTS Studio' },
      { href: '/voices', label: 'Voice Library' },
      { href: '/voice-cloning', label: 'Voice Cloning' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
      { href: '/help', label: 'Help Center' },
    ],
  },
  {
    title: 'Account',
    links: [
      { href: '/login', label: 'Log In' },
      { href: '/signup', label: 'Create Account' },
      { href: '/dashboard', label: 'Dashboard' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-sm text-muted-v">
              Ultra-realistic AI voices for YouTube, podcasts, audiobooks, and business audio \u2014
              in English and major Indian languages.
            </p>
            <a
              href="https://wa.me/917348598924"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-v transition-colors hover:text-text"
            >
              <MessageCircle size={16} className="text-cyan" />
              WhatsApp Support
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="label-eyebrow">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-v transition-colors hover:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-v sm:flex-row">
          <p>\u00a9 2026 VoiceForge AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/help" className="hover:text-text">Privacy Policy</Link>
            <Link href="/help" className="hover:text-text">Terms of Service</Link>
            <Link href="/contact" className="hover:text-text">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
