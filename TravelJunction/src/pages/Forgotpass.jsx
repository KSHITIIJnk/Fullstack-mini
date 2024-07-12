import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate password reset logic (replace with actual logic)
    console.log(`Reset password for email: ${email} to new password: ${newPassword}`);

    // Navigate back to Sign.jsx after saving password
    navigate('/sign');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="bg-white p-8 w-full max-w-md rounded-lg shadow-lg border border-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="form-control">
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="block text-sm font-medium text-black">New Password</label>
              <input
                type="password"
                id="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Save Password
            </button>
            <div className="space-y-2 mt-4 text-center">
              <Link to="/sign" className="text-black hover:underline block">
                Back to Sign In
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

export default ForgotPassword;
