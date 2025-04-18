import { Category } from '@/types'

export default async function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const categories = await fetch(
    'https://dummyjson.com/products/categories',
  ).then((res) => res.json())

  return (
    <div>
      {children}
      <h2 className="text-xl font-bold mt-8 mb-4">Explore Categories</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {categories?.map((category: Category) => (
          <li key={category.slug} className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold">{category.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
