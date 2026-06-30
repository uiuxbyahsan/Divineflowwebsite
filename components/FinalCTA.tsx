'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { IconArrowRight, IconCheck, IconStar } from './Icons'

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="px-5 py-24 sm:px-10 sm:py-28"
      style={{
        background:
          'linear-gradient(135deg, #03999a 0%, #027c7d 40%, #04b5b6 70%, #6dd9d4 100%)',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-[900px] rounded-4xl bg-white px-8 py-16 text-center shadow-lg sm:px-14"
      >
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink">
            <span className="flex text-teal">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            5.0 Google Reviews
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink">
            <IconCheck className="h-3.5 w-3.5 text-teal" /> 100+ Clients
          </span>
          <span className="inline-flex items-center rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink">
            Wix Certified Partner
          </span>
        </div>

        <h2
          className="mx-auto mt-8 max-w-xl font-display font-700 leading-[1.12] text-ink"
          style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}
        >
          Your brand is your business.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-[1.6] text-ink-soft">
          Make sure both are set up to grow with Divine Flow Digital.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Book a Free Consultation
            <IconArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#testimonials"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink-faint"
          >
            View Our Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
