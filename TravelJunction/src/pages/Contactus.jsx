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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
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
    <div className="flex flex-col min-h-screen bg-[#ECE3CE  ]">
      <Navbar />
      <div className="flex flex-grow pt-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={c1} alt="Mountain" className="w-full h-full object-cover" />
        </div>
        
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-between">
          <div className="pt-10">
            <h2 className="text-3xl font-bold mb-4 text-[#3A4D39]">Contact Us</h2>
            <p className="text-md text-[#4F6F52] mb-6">We'd love to hear from you. Please fill out this form and we'll get back to you as soon as possible.</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#3A4D39]">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-[#ECE3CE] border border-gray-300 rounded-md shadow-sm text-[#3A4D39] focus:outline-none focus:ring-2 focus:ring-[#739072] transition duration-300 ease-in-out"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#3A4D39]">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-[#ECE3CE] border border-gray-300 rounded-md shadow-sm text-[#3A4D39] focus:outline-none focus:ring-2 focus:ring-[#739072] transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3A4D39]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-[#ECE3CE] border border-gray-300 rounded-md shadow-sm text-[#3A4D39] focus:outline-none focus:ring-2 focus:ring-[#739072] transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#3A4D39]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-[#ECE3CE] border border-gray-300 rounded-md shadow-sm text-[#3A4D39] focus:outline-none focus:ring-2 focus:ring-[#739072] transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#3A4D39]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-[#ECE3CE] border border-gray-300 rounded-md shadow-sm text-[#3A4D39] focus:outline-none focus:ring-2 focus:ring-[#739072] transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#3A4D39]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-[#ECE3CE] border border-gray-300 rounded-md shadow-sm text-[#3A4D39] focus:outline-none focus:ring-2 focus:ring-[#739072] transition duration-300 ease-in-out"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#739072] text-white py-2 px-4 rounded-md hover:bg-[#4F6F52] focus:outline-none focus:ring-2 focus:ring-[#3A4D39] focus:ring-opacity-50 transition duration-300 ease-in-out text-sm"
                >
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
