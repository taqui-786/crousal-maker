"use client";

import React from "react";
import { Button } from "../ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMyContext } from "@/lib/Context";

function NextBackBtn() {
  const { count, setCount, crouLength } = useMyContext();
  const handleBtn = (type: string) => {
    let oldCount;
    if (count >= 1) {
      oldCount = type === "next" ? count + 1 : count - 1;
    }
    const nextSlide = document.getElementById(`slide${oldCount}`);
    const prevSlide = document.getElementById(`slide${count}`);

    if (nextSlide?.style !== undefined && prevSlide?.style !== undefined) {
      if (type === "next") {
        setCount((n: any) => n + 1);
        prevSlide.style.display = "none";
        nextSlide.style.display = "block";
      } else {
        setCount((n: any) => n - 1);
        nextSlide.style.display = "block";
        prevSlide.style.display = "none";
      }
    }
  };
  return (
    <div className="flex p-4 flex-row justify-center items-center gap-4">
      <Button
        onClick={() => handleBtn("back")}
        className=""
        disabled={count === 1}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <span className="text-base font-medium">Slides {count} / {crouLength}</span>
      <Button onClick={() => handleBtn("next")} disabled={count === crouLength}>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default NextBackBtn;
