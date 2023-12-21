"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CrousalShowCardProps{
    imgSrc: any
    pageLink: string
}

function CrousalShowCard({imgSrc, pageLink}:CrousalShowCardProps) {
    const router = useRouter()
    const createCrousal = () => {
        router.push(pageLink)
    }


  return (
    <div className="h-fit w-fit relative p-2 block  hover:scale-105  " >
    <Image src={imgSrc} alt="demo1" placeholder='blur' className="h-[250px] w-auto rounded-md cursor-pointer " priority loading='eager' onClick={createCrousal} /> 
  </div>
  )
}

export default CrousalShowCard