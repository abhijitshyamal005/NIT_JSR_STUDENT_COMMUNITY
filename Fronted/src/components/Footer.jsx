import React from 'react';
import logo from '../assets/nit-jamshedpur.png';

const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col items-center bg-gray-800 text-white">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img alt="NIT Jamshedpur" src={logo} className="h-8 mb-4" />
          <span>NIT Jamshedpur</span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Report Lost Item
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Post Found Item
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Contact Finder
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            FAQ
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            About Us
          </a>
        </div>
        <div className="mt-8 w-full border-t border-gray-600 flex flex-col items-center">
          <span className="mt-4">© 2024 NIT Jamshedpur</span>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Terms and Conditions
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
