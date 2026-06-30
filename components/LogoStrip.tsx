'use client'

import { motion } from 'framer-motion'

const rowOne = [
  { name: 'Lendiview', icon: '◧' },
  { name: 'Likely', icon: '⚐' },
  { name: 'Mymemorybox', icon: '✦' },
  { name: 'Onethread', icon: '⬗' },
  { name: 'Rabfy', icon: '❑' },
  { name: 'Ontik Technology', icon: '⁘' },
  { name: 'Ostad', icon: '◎' },
]

const rowTwo = [
  { name: 'axiata', icon: '➤' },
  { name: 'Guardian', icon: '⌖' },
  { name: 'crantech', icon: '❂' },
  { name: 'CRE Guard', icon: '◨' },
  { name: 'klasio', icon: '✸' },
  { name: 'Affine', icon: '▮' },
  { name: 'telenor', icon: '⌁' },
]

function Logo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="mx-8 flex shrink-0 items-center gap-2 text-ink-faint">
      <span className="text-[18px]">{icon}</span>
      <span className="font-display text-[19px] font-700 tracking-tight">{name}</span>
    </div>
  )
}

export default function LogoStrip() {
  return (
    <section className="overflow-hidden bg-paper pb-20 pt-6">
      <motion.h2
        className="mb-12 text-center font-display text-[22px] font-700 text-ink sm:text-[26px]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by 200+ of the world&rsquo;s top brands
      </motion.h2>

      <div className="logo-mask flex flex-col gap-6">
        <div className="logo-track opacity-60">
          {[...rowOne, ...rowOne].map((b, i) => (
            <Logo key={`r1-${i}`} {...b} />
          ))}
        </div>
        <div className="logo-track logo-track-rev opacity-60">
          {[...rowTwo, ...rowTwo].map((b, i) => (
            <Logo key={`r2-${i}`} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}
