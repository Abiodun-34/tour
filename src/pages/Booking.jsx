import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";





const firebaseConfig = {
  apiKey: "AIzaSyADbx1i2unP-5gRJzmqjA9fY2-2kPkMUFc",
  authDomain: "travetour-d6d66.firebaseapp.com",
  databaseURL: "https://travetour-d6d66-default-rtdb.firebaseio.com/",
  projectId: "travetour-d6d66",
  storageBucket: "travetour-d6d66.firebasestorage.app",
  messagingSenderId: "362002500925",
  appId: "1:362002500925:web:0ffc7ce0d6b30c1844c954",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



const sendMessageToFirebase = () => {
  const messageRef = ref(database, 'messages'); // 'messages' is the path in your database
  const newMessage = {
    text: "Your message here",
    timestamp: new Date().toISOString()
  };

  push(messageRef, newMessage)
    .then(() => {
      console.log("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending message: ", error);
    });
};







const Booking = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS Animation
  }, []);




  return (
    <div className="bg-amber-100"> 
      {/* Hero Section */}
      <div className="relative bg-cover h-50 p-4">
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center">
          <h2 data-aos="fade-out" className="text-amber-300 text-5xl font-bold">Let's plan your Vacation with you</h2>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm-grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Add your booking form or other content here */}
            <h3 className="text-xl font-bold mb-4">Booking Details</h3>
            <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-500 mr-2" />
                <p>Traveltour.com</p>
            </div>
            <div className="flex items-center mb-4">
                <FaPhone className="text-blue-500 mr-2" />
                <p>+91 123456789</p>
            </div>
            <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 mr-2" />
                <p>Noida, Uttar Prades</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Make your Bookings</h3>
            <form>
                <div className="mb-4">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="w-full p-2 border-gray-300 rounded" placeholder="Enter Name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="Name">Email</label>
                    <input type="text" className="w-full p-2 border-gray-300 rounded" placeholder="Enter Email Address"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="Name">Phone Number</label>
                    <input type="text" className="w-full p-2 border-gray-300 rounded" placeholder="Enter Phone Number"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="Name">Destination</label>
                    <input type="text" className="w-full p-2 border-gray-300 rounded" placeholder="Enter prefered Destination"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="Name">Message</label>
                    <textarea name="" className="w-full p-2 border-gray-300 rounded" placeholder="Write a mesage for us" id=""></textarea>
                </div>
                <button type="submit" className="py-2 px-4 bg-blue-400 text-white rounded cursor-progress hover:bg-amber-600" onClick={sendMessageToFirebase} >Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;