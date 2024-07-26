import React from 'react';
import {Link} from 'react-router-dom';
import { FaMountain, FaSuitcase, FaGlobe, FaSmile } from 'react-icons/fa';
import i1 from '../../assets/i1.jpg';
import baa from '../../assets/baa.png';
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.avif';
import p4 from '../../assets/p4.avif';
import p6 from '../../assets/p6.jpg';
import p7 from '../../assets/p7.webp';
import p8 from '../../assets/p8.jpg';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g3 from '../../assets/g3.jpg';
import p5 from '../../assets/p5.avif';

const HeroSection = () => {
  return (
    <section className="hero-section bg-[#ECE3CE] text-[#3A4D39]">
      {/* Introduction Section */}
      <div className="intro-section flex flex-col md:flex-row justify-center items-center h-screen bg-[#ECE3CE] relative">
        <div className="container mx-auto p-6 md:p-12 text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-[#3A4D39] leading-tight">
            Unleash Your Wanderlust
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-[#3A4D39] leading-relaxed">
            Embark on a journey of discovery with our expertly curated tours and travel management services. Explore new horizons, immerse in local cultures, and create unforgettable memories.
          </p>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-[#3A4D39] leading-relaxed">
            Whether you're seeking thrilling adventures, relaxing getaways, or cultural experiences, our comprehensive travel solutions are designed to meet your needs and exceed your expectations. Let us help you turn your travel dreams into reality.
          </p>
          <Link to="/hotels">
            <button className="bg-[#3A4D39] hover:bg-[#2D3A28] text-[#ECE3CE] font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
              Start Your Adventure
            </button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={baa} alt="Travel Image" className="w-[110%] h-auto object-cover" />
        </div>
      </div>


{/* Popular Packages Section */}
<div className="packages-section py-20 bg-[#ECE3CE]">
  <h2 className="text-4xl font-extrabold mb-12 text-[#3A4D39] text-center font-sans">Explore Our Top Packages</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
    <div className="package-card bg-[#F6F193] shadow-lg border-2 border-[#4F6F52] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src="https://media1.thrillophilia.com/filestore/vkr51vrx6aitlvx7700syuweqiu8_1615619932_shutterstock_1061944991.jpg?w=400&dpr=2" alt="Jungle Safari" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#3A4D39] font-serif">Jungle Safari</h3>
        <p className="text-base mb-4 text-[#3A4D39] leading-relaxed">Embark on a thrilling Jungle Safari to explore dense forests and encounter exotic wildlife. Immerse yourself in the serenity of nature, unwind on secluded beaches, and enjoy thrilling water sports. Ideal for nature enthusiasts seeking adventure and relaxation amidst breathtaking landscapes.</p>
        <Link to="/tours">
          <button className="bg-[#3A4D39] hover:bg-[#2D3A28] text-[#FEE715] font-bold py-3 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:translate-y-1">Book Now</button>
        </Link>
      </div>
    </div>
    <div className="package-card bg-[#F6F193] shadow-lg border-2 border-[#4F6F52] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src="https://nationalparkexpress.com/wp-content/uploads/2022/05/grand-canyon-west-1.jpg" alt="Grand Canyon Tour" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#3A4D39] font-serif">Grand Canyon Tour</h3>
        <p className="text-base mb-4 text-[#3A4D39] leading-relaxed">Experience the awe-inspiring Grand Canyon Tour, where you'll discover the rich cultural tapestry of vibrant cities. Delve into iconic landmarks, savor local cuisine, and immerse yourself in the vibrant urban atmosphere. Perfect for travelers seeking a blend of cultural exploration and urban excitement.</p>
        <Link to="/tours">
          <button className="bg-[#3A4D39] hover:bg-[#2D3A28] text-[#FEE715] font-bold py-3 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:translate-y-1">Book Now</button>
        </Link>
      </div>
    </div>
    <div className="package-card bg-[#F6F193] shadow-lg border-2 border-[#4F6F52] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src="https://www.taps.org/globalassets/events/2016/2016sep-machupicchu.jpg" alt="Adventure Trek" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#3A4D39] font-serif">Adventure Trek</h3>
        <p className="text-base mb-4 text-[#3A4D39] leading-relaxed">Embark on an exhilarating Adventure Trek through breathtaking landscapes and rugged terrains. Traverse scenic viewpoints, uncover hidden valleys, and reconnect with nature's tranquility. Ideal for adventurers seeking unforgettable experiences and a deeper connection with the great outdoors.</p>
        <Link to="/tours">
          <button className="bg-[#3A4D39] hover:bg-[#2D3A28] text-[#FEE715] font-bold py-3 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:translate-y-1">Book Now</button>
        </Link>
      </div>
    </div>
    <div className="package-card bg-[#F6F193] shadow-lg border-2 border-[#4F6F52] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src="https://i.cdn.newsbytesapp.com/images/l96620240125104036.jpeg" alt="Tokyo Night Life" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#3A4D39] font-serif">Tokyo Night Life</h3>
        <p className="text-base mb-4 text-[#3A4D39] leading-relaxed">Dive into the vibrant Tokyo Night Life, where culinary delights and cultural experiences await. Indulge in local flavors, enjoy wine tastings, and uncover Tokyo's hidden gems. Perfect for food enthusiasts and cultural explorers looking to immerse themselves in the dynamic energy of Tokyo's nightlife.</p>
        <Link to="/tours">
          <button className="bg-[#3A4D39] hover:bg-[#2D3A28] text-[#FEE715] font-bold py-3 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:translate-y-1">Book Now</button>
        </Link>
      </div>
    </div>
  </div>
</div>






{/* Our Experiences Section */}
<div className="experiences-section py-20 bg-[#ECE3CE]">
  <h2 className="text-4xl font-bold mb-12 text-[#FEE715] text-center">Our Experiences</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p1} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 1</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p2} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 2</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p3} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 3</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p4} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 4</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p5} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 5</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p6} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 6</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p7} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 7</p>
      </div>
    </div>
    <div className="experience-card relative group overflow-hidden rounded-lg shadow-lg border-2 border-[#3A4D39] transition-transform duration-300 hover:scale-105">
      <img src={p8} alt="Experience Image" className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-[#4F6F52] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#ECE3CE] text-xl font-semibold">Experience 8</p>
      </div>
    </div>
  </div>
</div>






{/* What We Offer Section */}
<div className="goal-section py-20 bg-[#101820] text-[#FEE715]">
  <h2 className="text-4xl font-extrabold mb-12 text-center font-sans">What We Offer</h2>
  <div className="flex flex-wrap justify-center">
    <div className="goal-card bg-[#3A4D39] text-[#ECE3CE] shadow-lg border-2 border-[#4F6F52] rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 md:p-8 lg:p-10 xl:p-12 mb-8 transition-transform transform hover:scale-105 ease-in-out duration-300">
      <div className="flex items-start mb-6">
        <span className="text-4xl font-bold mr-4 text-[#ECE3CE]">1.</span>
        <div>
          <h3 className="text-2xl font-bold mb-2 font-serif">Explore New Destinations</h3>
          <p className="text-base mb-4 leading-relaxed">Discover new places and experiences. Our platform offers a wide range of destinations to choose from, including popular tourist spots and off-the-beaten-path locations.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Search and book flights, hotels, and activities</li>
            <li>Get personalized travel recommendations</li>
            <li>Read reviews and ratings from other travelers</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="goal-card bg-[#3A4D39] text-[#ECE3CE] shadow-lg border-2 border-[#4F6F52] rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 md:p-8 lg:p-10 xl:p-12 mb-8 transition-transform transform hover:scale-105 ease-in-out duration-300">
      <div className="flex items-start mb-6">
        <span className="text-4xl font-bold mr-4 text-[#ECE3CE]">2.</span>
        <div>
          <h3 className="text-2xl font-bold mb-2 font-serif">Make Travel Easy</h3>
          <p className="text-base mb-4 leading-relaxed">Simplify travel planning and booking. Our platform offers a user-friendly interface and a streamlined booking process, making it easy to plan your trip.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Book flights, hotels, and activities in one place</li>
            <li>Get instant confirmation and booking updates</li>
            <li>Access your travel itinerary on the go</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="goal-card bg-[#3A4D39] text-[#ECE3CE] shadow-lg border-2 border-[#4F6F52] rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 md:p-8 lg:p-10 xl:p-12 mb-8 transition-transform transform hover:scale-105 ease-in-out duration-300">
      <div className="flex items-start mb-6">
        <span className="text-4xl font-bold mr-4 text-[#ECE3CE]">3.</span>
        <div>
          <h3 className="text-2xl font-bold mb-2 font-serif">Connect Travelers</h3>
          <p className="text-base mb-4 leading-relaxed">Bring travelers together and create a community. Our platform offers a social feature that allows you to connect with other travelers and share your experiences.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Join travel groups and forums</li>
            <li>Share your travel stories and photos</li>
            <li>Get travel tips and advice from other travelers</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="goal-card bg-[#3A4D39] text-[#ECE3CE] shadow-lg border-2 border-[#4F6F52] rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 md:p-8 lg:p-10 xl:p-12 mb-8 transition-transform transform hover:scale-105 ease-in-out duration-300">
      <div className="flex items-start mb-6">
        <span className="text-4xl font-bold mr-4 text-[#ECE3CE]">4.</span>
        <div>
          <h3 className="text-2xl font-bold mb-2 font-serif">Create Unforgettable Memories</h3>
          <p className="text-base mb-4 leading-relaxed">Help travelers create lifelong memories. Our platform offers a range of activities and experiences that will make your trip unforgettable.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Book unique experiences and activities</li>
            <li>Get exclusive deals and discounts</li>
            <li>Create a personalized travel journal</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="goal-card bg-[#3A4D39] text-[#ECE3CE] shadow-lg border-2 border-[#4F6F52] rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 md:p-8 lg:p-10 xl:p-12 mb-8 transition-transform transform hover:scale-105 ease-in-out duration-300">
      <div className="flex items-start mb-6">
        <span className="text-4xl font-bold mr-4 text-[#ECE3CE]">5.</span>
        <div>
          <h3 className="text-2xl font-bold mb-2 font-serif">Personalized Travel Experiences</h3>
          <p className="text-base mb-4 leading-relaxed">Offer tailored travel experiences. Our platform uses AI-powered technology to offer personalized travel recommendations based on your preferences and interests.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Get personalized travel recommendations</li>
            <li>Discover hidden gems and off-the-beaten-path locations</li>
            <li>Plan your trip with our expert travel advisors</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


{/* About Us Section */}
<div className="about-us-section py-20 bg-[#101820] text-[#FEE715]">
  <h2 className="text-4xl font-extrabold mb-12 text-center font-sans">Our Main Goal</h2>
  <div className="flex flex-wrap justify-center items-stretch">
    <div className="w-full md:w-1/2 lg:w-1/3 p-6">
      <div className="bg-[#A5DD9B] text-[#101820] rounded-lg shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
        <img src={g1} alt="Problem Image" className="w-full h-70 object-cover rounded-t-lg" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 font-serif">Problem Statement</h3>
          <p className="text-lg leading-relaxed mb-4 font-sans">Planning your travel can be both overwhelming and time-consuming. From researching dream destinations to comparing prices and booking flights and hotels, the process often leads to decision fatigue. Let's simplify your journey.</p>
          <p className="text-sm font-sans text-[#101820]">We understand the struggle.</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 p-6">
      <div className="bg-[#C5EBAA] text-[#101820] rounded-lg shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
        <img src={g2} alt="Solution Image" className="w-full h-70 object-cover rounded-t-lg" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 font-serif">Solution</h3>
          <p className="text-lg leading-relaxed mb-4 font-sans">We offer a user-friendly platform designed to simplify your travel planning and booking experience. Easily search and compare prices, book flights and hotels, and plan your itinerary—all in one place. Enjoy seamless and enjoyable travel planning with us.</p>
          <p className="text-sm font-sans text-[#101820]">Say goodbye to travel stress!</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 p-6">
      <div className="bg-[#F6F193] text-[#101820] rounded-lg shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
        <img src={g3} alt="Team Members Image" className="w-full h-70 object-cover rounded-t-lg" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 font-serif">Meet Our Team</h3>
          <ul className="text-lg leading-relaxed mb-4 font-sans">
            <li><b>KSHITJ</b>, Travel Enthusiast</li>
            <li><b>MADHAB</b>, Tech Wizard</li>
            <li><b>BHARGAV</b>, Design Guru</li>
            <li><b>SUMANTH</b>, Travel Expert</li>
          </ul>
          <p className="text-sm font-sans text-[#101820]">Our team of dedicated professionals is passionate about making your travel experience exceptional. With years of combined experience in the travel industry, we are committed to providing the best possible service to our customers.</p>
        </div>
      </div>
    </div>
  </div>
</div>



    </section>
  );
};

export default HeroSection;
