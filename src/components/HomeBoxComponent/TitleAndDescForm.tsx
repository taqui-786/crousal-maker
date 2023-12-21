'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useMyContext } from '@/lib/Context'
import { Button } from '../ui/Button'

function TitleAndDescForm() {
  const { count,crouLength} = useMyContext()
const [box, setBox] = useState<React.ReactElement | null>(null);
const [values, setValues] = useState({
  title:"please wait...", subtitle:"please wait...", description:"please wait..."
})

  
  useEffect(() => {
const Title = document.getElementById(`title${count}`)?.innerText as string
const subtitle = document.getElementById(`subtitle${count}`)?.innerText as string
const description = document.getElementById(`description${count}`)?.innerText as string
const newData = {
  title:Title, subtitle:subtitle, description:description
}
setValues(newData)

  },[count,crouLength])

  const handleInput = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name
    const value = event.target.value
    const data = document.getElementById(`${name}${count}`)
    if(data?.innerHTML !== undefined) data.innerHTML = value
    setValues(() => ({
      ...values, [name]:value
    }))
    

  }

  return (
   <>
   
     { values?.title && <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="title">Title</Label>
      <Input type="text" name='title' id="title" placeholder="title..." value={values.title} onChange={handleInput} />
    </div>}
     { values?.subtitle && <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="subtitle">Subtitle</Label>
      <Textarea  name='subtitle' id="subtitle" placeholder="subtitle..." className='h-fit' value={values.subtitle} onChange={handleInput}/>
    </div>}
   {values?.description && <div className="grid w-full gap-1.5">
      <Label htmlFor="description">Description</Label>
      <Textarea placeholder="Type your description here." name='description' id="description"  className='resize-none' value={values.description} onChange={handleInput}/>
    </div>}

  
   </>
  )
}

export default TitleAndDescForm