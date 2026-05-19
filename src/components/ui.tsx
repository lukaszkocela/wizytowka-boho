import type { CSSProperties } from 'react'
import { COLORS } from '../constants'

// ── BAG ICON ───────────────────────────────────────────
interface BagIconProps {
  color?: string
  size?: number
}

export function BagIcon({ color = COLORS.warm, size = 56 }: BagIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="22" width="36" height="28" rx="2" stroke={color} strokeWidth="1.2" />
      <path d="M18 22C18 13 38 13 38 22" stroke={color} strokeWidth="1.2" fill="none" />
      <circle cx="28" cy="36" r="5" stroke={color} strokeWidth="1" />
      <line x1="28" y1="31" x2="28" y2="41" stroke={color} strokeWidth="0.8" />
      <line x1="23" y1="36" x2="33" y2="36" stroke={color} strokeWidth="0.8" />
    </svg>
  )
}

// ── DIVIDER ────────────────────────────────────────────
interface DividerProps {
  align?: 'center' | 'left'
  style?: CSSProperties
}

export function Divider({ align = 'center', style }: DividerProps) {
  return (
    <div
      style={{
        width: 36,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${COLORS.warm}, transparent)`,
        margin: align === 'center' ? '18px auto' : '18px 0',
        ...style,
      }}
    />
  )
}

// ── SECTION HEADER ─────────────────────────────────────
interface SectionHeadProps {
  eyebrow: string
  title: string
  italic?: string
  align?: 'center' | 'left'
}

export function SectionHead({ eyebrow, title, italic, align = 'center' }: SectionHeadProps) {
  const isCenter = align === 'center'

  return (
    <div style={{ textAlign: align }}>
      <p
        style={{
          fontSize: 9,
          letterSpacing: 5,
          textTransform: 'uppercase',
          color: COLORS.warm,
          marginBottom: 10,
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 300,
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(30px, 5vw, 42px)',
          fontWeight: 300,
          color: COLORS.dark,
          lineHeight: 1.1,
        }}
      >
        {title}
        {italic && (
          <em style={{ fontStyle: 'italic', color: COLORS.brown }}> {italic}</em>
        )}
      </h2>
      <Divider align={isCenter ? 'center' : 'left'} />
    </div>
  )
}

// ── SOCIAL ICONS ───────────────────────────────────────
export const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.91 0 3.39-2.02 3.39-4.93 0-2.58-1.85-4.38-4.5-4.38-3.06 0-4.86 2.3-4.86 4.67 0 .93.36 1.92.8 2.46a.32.32 0 0 1 .07.31c-.08.34-.27 1.09-.3 1.24-.05.2-.17.24-.38.15-1.42-.66-2.3-2.75-2.3-4.43 0-3.6 2.62-6.91 7.55-6.91 3.97 0 7.05 2.83 7.05 6.6 0 3.94-2.48 7.1-5.92 7.1-1.16 0-2.24-.6-2.61-1.31l-.71 2.65c-.26.99-.95 2.23-1.41 2.98z" />
  </svg>
)

export const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1L11 6L6 11M1 6H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

export const PlusIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" stroke={COLORS.warm} strokeWidth="1" />
    <path d="M14 9V19M9 14H19" stroke={COLORS.warm} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

// ── MATERIAL ICONS ─────────────────────────────────────
export const YarnIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1" />
    <path d="M7 10C7 7.5 10 6 10 10C10 14 13 12.5 13 10" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)

export const BaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="7" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
    <path d="M7 7C7 4 13 4 13 7" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)

export const HandleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 7C4 7 7 5.5 10 9C13 12.5 16 11 16 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
    <path d="M4 13C4 13 7 11.5 10 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
  </svg>
)
