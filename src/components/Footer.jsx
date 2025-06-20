import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-gray-200 flex justify-around px-24 items-center select-none'>
        <div>
            © 2025 [Your Company Name]. All Rights Reserved.
        </div>
        <div className='flex flex-col gap-2'>
            <Link to={'/'} className='py-1'>Home</Link>
            <Link to={'/products'} className='py-1'>Products</Link>
            <Link to={'/About'} className='py-1'>About Us</Link>
            <Link to={'/Contact'} className='py-1'>Contact Us</Link>
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
