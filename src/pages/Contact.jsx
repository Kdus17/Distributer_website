import ErrorCard from "../assets/ErrorCard"
import Map from "../components/Map"
import { MdLocationPin } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center h-140 bg-red-700 gap-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white  text-shadow-md">Contact Us</h1>
        <div className="text-white flex flex-col items-center">
          <p>Ready to explore our products </p>
          <p>or discuss comphrenesive trading partnerships</p>
          <p>We are ready to support your business</p>
        </div>
      </div>


      {/**Cards */}
      <div className="bg-gray-200 flex flex-col md:flex-row justify-center p-4 md:px-24 gap-4">
        <div className="flex flex-col self-center md:flex-row gap-4 w-2/3  md:w-1/2 md:h-50">
          {/**Phone Number */}
          <div className="flex flex-col w-full border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 items-center shadow-lg">
            <MdOutlinePermPhoneMsg className="text-4xl border-b-2 p-1  text-red-700"/>
            <p className="uppercase text-sm font-semibold">phone</p>
            <p className="text-sm font-semibold  ">+251xxxxxxxx</p>
            <p className="text-sm font-semibold  ">+251xxxxxxxx</p>
            <p className="font-light text-sm ">Mon-Fri 8AM-6PM</p>
          </div>
          {/**Email */}
          <div className="flex flex-col w-full border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 items-center shadow-lg">
            <MdOutlineEmail className="text-4xl border-b-2 p-1 text-red-700"/>
            <p className="uppercase text-sm font-semibold">Email</p>
            <p className="uppercase text-sm font-semibold ">kb@gmail.com</p>
            <p className="font-light text-sm ">we respond within 24 hours</p>
          </div>
        </div>

        <div className="flex flex-col self-center md:flex-row gap-4 w-2/3  md:w-1/2 md:h-50">
          {/**Address */}
          <div className="flex flex-col w-full  border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 shadow-lg items-center">
            <MdLocationPin className="text-4xl border-b-2 p-1 text-red-700 self-center"/>
            <p className="uppercase text-sm font-semibold self-center">Address</p>
            <p className="text-sm font-semibold ">Addis Ababa, Ethiopia</p>
            <p className="text-sm font semibold">Alem Building</p>
            <p className="text-sm font-light">Visit us</p>
          </div>
          {/**Business Hours */}
          <div className="flex flex-col w-full border border-gray-200 md:p-2 py-12 rounded-2xl bg-white gap-2 items-center shadow-lg">
            <HiOutlineClock className="text-4xl border-b-2 p-1 text-red-700"/>
            <p className="font-semibold text-sm">Business Hours</p>
            <p className="font-light text-sm">Mon-Fri 8AM-6PM</p>
            <p className="font-light text-sm">Mon-Fri 8AM-6PM</p>
          </div>
        </div>
      </div>


      {/**Contact Form */}
        <div className="flex flex-col my-12 h-full  border border-gray-200 shadow-lg rounded-lg px-12 bg-white self-center gap-6 pb-8 pt-6">
          <div className="my-3 flex flex-col ">
            <p className="uppercase font-bold text-2xl">Send Us a Message</p>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <div className="flex flex-col gap-2 text-gray-400">

            {/**First and Last Name */}
            <div className="flex gap-2 w-full">
              <label htmlFor="firstname" className="font-serif font-semibold text-black w-full">Firstname</label>
              <label htmlFor="lastname" className="font-serif font-semibold text-black w-full ">Lastname</label>
            </div>
            <div className="flex gap-2">
              <label htmlFor="firstname" className="flex w-full has-focus:border-red-500 text-black has-focus:text-red-500 justify-between border-2  border-gray-400 rounded-lg items-center py-2 px-2">
                
                <input type="text" name="firstname" id="firstname" className=" px-2 w-full caret-red-500 text-black outline-none" placeholder="Enter your firstname"/>
              </label>
              <label htmlFor="lastname" className="flex w-full has-focus:border-red-500 text-black has-focus:text-red-500 justify-between border-2  border-gray-400 rounded-lg items-center py-2 px-2">
                
                <input type="text" name="lastname" id="lastname" className=" px-2 w-full caret-red-500 text-black outline-none" placeholder="Enter your lastname"/>
              </label>
            </div>            
          </div>

          {/**Email */}
            <div className="flex flex-col gap-2 text-gray-700">
              <label htmlFor="email" className="font-serif font-semibold text-black ">Email</label>
              <label htmlFor="email" className="flex has-focus:border-red-500  has-focus:text-red-500 justify-between border-2 border-gray-400 rounded-lg items-center py-2 px-2">
                <MdOutlineEmail className="text-2xl"/>
                <input type="email" name="email" id="email" className=" px-2 w-full caret-red-500 text-black outline-none"
                placeholder="Enter your email"/>
              </label>
            </div>

          {/**Phone Number */}
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="phone" className="font-serif font-semibold text-black ">Phone Number</label>
            <label htmlFor="phone" className="flex has-focus:border-red-500 text-black has-focus:text-red-500 justify-between border-2  border-gray-400 rounded-lg items-center py-2 px-2">
              
              <input type="tel" name="phone" id="phone" className=" px-2 w-full caret-red-500 text-black outline-none" placeholder="Enter your phone number"/>
            </label>
          </div>

          {/**Message */}
          <div className="flex flex-col gap-2 text-gray-400">
            <label htmlFor="message" className="font-serif font-semibold text-black ">Message</label>
            <label htmlFor="message" className="flex has-focus:border-red-500 text-black has-focus:text-red-500 justify-between border-2  border-gray-400 rounded-lg items-center py-2 px-2">
              
              <textarea rows={6}  name="message" id="message" className=" px-2 w-full caret-red-500 text-black outline-none" placeholder="Enter your message"/>
            </label>
          </div>


          {/**Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 w-full p-2 cursor-pointer text-white rounded-md uppercase hover:bg-red-700 flex justify-center items-center gap-2"> 
              {/* <LoadingCircle/> */}
              Send Message</button>
          </div>

        </div>

    </div>
  )
}
export default Contact