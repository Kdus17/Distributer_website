import { Box, Cross, Pencil, Plus, Trash, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function TradingProducts({see3, setsee3}) {


  return (
    <div className='flex flex-col px-24 py-5 min-h-screen'>
      
      {/**Head */}
      <div className='flex justify-between py-4 lg:px-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold '>Trading Products Managment</h1>
          <p className='text-gray-600'>Manage your trading products catalog</p>
        </div>
        <div className='flex items-center'>
          <div className='bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded-xl py-3 px-4 flex gap-4' onClick={()=>setsee3(!see3)}>
            <Plus />
            Add new category
          </div>
        </div>
      </div>

      {/**Cards */}
      <div className=' grid md:grid-cols-2 gap-8 lg:px-10'>

        {/**Card one */}
        <div className='h-full col-span-1 border-1 rounded-2xl relative flex flex-col p-4 gap-3'>
          <div className='flex justify-between'>

            <div className='flex gap-4 items-center'>
              <div className='bg-red-700 flex items-center justify-center h-10 w-10 rounded-md'><Box className='text-white'/></div>
              <div className='flex flex-col'>
                <h2 className='font-bold'>Office Suppiles</h2>
                <span>4 items</span>
              </div>
            </div>

            <div className='flex gap-4 items-center'>
              <div className='bg-blue-700 h-8 w-8 flex items-center justify-center rounded-md'>
                <Pencil className='text-white p-1'/>
              </div>
              <div className='bg-red-700 h-8 w-8 flex items-center justify-center rounded-md'>
                <Trash className='text-white p-1'/>
              </div>
            </div>

          </div>

          <p>Complete range</p>
          <div className='p-2 bg-red-700/30 rounded-md flex justify-between items-center'>
            <p className='font-semibold'>Premium</p>
            <X className='hover:text-red-800'/>
          </div>

          <div className='p-2 bg-red-700/30 rounded-md flex justify-center items-center self-center w-full'>Add</div>

        </div>
      </div>

    </div>
  )
}
