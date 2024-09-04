import { useState } from 'react';
import logo from '../assets/nit-jamshedpur.png';
import Scholar from '../assets/Scholarship.png';

function Navbar() {
  const [Drop, setDrop] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };


  return (
    <header className="sticky top-0 w-full z-10 bg-white flex justify-center ">
      <div className="w-full max-w-screen-xl flex items-center justify-between p-6">
        <img alt="logo" src={logo} className="h-12" />

        <div className="hidden md:flex flex-1 justify-between ">
          <nav className="flex items-center space-x-8 ml-5 text-black font-semibold font-sans ">
            <a href="/" className="text-black hover:text-[#d15213]">
              NIT JSR Official Website
            </a>
            <a href="/" className="text-black hover:text-[#d15213]">
              Report A Complain
            </a>
            <a href="/" target="_blank" rel="noreferrer noopener" className="text-black hover:text-[#d15213]">
              Couse Notes
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
            <button className="bg-[#d15213] text-white py-2 px-7 border-[2px] rounded-3xl border-[#d15213] hover:bg-black">
              Get Started
            </button>
            <button className=" border-[#d15213] border-[2px] py-2 px-7 text-[#d15213]  rounded-3xl hover:bg-[#d15213] hover:text-white">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <div className="flex mr-3 space-x-2 text-[15px] font-semibold  justify-center">
            <button className="bg-[#d15213] text-white p-2 border rounded-3xl border-[#d15213] hover:bg-black">
              Get Started
            </button>
            <button className=" border-[#d15213] border p-2  text-[#d15213]  rounded-3xl hover:bg-[#d15213] hover:text-white">
              Login
            </button>
          </div>
          <button onClick={toggleMobileMenu}>
            <svg viewBox="0 0 1024 1024" className="w-6 h-6">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuVisible && (
          <nav className="md:hidden bg-white absolute top-full left-0 w-full py-4">
            <ul className="flex flex-col space-y-4 px-6 font-semibold hover:text-[#d15213]">
              <li className="text-black hover:text-[#d15213]">
                <a href="/" >
                  NIT JSR Official Website
                </a>
              </li>
              <li>
                <a href="/">
                  Report A Complain
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noreferrer noopener">
                  Couse Notes
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
                    <a href="https://home-page.com" className="text-black hover:text-[#d15213]">
                      Scholoarship
                    </a>
                  </li>
                  <li>
                    <a href="https://report-lost-item-page.com" className="text-black hover:text-[#d15213]">
                      Report Lost Item
                    </a>
                  </li>
                  <li>
                    <a href="https://found-items-page.com" className="text-black hover:text-[#d15213]">
                      Found Items
                    </a>
                  </li>
                  <li>
                    <a href="https://contact-page.com" className="text-black hover:text-[#d15213]">
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
              <a href="https://home-page.com" className="flex items-center space-x-4">
                <img alt="Home" src={Scholar} className="w-8 h-8" />
                <div>
                  <span className="font-semibold"> Scholarship </span>
                  <span className="block text-gray-500">Page One Description</span>
                </div>
              </a>
              <a href="https://report-lost-item-page.com" className="flex items-center space-x-4">
                <img alt="Report Lost Item" src='https://static.vecteezy.com/system/resources/previews/019/023/680/original/fountain-pen-icon-png.png'
                  className="w-8 h-8" />
                <div>
                  <span className="font-semibold">Report Lost Item</span>
                  <span className="block text-gray-500">Page Two Description</span>
                </div>
              </a>
              <a href="https://found-items-page.com" className="flex items-center space-x-4">
                <img alt="Found Items" src="https://pngimg.com/uploads/laptop/laptop_PNG5905.png" className="w-8 h-8" />
                <div>
                  <span className="font-semibold">Found Items</span>
                  <span className="block text-gray-500">Page Three Description</span>
                </div>
              </a>
              <a href="https://contact-page.com" className="flex items-center space-x-4">
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
