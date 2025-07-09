import React from 'react'
import logo  from '../assets/Images/businesslogo.jpg'
import Map from "../components/Map"
import  buna from '../assets/Images/buna.jpg'
import { useLanguageContext } from '../LanguageContext';
import {Coffee,Handshake,Globe,Crown, Shield, Heart,  Zap, Award,Mountain, Leaf, Book, Target, CheckCircle, ArrowRight} from "lucide-react"



export default function Aboutus_2() {
       const {Lang,toggleLang} = useLanguageContext();

       
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
const lang = {
   t1: Lang ? "የኢትዮጵያን" : "Connecting Ethiopia's",
   t2: Lang ? "ምርጥ ቡና " : "Finest Coffee",
   t3: Lang ? " ከዓለም ጋር ማገናኘት" : "to the World",
   t4: Lang ? "ኪንግደም ቢዝነስ ፒኤልሲ የአካባቢውን ማህበረሰቦች እና ዓለም አቀፍ አጋርነቶችን የሚደግፉ አጠቃላይ የንግድ መፍትሄዎችን በመገንባት የኢትዮጵያን ከፍተኛ ጥራት ያለው ቡና ለዓለም አቀፍ ገበያዎች ለማሳየት ቁርጠኛ ነው " : "Kingdom Business PLC is dedicated to showcasing Ethiopia's premium coffee to international markets while building comprehensive trading solutions that support local communities and global partnerships",
   t5: Lang ? "በጥራት፣ በቅንነት እና በዘላቂ የንግድ ልምዶች አህጉራትን ማገናኘት" : "Bridging continents through quality, integrity and sustainable trade practices",
   t6: Lang ? "ዋነኛ እሴቶቻችን " : "Our Core Values",
   t7: Lang ? "እያንዳንዱን ውሳኔ እና የምንገነባውን እያንዳንዱን ግንኙነት የሚቀርጹ መመሪያዎች" : "Guiding principles that shape every decision we make and every relationship we build",
   t8: Lang ? "የኢትዮጵያ ቡና ልዕልና" : "Ethiopian Coffee Excellence",
   t9: Lang ? "የኢትዮጵያ ቡና ለየት ባለ መዓዛው እና ለየት ባለ ጣዕሙ በዓለም አቀፍ ደረጃ ከፍተኛ ተፈላጊነትን ማግኘቱን ቀጥሏል። እንደ የአየር ንብረት ለውጥ እና የደን ጭፍጨፋ ያሉ ቀጣይ ተግዳሮቶች ቢኖሩም ከፍተኛ ጥራት ያለው ቡና ለማምረት እና ለማቅረብ ቁርጠኛ ነን" : "Ethiopian coffee continues to enjoy strong international demand, renowned for its unique aroma and distinct flavor.  Despite ongoing challenges such as climate change and deforestation, we remain committed to sourcing and delivering high-quality coffee",
   t10: Lang ? "አብዛኛው የኢትዮጵያ ቡና የሚመረተው በተራራማ አካባቢዎች ቢሆንም የሀገሪቱ የተለያዩ መልክዓ ምድራዊ አቀማመጥ እና የአየር ንብረት የተለያዩ የቡና ዝርያዎች እንዲኖሩ ያስችላቸዋል። በጣም ታዋቂዎቹ ዝርያዎች የሚከተሉትን ያካትታሉ: ጌሻ( ወይም ጌሻ)፣ ይርጋቼፌ እና ሲዳሞ " : "While most Ethiopian coffee is grown in the highlands, the country's diverse geography and climate allow for a wide range of coffee varieties. The most popular varieties include: Gesha (or Geisha), Yirgacheffe, and Sidamo",
   t11: Lang ? "ከፍተኛ ከፍታ " : "High Altitude",
   t12: Lang ? "የላቀ ጣዕም መገለጫዎችን ለማግኘት በጣም ጥሩ ከሆኑ የዕድገት ክልሎች ማምረት" : "Sourcing from optimal growing regions for superior flavor profiles",
   t13: Lang ? "ኦርጋኒክ ጥራት " : "Organic Quality",
   t14: Lang ? "የተፈጥሮ ኦርጋኒክ የእርሻ ልምዶችን እና የምስክር ወረቀቶችን መደገፍ " : "Supporting naturally organic farming practices and certification",
   t15: Lang ? "ፕሪሚየም" : "Premium",
   t16: Lang ? "የኢትዮጵያ ቡና " : "Ethiopian Coffee",
   t17: Lang ? "የንግድ ግቦቻችን " : "Our Business Objectives",
   t18: Lang ? "የኤክስፖርት እና የሀገር ውስጥ ንግድ ስራዎችን ለማጐልበት ተልዕኮአችንን የሚገፋፉ ስትራቴጂካዊ ግቦች" : "Strategic goals driving our misson to enhance export and domestic trading operations",
   t19: Lang ? "ስትራቴጂያዊ ራዕያችን" : "Our Strategic Vision",
   t20: Lang ? "የዛሬ ተጽዕኖያችን" : "Our Impact Today",
   t21: Lang ? "በዘላቂ የንግድ ልውውጦች አማካኝነት በኢትዮጵያ ልቀት እና በዓለም አቀፍ ገበያዎች መካከል ድልድይ መገንባት" : "Building bridges between Ethiopian excellence and global markets through sustainable trading practices",
   t22: Lang ? "የእኛን የንግድ አውታረ መረብ ይቀላቀሉ " : "Join Our Trading Network",
   t23: Lang ? "ከፍተኛ ጥራት ያለው የኢትዮጵያ ቡና ለማግኘት፣ የንግድ እድሎችን ለመዳሰስ፣ ወይም ዘላቂ በሆኑ የንግድ ልምዶች ከእኛ ጋር ለመተባበር ቢፈልጉ፣ በዓለም ዙሪያ ማህበረሰቦችን እና ገበያዎችን የሚጠቅሙ ዘላቂ ግንኙነቶችን ለመገንባት እዚህ ተገኝተናል" : "Whether you're looking to source premium Ethiopian coffee, explore trading opportunities, or partner with us in sustainable business practices, we're here to build lasting relationships that benefit communities and markets worldwide.",
   t24: Lang ? "የቡና ምርቶችን ያስሱ " : "Explore Coffee Products",
   t25: Lang ? "የሽርክና ዕድሎች" : "Partnership Opportunities",
   t26: Lang ? "ዓለም አቀፋዊ ንግድ " : "Global Trading",
   t27: Lang ? "የኢትዮጵያን የላቀ ጥራት ለመለማመድ ዝግጁ ነዎት? " : "Ready to Experience Ethiopian Excellence?",
   t28: Lang ? "ኪንግደም ቢዝነስ ፒኤልሲ የንግድ ስራዎን እንዴት እንደሚያሻሽል እና ወደ ኢትዮጵያ ምርጥ ምርቶች እንዴት እንደሚያቀርብልዎ ለማወቅ ከእኛ ጋር ይገናኙ " : "Connect with us to discover how Kingdom Business PLC can enhance your trading operations  and bring you closer to Ethiopia's finest products.",
   t29: Lang ? "ጉዞአችሁን ጀምሩ" : "ጉዞአችሁን ጀምሩ",
   
  }
  return (
<>
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-red-700 max-h-screen min-h-screen text-white mb-12'>
        <img src={logo} alt="logo" className='mb-10'/>
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
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl sm:text-5xl font-bold my-10'> {lang.t6}</h1>
        <p className='text-center max-w-150 text-xl text-gray-600 mb-10'> {lang.t7}</p>
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
    <div className='bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl my-20 mx-4 p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 md:mx-24'>
            <div className='flex flex-col w-full text-center '>
                <h1 className='text-4xl sm:text-5xl font-bold mb-6 '> {lang.t8}</h1>
                <div className='w-1/6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-12'></div>
                <p className='text-lg mb-6'> {lang.t9}</p>
                <p className='text-lg mb-6'> {lang.t10}</p>
                <div className='flex flex-col lg:flex-row gap-6 w-full'>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Mountain className='w-14 h-14 text-orange-500'/>
                        <h2 className='text-2xl font-bold'> {lang.t11}</h2>
                        <p className='text-md'> {lang.t12}</p>
                    </div>
                    <div className='bg-white flex flex-col text-center px-8 gap-3 py-6 rounded-lg shadow-xl w-full'>
                        <Leaf className='w-14 h-14 text-green-500'/>
                        <h2 className='text-2xl font-bold'> {lang.t13}</h2>
                        <p className='text-md'> {lang.t14}</p>
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
                        <h2 className='md:text-2xl font-bold text-white'> {lang.t15}</h2>
                        <p className='text-white'> {lang.t16}</p>
                    </div>
                </div>
            </div>
    </div>

    {/**Business Objectives */}
    <div className='flex flex-col '>
        <h1 className='text-4xl sm:text-5xl font-bold text-center'> {lang.t17}</h1>
        <p className='text-xl text-center'> {lang.t18}</p>
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

    {/**Vision */}
    <div className='py-24 px-4 sm:px-12 md:px-24'>
        <div className='flex flex-col  gap-6 bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-2xl lg:mx-24 mx-2 justify-center items-center '>
                <div className='bg-white/30 rounded-full p-2'> 
                    <Target className='text-white p-3 w-16 h-16'/>
                </div>
                <h1 className='text-4xl text-white font-bold text-center'> {lang.t19}</h1>
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
    <div className='bg-gray-50 px-4 sm:px-12 md:px-24 py-24 text-center flex flex-col items-center'>
        <h1 className='text-4xl sm:text-5xl  font-bold mb-6'> {lang.t20}</h1>
        <p className='text-xl max-w-200 mb-12 text-gray-600'> {lang.t21}</p>
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
    <div className=' bg-gradient-to-r from-red-500 to-red-700 min-h-screen md:px-12 lg:px-24 py-24 flex flex-col items-center'>
        <div className='bg-white/15 p-4 rounded-2xl mb-6'>
            <Crown className='w-16 h-16 text-amber-300'/>
        </div>
        <h1 className='md:text-7xl sm:text-5xl text-4xl text-white mb-8 font-bold text-center'> {lang.t22}</h1>
        <p className='text-xl text-center max-w-220 text-white mb-12'> {lang.t23}</p>
        
        {/**The Mini-Cards */}
        <div className='grid lg:grid-cols-3  gap-4 text-white mb-12'>
            <div className='col-span-1 group bg-white/20 border border-white/30 py-4 px-8 rounded-2xl flex md:gap-12 items-center hover:bg-white/30  transition-all duration-300 ease-in-out'>
                <Coffee className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> {lang.t24}</p>
            </div>
            <div className='col-span-1 group bg-white/20 border border-white/30 py-4 px-8 rounded-2xl flex md:gap-12 items-center hover:bg-white/30  transition-all duration-300 ease-in-out'>
                <Handshake className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> {lang.t25}</p>
            </div>
            <div className='col-span-1 group bg-white/20 border border-white/30 py-4 px-8 rounded-2xl flex md:gap-12 items-center hover:bg-white/30  transition-all duration-300 ease-in-out'>
                <Globe className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> {lang.t26}</p>
            </div>
        </div>

        {/**Map */}
        <h1 className='sm:text-4xl text-3xl text-white mb-8 font-bold text-center'> {lang.t27}</h1>
        <p className='text-xl text-center max-w-180 text-white mb-12'> {lang.t28}</p>
        <button className='py-4 px-6 rounded-2xl font-bold text-lg bg-white text-red-600 flex gap-4 items-center group shadow-xl mb-12'>{lang.t29}
            <ArrowRight className='group-hover:translate-x-1  transition-all duration-300 ease-in-out'/>
        </button>
        <Map/>
    </div>
</>
  )
}
