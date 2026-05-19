import type { Model } from '../types'
import { COLORS } from '../constants'
import { BagIcon } from './ui'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ── SINGLE CARD ────────────────────────────────────────
interface ModelCardProps {
  model: Model
  delay: number
}

export function ModelCard({ model, delay }: ModelCardProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        background: model.color,
        display: 'flex',
        flexDirection: 'column',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.filter = 'brightness(0.97)')}
      onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.filter = 'brightness(1)')}
    >
      {/* Photo placeholder */}
      <div
        style={{
          width: '100%',
          aspectRatio: '1/1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          background: `${model.color}cc`,
          borderBottom: `1px solid rgba(200,184,154,0.3)`,
        }}
      >
        <BagIcon color={COLORS.taupe} size={44} />
        <span
          style={{
            fontSize: 9,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: COLORS.warm,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          twoje zdjęcie
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          padding: '22px 22px 26px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <p
          style={{
            fontSize: 9,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: COLORS.warm,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          model {model.num}
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontWeight: 400,
            color: COLORS.dark,
          }}
        >
          {model.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: COLORS.taupe,
            lineHeight: 1.9,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 300,
          }}
        >
          {model.desc}
        </p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
          {model.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 9,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '3px 10px',
                border: `1px solid rgba(200,184,154,0.5)`,
                color: COLORS.taupe,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── GRID ───────────────────────────────────────────────
interface ModelGridProps {
  models: Model[]
}

export function ModelGrid({ models }: ModelGridProps) {
  return (
    <section id="modele" style={{ background: COLORS.cream, paddingBottom: 72 }}>
      <div style={{ padding: '72px 32px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: COLORS.warm, marginBottom: 10, fontFamily: "'Nunito',sans-serif" }}>
            kolekcja
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(30px,5vw,42px)', fontWeight: 300, color: COLORS.dark }}>
            Moje <em style={{ fontStyle: 'italic', color: COLORS.brown }}>modele</em>
          </h2>
          <div style={{ width: 36, height: 1, background: COLORS.warm, margin: '18px auto' }} />
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '48px auto 0', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 2,
            background: COLORS.sand,
          }}
        >
          {models.map((model, i) => (
            <ModelCard key={model.id} model={model} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
