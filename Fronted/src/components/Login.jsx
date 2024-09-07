/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // To handle error messages
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
    
    // Validate if email ends with the correct domain
    if (!formData.email.endsWith(collegeDomain)) {
      setErrorMessage(`Please use your college email ending with ${collegeDomain}`);
      return;
    }

    // Simulate a login check (you can replace this with actual authentication logic)
    if (formData.email === "student@nitjsr.ac.in" && formData.password === "password123") {
      setErrorMessage(''); // Clear error message if login is successful
      navigate('/'); // Redirect to the home page after successful login
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-primary-orange mb-6">
          NIT JSR Student Community - Login
        </h2>

        {/* Display error message */}
        {errorMessage && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full bg-primary-orange text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange"
          >
            Login
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/registration" className="text-primary-orange font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
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

export default Login;
