import { CheckCircle2 } from 'lucide-react'

export default function SuccessCard({Success}) {
  return (
      <div className="flex items-center bg-green-100 text-green-800 border-2 border-green-500 px-1 py-2 rounded-md w-full select-none">
        <CheckCircle2 className=""/>
        <span className="ml-2">{Success}</span>
      </div>
  )
}
