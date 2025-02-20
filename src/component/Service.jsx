import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icons
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel, FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";

// Services Data
const ServicesData = [
  { id: 1, title: "Flight Booking", description: "We provide easy and quick flight booking services to make your travel hassle-free.", icon: <MdOutlineFlight className="text-primary text-4xl" /> },
  { id: 2, title: "Hotel Booking", description: "Book hotels at the best prices with our exclusive deals and discounts.", icon: <FaHotel className="text-primary text-4xl" /> },
  { id: 3, title: "Beach Tours", description: "Enjoy relaxing beach tours with our expert guides and make your vacation unforgettable.", icon: <FaUmbrellaBeach className="text-primary text-4xl" /> },
  { id: 4, title: "Concierge Services", description: "Get personalized concierge services to make your travel experience more enjoyable.", icon: <FaConciergeBell className="text-primary text-4xl" /> },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Our Services
        </h1>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {ServicesData.map((service) => (
          <div
            key={service.id}
            data-aos="zoom-in"
            className="rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-primary hover:text-white 
            shadow-lg transition duration-300 group p-6 text-center max-w-[350px] w-full mx-auto"
          >
            {/* Service Icon */}
            <div className="mb-4 flex justify-center text-black">
              {service.icon}
            </div>
            
            {/* Service Title */}
            <h2 className="text-xl font-bold mb-2 text-black">{service.title}</h2>

            {/* Service Description */}
            <p className="text-gray-600 group-hover:text-gray-900 transition">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
