'use client'

import { useEffect, useState, type ComponentType, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  IconBrand,
  IconChart,
  IconChat,
  IconLayout,
  IconMegaphone,
  IconSearch,
} from './Icons'

const bars = [45, 70, 55, 85, 65, 95]

type Slide = {
  Icon: ComponentType<{ className?: string }>
  tag: string
  stat: string
  label: string
  visual: ReactNode
}

const slides: Slide[] = [
  {
    Icon: IconLayout,
    tag: 'Website Design',
    stat: '+184%',
    label: 'Organic traffic after launch',
    visual: (
      <div className="overflow-hidden rounded-xl border border-line">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-1 h-2.5 flex-1 rounded bg-paper" />
        </div>
        <div className="space-y-2 p-4">
          <div className="h-2.5 w-1/2 rounded bg-paper" />
          <div className="h-2 w-3/4 rounded bg-paper" />
          <span className="mt-1 inline-block rounded-full bg-teal px-3 py-1 text-[10px] font-medium text-white">
            Get Started
          </span>
        </div>
      </div>
    ),
  },
  {
    Icon: IconSearch,
    tag: 'SEO & Visibility',
    stat: '#1',
    label: 'Ranking on Google',
    visual: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 rounded-lg bg-teal px-3 py-2 text-[12px] font-medium text-white">
          <span>★</span> Your Business
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-paper px-3 py-2 text-[12px] text-ink-soft">
          <span className="text-ink-faint">#2</span> Competitor A
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-paper px-3 py-2 text-[12px] text-ink-soft">
          <span className="text-ink-faint">#3</span> Competitor B
        </div>
      </div>
    ),
  },
  {
    Icon: IconBrand,
    tag: 'Brand & Identity',
    stat: '100%',
    label: 'On-brand, every channel',
    visual: (
      <div className="flex items-center gap-3">
        {['#03999a', '#0f1715', '#d3f0ef', '#fbe9e1'].map((c) => (
          <span key={c} className="h-11 w-11 rounded-xl" style={{ background: c }} />
        ))}
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-sm font-700 text-white">
          DF
        </span>
      </div>
    ),
  },
  {
    Icon: IconChat,
    tag: 'Social Media',
    stat: '12.4k',
    label: 'Monthly engagements',
    visual: (
      <div className="rounded-xl border border-line p-3">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-blush" />
          <span className="h-2 w-24 rounded bg-paper" />
        </div>
        <div className="h-12 rounded-lg bg-paper" />
        <p className="mt-2 text-[12px] text-ink-soft">
          <span className="text-teal">♥</span>{' '}
          <span className="font-semibold text-ink">12,480</span> likes
        </p>
      </div>
    ),
  },
  {
    Icon: IconMegaphone,
    tag: 'Ad Campaigns',
    stat: '3.8x',
    label: 'Return on ad spend',
    visual: (
      <div className="flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{ height: `${h}%`, background: i > 3 ? 'var(--teal)' : 'var(--teal-100)' }}
          />
        ))}
      </div>
    ),
  },
  {
    Icon: IconChart,
    tag: 'Graphic Design',
    stat: '48h',
    label: 'Average turnaround',
    visual: (
      <div className="flex items-center justify-center gap-4 rounded-xl border border-line py-5">
        <span className="h-10 w-10 rounded-2xl bg-teal/80" />
        <span className="h-10 w-10 rounded-full bg-coral" />
        <span
          className="h-0 w-0"
          style={{
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderBottom: '20px solid #0f1715',
          }}
        />
      </div>
    ),
  },
]

export default function HeroMockupCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const s = slides[index]

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-4xl p-4 shadow-lg sm:min-h-[540px]"
      style={{
        background:
          'linear-gradient(135deg, var(--mint) 0%, var(--teal-100) 50%, var(--sky) 100%)',
      }}
    >
      <div className="w-full max-w-[440px] rounded-[28px] bg-white p-[50px] shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal">
                <s.Icon className="h-6 w-6" />
              </span>
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-[12px] font-600 text-teal-600">
                {s.tag}
              </span>
            </div>

            <p className="mt-8 font-display text-[52px] font-700 leading-none text-ink">
              {s.stat}
            </p>
            <p className="mt-2 text-[14px] text-ink-faint">{s.label}</p>

            <div className="mt-7">{s.visual}</div>
          </motion.div>
        </AnimatePresence>

        {/* progress dots */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-teal' : 'w-1.5 bg-line'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
