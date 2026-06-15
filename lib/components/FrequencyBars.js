'use client'

// Signature motif: a row of bars colored across the "spectrum" gradient,
// animating like an audio equalizer. Used in the nav mark, hero, audio
// player, and as section dividers.
export default function FrequencyBars({ count = 24, className = '', barClassName = '', active = true }) {
  const bars = Array.from({ length: count })
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {bars.map((_, i) => {
        const delay = (i % 8) * 0.09
        const baseHeight = 30 + ((i * 37) % 70) // pseudo-random heights 30-100%
        return (
          <span
            key={i}
            className={`block w-[3px] rounded-full bg-spectrum-vertical ${active ? 'animate-eq' : ''} ${barClassName}`}
            style={{
              height: `${baseHeight}%`,
              animationDelay: `${delay}s`,
              transformOrigin: 'bottom',
            }}
          />
        )
      })}
    </div>
  )
}
