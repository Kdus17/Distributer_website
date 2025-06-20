import React from 'react'

export default function Navbar() {
  return (
    <div className='h-20 bg-gray-200 flex justify-between px-24 items-center select-none'>
        <div>
            <img src="https://placehold.co/60x60/FF6600/FFFFFF?text=KB" className='rounded-full' alt="LOGO" />
        </div>
        <div className='flex gap-8 uppercase'>
            <a href="" className='py-1'>Home</a>
            <a href="" className='py-1'>About Us</a>
            <a href="" className='py-1'>Contact Us</a>
            <a href="" className='bg-green-600 px-2 py-1 rounded-md'>Login</a>
        </div>
    </div>
  )
}
