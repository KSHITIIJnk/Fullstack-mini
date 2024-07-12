import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate(); // Step 2: Get the navigation function

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', isSignIn ? 'Sign In' : 'Sign Out');
    // Simulating successful sign-in logic
    // Replace this with your actual sign-in logic

    // Navigate to Frontpage.jsx after sign-in logic
    navigate('/frontpage');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="bg-white p-8 w-full max-w-md rounded-lg shadow-lg border border-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">{isSignIn ? 'Sign In' : 'Sign Out'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="form-control">
              <label htmlFor="username" className="block text-sm font-medium text-black">Username or Email</label>
              <input type="text" id="username" required className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
            </div>
            
            {isSignIn && (
              <div className="form-control">
                <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                <input type="password" id="password" required className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
              </div>
            )}

            <button type="submit" className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              {isSignIn ? 'Sign In' : 'Sign Out'}
            </button>

            <div className="space-y-2 mt-4 text-center">
              <Link to="/signup" className="text-black hover:underline block">
                Need to Sign Up?
              </Link>
              <Link to="/forgot-password" className="text-black hover:underline block">
                Forgot Password?
              </Link>
              <Link to="/" className="text-black hover:underline block">
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
