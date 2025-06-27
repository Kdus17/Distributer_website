import './index.css'
import Home from './pages/Home'
import About from './pages/Aboutus'
import Contact  from './pages/Contact'
import Products from './pages/Products'
import Notfound from './pages/Notfound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home_2 from './pages/Home_2'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LightProvider } from './LightContext'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'



function AppRoutes() {
  const location = useLocation();
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/home' element={<Home_2/>}/>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LightProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LightProvider>
  )
}

export default App;
