'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { IconArrowRight } from './Icons'

const credentials = [
  { stat: '15+', label: 'Years experience' },
  { stat: '100+', label: 'Brands launched' },
  { stat: '5.0', label: 'Google rating' },
]

export default function AboutFoundersSection() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Meet the founder →</span>
          <h2
            className="mt-5 font-display font-700 leading-[1.15] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            The person behind your brand’s growth.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* Floating + rotating image */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <motion.div
              className="relative w-full max-w-sm overflow-hidden rounded-[28px] bg-white p-2 shadow-lg"
              style={{ aspectRatio: '4 / 5' }}
              animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/assets/founder_2.avif"
                  alt="Lacey, Founder of Divine Flow Digital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content fills the right side */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display text-2xl font-700 text-ink">Lacey</h3>
            <p className="mt-1 text-[15px] font-medium text-teal-600">
              Founder &amp; Digital Strategist
            </p>

            <div className="mt-5 space-y-4 text-[16px] leading-[1.7] text-ink-soft">
              <p>
                With 15+ years in marketing, web design, and brand strategy,
                Lacey leads strategy and creative direction for every Divine Flow
                client, bringing the whole digital presence into alignment.
              </p>
              <p>
                Her philosophy is simple: don’t sell services, build systems.
                Every engagement starts with strategy and ends with a brand
                that’s easier to find, trust, and grow.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {credentials.map((c) => (
                <div key={c.label} className="rounded-2xl bg-teal-50 p-4">
                  <p className="font-display text-2xl font-700 leading-none text-ink">{c.stat}</p>
                  <p className="mt-1.5 text-[13px] text-ink-soft">{c.label}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-600"
            >
              Work with Lacey
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
