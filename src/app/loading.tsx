import { Loader2 } from "lucide-react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="absolute h-screen w-full flex justify-center items-center bg-white z-50">
            <Loader2 className="h-10 w-10 text-green-500 animate-spin" />
        </div>
    )
  }