import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4 max-w-5xl"> 
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center text-sm"> 
          {/* Branding */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-white">FakeFlix GPT</h2>
            <p className="mt-1">All movies, all the time. No actual streaming, just vibes.</p>
          </div>
          
          {/* Links Section */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="flex justify-center space-x-4 text-xs"> 
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end mt-1 space-x-3">
              <a href="https://www.facebook.com" className="hover:text-white">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://www.twitter.com" className="hover:text-white">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="https://www.instagram.com" className="hover:text-white">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.youtube.com" className="hover:text-white">
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs"> {/* Reduced spacing */}
          <p>&copy; {new Date().getFullYear()} FakeFlix GPT - A cinematic illusion by Dhiman Majumdar.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
