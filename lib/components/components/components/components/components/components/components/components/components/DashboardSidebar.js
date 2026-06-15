'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Mic,
  Library,
  Copy,
  CreditCard,
  Gift,
  Settings,
  LogOut,
} from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/studio', label: 'TTS Studio', icon: Mic },
  { href: '/voices', label: 'Voice Library', icon: Library },
  { href: '/voice-cloning', label: 'Voice Cloning', icon: Copy },
  { href: '/dashboard/billing', label: 'Billing', icon: CreditCard },
  { href: '/dashboard/referrals', label: 'Referrals', icon: Gift },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 px-5 py-6 lg:flex">
      <Link href="/">
        <Logo />
      </Link>

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
              <Icon size={17} className={active ? 'text-violet' : ''} />
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-1 border-t border-white/5 pt-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-display text-muted-v transition-colors hover:bg-white/[0.03] hover:text-text"
        >
          <Settings size={17} />
          Settings
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-display text-muted-v transition-colors hover:bg-white/[0.03] hover:text-text"
        >
          <LogOut size={17} />
          Log Out
        </Link>
      </div>
    </aside>
  )
}
