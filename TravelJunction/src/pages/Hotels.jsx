import React, { useState, useEffect } from 'react';
import { FaStar, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';

const HotelCard = ({ hotel }) => (
  <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-white transition duration-300 hover:shadow-xl flex flex-col mx-auto">
    <img className="w-full h-56 object-cover" src={hotel.image} alt={hotel.name} />
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-[#3A4D39] mb-2">{hotel.name}</h2>
        <p className="text-[#4F6F52] text-base">{hotel.description}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="flex items-center text-sm font-semibold text-[#3A4D39]">
          <FaMapMarkerAlt className="mr-2" />{hotel.location}
        </span>
        <span className="flex items-center text-sm font-semibold text-[#3A4D39]">
          <FaStar className="mr-2" />{hotel.rating} stars
        </span>
      </div>
      <div className="mt-auto">
        <p className="text-[#3A4D39] font-semibold mb-2">${hotel.price} per night</p>
        <Link to={`/hotel/${hotel._id}`} className="bg-[#739072] hover:bg-[#4F6F52] text-white font-bold py-2 px-4 rounded transition duration-300 block text-center">
          Book Now
        </Link>
      </div>
    </div>
  </div>
);

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hotels, setHotels] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hotels');
        if (Array.isArray(response.data)) {
          setHotels(response.data);
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const applyFilters = (hotels) => {
    let filteredHotels = hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (selectedFilter) {
      case 'highestRated':
        return filteredHotels.sort((a, b) => b.rating - a.rating);
      case 'mostAffordable':
        return filteredHotels.sort((a, b) => a.price - b.price);
      default:
        return filteredHotels;
    }
  };

  const filteredHotels = applyFilters(hotels);

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#ECE3CE] min-h-screen">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#3A4D39]">Discover Your Perfect Hotel</h1>
          <p className="text-[#4F6F52] text-lg mb-6">Find the best stay from our wide selection of hotels</p>
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <FaSearch className="absolute top-3 left-3 text-[#3A4D39]" />
              <input
                type="text"
                placeholder="Search for hotels..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded shadow appearance-none border w-full text-[#3A4D39] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#3A4D39] hover:bg-gray-50 focus:outline-none"
              >
                Filter
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => handleFilterChange('highestRated')}
                      className="block px-4 py-2 text-sm text-[#3A4D39] hover:bg-gray-100"
                    >
                      Highest Rated
                    </button>
                    <button
                      onClick={() => handleFilterChange('mostAffordable')}
                      className="block px-4 py-2 text-sm text-[#3A4D39] hover:bg-gray-100"
                    >
                      Most Affordable
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {filteredHotels.length > 0 ? (
            filteredHotels.map(hotel => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          ) : (
            <p className="text-center text-lg text-[#3A4D39]">No hotels found matching your criteria.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
