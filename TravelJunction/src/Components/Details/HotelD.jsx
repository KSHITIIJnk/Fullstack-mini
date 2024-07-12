import React, { useState, useEffect } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Navbar from '../Nav/Navbar';
import Footer from '../Footersection/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HotelD = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [hotel, setHotel] = useState(null);
  const [booking, setBooking] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: 1,
    children: 0,
    roomType: 'Single',
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hotels/${id}`);
        setHotel(response.data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handleBooking = () => {
    // Validate required fields
    const { firstName, lastName, email, phone, checkin, checkout } = booking;
    if (!firstName || !lastName || !email || !phone || !checkin || !checkout) {
      toast.error('Please fill in all required fields.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    console.log('Book Now clicked for hotel:', hotel.name);

    const bookedHotel = {
      id: hotel._id,
      name: hotel.name,
      checkin: booking.checkin,
      checkout: booking.checkout,
      roomType: booking.roomType,
    };

    setCart([...cart, bookedHotel]);

    toast.success('Booking confirmed!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Navigate to Hotels page after booking
    navigate('/hotels');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-wrap pt-20">
        <div className="w-full md:w-1/2 p-4">
          <img className="w-full h-auto" src={hotel.image} alt={hotel.name} />
          <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
          <p className="text-gray-700 mb-4">{hotel.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-sm font-semibold text-black flex items-center">
              <FaStar className="mr-2" />
              {hotel.rating} stars
            </span>
            <span className="ml-4 text-sm font-semibold text-black flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              {hotel.location}
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">Booking Details</h2>

          <form>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={booking.firstName}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={booking.lastName}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={booking.email}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={booking.phone}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  name="checkin"
                  value={booking.checkin}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  name="checkout"
                  value={booking.checkout}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Adults
                </label>
                <select
                  name="adults"
                  value={booking.adults}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Children
                </label>
                <select
                  name="children"
                  value={booking.children}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={booking.roomType}
                  onChange={handleInputChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleBooking}
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 mt-6"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelD;