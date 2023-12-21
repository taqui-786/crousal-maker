import CrousalShowCard from "@/components/Crousals/CrousalShowCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import templateone from '../../public/template1.jpg'
import templateTwo from '../../public/template2.jpg'

export default function Home() {




  return (
   <main className="h-full w-full flex flex-row items-center justify-center">

   
<div className="">
<Card>
  <CardHeader>
    <CardTitle>Welcome to CrousalMaker</CardTitle>
    <CardDescription>Click on the template you want to create.</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-grid gap-3">
  <CrousalShowCard imgSrc={templateone} pageLink='/TemplateOne'/>
  <CrousalShowCard imgSrc={templateTwo} pageLink="/TemplateTwo" />
  </CardContent>
  
</Card>
</div>
  
   </main>
  )
}
