import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Reset password for email: ${email} to new password: ${newPassword}`);

    // Simulate password reset logic (replace with actual logic)
    // Navigate back to Sign.jsx after saving password
    navigate('/sign');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ECE3CE]">
      <div className="bg-[#4F6F52] p-10 w-full max-w-md rounded-2xl shadow-xl border border-[#3A4D39] transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#ECE3CE]">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="form-control">
              <label htmlFor="email" className="block text-sm font-semibold text-[#ECE3CE]">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-[#ECE3CE] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ECE3CE] focus:border-transparent sm:text-sm transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="block text-sm font-semibold text-[#ECE3CE]">New Password</label>
              <input
                type="password"
                id="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-[#ECE3CE] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ECE3CE] focus:border-transparent sm:text-sm transition duration-300"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#3A4D39] text-[#ECE3CE] font-bold rounded-lg shadow-lg hover:bg-[#2A3B29] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A4D39]"
            >
              Save Password
            </button>
            <div className="space-y-4 mt-6 text-center">
              <Link to="/sign" className="text-[#3A4D39] hover:underline font-semibold block">
                Back to Sign In
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

export default ForgotPassword;
