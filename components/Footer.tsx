'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { IconFacebook, IconInstagram, IconLinkedin } from './Icons'

const services = ['Website Design', 'SEO', 'Branding', 'Social Media', 'Ads']
const company = ['About', 'Portfolio', 'Pricing', 'Contact']
const resources = ['Blog', 'Webinars', 'The Divine Download', 'FAQ']
const socials = [
  { Icon: IconFacebook, label: 'Facebook' },
  { Icon: IconInstagram, label: 'Instagram' },
  { Icon: IconLinkedin, label: 'LinkedIn' },
]

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div variants={fadeUp}>
      <h4 className="text-[14px] font-600 text-ink">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-[14px] text-ink-soft transition-colors hover:text-teal-600">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-paper">
      <div className="container-x py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]"
        >
          <motion.div variants={fadeUp}>
            <Image
              src="/assets/Divineflowdigital_logo_.avif"
              alt="Divine Flow Digital"
              width={220}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-[14px] leading-[1.6] text-ink-soft">
              Align your brand. Amplify your presence.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <Col title="Services" items={services} />
          <Col title="Company" items={company} />
          <Col title="Resources" items={resources} />

          <motion.div variants={fadeUp}>
            <h4 className="text-[14px] font-600 text-ink">Contact</h4>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-soft">
              <li>Saginaw, AZ</li>
              <li>
                <a href="tel:+16026173830" className="transition-colors hover:text-teal-600">
                  (602) 617-3830
                </a>
              </li>
              <li>
                <a href="mailto:lacey@divineflowdigital.com" className="transition-colors hover:text-teal-600">
                  lacey@divineflowdigital.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-faint">
            © 2025 Divine Flow Digital. All rights reserved.
          </p>
          <div className="flex gap-5 text-[13px] text-ink-faint">
            <a href="#" className="transition-colors hover:text-ink">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
