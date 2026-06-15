'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Mic2,
  Tag,
  ArrowLeft,
} from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/admin', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/plans', label: 'Plans', icon: Tag },
  { href: '/admin/voices', label: 'Voices', icon: Mic2 },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 px-5 py-6 lg:flex">
      <Link href="/">
        <Logo />
      </Link>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-coral">Admin Panel</p>

      <nav className="mt-10 flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-display transition-colors ${
                active ? 'bg-white/[0.06] text-text' : 'text-muted-v hover:bg-white/[0.03] hover:text-text'
              }`}
            >
              <Icon size={17} className={active ? 'text-coral' : ''} />
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto border-t border-white/5 pt-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-display text-muted-v transition-colors hover:bg-white/[0.03] hover:text-text"
        >
          <ArrowLeft size={17} />
          Back to App
        </Link>
      </div>
    </aside>
  )
}
