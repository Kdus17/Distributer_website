import React from 'react'

export default function Features() {
  return (
    <div className='flex flex-row gap-10
            px-24 my-10 py-10 '>
                <div className='flex flex-col w-100 h-100 py-2 gap-10 shadow-xl
                    rounded-xl items-center border border-gray-200'>
                    <div className='flex flex-col gap-4'>
                        <p className='uppercase font-semibold'>
                        product#1
                        </p>
                        <img src="https://placehold.co/20x0/FF6600/FFFFFF?text=KB" className='select-none' alt="" />
                    </div>
                    <p className='font-light'>
                        Product descrption
                    </p>
                </div>
                <div className='flex flex-col w-100 h-100 py-2 gap-10 shadow-xl
                    rounded-xl items-center border border-gray-200'>
                    <div className='flex flex-col gap-4'>
                        <p className='uppercase font-semibold'>
                        prodcut#2
                        </p>
                        <img src="https://placehold.co/20x0/FF6600/FFFFFF?text=KB" className='select-none' alt="" />
                    </div>
                    <p className='font-light'>
                        product descrption
                    </p>
                </div>
                <div className='flex flex-col w-100 h-100 py-2 gap-10 shadow-xl
                    rounded-xl items-center border border-gray-200'>
                    <div className='flex flex-col gap-4'>
                        <p className='uppercase font-semibold'>
                        product#3
                        </p>
                        <img src="https://placehold.co/20x0/FF6600/FFFFFF?text=KB" className='select-none' alt="" />
                    </div>
                    <p className='font-light'>
                        product descrption
                    </p>
                </div>
    </div>
  )
}
