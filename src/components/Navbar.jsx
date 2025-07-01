import React from 'react'
import { Link } from 'react-router-dom'
import { useLightcontext } from '../LightContext' 
 function Navbar() {
    const  {togglelight} = useLightcontext()
    function Toggle(){
        togglelight()
    }
  return (
    <div className='h-20 bg-gray-100 flex justify-between px-24  sticky top-0 z-100 dark:bg-[#121212] items-center select-none'>
        <div>
            <img src="https://placehold.co/60x60/FF6600/FFFFFF?text=KB" className='rounded-full' alt="LOGO" />
        </div>

        <div className='flex gap-8 dark:text-[#E0E0E0] dark:bg-[#121212]uppercase'>

            <Link to={'/'} className='py-1 '>Home</Link>
            <Link to={'/products'} className='py-1'>Products</Link>
            <Link to={'/About'} className='py-1'>About Us</Link>
            <Link to={'/Contact'} className='py-1'>Contact Us</Link>
            <Link to={'/login'} className='bg-green-600 px-2 py-1 rounded-md'>Login</Link>
            <button onClick={Toggle}>light</button>
        </div>

    </div>
  )
}
export default Navbar