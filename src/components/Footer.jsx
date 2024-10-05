import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Branding */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">FakeFlix GPT</h2>
            <p className="mt-2">Watch your favorite movies anytime, anywhere.</p>
          </div>
          
          {/* Links Section */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <ul className="flex justify-center space-x-6">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <span className="text-gray-400">Follow Us</span>
            <div className="flex justify-center md:justify-end mt-2 space-x-4">
              <a href="https://www.facebook.com" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com" className="hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} FakeFlix GPT - By Dhiman Majumdar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
