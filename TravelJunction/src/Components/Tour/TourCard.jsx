import React from 'react';
import PropTypes from 'prop-types'; // Make sure PropTypes is imported
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/tour/${tour._id}`);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white transition duration-300 hover:shadow-xl flex flex-col">
        <img className="w-full h-48 object-cover" src={tour.image} alt={tour.name} />
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h2 className="font-bold text-2xl text-[#3A4D39] mb-2">{tour.name}</h2>
            <p className="text-[#4F6F52] text-base font-semibold">{tour.country}</p>
            <p className="text-[#4F6F52] text-base">{tour.city}</p>
            <p className="text-[#4F6F52] text-base mt-2">{tour.description}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="flex items-center text-sm font-semibold text-[#3A4D39]">
              <FaMapMarkerAlt className="mr-2" />
              {tour.city}, {tour.country}
            </span>
            <span className="flex items-center text-sm font-semibold text-[#3A4D39]">
              <FaStar className="mr-2" />
              {tour.rating} stars
            </span>
          </div>
          <div className="mt-auto">
            <p className="text-[#3A4D39] font-semibold mb-2 text-lg">${tour.price}</p>
            <button
              className="bg-[#739072] hover:bg-[#4F6F52] text-white font-bold py-2 px-4 rounded transition duration-300 block w-full text-center"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tourType: PropTypes.string, // Make tourType optional
    availability: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TourCard;
