import { Edit, Plus, Search, Trash } from 'lucide-react'
import React from 'react'

export default function CoffeeManagment({setsee2, see2}) {
  return (
    <div className='flex flex-col px-24 py-5 min-h-screen'>
      
      {/**Head */}
      <div className='flex justify-between py-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold '>Coffee Products Managment</h1>
          <p className='text-gray-600'>Manage your premium Ethiopian coffee product catalog</p>
        </div>
        <div className='flex items-center'>
          <div className='bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded-xl py-3 px-4 flex gap-4' onClick={()=>setsee2(!see2)}>
            <Plus/>
            Add new coffee
          </div>
        </div>
      </div>

      {/**Search */}
      <div className='border-1 border-red-100 flex p-6 rounded-2xl w-full gap-3 shadow-lg mb-10'>
        <div className='flex w-4/5 border-1 py-3 px-2 rounded-xl gap-3 border-red-300 bg-red-50'>
          <Search className='text-red-400'/>
          <input type='' className='w-full outline-none placeholder-red-400' placeholder='Search Coffee Products'/>
        </div>
        <div className='flex gap-3'>
          <select name="grade" id="grade" className='bg-red-50 rounded-xl p-2 border-1 border-red-300 outline-none'>
            <option value="All">All grades</option>
            <option value="grade-1">Grade 1</option>
            <option value="grade-2">Grade 2</option>
            <option value="grade-3">Grade 3</option>
          </select>

          <select name="region" id="region" className='bg-red-50 rounded-xl p-2 border-1 border-red-300 outline-none'>
            <option value="All">All region</option>
            <option value="region-1">region 1</option>
            <option value="region-2">region 2</option>
            <option value="region-3">region 3</option>
          </select>

        </div>
      </div>

      {/**Cards */}
      <div className=' grid md:grid-cols-2 gap-8 relative'>

        {/**Card 1 */}
        <div className='h-full col-span-1 border-1 rounded-2xl relative flex flex-col'>
          {/**Symbols */}
          <span className='absolute top-2 left-4 border-1 bg-red-500 p-1 rounded-full text-white'>
            <Edit className='p-1'/>
          </span>
          <span className='absolute top-2 left-13 border-1 bg-red-500 p-1 rounded-full text-white'>
            <Trash className='p-1'/>
          </span>
          <span className='absolute top-2 right-4  bg-amber-300 px-4  rounded-full font-semibold'>
            Grade 1
          </span>

        <img src="https://images.app.goo.gl/D6PhtQn9d46L34ud9"
            className='w-full h-48  select-none bg-black rounded-t-2xl mb-2' alt="asd" />
          {/**The Rest */}
        <div className='p-4 flex flex-col'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-lg'>Name</h1>
            <p>Name</p>
          </div>

          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Flavor</h1>
              <p>Name</p>
            </div> 
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Processing</h1>
              <p>Name</p>
            </div> 
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Altitude</h1>
              <p>Name</p>
            </div> 
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Quality</h1>
              <p>Name</p>
            </div> 

            <div className=' col-span-2 py-2'>
              <p>Renowned for its bright acidity and complex floral notes, our Yirgacheffe coffee represents the pinnacle of Ethiopian coffee excellence.</p>
            </div> 
          </div>
        </div>
        
          
        </div>
        

        {/**Cards 2 */}
        <div className='h-full col-span-1 border-1 rounded-2xl relative'>
          {/**Symbols */}
          <span className='absolute top-2 left-4 border-1 bg-red-500 p-1 rounded-full text-white'>
            <Edit className='p-1'/>
          </span>
          <span className='absolute top-2 left-13 border-1 bg-red-500 p-1 rounded-full text-white'>
            <Trash className='p-1'/>
          </span>
          <span className='absolute top-2 right-4  bg-amber-300 px-4  rounded-full font-semibold'>
            Grade 1
          </span>
        <img src="https://images.app.goo.gl/D6PhtQn9d46L34ud9"
            className='w-full h-48 select-none bg-black rounded-t-2xl' alt="asd" />

          {/**The Rest */}
        <div className='p-4 flex flex-col'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-lg'>Name</h1>
            <p>Name</p>
          </div>

          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Flavor</h1>
              <p>Name</p>
            </div> 
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Processing</h1>
              <p>Name</p>
            </div> 
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Altitude</h1>
              <p>Name</p>
            </div> 
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-lg'>Quality</h1>
              <p>Name</p>
            </div> 

            <div className=' col-span-2 py-2'>
              <p>Renowned for its bright acidity and complex floral notes, our Yirgacheffe coffee represents the pinnacle of Ethiopian coffee excellence.</p>
            </div> 
          </div>
        </div>

        </div>
        
      </div>
    </div>
  )
}
