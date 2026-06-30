'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { IconAnchor, IconExpand, IconEye, IconShield, IconTrend } from './Icons'

const steps = [
  { n: 1, Icon: IconAnchor, title: 'Foundation', body: 'Your website, built right.' },
  { n: 2, Icon: IconEye, title: 'Visibility', body: 'SEO that gets you found.' },
  { n: 3, Icon: IconShield, title: 'Authority', body: 'Content that builds trust.' },
  { n: 4, Icon: IconTrend, title: 'Momentum', body: 'Ads and campaigns that convert.' },
  { n: 5, Icon: IconExpand, title: 'Expansion', body: 'Scale what’s working.' },
]

export default function MethodTimeline() {
  return (
    <section id="method" className="bg-teal-50 py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow bg-white">Our Framework →</span>
          <h2
            className="mt-5 font-display font-700 leading-[1.15] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            The Divine Flow Method™
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.6] text-ink-soft">
            A strategic system that brings every part of your digital presence
            into alignment, so growth compounds instead of stalling.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-line lg:block">
            <motion.div
              className="h-full origin-left bg-teal"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
          >
            {steps.map((s) => (
              <motion.div key={s.n} variants={fadeUp} className="relative flex flex-col items-center text-center">
                <motion.span
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-teal font-display text-lg font-700 text-white shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ type: 'spring', stiffness: 200, delay: s.n * 0.1 }}
                >
                  {s.n}
                </motion.span>
                <span className="mt-5 text-teal">
                  <s.Icon />
                </span>
                <h3 className="mt-3 font-display text-[18px] font-600 text-ink">{s.title}</h3>
                <p className="mt-1.5 max-w-[180px] text-[14px] leading-[1.5] text-ink-soft">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
