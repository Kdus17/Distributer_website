import React from 'react'
import {Coffee,Handshake,Globe,Crown, MoveRightIcon,Shield, BookOpen, Heart,  Zap, Award,Mountain, Leaf, Book, Target, CheckCircle} from "lucide-react"

const info =
    [
    {
    icon: Shield,
    title: "Accountability",
    desc: "All our employees and management will be accountable for what we do ",
    color:"bg-blue-600"
    },
    {
    icon: Book,
    title: "knowledge",
    desc: "We constantly learn,grow and innovate with new ways to better serve our customers",
    color:"bg-purple-600"
    },
    {
    icon:  Heart,
    title :"Care",
    desc: "We deeply care for all our employees and  customers with humility and  provide solutions  that take care of your business needs",
    color:"bg-red-600"
    },
    {
    icon:  Zap,
    title: "impact",
    desc:"We aspire to have a truly great impact on all thatwe do and touch",
    color:"bg-orange-600"
    },
    {
    icon:  Award,
    title: "Quality",
    desc: "We strive to achieve excellence in our product & Service delivery",
    color:"bg-green-600"
    }];

export default function Aboutus_2() {
  return (
<>
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-red-700 max-h-screen min-h-screen text-white'>
        <div className='flex gap-2 mb-10'>
            <div className='bg-white/30 rounded-full'><Coffee className='w-16 h-16 p-3'/></div>
            <div className='bg-white/30 rounded-full'><Crown className='w-16 h-16 p-3 text-yellow-400'/></div>
            <div className='bg-white/30 rounded-full'><Globe className='w-16 h-16 p-3'/></div>
        </div>
        <p className='md:text-8xl text-7xl max-w-240 font-bold  text-center'>
            Connecting Ethiopia's <span className='text-yellow-300'>Finest Coffee</span> to the World
        </p>
        <p className='mt-12 max-w-160 text-center'>Kingdom Business PLC is dedicated to showcasing Ethiopia's premium coffee to international markets while 
            building comprehensive trading solutions that support local communities and global partnerships</p>
        <div className='bg-gray-100/20 px-11 py-6 mt-6 rounded-2xl'>
            <p className='max-w-130 text-center font-semibold'>Bridging continents through quality, integrity and sustainable trade practices</p>
        </div>
    </div>

    <div className='flex flex-col items-center '>
        <h1 className='text-5xl font-bold my-10'>Our Core Values</h1>
        <p className='text-center max-w-150 text-xl text-gray-600 mb-10'>Guiding principles that shape every decision we make and every relationship we build</p>
        <div className='grid lg:grid-cols-3 lg:px-24 gap-6 py-12'>
            {info.map((info, index)=>(
                <div key={index} className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>  
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <info.icon className='row-span-1 min-w-16 h-16 w-16 group-hover:scale-125 transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                        <h2 className='row-span-1 text-xl font-bold self-center'>{info.title}</h2>
                        <p className='row-span-1 text-gray-600'>{info.desc}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
</>
  )
}
