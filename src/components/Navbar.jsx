import React from 'react'

export default function Navbar() {
  return (
    <div className='h-20 bg-red-900 flex justify-around'>
        <div>
            <img src="https://placehold.co/100x100/FF6600/FFFFFF?text=abel" alt="LOGO" />
        </div>
        <div className='flex gap-4'>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href=""></a>
        </div>
    </div>
  )
}
