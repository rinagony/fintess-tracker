'use client'
import { SessionProvider } from "next-auth/react"
import React from "react";
import Spinner from "../Spinner";

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