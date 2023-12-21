'use client'
import React from 'react'
import { Trash2 } from 'lucide-react'
import { Image as LucideImage } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageCrop from '../HomeBoxComponent/ImageCrop';
import { useMyContext } from '@/lib/Context';
function UploadImgBtn() {
  const {userImg, setUserImg} = useMyContext()
  return (
    <div className="flex flex-row justify-around items-center  w-full ">
    <Avatar>
      <AvatarImage src={userImg} alt="@shadcn" />
      <AvatarFallback><LucideImage  className="h-4 w-4" /></AvatarFallback>
    </Avatar>
    <div className="relative   ">
      <ImageCrop setFor='userImg'/>
      
    </div>
    <div className="p-1 rounded-md hover:bg-gray-50">
      <Trash2 className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => setUserImg('https://firebasestorage.googleapis.com/v0/b/projectfriendz-45b49.appspot.com/o/images%2FLogo%20img%20me.png?alt=media&token=a6386667-06a8-45ba-8035-20604a0551e4')}  />
    </div>
  </div>
  )
}

export default UploadImgBtn