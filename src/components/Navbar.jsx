import navbar_en from '../Lang/en/navbar.json'
import navbar_amh from '../Lang/amh/navbar.json'
import logo from '../assets/Images/businesslogo.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLightcontext } from '../LightContext' 
import { useLanguageContext } from '../LanguageContext';
 function Navbar() {
  const {Lang, toggleLang} = useLanguageContext();
  const [language,setLanguage] = useState([])
  useEffect(()=>{
  if(Lang){
  setLanguage(navbar_amh)
  }else{
    setLanguage(navbar_en)
  }
},[Lang])


  /* const language = { 
    Home: Lang ? "ዋና ገፅ" : "Home",
    Products: Lang ? "ምርቶች" : "products",
    Aboutus: Lang ? "ስለ እኛ" : "about us",
    Contactus : Lang ? "አግኙን" : "Contact us",
    Login : Lang ? "መግቢያ" : "login",
    Language : Lang ? "amh" : "eng" 
 
  } */
    const  {togglelight} = useLightcontext()
    function Toggle(){
        togglelight()
    }
  return (
    <div className=' bg-gray-100 flex justify-between  gap-4 md:px-20  sticky top-0 z-100 dark:bg-darkc items-center select-none w-full min-h-[20px] px-0'>
        <div>
            <img src={logo} className='rounded-full size-18' alt="LOGO" />
        </div>

        <div className='flex gap-8 dark:text-[#E0E0E0] dark:bg-[#121212]uppercase'>

            <Link to={'/'} className='py-1  sm:text-sm '>{language.Home}</Link>
            <Link to={'/products'} className='py-1 sm:text-sm'>{language.Products}</Link>
            <Link to={'/us'} className='py-1 sm:text-sm'>{language.Aboutus}</Link>
            <Link to={'/Contact'} className='py-1 sm:text-sm'>{language.Contactus}</Link>
            <button onClick={toggleLang} className='p-2 bg-black text-white rounded-full dark:bg-white dark:text-black hidden md:block'>{language.Language}</button>
            <button onClick={Toggle} className=''>light</button>
        </div>

    </div>
  )
}
export default Navbar