import { FaExclamation } from "react-icons/fa";

export default function ErrorCard({wrong}) {
  return (
      <div class="flex items-center bg-red-100 text-red-800 border-2 border-red-500 p-1 rounded-md select-none">
        <FaExclamation />
        <span class="ml-2">{wrong}</span>
      </div>
  )
}
