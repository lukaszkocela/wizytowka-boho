import { COLORS } from '../constants'

const NAV_ITEMS = [
  { id: 'modele',    label: 'Modele' },
  { id: 'o-mnie',   label: 'O mnie' },
  { id: 'materialy', label: 'Materiały' },
  { id: 'kontakt',  label: 'Kontakt' },
]

export function Nav() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: COLORS.dark,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 48px',
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 19,
          color: COLORS.linen,
          letterSpacing: 1,
          padding: '15px 0',
        }}
      >
        twoja marka
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex' }}>
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: COLORS.sand,
              fontSize: 10,
              letterSpacing: 3,
              textTransform: 'uppercase',
              padding: '18px 16px',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 300,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Burger — visible on mobile via inline media query workaround */}
      <button
        onClick={() => {}}
        aria-label="Menu"
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: 5,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '15px 0',
        }}
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{ display: 'block', width: 22, height: 1, background: COLORS.sand }}
          />
        ))}
      </button>
    </nav>
  )
}
