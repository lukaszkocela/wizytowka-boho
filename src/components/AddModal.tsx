import { useState, useEffect, type CSSProperties } from 'react'
import type { Model } from '../types'
import { COLORS, CARD_COLORS } from '../constants'

interface AddModalProps {
  open: boolean
  onClose: () => void
  onAdd: (model: Omit<Model, 'id'>) => void
  nextNum: number
}

export function AddModal({ open, onClose, onAdd, nextNum }: AddModalProps) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [tags, setTags] = useState('')
  const [color, setColor] = useState(CARD_COLORS[nextNum % CARD_COLORS.length])

  useEffect(() => {
    setColor(CARD_COLORS[nextNum % CARD_COLORS.length])
  }, [nextNum])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  function handleAdd() {
    if (!name.trim()) return
    onAdd({
      num: String(nextNum).padStart(2, '0'),
      name: name.trim(),
      desc: desc.trim() || '—',
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      color,
    })
    setName('')
    setDesc('')
    setTags('')
    onClose()
  }

  if (!open) return null

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: COLORS.cream,
    border: `1px solid ${COLORS.sand}`,
    color: COLORS.dark,
    fontFamily: "'Nunito', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    outline: 'none',
    marginTop: 6,
    borderRadius: 0,
  }

  const labelStyle: CSSProperties = {
    display: 'block',
    fontSize: 9,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: COLORS.taupe,
    fontFamily: "'Nunito', sans-serif",
    marginTop: 16,
  }

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(74,55,40,0.5)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        style={{
          background: COLORS.cream,
          border: `1px solid ${COLORS.beige}`,
          width: '100%',
          maxWidth: 460,
          padding: '44px 40px',
          position: 'relative',
          animation: 'slideUp 0.3s ease',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 14,
            right: 18,
            background: 'none',
            border: 'none',
            fontSize: 18,
            cursor: 'pointer',
            color: COLORS.taupe,
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            fontWeight: 300,
            color: COLORS.dark,
            marginBottom: 24,
          }}
        >
          Nowy <em style={{ fontStyle: 'italic', color: COLORS.brown }}>model</em>
        </h3>

        <label style={labelStyle}>Nazwa</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="np. Koszyk Boho"
          style={inputStyle}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          autoFocus
        />

        <label style={labelStyle}>Opis</label>
        <textarea
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Materiały, rozmiar, charakter..."
          rows={3}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <label style={labelStyle}>Tagi (oddzielone przecinkiem)</label>
        <input
          value={tags}
          onChange={e => setTags(e.target.value)}
          placeholder="np. bawełna, skóra"
          style={inputStyle}
        />

        <label style={{ ...labelStyle, marginBottom: 10 }}>Kolor karty</label>
        <div style={{ display: 'flex', gap: 8 }}>
          {CARD_COLORS.map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{
                width: 28,
                height: 28,
                background: c,
                border: color === c
                  ? `2px solid ${COLORS.brown}`
                  : `1px solid ${COLORS.sand}`,
                cursor: 'pointer',
                borderRadius: 2,
                transition: 'border 0.15s',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 30 }}>
          <button
            onClick={onClose}
            style={{
              padding: '12px 18px',
              background: 'transparent',
              color: COLORS.taupe,
              border: `1px solid ${COLORS.sand}`,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 10,
              letterSpacing: 2,
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Anuluj
          </button>
          <button
            onClick={handleAdd}
            style={{
              flex: 1,
              padding: 12,
              background: COLORS.dark,
              color: COLORS.linen,
              border: 'none',
              fontFamily: "'Nunito', sans-serif",
              fontSize: 10,
              letterSpacing: 3,
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = COLORS.brown)}
            onMouseLeave={e => (e.currentTarget.style.background = COLORS.dark)}
          >
            Dodaj model →
          </button>
        </div>
      </div>
    </div>
  )
}
