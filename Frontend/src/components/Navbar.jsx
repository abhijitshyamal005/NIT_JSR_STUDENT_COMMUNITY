import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nit-jamshedpur.png';
import Scholar from '../assets/Scholarship.png';
import userProfilePic from '../assets/dev2.jpg'; // Your user profile image
import { MdNotificationsActive } from "react-icons/md";
import { FaTimes } from "react-icons/fa"; // Import the cross icon

function Navbar() {
  const [Drop, setDrop] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initialize state with setter function
  const [profileMenuVisible, setProfileMenuVisible] = useState(false); // State for profile menu visibility
  const [mobileProfileMenuVisible, setMobileProfileMenuVisible] = useState(false); // State for mobile profile menu visibility

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
  };

  const toggleMobileProfileMenu = () => {
    setMobileProfileMenuVisible(!mobileProfileMenuVisible);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
    // Additional logout logic such as clearing user data or tokens can be added here
  };

  return (
    <header className="sticky top-0 w-full z-10 bg-white flex justify-center">
      <div className="w-full max-w-screen-xl flex items-center justify-between p-6">
        <Link to='/'>
          <img alt="logo" src={logo} className="h-12" />
        </Link>

        <div className="hidden md:flex flex-1 justify-between">
          <nav className="flex items-center space-x-8 ml-5 text-black font-semibold font-sans">
            <a href="https://nitjsr.ac.in/" className="text-black hover:text-[#d15213]">
              NIT JSR Official Website
            </a>
            <a href='/complain' className="text-black hover:text-[#d15213]">
              Report A Complain
            </a>
            <a href='/course-notes' target="_blank" rel="noreferrer noopener" className="text-black hover:text-[#d15213]">
              Course Notes
            </a>
            <div
              onClick={() => setDrop(!Drop)}
              className="relative flex items-center cursor-pointer"
            >
              <span className="text-black hover:text-[#d15213]">Others</span>
              <div className="ml-2">
                {Drop ? (
                  <svg viewBox="0 0 1024 1024" className="w-6 h-6 transform rotate-180">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                ) : (
                  <svg viewBox="0 0 1024 1024" className="w-6 h-6">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                )}
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-8 font-semibold align-end">
            {!isLoggedIn ? (
              <>
                <Link to='/registration' className="bg-[#d15213] text-white py-2 px-7 border-[2px] rounded-3xl border-[#d15213] hover:bg-black">
                  Get Started
                </Link>
                <Link to='/login' className="border-[#d15213] border-[2px] py-2 px-7 text-[#d15213] rounded-3xl hover:bg-[#d15213] hover:text-white">
                  Login
                </Link>
              </>
            ) : (
              <div className="relative flex items-center space-x-2">
                <MdNotificationsActive
                  className="text-[#d15213] h-8 w-8 mr-3" // Primary orange color
                />
                <img
                  alt="Profile"
                  src={userProfilePic}
                  className="h-12 w-12 rounded-full cursor-pointer"
                  onClick={toggleProfileMenu} // Toggle profile menu on click
                />

                {profileMenuVisible && (
                  <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg w-48 border border-gray-200">
                    <Link to="/my-account" className="block px-4 py-2 text-black hover:bg-gray-100">
                      My Account
                    </Link>
                    <button
                      onClick={handleLogout} // Handle logout on click
                      className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <div className="flex mr-3 space-x-2 text-[15px] font-semibold justify-center">
            {!isLoggedIn && (
              <>
                <Link to='/registration' className="bg-[#d15213] text-white p-2 border rounded-2xl border-[#d15213] hover:bg-black">
                  Get Started
                </Link>
                <Link to='/login' className="border-[#d15213] border p-2 text-[#d15213] rounded-2xl hover:bg-[#d15213] hover:text-white">
                  Login
                </Link>
              </>
            )}
          </div>
          <button onClick={toggleMobileMenu}>
            {mobileMenuVisible ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <svg viewBox="0 0 1024 1024" className="w-6 h-6 font-sans">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuVisible && (
          <nav className="md:hidden bg-white absolute top-full left-0 w-full py-4">
            {isLoggedIn && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <img
                  alt="Profile"
                  src={userProfilePic}
                  className="h-12 w-12 rounded-full cursor-pointer"
                  onClick={toggleMobileProfileMenu} // Toggle profile menu on click
                />
                <MdNotificationsActive
                  className="text-[#d15213] h-7 w-7"
                />
              </div>
            )}
            {/* Display profile image and notification icon if logged in */}
            {isLoggedIn && mobileProfileMenuVisible && (
              <div className="absolute   left-5 bg-white shadow-lg rounded-lg w-48 border border-gray-200">
                <Link to="/my-account" className="block px-4 py-2 text-black hover:bg-gray-100">
                  My Account
                </Link>
                <button
                  onClick={handleLogout} // Handle logout on click
                  className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
            <ul className="flex flex-col space-y-4 px-6 font-semibold hover:text-[#d15213]">
              <li>
                <a href="/" className="text-black hover:text-[#d15213]">
                  NIT JSR Official Website
                </a>
              </li>
              <li>
                <a href='/complain' className="text-black hover:text-[#d15213]">
                  Report A Complain
                </a>
              </li>
              <li>
                <a href='/course-notes' target="_blank" rel="noreferrer noopener" className="text-black hover:text-[#d15213]">
                  Course Notes
                </a>
              </li>
              <li>
                <div
                  onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="text-black hover:text-[#d15213]">Others</span>
                  <div className="ml-2">
                    {mobileMenuVisible ? (
                      <svg viewBox="0 0 1024 1024" className="w-6 h-6 transform rotate-180">
                        <path d="M298 426h428l-214 214z"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 1024 1024" className="w-6 h-6">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    )}
                  </div>
                </div>
              </li>
            </ul>

            {/* Accordion for Others */}
            {mobileMenuVisible && (
              <div className="bg-gray-100 mt-4 px-6 py-">
                <ul className="space-y-2">
                  <li>
                    <a href="" className="text-black hover:text-[#d15213]">
                      Scholarship
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#d15213]">
                      Report Lost Item
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#d15213]">
                      Found Items
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-black hover:text-[#d15213]">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        )}

        {Drop && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
              <a href="/not-found" className="flex items-center space-x-4">
                <img alt="Home" src={Scholar} className="w-8 h-8" />
                <div>
                  <span className="font-semibold">Scholarship</span>
                  <span className="block text-gray-500">Page One Description</span>
                </div>
              </a>
              <a href="/not-found" className="flex items-center space-x-4">
                <img alt="Report Lost Item" src='https://static.vecteezy.com/system/resources/previews/019/023/680/original/fountain-pen-icon-png.png' className="w-8 h-8" />
                <div>
                  <span className="font-semibold">Report Lost Item</span>
                  <span className="block text-gray-500">Page Two Description</span>
                </div>
              </a>
              <a href="/not-found" className="flex items-center space-x-4">
                <img alt="Found Items" src="https://pngimg.com/uploads/laptop/laptop_PNG5905.png" className="w-8 h-8" />
                <div>
                  <span className="font-semibold">Found Items</span>
                  <span className="block text-gray-500">Page Three Description</span>
                </div>
              </a>
              <a href="/contact-us" className="flex items-center space-x-4">
                <img alt="Contact" src='https://www.svdj.nl/wp-content/uploads/2021/10/pngfind.com-contact-icons-png-98971.png' className="w-8 h-8" />
                <div>
                  <span className="font-semibold">Contact</span>
                  <span className="block text-gray-500">Page Four Description</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
