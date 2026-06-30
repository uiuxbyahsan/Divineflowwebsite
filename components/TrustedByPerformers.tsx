'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { IconArrowRight } from './Icons'

const stories = [
  {
    bg: 'bg-mint',
    avatar: 'bg-teal',
    quote:
      'What I liked about working with Divine Flow was that the strategy was just really, really clear and easy for our team to follow.',
    name: 'Craig K.',
    role: 'Owner @ Solve Pain Management',
    badgeColor: '#2563eb',
    badgeText: 'SP',
    stat: '100%',
    statLabel: 'satisfied customer',
  },
  {
    bg: 'bg-sky',
    avatar: 'bg-[#3b9fd1]',
    quote:
      'Having Divine Flow handle both our website and our ad strategy gave us the best of both worlds, design and growth working together.',
    name: 'Michelle T.',
    role: 'Owner @ Med Spa',
    badgeColor: '#16a34a',
    badgeText: 'MT',
    stat: '2x',
    statLabel: 'lead increase',
  },
  {
    bg: 'bg-lavender',
    avatar: 'bg-[#7c6fc4]',
    quote:
      'I underestimated how valuable our investment would prove to be. The business we have built since is a standard for alignment.',
    name: 'James R.',
    role: 'Founder @ Boutique Fitness Studio',
    badgeColor: '#dc2626',
    badgeText: 'BF',
    stat: '45%',
    statLabel: 'conversion lift',
  },
  {
    bg: 'bg-blush',
    avatar: 'bg-[#d6699a]',
    quote:
      'They tied our whole brand together into one system. Our store finally looks and performs like the brand we always wanted.',
    name: 'Daniel A.',
    role: 'Founder @ E-Commerce Brand',
    badgeColor: '#9333ea',
    badgeText: 'EC',
    stat: '3.2x',
    statLabel: 'revenue growth',
  },
  {
    bg: 'bg-sage',
    avatar: 'bg-[#6fa860]',
    quote:
      'The whole process felt effortless and the results speak for themselves. I finally have a presence I am proud to share.',
    name: 'Priya N.',
    role: 'Owner @ Wellness Studio',
    badgeColor: '#0e7490',
    badgeText: 'WS',
    stat: '60d',
    statLabel: 'to first results',
  },
  {
    bg: 'bg-coral',
    avatar: 'bg-[#e07a52]',
    quote:
      'Lacey understood our market instantly. The new site and content brought in exactly the clients we wanted to reach.',
    name: 'Marcus L.',
    role: 'Director @ Consulting Firm',
    badgeColor: '#b45309',
    badgeText: 'CF',
    stat: '4x',
    statLabel: 'qualified leads',
  },
]

function Card({ s }: { s: (typeof stories)[number] }) {
  return (
    <div
      className={`mr-5 flex w-[340px] flex-shrink-0 items-start gap-6 rounded-[28px] p-8 sm:w-[460px] ${s.bg}`}
    >
      {/* Rotated floating photo frame */}
      <div className="flex-shrink-0">
        <motion.div
          className="relative h-24 w-20 rounded-2xl bg-white p-1 shadow-md"
          style={{ rotate: -4 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`flex h-full w-full items-center justify-center rounded-xl font-display text-2xl font-700 text-white ${s.avatar}`}
          >
            {s.name.charAt(0)}
          </div>
          <span
            className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white text-[11px] font-bold text-white shadow-sm"
            style={{ background: s.badgeColor }}
          >
            {s.badgeText}
          </span>
        </motion.div>
      </div>

      <div className="flex-1 pt-1">
        <p className="text-base font-600 text-ink">{s.name}</p>
        <p className="mb-5 text-sm text-ink-faint">{s.role}</p>
        <p className="mb-6 text-[15px] leading-relaxed text-ink">“{s.quote}”</p>
        <div className="flex items-center justify-between border-t border-black/10 pt-5">
          <div>
            <p className="font-display text-3xl font-700 leading-none text-ink">{s.stat}</p>
            <p className="mt-1.5 text-xs text-ink-faint">{s.statLabel}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Read the story <IconArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TrustedByPerformers() {
  return (
    <section id="testimonials" className="overflow-hidden bg-paper py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="eyebrow">Customer stories →</span>
          <h2
            className="mt-5 font-display font-700 leading-[1.15] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            Trusted by top performers
          </h2>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee (pauses on hover) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
      >
        <div className="trusted-track">
          {stories.map((s) => (
            <Card key={s.name} s={s} />
          ))}
          {stories.map((s) => (
            <Card key={`${s.name}-dup`} s={s} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
