import { Box, Mail, X } from 'lucide-react'
import React, { useState } from 'react'
import ErrorCard from '../assets/ErrorCard'

export default function ComposeEmail({see4, setsee4}) {
  const [formData, setFromData] = useState({
    title:"",
    body:"",
  })

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
    }
  }

  const validateform = async (e) =>{
    const newerrors = {};
    if(!formData.body){
      newerrors.body = "You forgot to write the message!"
      seterrors(newerrors)
      console.log(newerrors)
    } else {
        const post_options = {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                formData
            })
        }
        const response = await fetch(`https://distributor-backend.onrender.com/local/send-email`,post_options)
        console.log(response.json())
    }
    
  }

  return (
    <div className='absolute z-100 rounded-lg w-full sm:w-2/3 lg:w-1/2  bg-white  pb-12 top-30 flex flex-col shadow-lg'>
      <div className='bg-red-600 h-20 mb-8 rounded-t-md flex justify-between px-8 items-center text-white'>
        <div className='text-xl font-bold flex items-center gap-3' >
          <Mail className='w-8 h-8'/>
            Compose Email
        </div>
        <X onClick={()=>setsee4(!see4)} className='cursor-pointer'/>
      </div>
      <div className='grid  grid-cols-2 gap-3 px-8'>
        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Title</p>
          <input type="text" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' name='title' value={formData.title} onChange={handlechange}/>
        </div>

        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold'>Body</p>
          <textarea name="body" className='p-2 border outline-none rounded-xl bg-red-100 border-red-300' id="" rows={8} value={formData.body} onChange={handlechange}></textarea>
        </div>

        <div className='col-span-2 flex gap-3 py-2' onClick={validateform}>
          <p className='text-lg font-semibold w-full border text-center rounded-xl border-red-700 bg-red-600 text-white p-2'>Send</p>
        </div>

        {errors.body && ( <div className='col-span-2'> <ErrorCard wrong={errors.body} /> </div>)}
      </div>
    </div>
  )
}
