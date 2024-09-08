import { useState } from 'react';
import Navbar from './Navbar.jsx';

const CourseNotes = () => {
  const [program, setProgram] = useState('UG');
  const [showModal, setShowModal] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');
  const [driveLink, setDriveLink] = useState('');
  const [image, setImage] = useState(''); // State for image file
  const [selectedBranch, setSelectedBranch] = useState('');
  const [isLoggedIn] = useState(true); // Track user login status

  // Sample notes data with images
  const [notes, setNotes] = useState([
    { program: 'UG', branch: 'CSE', year: '2023', subject: 'Data Structures', link: 'https://drive.google.com/link-to-note1', image: 'https://via.placeholder.com/150' },
    { program: 'UG', branch: 'ECE', year: '2022', subject: 'Electronics', link: 'https://drive.google.com/link-to-note2', image: 'https://via.placeholder.com/150' },
    { program: 'PG', branch: 'CSE', year: '2022', subject: 'Advanced Algorithms', link: 'https://drive.google.com/link-to-note3', image: 'https://via.placeholder.com/150' },
    { program: 'PG', branch: 'MCA', year: '2021', subject: 'Software Engineering', link: 'https://drive.google.com/link-to-note4', image: 'https://via.placeholder.com/150' },
  ]);

  // Handler for adding a new note
  const handleAddNote = () => {
    if (program && branch && year && subject && driveLink) {
      setNotes([...notes, { program, branch, year, subject, link: driveLink, image }]);
      setShowModal(false);
      setBranch('');
      setYear('');
      setSubject('');
      setDriveLink('');
      setImage('');
    } else {
      alert('Please fill in all fields');
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Filter notes based on selected program and branch
  const filteredNotes = notes.filter(note => 
    note.program === program &&
    (selectedBranch ? note.branch === selectedBranch : true)
  );

  // Branch options based on program
  const branches = program === 'UG' ? ['CSE', 'ECE', 'ME'] : ['CSE', 'MCA', 'ME'];

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-screen-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Course Notes</h2>

        {/* Program Selection Buttons */}
        <div className="flex justify-center md:justify-between items-center mb-6 flex-wrap">
          <div className="flex mb-4 md:mb-0">
            <button
              className={`px-4 py-2 mr-2 rounded-lg transition-colors duration-300 ${program === 'UG' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => { setProgram('UG'); setSelectedBranch(''); }}
            >
              Undergraduate (UG)
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${program === 'PG' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => { setProgram('PG'); setSelectedBranch(''); }}
            >
              Postgraduate (PG)
            </button>
          </div>

          {/* Add Notes Button */}
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            onClick={() => isLoggedIn ? setShowModal(true) : setShowLoginPrompt(true)}
          >
            Add Notes
          </button>
        </div>

        {/* Branch Selection */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Branch:</label>
          <select
            className="border border-gray-300 p-2 rounded-md w-full"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">All Branches</option>
            {branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>

        {/* Notes List */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">{program} Notes</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note, index) => (
                <div key={index} className="bg-white shadow-md p-4 rounded-lg flex flex-col justify-between">
                  {note.image && (
                    <img
                      src={note.image}
                      alt={note.subject}
                      className="w-full h-50 object-cover rounded-md mb-4"
                    />
                  )}
                  <div>
                    <p className="text-lg font-semibold mb-2">{note.subject}</p>
                    <p className="text-gray-600">Branch: {note.branch}</p>
                    <p className="text-gray-600">Year: {note.year}</p>
                  </div>
                  <a
                    href={note.link}
                    className="text-blue-500 mt-4 block hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No notes available.</p>
            )}
          </div>
        </div>

        {/* Modal for Adding Notes */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0">
              <h3 className="text-xl font-bold mb-4">Add New Note</h3>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Branch:</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  placeholder="e.g., CSE, ECE"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Year:</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="e.g., 2023"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Subject:</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Data Structures"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Google Drive Link:</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  placeholder="https://drive.google.com/link-to-your-note"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Upload Image:</label>
                <input
                  type="file"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <button
                  onClick={handleAddNote}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex-1"
                >
                  Add Note
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Login Prompt */}
        {showLoginPrompt && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0">
              <h3 className="text-xl font-bold mb-4">Login Required</h3>
              <p className="mb-4">You must be logged in to upload or download notes. Please log in to continue.</p>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setShowLoginPrompt(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex-1"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Redirect to login page or show login form
                    setShowLoginPrompt(false);
                    // Example: redirect to login page
                    // window.location.href = '/login';
                  }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex-1"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseNotes;
