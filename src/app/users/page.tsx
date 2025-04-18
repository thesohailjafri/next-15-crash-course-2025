import { User } from '@/types'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export default async function UsersPage() {
  const res = await fetch('http:localhost:3000/api/users')
    .then((res) => res.json())
    .catch((err) => console.log(err))

  async function addUser(formData: FormData) {
    'use server'
    const name = formData.get('name')
    const user = { name }
    const res = await fetch('http:localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
      body: JSON.stringify(user),
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message)
    }
    revalidatePath('/users')
    return data
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">All Users</h1>
      <form action={addUser} className="flex flex-col gap-4 mt-4 max-w-sm">
        <h2>Add User</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Add User
        </button>
      </form>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {res?.users.map((user: User) => (
          <li key={user.id} className="border p-4 rounded-lg">
            <Link href={`/users/${user.id}`} className="block">
              <h3 className="text-lg font-bold">{user.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
