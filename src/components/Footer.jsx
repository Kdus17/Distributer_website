import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-200 flex justify-around px-24 items-center select-none'>
        <div>
            © 2025 [Your Company Name]. All Rights Reserved.
        </div>
        <div className='flex flex-col gap-2'>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
        </div>
        <div>
            info@[yourcompany.com]
        </div>
        <div>
            Providing Quality Wholesale Goods.
        </div>
    </div>
  )
}
