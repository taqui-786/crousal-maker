import HomeBox from "@/components/HomeBoxComponent/HomeBox";
import Slidebar from "@/components/slidebarComponents/Slidebar";
import React from "react";

function page({ params }: { params: { slug: string } }) {
  // console.log(params.slug);
  const param = params.slug
  return (
    <main className="h-full w-full flex flex-row items-center">
      <Slidebar />
      <HomeBox mySlug={param } />
    </main>
  );
}

export default page;
