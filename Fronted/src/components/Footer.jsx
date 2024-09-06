import logo from '../assets/nit-jamshedpur.png';

const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col items-center bg-white text-black font-normal  ">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img alt="NIT Jamshedpur" src={logo} className="h-11 mb-4" />
          <span className="font-semibold text-xl text-[#d15213]">NIT Jamshedpur Students Community</span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
            Report Lost Item
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
            Post Found Item
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
            Contact Finder
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
            FAQ
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
            About Us
          </a>
        </div>
        <div className="mt-8 w-full border-t border-gray-600 flex flex-col items-center">
          <span className="mt-4">© 2024 NIT Jamshedpur</span>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
              Privacy Policy
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
              Terms and Conditions
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d15213]">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;