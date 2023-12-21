"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useMyContext } from "@/lib/Context";
import ImageCrop from "../HomeBoxComponent/ImageCrop";
import ColorSelector from "./ColorSelector";

function TabsComp() {
  const { bgColor, primaryColor, setBgColor, setBg, haveImg } = useMyContext();
const [key, setKey] = useState(1)

  const customColor =[
    {colorCode:"#f87171"},
    {colorCode:"#facc15"},
    {colorCode:"#60a5fa"},
    {colorCode:"#48dc80"},
    {colorCode:"#c084fc"},
    {colorCode:"#f472b6"},
  ]

  const handleColorBox = (code:string) => {
setBg('')
setBgColor(code)
  }


useEffect(() => {
  console.log('rerending color ..');
  
setKey(bgColor as number)
}, [bgColor, primaryColor])

  return (
    <>
      <Label htmlFor="name">Background</Label>
      <Tabs defaultValue="color" className="max-w-[315px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="color">Color</TabsTrigger>
          <TabsTrigger value="image" disabled={haveImg}>Image</TabsTrigger>
        </TabsList>
        <TabsContent value="color">
          <Card>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <div className="flex flex-row justify-between py-3">
                  {customColor.map((itm, indx) => {

                    return <div className={`h-8 w-8  rounded-md cursor-pointer hover:border`} style={{backgroundColor: itm.colorCode}} key={indx} onClick={() => handleColorBox(itm.colorCode)}> </div>
                  })}
                  
                  
                </div>
                
                 { bgColor.length > 1 && <ColorSelector key={key}
                    colorFor="BgColor"
                    defaultColor={bgColor}
                  /> }
                
                <div className="space-y-1">
                  <Label htmlFor="username">Primary Color</Label>
                  {primaryColor.length > 1 && <ColorSelector key={key}
                    colorFor="PrimaryColor"
                    defaultColor={primaryColor}
                    />}
                    </div>
              </div>
            
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="image">
          <Card>
            <CardContent className="space-y-2 ">
              <Label className="text-xs">Image(Recommended: 1200x1500)</Label>
              <div className="space-y-1">
                <ImageCrop setFor="background" />
              </div>
              <div className="space-y-1"></div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default TabsComp;
