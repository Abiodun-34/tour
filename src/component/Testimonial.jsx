import React from 'react';
import Slider from "react-slick";
import img1 from "../assets/user1.jpeg";
import img2 from "../assets/user2.jpeg";
import img3 from "../assets/user3.jpeg";

const TestimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img1
    },
    {
      id: 2,
      name: "Satya Nadella",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img2
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img3
    },
];

const Testimonial = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000, // Tablets
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 10434, // Large screens
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container mx-auto px-4">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Reviews
                    </h1>
                </div>
                
                {/* Card section */}
                <div data-aos="zoom-in">
                    <Slider {...settings} className="max-w-4xl mx-auto">
                        {TestimonialData.map((data) => (
                            <div
                              key={data.id} 
                              className="rounded-2xl bg-white flex flex-col items-center text-center p-6 shadow-xl duration-300 group max-w-[350px] mx-auto"
                            >
                              <img
                                src={data.img}
                                alt={data.name} 
                                className="rounded-full w-20 h-20 mb-4"
                              />
                              <p className="text-black text-sm">{data.text}</p>
                              <h3 className="text-lg font-bold mt-3 text-black">{data.name}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
