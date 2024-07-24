import React, { useState, useEffect } from 'react';
import { FaStar, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';

const HotelCard = ({ hotel }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-300 hover:shadow-xl flex flex-col justify-between">
    <img className="w-full h-48 object-cover" src={hotel.image} alt={hotel.name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-black">{hotel.name}</div>
      <p className="text-gray-700 text-base">{hotel.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2 flex justify-between items-center">
      <span className="flex items-center text-sm font-semibold text-black">
        <FaMapMarkerAlt className="mr-2" />{hotel.location}
      </span>
      <span className="flex items-center text-sm font-semibold text-black">
        <FaStar className="mr-2" />{hotel.rating} stars
      </span>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-900 font-semibold">${hotel.price} per night</p>
      <Link to={`/hotel/${hotel._id}`} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2 block">
        Book Now
      </Link>
    </div>
  </div>
);

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hotels, setHotels] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/hotels');
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
      <div className="p-8 bg-white min-h-screen">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-black">Discover Your Perfect Hotel</h1>
          <p className="text-gray-800 text-lg mb-6">Find the best stay from our wide selection of hotels</p>
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <FaSearch className="absolute top-3 left-3 text-gray-800" />
              <input
                type="text"
                placeholder="Search for hotels..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded shadow appearance-none border w-full text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50 focus:outline-none">
                Filter
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-black" aria-hidden="true" />
              </MenuButton>
              <MenuItems className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleFilterChange('highestRated')}
                        className={`${active ? 'bg-gray-100 text-black' : 'text-black'} block px-4 py-2 text-sm`}
                      >
                        Highest Rated
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleFilterChange('mostAffordable')}
                        className={`${active ? 'bg-gray-100 text-black' : 'text-black'} block px-4 py-2 text-sm`}
                      >
                        Most Affordable
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {filteredHotels.length > 0 ? (
            filteredHotels.map(hotel => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          ) : (
            <p className="text-center text-lg text-gray-800">No hotels found matching your criteria.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
