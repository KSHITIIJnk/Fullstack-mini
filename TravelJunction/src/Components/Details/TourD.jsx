import React, { useState, useEffect } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Nav/Navbar';
import Footer from '../Footersection/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TourD = () => {
  const { id } = useParams(); // Get the tour ID from the URL params
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [booking, setBooking] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: 1,
    children: 0,
    packageType: 'Standard',
    includeFlight: false,
    flightClass: 'Economy',
    flightPreferences: '',
    selectedHotel: '', // Placeholder for selected hotel
    hotelPreferences: '',
  });

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tours/668fb5506a9a5b261177e54c`); // Adjust URL as per your backend setup
        setTour(response.data);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  // Function to handle booking process
  const handleBooking = () => {
    // Validate booking form
    if (
      !booking.firstName ||
      !booking.lastName ||
      !booking.email ||
      !booking.phone ||
      !booking.checkin ||
      !booking.checkout ||
      !booking.selectedHotel
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    console.log('Booking details:', booking);

    // Implement your booking logic here

    // Clear booking form after booking
    setBooking({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      checkin: '',
      checkout: '',
      adults: 1,
      children: 0,
      packageType: 'Standard',
      includeFlight: false,
      flightClass: 'Economy',
      flightPreferences: '',
      selectedHotel: '',
      hotelPreferences: '',
    });

    // Show success message
    toast.success('Booking successful!');

    // Navigate back to tours page
    setTimeout(() => {
      navigate('/tours');
    }, 2000); // Adjust the timeout duration as needed
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-wrap pt-20">
        {/* Left Side: Tour Image and Details */}
        <div className="w-full md:w-1/2 p-4">
          <img className="w-full h-auto" src={tour.image} alt={tour.name} />
          <h2 className="text-2xl font-bold mb-2 text-black">{tour.name}</h2>
          <p className="text-gray-700 mb-4">{tour.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-sm font-semibold text-black flex items-center">
              <FaStar className="mr-2" />
              {tour.rating} stars
            </span>
            <span className="ml-4 text-sm font-semibold text-black flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              {tour.location}
            </span>
          </div>
        </div>

        {/* Right Side: Booking Details */}
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-xl font-bold mb-4 text-black">Booking Details</h3>
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={booking.firstName}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={booking.lastName}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={booking.email}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={booking.phone}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="checkin" className="text-sm font-semibold text-gray-700">Check-in Date</label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                value={booking.checkin}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="checkout" className="text-sm font-semibold text-gray-700">Check-out Date</label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                value={booking.checkout}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="adults" className="text-sm font-semibold text-gray-700">Adults</label>
              <input
                type="number"
                id="adults"
                name="adults"
                min="1"
                value={booking.adults}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="children" className="text-sm font-semibold text-gray-700">Children</label>
              <input
                type="number"
                id="children"
                name="children"
                min="0"
                value={booking.children}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="packageType" className="text-sm font-semibold text-gray-700">Package Type</label>
              <select
                id="packageType"
                name="packageType"
                value={booking.packageType}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                Include Flight
                <input
                  type="checkbox"
                  id="includeFlight"
                  name="includeFlight"
                  checked={booking.includeFlight}
                  onChange={handleInputChange}
                  className="ml-2"
                />
              </label>
            </div>

            {booking.includeFlight && (
              <>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="flightClass" className="text-sm font-semibold text-gray-700">Flight Class</label>
                  <select
                    id="flightClass"
                    name="flightClass"
                    value={booking.flightClass}
                    onChange={handleInputChange}
                    className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="FirstClass">First Class</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="flightPreferences" className="text-sm font-semibold text-gray-700">Flight Preferences</label>
                  <textarea
                    id="flightPreferences"
                    name="flightPreferences"
                    value={booking.flightPreferences}
                    onChange={handleInputChange}
                    className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="e.g., Window seat, Vegetarian meal"
                  />
                </div>
              </>
            )}

            <div className="flex flex-col space-y-2">
              <label htmlFor="selectedHotel" className="text-sm font-semibold text-gray-700">Select Hotel</label>
              <select
                id="selectedHotel"
                name="selectedHotel"
                value={booking.selectedHotel}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Hotel...</option>
                <option value="hotel1">Hotel 1</option>
                <option value="hotel2">Hotel 2</option>
                <option value="hotel3">Hotel 3</option>
                {/* Add more hotel options as needed */}
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="hotelPreferences" className="text-sm font-semibold text-gray-700">Hotel Preferences</label>
              <textarea
                id="hotelPreferences"
                name="hotelPreferences"
                value={booking.hotelPreferences}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="e.g., Non-smoking room, King-size bed"
              />
            </div>

            <button
              type="button"
              onClick={handleBooking}
              className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default TourD;