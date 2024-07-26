import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';

const Hotelfinal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingSummary } = location.state || {};

  const handleBookNow = () => {
    // Notify the user
    toast.success('Hotel booking confirmed!');

    // Navigate to the Hotels page
    navigate('/hotels');
  };

  if (!bookingSummary) {
    return <div className="text-center text-2xl mt-16">No booking details found.</div>;
  }

  const calculateDays = (checkInDate, checkOutDate) => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDifference = checkOut - checkIn;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
  };

  const numberOfDays = calculateDays(bookingSummary.checkInDate, bookingSummary.checkOutDate);

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#F5F5F5] min-h-screen mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h1 className="text-5xl font-bold text-[#2C3E50]">Booking Confirmation</h1>
            <p className="text-xl text-[#34495E]"><strong>Hotel Name:</strong> {bookingSummary.hotelName}</p>
            <p className="text-xl text-[#34495E]"><strong>Name:</strong> {bookingSummary.name}</p>
            <p className="text-xl text-[#34495E]"><strong>Total Price:</strong> ${bookingSummary.totalPrice}</p>
            <p className="text-xl text-[#34495E]"><strong>Check-In Date:</strong> {bookingSummary.checkInDate}</p>
            <p className="text-xl text-[#34495E]"><strong>Check-Out Date:</strong> {bookingSummary.checkOutDate}</p>
            <p className="text-xl text-[#34495E]"><strong>Number of Rooms:</strong> {bookingSummary.numberOfRooms}</p>
            <p className="text-xl text-[#34495E]"><strong>Room Type:</strong> {bookingSummary.roomType}</p>
            <p className="text-xl text-[#34495E]"><strong>Number of Days:</strong> {numberOfDays}</p>
            {/* Display other booking details if needed */}
          </div>
          <button
            onClick={handleBookNow}
            className="mt-8 bg-[#27AE60] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#1E8449] transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotelfinal;
