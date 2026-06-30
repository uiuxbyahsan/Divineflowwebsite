'use client'

import { useState, useEffect } from 'react'

export default function TypingText({ text }: { text: string }) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplay(text.slice(0, i))
        i++
      } else {
        setTimeout(() => {
          i = 0
        }, 1200)
      }
    }, 90)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span className="font-display text-sm font-600 text-ink">
      {display}
      <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-teal align-middle" />
    </span>
  )
}
