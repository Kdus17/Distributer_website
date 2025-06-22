import { Link } from "react-router-dom"
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";

const Login = () => {
  const [see, setsee] = useState(false)
  return (
    <div className="min-h-screen flex  justify-center items-center bg-gray-100">
        <div className="flex flex-col w-120 h-120 border border-gray-200 shadow-lg rounded-lg px-12 bg-white  gap-6">
          <p className="uppercase self-center my-6 font-bold text-shadow-lg text-2xl">kingdom's business</p>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="name" className="font-serif font-semibold">Username</label>
            <label htmlFor="name" className="flex has-focus:border-red-500 justify-between border-2 border-gray-400 rounded-lg items-center py-2 px-2">
              <FaRegUser className="text-gray-500"/>
              <input type="text" name="username" id="name" className=" px-2 w-full caret-red-500 outline-none"/>
            </label>
            
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-serif font-semibold">Password</label>
            <label htmlFor="password" className="border-2 border-gray-400 has-focus:border-red-500 rounded-lg py-2  px-2 flex justify-between  items-center">
              <RiLockPasswordLine className="text-2xl text-gray-400" />
              <input type={`${see ? "text":"password"}`} name="password" id="password" className="w-full font-sans caret-red-500 outline-none  px-2" />
              {see && <IoMdEye onClick={()=>setsee(!see)} className="cursor-pointer text-2xl text-gray-700"/>}
              {!see && <IoMdEyeOff onClick={()=>setsee(!see)} className="cursor-pointer text-2xl text-gray-700"/>}
            </label>
          </div>
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="rem" id="rem" className="apperance-none w-4 h-4 accent-red-500"/>
            <label htmlFor="rem" className="font-serif">Remember me</label>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700">Login</button>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <p className="text-gray-400">Don't have an account?</p>
            <Link to={'/signup'} className="text-red-500">SignUp</Link>
          </div>
        </div>
    </div>
  )
}

export default Login