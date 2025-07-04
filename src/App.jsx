import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import { LightProvider } from './LightContext';
import { LanguageProvider } from './LanguageContext';

import Home_2 from './pages/Home_2';
import Footer from './components/Footer'
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Notfound from './pages/Notfound';
import Aboutus_2 from './pages/Aboutus_2';

import coffeeImage from './assets/Images/coffee.jpg';

const NUM_COLUMNS = 12; // Number of vertical columns to split screen width

function TransitionOverlayWithFullScreenRepeat() {
  const columns = Array.from({ length: NUM_COLUMNS });

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex overflow-hidden">
      {columns.map((_, i) => (
        <motion.div
          key={i}
     className="
            h-full flex-1 
            filter  opacity-90 
            drop-shadow-md
            bg-no-repeat"
          style={{
            backgroundImage: `url(${coffeeImage})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top left',
            backgroundSize: '100px 100px', // adjust tile size here
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  const [showTransition, setShowTransition] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowTransition(true);
    setShowContent(false);

    // total animation duration + stagger + buffer time
    const totalDuration = 2 + NUM_COLUMNS * 0.25 + 0.5;

    const timer = setTimeout(() => {
      setShowTransition(false);
      setShowContent(true);
    }, totalDuration * 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} className="relative min-h-screen">
        {/* Animated overlay */}
        {showTransition && <TransitionOverlayWithFullScreenRepeat />}

        {/* Page content */}
        {showContent && (
          <motion.div
            className="relative z-40"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home_2 />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Notfound />} />
              <Route path="/us" element={<Aboutus_2/>}/>

            </Routes>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LightProvider>
      <LanguageProvider>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer/>
      </Router>
        </LanguageProvider>
    </LightProvider>
  );
}

export default App;