import { Plus } from 'lucide-react'
import React from 'react'

export default function CoffeeManagment() {
  return (
    <div className='flex flex-col px-24 py-4 bg-red-600 min-h-screen'>
      
      {/**Head */}
      <div className='flex justify-between'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold text-white'>Coffee Products Managment</h1>
          <p className='text-white'>awdoa ppisand inwd niad i</p>
        </div>
        <div className='flex items-center'>
          <div className='bg-red-50 text-red-600 cursor-pointer hover:bg-red-200 rounded-xl py-2 px-4 flex gap-4'>
            <Plus/>
            Add new coffee
          </div>
        </div>
      </div>

      {/**Search */}
      <div className=''>
        
      </div>
    </div>
  )
}
