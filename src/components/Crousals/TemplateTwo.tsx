"use client";
import { ArrowRight, Bookmark, MoveRight } from "lucide-react";
import { Antonio, Karla } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import stepPatternImg from "../../../public/stepPattern.svg";
import { useMyContext } from "@/lib/Context";



const antonio = Antonio({ subsets: ["latin"], weight: ["600"] });
const karla = Karla({ subsets: ["latin"], weight: ["400"] });



function TemplateTwo() {
  const { userImg ,SetCrousalValues, count, crousalHandle, bg, bgColor, setBgColor ,primaryColor,setShowForm } = useMyContext();

  const [templateData, setTemplateData] = useState({
    crousals: [
      {
        Title: "CONTENT PLAN STRATEGY",
        Description: null,
        firstpage: true,
      },
      {
        Title: "PASTE YOUR ARTICLE",
        Description: `Read an interesting article that you want to share with your LinkedIn audience?

        We've got you covered. Simply copy the link and paste the link to “Article to LinkedIn post” template inside Supergrow.`,
      },
      {
        Title: "SELECT THE FORMAT",
        Description: `Once you paste the link, select your preferred format.
        
        You can select from 10+ formats available at your fingertips to help you create visually appealing LinkedIn posts.`,
      },
      {
        Title: "TRY IT OUT & LET US KNOW YOUR FEEDBACK",
        Description: null,
        lastpage:true
      },
    ],
    bgColor:"#ef4444",
    primaryColor:"#272525"  ,
    haveBanners:false
  });


  useEffect(() => {
    if(count >= 1){
      const len = count - 1
      const handleShow = {
        title:templateData.crousals[len].Title !== null ? true : false, subtitle:false, description: templateData.crousals[len]?.Description !== null ? true : false
      }
      setShowForm(handleShow)
    }
  }, [count])
useEffect(() => {
  setBgColor(templateData.bgColor)
  SetCrousalValues(templateData.bgColor, templateData.primaryColor, templateData.crousals.length, true )
},[])

const testing = primaryColor || templateData.primaryColor
// CUSTOM INDX 
let indxCount = 0
  return (
    <>
    {templateData.crousals.map((val, indx)=> {
        
        indxCount = indxCount + 1;
        
        return(
      <div key={indx} id={`slide${indxCount}`} className="h-fit min-w-[400px] relative flex flex-row overflow-hidden justify-between items-center " style={
        bg.length > 1
        ? {
            backgroundImage: "url(" + bg + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : { backgroundColor: bgColor || templateData.bgColor , color: testing }
      }>
        <div className="h-[500px] py-5 flex flex-col  w-full ">
          {/* HEAEd  */}
          <div className={`flex items-center gap-3  py-4 ${val?.firstpage || val?.lastpage ? "pl-5": " pr-5 flex-row-reverse"}`}>
            <span className="flex-shrink-0 font-medium">{val?.firstpage || val?.lastpage ? crousalHandle.username : `0${count}`}</span>
            <div className="border-2 flex-grow" style={{borderColor: testing}}></div>
          </div>
          {/* TITLE  */}
          <div className="p-5 flex flex-grow flex-col item-center gap-3 justify-between"  >
            <p
              className={`flex-shrink-0 font-semibold tracking-tighter uppercase ${val?.firstpage ? "text-7xl" : "text-6xl"} ${antonio.className}`}
              style={{ color:  testing }}
            >
              <span  id={`title${indxCount}`} className="whitespace-pre-wrap">{val.Title}</span>
            </p>
            {/* DESCRIPTION  */}
            <p 
              className={`mt-1 text-sm font-normal leading-normal z-50 ${val.Description !== null ? "block" : "hidden"} ${karla.className}`}
              style={{ color:  testing }}
            >
              <span id={`description${indxCount}`} className="whitespace-pre-wrap">{val.Description}</span>
            </p>
            {/* LAST PAGE SVG  */}
            <div className={`  ${ val?.lastpage ? "flex flex-row gap-3" : 'hidden'}`}  style={{color: testing}}>
            <MoveRight className="h-14 w-14"/>
            <Bookmark className="h-14 w-14"/>
            </div>
            {/* FOOTER  */}
            <div className="w-full flex   flex-row item-center justify-between z-50">
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 relative">
                  <Image
                    src={userImg}
                    alt="img"
                    priority
                    loading="eager"
                    fill={true}
                    className="rounded-full"
                  />
                </div>
                <span className={`${antonio.className} text-lg font-normal`}>
                  {crousalHandle.fullname}
                </span>
              </div>
              <div className="p-4 rounded-full " style={{backgroundColor: testing, display: val?.lastpage ? "none" :"block" }}>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={stepPatternImg}
          alt="stepPattern"
          loading="eager"
          priority
          height={295}
          width={295}
          className="absolute right-0 bottom-0 z-40 opacity-10"
        />
        <div id={`image${indxCount}`} className="hidden"></div>
      </div>
           )
        })}
        
    </>
  );
}

export default TemplateTwo;
