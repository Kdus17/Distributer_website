import {  ArrowRight,  CheckCheck,  CircleCheck,  CircleCheckBig,  Clock, Coffee, CoffeeIcon, Globe, Heart, Leaf, LeafIcon,  Star, Target, TrendingUp, Truck, Users } from 'lucide-react'

export default function Home_2() {
  return (
    <div>
        {/**Hero */}
        <div className='flex flex-col lg:flex-row w-full p-4 lg:p-24 gap-2 bg-gradient-to-r from-red-50 to-transparent shadow-lg shadow-gray-100'>
            {/**Text With Buttons */}
            <div className='flex flex-col'>
                <h1 className='text-4xl sm:text-6xl font-bold'>Promoting <br /> Ethiopian</h1>
                <h1 className='text-4xl sm:text-6xl font-bold text-red-600'>Coffee & Pulses</h1>
                <p className='text-2xl sm:text-3xl text-gray-500'>Globally</p>
                <br />
                <p className='text-xl text-gray-500'>Establishing Kingdom among the leaders in export and general trading business, prioritizing quality and value for customer satisfaction.</p>
                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    <div className='relative bg-black rounded-lg'>
                    <button className='w-full  md:relative hover:bg-red-700 border-2 border-gray-200 -top-1 right-1 active:top-0 active:right-0 active:bg-red-800 
                    flex items-center rounded-lg px-8 active:border-transparent gap-2 bg-red-600 text-white py-4'>Explore Our Products <ArrowRight/></button>
                    </div>
                    <div className='relative bg-black rounded-lg'>
                    <button className='w-full md:relative -top-1 right-1 py-4 rounded-lg px-8  bg-white active:top-0 active:right-0  
                    border-2 border-red-600 active:border-transparent text-red-600 hover:bg-gray-100 active:bg-gray-300'>Learn More</button>
                    </div>
                </div>
            </div>

            {/**The Four Figures */}
            <div className='w-full bg-red-600 rounded-3xl rotate-3 my-8 p-8 flex flex-col justify-center items-center gap-2'>
                <div className='bg-white -rotate-3 w-full sm:w-11/12 rounded-3xl flex flex-col gap-6 py-8 px-8 select-none'>
                    <div className='flex gap-4 sm:gap-8 justify-center'>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <Coffee className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold'>Premium Coffee</h2>
                            <p className='text-gray-500'>Special aroma & distinct flavor</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <Leaf className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold'>Quality Pulses</h2>
                            <p className='text-gray-500'>Organic by default</p>
                        </div>
                    </div>
                    <div className='flex gap-4 sm:gap-8 justify-center'>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <Globe className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold'>Global Export</h2>
                            <p className='text-gray-500'>International markets</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full hover:-translate-y-1 transition duration-300 ease-in-out'>
                            <TrendingUp className='w-12 h-12 text-red-600'/>
                            <h2 className='font-semibold'>Growing Business</h2>
                            <p className='text-gray-500'>Expanding operations</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        {/**Our Mission and Vision */}
        <div className='w-full p-4 lg:px-24 bg-gray-50 flex flex-col items-center py-24 gap-4'>
            <h1 className='px-4  lg:px-24 text-4xl font-bold'>Our Vision & Mission</h1>
            <p className='px-4 lg:px-24 text-xl text-gray-600'>Leading the way in Ethiopian agricultural exports with quality and value at our core</p>
            <div className='flex flex-col lg:flex-row w-full gap-10 mt-24'>
                <div className='bg-white rounded-2xl w-full p-8 flex flex-col gap-8 shadow-lg hover:shadow-xl'>
                    <div className='flex gap-4 items-center'>
                        <Target className='min-w-14 w-14 h-14 rounded-md text-red-600 bg-red-200 p-2'/>
                        <p className='text-2xl font-bold'>Vision</p>
                    </div>
                    <p className='text-lg text-gray-600'>To promote Ethiopian coffee and pulses globally, 
                        establishing KINGDOM among the leaders in the export and general trading business that prioritizes quality and value for the satisfaction of customers, 
                        employees and stakeholders.</p>
                </div>
                <div className='bg-white rounded-2xl w-full p-8 flex flex-col gap-8 shadow-lg hover:shadow-xl'>
                    <div className='flex gap-4 items-center'>
                        <Heart className='min-w-14  w-14 h-14 rounded-md text-red-600 bg-red-200 p-2'/>
                        <p className='text-2xl font-bold'>Mission</p>
                    </div>
                    <p className='text-lg text-gray-600'>To participate in profitable export trade of coffee and pulses
                        to generate income in the form of profit and thereby expand the business to address shareholder expectations.</p>
                </div>
            </div>
        </div>

        {/**Why Choose Us */}
        <div className='flex flex-col gap-6 mt-24'>
            <h1 className='px-4  lg:px-24 text-4xl font-bold self-center'>Why Choose Kingdom Business</h1>
            <p className='px-4 lg:px-24 text-xl text-gray-600 self-center'>Your trusted partner for premium Ethiopian agricultural exports</p>
            <div className='p-4 py-12 lg:px-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

                {/**Feature One */}
                <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <Star className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                            transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                        <h2 className='row-span-1 text-xl font-bold self-center'>Premium Quality</h2>
                        <p className='row-span-1 text-gray-600'>Ethiopian coffee with special aroma and distinct flavor,
                            highly valued in international markets for its exceptional quality.</p>
                    </div>
                </div>

                {/**Feature Two */}
                <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <LeafIcon className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                            transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                        <h2 className='row-span-1 text-xl font-bold self-center'>Organic by Defaulty</h2>
                        <p className='row-span-1 text-gray-600'>Our coffee and pulses are naturally organic, 
                            grown using traditional methods without synthetic chemicals or pesticides.</p>
                    </div>
                </div>

                {/**Feature Three */}
                <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <Users className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                            transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                        <h2 className='row-span-1 text-xl font-bold self-center'>Expert Team</h2>
                        <p className='row-span-1 text-gray-600'>Competent management team with special knowledge, skills,
                            and years of business experience in various economic sectors.</p>
                    </div>
                </div>

                {/**Feature Four */}
                <div className='bg-gradient-to-r from-red-50  group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <Truck className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                            transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                        <h2 className='row-span-1 text-xl font-bold self-center'>Complete Solutions</h2>
                        <p className='row-span-1 text-gray-600'>Comprehensive trading services including export logistics, 
                            quality assurance, and customer support throughout the process.</p>
                    </div>
                </div>

                {/**Feature Five */}
                <div className='bg-gradient-to-r from-red-50  md:col-span-2 lg:col-span-1 group h-full transition-all duration-300 ease-in-out hover:shadow-lg rounded-2xl border border-red-100'>
                    <div className='grid sm:grid-rows-3 gap-3 sm:gap-0 p-8'>
                        <Clock className='row-span-1 min-w-16 h-16 w-16 group-hover:w-18 group-hover:h-18 group-hover:-translate-y-1 group-hover:-translate-x-1
                                            transition-all duration-300 ease-in-out p-3 bg-red-600 text-white rounded-xl'/>
                        <h2 className='row-span-1 text-xl font-bold self-center'>Reliable Delivery</h2>
                        <p className='row-span-1 text-gray-600'>Consistent and timely delivery schedules with efficient logistics 
                            management to meet your business requirements.</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/**Services */}
        <div className='flex flex-col gap-6 mt-12 py-24 bg-gray-50 px-4 lg:px-24'>
            <h1 className='text-4xl font-bold self-center'>Our Services</h1>
            <p className='text-xl text-gray-600 self-center mb-12'>Comprehensive trading solutions for global markets</p>

            {/**Service Cards */}
            <div className='grid lg:grid-cols-3 gap-8'>
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl'>
                    <CoffeeIcon className='w-12 h-12 text-red-600 mb-6'/>
                    <h1 className='text-xl font-bold mb-4'>Coffee Export</h1>
                    <p className='text-gray-600  mb-6'>Export quality Ethiopian coffee to international markets,
                        known for its special aroma and distinct flavor.</p>
                    <div className='flex flex-col gap-3 text-gray-600 mb-6'>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Premium quality beans</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>International standards</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Global distribution</p>
                        </div>
                    </div>
                </div>


                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl'>
                    <LeafIcon className='w-12 h-12 text-red-600 mb-6'/>
                    <h1 className='text-xl font-bold mb-4'>Pulses Export</h1>
                    <p className='text-gray-600  mb-6'>High-quality Ethiopian pulses, organic by default,
                         meeting international demand for healthy food products.</p>
                    <div className='flex flex-col gap-3 text-gray-600 mb-6'>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Organic by default</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Nutritious varieties</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Sustainable sourcing</p>
                        </div>
                    </div>
                </div>


                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl'>
                    <Users className='w-12 h-12 text-red-600 mb-6'/>
                    <h1 className='text-xl font-bold mb-4'>General Trading</h1>
                    <p className='text-gray-600  mb-6'>Comprehensive trading services including stationery materials,
                         paper products, household equipment, and furniture.</p>
                    <div className='flex flex-col gap-3 text-gray-600 mb-6'>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Diverse product range</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Quality assurance</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig className='text-green-600'/>
                            <p>Reliable supply chain</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/**Coffee Excellence Card */}
        <div className='mt-12 py-24 px-4 lg:px-24'>
            <div className='flex flex-col lg:flex-row gap-12 bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-2xl'>
                <div className='w-full flex flex-col gap-6'>
                    <h2 className='text-4xl font-bold text-white'>Ethiopian Coffee Excellence</h2>
                    <p className='text-red-100 text-xl'>Ethiopian coffee enjoys high demand in the international market, 
                        specifically valued for its special aroma and distinct flavor.</p>
                    <div className='flex flex-col gap-6 text-red-100 '>
                        <div className='flex gap-2'>
                            <CircleCheckBig />
                            <p>High international demand for Ethiopian coffee's unique characteristics</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig />
                            <p>Organic by default cultivation methods used by local farmers</p>
                        </div>
                        <div className='flex gap-2'>
                            <CircleCheckBig />
                            <p>Special aroma and distinct flavor profile highly valued globally</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:mt-10'>
                    <div className='bg-gray-100/30   py-8 rounded-2xl'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='col-span-1 flex flex-col gap-2 items-center'>
                                <h3 className='text-3xl text-white font-bold'>100%</h3>
                                <p className='text-xl text-red-100'>Natural</p>
                            </div>
                            <div className='col-span-1 flex flex-col gap-2 items-center'>
                                <h3 className='text-3xl text-white font-bold'>Global</h3>
                                <p className='text-xl text-red-100'>Reach</p>
                            </div>
                            <div className='col-span-1 flex flex-col gap-2 items-center'>
                                <h3 className='text-3xl text-white font-bold '>Premium</h3>
                                <p className='text-xl text-red-100'>Quality</p>
                            </div>
                            <div className='col-span-1 flex flex-col gap-2 items-center'>
                                <h3 className='text-3xl text-white font-bold'>Trusted</h3>
                                <p className='text-xl text-red-100'>Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
