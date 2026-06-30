'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronDown, IconClose, IconMenu } from './Icons'

const links = [
  { label: 'Services', href: '#services', chevron: true },
  { label: 'Portfolio', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#final-cta' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <nav className="container-x flex h-[80px] items-center justify-between">
        <a href="#home" className="flex h-12 items-center" aria-label="Divine Flow Digital home">
          <Image
            src="/assets/Divineflowdigital_logo_.avif"
            alt="Divine Flow Digital"
            width={200}
            height={56}
            priority
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
              {l.chevron && <IconChevronDown className="h-4 w-4 text-ink-faint" />}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#testimonials" className="text-[15px] font-medium text-ink transition-colors hover:text-teal-600">
            Our Work
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-teal px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Book a Call
          </motion.a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="text-ink md:hidden"
          onClick={() => setOpen(true)}
        >
          <IconMenu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          >
            <div className="container-x flex h-[80px] items-center justify-between border-b border-line">
              <Image
                src="/assets/Divineflowdigital_logo_.avif"
                alt="Divine Flow Digital"
                width={200}
                height={56}
                className="h-12 w-auto object-contain"
              />
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="text-ink">
                <IconClose className="h-6 w-6" />
              </button>
            </div>
            <div className="container-x flex flex-1 flex-col gap-1 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 font-display text-2xl font-600 text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-teal px-6 py-4 text-center text-base font-semibold text-white"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
