'use client'
import { useMyContext } from '@/lib/Context'
import Image from 'next/image'
import React from 'react'

function UserHandleCard() {
    const {crousalHandle, userImg} = useMyContext()
  return (
    <div className=" flex gap-2">
    <Image
      src={
        userImg
      }
      priority
      alt="img"
      height={50}
      width={50}
      loading="eager"
      className="rounded-full h-[50px] w-[50px] "
    />
    <div className="flex flex-col gap-[2px] items-center">
      <p className="text-base font-sans font-medium w-full text-start">{crousalHandle.fullname}</p>
      <p className="text-sm font-sans font-medium">{crousalHandle.username}</p>
    </div>
  </div>
  )
}

export default UserHandleCard