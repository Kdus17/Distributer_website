import { Link } from "react-router-dom"
import { useState } from "react";
import { Loader2, Mail,Lock ,Eye,EyeClosed} from "lucide-react";
import ErrorCard from "../assets/ErrorCard";
import { useLanguageContext } from '../LanguageContext';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate()
  const [see, setsee] = useState(false)
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  })

const handleLogin = async () => {
  
  // validateform(); // still runs validation

  // Block if there are errors
  if (Object.keys(errors).length > 0) return;

  try {
    const response = await fetch('https://distributor-backend.onrender.com/local/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.email,  // match this with `username` on backend
        password: formData.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
    } else {
      localStorage.setItem("token",data.key)
      console.log(data.key)
      navigate('/add')
      alert(data.message || "Login successful");
      // Redirect or save token here
    }

  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong.");
  }
};
  const [errors, seterrors] = useState({})

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

  const validateform = () => {
    
    const newerrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.email.trim()||!emailRegex.test(formData.email.trim())){
      newerrors.email = "Invalid email"
    }
    if(!formData.password.trim()){
      newerrors.password = "Invalid Password"
    }
    seterrors(newerrors)
  }
const {Lang,toggleLang} = useLanguageContext();
    const Langopt = {
      t1: Lang ?  "ኪንግደም ብዝንስ": "kingdom's business",
      t2:Lang ?  "የኢሜይል አድራሻ": "Email",
      t3:Lang ?  "የይለፍ ቃል": "Password",

      t5:Lang ?  "ግባ": "login",

     
    }
  return (
    <div className="min-h-screen flex  justify-center items-center bg-gray-100 dark:bg-[#121212]">
        <div className="flex flex-col w-120 h-full pb-3 border border-gray-200 shadow-lg rounded-lg px-12 bg-white dark:bg-gray-500 gap-6">
          <p className="uppercase self-center my-6 font-bold text-shadow-lg text-2xl select-none">{Langopt.t1}</p>

          {/** Email*/}
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="email" className="font-serif font-semibold text-black select-none">{Langopt.t2}</label>
            <label htmlFor="email" className="flex has-focus:border-red-500 text-black has-focus:text-red-500 justify-between border-2  border-gray-400 rounded-lg items-center py-2 px-2">
              <Mail />
              <input type="text" name="email" id="email" className=" px-2 w-full caret-red-500 text-black outline-none" onChange={handlechange}/>
            </label>
            {errors.email && <ErrorCard wrong={errors.email}/>}
          </div>

          {/**Password */}
          <div className="flex flex-col gap-2 text-gray-700">
            <label htmlFor="password" className="font-serif font-semibold text-black select-none">{Langopt.t3}</label>
            <label htmlFor="password" className="border-2 border-gray-400 has-focus:border-red-500 has-focus:text-red-500 rounded-lg py-2  px-2 flex justify-between  items-center">
              <Lock />
              <input type={`${see ? "text":"password"}`} name="password" id="password" className="w-full font-sans caret-red-500 outline-none text-black px-2" onChange={handlechange}/>
              {see && <Eye onClick={()=>setsee(!see)} className="cursor-pointer"/>}
              {!see && <EyeClosed onClick={()=>setsee(!see)} className="cursor-pointer"/>}
            </label>
            {errors.password && <ErrorCard wrong={errors.password}/>}
          </div>

          

          {/**Button */}
          <div className="flex justify-center mt-6 select-none">
            <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700 flex justify-center items-center gap-2" onClick={handleLogin}> 
              {/* <Loader2 className="w-5 h-5 animate-spin" /> */}
              {Langopt.t5}</button>
          </div>

          
        </div>
    </div>
  )
}

export default Login