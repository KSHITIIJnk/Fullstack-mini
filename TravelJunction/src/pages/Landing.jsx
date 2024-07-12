import React from 'react';
import { Link } from 'react-router-dom';
import l1 from '../assets/l1.svg';

const LandingPage = () => {
    return (
        <div className="bg-white text-black font-sans overflow-hidden min-h-screen">
            <nav className="flex justify-between items-center p-5">
                <div className="ml-10 text-2xl font-bold">TravelJunction</div>
                <div className="mr-10">
                    <Link to="/sign">
                        <button className="bg-black text-white px-4 py-2 rounded mr-2">Sign In</button>
                    </Link>
                    <Link to="/signout">
                        <button className="bg-black text-white px-4 py-2 rounded">Sign Out</button>
                    </Link>
                </div>
            </nav>
            <div className="flex flex-col lg:flex-row items-center justify-center h-full">
                <div className="lg:w-1/2 p-10">
                    <h1 className="text-4xl font-bold mb-4">Discover Amazing Places</h1>
                    <p className="mb-6">
                        Explore the world with us. Experience the most beautiful and remote places on earth with our exclusive tours and travel packages. From the snow-capped peaks of the Himalayas to the sunny beaches of the Caribbean, we have something for every kind of traveler.
                    </p>
                    <Link to="/signup">
                        <button className="bg-black text-white px-6 py-3 rounded-lg text-xl">Get Started</button>
                    </Link>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <img 
                        src={l1}
                        alt="Vector Illustration" 
                        className="w-4/5 h-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
