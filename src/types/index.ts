// ============================================================
// DIGITAL MARKETPLACE — TypeScript Interfaces
// ============================================================

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  image: string
  categoryId: number
  categoryName?: string
  badge?: 'HOT' | 'SALE' | 'NEW' | 'BEST'
  discount?: number
  rating?: number
  soldCount?: number
  provider?: string
  inStock: boolean
}

export interface Category {
  id: number
  name: string
  slug: string
  icon: string
  color: string
  productCount: number
  image?: string
}

export interface SliderItem {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  gradient?: string
}

export interface NewsArticle {
  id: number
  title: string
  slug: string
  excerpt: string
  content?: string
  thumbnail: string
  author: Author
  publishedAt: string
  category: string
  readTime?: number
}

export interface Author {
  name: string
  avatar: string
}

export interface FeatureTag {
  id: number
  icon: string
  title: string
  description: string
}

export interface NavItem {
  label: string
  icon: string
  to: string
  badge?: string
}

export interface FooterLink {
  label: string
  to: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
