import React from "react";
import { Label } from "../ui/label";
import UploadImgBtn from "./UploadImgBtn";


function ProfilePicComp() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Profile Pic</Label>
     <UploadImgBtn/>
    </div>
  );
}

export default ProfilePicComp;
