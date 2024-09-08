import { useState } from 'react';
import Navbar from './Navbar';
import userProfilePic from '../assets/dev2.jpg'; // Your user profile image

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col md:flex-row overflow-x-hidden">
        
        {/* Sidebar Toggle Button for Mobile */}
        <button
          className="md:hidden p-4 bg-orange-500 text-white"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        {/* Sidebar */}
        <aside
          className={`w-64 text-center ml-3 rounded-md bg-orange-500 text-white p-4 md:block ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6">My Account</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="/my-account" className="hover:text-black">Profile</a>
              </li>
              <li className="mb-4">
                <a href="#complaints" className="hover:text-black">My Complaints</a>
              </li>
              <li className="mb-4">
                <a href="#notes" className="hover:text-black">Uploaded Notes</a>
              </li>
              <li className="mb-4">
                <a href="#coding-profile" className="hover:text-black">Coding Profile</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:text-black">Logout</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 mt-4 md:mt-0">
          {/* Profile Section and Complaints Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Profile Section */}
            <section id="profile" className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Profile Information</h3>
              <div className="flex items-center">
                <img
                  src={userProfilePic}
                  alt="User Avatar"
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full mr-4 md:mr-6"
                />
                <div>
                  <p className="text-lg font-semibold">Abhijit Shyamal</p>
                  <p className="text-gray-600">johndoe@example.com</p>
                  <p className="text-gray-600">Member Since: January 2022</p>
                </div>
              </div>
            </section>

            {/* Complaints Section */}
            <section id="complaints" className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-600">My Complaints</h3>
              <ul>
                <li className="mb-2">Complaint 1: <span className="text-gray-500">Pending</span></li>
                <li className="mb-2">Complaint 2: <span className="text-green-500">Resolved</span></li>
              </ul>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Submit New Complaint
              </button>
            </section>
          </div>

          {/* Uploaded Notes Section and Coding Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Uploaded Notes Section */}
            <section id="notes" className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Uploaded Notes</h3>
              <ul>
                <li className="mb-2">Note 1: <a href="#" className="text-blue-500">Download</a></li>
                <li className="mb-2">Note 2: <a href="#" className="text-blue-500">Download</a></li>
              </ul>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Upload New Note
              </button>
            </section>

            {/* Coding Profile Section */}
            <section id="coding-profile" className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Coding Profile</h3>
              <p className="mb-2">Link your coding profiles from platforms like GitHub, LeetCode, or Codeforces.</p>
              <input
                type="text"
                placeholder="Enter profile URL"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Add Coding Profile
              </button>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
