import React from 'react';
import { Link } from 'react-router-dom';
import l1 from '../assets/l1.svg';
import logo from '../assets/travel.png';

const LandingPage = () => {
    return (
        <div className="bg-[#ECE3CE] text-[#3A4D39] font-sans overflow-hidden min-h-screen flex flex-col">
            <nav className="flex justify-between items-center p-5 bg-[#ECE3CE] shadow-lg">
                <div className="flex items-center ml-10">
                    <img src={logo} alt="TravelJunction Logo" className="h-10 w-10 mr-3" />
                    <div className="text-3xl font-extrabold">TravelJunction</div>
                </div>
                <div className="mr-10">
                    <Link to="/sign">
                        <button className="bg-[#4F6F52] text-[#ECE3CE] px-5 py-2 rounded-full transition-transform transform hover:scale-105 mr-3">
                            Sign In
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-[#4F6F52] text-[#ECE3CE] px-5 py-2 rounded-full transition-transform transform hover:scale-105">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </nav>
            <div className="flex flex-1 flex-col lg:flex-row items-center justify-center p-10 lg:p-20">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">Discover Amazing Places</h1>
                    <p className="mb-8 text-lg lg:text-xl">
                        Explore the world with us. Experience the most beautiful and remote places on earth with our exclusive tours and travel packages. 
                        From the snow-capped peaks of the Himalayas to the sunny beaches of the Caribbean, we have something for every kind of traveler.
                    </p>
                    <p className="mb-8 text-lg lg:text-xl">
                        Our expert guides ensure that every detail of your journey is meticulously planned and executed. We offer personalized travel experiences tailored to your preferences.
                    </p>
                    <p className="mb-8 text-lg lg:text-xl">
                        Join us for an unforgettable adventure and create memories that will last a lifetime. Whether you're seeking relaxation or adventure, we have the perfect trip for you.
                    </p>
                    <Link to="/signup">
                        <button className="bg-[#4F6F52] text-[#ECE3CE] px-8 py-4 rounded-full text-xl transition-transform transform hover:scale-105">
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <img 
                        src={l1}
                        alt="Vector Illustration" 
                        className="w-4/5 h-auto lg:w-3/4"
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
