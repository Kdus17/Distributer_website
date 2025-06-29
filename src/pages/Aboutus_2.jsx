import React from 'react'
import  buna from '../assets/Images/buna.jpg'
import {Coffee,Handshake,Globe,Crown, MoveRightIcon,Shield, BookOpen, Heart,  Zap, Award,Mountain, Leaf, Book, Target, CheckCircle} from "lucide-react"

const Vision =
    [
    {
    title: "Revenue Growth",
    Desc:"Realize growing revenue and  profit through strategic export and  wholsale trading oppurtunites",
    },
    {
    title: "Bussiness Exellence",
    Desc: "Establish a competent export and domestic trading business with international standards"
    },
    {
        title: "Financial Growth",
        Desc: "Acquire funding from financial insitutions to support working capital and expansion needs"

    }]
const info =
    [
    {
    icon: Shield,
    title: "Accountability",
    desc: "All our employees and management will be accountable for what we do ",
    color:"bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
    icon: Book,
    title: "knowledge",
    desc: "We constantly learn,grow and innovate with new ways to better serve our customers",
    color:"bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
    icon:  Heart,
    title :"Care",
    desc: "We deeply care for all our employees and  customers with humility and  provide solutions  that take care of your business needs",
    color:"bg-gradient-to-br from-red-500 to-red-700"
    },
    {
    icon:  Zap,
    title: "impact",
    desc:"We aspire to have a truly great impact on all thatwe do and touch",
    color:"bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
    icon:  Award,
    title: "Quality",
    desc: "We strive to achieve excellence in our product & Service delivery",
    color:"bg-gradient-to-br from-green-500 to-green-700"
    }];
const businessobj =[
  {
    icon: Coffee,
    title: "Premium Coffee Export",
    desc: "Export high-quality Ethiopian coffee to international markets, showcasing the unique aroma and distinct flavor that make Ethiopian coffee globally renowned.",
    color: "text-amber-500"
  },
  {
    icon: Handshake,
    title: "Comprehensive Trading",
    desc: "Engage in trading activities involving stationery materials, paper products, household equipment, furniture, and other essential business supplies.",
    color: "text-blue-500"
  },
  {
    icon: Leaf,
    title: "Agricultural Excellence",
    desc: "Expand the export trade of other agricultural products, supporting Ethiopian farmers and bringing premium produce to global markets.",
    color: "text-green-500"
  }
]


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

    <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold my-10'>Our Core Values</h1>
        <p className='text-center max-w-150 text-xl text-gray-600 mb-10'>Guiding principles that shape every decision we make and every relationship we build</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:px-24 px-4 lg:px-24 gap-6 py-12'>
            {info.map((info, index)=>(
                <div key={index} className={`${info.color}  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-3xl border border-red-100`}>  
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <info.icon className='row-span-1 h-16 w-16 group-hover:scale-125 transition-all duration-300 ease-in-out p-3 bg-white/30 text-white rounded-full'/>
                        <h2 className='row-span-1 text-xl text-white font-bold self-center'>{info.title}</h2>
                        <p className='row-span-1 text-white'>{info.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/**mountain and leafes */}        
    <div className='bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl my-20 p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 lg:mx-24'>
            <div className='flex flex-col w-full text-center '>
                <h1 className='text-5xl font-bold mb-6 '>Ethiopian Coffee Excellence</h1>
                <div className='w-1/6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-12'></div>
                <p className='text-lg mb-6'>Ethiopian coffee continues to enjoy strong international demand, renowned for its unique aroma and distinct flavor. 
                Despite ongoing challenges such as climate change and deforestation, we remain committed to sourcing and delivering high-quality coffee.</p>
                <p className='text-lg mb-6'>While most Ethiopian coffee is grown in the highlands, the country's diverse geography and climate allow for a wide range of coffee varieties.
                    The most popular varieties include: Gesha (or Geisha), Yirgacheffe, and Sidamo</p>
                <div className='flex flex-col lg:flex-row gap-6 w-full'>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Mountain className='w-14 h-14 text-orange-500'/>
                        <h2 className='text-2xl font-bold'>High Altitude</h2>
                        <p className='text-md'>Sourcing from optimal growing regions for superior flavor profiles</p>
                    </div>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Leaf className='w-14 h-14 text-green-500'/>
                        <h2 className='text-2xl font-bold'>Organic Quality</h2>
                        <p className='text-md'>Supporting naturally organic farming practices and certification</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center relative'>
                <div className='relative'> 
                    <img
                        src={buna}
                        alt="buna"
                        className="rounded-3xl shadow-2xl w-96 h-96 object-cover"
                    />
                    <div className='absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl px-6 py-4 shadow-xl text-white'>
                        <h2 className='md:text-2xl font-bold text-white'>Premium</h2>
                        <p className='text-white'>Ethiopian Coffee</p>
                    </div>
                </div>
            </div>
    </div>

    {/**Business Objectives */}
    <div className='flex flex-col '>
        <h1 className='text-5xl font-bold text-center'>Our Business Objectives</h1>
        <p className='text-xl text-center'>Strategic goals driving our misson to enhance export and domestic trading operations</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:px-24 px-4 lg:px-24 gap-6 py-12'>
            {businessobj.map((info, index)=>(
                <div key={index} className={`group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-3xl border border-red-100 hover:-translate-y-1`}>  
                    <div className='flex flex-col gap-3 p-8'>
                        <info.icon className={`h-16 w-16 group-hover:scale-110 ${info.color} transition-all duration-300 ease-in-out p-3 bg-red-200/30  rounded-2xl`}/>
                        <h2 className='text-xl  font-bold '>{info.title}</h2>
                        <p className=''>{info.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

    <div className='flex flex-col  gap-6 bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-2xl mx-24 justify-center items-center'>
            <div className='bg-white/30 rounded-full p-2'> 
                <Target className='text-white p-3 w-16 h-16'/>
            </div>
            <h1 className='text-4xl text-white font-bold'>Our Strategic Vision</h1>
            <div className='bg-amber-300 w-20 h-1 self-center'></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:px-24 px-4 lg:px-24 gap-6 py-12'>
                {Vision.map((info, index)=>(
                <div key={index} className={`group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-xl border border-red-100 hover:-translate-y-1 bg-white/10`}>  
                    <div className='flex flex-col gap-3 p-8'>
                        <CheckCircle className='text-green-500'/>
                        <h2 className='text-xl  font-bold text-white'>{info.title}</h2>
                        <p className='text-white'>{info.Desc}</p>
                    </div>
                </div>
                ))}
            </div>
    </div>
    

</>
  )
}
