import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import travel from '../../assets/travel.png';
import logout from '../../assets/logout.png'; // Add your sign-out icon path here

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#4F6F52] fixed w-full z-20 top-0 start-0 border-b border-[#3A4D39] shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Home Link */}
        <Link to="/frontpage" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={travel} className="h-8" alt="TravelJunct!on Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#ECE3CE]">TravelJunct!on</span>
        </Link>

        {/* Sign Out Button */}
        <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
          {/* Sign Out Button with Icon */}
          <Link to="/sign" className="text-[#ECE3CE] hover:text-[#FEE715] flex items-center ml-4 transition duration-300 ease-in-out">
            <img src={logout} alt="Sign Out" className="h-8" />
            <span className="ml-2">Sign Out</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#3A4D39] rounded-lg bg-[#4F6F52] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#4F6F52]">
            <li>
              <Link
                to="/frontpage"
                className={`block py-2 px-3 text-[#ECE3CE] rounded md:bg-transparent md:p-0 transition duration-300 ease-in-out ${location.pathname === '/frontpage' ? 'bg-[#FEE715] text-[#3A4D39]' : 'hover:bg-[#3A4D39] hover:text-[#ECE3CE]'}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/hotels"
                className={`block py-2 px-3 text-[#ECE3CE] rounded md:bg-transparent md:p-0 transition duration-300 ease-in-out ${location.pathname === '/hotels' ? 'bg-[#FEE715] text-[#3A4D39]' : 'hover:bg-[#2D3A28] hover:text-[#ECE3CE]'}`}
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className={`block py-2 px-3 text-[#ECE3CE] rounded md:bg-transparent md:p-0 transition duration-300 ease-in-out ${location.pathname === '/tours' ? 'bg-[#FEE715] text-[#3A4D39]' : 'hover:bg-[#2D3A28] hover:text-[#ECE3CE]'}`}
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 text-[#ECE3CE] rounded md:bg-transparent md:p-0 transition duration-300 ease-in-out ${location.pathname === '/contact' ? 'bg-[#FEE715] text-[#3A4D39]' : 'hover:bg-[#2D3A28] hover:text-[#ECE3CE]'}`}
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
