'use client'

import { useState } from 'react'
import { IconArrowRight, IconClose } from './Icons'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="relative z-[60] bg-teal-50 text-center">
      <div className="container-x flex items-center justify-center gap-2 py-2.5 text-[13px] text-ink-soft">
        <span>New: Free 30-minute strategy sessions for Q3.</span>
        <a href="#contact" className="inline-flex items-center gap-1 font-semibold text-teal-600 hover:underline">
          Claim yours <IconArrowRight className="h-3.5 w-3.5" />
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="absolute right-4 text-ink-faint transition-colors hover:text-ink"
        >
          <IconClose className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
