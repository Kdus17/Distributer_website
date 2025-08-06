import Aboutus_en from '../Lang/en/Aboutus.json'
import Aboutus_amh from '../Lang/amh/Aboutus.json'
import logo  from '../assets/Images/businesslogo.jpg'
import Map from "../components/Map"
import { useNavigate } from 'react-router-dom'
import { useLanguageContext } from '../LanguageContext';
import { useState,useEffect } from 'react';
import {Coffee,Handshake,Globe,Crown, Shield, Heart,  Zap, Award,Mountain, Leaf, Book, Target, CheckCircle, ArrowRight, BoxIcon, Cuboid, Locate, LocateIcon, LocationEditIcon, LocateFixedIcon, LocationEdit, LocateOffIcon, MapIcon, MapPin, Send, SendIcon, PinIcon} from "lucide-react"



export default function Aboutus_2() {
       const {Lang,toggleLang} = useLanguageContext();
       const [show,setShow] = useState(true) 
  
         const [lang,setLanguage] = useState([])
         useEffect(()=>{
         if(Lang){
         setLanguage(Aboutus_amh)
         }else{
           setLanguage(Aboutus_en)
         }
       },[Lang])
const Impact =[
  {
    icon: Coffee,
    title:Lang ? "ፕሪሚየም": "Premium",
    Desc: Lang ? "የኢትዮጵያ ቡና ጥራት":"Ethiopian Coffee Quality",
  },
  {
      icon: Globe,
    title: Lang ? " ዓለም አቀፋዊ":"Global",
    Desc: Lang ? "የገበያ መድረሻ":"Market Reach",
  },
  {
     icon: Leaf,
    title: Lang ? "ዘላቂነት ያለው":"Sustainable",
    Desc:  Lang ? "የንግድ ልውውጥ": "Trading Practices",
  },
  {
  icon: Award,
  title:Lang ? "የተረጋገጠ":"Certified",
  Desc: Lang ? "የወጪ ንግድ መመዘኛዎች":"Export Standards"
  }]


    const Vision =
    [
    {
    title: Lang ? "የገቢ እድገት": "Revenue Growth",
    Desc: Lang ? "በስትራቴጂክ ኤክስፖርት እና በጅምላ ንግድ ዕድሎች አማካኝነት እየጨመረ የሚሄደውን ገቢ እና ትርፍ እውን ማድረግ": "Realize growing revenue and  profit through strategic export and  wholsale trading oppurtunites",
    },
    {
    title: Lang ? "የቢዝነስ ልቀት":  "Bussiness Exellence",
    Desc: Lang ? "ዓለም አቀፍ ደረጃውን የጠበቀ የኤክስፖርት እና የሀገር ውስጥ ንግድ ሥራ ማቋቋም": "Establish a competent export and domestic trading business with international standards"
    },
    {
        title: Lang ? "የገንዘብ እድገት":  "Financial Growth",
        Desc: Lang ? "የሥራ ካፒታል እና የማስፋፊያ ፍላጐቶችን ለመደገፍ ከፋይናንስ ተቋማት ገንዘብ ማግኘት":  "Acquire funding from financial institutions to support working capital and expansion needs"

    }]

const businessobj =[
  {
    icon: Coffee,
    title:Lang ? "ፕሪሚየም ቡና ኤክስፖርት" : "Premium Coffee Export",
    desc: Lang ? "ከፍተኛ ጥራት ያለው የኢትዮጵያ ቡና ወደ ዓለም አቀፍ ገበያዎች በመላክ የኢትዮጵያን ቡና በዓለም አቀፍ ደረጃ እንዲታወቅ ያደረጉትን ልዩ መዓዛ እና ልዩ ጣዕም ያሳያል" : "Export high-quality Ethiopian coffee to international markets, showcasing the unique aroma and distinct flavor that make Ethiopian coffee globally renowned.",
    color: "text-amber-500"
  },
  {
    icon: Handshake,
    title:Lang ? "አጠቃላይ ግብይት" :  "Comprehensive Trading",
    desc:  Lang ? "የጽህፈት መሣሪያዎችን፣ የወረቀት ምርቶችን፣ የቤት ውስጥ መሣሪያዎችን፣ የቤት ዕቃዎችን እና ሌሎች አስፈላጊ የንግድ አቅርቦቶችን የሚያካትቱ የንግድ ሥራዎች ላይ መሳተፍ" :  "Engage in trading activities involving stationery materials, paper products, household equipment, furniture, and other essential business supplies.",
    color: "text-blue-500"
  },
  {
    icon: Leaf,
    title: Lang ? "የግብርና ልዕልና" : "Agricultural Excellence",
    desc: Lang ? "የኢትዮጵያ አርሶ አደሮችን በመደገፍ እና ከፍተኛ ጥራት ያላቸውን ምርቶች ወደ ዓለም ገበያ በማምጣት የሌሎች የግብርና ምርቶችን የወጪ ንግድ ማስፋት" :  "Expand the export trade of other agricultural products, supporting Ethiopian farmers and bringing premium produce to global markets.",
    color: "text-green-500"
  }
]

       const info =
    [
    {
    icon: Shield,
    title: Lang ? "ተጠያቂነት" : "Accountability",
    desc:  Lang ? "ሁሉም ሰራተኞቻችንና አመራሮቻችን ለሚያደርጉት ነገር ተጠያቂ ይሆናሉ" :"All our employees and management will be accountable for what we do ",
    color:"bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
    icon: Book,
    title:  Lang ? "እውቀት" :"knowledge",
    desc:  Lang ? "ደንበኞቻችንን በተሻለ ለማገልገል አዳዲስ መንገዶችን በመጠቀም ያለማቋረጥ እንማራለን፣ እናድጋለን እንዲሁም ፈጠራ እናደርጋለን" :"We constantly learn,grow and innovate with new ways to better serve our customers",
    color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
    icon:  Heart,
    title:  Lang ? "ጥንቃቄ ማድረግ" :"Care",
    desc:  Lang ? "ለሁሉም ሠራተኞቻችን እና ደንበኞቻችን በትሕትና እንከባከባለን እና የንግድ ፍላጎቶችዎን የሚንከባከቡ መፍትሄዎችን እናቀርባለን" :"We deeply care for all our employees and  customers with humility and  provide solutions  that take care of your business needs",
    color: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
    icon:  Zap,
    title:  Lang ? "ተጽዕኖ" :"impact",
    desc: Lang ? "በምናደርገው እና በምንነካው ነገር ሁሉ ላይ ትልቅ ተጽዕኖ ለማሳደር እንመኛለን" :"We aspire to have a truly great impact on all thatwe do and touch",
    color: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
    icon:  Award,
    title:  Lang ? "ጥራት ያለው" :"Quality",
    desc:  Lang ? "በምርታችን እና በአገልግሎት አቅርቦታችን የላቀነትን ለማሳካት እንጥራለን" :"We strive to achieve excellence in our product & Service delivery",
    color:"bg-gradient-to-br from-green-500 to-green-700"
    }];

  const navigate = useNavigate();
  
  return (
    
<div className='flex flex-col items-center '>
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-red-700  py-10 text-white w-full dark:from-gray-800 dark:to-gray-700'>
        <img src={logo} alt="logo" className='mb-10 rounded-full'/>
        <div className='flex gap-2 '>
            <div className='bg-white/30 rounded-full'><Coffee className='w-16 h-16 p-3'/></div>
            <div className='bg-white/30 rounded-full'><Crown className='w-16 h-16 p-3 text-yellow-400'/></div>
            <div className='bg-white/30 rounded-full'><Globe className='w-16 h-16 p-3'/></div>
        </div>
        <p className='md:text-8xl text-4xl sm:text-7xl max-w-240 font-bold  text-center'>
            {lang.t1} <span className='text-yellow-300'> {lang.t2}</span>  {lang.t3}
        </p>
        <p className='mt-12 max-w-160 text-center'> {lang.t4}</p>
        <div className='bg-gray-100/20 px-11 py-6 mt-6 rounded-2xl'>
            <p className='max-w-130 text-center font-semibold'> {lang.t5}</p>
        </div>
    </div>

    {/**Our Core Values */}
    <div className='flex flex-col items-center dark:bg-[#121212]'>
        <h1 className='text-4xl sm:text-5xl font-bold my-10 dark:text-white'>
             {lang.t6}
         <helmet>
            <meta name="title" content="Kingdom Business PLC | Ethiopia’s Premier Coffee Exporter, Unilever Distributor and trader in various products"/>
         </helmet>

             </h1>
        <p className='text-center max-w-150 text-xl text-gray-600 mb-10'> {lang.t7}</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:px-24 px-4 lg:px-24 gap-6 py-12'>
            {info.map((info, index)=>(
                <div key={index} className={`${info.color}  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-3xl border border-red-100`}>  
                    <div className='flex flex-col items-start  gap-6 sm:gap-4 p-8'>
                        <info.icon className='h-16 w-16 group-hover:scale-125 transition-all duration-300 ease-in-out p-3 bg-white/30 text-white rounded-full'/>
                        <h2 className=' text-xl text-white font-bold '>{info.title}</h2>
                        <p className=' text-white'>{info.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/**mountain and leafes */}      
    <div className='dark:bg-darkc flex flex-col sm:flex-row gap-4'>
    <div className='bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl sm:my-20 mx-4 p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 md:mx-24v dark:from-gray-700 dark:to-gray-600 w-full'>
            <div className='flex flex-col w-full text-center '>
                <div className='flex w-full gap-2'>
                <div className='bg-white/30 rounded-full h-13'><BoxIcon className='w-13 h-13 p-3'/></div>
                <div className='flex flex-col gap-3'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-6 dark:text-gray-100 '> {lang.t8}</h1>
                <p className='self-center  dark:text-gray-200'>{lang.t9}</p>
                </div>
                </div>
                <div className='w-1/6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-12'></div>
                <p className='text-lg mb-6 dark:text-gray-300'> {lang.t10}</p>
                <div className='flex flex-col lg:flex-row gap-6 w-full'>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Cuboid className='w-14 h-14 text-orange-500'/>
                        <h2 className='text-2xl font-bold'> {lang.t11}</h2>
                        <p className='text-md'> {lang.t12}</p>
                    </div>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Globe className='w-14 h-14 text-green-500'/>
                        <h2 className='text-2xl font-bold '> {lang.t13}</h2>
                        <p className='text-md'> {lang.t14}</p>
                    </div>
                </div>
            </div>
    </div>
    <div className='bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl my-20 mx-4 p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 md:mx-24v dark:from-gray-700 dark:to-gray-600 w-full'>
            <div className='flex flex-col w-full text-center '>
                <div className='flex w-full gap-3'>
                <div className='bg-white/30 rounded-full h-13'><Coffee className='w-13 h-13 p-3'/></div>
                <div className='flex flex-col gap-3'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-6 dark:text-gray-100'> {lang.t15}</h1>
                <p className='self-center dark:text-gray-200'>{Lang ? "የላቀ የኤክስፖርት ጥራት ያለው" : "premium export quality"}</p>
                </div>
                </div>
                <div className='w-1/6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-12'></div>
                <p className='text-lg mb-6 dark:text-gray-300'> {lang.t16}</p>
                <p className='text-lg mb-6 dark:text-gray-300'>{lang.t17}</p>
                <div className='flex flex-col lg:flex-row gap-6 w-full'>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Mountain className='w-14 h-14 text-orange-500'/>
                        <h2 className='text-2xl font-bold'> {lang.t18}</h2>
                        <p className='text-md'> {lang.t19}</p>
                    </div>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Leaf className='w-14 h-14 text-green-500'/>
                        <h2 className='text-2xl font-bold'> {lang.t20}</h2>
                        <p className='text-md'> {lang.t21}</p>
                    </div>
                </div>
            </div>
    </div>

    </div>  

    {/**Business Objectives */}
    <div className='flex flex-col py-8 dark:bg-[#121212] '>
        <h1 className='text-4xl sm:text-5xl font-bold text-center dark:text-white'> {lang.t22}</h1>
        <p className='text-xl text-center dark:text-gray-400 mt-4'> {lang.t23}</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:px-24 px-4 lg:px-24 gap-6 py-12'>
            {businessobj.map((info, index)=>(
                <div key={index} className={`group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-3xl border border-red-100 hover:-translate-y-1 dark:bg-gray-800 dark:text-white`}>  
                    <div className='flex flex-col gap-3 p-8'>
                        <info.icon className={`h-16 w-16 group-hover:scale-110 ${info.color} transition-all duration-300 ease-in-out p-3 bg-red-200/30  rounded-2xl`}/>
                        <h2 className='text-xl  font-bold '>{info.title}</h2>
                        <p className=''>{info.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/**Vision */}
    <div className='py-24 px-4 sm:px-12 md:px-24 dark:bg-darkc'>
        <div className='flex flex-col  gap-6 bg-gradient-to-r from-red-600 to-red-700 dark:from-gray-700 dark:to-gray-800 p-12 rounded-2xl lg:mx-24 mx-2 justify-center items-center '>
                <div className='bg-white/30 rounded-full p-2'> 
                    <Target className='text-white p-3 w-16 h-16'/>
                </div>
                <h1 className='text-4xl text-white font-bold text-center'> {lang.t24}</h1>
                <div className='bg-amber-300 w-20 h-1 self-center'></div>
                <div className='grid lg:grid-cols-3 md:grid-cols-1  gap-6 py-12'>
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
    </div>
    
    {/**Impacts */}
    <div className='bg-gray-50 px-4 sm:px-12 md:px-24 py-24 text-center flex flex-col items-center dark:bg-[#121212]'>
        <h1 className='text-4xl sm:text-5xl  font-bold mb-6 dark:text-white'> {lang.t25}</h1>
        <p className='text-xl max-w-200 mb-12 text-gray-600 dark:text-gray-100'> {lang.t26}</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12 w-full'>
        {Impact.map((Impact, index)=>(
            
                <div key={index} className='col-span-1 flex flex-col items-center group shadow-xl bg-white justigy-center p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                    <div className='bg-red-50 group-hover:scale-120 p-2 rounded-2xl mb-6 transition-all duration-300 ease-in-out'>
                        <Impact.icon className='w-16 h-16 p-3 text-red-600'/>
                    </div>
                    <strong className='text-xl mb-3'>{Impact.title}</strong>
                    <p>{Impact.Desc}</p>
                </div>
            
        ))}
        </div>
        
    </div>

    {/**Map and all */}
    <div className='w-full'>
    <div className=' bg-gradient-to-r from-red-500 to-red-700 min-h-screen md:px-12 lg:px-24 py-24 flex flex-col items-center dark:from-gray-500 dark:to-gray-700 dark:text-white'>
        <div className='bg-white/15 p-4 rounded-2xl mb-6'>
            <Crown className='w-16 h-16 text-amber-300'/>
        </div>
        <h1 className='md:text-7xl sm:text-5xl text-4xl text-white mb-8 font-bold text-center'> {lang.t27}</h1>
        <p className='text-xl text-center max-w-220 text-white mb-12'> {lang.t28}</p>
        
        {/**The Mini-Cards */}
        <div className='grid lg:grid-cols-3  gap-4 text-white mb-12'>
            <div className='col-span-1 group bg-white/20 border border-white/30 py-4 px-8 rounded-2xl flex md:gap-12 items-center hover:bg-white/30  transition-all duration-300 ease-in-out'>
                <Coffee className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> {lang.t29}</p>
            </div>
            <div className='col-span-1 group bg-white/20 border border-white/30 py-4 px-8 rounded-2xl flex md:gap-12 items-center hover:bg-white/30  transition-all duration-300 ease-in-out'>
                <Handshake className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> {lang.t30}</p>
            </div>
            <div className='col-span-1 group bg-white/20 border border-white/30 py-4 px-8 rounded-2xl flex md:gap-12 items-center hover:bg-white/30  transition-all duration-300 ease-in-out'>
                <Globe className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> {lang.t31}</p>
            </div>
        </div>
   <h1 className='sm:text-4xl text-3xl text-white mb-8 font-bold text-center'> {lang.t32}</h1>
        <p className='text-xl text-center max-w-180 text-white mb-12'> {lang.t33}</p>
        <button onClick={()=>navigate("/contact")}  className='py-4 px-6 rounded-2xl font-bold text-lg bg-white text-red-600 flex gap-4 items-center group shadow-xl mb-12'>{lang.t34}
            <ArrowRight className='group-hover:translate-x-1  transition-all duration-300 ease-in-out'/>
        </button>
     
        
    </div>
    {/* where are we */}
 <div className='flex flex-col sm:flex-row gap-4 justify-center w-full p-6  dark:bg-darkc'>
    
    <div className='p-9 bg-white/60 shadow-lg gap-2.5 flex flex-col w-full bg-gradient-to-r from-red-600 to-red-700 dark:from-gray-700 dark:to-gray-800'>
<div className='flex justify-start  gap-2.5  '>
 <div className='bg-white/30 rounded-full'><BoxIcon className='w-16 h-16 p-3'/></div>
 <div className='flex flex-col gap-1.5 dark:text-white'>
    <h1 className='font-bold text-2xl dark:text-gray-100' >{lang.t35}</h1>
    <p className='dark:text-gray-200'>{lang.t36}</p>
 </div>
</div>
<div className='flex flex-col gap-2.5 items-start'>
    <div className='flex gap-3'>
      <SendIcon className='dark:text-white'/>
        <h1 className='font-bold dark:text-white'>{lang.t37}</h1>
        </div>
<p className='text-gray-600 dark:text-gray-200'>{lang.t38}</p>
<p className='text-gray-600 dark:text-gray-200'>{lang.t39} </p>
</div>
</div>
<div>

</div>
    
    <div className='flex flex-col gap-4 p-6 w-full bg-white/60 shadow-lg bg-gradient-to-r from-red-600 to-red-700 dark:from-gray-700 dark:to-gray-800'>
        <div className='self-end p-2 flex gap-1.5 bg-gray rounded-md bg-white/30'>
            <PinIcon className='dark:text-white' />
            <p className=''>
             {lang.t40}
            </p>
        </div>

        <div className='flex flex-col gap-3.5 items-center  '>
             <div className='bg-white/30 rounded-full dark:text-white'><MapPin className='w-16 h-16 p-3'/></div>
               <h1 className='text-3xl font-bold dark:text-gray-50'>{lang.t41}</h1>
               <p className=' dark:text-gray-200'>{lang.t42}</p>
               <button  id='show' onClick={() => setShow(!show)} className='flex gap-3 p-3 rounded-sm bg-white/20 dark:text-gray-300'><Send/> {lang.t43}</button>
        </div>
    </div>
    

 </div>

    {/**Map */}
    <div className={`${show ? 'hidden' : 'block'} flex justify-center dark:bg-black p-6`}>
      <div className='max-w-[500px] self-center'>
        <Map/>
        </div>
        </div>

</div>
</div>
  )
}
