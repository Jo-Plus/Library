import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light");
  const [showModel, setShowModel] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      setScroll(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll ? "backdrop-blur-lg bg-[rgba(0,0,0,0.3)]" : "bg-transparent"
        } shadow-md px-2 !py-2 !pt-4`}
        style={{
          top: isVisible ? "0" : "-80px",
          color: "var(--primary-text)",
          boxShadow: scroll ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="Logo" width={130} className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
          <ul className="hidden lg:flex gap-5 font-[400px] text-[16px] uppercase second-font">
            <li><a href="#feature">Feature</a></li>
            <li><a href="#howItWork">How Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
          </ul>
          <div className="flex gap-[20px] justify-center items-center transition duration-300 ease-in-out">
                <NavLink className="!py-3 !px-12 border-2 border-[var(--primary-text)] rounded-full hidden md:inline-block text-xs font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" to='/login'>Login</NavLink>
                <NavLink className="!p-3 !px-10 text-[var(--primary-text)] rounded-full hidden md:inline-block text-xs font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" to='/register'>Register</NavLink>
            <RiMenu3Line onClick={() => setShowModel(true)} size={24} className="lg:hidden cursor-pointer" />
            <button
              onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                localStorage.setItem("currentMode", newTheme);
                setTheme(newTheme);
              }}
              className="mode flex"
            >
              {theme === "light" ? <FaRegMoon size={24} /> : <FiSun size={24} />}
            </button>
          </div>
        </div>
      </header>

      {showModel && (
        <div className="model_fixed">
          <ul className='model uppercase font-[400px] text-[16px]'>
            <li><RxExit className="icon-clear" onClick={() => {setShowModel(false)}} /></li>
            <li><a href="#feature" onClick={() => {setShowModel(false)}} className="font-medium">Feature</a></li>
            <li><a href="#howItWork" onClick={() => {setShowModel(false)}} className="font-medium">How Works</a></li>
            <li><a href="#about" onClick={() => {setShowModel(false)}} className="font-medium">ِAbout</a></li>
            <li><a href="#contactUs" onClick={() => {setShowModel(false)}} className="font-medium">Contact Us</a></li>
              <div className="flex gap-6 justify-center items-center !mt-3">
                <NavLink className="!py-3 !px-12 border-2 border-[var(--primary-text)] rounded-full text-xs font-bold uppercase" to='/login'>Login</NavLink>
                <NavLink className="!p-3 !px-10 text-[var(--primary-text)] linear-button rounded-full text-xs font-bold uppercase" to='/register'>Register</NavLink>
              </div>
          </ul>
      </div>
      )}
    </>
  );
}

export default Navbar;