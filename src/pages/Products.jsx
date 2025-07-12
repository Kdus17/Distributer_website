import {Coffee,Handshake,Globe,Crown, Shield, Heart,  Zap, Award,Mountain, Leaf, Book, Target, CheckCircle, ArrowRight, PhoneCall, CoffeeIcon, Cuboid, Globe2, MountainIcon, Square, BoxIcon, CalendarDays, CalendarDaysIcon, Calendar, LucideCoffee, ForkKnife, PersonStanding, Contact, Contact2, Contact2Icon, Users, Wifi, Music, CuboidIcon} from "lucide-react"
import  cafe1  from "../assets/Images/cafe 1.jpg"
import  cafe2  from "../assets/Images/cafe 2.jpg"
import { useLanguageContext } from '../LanguageContext';
const Products = () => {
  const sectionNav = "flex gap-3  bg-white/15  inset-ring-1 inset-ring-gray-400/20  p-3 py-3 px-7 rounded-xl hover:bg-orange-600";
  const {Lang,toggleLang} = useLanguageContext();
  const  Langopt ={
    h1: Lang ? "ኪንግደም ":"kingdom",
    h2: Lang ? "ቢዝነስ ምርቶች እና ":"Business products &",
    h3: Lang ?"አገልግሎቶች":" services",
    h4: Lang ? "ከፍተኛ ጥራት ያላቸውን የኢትዮጵያ ቡና፣ የንግድ ምርቶችን እና ሙያዊ አገልግሎቶችን ያግኙ። በተጨማሪም፣ ስለ መጪው የባህል ካፌ ልምዳችን ይደሰቱ!":"  Discover our comprehensive range of premium Ethiopian coffee, trading products, and professional services. Plus, get excited about our upcoming cultural cafe experience!",
    h5: Lang ? "ከግብርና ወደ ስኒ፣ ከኢትዮጵያ ወደ ዓለም... ":"   from farm to cup, from to Ethiopia to the world.",
    h6: Lang ? "ከፍተኛ ጥራት ያለው ቡና ":"premium coffee",
    h7: Lang ? "የንግድ ምርቶች. ":"trading products",
    h8: Lang ? "አገልግሎቶች":"services",
    h9: Lang ? "ከፍተኛ ጥራት ያለው የኢትዮጵያ ቡና ":"Premium Ethiopian Coffee",
    h10: Lang ? "በቀጥታ ከኢትዮጵያ ምርጥ የቡና ክልሎች የሚመጣው እያንዳንዱ ዝርያ ልዩ ባህሪያት እና ልዩ ጥራት አለው። ":"Sourced directly from Ethiopia finest coffee regions, each variety  offers a unique characteristics and exceptional quality",
    h11: Lang ? "የጣዕም መገለጫ":"Flavor Profile",
    h12: Lang ? "ማቀነባበር ":"processing",
    h13: Lang ? "ከፍታ":"Altitude",
    h14: Lang ? "ጥራት ያለው ":"Quality",
    h15: Lang ? "የላቀ የኤክስፖርት ጥራት":"Premium Export Quality",
    h16: Lang ? "ከቡና ወደ ስኒ ግሩምነት ":"From Bean To Cup Exellence",
    h17: Lang ? "የእኛ ጥንቃቄ የተሞላበት ሂደት እያንዳንዱ የቡና ፍሬ ከፍተኛውን ዓለም አቀፍ መስፈርት የሚያሟላ መሆኑን ያረጋግጣል።":"Our meticulous process ensures every coffee bean meets the highest international standards",
    h18: Lang ? "ምንጮች":"sourcing",
    h19: Lang ? "ከገበሬዎች ጋር ቀጥተኛ ግንኙነት ማድረግ ":"direct contact with farmers",
    h20: Lang ? "የጥራት ቊጥጥር":"   Quality control",
    h21: Lang ? "ጥብቅ የጥራት ቊጥጥር":"  Rigorous quality control",
    h22: Lang ? "ማቀነባበር ":"processing",
    h23: Lang ? "የኤክስፖርት ማቀነባበሪያ እና የምግብ ማሸጊ ":"export processing and food packaging ",
    h24: Lang ? "ወደ ውጭ መላክ ":"export",
    h25: Lang ? "ዓለም አቀፍ የስርጭት አውታረ መረብ":"Global distribution network",
    h26: Lang ? "የኪንግደም ሀውስ ቡና ":"Kingdom house coffee",
    h27: Lang ? "በቀጣዩ ቡና ቤታችን ውስጥ እውነተኛውን የኢትዮጵያ ቡና ባህል ይለማመዱ። ከባህላዊ የቡና ሥነ ሥርዓቶች እስከ ዘመናዊ የመጠጥ ቴክኒኮች ድረስ የበለጸገውን የኢትዮጵያ ቡና ቅርስ ከጣፋጭ ባህላዊ ምግብ ጐን ለጐን እናሳያለን።":" Experience the authentic Ethiopian coffee culture in our upcoming cafe. From traditional coffee ceremonies to modern brewing techniques, we'll showcase the rich heritage of Ethiopian coffee alongside delicious traditional cuisine.",
    h28: Lang ? "የመክፈቻ ቀን":"opening day",
    h29: Lang ? "2025፣ መስከረም 9":"2025, september 9",
    h30: Lang ? "የመክፈቻ ቀን":"opening day",
    h31: Lang ? "2025፣ መስከረም 9":"2025, september 9",
    h32: Lang ? "እውነተኛ የኢትዮጵያ ቡና":"Authentic Ethiopian coffee",
    h33: Lang ? "ባህላዊ የቡና ሥነ-ሥርዓቶች እና ከፍተኛ ጥራት ያላቸው የአንድ ምንጭ ቡናዎች።":"traditional coffee ceremonies and premium single-origin brews",
    h34: Lang ? "የኢትዮጵያ ኵሲን።":"Ethiopian  Cuisine",
    h35: Lang ? "የኢትዮጵያን የበለጸገ የምግብ አዘገጃጀት ቅርስ የሚያሳዩ እውነተኛ ምግቦች":"Authentic dishes showcasing  Ethiopia's rich culinary heritage",
    h36: Lang ? "የባህል ተሞክሮ":"Cultural Experience ",
    h37: Lang ? "የኢትዮጵያን ባህል እና ወግ የሚያከብር ሁለንተናዊ አካባቢ። ":"  Immersive environment celebrating Ethiopian culture and traditio",
    h38: Lang ? "የንግድ ማዕከል.":"Business Hub",
    h39: Lang ? "ለስብሰባ፣ ለሥራ እና ለግንኙነት ዘመናዊ መገልገያዎች":" Modern amenities for meeting, work and networking",
    h40: Lang ? "መዝናኛ":"Entertainment",
    h41: Lang ? "ፊልሞች፣ ትርዒቶች፣ ዜናዎች እና ሌሎች የመዝናኛ ዓይነቶች።":"  Movies, shows, news and other form of Entertainment",
    h42: Lang ? "የጋራ ቦታ":"Community Space",
    h43: Lang ? " የቡና አፍቃሪዎችን እና የባህል አድናቂዎችን አንድ ላይ ማሰባሰብ።":"Bringing together coffee lovers and cultural  enthusiasts",
    h44: Lang ? "እንደተዘመኑ ይቈዩ":"Stay Updated",
    h45: Lang ? "ስለ ቡና ቤታችን መክፈቻ፣ ልዩ ዝግጅቶች እና ብቸኛ መረጃዎች በቅድሚያ ያግኙ።":"   Be first to  know about our cafe opening, special events and exclusive ",
    h46: Lang ? "አሳውቀኝ. ":"notify me",
    h47: Lang ? "ከእኛ ጋር ለመተባበር ዝግጁ ነዎት?":"Ready to Partner with us?",
    h48: Lang ? "ከፍተኛ ጥራት ባለው ቡናችን፣ በንግድ ምርቶቻችን፣ በሙያዊ አገልግሎቶቻችን ወይም በመጪው ቡና ቤታችን ላይ ፍላጐት ቢኖርዎት፣ በዓለም ዙሪያ ያሉ ማህበረሰቦችን እና ገበያዎችን የሚጠቅሙ ዘላቂ ሽርክናዎችን ለመገንባት እዚህ ነን. ":"Whether you're interested in our premium coffee, trading products, professional services, or excited about our upcoming cafe, we're here to build lasting partnerships that benefit communities and markets worldwide.",
    h49: Lang ? "የምርት ካታሎግ ይጠይቁ.":"Request product Catalogue",
    h50: Lang ? "የቀን መቁጠሪያ":"Schedule Consultation",

  }
  const coffeeProducts = [
    {
      name: "Yirgacheffe Premium",
      origin: "Yirgacheffe Region",
      profile: "Floral, Citrus, Wine-like",
      processing: "Washed",
      altitude: "1,700-2,200m",
      grade: "Grade 1",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      price: "Premium Export Quality",
      description: "Renowned for its bright acidity and complex floral notes, our Yirgacheffe coffee represents the pinnacle of Ethiopian coffee excellence."
    },
    {
      name: "Sidamo Excellence",
      origin: "Sidamo Region",
      profile: "Chocolate, Berry, Spice",
      processing: "Natural",
      altitude: "1,400-2,200m",
      grade: "Grade 1",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
      price: "Premium Export Quality",
      description: "Full-bodied with rich chocolate undertones and berry notes, Sidamo coffee offers a complex and satisfying cup."
    },
    {
      name: "Harrar Heritage",
      origin: "Harrar Region",
      profile: "Wine, Blueberry, Earthy",
      processing: "Natural",
      altitude: "1,500-2,100m",
      grade: "Grade 1",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
      price: "Premium Export Quality",
      description: "One of the world's oldest coffee varieties, Harrar offers distinctive wine-like characteristics and fruity complexity."
    },
    {
      name: "Limu Classic",
      origin: "Limu Region",
      profile: "Balanced, Sweet, Mild",
      processing: "Washed",
      altitude: "1,400-1,800m",
      grade: "Grade 2",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      price: "Export Quality",
      description: "Well-balanced with mild acidity and sweet undertones, perfect for those seeking a smooth, approachable Ethiopian coffee."
    }
  ];
  return (
    <div className="flex flex-col items-center">
   {/*   Hero  */}
      <div className="flex flex-col gap-2 items-center bg-red-500 w-full dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
 <div className='flex gap-2 pt-5'>
            <div className='bg-gray-400/20 rounded-full p-1 '><Coffee className='w-16 h-16 p-3'/></div>
            <div className='bg-gray-400/20 rounded-full p-1'><Crown className='w-16 h-16 p-3 text-yellow-400'/></div>
            <div className='bg-gray-400/20 rounded-full p-1'><Globe className='w-16 h-16 p-3'/></div>
        </div>
        <h1 className="text-center lg:text-6xl text-3xl md:text-4xl font-bold my-5 max-w-[500px]">
          {Langopt.h1} <span className="text-yellow-300">{Langopt.h2}</span> {Langopt.h3}
        </h1>
        <p className="text-gray-600 text-center max-w-[650px]">
{Langopt.h4}
        </p>
        <p className="text-center mt-3 p-4 dark:bg-white/5 dark:text-gray-400 bg-gray-600  inset-ring-1 inset-ring-gray-400/20 rounded-lg "> 
{Langopt.h5}
        </p>
      </div>
{/*  section nav  */}
<nav className="flex gap-4 justify-center  w-full py-6 dark:bg-darkc "> 
  <a href="#coffee" className={sectionNav}> <CoffeeIcon/> {Langopt.h6}</a>
  <a href="" className={sectionNav}><Cuboid/> {Langopt.h7}</a>
  <a href="#cafe" className={sectionNav}><Globe/>{Langopt.h8}</a>
</nav>
{/* premium Ethiopian coffee  */}
<section id="coffee" className=" dark:bg-darkc w-full  ">
<div className="flex flex-col items-center gap-4 px-12 py-4">
  <h1 className="text-center text-black dark:text-white font-bold text-4xl mt-4"> 
{Langopt.h9}
  </h1>
<p className="text-center text-gray-600 max-w-[600px]">
{Langopt.h10}</p>
{/* coffee cards */}
<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
{coffeeProducts.map((coffee,key)=>(<div key={key} className="flex flex-col rounded-3xl overflow-hidden max-w-[600px] dark:bg-gray-800/60 bg-white mb-2  shadow-lg dark:text-gray-200">
  <div  style={{ backgroundImage: `url(${coffee.image})` }} className={` bg-cover   h-[200px] relative `}>
  <span  className="bg-yellow-400 px-1 py-0.5 rounded-full mt-3 mr-4  absolute top-0 right-0 ">{coffee.grade}</span>
<p className="flex flex-col gap-1 absolute bottom-0 left-0 pb-2 pl-5  text-white">
  <span>
   {coffee.name}
  </span>
  <span>
  {coffee.origin}
  </span>
</p>
  </div>
<div className="  flex flex-col gap-2 p-4 ">
<p>{coffee.description}</p>
<div className="grid  grid-cols-2 gap-4 ">
<div className="flex flex-col gap-1">
  <span className="text-gray-500">{Langopt.h11}</span>
  <span>{coffee.profile}</span>
</div>
<div className="flex flex-col gap-2">
  <span  className="text-gray-500">{Langopt.h12}</span>
  <span>{coffee.processing}</span>
</div>
<div className="flex flex-col gap-2">
  <span className="text-gray-500">{Langopt.h13}</span>
  <span>{coffee.altitude}</span>
</div>
<div className="flex flex-col gap-2">
  <span className="text-gray-500">{Langopt.h14}</span>
  <span  className="text-red-500">{Langopt.h15}</span>
</div>
</div>
</div>
</div>))}
</div>

{/* from bean to cup Exellence */}
<div className="flex flex-col items-center gap-4 mt-6  w-full py-6 bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 shadow-lg  rounded-xl shadow-gray-800 dark:text-white">
  <h1 className="text
   text-3xl font-bold">
{Langopt.h16}
  </h1>
  <p className="text-black text-center">
 {Langopt.h17}</p>
  <div className="flex  md:justify-around md:flex-row flex-col w-full  ">
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <MountainIcon className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold text-center"> 
                      {Langopt.h18}
                    </h1>
                    <p className="text-center text-gray-400">
{Langopt.h19}
                    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <Shield className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold text-center"> 
                 {Langopt.h20}
                    </h1>
                    <p className="text-center text-gray-400">
                    {Langopt.h21}
                    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <BoxIcon className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold text-center"> 
                   {Langopt.h22}
                    </h1>
                    <p className="text-center text-gray-400">
{Langopt.h23} 
                    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <Globe className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold text-center"> 
               {Langopt.h24}
                    </h1>
                    <p className="text-center text-gray-400">
{Langopt.h25}
                    </p>
  </div>
  
  </div>
</div>
</div> 
</section>

<section id ="cafe" className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 gap-4  px-6 py-6 dark:bg-darkc">
  <div className="grid grid-cols-1 gap-4">
 {/*    Kingdome house coffee card */}
<div className="flex flex-col justify-end gap-4  pr-20 pl-8 pt-6 bg-gradient-to-br dark:from-gray-800 from-red-50 dark:to-gray-700 to-red-600 rounded-xl  py-4 shadow-lg ">
<div className="flex justify-start gap-4 ">
  <div className="bg-yellow-300  rounded-full ">
    <Crown className="w-14 h-14 p-3"/>
  </div>

<div>
  <h1 className="text-3xl font-bold">
{Langopt.h26}
  </h1>
</div>
</div>
<p>
 {Langopt.h27}</p>
  
{/*  the two cards */}
<div className="flex gap-3">
<div className="flex flex-col items-start w-full  bg-white/5  inset-ring-1 inset-ring-gray-400/20 rounded-lg p-3">
<Calendar/>
<p>{Langopt.h28}</p>
<time dateTime="2025-9-9">{Langopt.h29} </time>
  </div>
  <div className="flex flex-col items-start w-full bg-white/5  inset-ring-1 inset-ring-gray-400/20 rounded-lg p-3">
<Calendar/>
<p>{Langopt.h30}</p>
<time dateTime="2025-9-9">{Langopt.h31} </time>
  </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4   p-4">
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-600 dark:from-gray-800  dark:to-gray-700">
    <div className=' p-2 rounded-full w-fit bg-black/20 dark:bg-yellow-300/30'>
            <LucideCoffee className='w-9 h-9 p-1 text-black dark:text-yellow-400  '/>
     </div>
     <h1 className="text-2xl font-bold text-center">
{Langopt.h32}
     </h1>
     <p>
      {Langopt.h33}
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-600  dark:from-gray-800  dark:to-gray-700">
    <div className=' p-2 rounded-full w-fit bg-black/20 dark:bg-yellow-300/30'>
            <ForkKnife className='w-9 h-9 p-1 text-black dark:text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold text-center">
{Langopt.h34}
     </h1>
     <p>
{Langopt.h35}
       </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-600  dark:from-gray-800  dark:to-gray-700">
    <div className=' p-2 rounded-full w-fit bg-black/20 dark:bg-yellow-300/30'>
            <Users className='w-9 h-9 p-1 text-black dark:text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold text-center">
{Langopt.h36}
     </h1>
     <p>
{Langopt.h37}
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-600  dark:from-gray-800  dark:to-gray-700">
    <div className=' p-2 rounded-full w-fit bg-black/20 dark:bg-yellow-300/30'>
            <Wifi className='w-9 h-9 p-1 text-black dark:text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold text-center">
{Langopt.h38}
     </h1>
     <p>
{Langopt.h39}
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-600  dark:from-gray-800  dark:to-gray-700">
    <div className=' p-2 rounded-full w-fit bg-black/20 dark:bg-yellow-300/30'>
            <Music className='w-9 h-9 p-1 text-black  dark:text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold text-center">
{Langopt.h40}
     </h1>
     <p>
{Langopt.h41}
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-600  dark:from-gray-800  dark:to-gray-700">
    <div className=' p-2 rounded-full w-fit  bg-black/20 dark:bg-yellow-300/30'>
            <Heart className='w-9 h-9 p-1 text-black dark:text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold text-center">
{Langopt.h42}
     </h1>
     <p>
{Langopt.h43}
     </p>
     </div>

</div>

{/* The images */}

  </div>
<div className="flex flex-col justify-around gap-4 px-8 ">
<img src={cafe1} alt="img1"  />
<img src={cafe2} alt="img2"  />
</div>
</section> 

{/* stay updated */}
<div className="flex flex-col  items-center gap-6 w-full  bg-gradient-to-r from-red-400 to-red-600   pt-8  pb-4 dark:from-gray-800 dark:to-gray-700">
  <h1 className="text-3xl  font-bold">
{Langopt.h44}
  </h1>
  <p className="items-center">
    {Langopt.h45}
  </p>
  <div  className="flex justify-center gap-4 ">
 <input type="email" className="pl-4 py-2 pr-10 dark:text-gray-500 rounded-xl bg-gray-900/70 inset-ring-1 inset-ring-gray-400/20"  placeholder="enter your email" name="" id="" />
 <button className=" flex justify-around py-2 px-5 gap-1 bg-gray-700 dark:bg-yellow-500 rounded-lg">
  {Langopt.h46} <ArrowRight/>
 </button>
  </div>

</div>
{/* ready to partner to us */}
<div className="flex flex-col items-center gap-7 w-full py-4   dark:bg-darkc">
  <h1 className="text-6xl font-bold text-center dark:text-white">{Langopt.h47}</h1>
  <p className="text-center max-w-[700px] dark:text-gray-400">{Langopt.h48}</p>
<div className="flex justify-center gap-4 dark:text-white">
  <button className="flex justify-around gap-3 px-4 py-4 bg-red-500 rounded-xl">
<p>{Langopt.h49}</p>
<CuboidIcon/>
  </button>
  <button className="flex justify-around gap-3 px-4 py-4 rounded-xl bg-gray-600/30 inset-ring-1 inset-ring-gray-400/20">
<p>{Langopt.h50}  </p>
<Calendar/>
  </button>

</div>
</div>

    </div>
  )
}

export default Products