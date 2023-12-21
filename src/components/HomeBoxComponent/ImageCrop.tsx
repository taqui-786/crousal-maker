"use client";
import { useMyContext } from "@/lib/Context";
import Image, { ImageProps } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/Button";
import React, { useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/CropImage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Slider } from "@/components/ui/slider"

interface ImageCropTypes {
  setFor?: string
}

const  ImageCrop:React.FC<ImageCropTypes> = ({setFor}) => {
const {setUserImg, setBg, setMyImg} = useMyContext()



  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [src, setSrc] = useState("");
  const [x, setX] = useState(1)
  const [y, setY] = useState(1)


  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };
  
  useEffect(() => {
    if(setFor === 'banner'){
      setX(16)
      setY(9)
    }else if (setFor === 'background'){
      setX(9)
      setY(16)
    }
  },[src])
  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        src,
        croppedAreaPixels,
        rotation
      );
      // @ts-ignore
      setCroppedImage(croppedImage);
      if(setFor === 'userImg'){
        setUserImg(croppedImage)

      }else if( setFor === 'banner'){
        setMyImg(croppedImage)
      }else{
        setBg(croppedImage)
      }
       
        
    } catch (e) {
      console.error(e);
    }
  };

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
        const img: File = event?.target?.files[0];
      setSrc(URL.createObjectURL(img));
    }
  };

  const gettingReady = () => {
    setSrc('')
    setZoom(1)
    setRotation(0)
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild><Button variant={'outline'} size={'sm'} onClick={gettingReady}>Upload </Button></DialogTrigger>
        <DialogContent className=" w-fit min-w-[350px] flex flex-col items-center ">
          <DialogHeader>
            <DialogTitle>Crop</DialogTitle>
          </DialogHeader>

          { src ?
          <>
            <div className="relative w-full h-[200px]">
            <Cropper
            image={src}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={x / y}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          </div>
          <div className="p-2 flex flex-col mt-2 w-full gap-2">
            <Label>Zoom</Label>
            {/* @ts-ignore  */}
            <Slider defaultValue={[0]} min={1} max={100} step={0.1} onValueChange={setZoom} />

            </div> 
          <div className="p-2 flex flex-col mt-2 w-full gap-2">
            <Label>Rotate</Label>
            {/* @ts-ignore  */}
            <Slider defaultValue={[0]} max={100} step={1} onValueChange={setRotation} />

            </div> 
            </>: <Input type="file" onChange={selectImage} />
            
          }

          <DialogFooter>
            <DialogClose asChild>
            <Button onClick={showCroppedImage} type="button" disabled={src.length < 1}>
              Save changes
            </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageCrop;
