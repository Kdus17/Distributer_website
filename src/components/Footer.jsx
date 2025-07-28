import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-gray-200 flex gap-4 px-24 items-center select-none flex-col'>
        <div className='text-sm md:text-lg'>
            © 2025 kingdom business All Rights Reserved.
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
            <Link to={'/'} className='py-1'>Home</Link>
            <Link to={'/products'} className='py-1'>Products</Link>
            <Link to={'/About'} className='py-1'>About Us</Link>
            <Link to={'/Contact'} className='py-1'>Contact Us</Link>
        </div>
        <div>
          kingdombusinessf5@gmail.com
        </div>
        <div>
            Providing Quality Wholesale Goods.
        </div>
    </div>
  )
}
