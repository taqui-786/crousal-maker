import React, { createContext, useContext, useState } from "react";
import defaultImage from '../../public/banner.png'
interface userHandletypes {
  fullname: string;
  username: string;
}
interface slideDatatypes {
  Title?: string;
  subtitle?: string;
  description?: string;
  bannerUrl?: string;
}
interface showFormTypes{
  title?: boolean;
  subtitle?: boolean;
  description?: boolean;
}
interface DataContextTypes {
  crousalHandle: userHandletypes;
  setCrousalHandle: (v: any) => void;
  count: number ;
  setCount: (n: any) => void;
  crouLength: number;
  setCrouLength: (n: number) => void;
  slideData : Array<slideDatatypes>, 
  setSlideData: (v: any) => void,
  bgColor:any,
  setBgColor: (v:any) => void,
  primaryColor:any,
  setPrimaryColor: (v:any) => void,
  banner : any, 
  setBanner: (v:any) => void,
  userImg: string, 
  setUserImg: (val: any) => void,
  myImg: any, 
  setMyImg: (v:any) => void,
  crousal: any, 
  setCrousal: (v:any) => void,
  bg:string,
  setBg: (v:any) => void
  SetCrousalValues: (BgColor:string, PrimaryColor:string, length:number, haveimage:boolean) => void,
  haveImg: boolean, 
  setHaveImg: (v:any) => void
  link:string,
  setLink:(v:any) => void,
  showForm: showFormTypes, 
  setShowForm : (v:any) => void
}

const MyContext = createContext<DataContextTypes | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [crousalHandle, setCrousalHandle] = useState<userHandletypes>({
    fullname: "John Michle",
    username: "john_michle_123",
  });
  const [count, setCount] = useState<number>(0);
  const [crouLength, setCrouLength] = useState<number>(1);
  const [bgColor, setBgColor] = useState('')
  const [bg, setBg] = useState('')
  const [primaryColor, setPrimaryColor] = useState('')
  const [secondaryColor, setSecondaryColor] = useState('')
  const [slideData, setSlideData] = useState<Array<slideDatatypes>>([]);
  const [banner, setBanner] = useState(defaultImage)
  const [haveImg, setHaveImg] = useState(false)
  const [myImg, setMyImg] = useState<string>('')
  const [link, setLink] = useState('')
  const [crousal, setCrousal] = useState()
  const [showForm, setShowForm] = useState({title:true, subtitle: true, description: true})
  const [userImg, setUserImg] = useState("https://firebasestorage.googleapis.com/v0/b/projectfriendz-45b49.appspot.com/o/images%2FLogo%20img%20me.png?alt=media&token=a6386667-06a8-45ba-8035-20604a0551e4");


  // CROUSAL VALUE SETTING FUNCTION 
  const SetCrousalValues = (BgColor:string, PrimaryColor:string, length:number, haveimage:boolean) => {
    setHaveImg(haveimage)
    setCrouLength(length)
    setBgColor(BgColor);
    setPrimaryColor(PrimaryColor);
  }
  return (
    <MyContext.Provider
      value={{
        crousalHandle, haveImg, setHaveImg, link, setLink,
        setCrousalHandle,
        count,
        setCount,
        crouLength,
        setCrouLength,showForm, setShowForm,
        slideData,bg ,SetCrousalValues ,setBg, setSlideData,bgColor, setBgColor,primaryColor, setPrimaryColor,banner, setBanner,userImg, setUserImg,myImg, setMyImg,crousal, setCrousal
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("My context must be used with in a DataProvider");
  }
  return context;
};
