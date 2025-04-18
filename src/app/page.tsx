import ClientCounter from '@/components/ClientCounter'
import ServerMessage from '@/components/ServerMessage'

export default function Home() {
  return (
    <div className="">
      <ServerMessage />
      <ClientCounter />
    </div>
  )
}
