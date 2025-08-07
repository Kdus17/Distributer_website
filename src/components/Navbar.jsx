import navbar_en from '../Lang/en/navbar.json'
import navbar_amh from '../Lang/amh/navbar.json'
import logo from '../assets/Images/businesslogo.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLightcontext } from '../LightContext'
import { useLanguageContext } from '../LanguageContext'
import { Globe, Menu, Moon, Sun, X } from 'lucide-react' // Install if not yet: npm install lucide-react

function Navbar() {
  const { Lang, toggleLang } = useLanguageContext()
  const { light, togglelight } = useLightcontext()
  const [language, setLanguage] = useState([])
  const [theme, settheme] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setLanguage(Lang ? navbar_amh : navbar_en)
  }, [Lang])

  const handleThemeToggle = () => {
    settheme(!theme)
    togglelight()
  }

  return (
    <div className="bg-gray-100 dark:bg-darkc sticky top-0 z-50 w-full shadow-md">
      <div className="flex justify-between px-4 sm:px-0 sm:justify-around items-center  py-1">
        {/* Logo */}
        <img src={logo} alt="LOGO" className="rounded-full size-14 md:size-18" />

        {/* Desktop Nav (no lang/toggle) */}
        <div className="hidden sm:flex items-center gap-6 uppercase dark:text-[#E0E0E0]">
          <Link to="/" className="text-sm md:text-lg">{language.Home}</Link>
          <Link to="/products" className="text-sm md:text-lg">{language.Products}</Link>
          <Link to="/us" className="text-sm md:text-lg">{language.Aboutus}</Link>
          <Link to="/Contact" className="text-sm md:text-lg">{language.Contactus}</Link>



        {/* Hamburger Icon */}
      </div>

        <div className='hidden sm:flex items-center gap-6 uppercase dark:text-[#E0E0E0]'>

              <button className='rounded flex gap-2 px-2 py-1 hover:bg-white/10'
              onClick={()=>{toggleLang(!Lang) }}>
                <Globe className='w-5'/>
                {Lang? "Amh":"Eng"}
              </button>
                {/* Theme Toggle (Mobile only) */}
            <div className="flex flex-col gap-1">
              <div onClick={handleThemeToggle} className='hover:bg-white/10 p-2 rounded-md'>
                {light? <Moon className='w-5'/>:<Sun className='w-5'/>}
              </div>
            </div>
          </div>

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-4 dark:text-white bg-gray-100 dark:bg-[#121212]">
          <Link to="/" onClick={() => setMenuOpen(false)}>{language.Home}</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>{language.Products}</Link>
          <Link to="/us" onClick={() => setMenuOpen(false)}>{language.Aboutus}</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>{language.Contactus}</Link>

          <div className='h-[0.5px] w-full bg-black dark:bg-white/50'></div>

          {/* Language Selector (Mobile only) */}
          <div className="flex justify-between gap-1 ">
            <label className="text-sm">Language</label>
            <button className='rounded flex gap-2 px-2 py-1 hover:bg-white/10'
            onClick={()=>{toggleLang(!Lang) }}>
              {Lang? "Amharic":"English"}
            </button>

          </div>

          {/* Theme Toggle (Mobile only) */}
          <div className="flex justify-between gap-1">
            <label className="text-sm flex gap-2">{light? <Moon className='w-5'/>:<Sun className='w-5'/>} Theme</label>
            <div
              onClick={handleThemeToggle}
              className={`w-16 h-8 flex items-center rounded-full cursor-pointer px-1 ${theme ? 'bg-gray-300' : 'bg-gray-600'}`}
            >
              <div
                className={`h-6 w-6 rounded-full transition-all duration-300 ${theme ? 'ml-auto bg-black' : 'ml-0 bg-slate-500'}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
