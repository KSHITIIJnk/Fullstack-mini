import React, { useState } from 'react';
import axios from 'axios';
import c1 from '../assets/c1.jpg';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contactForms', formData);
      console.log('Form submitted successfully!', response.data);
      // Optionally, reset form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Show success toast
      toast.success('Message sent successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error toast
      toast.error('Failed to send message. Please try again later.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow pt-20">
        <div className="w-1/2">
          <img src={c1} alt="Mountain" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 bg-white p-8 flex flex-col justify-between">
          <div className="pt-10">
            <h2 className="text-3xl font-semibold mb-4 text-black">Contact Us</h2>
            <p className="text-sm text-gray-600 mb-4">We'd love to hear from you. Please fill out this form and we'll get back to you as soon as possible.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-black">First Name</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-black">Last Name</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="3" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out text-sm">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
