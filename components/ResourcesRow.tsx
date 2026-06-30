'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { IconArrowUpRight, IconBook, IconChat, IconCalendar, IconGrad } from './Icons'

const cards = [
  { bg: 'bg-mint', Icon: IconBook, title: 'The Divine Download', body: 'Monthly strategy tips delivered to your inbox.' },
  { bg: 'bg-coral', Icon: IconGrad, title: 'Free Resources', body: 'Templates, guides, and checklists to grow smarter.' },
  { bg: 'bg-periwinkle', Icon: IconChat, title: 'Community', body: 'Connect with other entrepreneurs in our network.' },
  { bg: 'bg-butter', Icon: IconCalendar, title: 'Webinars', body: 'Live sessions on SEO, branding, and growth strategy.' },
]

export default function ResourcesRow() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="eyebrow">Resources →</span>
          <h2
            className="mt-5 max-w-xl font-display font-700 leading-[1.15] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            Everything you need to grow with confidence.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.a
              key={c.title}
              href="#contact"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} text-teal`}>
                <c.Icon />
              </span>
              <h3 className="mt-5 flex items-center gap-1 font-display text-[17px] font-600 text-ink">
                {c.title}
                <IconArrowUpRight className="h-4 w-4 text-ink-faint transition-colors group-hover:text-teal-600" />
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">{c.body}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
