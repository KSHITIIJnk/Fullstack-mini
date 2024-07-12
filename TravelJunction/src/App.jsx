import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import LandingPage from './pages/Landing';
import Sign from './pages/Sign';
import Signup from './pages/Signup';
import Forgotpass from './pages/Forgotpass';
import Frontpage from './pages/Frontpage';
import Hotel from './pages/Hotels';
import HotelD from './Components/Details/HotelD'; // Import HotelD component
import Tours from './pages/Tours';
import TourD from './Components/Details/TourD'; // Import TourD component
import Contactus from './pages/Contactus';
import Profile from './pages/Profile'; // Import Profile component

const App = () => {
  return (
    <Router>
      <ToastContainer position="bottom-right" autoClose={3000} /> {/* ToastContainer for notifications */}
      <Routes>
        {/* Default LandingPage route */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for Frontpage */}
        <Route path="/frontpage" element={<Frontpage />} />

        {/* Route for Contactus */}
        <Route path="/contact" element={<Contactus />} />

        {/* Routes for Hotels and specific Hotel */}
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotel/:id" element={<HotelD />} /> {/* Dynamic route for specific hotel */}

        {/* Routes for Tours and specific Tour */}
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<TourD />} /> {/* Dynamic route for specific tour */}

        {/* Route for Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Other routes */}
        <Route path="/sign" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
      </Routes>
    </Router>
  );
};

export default App;
