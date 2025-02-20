import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa";

// Importing Images
import Img1 from "../assets/dubai.jpeg";
import Img2 from "../assets/egypt.jpeg";
import Img3 from "../assets/hamas.jpeg";
import Img4 from "../assets/iberty.jpeg";
import Img5 from "../assets/mount.jpeg";
import Img6 from "../assets/nature.jpeg";

const DestinationData = [
    { id: 1, img: Img1, title: "Dubai", description: "Explore the modern marvels of Dubai." },
    { id: 2, img: Img2, title: "Egypt", description: "Discover the pyramids and the Nile." },
    { id: 3, img: Img3, title: "Hamas", description: "Experience historical landmarks and heritage." },
    { id: 4, img: Img4, title: "Liberty", description: "The iconic Statue of Liberty awaits." },
    { id: 5, img: Img5, title: "Mountains", description: "Enjoy breathtaking mountain landscapes." },
    { id: 6, img: Img6, title: "Nature", description: "Escape into the beauty of nature." },
];

const Destination = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS Animation
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Featured Destinations
        </h1>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-center">
        {DestinationData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-lg bg-white dark:bg-gray-800 hover:bg-white/80  hover:text-black
            relative shadow-lg transition duration-300 group max-w-[350px] w-full"
          >
            {/* Image Section */}
            <div className="h-[200px] w-full">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Details Section */}
            <div className="p-5 text-center">
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              
              {/* Title & Description */}
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-black transition duration-300 text-sm">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
