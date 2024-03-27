import { SessionProvider } from "next-auth/react"
import React from "react";

interface ProviderProps {
  session?: any;
  children: React.ReactNode
}

const Provider = ({children, session}: ProviderProps) => {  
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider;