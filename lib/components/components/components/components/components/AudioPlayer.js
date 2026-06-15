'use client'

import { useEffect, useState } from 'react'
import { Play, Pause, Square, RotateCcw, Download } from 'lucide-react'
import FrequencyBars from './FrequencyBars'

export default function AudioPlayer({ title = 'Untitled_Generation.mp3', duration = 18, voice = 'Anaya \u2014 Professional Female' }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setPlaying(false)
          return 100
        }
        return p + 100 / (duration * 10)
      })
    }, 100)
    return () => clearInterval(interval)
  }, [playing, duration])

  const elapsed = Math.min(duration, (progress / 100) * duration)

  function format(seconds) {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-sm font-semibold">{title}</p>
          <p className="mt-1 text-xs text-muted-v">{voice}</p>
        </div>
        <button className="btn-ghost px-4 py-2 text-xs">
          <Download size={14} />
          Download
        </button>
      </div>

      <div className="relative mt-5 h-16 overflow-hidden rounded-xl border border-white/5 bg-black/20 px-4">
        <FrequencyBars count={48} className="h-full items-center" active={playing} />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 border-r border-white/40 bg-white/5"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-spectrum text-ink shadow-glow transition-transform hover:scale-105"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            onClick={() => {
              setPlaying(false)
              setProgress(0)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-v transition-colors hover:text-text"
            aria-label="Stop"
          >
            <Square size={16} />
          </button>
          <button
            onClick={() => setProgress(0)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-v transition-colors hover:text-text"
            aria-label="Replay"
          >
            <RotateCcw size={16} />
          </button>
        </div>
        <p className="font-mono text-xs text-muted-v">
          {format(elapsed)} / {format(duration)}
        </p>
      </div>
    </div>
  )
}
