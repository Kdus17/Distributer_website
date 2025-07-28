import { Coffee, X } from 'lucide-react'
import React, { useState } from 'react'
import ErrorCard from '../assets/ErrorCard'

export default function AddCoffee({setsee2, see2}) {

  const [formData, setFromData] = useState({
    productname:"",
    origin:"",
    flavor:"",
    method:"",
    altitude:"",
    grade:"",
    image:"",
    cat:"",
    descrption:"",
    
  })

  const [some, setsome] = useState(false)
  const [errors,seterrors] = useState({})

  const handlechange = (e) =>{
    const {name,value} = e.target;
    setFromData((prev)=>({
      ...prev,
      [name]:value
    }))
      if(errors[name]){
      seterrors((prev)=>({
        ...prev,
        [name]: "",
      }))
      setsome(false)
    }
  }

  const validateform = () =>{
    const newerrors = {};
    if(!formData.productname.trim()){
      newerrors.productname = "product name is required!"
    }
    if(!formData.origin.trim()){
      newerrors.origin = "You forgot to write descrption!"
    }
    if(!formData.flavor.trim()){
      newerrors.flavor = "product name is required!"
    }
    if(!formData.method.trim()){
      newerrors.method = "You forgot to write descrption!"
    }    
    if(!formData.altitude.trim()){
      newerrors.altitude = "product name is required!"
    }
    if(!formData.grade.trim()){
      newerrors.grade = "You forgot to write descrption!"
    }    
    if(!formData.image.trim()){
      newerrors.image = "product name is required!"
    }
    if(!formData.cat.trim()){
      newerrors.cat = "You forgot to write descrption!"
    }
    if(!formData.descrption.trim()){
      newerrors.descrption = "You forgot to write descrption!"
    }
    seterrors(newerrors)
    setsome(true)
  }
  return (
    <div className='absolute z-100 rounded-lg w-full sm:w-2/3 lg:w-1/2  bg-white  pb-12 top-30 flex flex-col shadow-lg'>
      <div className='bg-red-600 h-20 mb-8 rounded-t-md flex justify-between px-8 items-center text-white'>
        <div className='text-xl font-bold flex items-center gap-3' >
          <Coffee className='w-8 h-8'/>
            Add Coffee Products
        </div>
        <X onClick={()=>setsee2(!see2)} className='cursor-pointer'/>
      </div>
      <div className='grid  md:grid-cols-2 gap-3 px-8'>
        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Product Name</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='productname' value={formData.productname} onChange={handlechange}/>
        </div>

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Origin</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='origin' value={formData.origin} onChange={handlechange}/>
        </div>

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Flavor Profile</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='flavor' value={formData.flavor} onChange={handlechange}/>
        </div>

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Processing Method</p>
          <select type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='method' value={formData.method} onChange={handlechange}>
           <option value="">Select Processing</option>
           <option value="Washed">Washed</option>
           <option value="Natural">Natural</option>
           <option value="Honey">Honey</option>
          </select>
        </div>

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Altitude</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='altitude' value={formData.altitude} onChange={handlechange}/>
        </div>

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Grade</p>
          <select type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='grade' value={formData.grade} onChange={handlechange}>
              <option value="">Select Grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
          </select>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Image Url</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='image' value={formData.image} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Price Category</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='cat' value={formData.cat} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Descrption</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='desc' value={formData.desc} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex gap-3 py-2'>
          <p className='text-lg font-semibold w-full border text-center rounded-xl border-red-700 bg-red-600 text-white p-2' onClick={validateform}>Add</p>
        </div>
        
        {some && <div className='col-span-2'><ErrorCard wrong="Incomplete form "/></div>}
      </div>
    </div>
  )
}
