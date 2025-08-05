import { Box, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import ErrorCard from '../assets/ErrorCard'

export default function AddTrad({see3, setsee3}) {
  const [formData, setFromData] = useState({
    productname:"",
    descrption:"",
    image:"",
    tagline:""
  })

  const [errors,seterrors] = useState({})

  const fileInputRef = useRef(null)


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Only allow images (optional, already filtered by accept)
    if (!file.type.startsWith('image/')) {
      seterrors((prev) => ({ ...prev, image: 'Please select a valid image file.' }))
      return
    }

    // Read the file as base64 string
    const reader = new FileReader()
    reader.onloadend = () => {
      setFromData((prev) => ({
        ...prev,
        image: reader.result  // base64 string
      }))
      seterrors((prev) => ({
        ...prev,
        image: ''
      }))
    }
    reader.readAsDataURL(file)
  }

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
    }
  }

  const validateform = async () =>{
    const newerrors = {};
    if(!formData.productname){
      newerrors.productname = "product name is required!"
    }
    if(!formData.descrption){
      newerrors.descrption = "You forgot to write descrption!"
    }
    seterrors(newerrors)
    const post_options = {
    method: "POST",
    headers:{
      "content-type": "application/json"
      },
      body: JSON.stringify(formData),
    }

    const response = await fetch('http://localhost:4000/local/post', post_options);
    const data = await response.json()
    console.log(data)
  }
  
  const handlesubmit = async (e) =>{
    const post_options = {
    method: "POST",
    headers:{
      "content-type": "application/json"
      },
      body: JSON.stringify(formData),
    }

    const response = await fetch('http://localhost:4000/local/post', post_options);
    const data = await response.json()
    console.log(data)
  }


  return (
    <div className='absolute z-100 rounded-lg w-full sm:w-2/3 lg:w-1/2  bg-white  pb-12 top-30 flex flex-col shadow-lg'>
      <div className='bg-red-600 h-20 mb-8 rounded-t-md flex justify-between px-8 items-center text-white'>
        <div className='text-xl font-bold flex items-center gap-3' >
          <Box className='w-8 h-8'/>
            Add Products
        </div>
        <X onClick={()=>setsee3(!see3)} className='cursor-pointer'/>
      </div>
      <div className='grid  grid-cols-2 gap-3 px-8'>
        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Product Name</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='productname' value={formData.productname} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Tagline</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='tagline' value={formData.tagline} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Descrption</p>
          
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='descrption' value={formData.descrption} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Image Upload</p>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />

          <button
            type="button"
            className="border rounded-xl p-2 bg-red-200 hover:bg-red-300 text-red-800 font-semibold"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            Choose Image
          </button>

          {errors.image && <span className='text-red-500 text-sm'>{errors.image}</span>}

          {/* Optional Image Preview */}
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="max-h-48 rounded-xl border mt-2"
            />
          )}
        </div>

        <div className='col-span-2 flex gap-3 py-2' onClick={validateform}>
          <p className='text-lg font-semibold w-full border text-center rounded-xl border-red-700 bg-red-600 text-white p-2'>Add</p>
        </div>

        {errors.productname && ( <div className='col-span-2'> <ErrorCard wrong={errors.productname} /> </div>)}
        {errors.descrption && ( <div className='col-span-2'> <ErrorCard wrong={errors.descrption} /> </div>)}
      </div>
    </div>
  )
}
