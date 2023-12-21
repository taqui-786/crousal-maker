'use client'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useMyContext } from '@/lib/Context'

function FullNameHandle() {
  const {setCrousalHandle,crousalHandle} = useMyContext()

  const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
const value = event.target.value;
setCrousalHandle((v:any) => ({ ...v, ['fullname']:value}))
  }
  return (
     <div className="grid w-full max-w-sm items-center gap-1.5">
     <Label htmlFor="fullname">Your Name</Label>
     <Input type="text" id="fullname" name='fullname' placeholder="John Michle" defaultValue={crousalHandle.fullname} onChange={handleInput} />
   </div>
  )
}

export default FullNameHandle