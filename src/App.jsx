import React from 'react';
import Navbar from './component/Navbar.jsx';
import HerSec from './component/HerSec.jsx';
import Service from './component/Service.jsx';
import Destination from './component/Destination.jsx';
import Testimonial from './component/Testimonial.jsx';
import Footer from './component/Footer.jsx';
import Gallery from './pages/Gallery.jsx';
import Booking from './pages/Booking.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <HerSec />
              <Destination />
              <Service />
              <Testimonial />
              
            </>
          }
        />

        {/* Gallery Route */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;