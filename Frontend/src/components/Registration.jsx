import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    branch: '',
    year: '',
    address: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // To handle error messages
  const [successMessage, setSuccessMessage] = useState(''); // To handle success messages
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const collegeDomain = "@nitjsr.ac.in";
    
    // Validate if the passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }
    
    // Validate if email ends with the correct domain
    if (!formData.email.endsWith(collegeDomain)) {
      setErrorMessage(`Please use your college email ending with ${collegeDomain}`);
      return;
    }

    // Simulate successful form submission
    setErrorMessage(''); // Clear any previous errors
    setSuccessMessage('Registration successful! Welcome to the NIT JSR Student Community.');

    // After showing success message, redirect to the home page with the form data
    setTimeout(() => {
      navigate('/', { state: { ...formData } }); // Pass form data as state
    }, 1000); // Small delay to show the success message before redirecting
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-primary-orange mb-6">
          NIT JSR Student Community - Registration
        </h2>

        {/* Display error message */}
        {errorMessage && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
            {errorMessage}
          </div>
        )}

        {/* Display success message */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">College Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Enter your college email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
              <input
                type="text"
                name="branch"
                id="branch"
                value={formData.branch}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Enter your branch"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
              <input
                type="text"
                name="year"
                id="year"
                value={formData.year}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Enter your year"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Enter your address"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-orange focus:border-primary-orange"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-orange text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange"
          >
            Register
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-orange font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </form>

        {/* Back to Home Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-primary-orange font-semibold hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
