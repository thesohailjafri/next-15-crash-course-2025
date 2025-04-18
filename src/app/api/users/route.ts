import { User } from '@/types'
const SECRET_KEY = process.env.SECRET_KEY as string
const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
  {
    id: 3,
    name: 'Sam Smith',
  },
]

export async function GET() {
  return new Response(JSON.stringify({ users }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function POST(req: Request) {
  const authHeader = req.headers.get('Authorization')
  if (!authHeader || authHeader !== `Bearer ${SECRET_KEY}`) {
    return new Response('Unauthorized', { status: 401 })
  }
  const user = await req.json()
  users.push({
    id: users.length + 1,
    name: user.name,
  })

  return new Response(JSON.stringify(users), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
