import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <footer id="footer" className=" !pt-24 !pb-10 mb-16 bg-[var(--second-bg)] transition-colors duration-300 !text-[var-(--second-text)]" >
      <div className="container !mx-auto px-4 flex-col justify-center items-center">
  <div className="flex flex-wrap justify-between items-start gap-10 text-[var(--primary-text)] transition-colors duration-300 pb-16">
  <div className="w-full md:w-auto flex justify-center md:justify-start">
    <img src={logo} alt="logo" className="w-36 sm:w-40 mb-6 md:mb-0" />
  </div>
  <div className="flex flex-wrap justify-center md:justify-between w-full md:w-2/3 text-center md:text-left">
    {[
      {
        title: "About Us",
        links: ["Vision", "Articles", "Careers", "Service Terms", "Donate"],
      },
      {
        title: "Discover",
        links: ["Home", "Books", "Authors", "Subjects", "Advanced Search"],
      },
      {
        title: "My Account",
        links: ["Sign In", "View Cart", "My Wishlist", "Track My Order"],
      },
      {
        title: "Help",
        links: ["Help Center", "Report a Problem", "Suggesting Edits", "Contact Us"],
      },
    ].map((menu, index) => (
      <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 mb-8 md:mb-0 flex flex-col items-center md:items-start" >
        <h5 className="text-lg font-semibold !mt-5 !sm:mt-0 mb-4 text-[var(--primary-text)]"> {menu.title} </h5>
        <ul className="space-y-2">
          {menu.links.map((link, i) => (
            <li key={i}> <a href="#" className="text-[var(--second-text)] hover:text-[var(--hover)] transition-colors duration-200" > {link} </a>
            </li> ))}
        </ul>
      </div>
    ))}
  </div>
  </div>
        <div className="border-t !mt-10 !pt-10 border-[#E0E0E0] dark:border-gray-700 flex gap-5 flex-col md:flex-row justify-between items-center text-[var(--second-text)] text-sm transition-colors duration-300">
          <p className="mb-4 md:mb-0 text-center md:text-left"> © 2022 All rights reserved. Free HTML Template by{" "} <a href="https://www.templatesjungle.com/" target="_blank" rel="noreferrer" className="text-[var(--hover)] hover:underline" > TemplatesJungle </a> </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--hover)] transition"> <FaFacebookF className="w-5 h-5" /> </a>
            <a href="#" className="hover:text-[var(--hover)] transition"> <FaTwitter className="w-5 h-5" /> </a>
            <a href="#" className="hover:text-[var(--hover)] transition"> <FaYoutube className="w-5 h-5" /> </a>
            <a href="#" className="hover:text-[var(--hover)] transition"> <FaBehance className="w-5 h-5" /> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
