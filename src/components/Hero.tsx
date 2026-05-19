import { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import { BagIcon, ArrowIcon } from './ui'

interface HeroProps {
  onScrollToModele: () => void
}

export function Hero({ onScrollToModele }: HeroProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        background: COLORS.linen,
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft gradient blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '50%', height: '60%', borderRadius: '50%', background: 'radial-gradient(ellipse, #F7F2EA 0%, transparent 70%)', opacity: 0.8 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '40%', height: '50%', borderRadius: '50%', background: 'radial-gradient(ellipse, #D6DDD0 0%, transparent 65%)', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '5%', right: '20%', width: '30%', height: '40%', borderRadius: '50%', background: 'radial-gradient(ellipse, #EEDDD5 0%, transparent 60%)', opacity: 0.45 }} />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 600,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <p
          style={{
            fontSize: 10,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: COLORS.warm,
            marginBottom: 20,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          handmade crochet · pimotka
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(56px, 10vw, 88px)',
            fontWeight: 300,
            lineHeight: 1,
            color: COLORS.dark,
            letterSpacing: 1,
          }}
        >
          twoja
          <br />
          <em style={{ fontStyle: 'italic', color: COLORS.brown }}>marka</em>
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            marginTop: 22,
            flexWrap: 'wrap',
          }}
        >
          {['szydełkowe torby', 'akcesoria', 'boho'].map((t, i) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: COLORS.taupe,
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                {t}
              </span>
              {i < 2 && (
                <span style={{ color: COLORS.rose, fontSize: 8 }}>◆</span>
              )}
            </span>
          ))}
        </div>

        <p
          style={{
            marginTop: 28,
            fontSize: 15,
            color: COLORS.taupe,
            maxWidth: 400,
            margin: '28px auto 0',
            lineHeight: 2,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Ręcznie robione torby z naturalnych włókien i skórzanych akcesoriów. Każda jest inna — szyta z miłości do rzemiosła.
        </p>

        <button
          onClick={onScrollToModele}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 36,
            padding: '14px 36px',
            background: COLORS.dark,
            color: COLORS.linen,
            border: 'none',
            cursor: 'pointer',
            fontSize: 10,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 300,
            transition: 'background 0.25s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = COLORS.brown)}
          onMouseLeave={e => (e.currentTarget.style.background = COLORS.dark)}
        >
          <ArrowIcon />
          Zobacz modele
        </button>

        {/* Photo placeholder */}
        <div
          style={{
            marginTop: 52,
            width: '100%',
            maxWidth: 420,
            aspectRatio: '4/3',
            background: COLORS.beige,
            border: `1px solid ${COLORS.sand}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            margin: '52px auto 0',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.3s',
          }}
        >
          <BagIcon color={COLORS.warm} size={52} />
          <span
            style={{
              fontSize: 9,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: COLORS.warm,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            twoje główne zdjęcie
          </span>
        </div>
      </div>
    </section>
  )
}
