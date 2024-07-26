import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TourFinal = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { bookingSummary } = state || {};

  if (!bookingSummary) {
    return <div className="text-center p-8 text-xl font-semibold">No booking summary available</div>;
  }

  const {
    tourName,
    fullName,
    gender,
    age,
    contactNumber,
    email,
    address,
    city,
    state: bookingState,
    zipCode,
    country,
    startDate,
    endDate,
    tourDate,
    numberOfParticipants,
    flightDetails,
    accommodation,
    specialRequests,
    paymentMethod,
    totalPrice,
  } = bookingSummary;

  const handleBackToTours = () => {
    toast.success('Booking successful!');
    setTimeout(() => {
      navigate('/tours', { state: { message: 'Booking successful!' } });
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#ECE3CE] min-h-screen mt-16 font-roboto">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-4xl font-bold text-[#3A4D39] mb-6">Booking Summary</h1>
          <div className="space-y-4 text-lg text-[#4F6F52]">
            <p><strong>Tour Name:</strong> {tourName || 'N/A'}</p>
            <p><strong>Full Name:</strong> {fullName || 'N/A'}</p>
            <p><strong>Gender:</strong> {gender || 'N/A'}</p>
            <p><strong>Age:</strong> {age || 'N/A'}</p>
            <p><strong>Contact Number:</strong> {contactNumber || 'N/A'}</p>
            <p><strong>Email:</strong> {email || 'N/A'}</p>
            <p><strong>Address:</strong> {address || 'N/A'}</p>
            <p><strong>City:</strong> {city || 'N/A'}</p>
            <p><strong>State:</strong> {bookingState || 'N/A'}</p>
            <p><strong>Zip Code:</strong> {zipCode || 'N/A'}</p>
            <p><strong>Country:</strong> {country || 'N/A'}</p>
            <p><strong>Tour Start Date:</strong> {startDate || 'N/A'}</p>
            <p><strong>Tour End Date:</strong> {endDate || 'N/A'}</p>
            <p><strong>Tour Date:</strong> {tourDate || 'N/A'}</p>
            <p><strong>Number of Participants:</strong> {numberOfParticipants || 'N/A'}</p>
            <p><strong>Flight Details:</strong> {flightDetails || 'N/A'}</p>
            <p><strong>Accommodation:</strong> {accommodation || 'N/A'}</p>
            <p><strong>Special Requests:</strong> {specialRequests || 'N/A'}</p>
            <p><strong>Payment Method:</strong> {paymentMethod || 'N/A'}</p>
            <p className="text-lg font-bold text-[#3A4D39]"><strong>Total Price:</strong> ${totalPrice || 'N/A'}</p>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleBackToTours}
              className="bg-[#3A4D39] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#2b3a24] transition duration-300"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default TourFinal;