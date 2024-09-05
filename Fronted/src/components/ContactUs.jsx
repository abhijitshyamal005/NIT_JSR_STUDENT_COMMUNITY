import  { useState } from 'react';
import dev2 from '../assets/dev2.jpg';
import dev1 from '../assets/dev1.jpeg';

const developers = [
  {
    name: 'Abhijit Shyamal',
    email: '2023pgcsca003@nitjsr.ac.in',
    imageSrc: dev2,
    description: 'Front-end Developer with a passion for creating beautiful and responsive user interfaces.And Back-end Developer specializing in server-side logic and database management.',
  },
  {
    name: 'Gourab Bistu',
    email: '2023pgcsca079@nitjsr.ac.in',
    imageSrc: dev1,
    description: 'Full stack Developer with a passion for creating beautiful  user interfaces And specializing in database management.',
  },
];

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentDev, setCurrentDev] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [popupContent, setPopupContent] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendMessage = (dev) => {
    setCurrentDev(dev);
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupContent({
      name: formData.name,
      email: formData.email,
      message: `Thank you for reaching out, ${currentDev.name}! Your message has been received.`,
    });
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({ name: '', email: '', message: '' });
    setPopupContent({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Feel free to reach out to our developers directly or send us a message.</p>
        </div>

        {/* Developers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <img
                src={dev.imageSrc}
                alt={dev.name}
                className="w-[200px] h-[200px] object-cover rounded-full mb-4"
              />
              <h1 className="text-2xl font-semibold mb-2">{dev.name}</h1>
              <h3 className="text-xl text-black mb-2">{dev.email}</h3>
              <p className="text-center text-sm mb-4">{dev.description}</p>
              <button
                onClick={() => handleSendMessage(dev)}
                className="py-2 px-4 font-semibold  bg-[#D15213] text-white rounded-3xl hover:bg-[#9c3c0c]"
              >
                Send Message
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-6 w-80">
            <h4 className="text-xl font-semibold mb-4">Send a Message to {currentDev.name}</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#D15213] text-white rounded-md hover:bg-[#9c3c0c]"
              >
                Send
              </button>
            </form>
            <button
              onClick={handleClosePopup}
              className="mt-4 py-2 px-4 bg-[#ea7439] rounded-md hover:bg-[#a14b20]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {popupContent.message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-6 w-80">
            <h4 className="text-xl font-semibold mb-4">Message Sent!</h4>
            <p className="mb-2"><strong>Name:</strong> {popupContent.name}</p>
            <p className="mb-2"><strong>Email:</strong> {popupContent.email}</p>
            <p className="mb-4"><strong>Message:</strong> {popupContent.message}</p>
            <button
              onClick={handleClosePopup}
              className="py-2 px-4 bg-[#D15213] text-white rounded-md hover:bg-[#9c3c0c]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
