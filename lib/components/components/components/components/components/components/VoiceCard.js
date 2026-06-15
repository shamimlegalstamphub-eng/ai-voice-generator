'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Pause } from 'lucide-react'
import FrequencyBars from './FrequencyBars'

const dotColors = {
  violet: 'bg-violet',
  cyan: 'bg-cyan',
  coral: 'bg-coral',
  amber: 'bg-amber',
}

export default function VoiceCard({ voice, selected, onSelect }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`card flex flex-col gap-4 transition-colors ${
        selected ? 'border-violet/60 shadow-glow' : 'hover:border-white/15'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${dotColors[voice.color]}`} />
            <Link href={`/voices/${voice.id}`} className="font-display text-sm font-semibold hover:text-violet">
              {voice.name}
            </Link>
          </div>
          <p className="mt-1 text-xs text-muted-v">{voice.style} \u00b7 {voice.language}</p>
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-v transition-colors hover:text-text"
          aria-label="Preview voice"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>

      <div className="h-10 overflow-hidden rounded-lg border border-white/5 bg-black/20 px-3">
        <FrequencyBars count={28} className="h-full items-center" active={playing} />
      </div>

      <div className="flex flex-wrap gap-2">
        {voice.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-v">
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => onSelect && onSelect(voice)}
        className={`mt-auto rounded-full px-4 py-2 text-xs font-display font-semibold transition-colors ${
          selected ? 'bg-spectrum text-ink' : 'border border-white/10 text-text hover:bg-white/5'
        }`}
      >
        {selected ? 'Selected' : 'Use this voice'}
      </button>
    </div>
  )
}
