import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaGlobe, FaUser, FaShoppingCart, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      {/* Company Information */}
      <div>
        <div className="flex items-center mb-4">
          <FaHotel className="text-3xl mr-2" />
          <span className="text-xl font-bold">TravelJunction</span>
        </div>
        <p className="text-gray-400">
          Your one-stop destination for all your travel needs. Explore the world with us.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/hotels" className="hover:text-gray-300">
              Hotels
            </Link>
          </li>
          <li>
            <Link to="/tours" className="hover:text-gray-300">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-gray-300">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4 justify-center">
          <a href="https://facebook.com" className="hover:text-gray-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </div>

    {/* Legal Information */}
    <div className="mt-8 text-sm text-gray-400 text-center">
      <p>&copy; 2024 TravelJunction. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;