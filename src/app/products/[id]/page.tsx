import { Product } from '@/types'
import Image from 'next/image'

type Props = {
  params: Promise<{ id: string }>
}

const getProduct = async (id: string) => {
  return await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err))
}

export async function generateStaticParams() {
  const products = await fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) => res.products)
    .catch((err) => console.log(err))

  return products.map((product: Product) => ({
    id: String(product.id),
  }))
}

export async function generateMetadata({ params }: Props) {
  const id = (await params).id
  const res = await getProduct(id)
  return {
    title: res?.title,
    description: res?.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const id = (await params).id
  const res = await getProduct(id)

  return (
    <div>
      <h1 className="text-2xl font-bold mt-8 mb-4">{res?.title}</h1>
      <Image
        width={500}
        height={500}
        src={res?.thumbnail}
        alt={res?.title}
        className="w-full h-[500px] rounded-lg object-contain"
      />
    </div>
  )
}
