import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import Axios for making HTTP requests
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';

const ProfileEditPage = () => {
  const [showNotification, setShowNotification] = useState(false); // State for showing notification

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send POST request to your backend API
      const response = await axios.post('http://localhost:5000/api/profiles', data);

      // Handle success, e.g., show notification
      console.log('Profile updated successfully:', response.data);
      setShowNotification(true);

      // Redirect to home page after 2 seconds (for demonstration)
      setTimeout(() => {
        window.location.href = '/'; // Redirect to home page
      }, 2000);
    } catch (error) {
      // Handle error
      console.error('Error updating profile:', error.message);
      // Show an error message to the user
      // Example: setErrorMessage('Failed to update profile. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-lg mx-auto mt-16 bg-white shadow-md rounded-md">
        <h1 className="mb-4 text-center text-2xl font-semibold text-black">Edit Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className={`form-control ${errors.name ? 'text-red-500' : ''}`}>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="mt-1 text-sm">{errors.name.message}</p>}
            </div>

            <div className={`form-control ${errors.username ? 'text-red-500' : ''}`}>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <p className="mt-1 text-sm">{errors.username.message}</p>}
            </div>

            <div className={`form-control ${errors.email ? 'text-red-500' : ''}`}>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="mt-1 text-sm">{errors.email.message}</p>}
            </div>

            <div className={`form-control ${errors.password ? 'text-red-500' : ''}`}>
              <label className="block mb-1">Current Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                {...register('password', { required: 'Current password is required' })}
              />
              {errors.password && <p className="mt-1 text-sm">{errors.password.message}</p>}
            </div>

            <div className={`form-control ${errors.newPassword ? 'text-red-500' : ''}`}>
              <label className="block mb-1">New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                {...register('newPassword', { required: 'New password is required' })}
              />
              {errors.newPassword && <p className="mt-1 text-sm">{errors.newPassword.message}</p>}
            </div>

            <div className="form-control">
              <label className="block mb-1">Profile Image</label>
              <input type="file" className="w-full px-3 py-2 border rounded-md" {...register('image')} />
              <p className="mt-1 text-sm text-gray-600">Upload a new profile picture.</p>
            </div>

            <div className="flex w-full mt-8">
              <div className="ml-auto">
                <button type="submit" className="px-4 py-2 mr-4 text-white bg-black rounded-md">
                  Save Changes
                </button>
                <button type="button" className="px-4 py-2 border rounded-md">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />

      {/* Notification Component */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Profile updated successfully!
        </div>
      )}
    </>
  );
};

export default ProfileEditPage;
