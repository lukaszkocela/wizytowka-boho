import type { Model, SocialLink } from './types'

export const COLORS = {
  cream:  '#F7F2EA',
  linen:  '#EFE8D8',
  beige:  '#E4D9C4',
  sand:   '#D6C9B0',
  warm:   '#C8B89A',
  blush:  '#EEDDD5',
  rose:   '#E5C9BE',
  dusty:  '#D4B5A8',
  sage:   '#D6DDD0',
  sage2:  '#C4CFC0',
  taupe:  '#9E8E7E',
  brown:  '#7A6150',
  dark:   '#4A3728',
  text:   '#3D2E22',
} as const

export const CARD_COLORS = [
  '#EFE8D8',
  '#EEDDD5',
  '#D6DDD0',
  '#E4D9C4',
  '#E8DECE',
  '#DDD5CC',
] as const

export const INITIAL_MODELS: Model[] = [
  {
    id: 1,
    num: '01',
    name: 'Torba Boho Mini',
    desc: 'Bawełna ekru, skórzane dno Pimotka ⌀20 cm, krótkie rączki ze skóry naturalnej.',
    tags: ['bawełna', 'skóra', 'mini'],
    color: CARD_COLORS[0],
  },
  {
    id: 2,
    num: '02',
    name: 'Shopper Naturalny',
    desc: 'Gruby sznurek bawełniany w naturalnym ekru, długie rączki, obszerne wnętrze.',
    tags: ['sznurek', 'skóra', 'shopper'],
    color: CARD_COLORS[1],
  },
  {
    id: 3,
    num: '03',
    name: 'Koszyk Plażowy',
    desc: 'Raffia i bawełna, bambusowe uchwyty, lekka konstrukcja idealna na lato.',
    tags: ['raffia', 'bambus', 'lato'],
    color: CARD_COLORS[2],
  },
]

export const SOCIALS: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/TWÓJ_NICK',
    icon: null, // ustawione w komponencie
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/TWÓJ_NICK',
    icon: null,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@TWÓJ_NICK',
    icon: null,
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com/TWÓJ_NICK',
    icon: null,
  },
]

export const MATERIALS = [
  {
    name: 'Bawełna & sznurek',
    desc: 'Miękka przędza bawełniana i gruby sznurek w naturalnych odcieniach — ekru, beż, biel.',
  },
  {
    name: 'Dna Pimotka',
    desc: 'Skórzane okrągłe i owalne podstawy — trwałe, eleganckie, nadające torbie formę.',
  },
  {
    name: 'Rączki & uchwyty',
    desc: 'Skórzane rączki i bambusowe uchwyty Pimotka — dopasowane do charakteru każdej torby.',
  },
]
