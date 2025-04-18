'use client'

import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      <button
        onClick={() => router.push('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer"
      >
        Go to Home
      </button>
    </div>
  )
}
