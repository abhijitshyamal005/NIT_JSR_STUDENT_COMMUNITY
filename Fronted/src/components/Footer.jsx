// import logo from '../assets/nit-jamshedpur.png';

// const Footer = () => {
//   return (
//     <footer className="w-full py-8 flex flex-col items-center bg-gray-800 text-white">
//       <div className="w-full max-w-6xl flex flex-col items-center">
//         <div className="flex flex-col items-center">
//           <img alt="NIT Jamshedpur" src={logo} className="h-8 mb-4" />
//           <span>NIT Jamshedpur</span>
//         </div>
//         <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
//           <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//             Report Lost Item
//           </a>
//           <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//             Post Found Item
//           </a>
//           <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//             Contact Finder
//           </a>
//           <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//             FAQ
//           </a>
//           <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//             About Us
//           </a>
//         </div>
//         <div className="mt-8 w-full border-t border-gray-600 flex flex-col items-center">
//           <span className="mt-4">© 2024 NIT Jamshedpur</span>
//           <div className="mt-4 flex flex-col sm:flex-row gap-4">
//             <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//               Privacy Policy
//             </a>
//             <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//               Terms and Conditions
//             </a>
//             <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
//               Cookies Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsFillMapFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { IoLocation } from "react-icons/io5";
import logo from '../assets/nit-jamshedpur.png';

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center gap-24">
        <div className="flex flex-col items-center md:items-start mb-4">
          <img src={logo} alt="NIT Jamshedpur Logo" className="w-48" />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Company Information</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Contact</li>
              <li>
              <div className="flex space-x-4 mt-4">
              <FaTwitter className="hover:text-blue-500 text-lg" />
              <FaFacebook className="hover:text-blue-700 text-lg" />
              <FaInstagram className="hover:text-pink-500 text-lg" />
              <FaYoutube className="hover:text-red-500 text-lg" />
            </div>
                
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Academic</li>
              <li>Personal Guide</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Locate Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <IoLocation className="mr-2" />
                <span>HOSTEL J</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" />
                <span>studentcommunity@gmail.com</span>
              </li>
              <li className="flex items-center">
                <AiOutlinePhone className="mr-2" />
                <span>+91-9876543321</span>
              </li>
            </ul>
        
          </div>
        </div>
      </div>
      <div className="mt-8 w-full border-t border-gray-300 flex flex-col md:flex-row items-center pt-4  justify-around">
        <span>© 2024 NIT Jamshedpur</span>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            Privacy Policy
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            Terms and Conditions
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            Cookies Policy
          </a>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;

