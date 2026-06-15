import Link from 'next/link'
import { Check } from 'lucide-react'

export default function PricingCard({ plan }) {
  return (
    <div
      className={`card relative flex flex-col ${
        plan.highlight ? 'border-violet/50 shadow-glow' : ''
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-spectrum px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-ink">
          Most Popular
        </span>
      )}
      <p className="label-eyebrow">{plan.name}</p>
      <div className="mt-3 flex items-end gap-1">
        <span className="font-display text-4xl font-bold">\u20b9{plan.price}</span>
        <span className="pb-1 text-sm text-muted-v">{plan.period}</span>
      </div>
      <p className="mt-2 text-sm text-muted-v">{plan.tagline}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
            <span className="text-text">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/checkout?plan=${plan.id}`}
        className={`mt-8 w-full rounded-full px-6 py-3 text-center font-display text-sm font-semibold transition-transform hover:scale-[1.02] ${
          plan.highlight ? 'bg-spectrum text-ink shadow-glow' : 'border border-white/15 text-text hover:bg-white/5'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  )
}
