import React from 'react'

export default function CallToAction() {
  return (
    <div className='mx-48 px-24 my-10 py-20 flex flex-col items-center border border-gray-200 shadow-md rounded-md text-center'>
        <div className='font-bold text-4xl'>
            Start Your Retail Partnership
        </div>

        <div className='font-light text-2xl px-10 py-10'>
            Ready to elevate your inventory and boost your sales? When you start your retail partnership with us, you gain more than just products – you gain a dedicated partner invested in your success.
             Enjoy preferred pricing, a diverse selection, and the support you need to meet your customers' demands.
        </div>
        <div className='flex justify-around w-1/2'>
            <button className='bg-green-400 px-2 py-2 rounded-md uppercase shadow-md transition duration-100 ease-in-out
            hover:-translate-y-1 cursor-pointer'>become a retailer</button>
            <button 
            className='bg-blue-400 px-2 py-2 rounded-md uppercase shadow-md transition duration-100 ease-in-out
            hover:-translate-y-1 cursor-pointer'>contact us</button>
        </div>
    </div>
  )
}
