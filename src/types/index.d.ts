export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type Category = {
  slug: number
  name: string
  url: string
}

export type User = {
  id: number
  name: string
}
