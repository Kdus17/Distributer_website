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
    <div className="bg-white dark:bg-gray-900 sticky top-0 z-50 w-full shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between px-4 sm:px-0 sm:justify-around items-center  py-1">
        {/* Logo */}
        <img src={logo} alt="LOGO" className="rounded-full size-14 md:size-18" />

        {/* Desktop Nav (no lang/toggle) */}
        <div className="hidden sm:flex items-center gap-6 uppercase text-gray-700 dark:text-gray-200">
          <Link to="/" className="text-md hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{language.Home}</Link>
          <Link to="/products" className="text-md hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{language.Products}</Link>
          <Link to="/us" className="text-md hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{language.Aboutus}</Link>
          <Link to="/Contact" className="text-md hover:text-gray-900 dark:hover:text-white transition-colors duration-200">{language.Contactus}</Link>



        {/* Hamburger Icon */}
      </div>

        <div className='hidden sm:flex items-center gap-6 uppercase text-gray-700 dark:text-gray-200'>

              <button className='rounded flex gap-2 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
              onClick={()=>{toggleLang(!Lang) }}>
                <Globe className='w-5'/>
                {Lang? "Amh":"Eng"}
              </button>
                {/* Theme Toggle (Mobile only) */}
            <div className="flex flex-col gap-1">
              <div onClick={handleThemeToggle} className='hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors duration-200 cursor-pointer'>
                {light? <Moon className='w-5'/>:<Sun className='w-5'/>}
              </div>
            </div>
          </div>

        <button className="sm:hidden text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">{language.Home}</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">{language.Products}</Link>
          <Link to="/us" onClick={() => setMenuOpen(false)} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">{language.Aboutus}</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">{language.Contactus}</Link>

          <div className='h-[0.5px] w-full bg-gray-300 dark:bg-gray-600'></div>

          {/* Language Selector (Mobile only) */}
          <div className="flex justify-between gap-1 ">
            <label className="text-sm text-gray-600 dark:text-gray-300">Language</label>
            <button className='rounded flex gap-2 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
            onClick={()=>{toggleLang(!Lang) }}>
              {Lang? "Amharic":"English"}
            </button>

          </div>

          {/* Theme Toggle (Mobile only) */}
          <div className="flex justify-between gap-1">
            <label className="text-sm flex gap-2 text-gray-600 dark:text-gray-300">{light? <Moon className='w-5'/>:<Sun className='w-5'/>} Theme</label>
            <div
              onClick={handleThemeToggle}
              className={`w-16 h-8 flex items-center rounded-full cursor-pointer px-1 transition-colors duration-200 ${theme ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-500 dark:bg-blue-600'}`}
            >
              <div
                className={`h-6 w-6 rounded-full transition-all duration-300 ${theme ? 'ml-auto bg-gray-600 dark:bg-gray-400' : 'ml-0 bg-white'}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar