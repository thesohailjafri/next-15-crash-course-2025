'use client'

import { useState } from 'react'

export default function ClientCounter() {
  console.log('ClientCounter')
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Client Counter</h1>
      <p className="text-lg font-semibold">Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 ml-4"
        onClick={() => setCount(count - 1)}
      >
        Decrement Counter
      </button>
    </div>
  )
}
