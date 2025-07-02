import React from 'react'
import { Link } from 'react-router-dom'
import { useLightcontext } from '../LightContext' 
import { useLanguageContext } from '../LanguageContext';
 function Navbar() {
  const {Lang, toggleLang} = useLanguageContext();
  const language = { 
    Home: Lang ? "ዋና ገፅ" : "Home",
    Products: Lang ? "ምርቶች" : "products",
    Aboutus: Lang ? "ስለ እኛ" : "about us",
    Contactus : Lang ? "አግኙን" : "Contact us",
    Login : Lang ? "መግቢያ" : "login",
    Language : Lang ? "amh" : "eng" 
 
  }
    const  {togglelight} = useLightcontext()
    function Toggle(){
        togglelight()
    }
  return (
    <div className='h-20 bg-gray-100 flex justify-between px-24  sticky top-0 z-100 dark:bg-[#121212] items-center select-none'>
        <div>
            <img src="https://placehold.co/60x60/FF6600/FFFFFF?text=KB" className='rounded-full' alt="LOGO" />
        </div>

        <div className='flex gap-8 dark:text-[#E0E0E0] dark:bg-[#121212]uppercase'>

            <Link to={'/'} className='py-1 '>{language.Home}</Link>
            <Link to={'/products'} className='py-1'>{language.Products}</Link>
            <Link to={'/About'} className='py-1'>{language.Aboutus}</Link>
            <Link to={'/Contact'} className='py-1'>{language.Contactus}</Link>
            <Link to={'/login'} className='bg-green-600 px-2 py-1 rounded-md'>{language.Login}</Link>
            <button onClick={toggleLang} className='p-2 bg-black text-white rounded-full dark:bg-white dark:text-black'>{language.Language}</button>
            <button onClick={Toggle}>light</button>
        </div>

    </div>
  )
}
export default Navbar