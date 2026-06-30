'use client'

import { motion } from 'framer-motion'
import {
  Palette,
  BarChart3,
  Mail,
  Smartphone,
  Search,
  MessageSquare,
  TrendingUp,
  Target,
} from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

const toolkitIcons = [
  { Icon: Palette, label: 'Brand Design' },
  { Icon: BarChart3, label: 'Analytics' },
  { Icon: Mail, label: 'Email Marketing' },
  { Icon: Smartphone, label: 'Mobile Optimization' },
  { Icon: Search, label: 'SEO' },
  { Icon: MessageSquare, label: 'Social Media' },
  { Icon: TrendingUp, label: 'Growth Tracking' },
  { Icon: Target, label: 'Ad Targeting' },
]

export default function GradientCTABand() {
  return (
    <section className="px-5 py-10 sm:px-10">
      <div
        className="relative overflow-hidden rounded-4xl px-6 py-20 text-center sm:px-12 sm:py-24"
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
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-600 text-white backdrop-blur-sm">
            Our Toolkit →
          </span>
          <h2
            className="mx-auto mt-5 max-w-2xl font-display font-700 leading-[1.15] text-white"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
          >
            Strategy. Design. Marketing. All working as one.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.6] text-white/85">
            Every service connects to the next, so nothing in your brand works
            alone.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {toolkitIcons.map(({ Icon, label }, i) => (
            <motion.div key={label} variants={fadeUp} className="inline-block">
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.15)' }}
                aria-label={label}
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
