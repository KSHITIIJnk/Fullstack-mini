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
import HotelDetails from '../src/Components/Details/hoteldetails'; // Import HotelDetails page
import Tours from './pages/Tours';
import Contactus from '../src/pages/Contactus';
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
        <Route path="/hotel/:id" element={<HotelDetails />} /> {/* Route for HotelDetails */}

        {/* Routes for Tours and specific Tour */}
        <Route path="/tours" element={<Tours />} />


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
