export interface Model {
  id: number
  num: string
  name: string
  desc: string
  tags: string[]
  color: string
}

export interface SocialLink {
  label: string
  href: string
  icon: React.ReactNode
}
