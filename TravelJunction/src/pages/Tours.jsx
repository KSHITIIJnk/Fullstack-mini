import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';
import TourCard from '../Components/Tour/TourCard'; // Ensure TourCard component is correctly defined
import { FaStar, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tours'); // Updated API endpoint
        if (Array.isArray(response.data)) {
          setTours(response.data);
          setFilteredTours(response.data); // Initialize filteredTours
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = tours.filter(tour =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      switch (selectedFilter) {
        case 'highestRated':
          filtered = filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'nearest':
          // Assuming we have a way to determine "nearest", this is a placeholder
          filtered = filtered.sort((a, b) => a.city.localeCompare(b.city)); // Example sorting by city name
          break;
        case 'mostAffordable':
          filtered = filtered.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }

      setFilteredTours(filtered);
    };

    applyFilters();
  }, [searchTerm, selectedFilter, tours]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#ECE3CE] min-h-screen">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#3A4D39]">Discover Your Perfect Tour</h1>
          <p className="text-[#4F6F52] text-lg mb-6">Find the best tour from our wide selection</p>
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <FaSearch className="absolute top-3 left-3 text-[#3A4D39]" />
              <input
                type="text"
                placeholder="Search for tours..."
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
                {/* Custom Dropdown Icon */}
                <svg className="ml-2 h-5 w-5 text-[#3A4D39]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
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
                      onClick={() => handleFilterChange('nearest')}
                      className="block px-4 py-2 text-sm text-[#3A4D39] hover:bg-gray-100"
                    >
                      Nearest
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
        {loading ? (
          <div className="text-center text-[#3A4D39]">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error.message}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <TourCard key={tour._id} tour={tour} />
              ))
            ) : (
              <p className="text-center text-lg text-[#3A4D39]">No tours found.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Tours;