import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaStar, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footersection/Footer';
import TourCard from '../Components/Tour/TourCard'; // Assuming TourCard component is defined

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tours');
        setTours(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-white min-h-screen">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-black">Discover Your Perfect Tour</h1>
          <p className="text-gray-800 text-lg mb-6">Find the best tour from our wide selection</p>
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <FaSearch className="absolute top-3 left-3 text-gray-800" />
              <input
                type="text"
                placeholder="Search for tours..."
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
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 text-black' : 'text-black'
                        } block px-4 py-2 text-sm`}
                      >
                        Highest Rated
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 text-black' : 'text-black'
                        } block px-4 py-2 text-sm`}
                      >
                        Nearest
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 text-black' : 'text-black'
                        } block px-4 py-2 text-sm`}
                      >
                        Most Affordable
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error.message}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(tours) && tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Tours;
