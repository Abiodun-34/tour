import React, { useEffect } from 'react';
import image from '../assets/test.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HerSec = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="relative h-screen bg-center bg-no-repeat bg-cover pb-12" style={{ backgroundImage: `url(${image})` }}>
      <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4'>
        <h1 data-aos="fade-up" className="text-blue-100 lg:text-8xl sm:text-3xl md:text-6xl font-bold mb-4">
          Explore the World with Us
        </h1>
        <p data-aos="fade-up" className="mt-25 text-amber-700 font-serif lg:text-3xl sm:text-2xl md:text-xl max-w-xl">
          Discover new places, meet new people, and make unforgettable memories.
        </p>
        <div className="flex justify-center w-full col-span-full mt-10"><br></br>
          <button className="mt-30 bg-amber-950 hover:text-amber-8console.log('AOS initialized');
console.log('Hero Section rendered');00 text-white py-2 px-6 rounded-md hover:text-amber- text-lg hover:bg-amber-50 hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HerSec;
