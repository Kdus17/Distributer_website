import { TriangleAlert } from "lucide-react";


export default function ErrorCard({wrong}) {
  return (
      <div className="flex items-center bg-red-100 text-red-800 border-2 border-red-500 px-1 py-2 rounded-md select-none animate-pulse w-full">
        <TriangleAlert className=""/>
        <span className="ml-2">{wrong}</span>
      </div>
  )
}
