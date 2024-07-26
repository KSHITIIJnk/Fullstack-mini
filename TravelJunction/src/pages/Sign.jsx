import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', isSignIn ? 'Sign In' : 'Sign Out');
    // Simulating successful sign-in logic
    // Replace this with your actual sign-in logic

    // Navigate to Frontpage.jsx after sign-in logic
    navigate('/frontpage');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ECE3CE]">
      <div className="bg-[#4F6F52] p-8 w-full max-w-md rounded-2xl shadow-xl border border-[#3A4D39] transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#3A4D39]">{isSignIn ? 'Sign In' : 'Sign Out'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="form-control">
              <label htmlFor="username" className="block text-sm font-semibold text-[#3A4D39]">Username or Email</label>
              <input 
                type="text" 
                id="username" 
                required 
                className="mt-1 block w-full px-4 py-3 border border-[#3A4D39] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3A4D39] focus:border-transparent sm:text-sm transition duration-300" 
              />
            </div>
            
            {isSignIn && (
              <div className="form-control">
                <label htmlFor="password" className="block text-sm font-semibold text-[#3A4D39]">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  required 
                  className="mt-1 block w-full px-4 py-3 border border-[#3A4D39] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3A4D39] focus:border-transparent sm:text-sm transition duration-300" 
                />
              </div>
            )}

            <button 
              type="submit" 
              className="w-full py-3 bg-[#3A4D39] text-[#ECE3CE] font-bold rounded-lg shadow-lg hover:bg-[#2A3B29] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A4D39]"
            >
              {isSignIn ? 'Sign In' : 'Sign Out'}
            </button>

            <div className="space-y-4 mt-6 text-center">
              <Link to="/signup" className="text-[#3A4D39] hover:underline font-semibold block">
                Need to Sign Up?
              </Link>
              <Link to="/forgot-password" className="text-[#3A4D39] hover:underline font-semibold block">
                Forgot Password?
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

export default Sign;
