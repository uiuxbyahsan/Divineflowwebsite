'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { IconBrand, IconChart, IconChat, IconLayout, IconMegaphone, IconSearch } from './Icons'
import TypingText from './TypingText'

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal shadow-sm">
      {children}
    </span>
  )
}

/* Mockup 1 — browser with looping cursor + button ripple */
function BrowserMockup() {
  return (
    <div className="relative mt-5 overflow-hidden rounded-xl border border-line bg-white">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 h-3 flex-1 rounded bg-paper" />
      </div>
      <div className="space-y-2 p-4">
        <div className="h-3 w-1/2 rounded bg-paper" />
        <div className="h-2 w-3/4 rounded bg-paper" />
        <div className="h-2 w-2/3 rounded bg-paper" />
        <div className="relative mt-3 inline-flex">
          {/* ripple pulse */}
          <motion.span
            className="absolute inset-0 rounded-full bg-teal/30"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <span className="relative rounded-full bg-teal px-4 py-1.5 text-[11px] font-medium text-white">
            Get Started
          </span>
          {/* looping cursor */}
          <motion.span
            className="absolute -bottom-2 -right-2 text-base"
            animate={{ x: [6, -2, -2, 6], y: [6, 0, 0, 6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
          >
            👆
          </motion.span>
        </div>
      </div>
    </div>
  )
}

/* Mockup 2 — SEO ranking, "Your Business" row climbs continuously */
function SearchMockup() {
  return (
    <div className="relative mt-5 h-[120px]">
      <div className="absolute inset-0 flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[12px] text-ink-soft">
          <span className="font-semibold text-ink-faint">#1</span> Competitor A
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[12px] text-ink-soft">
          <span className="font-semibold text-ink-faint">#2</span> Competitor B
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[12px] text-ink-soft">
          <span className="font-semibold text-ink-faint">#3</span> Competitor C
        </div>
      </div>
      {/* Your Business row rises from bottom to top, loops */}
      <motion.div
        className="absolute inset-x-0 flex items-center gap-2 rounded-lg bg-teal px-3 py-2 text-[12px] font-medium text-white shadow-sm"
        animate={{ top: [80, 80, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.7, 1] }}
        style={{ top: 0 }}
      >
        <span className="font-semibold">★</span> Your Business
      </motion.div>
    </div>
  )
}

/* Mockup 3 — Brand & Identity: design-in-progress canvas */
function BrandMockup() {
  return (
    <div className="relative mt-5 h-32 overflow-hidden rounded-xl bg-white p-4 shadow-sm">
      {/* dotted design canvas */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* logo mark drawing in */}
      <svg width="40" height="40" viewBox="0 0 40 40" className="absolute left-3 top-3">
        <motion.circle
          cx="20"
          cy="20"
          r="16"
          stroke="var(--teal)"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: 'easeInOut' }}
        />
      </svg>

      {/* swatches snapping in */}
      <div className="absolute right-3 top-3 flex gap-1.5">
        {['#03999a', '#0f1715', '#d3f0ef', '#fbe9e1'].map((color, i) => (
          <motion.div
            key={color}
            className="h-6 w-6 rounded-md"
            style={{ background: color }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], opacity: 1 }}
            transition={{ delay: i * 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 2.7, ease: 'backOut' }}
          />
        ))}
      </div>

      {/* typing brand name */}
      <div className="absolute inset-x-3 bottom-3">
        <TypingText text="Divine Flow Digital" />
      </div>

      {/* roaming cursor */}
      <motion.div
        className="absolute h-3 w-3 rounded-full border-2 border-teal"
        animate={{ left: ['20%', '70%', '40%', '20%'], top: ['30%', '50%', '70%', '30%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/* Mockup 4 — social post, like counter increments continuously */
function SocialMockup() {
  const [likes, setLikes] = useState(1248)
  useEffect(() => {
    const id = setInterval(() => {
      setLikes((p) => p + Math.floor(Math.random() * 3) + 1)
    }, 1800)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="mt-5 rounded-xl border border-line bg-white p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-blush" />
        <span className="h-2 w-20 rounded bg-paper" />
      </div>
      <div className="h-14 rounded-lg bg-paper" />
      <div className="mt-2 flex items-center gap-1.5 text-[12px] text-ink-soft">
        <motion.span
          key={likes}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-teal"
        >
          ♥
        </motion.span>
        <span className="font-semibold text-ink">{likes.toLocaleString()}</span>
        likes
      </div>
    </div>
  )
}

/* Mockup 5 — line chart redraws continuously with tracing dot */
function ChartMockup() {
  const path = 'M0,70 L35,55 L70,60 L105,35 L140,40 L175,15 L200,10'
  return (
    <div className="mt-5 rounded-xl border border-line bg-white p-4">
      <svg viewBox="0 0 200 80" className="h-20 w-full">
        <motion.path
          d={path}
          fill="none"
          stroke="var(--teal)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          r="4"
          fill="var(--teal)"
          style={{ offsetPath: `path("${path}")` } as React.CSSProperties}
          animate={{ offsetDistance: ['0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

/* Mockup 6 — Graphic Design: composition of shapes assembling */
function GraphicMockup() {
  return (
    <div className="relative mt-5 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
      <motion.span
        className="absolute h-12 w-12 rounded-2xl bg-teal/80"
        animate={{ rotate: [0, 90, 0], x: [-18, -10, -18] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute h-10 w-10 rounded-full bg-coral"
        animate={{ scale: [1, 1.2, 1], x: [16, 8, 16] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute h-0 w-0"
        style={{ borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '24px solid #0f1715' }}
        animate={{ rotate: [0, -120, 0], y: [10, 2, 10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

const cards = [
  {
    bg: 'bg-mint',
    icon: <IconLayout />,
    title: 'Website Design',
    desc: 'Custom sites that convert visitors into clients.',
    mockup: <BrowserMockup />,
  },
  {
    bg: 'bg-peach',
    icon: <IconSearch />,
    title: 'SEO & Visibility',
    desc: 'Climb the rankings and get found first.',
    mockup: <SearchMockup />,
  },
  {
    bg: 'bg-lavender',
    icon: <IconBrand />,
    title: 'Brand & Identity',
    desc: 'A cohesive look across every channel.',
    mockup: <BrandMockup />,
  },
  {
    bg: 'bg-butter',
    icon: <IconChat />,
    title: 'Social Media',
    desc: 'Content that builds trust and engagement.',
    mockup: <SocialMockup />,
  },
  {
    bg: 'bg-sky',
    icon: <IconMegaphone />,
    title: 'Ad Campaigns',
    desc: 'Targeted Google and Meta ads that convert.',
    mockup: <ChartMockup />,
  },
  {
    bg: 'bg-blush',
    icon: <IconChart />,
    title: 'Graphic Design',
    desc: 'Polished marketing visuals for every touchpoint.',
    mockup: <GraphicMockup />,
  },
]

export default function PlatformBentoGrid() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="eyebrow">Platform overview →</span>
          <h2
            className="mt-5 max-w-2xl font-display font-700 leading-[1.15] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            Everything your brand needs, built as one system.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`overflow-hidden rounded-3xl p-7 transition-shadow hover:shadow-md ${c.bg}`}
            >
              <IconBadge>{c.icon}</IconBadge>
              <h3 className="mt-5 font-display text-[20px] font-600 text-ink">{c.title}</h3>
              <p className="mt-1.5 text-[15px] text-ink-soft">{c.desc}</p>
              {c.mockup}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
