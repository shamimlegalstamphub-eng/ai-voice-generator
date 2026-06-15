import { Sora, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['400', '600', '700', '800'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-plex-mono', weight: ['400', '500'] })

export const metadata = {
  title: 'VoiceForge AI \u2014 Generate Human-Like AI Voices in Seconds',
  description:
    'Create realistic AI voiceovers, YouTube narrations, podcasts, audiobooks, and business audio with VoiceForge AI. Text to speech and voice cloning in English and Indian languages.',
  keywords: [
    'AI Voice Generator',
    'Human Voice Generator',
    'AI Voice Cloning',
    'Text To Speech',
    'Hindi AI Voice Generator',
    'Realistic Voice Generator',
  ],
  openGraph: {
    title: 'VoiceForge AI \u2014 Generate Human-Like AI Voices in Seconds',
    description:
      'Create realistic voiceovers, podcasts, audiobooks, and business audio with advanced AI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoiceForge AI \u2014 Generate Human-Like AI Voices in Seconds',
    description:
      'Create realistic voiceovers, podcasts, audiobooks, and business audio with advanced AI.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
