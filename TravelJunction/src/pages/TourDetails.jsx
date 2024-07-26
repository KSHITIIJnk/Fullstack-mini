import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';

const TourDetails = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    gender: '',
    age: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    tourDate: '',
    numberOfParticipants: '',
    specialRequests: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/tours/${id}`);
        setTour(response.data);
      } catch (error) {
        setError('Error fetching tour details');
        console.error('Error fetching tour details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateBookingDetails = () => {
    const {
      name,
      gender,
      age,
      contactNumber,
      email,
      address,
      city,
      state,
      zipCode,
      country,
      tourDate,
      numberOfParticipants,
      paymentMethod,
      cardNumber,
      cardExpiry,
      cardCVV,
    } = bookingDetails;

    if (!name || !gender || !age || !contactNumber || !email || !address || !city || !state || !zipCode || !country || !tourDate || !numberOfParticipants || !paymentMethod ||
      (paymentMethod !== 'paypal' && (!cardNumber || !cardExpiry || !cardCVV))) {
      return false;
    }
    return true;
  };

  const handleBooking = () => {
    if (!validateBookingDetails()) {
      alert('Please fill out all required fields.');
      return;
    }

    const bookingSummary = {
      ...bookingDetails,
      tourName: tour.name,
      totalPrice: calculateTotalPrice(),
    };

    // Navigate to the TourFinal page with booking details
    navigate('/tourfinal', { state: { bookingSummary } });
  };

  const calculateTotalPrice = () => {
    // Assuming price per participant is a number
    const pricePerParticipant = tour?.price || 0;
    return (pricePerParticipant * bookingDetails.numberOfParticipants).toFixed(2);
  };

  if (loading) return <div className="text-center p-8 text-xl font-semibold">Loading...</div>;
  if (error) return <div className="text-center p-8 text-xl font-semibold text-red-600">{error}</div>;
  if (!tour) return <div className="text-center p-8 text-xl font-semibold">Tour not found</div>;

  const {
    name,
    description,
    country,
    city,
    price,
    rating,
    image,
  } = tour;

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#ECE3CE] min-h-screen mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Tour Image */}
            <div className="flex justify-center items-center">
              <img
                src={image}
                alt={name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Tour Details */}
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h1 className="text-4xl font-extrabold text-[#3A4D39]">{name}</h1>
              <p className="text-lg text-[#4F6F52]">{description}</p>
              <p className="text-lg text-[#4F6F52]"><strong>Location:</strong> {city}, {country}</p>
              <p className="text-lg text-[#4F6F52]"><strong>Price per Participant:</strong> ${price}</p>
              <p className="text-lg text-[#4F6F52]"><strong>Rating:</strong> {rating} stars</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-[#3A4D39] mb-6">Book This Tour</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={bookingDetails.gender}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={bookingDetails.age}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={bookingDetails.contactNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingDetails.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={bookingDetails.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={bookingDetails.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={bookingDetails.state}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={bookingDetails.zipCode}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={bookingDetails.country}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="tourDate">Tour Date</label>
                <input
                  type="date"
                  id="tourDate"
                  name="tourDate"
                  value={bookingDetails.tourDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="numberOfParticipants">Number of Participants</label>
                <input
                  type="number"
                  id="numberOfParticipants"
                  name="numberOfParticipants"
                  value={bookingDetails.numberOfParticipants}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="specialRequests">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={bookingDetails.specialRequests}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="paymentMethod">Payment Method</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={bookingDetails.paymentMethod}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                >
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              {bookingDetails.paymentMethod === 'creditCard' && (
                <>
                  <div className="mb-4">
                    <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={bookingDetails.cardNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="cardExpiry">Card Expiry</label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      value={bookingDetails.cardExpiry}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#4F6F52] mb-2 text-lg font-medium" htmlFor="cardCVV">Card CVV</label>
                    <input
                      type="text"
                      id="cardCVV"
                      name="cardCVV"
                      value={bookingDetails.cardCVV}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A4D39]"
                    />
                  </div>
                </>
              )}
              <div className="col-span-full">
                <button
                  type="button"
                  onClick={handleBooking}
                  className="w-full bg-[#3A4D39] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#2a3b26]"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
          <p className="text-lg text-[#4F6F52] mt-4"><strong>Total Price:</strong> ${calculateTotalPrice()}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TourDetails;
