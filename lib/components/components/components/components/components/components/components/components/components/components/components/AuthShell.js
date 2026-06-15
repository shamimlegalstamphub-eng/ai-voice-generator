import Link from 'next/link'
import Logo from './Logo'
import FrequencyBars from './FrequencyBars'

export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden border-r border-white/5 bg-bg-soft p-12 lg:flex">
        <div className="absolute inset-0 bg-spectrum opacity-[0.07]" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-violet/20 blur-3xl animate-floaty" />
        <div className="absolute -right-16 bottom-24 h-64 w-64 rounded-full bg-coral/20 blur-3xl animate-floaty" />

        <Link href="/" className="relative z-10">
          <Logo size="lg" />
        </Link>

        <div className="relative z-10">
          <p className="font-display text-3xl font-bold leading-tight">
            Your voice, generated.
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-v">
            Join thousands of creators using VoiceForge to produce narration, podcasts, and
            business audio in seconds.
          </p>
          <div className="mt-8 h-20 overflow-hidden rounded-xl border border-white/5 bg-black/20 px-4">
            <FrequencyBars count={40} className="h-full items-center" />
          </div>
        </div>

        <p className="relative z-10 font-mono text-xs text-muted-v">
          \u00a9 2026 VoiceForge AI
        </p>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <Link href="/" className="mb-10 inline-flex lg:hidden">
            <Logo size="lg" />
          </Link>
          <p className="label-eyebrow">{subtitle}</p>
          <h1 className="mt-2 font-display text-3xl font-bold">{title}</h1>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-sm text-muted-v">{footer}</div>}
        </div>
      </div>
    </div>
  )
}
