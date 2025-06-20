import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center
                    px-24 gap-10'>
        <img src="https://placehold.co/600x600/FF6600/FFFFFF?text=abel"
            className='h-100 w-100
            rounded-full  select-none ' alt="asd" />

        <div className='flex flex-col items-center gap-10'>
            <p className='font-semibold text-6xl'>
                Meet Leul
            </p>
            <p className='font-light text-2xl'>
                For businesses that rely on consistent supply, we offer uninterrupted wholesale distribution solutions designed for your success.
                We handle the complexities of large-scale logistics, inventory management, and timely deliveries, allowing you to focus on sales and growth,
                confident in your supply chain's strength.
            </p>
        </div>

    </div>
  )
}
