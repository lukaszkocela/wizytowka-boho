import { COLORS, MATERIALS } from '../constants'
import { BagIcon, SectionHead, YarnIcon, BaseIcon, HandleIcon, InstagramIcon, FacebookIcon, TikTokIcon, PinterestIcon } from './ui'

// ── SEPARATOR ──────────────────────────────────────────
export function Sep() {
  return (
    <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${COLORS.sand}, transparent)` }} />
  )
}

// ── ABOUT ──────────────────────────────────────────────
export function About() {
  return (
    <section id="o-mnie" style={{ background: COLORS.linen, padding: '80px 0' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Image placeholder */}
          <div
            style={{
              aspectRatio: '3/4',
              background: COLORS.blush,
              border: `1px solid ${COLORS.rose}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: `linear-gradient(to top, rgba(229,201,190,0.4) 0%, transparent 100%)`,
              }}
            />
            <BagIcon color={COLORS.warm} size={52} />
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

          {/* Text */}
          <div>
            <SectionHead
              eyebrow="o przedsięwzięciu"
              title="Skąd ten"
              italic="pomysł?"
              align="left"
            />
            <p style={{ marginTop: 24, fontSize: 14, color: COLORS.taupe, lineHeight: 2.1, fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
              Zauroczyły mnie skórzane akcesoria Pimotka — i od razu wiedziałam, że chcę łączyć je z ręcznym szydełkowaniem. Każda torba to osobna historia: inny splot, inny odcień naturału, inne dno.
            </p>
            <p style={{ marginTop: 12, fontSize: 14, color: COLORS.taupe, lineHeight: 2.1, fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
              Stawiam na jakość i prostotę. Żadnych syntetyków — tylko naturalne włókna i prawdziwa skóra.
            </p>

            {/* Values */}
            <div
              style={{
                display: 'flex',
                gap: 28,
                marginTop: 36,
                paddingTop: 30,
                borderTop: `1px solid ${COLORS.sand}`,
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '100%', label: 'handmade' },
                { num: 'naturalne', label: 'materiały' },
                { num: 'Pimotka', label: 'skórzane dna' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 32,
                      fontStyle: 'italic',
                      color: COLORS.brown,
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: COLORS.taupe,
                      marginTop: 4,
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── MATERIALS ──────────────────────────────────────────
const MATERIAL_ICONS = [<YarnIcon />, <BaseIcon />, <HandleIcon />]

export function Materials() {
  return (
    <section id="materialy" style={{ background: COLORS.sage, paddingBottom: 72 }}>
      <div style={{ padding: '72px 32px 0' }}>
        <SectionHead eyebrow="z czego tworzę" title="Naturalne" italic="materiały" />
      </div>

      <div
        style={{
          maxWidth: 960,
          margin: '48px auto 0',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
          background: COLORS.sage2,
        }}
      >
        {MATERIALS.map((mat, i) => (
          <div
            key={mat.name}
            style={{
              background: COLORS.sage,
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                border: `1px solid ${COLORS.sage2}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.brown,
              }}
            >
              {MATERIAL_ICONS[i]}
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 400,
                color: COLORS.dark,
              }}
            >
              {mat.name}
            </h3>
            <p
              style={{
                fontSize: 12,
                color: '#7A8070',
                lineHeight: 1.9,
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 300,
              }}
            >
              {mat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── CONTACT ────────────────────────────────────────────
const SOCIAL_ITEMS = [
  { label: 'Instagram', href: 'https://instagram.com/TWÓJ_NICK', Icon: InstagramIcon },
  { label: 'Facebook',  href: 'https://facebook.com/TWÓJ_NICK',  Icon: FacebookIcon  },
  { label: 'TikTok',   href: 'https://tiktok.com/@TWÓJ_NICK',   Icon: TikTokIcon    },
  { label: 'Pinterest', href: 'https://pinterest.com/TWÓJ_NICK', Icon: PinterestIcon },
]

export function Contact() {
  return (
    <section
      id="kontakt"
      style={{
        background: COLORS.blush,
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50%', height: '60%', borderRadius: '50%', background: 'radial-gradient(ellipse, #E4D9C4 0%, transparent 65%)', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: 0, right: '5%', width: '35%', height: '50%', borderRadius: '50%', background: 'radial-gradient(ellipse, #D6DDD0 0%, transparent 60%)', opacity: 0.4 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead eyebrow="znajdź mnie" title="Kontakt &" italic="social media" />

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, margin: '40px 0 32px' }}>
          {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 22px',
                background: COLORS.cream,
                border: `1px solid ${COLORS.sand}`,
                color: COLORS.dark,
                textDecoration: 'none',
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 300,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = COLORS.dark
                el.style.color = COLORS.linen
                el.style.borderColor = COLORS.dark
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = COLORS.cream
                el.style.color = COLORS.dark
                el.style.borderColor = COLORS.sand
              }}
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:twoj@email.pl"
          style={{
            display: 'inline-block',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(22px, 4vw, 32px)',
            fontStyle: 'italic',
            color: COLORS.brown,
            textDecoration: 'none',
            borderBottom: `1px solid ${COLORS.warm}`,
            paddingBottom: 3,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = COLORS.dark)}
          onMouseLeave={e => (e.currentTarget.style.color = COLORS.brown)}
        >
          twoj@email.pl
        </a>

        <p
          style={{
            fontSize: 11,
            color: COLORS.taupe,
            marginTop: 14,
            letterSpacing: 1,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          odpiszę najszybciej jak mogę ✦
        </p>
      </div>
    </section>
  )
}

// ── FOOTER ─────────────────────────────────────────────
export function Footer() {
  return (
    <footer
      style={{
        background: COLORS.dark,
        padding: '22px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 17,
          color: COLORS.linen,
        }}
      >
        twoja marka
      </span>
      <span
        style={{
          fontSize: 9,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: COLORS.taupe,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        handmade · boho · naturalnie
      </span>
    </footer>
  )
}
