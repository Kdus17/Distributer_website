import { Box, Coffee, Settings } from 'lucide-react'
import React from 'react'
import CoffeeManagment from '../../components/CoffeeManagment'
import TradingProducts from '../../components/TradingProducts'

export default function Add() {
  return (
    <div className='min-h-screen'>
        {/**At the top */}
        <div className='flex px-24 bg-red-600 items-center py-4'>
            <div className='flex gap-4 items-center'>
                <div className='bg-white/20 rounded-full w-12 h-12 border-gray-100 border-1 flex items-center justify-center shadow-lg'>
                    <Settings className='text-white'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-white text-3xl font-semibold'>Products Administration</h1>
                    <p className='text-white'>Manage your products, services, and cafe information</p>
                </div>
            </div>
        </div>

        {/**Filters */}
        <div className='bg-red-50 flex gap-2 py-4 border-red-200 border-b-1 px-24'>
            <div className='flex bg-white justify-around  py-3 px-4 rounded-xl border-1 border-red-200 gap-4 items-center select-none'>
                <Coffee/>
                <span className=' font-semibold'>Coffee Products</span>
                <div className='bg-red-200/30 text-red-800 text-sm font-semibold rounded-full  flex justify-center items-center w-5 h-5'>
                    <span>2</span>
                </div>
            </div>
            <div className='flex bg-white justify-around  py-3 px-4 rounded-xl border-1 border-red-200 gap-4 items-center select-none'>
                <Box/>
                <span className=' font-semibold'>Trading Products</span>
                <div className='bg-red-200/30 text-red-800 text-sm font-semibold font-bold rounded-full  flex justify-center items-center w-5 h-5'>
                    <span>2</span>
                </div>
            </div>
        </div>

        <CoffeeManagment/>
        <TradingProducts/>

    </div>
  )
}
