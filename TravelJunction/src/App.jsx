import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import LandingPage from './pages/Landing'; // Ensure this path is correct
import Sign from './pages/Sign';
import Signup from './pages/Signup';
import Forgotpass from './pages/Forgotpass';
import Frontpage from './pages/Frontpage';
import Hotel from './pages/Hotels';
import HotelsDetails from './pages/HotelsDetails'
import Tours from './pages/Tours';
import Contactus from '../src/pages/Contactus'; // Ensure this path is correct

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
        <Route path="/hotel/:id" element={<HotelsDetails />} />


        {/* Routes for Tours */}
        <Route path="/tours" element={<Tours />} />

        {/* Other routes */}
        <Route path="/sign" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
      </Routes>
    </Router>
  );
};

export default App;
