import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='h-20 bg-gray-200 flex justify-between px-24 items-center select-none'>
        <div>
            <img src="https://placehold.co/60x60/FF6600/FFFFFF?text=KB" className='rounded-full' alt="LOGO" />
        </div>
        <div className='flex gap-8 uppercase'>
            <Link to={'/'} className='py-1'>Home</Link>
            <Link to={'/About'} className='py-1'>About Us</Link>
            <Link to={'/Contact'} className='py-1'>Contact Us</Link>
            <Link to={'/login'} className='bg-green-600 px-2 py-1 rounded-md'>Login</Link>
        </div>
    </div>
  )
}
