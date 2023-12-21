"use client"
import { DataProvider } from '@/lib/Context'
import React from 'react'

function Provider({children}:{children:React.ReactNode}) {
  return (
    <DataProvider>{children}</DataProvider>
  )
}

export default Provider