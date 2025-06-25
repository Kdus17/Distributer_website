import ErrorCard from "../assets/ErrorCard"
import { useState } from "react";
import { Clock, Locate, LocateIcon, Mail, MessageCircle,MapPin, Phone, User2 } from "lucide-react";
import Navbar from "../components/Navbar";

export const Contact = () => {
  const [formData, setFromData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    messeage:"",
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

  const validateform = () =>{
    const newerrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.firstname.trim()){
      newerrors.firstname = "Firstname is required!"
    }
    if(!formData.email.trim()){
      newerrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)){
      newerrors.email = "Invalid email!"
    }
    if(!formData.messeage.trim()){
      newerrors.messeage = "You forgot to write Your message!"
    }
    seterrors(newerrors)
  }

  return (
    <>
    <Navbar/>
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center h-100 bg-red-700 gap-6">
        <h1 className="text-6xl md:text-7xl font-bold text-white  text-shadow-md">Contact Us</h1>
        <div className="text-white flex flex-col items-center">
          <p>Ready to explore our products </p>
          <p>or discuss comphrenesive trading partnerships</p>
          <p>We are ready to support your business</p>
        </div>
      </div>


      {/**Cards */}
      <div className="bg-gray-200 flex flex-col lg:flex-row justify-center p-4 lg:px-24 gap-6">
        <div className="flex flex-col self-center md:flex-row gap-6 w-2/3 lg:w-2/5 md:h-50">
          {/**Phone Number */}
          <div className="flex flex-col w-full border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 items-center  hover:shadow-lg ">
            <div className="rounded-full bg-red-200 my-2">
              <Phone className="h-12 w-12 p-2 text-red-700"/>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold">phone</p>
              <p className="text-sm font-semibold  ">+251xxxxxxxx</p>
              <p className="text-sm font-semibold  ">+251xxxxxxxx</p>
              <p className="font-light text-sm ">Mon-Fri 8AM-6PM</p>
            </div>
          </div>
          {/**Email */}
          <div className="flex flex-col w-full border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 items-center  hover:shadow-lg ">
            <div className="rounded-full bg-red-200 my-2">
              <Mail className="h-12 w-12 p-2 text-red-700"/>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold">Email</p>
              <p className="uppercase text-sm font-semibold ">kb@gmail.com</p>
              <p className="font-light text-sm ">we respond within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col self-center md:flex-row gap-6 w-2/3 lg:w-2/5  md:h-50">
          {/**Address */}
          <div className="flex flex-col w-full  border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 hover:shadow-lg items-center ">
            <div className="rounded-full bg-red-200 my-2">
              <MapPin className="h-12 w-12 p-2 text-red-700 self-center"/>
            </div>
            <div>
            <p className="uppercase text-sm font-semibold self-center">Address</p>
            <p className="text-sm font-semibold ">Addis Ababa, Ethiopia</p>
            <p className="text-sm font semibold">Alem Building</p>
            <p className="text-sm font-light">Visit us</p>
            </div>
          </div>
          {/**Business Hours */}
          <div className="flex flex-col w-full border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 items-center hover:shadow-lg ">
            <div className="rounded-full bg-red-200 my-2">
              <Clock className="h-12 w-12 p-2 text-red-700"/>
            </div>
            <div>
            <p className="font-semibold text-sm">Business Hours</p>
            <p className="font-light text-sm">Mon-Fri 8AM-6PM</p>
            <p className="font-light text-sm">Mon-Fri 8AM-6PM</p>
            </div>
          </div>
        </div>
      </div>


      {/**Contact Form */}
        <div className="flex flex-col my-12 h-full  border border-gray-200 shadow-lg rounded-lg px-12 bg-white self-center gap-6 pb-8 pt-6">
          <div className="my-3 flex flex-col ">
            <p className="uppercase font-bold text-2xl">Send Us a Message</p>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <div className="flex flex-col gap-2">

            {/**First and Last Name */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 w-full">

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="firstname" className="font-serif font-semibold text-black select-none">Firstname</label>
                  <div className="px-1 py-1 border-2 border-gray-400 rounded-lg has-focus:border-red-500 has-focus:text-red-500 flex items-center">
                    <User2/>
                    <input type="text" name="firstname" id="firstname" 
                      className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                      placeholder="Enter your firstname" value={formData.firstname} onChange={handlechange}/>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="lastname" className="font-serif font-semibold text-black select-none">Lastname</label>
                  <div className=" py-1 px-1 border-2 border-gray-400 rounded-lg has-focus:border-red-500 has-focus:text-red-500">
                    <input type="text" name="lastname" id="lastname" 
                      className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                      placeholder="Enter your lastname" value={formData.lastname} onChange={handlechange}/>
                  </div>
                </div>
              
              </div>  
              {errors.firstname && <ErrorCard wrong={errors.firstname}/>}
            </div>           
          </div>

          {/**Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="font-serif font-semibold text-black ">Email</label>
                <div className=" py-1 px-1 border-2 border-gray-400 rounded-lg  has-focus:border-red-500 has-focus:text-red-500 flex items-center">
                  <Mail />
                  <input type="text" name="email" id="email" 
                    className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                    placeholder="Enter your email address" value={formData.email} onChange={handlechange}/>
                </div>
                {errors.email && <ErrorCard wrong={errors.email}/>}
            </div>

          {/**Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-serif font-semibold text-black ">Phone Number</label>
                <div className=" py-1 px-1 border-2 border-gray-400 rounded-lg  has-focus:border-red-500 has-focus:text-red-500 flex items-center">
                  <Phone />
                  <input type="text" name="phone" id="phone" 
                    className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                    placeholder="Enter your Phonenumber" value={formData.phone} onChange={handlechange}/>
                </div>          
          </div>

          {/**Message */}
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message" className="font-serif font-semibold text-black ">Message</label>
                <div className=" py-1 px-2   border-2 border-gray-400 rounded-lg  has-focus:border-red-500 has-focus:text-red-500 flex">
                  <MessageCircle className="self-start my-1"/>
                  <textarea rows={6} name="messeage" id="messeage" 
                    className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                    placeholder="Enter your message" value={formData.messeage} onChange={handlechange}/>
                </div>
                {errors.messeage && <ErrorCard wrong={errors.messeage}/>}
          </div>


          {/**Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700 flex justify-center items-center gap-2" onClick={validateform}> 
              {/* <LoadingCircle/> */}
              Send Message</button>
          </div>

        </div>

    </div>
    </>
  )
}
export default Contact