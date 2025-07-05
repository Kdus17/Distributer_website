import { Link } from "react-router-dom"
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { Loader2,Mail,Lock ,Eye,EyeClosed,User } from "lucide-react";
import ErrorCard from "../assets/ErrorCard";
import { useLanguageContext } from '../LanguageContext';
import LoadingCircle from "../assets/LoadingCircle";

const SignUp = () => {
   const {Lang,toggleLang} = useLanguageContext();
  
  const [see, setsee] = useState(false)
  const [see2, setsee2] = useState(false)
  const [errors, seterrors] = useState({})
  const [formData,setFromData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  })

  const handlechange = (e) => {
    const {name, value} = e.target;
    setFromData((prev)=>({
      ...prev,
      [name]:value,
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

    if(!formData.username.trim()){
      newerrors.username = "Username is required!"
    } 
    if(!formData.email.trim()){
      newerrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)){
      newerrors.email = "Invalid email"
    }
    if(!formData.password.trim()){
      newerrors.password = "Password cannot be empty! "
    }
    if (formData.password !== formData.confirm_password){
      newerrors.confirm_password = "Password is not identical"
    }
    seterrors(newerrors);
    console.log(errors)
  }
  const langopt ={ 
      t1: Lang ?  "ኪንግደም ብዝንስ": "kingdom's business",
    t2:Lang ?"መጠቃሚያ ስም":"Username",
    t3:Lang ?"የኢሜይል አድራሻ":"Email",
    t4:Lang ?"የይለፍ ቃል":"Password",
    t5:Lang ?"የይለፍ ቃልን ያረጋግጡ":"Confirm Password",
    t6:Lang ?"መመዝገብ":"Sign Up",
    t7:Lang ?"ቀድሞውኑ አካውንት አለዎት?":"Already have an account?",
    t8:Lang ?"መግባት":"Login",
  }
  return (
      <div className="min-h-screen flex  justify-center items-center bg-gray-100  dark:bg-[#121212]">
          <div className="flex flex-col w-160 h-full border border-gray-200 shadow-lg rounded-lg px-12 pb-3 bg-white  gap-6 dark:bg-gray-500">
            <p className="uppercase self-center my-6 font-bold text-shadow-lg text-2xl select-none">{langopt.t1}</p>

            {/** User name */}
            <div className="flex flex-col gap-2 text-gray-700">
              <label htmlFor="name" className="font-serif font-semibold text-black select-none">{langopt.t2}</label>
              <label htmlFor="name" className="flex has-focus:border-red-500  has-focus:text-red-500 justify-between border-2 border-gray-400 rounded-lg items-center py-2 px-2">
                <User />
                <input type="text" name="username" id="name" className=" px-2 w-full caret-red-500 text-black  outline-none" value={formData.username} onChange={handlechange}
                placeholder={Lang ? "የተጠቃሚ ስምዎን ያስገቡ": "Enter your username"}/>
              </label>
              {/* <ErrorCard wrong={"Username is taken"}/> */}
              {errors.username && <ErrorCard wrong={errors.username}/>}
            </div>

            {/**Email */}
            <div className="flex flex-col gap-2 text-gray-700">
              <label htmlFor="email" className="font-serif font-semibold text-black select-none">{langopt.t3}</label>
              <label htmlFor="email" className="flex has-focus:border-red-500  has-focus:text-red-500 justify-between border-2 border-gray-400 rounded-lg items-center py-2 px-2">
                <Mail />
                <input type="email" name="email" id="email" className=" px-2 w-full caret-red-500 text-black outline-none" value={formData.email} onChange={handlechange}
                placeholder={Lang ? "ኢሜይልዎን ያስገቡ": "Enter your email"}/>
              </label>
              {/* <ErrorCard wrong={"Invalid email address"}/> */}
              {errors.email && <ErrorCard wrong={errors.email}/>}
            </div>

            {/**Password */}
            <div className="flex flex-col gap-2 text-gray-700">
              <label htmlFor="password" className="font-serif font-semibold text-black select-none">{langopt.t4}</label>
              <label htmlFor="password" className="border-2 border-gray-400 has-focus:border-red-500 has-focus:text-red-500 rounded-lg py-2  px-2 flex justify-between  items-center">
                <Lock  />
                <input type={`${see ? "text":"password"}`} name="password" id="password" className="w-full font-sans caret-red-500 text-black outline-none  px-2" value={formData.password} onChange={handlechange}
                placeholder =  {Lang ?  "የይለፍ ቃልዎን ያስገቡ" : "Enter your password"} />
                {see && <Eye onClick={()=>setsee(!see)} className="cursor-pointer text-2xl "/>}
                {!see && <EyeClosed onClick={()=>setsee(!see)} className="cursor-pointer text-2xl "/>}
              </label>
              {errors.password && <ErrorCard wrong={errors.password}/>}
            </div>

            {/**Confirm_Password */}
            <div className="flex flex-col gap-2 text-gray-700">
              <label htmlFor="confirm_password" className="font-serif font-semibold text-black select-none">{langopt.t5}</label>
              <label htmlFor="confirm_password" className="border-2 border-gray-400 has-focus:border-red-500 has-focus:text-red-500 rounded-lg py-2  px-2 flex justify-between  items-center">
                <Lock  />
                <input type={`${see ? "text":"password"}`} name="confirm_password" id="confirm_password" className="w-full font-sans caret-red-500 outline-none text-black  px-2" value={formData.confirm_password} onChange={handlechange}
                placeholder={ Lang ? "የይለፍ ቃልህን አረጋግጥ" :"Confirm your password"} />
                {see2 && <Eye onClick={()=>setsee2(!see2)} className="cursor-pointer"/>}
                {!see2 && <EyeClosed onClick={()=>setsee2(!see2)} className="cursor-pointer"/>}
              </label>
              {errors.confirm_password && <ErrorCard wrong={errors.confirm_password}/>}
            </div>

            {/**SignUp Button */}
            <div className="flex justify-center mt-6 select-none">
              <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700 flex justify-center items-center gap-2" onClick={validateform}> 
                {/* <Loader2 className="w-5 h-5 animate-spin" /> */}
                {langopt.t6}</button>
            </div>


            <div className="flex justify-center gap-1 items-center select-none">
              <p className="text-gray-400">{langopt.t7}</p>
              <Link to={'/login'} className="text-red-500">{langopt.t8}</Link>
            </div>
          </div>
      </div>
  )
}

export default SignUp