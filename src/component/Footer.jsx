import React, { useEffect } from "react";
import footerLogo from "../assets/TravelGlobe.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "Gallery",
        link: "/#about",
    },
    {
        title: "Booking",
        link: "/#contact",
    },
    {
        title: "About",
        link: "/#blog",
    },
];

// Define the LinkList component
const LinkList = ({ title }) => {
    return (
        <div className="py-4 px-4">
            <h1 className="text-xl font-bold mb-3">{title}</h1>
            <ul className="space-y-2">
                {FooterLinks.map((link) => (
                    <li key={link.title}>
                        <a href={link.link} className="hover:text-gray-400 duration-300">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* Company details */}
                    <div className="py-4 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="TravelGlobe Logo" className="max-w-[50px]" />
                            Traveltour
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                            beatae ea recusandae blanditiis veritatis.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <LinkList title="Important Links" />
                        <LinkList title="Links" />

                        {/* Social links and contact info */}
                        <div className="py-4 px-4">
                            <div className="flex items-center gap-3 mt-4">
                                <a href="#" className="hover:text-gray-400 duration-300">
                                    <FaInstagram className="text-2xl" />
                                </a>
                                <a href="#" className="hover:text-gray-400 duration-300">
                                    <FaFacebook className="text-2xl" />
                                </a>
                                <a href="#" className="hover:text-gray-400 duration-300">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p className="text-sm">Noida, Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <FaMobileAlt />
                                    <p className="text-sm">+91 123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;