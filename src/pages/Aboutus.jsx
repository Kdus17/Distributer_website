import logo  from '../assets/Images/businesslogo.jpg'
import Map from "../components/Map"
import  buna from '../assets/Images/buna.jpg'
import classNames from 'classnames'
import {Coffee,Handshake,Globe,Crown, MoveRightIcon,Shield, BookOpen, Heart,  Zap, Award,Mountain, Leaf, Book} from "lucide-react"

const Aboutus = () => {
  const info =
  [
  {
     icon: Shield,
     title: "Accountability",
     desc: "All  our employees and management will be accountable for what we do ",
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
desc:"we aspire to have a truly great impact on all thatwe do and touch",
color:"bg-orange-600"
},
{
  icon:  Award,
  title: "Quality",
  desc: "We strive to achieve excellence in our product & Service delivery",
  color:"bg-green-600"
}];
  const  Transparentbutton = 'gap-x-2 opacity-40 bg-white rounded-xl px-3 py-1 flex flex-row '
  return (
    
    <div className="bg-red-500  font-sans flex flex-col gap-4 items-center mt-3 w-full">
      
      <div className='flex gap-2 text-white mt-3'> <Coffee  className='size-9'/><span className='text-yellow-400 '><Crown  className='size-10'/></span><Globe className='size-9'/></div>
       <h1 className='text-4xl md:text-7xl text-center max-w-[820px]  text-gray-50'> Connecting  Ethiopia's <span className='text-red-400'>Finest Coffee</span>  to the World
       </h1>
        <div className='max-w-[670px] text-center  opacity-85 text-gray-100'>
        <p>
Kingdom's Business PLC is dedicated to showcasing Ethiopia's premium coffee to international markets 
while building comprehensive trading solutions that support local communities and global partnerships
        </p>
      </div>
      <p className='text-gray-100  font-bold text-center max-w-[600px]'>
        We're bridging the contintents through qualit, integrity and sustainable trade practices
      </p>
      <div  className='bg-white w-full flex  flex-col text-center '>
          <h1  className='text-center mt-5  font-bold text-3xl'> Our Core Values </h1>
          <p className=''>Guiding princples that  shape every decision we make  and  every relationship we build</p>
       <div className="flex flex-wrap justify-center gap-6 my-8">
  {info.map((Info, index) => (
    <div
      key={index}
      className={classNames(
        `rounded-2xl shadow-lg p-6 w-[300px] h-[220px] text-white flex flex-col justify-start ${Info.color}`
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center">
          <Info.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold">{Info.title}</h3>
      </div>
      <p className="text-sm leading-relaxed">{Info.desc}</p>
    </div>
  ))}
</div>
<div className='bg-yellow-50 flex gap-10 py-10 px-12  justify-center'>
  <div className='flex flex-col gap-6 items center w-1/2 '>
<h1 className='text-5xl'>Ethiopian Coffee Exellence</h1>
<p className='font-sans'>
  Ethiopian coffee continues to enjoy strong international demand, renowned for its unique aroma and distinct flavor. Despite ongoing challenges such as climate change and deforestation, we remain committed to sourcing and delivering high-quality coffee.
</p>
<p>
  While most ethiopian coffee is grown in the highlands, the country's diverse geography and climate allow for a wide range of coffee varieties. The most popular varieties include:Gesha (or Geisha), Yirgacheffe, and Sidamo
</p>
<div className='flex  gap-5'>
 <div className=' rounded-xl shadow-lg/20 shadow-black flex flex-col bg-white max-w-[300px] p-6 text-left gap-5'>
  <Mountain className='text-orange-400 size-10'/>
    <h1 className='font-bold text-2xl'>High Altitude  </h1>
    <p>
      Sourcing from opitimal growing regions for superior flavor profiles
    </p>
</div>
<div className=' rounded-xl shadow-lg/20 shadow-black flex flex-col bg-white max-w-[300px] p-6 text-left gap-5'>
  <Leaf className='text-green-400 size-10'/>
    <h1 className='font-bold text-2xl'> Organic Quality </h1>
    <p>
      Supporting naturally organic farming practices and certification
    </p>
</div>
</div>
  </div>
  <div className="relative w-fit h-fit md:w-[400px] md:h-[400px]">
  <img
    src={buna}
    alt="buna"
    className="rounded-xl shadow-lg h-[150px] w-[150px] md:h-[400px] md:w-[400px]"
  />
  <div className="absolute -bottom-6 -left-6 bg-orange-500 rounded-xl px-4 py-2 shadow-lg text-white">
    <p className="text-sm md:text-base leading-tight">
      <span className="block font-bold text-lg">Premium</span>
      <span className="block">Ethiopian coffee</span>
    </p>
  </div>
</div>


</div>

      </div>
      
      <div className='flex justify-center mt-2'> <img src={logo}className='rounded-xl ' alt="Logo" srcset="" />
      </div>
      <h1 className=' text-3xl md:text-4xl font-bold text-gray-50'>Join our trading network</h1>
      <div className='max-w-[650px] text-center  opacity-90 text-gray-100'>
        <p>
          Whether you're looking to source premium Ethiopian coffee, explore trading opportunities, or partner with us in sustainable business practices, 
          we're here to build lasting relationships that benefit communities and markets worldwide.
        </p>
      </div>
      <div className='flex gap-3 md:flex-row flex-col '>
        <button className={Transparentbutton}><Coffee /> explore  coffee products</button>
        <button  className={Transparentbutton}><Handshake/> partnership opportunities</button>
        <button className={Transparentbutton}> <Globe/>global trading </button>
      </div>
      <div className='flex flex-col gap-2 items-center w-full '>
      <h1 className='text-2xl text-gray-50   md:text-3xl'>
    Ready  to  Experiance Ethiopian Exellence
      </h1>
      <p className='max-w-[650px] text-center  opacity-90 text-gray-100'>
Connect  with us to discover how Kingdom's Business PLC can nhance your  trading  operationsandbring you  closer  to Ethiopia's finest products.
      </p>
      <button  className='bg-white p-5 items-center  justify-center rounded-full flex gap-3'>
Start Your Journey <MoveRightIcon/>
      </button>
      </div>
<Map/>
    </div>
  )
}

export default Aboutus