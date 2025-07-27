import { Box, X } from 'lucide-react'
import React from 'react'

export default function AddTrad({see3, setsee3}) {
  return (
    <div className='absolute z-100 rounded-lg w-full sm:w-2/3 lg:w-1/2  bg-white  pb-12 top-30 flex flex-col shadow-lg'>
      <div className='bg-red-600 h-20 mb-8 rounded-t-md flex justify-between px-8 items-center text-white'>
        <div className='text-xl font-bold flex items-center gap-3' >
          <Box className='w-8 h-8'/>
            Add Products
        </div>
        <X onClick={()=>setsee3(!see3)} className='cursor-pointer'/>
      </div>
      <div className='grid  md:grid-cols-2 gap-3 px-8'>
        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Product Name</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300'/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Descrption</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300'/>
        </div>

        <div className='col-span-2 flex gap-3 py-2'>
          <p className='text-lg font-semibold w-full border text-center rounded-xl border-red-700 bg-red-600 text-white p-2'>Add</p>
        </div>
      </div>
    </div>
  )
}
