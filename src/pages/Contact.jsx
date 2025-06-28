import ErrorCard from "../assets/ErrorCard"
import { useState } from "react";
import { Clock, Locate, LocateIcon, Mail, MessageCircle,MapPin, Phone, User2 } from "lucide-react";
import Navbar from "../components/Navbar";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

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

    const variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

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
    
    <div className="flex flex-col min-h-screen ">
      <div className="relative flex flex-col justify-center px-8 items-center h-100 bg-gradient-to-r  from-red-700 to-red-800 gap-6 dark:from-black dark:to-gray-600">
        <h1 className="text-6xl md:text-7xl font-bold text-white  relative top-20 text-shadow-md">Contact Us</h1>
        <div className="text-white flex flex-col items-center relative top-20 gap-4">
          <p>Ready to explore our premium Ethiopian products</p>
          <p>or discuss comprehensive trading partnerships?</p>
          <p>We are ready to support your business growth</p>
        </div>
        <div className="relative bottom-40 right-60 h-24 w-24  bg-white rounded-full opacity-15"></div>
        <div className="relative bottom-30 right-40 h-16  w-16 bg-white rounded-full opacity-15"></div>
      </div>
      
      {/**Cards */}
      <div className="bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:p-4  lg:px-24 gap-6 py-16 dark:bg-[#121212]">

        <div className="group col-span-1 bg-white flex flex-col justify-center items-center py-10 mx-2 sm:mx-32 md:mx-0 rounded-2xl shadow-sm hover:shadow-lg
        border border-white hover:border-red-400 transition-all duration-600 ease-in-out dark:bg-gray-700 dark:text-white">
          <div className="rounded-full mb-6 bg-red-200 group-hover:bg-red-700 p-1 dark:bg-red-900">
            <Phone className="h-14 w-14 p-3 text-red-700 group-hover:text-white"/>
          </div>
            <div className="flex flex-col justify-center items-center gap-2 text-gray-700 dark:text-gray-300  ">
              <p className="uppercase text-sm font-bold text-black dark:text-white">phone</p>
              <p className="text-sm font-semibold  ">+251xxxxxxxx</p>
              <p className="text-sm font-semibold  ">+251xxxxxxxx</p>
              <p className="text-xs ">Mon-Fri 8AM-6PM</p>
            </div>
        </div>

        <div className="group col-span-1 bg-white flex flex-col justify-center items-center py-10 mx-2 sm:mx-32 md:mx-0 rounded-2xl shadow-sm hover:shadow-lg
        border border-white hover:border-red-400 transition-all duration-600 ease-in-out dark:bg-gray-700">
          <div className="rounded-full mb-6 bg-red-200 group-hover:bg-red-700 p-1 transition-all duration-600 ease-in-out  dark:bg-red-900">
            <Mail className="h-14 w-14 p-3 text-red-700 group-hover:text-white transition-all duration-600 ease-in-out"/>
          </div>
            <div className="flex flex-col justify-center items-center gap-2 text-gray-700 dark:text-gray-200">
              <p className="uppercase text-sm font-bold text-black  dark:text-white">Email</p>
              <p className="text-sm font-semibold  ">kingdombusiness@gmail.com</p>
              <p className="text-sm font-semibold  ">infoatkingdombusiness@gmail.com</p>
              <p className="text-xs ">We respond within 24 hours</p>
            </div>
        </div>

        <div className="group col-span-1 bg-white flex flex-col justify-center items-center py-10 mx-2 sm:mx-32 md:mx-0 rounded-2xl shadow-sm hover:shadow-lg
        border border-white hover:border-red-400 transition-all duration-600 ease-in-out dark:bg-gray-700">
          <div className="rounded-full mb-6 bg-red-200 group-hover:bg-red-700 p-1 transition-all duration-600 ease-in-out dark:bg-red-900">
            <MapPin className="h-14 w-14 p-3 text-red-700 group-hover:text-white transition-all duration-600 ease-in-out"/>
          </div>
            <div className="flex flex-col justify-center items-center gap-2 text-gray-700 dark:text-gray-200">
              <p className="uppercase text-sm font-bold text-black dark:text-white">Address</p>
              <p className="text-sm font-semibold  ">Addis Ababa, Ethiopia</p>
              <p className="text-sm font-semibold  ">Alem Building, 5th Floor</p>
              <p className="text-xs ">Visit us anytime</p>
            </div>
        </div>

        <div className="group col-span-1 bg-white flex flex-col justify-center items-center py-10 mx-2 sm:mx-32 md:mx-0 rounded-2xl shadow-sm hover:shadow-lg
        border border-white hover:border-red-400 transition-all duration-600 ease-in-out dark:bg-gray-700">
          <div className="rounded-full mb-6  bg-red-200 group-hover:bg-red-700 p-1 transition-all duration-600 ease-in-out dark:bg-red-900">
            <Clock className="h-14 w-14 p-3 text-red-700 group-hover:text-white transition-all duration-600 ease-in-out"/>
          </div>
            <div className="flex flex-col justify-center items-center gap-2 text-gray-700 dark:text-gray-200">
              <p className="uppercase text-sm font-bold text-black dark:text-white">Business Hours</p>
              <p className="text-sm ">Monday - Friday</p>
              <p className="text-sm font-semibold  ">8:00 AM - 6:00 PM</p>
              <p className="text-xs ">Ethiopian Time (EAT)</p>
            </div>
        </div>
      </div>


      {/**Contact Form */}
      <div className="flex flex-col py-12 dark:bg-[#121212]">
          <div className="py-12 px-12 self-center rounded-t-2xl bg-red-700 flex flex-col w-full md:w-5/6 lg:w-2/3 dark:bg-gray-700">
            <p className="uppercase font-bold text-3xl text-white mb-4">Send Us a Message</p>
            <p className="text-white">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
        <div className="flex flex-col  h-full  border border-gray-200 shadow-2xl rounded-b-2xl px-12 py-12 bg-white w-full md:w-5/6 lg:w-2/3 self-center gap-6 pb-8 select-none dark:bg-gray-200">

          <div className="flex flex-col gap-2">

            {/**First and Last Name */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 w-full">

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="firstname" className="font-serif font-medium text-black flex items-center gap-2">Firstname <span className="font-black text-red-700 ">*</span></label>
                  <div className="px-2 py-1 border border-gray-400 rounded-lg has-focus:border-red-500 has-focus:text-red-500 flex items-center">
                    <User2/>
                    <input type="text" name="firstname" id="firstname" 
                      className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                      placeholder="Enter your firstname" value={formData.firstname} onChange={handlechange}/>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="lastname" className="font-serif font-medium text-black ">Lastname </label>
                  <div className=" py-1 px-2 border border-gray-400 rounded-lg has-focus:border-red-500 has-focus:text-red-500">
                    <input type="text" name="lastname" id="lastname" 
                      className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                      placeholder="Enter your lastname" value={formData.lastname} onChange={handlechange}/>
                  </div>
                </div>
              
              </div>  
                {errors.firstname && 
                <AnimatePresence mode="sync">
                  <motion.div
                  variants={variants}
                  initial="initial"
                  exit="exit"> 
                    <ErrorCard wrong={errors.firstname}/> 
                  </motion.div>
                </AnimatePresence>}
            </div>           
          </div>

          {/**Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="font-serif font-medium text-black flex gap-2">Email<span className="font-black text-red-700 ">*</span></label>
                <div className=" py-1 px-2 border border-gray-400 rounded-lg  has-focus:border-red-500 has-focus:text-red-500 flex items-center">
                  <Mail />
                  <input type="text" name="email" id="email" 
                    className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                    placeholder="Enter your email address" value={formData.email} onChange={handlechange}/>
                </div>
                {errors.email && 
                <AnimatePresence mode="sync">
                  <motion.div
                  variants={variants}
                  initial="initial"
                  exit="exit"> 
                    <ErrorCard wrong={errors.email}/> 
                  </motion.div>
                </AnimatePresence>}
            </div>

          {/**Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-serif font-medium text-black ">Phone Number</label>
                <div className=" py-1 px-2 border border-gray-400 rounded-lg  has-focus:border-red-500 has-focus:text-red-500 flex items-center">
                  <Phone />
                  <input type="text" name="phone" id="phone" 
                    className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                    placeholder="Enter your Phonenumber" value={formData.phone} onChange={handlechange}/>
                </div>          
          </div>

          {/**Message */}
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message" className="font-serif font-medium text-black flex gap-2">Message <span className="font-black text-red-700 ">*</span></label>
                <div className=" py-1 px-2   border border-gray-400 rounded-lg  has-focus:border-red-500 has-focus:text-red-500 flex">
                  <MessageCircle className="self-start my-1"/>
                  <textarea rows={6} name="messeage" id="messeage" 
                    className="px-2 py-1 w-full caret-red-500 text-black outline-none rounded-md  " 
                    placeholder="Enter your message" value={formData.messeage} onChange={handlechange}/>
                </div>
                {errors.messeage && 
                <AnimatePresence mode="sync">
                  <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"> 
                    <ErrorCard wrong={errors.messeage}/> 
                  </motion.div>
                </AnimatePresence>}
          </div>


          {/**Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700 flex justify-center items-center gap-2" onClick={validateform}> 
              {/* <LoadingCircle/> */}
              Send Message</button>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
export default Contact