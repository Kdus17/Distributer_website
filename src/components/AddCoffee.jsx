import { Coffee, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import ErrorCard from '../assets/ErrorCard'
import SuccessCard from '../assets/SuccessCard'

export default function AddCoffee({ setsee2, see2 }) {
  const [status, setStatus] = useState(null)
  const [formData, setFromData] = useState({
    productname: "",
    origin: "",
    profile: "",
    altitude: "",
    grade: "",
    image: "",
    cat: "",
    descrption: "",
    processing: ""
  })

  const [some, setsome] = useState(false)
  const [errors, seterrors] = useState({})
  const fileInputRef = useRef(null)


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Only allow images (optional, already filtered by accept)
    if (!file.type.startsWith('image/')) {
      seterrors((prev) => ({ ...prev, image: 'Please select a valid image file.' }))
      setsome(true)
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
      setsome(false)
    }
    reader.readAsDataURL(file)
  }

  const handlechange = (e) => {
    const { name, value } = e.target
    setStatus(null)
    setFromData((prev) => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      seterrors((prev) => ({
        ...prev,
        [name]: ""
      }))
      setsome(false)
    }
  }

  const validateform = () => {
    const newerrors = {}
    if (!formData.productname.trim()) newerrors.productname = "Product name is required!"
    if (!formData.origin.trim()) newerrors.origin = "Origin is required!"
    if (!formData.profile.trim()) newerrors.profile = "Flavor profile is required!"
    if (!formData.processing.trim()) newerrors.processing = "Processing method is required!"
    if (!formData.altitude.trim()) newerrors.altitude = "Altitude is required!"
    if (!formData.grade.trim()) newerrors.grade = "Grade is required!"
    if (!formData.image.trim()) newerrors.image = "Image URL is required!"
    if (!formData.cat.trim()) newerrors.cat = "Price category is required!"
    if (!formData.descrption.trim()) newerrors.descrption = "Description is required!"

    seterrors(newerrors)
    setsome(Object.keys(newerrors).length > 0)

    return Object.keys(newerrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validateform()
    if (!isValid) return

    const post_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }

    try {
      const response = await fetch('https://distributor-backend.onrender.com/local/poster', post_options)
      const data = await response.json()
      
      console.log(data)

      // Reset form after success
      setFromData({
        productname: "",
        origin: "",
        profile: "",
        altitude: "",
        grade: "",
        image: "",
        cat: "",
        descrption: "",
        processing: ""
      })
      setsee2(false)
      setStatus("success")
      setTimeout(() => {
        setStatus(null)
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      setTimeout(() => {
        setStatus(null)
      }, 3000);
    }
  }

  return (
    <div className='absolute z-100 rounded-lg w-full sm:w-2/3 lg:w-1/2 bg-white dark:bg-gray-700 pb-12 top-30 flex flex-col shadow-lg'>
      <div className='bg-red-600 dark:bg-gray-900 h-20 mb-8 rounded-t-md flex justify-between px-8 items-center text-white'>
        <div className='text-xl font-bold flex items-center gap-3'>
          <Coffee className='w-8 h-8' />
          Add Coffee Products
        </div>
        <X onClick={() => setsee2(!see2)} className='cursor-pointer' />
      </div>

      <form className='grid md:grid-cols-2 gap-3 px-8' onSubmit={handleSubmit}>
        {[
          { label: "Product Name", name: "productname" },
          { label: "Origin", name: "origin" },
          { label: "Flavor Profile", name: "profile" },
          { label: "Altitude", name: "altitude" },
          { label: "Image URL", name: "image", colSpan: 2 },
          { label: "Price Category", name: "cat", colSpan: 2 },
          { label: "Description", name: "descrption", colSpan: 2 }
        ].map(({ label, name, colSpan }) => (
          <div key={name} className={`col-span-2 md:col-span-${colSpan || 1} flex flex-col py-2 gap-2`}>
            <p className='text-lg font-semibold dark:text-gray-300'>{label}</p>
            <input
              type="text"
              className='p-2 border outline-none rounded-xl bg-red-100 border-red-300'
              name={name}
              value={formData[name]}
              onChange={handlechange}
            />
            {errors[name] && <span className='text-red-500 text-sm'>{errors[name]}</span>}
          </div>
        ))}

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold dark:text-gray-300'>Processing Method</p>
          <select
            className='p-2 border outline-none rounded-xl bg-red-100 border-red-300 '
            name='processing'
            value={formData.processing}
            onChange={handlechange}
          >
            <option value="">Select Processing</option>
            <option value="Washed">Washed</option>
            <option value="Natural">Natural</option>
            <option value="Honey">Honey</option>
          </select>
          {errors.processing && <span className='text-red-500 text-sm'>{errors.processing}</span>}
        </div>

        <div className='col-span-2 md:col-span-1 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold dark:text-gray-300'>Grade</p>
          <select
            className='p-2 border outline-none rounded-xl bg-red-100 border-red-300'
            name='grade'
            value={formData.grade}
            onChange={handlechange}
          >
            <option value="">Select Grade</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
          </select>
          {errors.grade && <span className='text-red-500 text-sm'>{errors.grade}</span>}
        </div>
        <div className='col-span-2 flex flex-col py-2 gap-2'>
          <p className='text-lg font-semibold dark:text-gray-300'>Image Upload</p>

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

        <div className='col-span-2 flex gap-3 py-2'>
          <button type='submit' className='text-lg font-semibold w-full border text-center rounded-xl border-red-700 bg-red-600 text-white p-2'>
            Add
          </button>
        </div>

        {some && (
          <div className='col-span-2'>
            <ErrorCard wrong="Incomplete form" />
          </div>
        )}
      </form>
      {status === "success" && <SuccessCard Success="Successfully Added" />}
      {status === "error" && <ErrorCard wrong="Failed to Add" />}
    </div>
  )
}
