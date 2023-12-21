"use client";
import { useMyContext } from "@/lib/Context";
import React, { Suspense, useEffect, useState } from "react";




interface TempCrousalProps{
  templateName:string
}

const TempCrousal:React.FC<TempCrousalProps> = ({templateName}) => {
  const [MyTemplate, setMyTemplate] = useState<React.ReactElement | null>(null)

const {setCount, setLink} = useMyContext()



const importTemplate = async() => {
  setCount(1)

  try {
    
  
  const Component = await import(`./${templateName}`)
  const Template = Component.default
  setMyTemplate(<Template/>)
} catch (error) {
    throw new Error('Please go to home page and select template again...')
}
}


useEffect(() => {
  importTemplate()
  // setLink(templateName)

  // WINDOW RELOAD ALERT FUCTION 
  const handleBeforeUnload = (event:BeforeUnloadEvent) => {
    const message = 'You will be Re-directed to home page!';
    event.returnValue = message; // Standard for most browsers
    return message; // For some older browsers
  };

  // Add the event listener when the component mounts
  window.addEventListener('beforeunload', handleBeforeUnload);

  // Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };

},[templateName])
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div
        className="h-fit w-[400px] flex flex-row overflow-hidden justify-between items-center relative"
      >
     {MyTemplate}
      </div>
    </Suspense>
  );
}

export default TempCrousal;
