import {Coffee,Handshake,Globe,Crown, Shield, Heart,  Zap, Award,Mountain, Leaf, Book, Target, CheckCircle, ArrowRight, PhoneCall, CoffeeIcon, Cuboid, Globe2, MountainIcon, Square, BoxIcon, CalendarDays, CalendarDaysIcon, Calendar, LucideCoffee, ForkKnife, PersonStanding, Contact, Contact2, Contact2Icon, Users, Wifi, Music, CuboidIcon} from "lucide-react"
import  cafe1  from "../assets/Images/cafe 1.jpg"
import  cafe2  from "../assets/Images/cafe 2.jpg"
const Products = () => {
  const sectionNav = "flex gap-3 bg-gray-400/10 py-3 px-7 rounded-xl hover:bg-orange-600";
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
      <div className="flex flex-col gap-2 items-center">
 <div className='flex gap-2 pt-5'>
            <div className='bg-gray-300/20 rounded-full p-1 '><Coffee className='w-16 h-16 p-3'/></div>
            <div className='bg-gray-300/20 rounded-full p-1'><Crown className='w-16 h-16 p-3 text-yellow-400'/></div>
            <div className='bg-gray-300/20 rounded-full p-1'><Globe className='w-16 h-16 p-3'/></div>
        </div>
        <h1 className="text-center text-9xl sm:text-5xl font-bold my-5 max-w-[500px]">
          kingdom <span className="text-yellow-300">Business products &</span> services
        </h1>
        <p className="text-gray-600 text-center max-w-[650px]">
          Discover our comprehensive range of premium Ethiopian coffee, trading products, and professional services. Plus, get excited about our upcoming cultural cafe experience!
        </p>
        <p className="text-center mt-3 p-4 bg-gray-400/10 rounded-xl"> 
          from farm to cup, from to Ethiopia to the world.
        </p>
      </div>
{/*  section nav  */}
<nav className="flex gap-4 justify-center  mt-6"> 
  <a href="#coffee" className={sectionNav}> <CoffeeIcon/> premium coffee</a>
  <a href="" className={sectionNav}><Cuboid/> trading products</a>
  <a href="#cafe" className={sectionNav}><Globe/> services</a>
</nav>
<section id="coffee" className="flex flex-col items-center gap-4 px-12 bg-red-500">
  <h1 className="text-center text-black font-bold text-4xl mt-4"> 
Premium Ethiopian Coffee
  </h1>
<p className="text-center text-gray-600 max-w-[600px]">
Sourced directly from ethiopia finest coffee regions, each variety  offers a unique characteristics and exceptional quality.
</p>
{/* coffee cards */}
<div className="grid grid-cols-2 gap-3   ">
{coffeeProducts.map((coffee,key)=>(<div key={key} className="flex flex-col rounded-3xl overflow-hidden max-w-[600px] bg-white mb-2  shadow-lg ">
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
  <span className="text-gray-500">Flavor Profile</span>
  <span>{coffee.profile}</span>
</div>
<div className="flex flex-col gap-2">
  <span  className="text-gray-500">proccessing</span>
  <span>{coffee.processing}</span>
</div>
<div className="flex flex-col gap-2">
  <span className="text-gray-500">Altitude</span>
  <span>{coffee.altitude}</span>
</div>
<div className="flex flex-col gap-2">
  <span className="text-gray-500">Quality</span>
  <span  className="text-red-500">Premium Export Quality</span>
</div>
</div>
</div>
</div>))}
</div>

{/* from bean to cup Exellence */}
<div className="flex flex-col items-center gap-4 mt-6 w-full mx-15">
  <h1 className="text
   text-3xl font-bold">
From Bean To Cup Exellence
  </h1>
  <p className="text-black text-center">
    Our meticulous process ensures every coffee bean meets the highest international standards
  </p>
  <div className="flex justify-around w-full ">
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <MountainIcon className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold"> 
                      Sourcing
                    </h1>
                    <p className="">
direct contact with farmers
                    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <Shield className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold"> 
                   Quality control
                    </h1>
                    <p className="">
                      Rigorous quality control
                    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <BoxIcon className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold"> 
                    Processing
                    </h1>
                    <p className="">
export processing and food packaging 
                    </p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <div className='bg-red-50  p-2 rounded-full '>
                        <Globe className='w-14 h-14 p-3 text-red-600'/>
                    </div>
                    <h1 className="text-2xl font-bold"> 
                 Export
                    </h1>
                    <p className="">
Global distribution network
                    </p>
  </div>
  
  </div>
</div>
{/* coffee section */}
</section>
<section id ="cafe" className="grid grid-cols-2 bg-gray-200 gap-4">
  <div className="grid grid-cols-1">
<div className="flex flex-col justify-end gap-4  pr-20 pl-8 pt-6 bg-gray-500 rounded-xl ">
<div className="flex justify-start gap-4 ">
  <div className="bg-yellow-300  rounded-full ">
    <Crown className="w-14 h-14 p-3"/>
  </div>

<div>
  <h1 className="text-3xl font-bold">
Kingdom house coffee
  </h1>
</div>
</div>
<p>
  Experience the authentic Ethiopian coffee culture in our upcoming cafe. From traditional coffee ceremonies to modern brewing techniques, we'll showcase the rich heritage of Ethiopian coffee alongside delicious traditional cuisine.
  </p>
<div className="flex gap-3">
  <div className="flex flex-col items-start w-full bg-black/50 rounded-lg p-3">
<Calendar/>
<p>Opening date</p>
<time dateTime="2025-9-9">2025, septemeber 9 </time>
  </div>
  <div className="flex flex-col items-start w-full bg-black/50 rounded-lg p-3">
<Calendar/>
<p>Opening date</p>
<time dateTime="2025-9-9">2025, septemeber 9 </time>
  </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4  bg-gray-500 p-4">
  <div className=" flex  flex-col bg-gray-100 p-4 rounded-lg">
    <div className=' p-2 rounded-full w-fit bg-yellow-300/30'>
            <LucideCoffee className='w-9 h-9 p-1 text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold">
Authentic Ethiopian coffee
     </h1>
     <p>
      traditional coffee ceremonies and premium single-origin brews
     </p>
     </div>
  <div className=" flex  flex-col bg-gray-100 p-4 rounded-lg">
    <div className=' p-2 rounded-full w-fit bg-yellow-300/30'>
            <ForkKnife className='w-9 h-9 p-1 text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold">
Ethiopian Cusine
     </h1>
     <p>
      Authentic  dishes showcasing  Ethiopia's rich culinary heritage
       </p>
     </div>
  <div className=" flex  flex-col bg-gray-100 p-4 rounded-lg">
    <div className=' p-2 rounded-full w-fit bg-yellow-300/30'>
            <Users className='w-9 h-9 p-1 text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold">
Cultural Experience 
     </h1>
     <p>
  Immersive environment celebrating Ethiopian culture and traditions
     </p>
     </div>
  <div className=" flex  flex-col bg-gray-100 p-4 rounded-lg">
    <div className=' p-2 rounded-full w-fit bg-yellow-300/30'>
            <Wifi className='w-9 h-9 p-1 text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold">
Business Hub 
     </h1>
     <p>
Modern amenities for meeting,work and networking
     </p>
     </div>
  <div className=" flex  flex-col bg-gray-100 p-4 rounded-lg">
    <div className=' p-2 rounded-full w-fit bg-yellow-300/30'>
            <Music className='w-9 h-9 p-1 text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold">
Entertainment
     </h1>
     <p>
  Movies,shows,news and other form of Entertainment
     </p>
     </div>
  <div className=" flex  flex-col bg-gray-100 p-4 rounded-lg">
    <div className=' p-2 rounded-full w-fit bg-yellow-300/30'>
            <Heart className='w-9 h-9 p-1 text-yellow-400 '/>
     </div>
     <h1 className="text-2xl font-bold">
Community Space
     </h1>
     <p>
Bringing together coffee lovers and cultural  enthusiasts
     </p>
     </div>

</div>
  </div>
<div className="flex flex-col justify-around py-8  px-8">
<img src={cafe1} alt="" />
<img src={cafe2} alt="" />
</div>
<div className="flex flex-col  items-center gap-6 bg-red-500">
  <h1 className="text-3xl  font-bold">
Stay Updated
  </h1>
  <p className="items-center">
    Be first to  know about our cafe opening, special events and exclusive 
  </p>
  <div  className="flex justify-center gap-4 ">
 <input type="email" className="p-1  bg-gray-600"  placeholder="enter your email" name="" id="" />
 <p> email </p>
  </div>

</div>
</section>
{/* ready to partner to us */}
<div className="flex flex-col items-center gap-7 my-4 max-w-[600px]">
  <h1 className="text-2xl font-bold">Ready to Partner with us?</h1>
  <p className="text-center">Whether you're interested in our premium coffee, trading products, professional services, or excited about our upcoming cafe, we're here to build lasting partnerships that benefit communities and markets worldwide.</p>
<div className="flex justify-center gap-4">
  <button className="flex justify-around gap-3 px-4 py-4">
<p>Request product Catalogue</p>
<CuboidIcon/>
  </button>
  <button className="flex justify-around gap-3 px-4 py-4">
<p>Schedual Consultation  </p>
<Calendar/>
  </button>

</div>
</div>

    </div>
  )
}

export default Products