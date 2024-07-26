import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', isSignedUp ? 'Already Signed Up' : 'Sign Up');

    // Handle sign-up logic here
    // Example: perform form validation, API request, etc.
    // Replace this with your actual sign-up logic

    if (!isSignedUp) {
      console.log('User signed up successfully!');
      setIsSignedUp(true);
      navigate('/sign');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ECE3CE]">
      <div className="bg-[#4F6F52] p-10 w-full max-w-md rounded-2xl shadow-xl border border-[#3A4D39] transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#ECE3CE]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="form-control">
              <label htmlFor="username" className="block text-sm font-semibold text-[#ECE3CE]">Username</label>
              <input 
                type="text" 
                id="username" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-[#ECE3CE] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ECE3CE] focus:border-transparent sm:text-sm transition duration-300" 
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="block text-sm font-semibold text-[#ECE3CE]">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-[#ECE3CE] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ECE3CE] focus:border-transparent sm:text-sm transition duration-300" 
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="block text-sm font-semibold text-[#ECE3CE]">Password</label>
              <input 
                type="password" 
                id="password" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-[#ECE3CE] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ECE3CE] focus:border-transparent sm:text-sm transition duration-300" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-[#3A4D39] text-[#ECE3CE] font-bold rounded-lg shadow-lg hover:bg-[#2A3B29] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A4D39]"
            >
              Sign Up
            </button>
            <div className="space-y-4 mt-6 text-center">
              <Link to="/sign" className="text-[#3A4D39] hover:underline font-semibold block">
                Need to Sign In?
              </Link>
              <Link to="/" className="text-[#3A4D39] hover:underline font-semibold block">
                Back to Home
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
