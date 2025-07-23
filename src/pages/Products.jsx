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
    <div className="flex flex-col items-center bg-gray-50">
   {/*   Hero  */}
      <div className="flex flex-col gap-2 items-center bg-gradient-to-r from-red-500 to-red-700 w-full py-24 text-white border-b border-red-200">
        <div className='flex gap-2 pt-5'>
            <div className='bg-white/30 rounded-full'><Coffee className='w-16 h-16 p-3'/></div>
            <div className='bg-white/30 rounded-full'><Crown className='w-16 h-16 p-3 text-yellow-400'/></div>
            <div className='bg-white/30 rounded-full'><Globe className='w-16 h-16 p-3'/></div>
        </div>
        <p className='md:text-8xl text-4xl sm:text-7xl max-w-240 font-bold  text-center'>
            kingdom  <span className='text-yellow-300'> Business products &</span> services
        </p>

        <p className="mt-12 max-w-160 text-center">
          Discover our comprehensive range of premium Ethiopian coffee, trading products, and professional services. Plus, get excited about our upcoming cultural cafe experience!
        </p>

        <div className='bg-gray-100/20 px-11 py-6 mt-6 rounded-2xl '>
            <p className='max-w-130 text-center font-semibold'> from farm to cup, from to Ethiopia to the world.</p>
        </div>

      </div>
{/*  section nav  */}
        <div className='flex flex-col sm:flex-row justify-center gap-4 select-none w-full bg-red-50 py-4 border border-red-200'>
          <a href="#coffee">
            <div className='group  border border-red-300 bg-white text-red-800 py-2 px-8 rounded-lg flex md:gap-4 items-center hover:bg-red-600 hover:text-white  transition-all duration-300 ease-in-out '>
                <Coffee className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30 font-semibold'> premium coffee</p>
            </div>
          </a>
          <a href="">
            <div className='group  border border-red-300 bg-white text-red-800  py-2 px-8 rounded-lg flex md:gap-4 items-center hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out'>
                <Cuboid className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> trading products</p>
            </div>
          </a>
          <a href="#cafe">
            <div className='group  border border-red-300 bg-white text-red-800  py-2 px-8 rounded-lg flex md:gap-4 items-center hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out'>
                <Globe className='group-hover:scale-110 w-8 h-8 transition-all duration-300 ease-in-out'/>
                <p className='text-center max-w-30'> services</p>
            </div>
          </a>
        </div>

{/* premium Ethiopian coffee  */}
        <section id="coffee" className="flex flex-col items-center gap-4 px-12 py-4 ">
          <h1 className="text-center text-black font-bold text-5xl mt-12 mb-4"> 
          Premium Ethiopian Coffee
          </h1>
          <p className="text-center text-gray-600 max-w-[600px] mb-12">
          Sourced directly from ethiopia finest coffee regions, each variety  offers a unique characteristics and exceptional quality.
          </p>
          {/* coffee cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {coffeeProducts.map((coffee,key)=>(<div key={key} className="flex flex-col rounded-2xl overflow-hidden max-w-[600px] bg-white mb-2  shadow-lg border border-red-400 pb-4 hover:scale-102 transition-all duration-400 ease-in-out">
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
          <div className="flex flex-col items-center gap-4 mt-6 w-full mx-15 bg-red-50 p-8 rounded-2xl border border-red-200 shadow-xl">
            <h1 className="text
            text-3xl font-bold">
          From Bean To Cup Exellence
            </h1>
            <p className="text-black text-center mb-8">
              Our meticulous process ensures every coffee bean meets the highest international standards
            </p>
            <div className="flex  md:justify-around md:flex-row flex-col w-full ">
              <div className="flex flex-col items-center gap-4">
                <div className='bg-red-600  p-2 rounded-full '>
                                    <MountainIcon className='w-14 h-14 p-3 text-white'/>
                                </div>
                                <h1 className="text-2xl font-bold text-center"> 
                                  Sourcing
                                </h1>
                                <p className="text-center">
            direct contact with farmers
                                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className='bg-red-600  p-2 rounded-full '>
                                    <Shield className='w-14 h-14 p-3 text-white'/>
                                </div>
                                <h1 className="text-2xl font-bold text-center"> 
                              Quality control
                                </h1>
                                <p className="text-center">
                                  Rigorous quality control
                                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className='bg-red-600  p-2 rounded-full '>
                                    <BoxIcon className='w-14 h-14 p-3 text-white'/>
                                </div>
                                <h1 className="text-2xl font-bold text-center"> 
                                Processing
                                </h1>
                                <p className="text-center">
            export processing and food packaging 
                                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className='bg-red-600  p-2 rounded-full '>
                                    <Globe className='w-14 h-14 p-3 text-white'/>
                                </div>
                                <h1 className="text-2xl font-bold text-center"> 
                            Export
                                </h1>
                                <p className="text-center">
            Global distribution network
                                </p>
              </div>
              
            </div>
          </div>
        </section>

<section id ="cafe" className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 gap-4  px-12 py-6 ">
  <div className="grid grid-cols-1 gap-4 px-12">
 {/*    Kingdome house coffee card */}
<div className="flex flex-col justify-end gap-4  p-8  bg-white border border-red-200 rounded-xl  shadow-lg">
<div className="flex justify-start gap-4 ">
  <div className="bg-red-400/20  rounded-full ">
    <Crown className="w-14 h-14 p-3 text-red-600"/>
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
  
