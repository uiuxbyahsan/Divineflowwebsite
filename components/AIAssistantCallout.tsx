'use client'

import { motion } from 'framer-motion'
import { viewportOnce } from '@/lib/motion'
import { IconClose } from './Icons'

export default function AIAssistantCallout() {
  return (
    <section className="mesh-bg px-6 py-24 text-center sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow bg-white text-teal-600">Strategy Assistant →</span>
          <h2
            className="mx-auto mt-5 max-w-[600px] font-display font-700 leading-[1.15] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            Get clarity on your next move with a personal strategy session.
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-[17px] leading-[1.6] text-ink-soft">
            Talk through your goals, get a tailored roadmap, and leave knowing
            exactly what to prioritize next.
          </p>
        </motion.div>

        {/* Chat card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-md rounded-4xl bg-white p-6 text-left shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[11px] font-semibold text-white">
                DF
              </span>
              <span className="text-sm font-medium text-ink">Ask Divine Flow</span>
            </div>
            <IconClose className="h-4 w-4 text-ink-faint" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4 }}
            className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-teal-50 p-4 text-sm text-ink"
          >
            “Based on my current traffic, where should I focus growth first?”
          </motion.div>

          <motion.div
            className="ml-2 mt-3 flex gap-1"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: [1, 1, 0] }}
            viewport={viewportOnce}
            transition={{ duration: 1.6, times: [0, 0.8, 1], delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-ink-faint"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 2.4 }}
            className="mt-3 max-w-[88%] rounded-2xl rounded-tl-sm border border-line bg-white p-4 text-sm text-ink"
          >
            “Your SEO foundation is strong. Focus next on paid social to capture
            the warm leads already finding you organically.”
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
