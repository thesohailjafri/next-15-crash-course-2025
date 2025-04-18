'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const items = [
    {
      name: 'home',
      url: '/',
    },
    {
      name: 'products',
      url: '/products',
    },
    {
      name: 'users',
      url: '/users',
    },
    {
      name: 'about',
      url: '/about',
    },
  ]
  return (
    <div>
      <nav className="bg-gray-800 p-4 rounded-lg">
        <ul className="flex space-x-4">
          {items.map((item) => (
            <li
              key={item.name}
              className="hover:text-gray-300 font-semibold text-white "
            >
              <Link
                href={item.url}
                className={
                  pathname === item.url ? 'text-blue-400' : 'text-white'
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
