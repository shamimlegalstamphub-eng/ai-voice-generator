import FrequencyBars from './FrequencyBars'

export default function Logo({ size = 'md' }) {
  const textSize = size === 'lg' ? 'text-2xl' : 'text-lg'
  return (
    <span className={`inline-flex items-center gap-2 font-display font-bold ${textSize}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-spectrum">
        <FrequencyBars count={5} className="h-4 gap-[2px]" barClassName="bg-ink w-[2px]" />
      </span>
      <span>
        Voice<span className="text-gradient">Forge</span>
      </span>
    </span>
  )
}
