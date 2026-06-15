'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/studio', label: 'Studio' },
  { href: '/voices', label: 'Voice Library' },
  { href: '/voice-cloning', label: 'Voice Cloning' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [light, setLight] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const isLight = document.documentElement.classList.contains('light')
    setLight(isLight)
  }, [])

  function toggleTheme() {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5">
      <div className="glass-strong absolute inset-0 -z-10" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm transition-colors hover:text-violet ${
                pathname === link.href ? 'text-text' : 'text-muted-v'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-v transition-colors hover:text-text"
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link href="/login" className="btn-ghost px-5 py-2.5 text-sm">
            Log In
          </Link>
          <Link href="/signup" className="btn-primary px-5 py-2.5 text-sm">
            Start Free
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-lg border border-white/10 p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong border-t border-white/5 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm text-muted-v transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-v"
              >
                {light ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <Link href="/login" className="btn-ghost flex-1 px-5 py-2.5 text-sm">
                Log In
              </Link>
              <Link href="/signup" className="btn-primary flex-1 px-5 py-2.5 text-sm">
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
