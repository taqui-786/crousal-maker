import React from "react";

import FullNameHandle from "./FullNameHandle";
import ProfilePicComp from "./ProfilePicComp";
import UsernameHandle from "./UsernameHandle";
import TabsComp from "./TabsComp";
function Slidebar() {
  return (
    <div className="h-screen relative w-[322px] overflow-hidden bg-white border-r py-4 px-3 flex flex-col gap-6">
      <FullNameHandle />
      <ProfilePicComp />
      <UsernameHandle />
      <TabsComp/>
    </div>
    
  );
}

export default Slidebar;
