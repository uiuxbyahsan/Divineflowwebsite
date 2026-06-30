import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const IconArrowRight = (p: IconProps) => (
  <svg width="20" height="20" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const IconArrowUpRight = (p: IconProps) => (
  <svg width="16" height="16" {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)
export const IconChevronDown = (p: IconProps) => (
  <svg width="16" height="16" {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)
export const IconCheck = (p: IconProps) => (
  <svg width="18" height="18" {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
export const IconClose = (p: IconProps) => (
  <svg width="18" height="18" {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
export const IconStar = (p: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z" />
  </svg>
)
export const IconMenu = (p: IconProps) => (
  <svg width="24" height="24" {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

/* Service / feature icons */
export const IconLayout = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </svg>
)
export const IconSearch = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)
export const IconBrand = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <circle cx="13.5" cy="6.5" r="1.5" />
    <circle cx="17.5" cy="10.5" r="1.5" />
    <circle cx="8.5" cy="7.5" r="1.5" />
    <circle cx="6.5" cy="12.5" r="1.5" />
    <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.4A4.2 4.2 0 0 0 22 12 10 10 0 0 0 12 2z" />
  </svg>
)
export const IconMegaphone = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="m3 11 15-5v12L3 13z" />
    <path d="M11.6 16.8 11 20H8l-.5-4M18 8.5a3 3 0 0 1 0 6" />
  </svg>
)
export const IconChart = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M3 3v18h18" />
    <path d="m7 14 3-4 3 3 5-6" />
  </svg>
)
export const IconCalendar = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
)
export const IconMap = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="m9 4 6 2 6-2v14l-6 2-6-2-6 2V6z" />
    <path d="M9 4v14M15 6v14" />
  </svg>
)
export const IconRocket = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2a2.8 2.8 0 0 0-3-3z" />
    <path d="M9 13a14 14 0 0 1 9-9 14 14 0 0 1-1 9 6 6 0 0 1-2 2l-4 1-2-2z" />
    <circle cx="15" cy="9" r="1.2" />
  </svg>
)
export const IconBook = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M19 19H6a2 2 0 0 0-2 2" />
  </svg>
)
export const IconGrad = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M12 4 2 9l10 5 10-5z" />
    <path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5" />
  </svg>
)
export const IconChat = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
  </svg>
)
export const IconPlay = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l5.5-3.5z" fill="currentColor" />
  </svg>
)
export const IconAnchor = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v13M5 12a7 7 0 0 0 14 0M5 12H3m16 0h2" />
  </svg>
)
export const IconEye = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
export const IconShield = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M12 2 4 6v6c0 4.5 3.4 7.5 8 9 4.6-1.5 8-4.5 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
export const IconTrend = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="m3 17 6-6 4 4 8-9" />
    <path d="M16 6h5v5" />
  </svg>
)
export const IconExpand = (p: IconProps) => (
  <svg width="22" height="22" {...base} {...p}>
    <path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5" />
  </svg>
)

/* Social */
export const IconFacebook = (p: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
)
export const IconInstagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...p}>
    <path d="M12 2c2.7 0 3 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.2-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c.1-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.2 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
  </svg>
)
export const IconLinkedin = (p: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" />
  </svg>
)
