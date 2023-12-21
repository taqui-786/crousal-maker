'use client'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useMyContext } from '@/lib/Context'

function UsernameHandle() {
  const {setCrousalHandle, crousalHandle} = useMyContext()

  const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
const value = event.target.value;
setCrousalHandle((v:any) => ({ ...v, ['username']:value}))
  }
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="username">Handle</Label>
    <Input type="text" id="username" name='username' placeholder="@John_Michle" defaultValue={crousalHandle.username} onChange={handleInput} />
  </div>
  )
}

export default UsernameHandle