import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import Navbar from '../Nav/Navbar';
import Footer from '../Footersection/Footer';

const HotelDetails = () => {
  const { id } = useParams(); // Get the hotel ID from the URL
  const [hotel, setHotel] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/hotels/66a3a0205701de76c63ab739`);
        setHotel(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error fetching hotel details');
        console.error('Error fetching hotel details:', error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  const handleBookNow = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here
    console.log('Booking confirmed');
    setShowDialog(false);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  if (!hotel) return <div>Hotel not found</div>;

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#ECE3CE] min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-80 object-cover" src={hotel.image} alt={hotel.name} />
          <div className="p-6">
            <h1 className="text-4xl font-bold text-[#3A4D39] mb-2">{hotel.name}</h1>
            <p className="text-[#4F6F52] text-lg mb-4">{hotel.description}</p>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-[#3A4D39] mr-2" />
              <p className="text-[#3A4D39]">{hotel.location}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaStar className="text-[#3A4D39] mr-2" />
              <p className="text-[#3A4D39]">{hotel.rating} stars</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-[#3A4D39] text-lg font-semibold">${hotel.price} per night</p>
            </div>
            <div className="flex flex-col gap-4 mb-6">
              <label className="text-[#3A4D39] font-semibold">Number of Rooms:</label>
              <input
                type="number"
                min="1"
                value={numberOfRooms}
                onChange={(e) => setNumberOfRooms(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-1/4"
              />
            </div>
            <button
              onClick={handleBookNow}
              className="bg-[#739072] hover:bg-[#4F6F52] text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
        <Footer />
      </div>

      {/* Booking Confirmation Dialog */}
      <Dialog open={showDialog} onClose={handleCloseDialog} className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-[#3A4D39] mb-4">Booking Confirmation</h2>
          <p className="text-[#4F6F52] mb-4">You are about to book {numberOfRooms} room(s) at {hotel.name}.</p>
          <p className="text-[#3A4D39] mb-4">
            <FaCalendarAlt className="inline mr-2" />
            Total Cost: ${hotel.price * numberOfRooms}
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={handleConfirmBooking}
              className="bg-[#739072] hover:bg-[#4F6F52] text-white font-bold py-2 px-4 rounded"
            >
              Confirm Booking
            </button>
            <button
              onClick={handleCloseDialog}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default HotelDetails;
