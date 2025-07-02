import {  ArrowRight,  CheckCheck,  CircleCheck,  CircleCheckBig,  Clock, Coffee, CoffeeIcon, Globe, Heart, Leaf, LeafIcon,  Star, Target, TrendingUp, Truck, Users } from 'lucide-react'
import { useLanguageContext } from '../LanguageContext';
import { useContext } from 'react';
export default function Home_2() {
    const {Lang,toggleLang} = useLanguageContext()
    const language = { 
    promotingethiopian: Lang ? "የኢትዮጵያ ቡና" : "Promoting   Ethiopian",
    h1: Lang ?  "ጥራጥሬዎችን ማስተዋወቅ":  "Coffee & Pulses" ,
    h2: Lang ?  "በዓለም አቀፍ ደረጃ":  "Globally" ,
    h3: Lang ?  "ለደንበኞች እርካታ ጥራት እና ዋጋን በማስቀደም ኪንግደም በኤክስፖርት እና በአጠቃላይ የንግድ ንግድ መሪዎችን በማቋቋም ላይ ይገኛል።":  "Establishing Kingdom among the leaders in export and general trading business, prioritizing quality and value for customer satisfaction." ,
    h4: Lang ?  "ምርቶቻችንን ይመልከቱ":  "Explore Our Products" ,
    h5: Lang ?  "ተጨማሪ መረጃ ያግኙ":  "Learn more" ,
    h6: Lang ?  "ከፍተኛ ጥራት ያለው ቡና":  "Premium Coffee" ,
    h7: Lang ?  "ልዩ መዓዛና የተለየ ጣዕም አለው":  "Special aroma & distinct flavor",
    h8: Lang ?  "ጥራቱን የጠበቁ ምርቶች":  "Quality Pulses",
    h9: Lang ?  "በነባሪነት ኦርጋኒክ":  "Organic by default" ,
    h10: Lang ?  "ግሎባል ኤክስፖርት":  "Global Export" ,
    h11: Lang ?  "ዓለም አቀፍ ገበያዎች":  "International markets" ,
    h12: Lang ?  "እየጨመረ የሚሄድ ንግድ":  "Growing Business" ,
    h13: Lang ?  "እንቅስቃሴዎችን ማስፋት":  "Expanding operations" ,
    h14: Lang ?  "ራዕያችን እና ተልዕኮችን":  "Our Vision & Mission" ,
    h15: Lang ?  "ራእይ":  "Leading the way in Ethiopian agricultural exports with quality and value at our core" ,/* ERROR HERE */
    h16: Lang ?  "ተልዕኮ ":  " Mission" ,
    h17: Lang ?  "የኢትዮጵያ ቡና እና ጥራጥሬዎችን በዓለም አቀፍ ደረጃ በማስተዋወቅ ኪንግደም በኤክስፖርት እና በአጠቃላይ በንግድ ንግድ መሪዎችን በማቋቋም ለደንበኞች፣ ለሰራተኞች እና ለባለድርሻ አካላት እርካታ ጥራት እና እሴት ቅድሚያ ይሰጣል":  "To promote Ethiopian coffee and pulses globally, establishing KINGDOM among the leaders in the export and general trading business that prioritizes quality and value for the satisfaction of customers, employees and stakeholders" ,
    h18: Lang ?  "ራእይ":"Vision",
    h19: Lang ?  "ትርፍ በሚያስገኝ የቡና እና የጥራጥሬ ምርቶች ኤክስፖርት ንግድ ላይ ለመሳተፍ በትርፍ መልክ ገቢን ለማመንጨት እና በዚህም የንግድ ሥራውን ለማስፋት የአክሲዮን ባለቤቶችን ፍላጐት ለማሟላት":  "To participate in profitable export trade of coffee and pulses to generate income in the form of profit and thereby expand the business to address shareholder expectations." ,
    h20: Lang ?  "ኪንግደም ቢዝነስ መምረጥ ያለብን ለምንድን ነው":  "Why Choose Kingdom Business" ,
    h21: Lang ?  "የኢትዮጵያ የግብርና ምርቶችን ወደ ውጭ ለመላክ አስተማማኝ አጋራችሁ":  "Your trusted partner for premium Ethiopian agricultural export",
    h22: Lang ?  "ከፍተኛ ጥራት ያለው":  "Premium Quality" ,
    h23: Lang ?  "ልዩ መዓዛና ልዩ ጣዕም ያለው የኢትዮጵያ ቡና ለየት ባለ ጥራቱ በዓለም አቀፍ ገበያዎች ከፍተኛ ዋጋ ይሰጠዋል።":  "Ethiopian coffee with special aroma and distinct flavor, highly valued in international markets for its exceptional quality." ,
    h24: Lang ?  "በነባሪነት ኦርጋኒክ":  "Organic by Default" ,
    h25: Lang ?  "ቡናችን እና ጥራጥሬዎቻችን በተፈጥሮ ኦርጋኒክ ናቸው፣ ያለ ሰው ሠራሽ ኬሚካሎች ወይም ፀረ-ተባይ መድኃኒቶች ባህላዊ ዘዴዎችን በመጠቀም ያደጉ ናቸው።":  "Our coffee and pulses are naturally organic, grown using traditional methods without synthetic chemicals or pesticides." ,
    h26: Lang ?  "የባለሙያዎች ቡድን":  "Expert Team" ,
    h27: Lang ?  "ልዩ እውቀት፣ ክህሎትና በተለያዩ የኢኮኖሚ ዘርፎች የብዙ ዓመታት የሥራ ልምድ ያለው ብቃት ያለው የአመራር ቡድን":  "Competent management team with special knowledge, skills, and years of business experience in various economic sectors." ,
    h28: Lang ?  "የተሟላ መፍትሄዎች":  "Complete Solutions" ,
    h29: Lang ?  "የኤክስፖርት ሎጂስቲክስን፣ የጥራት ማረጋገጫን እና የደንበኞችን ድጋፍ ጨምሮ አጠቃላይ የንግድ አገልግሎቶች።":  "Comprehensive trading services including export logistics, quality assurance, and customer support throughout the process." ,
    h30: Lang ?  "አስተማማኝ ማድረስ":  "Reliable Delivery" ,
    h31: Lang ?  "የንግድ መስፈርቶች ለማሟላት ውጤታማ ሎጂስቲክስ አስተዳደር ጋር ወጥነት እና ወቅታዊ መላኪያ መርሃግብሮች.":  "Consistent and timely delivery schedules with efficient logistics management to meet your business requirements." ,
    h32: Lang ?  "አገልግሎታችን":  "Our Services" ,
    h33: Lang ?  "ለዓለም ገበያዎች ሁሉን አቀፍ የግብይት መፍትሄዎች":  "Comprehensive trading solutions for global markets" ,
    h34: Lang ?  "" : "Coffee Export",
    h35: Lang ?  "ልዩ መዓዛና ልዩ ጣዕም ያለው ጥራት ያለው የኢትዮጵያ ቡና ወደ ዓለም አቀፍ ገበያዎች መላክ":  "Export quality Ethiopian coffee to international markets, known for its special aroma and distinct flavor." ,
    h36: Lang ?  "ከፍተኛ ጥራት ያላቸው ባቄላዎች።":  "Premium quality beans" ,
    h37: Lang ?  "ዓለም አቀፍ መመዘኛዎች":  "International standards" ,
    h38: Lang ?  "ዓለም አቀፍ ስርጭት":  "Global distribution" ,
    h39: Lang ?  "ምርቶችን ወደ ውጭ መላክ":  "Pulses Export" ,
    h40: Lang ?  "ከፍተኛ ጥራት ያላቸው የኢትዮጵያ ጥራጥሬዎች፣ በነባሪነት ኦርጋኒክ፣ ዓለም አቀፍ የጤና ምግብ ምርቶች ፍላጐትን የሚያሟሉ":  "High-quality Ethiopian pulses, organic by default, meeting international demand for healthy food products." ,
    h41: Lang ?  "በነባሪነት ኦርጋኒክ.":  "Organic by default" ,
    h42: Lang ?  "የተትረፈረፈ ምግብ":  "Nutritious varieties" ,
    h43: Lang ?  "ዘላቂ ምንጭ":  "Sustainable sourcing" ,
    h44: Lang ?  "አጠቃላይ ግብይት":  "General Trading" ,
    h45: Lang ?  "የጽህፈት መሣሪያዎችን፣ የወረቀት ምርቶችን፣ የቤት ዕቃዎችን እና የቤት ዕቃዎችን ጨምሮ አጠቃላይ የንግድ አገልግሎቶች":  "Comprehensive trading services including stationery materials,  paper products, household equipment, and furniture." ,
    h46: Lang ?  "የተለያዩ ምርቶች":  "Diverse product range" ,
    h47: Lang ?  "የጥራት ማረጋገጫ":  "Quality assurance" ,
    h48: Lang ?  "አስተማማኝ የአቅርቦት ሰንሰለት":  "Reliable supply chain" ,
    h49: Lang ?  "የኢትዮጵያ ቡና ልዕልና":  "Ethiopian Coffee Excellence" ,
    h50: Lang ?  "የኢትዮጵያ ቡና በዓለምአቀፍ ገበያ ከፍተኛ ፍላጐት ያለው ሲሆን በተለይም ለልዩ መዓዛው እና ለየት ባለ ጣዕሙ የተከበረ ነው":  "Ethiopian coffee enjoys high demand in the international market, specifically valued for its special aroma and distinct flavor." ,
    h51: Lang ?  "ለኢትዮጵያ ቡና ልዩ ባሕርያት ከፍተኛ ዓለም አቀፍ ፍላጐት":  "High international demand for Ethiopian coffee's unique characteristics" ,
    h52: Lang ?  "የአካባቢው አርሶ አደሮች የሚጠቀሙባቸው ኦርጋኒክ የማልማት ዘዴዎች":  "Organic by default cultivation methods used by local farmers" ,
    h53: Lang ?  "ልዩ መዓዛ እና ልዩ የጣዕም መገለጫ በዓለም አቀፍ ደረጃ ከፍተኛ ዋጋ አለው":  "Special aroma and distinct flavor profile highly valued globally" ,
    h54: Lang ?  "ተፈጥሯዊ":  "Natural" ,
    h55: Lang ?  "ዓለም አቀፋዊ":  "Global" ,
    h56: Lang ?  "ተደራሽነት":  "Reach" ,
    h57: Lang ?  "ፕሪሚየም":  "Premium" ,
    h58: Lang ?  "ጥራት ያለው":  "Quality" ,
    h59: Lang ?  "እምነት የሚጣልበት":  "Trusted" ,
    h60: Lang ?  "አጋር":  "Partner" ,
   
}
    
  return (
    <div>
        {/**Hero */}
        <div className='flex flex-col lg:flex-row w-full p-4 lg:p-24 gap-2 bg-gradient-to-r from-red-50 to-transparent shadow-lg shadow-gray-100  dark:bg-[#121212]'>
            {/**Text With Buttons */}
            <div className='flex flex-col'>
                <h1 className='text-4xl sm:text-6xl font-bold'>{language.promotingethiopian}</h1>
                <h1 className='text-4xl sm:text-6xl font-bold text-red-600'>{language.h1}</h1>
                <p className='text-2xl sm:text-3xl text-gray-500'>{language.h2}</p>
                <br />
                <p className='text-xl text-gray-500'>{language.h3}</p>
                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    <div className='relative bg-black rounded-lg'>
                    <button className='w-full  md:relative hover:bg-red-700 border-2 border-gray-200 -top-1 right-1 active:top-0 active:right-0 active:bg-red-800 
                    flex items-center rounded-lg px-8 active:border-transparent gap-2 bg-red-600 text-white py-4'>{language.h4} <ArrowRight/></button>
                    </div>
                    <div className='relative bg-black rounded-lg'>
                    <button className='w-full md:relative -top-1 right-1 py-4 rounded-lg px-8  bg-white active:top-0 active:right-0  
                    border-2 border-red-600 active:border-transparent text-red-600 hover:bg-gray-100 active:bg-gray-300'>{language.h5}</button>
                    </div>
                </div>
            </div>

            {/**The Four Figures */}
            <div className='w-full bg-red-600 rounded-3xl rotate-3 my-8 p-8 flex flex-col justify-center items-center gap-2 dark:bg-gray-800'>
                <div className='bg-white -rotate-3 w-full sm:w-11/12 rounded-3xl flex flex-col gap-6 py-8 px-8 select-none dark:bg-gray-700'>
                    <div className='flex gap-4 sm:gap-8 justify-center dark:text-gray-600'>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <Coffee className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold dark:text-gray-900'>{language.h6}</h2>
                            <p className='text-gray-500'>{language.h7}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <Leaf className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold dark:text-gray-900'>{language.h8}</h2>
                            <p className='text-gray-500'>{language.h9}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 sm:gap-8 justify-center  dark:text-gray-600'>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <Globe className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold dark:text-gray-900'>{language.h10}</h2>
                            <p className='text-gray-500'>{language.h11}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <TrendingUp className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold dark:text-gray-900'>{language.h12}</h2>
                            <p className='text-gray-500'>{language.h13}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        {/**Our Mission and Vision */}
        <div className='w-full p-4 lg:px-24 bg-gray-50 flex flex-col items-center py-24 gap-4 dark:bg-[#121212] dark:text-[#E0E0E0]'>
            <h1 className='px-4  lg:px-24 text-4xl font-bold'>{language.h14}</h1>
           <p className='px-4 lg:px-24 text-xl text-gray-600'>{language.h15}</p>
<div className='flex flex-col lg:flex-row w-full gap-10 mt-24'>
    <div className='bg-white rounded-2xl w-full p-8 flex flex-col gap-8 shadow-lg hover:shadow-xl dark:bg-gray-700 '>
        <div className='flex gap-4 items-center'>
            <Target className='min-w-14 w-14 h-14 rounded-md text-red-600 bg-red-200  dark:bg-red-900  p-2'/>
            <p className='text-2xl font-bold'>{language.h16}</p>
        </div>
        <p className='text-lg text-gray-600 dark:text-black'>{language.h17}</p>
    </div>
    <div className='bg-white rounded-2xl w-full p-8 flex flex-col gap-8 shadow-lg hover:shadow-xl dark:bg-gray-700'>
        <div className='flex gap-4 items-center'>
            <Heart className='min-w-14  w-14 h-14 rounded-md text-red-600 bg-red-200 dark:bg-red-900 p-2'/>
            <p className='text-2xl font-bold'>{language.h18}</p>
        </div>
        <p className='text-lg text-gray-600 dark:text-black'>{language.h19}</p>
    </div>
</div>
</div>

{/**Why Choose Us */}
<div className='flex flex-col gap-6 py-24 dark:bg-[#121212]'>
    <h1 className='px-4  lg:px-24 text-4xl font-bold self-center dark:text-white'>{language.h20}</h1>
    <p className='px-4 lg:px-24 text-xl text-gray-600 self-center'>{language.h21}</p>
    <div className='p-4 py-12 lg:px-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

        {/**Feature One */}
        <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
            <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                <Star className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                <h2 className='row-span-1 text-xl font-bold self-center'>{language.h22}</h2>
                <p className='row-span-1 text-gray-600'>{language.h23}</p>
            </div>
        </div>

        {/**Feature Two */}
        <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
            <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                <LeafIcon className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                <h2 className='row-span-1 text-xl font-bold self-center'>{language.h24}</h2>
                <p className='row-span-1 text-gray-600'>{language.h25}.</p>
            </div>
        </div>

        {/**Feature Three */}
        <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
            <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                <Users className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                <h2 className='row-span-1 text-xl font-bold self-center'>{language.h26}</h2>
                <p className='row-span-1 text-gray-600'>{language.h27}</p>
            </div>
        </div>

        {/**Feature Four */}
        <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
            <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                <Truck className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                <h2 className='row-span-1 text-xl font-bold self-center'>{language.h28}</h2>
                <p className='row-span-1 text-gray-600'>{language.h29}</p>
            </div>
        </div>

        {/**Feature Five */}
        <div className='bg-gradient-to-r from-red-50  md:col-span-2 lg:col-span-1 group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
            <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                <Clock className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                <h2 className='row-span-1 text-xl font-bold self-center'>{language.h30}</h2>
                <p className='row-span-1 text-gray-600'>{language.h31}</p>
            </div>
        </div>
    </div>
</div>

{/**Services */}
<div className='flex flex-col gap-6 py-36 bg-gray-50 px-4 lg:px-24 dark:bg-[#121212]'>
    <h1 className='text-4xl font-bold self-center  text-gray-600 dark:text-white'>{language.h32}</h1>
    <p className='text-xl text-gray-600 self-center mb-12'>{language.h33}</p>

    {/**Service Cards */}
    <div className='grid lg:grid-cols-3 gap-8 '>
        <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl dark:bg-gray-700'>
            <CoffeeIcon className='w-12 h-12 text-red-600 mb-6'/>
            <h1 className='text-xl font-bold mb-4 text-black'>{language.h34}</h1>
            <p className='text-gray-600  mb-6 dark:text-black'>{language.h35}</p>
            <div className='flex flex-col gap-3 text-gray-600 mb-6 dark:text-black '>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h36}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h37}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h38}</p>
                </div>
            </div>
        </div>

        <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-x dark:bg-gray-700 '>
            <LeafIcon className='w-12 h-12 text-red-600 mb-6'/>
            <h1 className='text-xl font-bold mb-4 dark:text-black'>{language.h39}</h1>
            <p className='text-gray-600  mb-6 dark:text-black'>{language.h40}</p>
            <div className='flex flex-col gap-3 text-gray-600 mb-6 dark:text-black'>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h41}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h42}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h43}</p>
                </div>
            </div>
        </div>

        <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl dark:bg-gray-700 '>
            <Users className='w-12 h-12 text-red-600 mb-6'/>
            <h1 className='text-xl font-bold mb-4'>{language.h44}</h1>
            <p className='dark:text-black mb-6'>{language.h45}</p>
            <div className='flex flex-col gap-3 text-gray-600 dark:text-black mb-6'>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h46}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h47}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig className='text-green-600'/>
                    <p>{language.h48}</p>
                </div>
            </div>
        </div>
    </div>
