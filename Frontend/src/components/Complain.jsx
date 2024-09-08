import { useState } from 'react';
import NavBar from './Navbar.jsx'; // Import the NavBar component
import { Link } from 'react-router-dom';

const ComplaintPage = () => {
    const [isLoggedIn] = useState(true); // Set to true for testing, you can handle this with real login state.
    const [studentDetails, setStudentDetails] = useState({
        name: '',
        email: '',
        rollNumber: '',
        complaintType: '',
        complaint: '',
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // For the success message

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, rollNumber, complaintType, complaint } = studentDetails;

        // Check if all fields are filled
        if (!name || !email || !rollNumber || !complaintType || !complaint) {
            alert('Please fill in all fields.');
            return;
        }

        // Handle form submission (e.g., send complaint to backend)
        console.log('Complaint submitted:', studentDetails);
        setShowSuccessPopup(true); // Show success popup after submission

        // Clear the input fields after submission
        setStudentDetails({
            name: '',
            email: '',
            rollNumber: '',
            complaintType: '',
            complaint: '',
        });
    };



    // Function to close the success popup
    const handleSuccessPopupClose = () => {
        setShowSuccessPopup(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* NavBar Component */}
            <NavBar />

            <div className="flex items-center justify-center p-6">
                {!isLoggedIn ? (
                    <div className="p-6 mt-[200px] bg-white rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold text-orange-500 mb-4">
                            Please Create an Account or Log In
                        </h2>
                        <p className="text-gray-600 mb-9">
                            You need to be logged in to submit a complaint.
                        </p>
                        <Link to="/registration"
                            className="bg-orange-500 mt-[30px] text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                        >
                            Registration
                        </Link>
                        <Link to="/login"
                            className="bg-orange-500 mt-[30px] ml-7 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                        >
                            Log In
                        </Link>
                    </div>
                ) : (
                    <div className="p-6 bg-white rounded-lg mt-[70px] shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                            Submit Your Complaint
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Student Name */}
                            <input
                                type="text"
                                name="name"
                                value={studentDetails.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                value={studentDetails.email}
                                onChange={handleInputChange}
                                placeholder="Your College Email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />

                            {/* Roll Number */}
                            <input
                                type="text"
                                name="rollNumber"
                                value={studentDetails.rollNumber}
                                onChange={handleInputChange}
                                placeholder="Your Roll Number"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />

                            {/* Complaint Type */}
                            <select
                                name="complaintType"
                                value={studentDetails.complaintType}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">Select Complaint Type</option>
                                <option value="Hostel">Hostel</option>
                                <option value="Academic">Academic</option>
                                <option value="Mess">Mess</option>
                                <option value="Other">Other</option>
                            </select>

                            {/* Complaint Description */}
                            <textarea
                                name="complaint"
                                value={studentDetails.complaint}
                                onChange={handleInputChange}
                                placeholder="Describe your complaint..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                rows="5"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                            >
                                Submit Complaint
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-lg font-semibold text-orange-500 mb-4">
                            Complaint Submitted Successfully!
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Your complaint has been submitted. We will address it as soon as possible.
                        </p>
                        <button
                            onClick={handleSuccessPopupClose}
                            className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComplaintPage;
