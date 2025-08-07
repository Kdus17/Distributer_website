import React from 'react';
import { Link, ScrollRestoration, useNavigate } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';


export default function Footer() {
const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Kingdom Business
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
              Providing Quality Wholesale Goods.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
              <a 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                kingdombusinessf5@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-3">
              <Link 
                to="/" onClick={scrollTo(0,0)}
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-2 group flex items-center justify-center lg:justify-start"
              >
                <span>Home</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link 
                to="/products" onClick={scrollTo(0,0)}
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-2 group flex items-center justify-center lg:justify-start"
              >
                <span>Products</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link 
                to="/About" onClick={scrollTo(0,0)}
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-2 group flex items-center justify-center lg:justify-start"
              >
                <span>About Us</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link 
                to="/contact" onClick={scrollTo(0,0)}
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-2 group flex items-center justify-center lg:justify-start"
              >
                <span>Contact us</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

            </nav>
          </div>

          {/* Additional Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner for quality wholesale goods and exceptional service.
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer">
                  <span className="text-white text-sm font-medium" onClick={()=>{navigate("/contact",scrollTo(0,0))}}>Get In Touch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}