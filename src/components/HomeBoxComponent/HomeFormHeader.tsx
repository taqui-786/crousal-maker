"use client";
import { useMyContext } from "@/lib/Context";
import React, { useRef, useState } from "react";
import { Button } from "../ui/Button";
import {  FileDown, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import downloadImages from "@/lib/ImageToZip";


function HomeFormHeader() {
  const { count, crouLength } = useMyContext();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState<string[]>([]);
  const pdfRef = useRef(
    new jsPDF({
      unit: "pt", // Specify the unit as points
      format: [355, 480], // Set the page size
      orientation: "portrait",
    })
  );

  
const saveAsPdf = async() => {
  try {
    setLoading(true)
    const pdfWidth = pdfRef.current.internal.pageSize.getWidth();
        const pdfHeight = pdfRef.current.internal.pageSize.getHeight();
        for (let i = 0; i <= img?.length; i++) { 
          
          await pdfRef.current.addImage(img[i], "JPEG", 0, 0, pdfWidth, pdfHeight)
          if (i !== (crouLength - 1) ) pdfRef.current.addPage();
        }
  } catch (error) {
    console.error("Error converting HTML to image:", error);
  }finally{
    setLoading(false)
    pdfRef.current.save("download.pdf");

  }
}
  const convertImg = async() =>{
    setLoading(true)
    setImg([])
try {
  for (let i = 1; i <= crouLength; i++) {
    const card = document.getElementById(`slide${i}`)
    if(card?.style !== undefined) card.style.display = 'flex'
  const dataUrl = await html2canvas(
    card as HTMLElement,
    { logging:true ,useCORS: true }
  );
  const imgUrl = await dataUrl.toDataURL("image/jpeg");
  if(imgUrl) setImg((v:any) => [...v, imgUrl] )
  }
} catch (error) {
  console.log(error);
  
}finally{
  setLoading(false)
}
  }


  const saveAsImg = () => {
    downloadImages(img)
  }
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <h1 className="text-lg  font-mono font-medium">SLIDE {count}</h1>
      <div className="">
      <Dialog>
  <DialogTrigger asChild>
  <Button
        variant={"ghost"}
        // isLoading={loading}
        onClick={convertImg}
        className="p-2"
      >
        <FileDown className="h-5 w-5 " />
      </Button>
  </DialogTrigger>
  <DialogContent className="w-auto">
    <DialogHeader>
      <DialogTitle>Ready to download ?</DialogTitle>
      <DialogDescription>
       Click on the button below in which format you want to download it.
      </DialogDescription>
      <div className="flex flex-wrap gap-3 w-full relative">
      { img.map((itm, indx) => {
        return <Image key={indx} src={itm} loading="eager" priority alt="emage" height={200} width={110} className="aspect-auto"/>
      }) }
        {loading && <div className="h-full min-h-[200px] w-full absolute opacity-50 p-4 aspect-auto bg-gray-50 flex justify-center items-center "><Loader2 className="text-black h-4 w-4 animate-spin"/></div>}
        </div>
        <div className="w-full p-2 flex flex-row items-center gap-4">
          <Button isLoading={loading} onClick={saveAsImg}>Save as JPEG</Button>
          <Button isLoading={loading} onClick={saveAsPdf}>Save as PDF</Button>
        </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
      </div>
     
    </div>
  );
}

export default HomeFormHeader;