{/*  the two cards */}
<div className="flex gap-3">
  <div className="flex flex-col items-start w-full bg-red-50 border border-red-200 rounded-lg p-3">
<Calendar/>
<p>Opening date</p>
<time dateTime="2025-9-9">2025, septemeber 9 </time>
  </div>
  <div className="flex flex-col items-start w-full bg-red-50 border border-red-200 rounded-lg p-3">
<Calendar/>
<p>Opening date</p>
<time dateTime="2025-9-9">2025, septemeber 9 </time>
  </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-2xl bg-white border border-red-200 hover:scale-102 transition-all duration-400 ease-in-out shadow-lg">
    <div className=' p-2 rounded-full w-fit bg-red-400/20 dark:bg-yellow-300/30'>
            <LucideCoffee className='w-9 h-9 p-1 text-red-600 dark:text-yellow-400  '/>
     </div>
     <h1 className="text-xl font-bold">
Authentic Ethiopian coffee
     </h1>
     <p>
      traditional coffee ceremonies and premium single-origin brews
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-2xl bg-white border border-red-200 hover:scale-102 transition-all duration-400 ease-in-out shadow-lg">
    <div className=' p-2 rounded-full w-fit bg-red-400/20 dark:bg-yellow-300/30'>
            <ForkKnife className='w-9 h-9 p-1 text-red-600 dark:text-yellow-400 '/>
     </div>
     <h1 className="text-xl font-bold text-center">
Ethiopian Cusine
     </h1>
     <p>
      Authentic  dishes showcasing  Ethiopia's rich culinary heritage
       </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-2xl bg-white border border-red-200 hover:scale-102 transition-all duration-400 ease-in-out shadow-lg">
    <div className=' p-2 rounded-full w-fit bg-red-400/20 dark:bg-yellow-300/30'>
            <Users className='w-9 h-9 p-1 text-red-600 dark:text-yellow-400 '/>
     </div>
     <h1 className="text-xl font-bold text-center">
Cultural Experience 
     </h1>
     <p>
  Immersive environment celebrating Ethiopian culture and traditions
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-2xl bg-white border border-red-200 hover:scale-102 transition-all duration-400 ease-in-out shadow-lg">
    <div className=' p-2 rounded-full w-fit bg-red-400/20 dark:bg-yellow-300/30'>
            <Wifi className='w-9 h-9 p-1 text-red-600 dark:text-yellow-400 '/>
     </div>
     <h1 className="text-xl font-bold text-center">
Business Hub 
     </h1>
     <p>
Modern amenities for meeting,work and networking
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-2xl bg-white border border-red-200 hover:scale-102 transition-all duration-400 ease-in-out shadow-lg">
    <div className=' p-2 rounded-full w-fit bg-red-400/20 dark:bg-yellow-300/30'>
            <Music className='w-9 h-9 p-1 text-red-600 dark:text-yellow-400 '/>
     </div>
     <h1 className="text-xl font-bold text-center">
Entertainment
     </h1>
     <p>
  Movies,shows,news and other form of Entertainment
     </p>
     </div>
  <div className=" flex items-start  flex-col bg-gray-400/20 p-4 rounded-2xl bg-white border border-red-200 hover:scale-102 transition-all duration-400 ease-in-out shadow-lg">
    <div className=' p-2 rounded-full w-fit  bg-red-400/20 dark:bg-yellow-300/30'>
            <Heart className='w-9 h-9 p-1 text-red-600 dark:text-yellow-400 '/>
     </div>
     <h1 className="text-xl font-bold text-center">
Community Space
     </h1>
     <p>
Bringing together coffee lovers and cultural  enthusiasts
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
<div className="flex flex-col  items-center gap-6 w-full  border-b border-red-200 py-12 mb-4 ">
  <h1 className="text-3xl  font-bold">
Stay Updated
  </h1>
  <p className="items-center">
    Be first to  know about our cafe opening, special events and exclusive 
  </p>
  <div  className="flex justify-center gap-4 w-2/3 ">
 <input type="email" className="pl-4 py-4 rounded-lg  bg-white w-2/5 border border-red-200"  placeholder="enter your email" name="" id="" />
 <button className=" flex justify-around py-4 px-5 gap-1 bg-gradient-to-r from-red-600 to-red-800 w-1/5 text-white rounded-lg">
  Notify me <ArrowRight/>
 </button>
  </div>

</div>
{/* ready to partner to us */}
<div className="flex flex-col items-center gap-7 my-4 py-12 max-w-[800px]">
  <h1 className="text-6xl font-bold text-center">Ready to Partner with us?</h1>
  <p className="text-center text-lg font-light text-gray-700">Whether you're interested in our premium coffee, trading products, professional services, or excited about our upcoming cafe, we're here to build lasting partnerships that benefit communities and markets worldwide.</p>
<div className="flex justify-center gap-4">
  <button className="flex justify-around gap-3 px-4 py-4 bg-white rounded-xl border border-red-300 cursor-pointer hover:bg-red-600 hover:text-white hover:scale-103 transition duration:400 shadow-lg">
    <p>Request product Catalogue</p>
    <CuboidIcon/>
  </button>

  {/* <button className="flex justify-around gap-3 px-4 py-4 bg-white">
    <p>Schedual Consultation  </p>
    <Calendar/>
  </button> */}
</div>
</div>

    </div>
  )
}

export default Products