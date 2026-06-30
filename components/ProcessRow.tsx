'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { IconArrowRight, IconCalendar, IconMap, IconLayout, IconRocket } from './Icons'

const steps = [
  { bg: 'bg-mint', Icon: IconCalendar, title: 'Discovery Call', body: 'A 30-min strategy session to map your goals.' },
  { bg: 'bg-peach', Icon: IconMap, title: 'Strategy Roadmap', body: 'A clear, prioritized plan before any work begins.' },
  { bg: 'bg-lavender', Icon: IconLayout, title: 'Design & Build', body: 'Your website and brand assets come to life.' },
  { bg: 'bg-sky', Icon: IconRocket, title: 'Launch & Grow', body: 'Ongoing SEO, ads, and content to scale results.' },
]

export default function ProcessRow() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="eyebrow">Our Process →</span>
            <h2
              className="mt-5 max-w-xl font-display font-700 leading-[1.15] text-ink"
              style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
            >
              Built on a system that actually moves the needle.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-[15px] text-ink-soft">
              No guesswork. Just a proven path from first call to lasting growth.
            </p>
            <a href="#method" className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-teal-600 hover:underline">
              Learn more <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.bg} text-teal`}>
                <s.Icon />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-600 text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
