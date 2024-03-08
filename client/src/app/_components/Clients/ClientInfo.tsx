import { ClientProps } from '@/interfaces/client'
import React from 'react'

export default function ClientInfo({client}: {client: ClientProps | null}) {
  return (
    <div>
      <h3>Client info</h3>
      {client ? <>
        Client name: {client.name}
      </> : <h3>Client doesn't exist</h3>}
    </div>
  )
}
