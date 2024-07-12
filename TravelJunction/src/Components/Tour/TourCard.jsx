import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/tour/${tour.id}`); // Adjust the path as necessary
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-300 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={tour.image} alt={tour.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{tour.name}</div>
        <p className="text-gray-700 text-base">{tour.countryName}</p>
        <p className="text-gray-700 text-base">{tour.location}</p>
        <p className="text-gray-700 text-base">{tour.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="flex items-center text-sm font-semibold text-black">
          <FaMapMarkerAlt className="mr-2" />
          {tour.location}
        </span>
        <span className="flex items-center text-sm font-semibold text-black">
          <FaStar className="mr-2" />
          {tour.rating} stars
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-black">${tour.price}</div>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default TourCard;
