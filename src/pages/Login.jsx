import { Link } from "react-router-dom"
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { Loader2 } from "lucide-react";
import ErrorCard from "../assets/ErrorCard";

const Login = () => {
  const [see, setsee] = useState(false)
  return (
    <div className="min-h-screen flex  justify-center items-center bg-gray-100">
        <div className="flex flex-col w-120 h-full pb-3 border border-gray-200 shadow-lg rounded-lg px-12 bg-white  gap-6">
          <p className="uppercase self-center my-6 font-bold text-shadow-lg text-2xl">kingdom's business</p>

          {/** User name */}
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="name" className="font-serif font-semibold text-black ">Username</label>
            <label htmlFor="name" className="flex has-focus:border-red-500 text-black has-focus:text-red-500 justify-between border-2  border-gray-400 rounded-lg items-center py-2 px-2">
              <FaRegUser />
              <input type="text" name="username" id="name" className=" px-2 w-full caret-red-500 text-black outline-none"/>
            </label>
            {/* <ErrorCard/> */}
          </div>

          {/**Password */}
          <div className="flex flex-col gap-2 text-gray-700">
            <label htmlFor="password" className="font-serif font-semibold text-black">Password</label>
            <label htmlFor="password" className="border-2 border-gray-400 has-focus:border-red-500 has-focus:text-red-500 rounded-lg py-2  px-2 flex justify-between  items-center">
              <RiLockPasswordLine className="text-2xl " />
              <input type={`${see ? "text":"password"}`} name="password" id="password" className="w-full font-sans caret-red-500 outline-none text-black px-2" />
              {see && <IoMdEye onClick={()=>setsee(!see)} className="cursor-pointer text-2xl "/>}
              {!see && <IoMdEyeOff onClick={()=>setsee(!see)} className="cursor-pointer text-2xl "/>}
            </label>
            {/* <ErrorCard/> */}
          </div>

          {/**Remember me */}
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="rem" id="rem" className="apperance-none w-4 h-4 accent-red-500"/>
            <label htmlFor="rem" className="font-serif">Remember me</label>
          </div>

          {/**Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700 flex justify-center items-center gap-2"> 
              {/* <Loader2 className="w-5 h-5 animate-spin" /> */}
              Sign Up</button>
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