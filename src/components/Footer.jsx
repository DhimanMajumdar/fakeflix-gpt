import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm gap-6">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white">FakeFlix GPT</h2>
            <p className="mt-1 text-xs md:text-sm">All movies, all the time. No actual streaming, just vibes.</p>
          </div>

          {/* Links Section */}
          <div className="text-center">
            <ul className="flex flex-wrap justify-center gap-3 text-xs md:gap-5">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://www.facebook.com" className="hover:text-white">
                <FaFacebookF className="text-base" />
              </a>
              <a href="https://www.twitter.com" className="hover:text-white">
                <FaTwitter className="text-base" />
              </a>
              <a href="https://www.instagram.com" className="hover:text-white">
                <FaInstagram className="text-base" />
              </a>
              <a href="https://www.youtube.com" className="hover:text-white">
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-3 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} FakeFlix GPT - A cinematic illusion by Dhiman Majumdar.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
