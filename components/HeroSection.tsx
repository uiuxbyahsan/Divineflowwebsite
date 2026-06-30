'use client'

import { motion } from 'framer-motion'
import HeroMockupCard from './HeroMockupCard'
import { IconArrowRight } from './Icons'

export default function HeroSection() {
  return (
    <section id="home" className="bg-paper">
      <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Strategy + Design + Marketing</span>
          <h1
            className="mt-5 font-display font-700 leading-[1.08] text-ink"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
          >
            Strategy + Design:
            <br />
            Building Brands
            <br />
            That Convert
          </h1>
          <p className="mt-6 max-w-[460px] text-[17px] leading-[1.6] text-ink-soft">
            Join 100+ businesses using Divine Flow’s strategy, design, and
            marketing systems to build one aligned digital presence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink-faint"
            >
              See Our Work
            </motion.a>
          </div>
        </motion.div>

        {/* Right side: animated mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroMockupCard />
        </motion.div>
      </div>
    </section>
  )
}