</div>

{/**Coffee Excellence Card */}
<div className='py-36 px-4 dark:bg-[#121212] lg:px-24'>
    <div className='flex flex-col lg:flex-row gap-12 bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-2xl dark:from-black dark:to-gray-600'>
        <div className='w-full flex flex-col gap-6'>
            <h2 className='text-4xl font-bold text-white'>{language.h49}</h2>
            <p className='text-red-100 text-xl'>{language.h50}</p>
            <div className='flex flex-col gap-6 text-red-100 '>
                <div className='flex gap-2'>
                    <CircleCheckBig />
                    <p>{language.h51}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig />
                    <p>{language.h52}</p>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig />
                    <p>{language.h53}</p>
                </div>
            </div>
        </div>
        <div className='w-full lg:mt-10'>
            <div className='bg-gray-100/30   py-8 rounded-2xl'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-1 flex flex-col gap-2 items-center'>
                        <h3 className='text-3xl text-white font-bold'>100%</h3>
                        <p className='text-xl text-red-100'>{language.h54}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-2 items-center'>
                        <h3 className='text-3xl text-white font-bold'>{language.h55}</h3>
                        <p className='text-xl text-red-100'>{language.h56}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-2 items-center'>
                        <h3 className='text-3xl text-white font-bold '>{language.h57}</h3>
                        <p className='text-xl text-red-100'>{language.h58}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-2 items-center'>
                        <h3 className='text-3xl text-white font-bold'>{language.h59}</h3>
                        <p className='text-xl text-red-100'>{language.h60}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
