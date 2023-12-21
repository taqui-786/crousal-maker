
import React from "react";
import TitleAndDescForm from "./TitleAndDescForm";

import NextBackBtn from "./NextBackBtn";
import HomeFormHeader from "./HomeFormHeader";
import AddImage from "./AddImage";
import TempCrousal from "../Crousals/TempCrousal";

interface HomeBoxProps{
  mySlug:string
}

const  HomeBox:React.FC<HomeBoxProps> = ({mySlug}) => {
  return (
    <div className="p-4 w-full  max-w-[78%] bg-transparent h-full flex flex-col items-center justify-center">
      <div className="p-3 h-fit w-[800px] flex bg-white  border border-input rounded-md">
        {/* LEFT SIDE  */}
        <div className="flex flex-col h-full p-3 gap-6 w-[40%]">
          <HomeFormHeader />
          <TitleAndDescForm />
            <AddImage />
        </div>
        {/* RIGHT SIDE  */}
        <div className="flex h-full items-center justify-center w-[60%] ">
    <TempCrousal templateName={mySlug}  />
    
  </div>
      </div>
            <NextBackBtn />
    </div>
  );
}

export default HomeBox;
