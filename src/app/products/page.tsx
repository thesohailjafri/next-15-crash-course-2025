import { Product } from '@/types'
import Link from 'next/link'

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return (
    <div>
      <h1 className="text-2xl font-bold">All Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {res?.products.map((product: Product) => (
          <li key={product.id} className="border p-4 rounded-lg">
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-700 mt-1 line-clamp-2">
                {product.description}
              </p>
              <p className="text-gray-500 mt-2 text-lg">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
