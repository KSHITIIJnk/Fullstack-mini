import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../assets/icon.png';

import 'firebase/auth';

const Navbar = () => {
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Home Link */}
        <Link to="/frontpage" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={icon} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">TravelJunct!on</span>
        </Link>

        {/* Profile and Sign Out Buttons */}
        <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
          {/* Profile button */}
          <Link to="/profile" className="text-gray-900 hover:text-gray-600 flex items-center mr-4">
            <i className="fas fa-user-circle text-xl"></i>
            <span className="ml-2">Profile</span>
          </Link>

          {/* Sign Out Button */}
          <Link to="/sign" onClick={handleSignOut} className="text-black hover:text-gray-600 flex items-center ml-4">
            <span className="ml-6">Sign Out</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/frontpage"
                className={`block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ${location.pathname === '/frontpage' ? 'bg-yellow-300 scribble' : ''}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/hotels"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-900 ${location.pathname === '/hotels' ? 'bg-yellow-300 scribble' : ''}`}
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-900 ${location.pathname === '/tours' ? 'bg-yellow-300 scribble' : ''}`}
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-900 ${location.pathname === '/contact' ? 'bg-yellow-300 scribble' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
