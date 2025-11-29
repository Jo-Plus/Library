import React, { useState, useEffect, useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext.jsx";
import { HashLink } from "react-router-hash-link";
import logo from "../../../public/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "light"
  );
  const [showModel, setShowModel] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { userLogin, setUserLogin } = useContext(UserContext);

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

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUserLogin(false);
    setShowModel(false);
    navigate("/login");
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ scroll ? "backdrop-blur-lg bg-[rgba(0,0,0,0.3)]" : "bg-transparent" } shadow-md px-2 !py-2 !pt-4`} style={{ top: isVisible ? "0" : "-80px", color: "var(--primary-text)", boxShadow: scroll ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none", }} >
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" width={130} className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

          {userLogin && (
            <ul className="hidden lg:flex gap-5 font-[400px] text-[16px] uppercase second-font">
              <li> <HashLink smooth to="/"> Home </HashLink> </li>
              <li> <HashLink smooth to="/favorites"> Favorites </HashLink> </li>
              <li> <NavLink to="/cart">Cart</NavLink> </li>
              <li> <NavLink to="/authors">Authors</NavLink> </li>
              <li> <NavLink to="/reviews">Reviews</NavLink> </li>
            </ul>
          )}

          <div className="flex gap-[20px] justify-center items-center transition duration-300 ease-in-out">
            {!userLogin ? (
              <>
                <NavLink className="!py-3 !px-12 border-2 border-[var(--primary-text)] rounded-full hidden lg:inline-block text-xs font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" to="/login" > Login </NavLink>
                <NavLink className="!p-3 !px-10 text-[var(--primary-text)] rounded-full hidden lg:inline-block text-xs font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" to="/register" > Register </NavLink>
              </>
            ) : (
              <button onClick={handleLogout} className="!py-3 !px-12 border-2 border-[var(--primary-text)] rounded-full hidden lg:inline-block text-xs font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" > Logout </button>
            )}

            <RiMenu3Line onClick={() => setShowModel(true)} size={24} className="lg:hidden cursor-pointer" />

            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mode flex" > {theme === "light" ? ( <FaRegMoon size={24} /> ) : ( <FiSun size={24} /> )} </button>
          </div>
        </div>
      </header>

      {showModel && (
        <div className="model_fixed">
          <ul className="model uppercase font-[400px] text-[16px]">
            <li>
              <RxExit className="icon-clear" onClick={() => setShowModel(false)} />
            </li>
            {userLogin ? (
              <>
                <li>
                   <HashLink smooth to="/" onClick={() => setShowModel(false)} > Home </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#favorites" onClick={() => setShowModel(false)} > Favorites </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#contact" onClick={() => setShowModel(false)} > Contact Us </HashLink>
                </li>
                <li>
                  <NavLink to="/cart" onClick={() => setShowModel(false)} className="font-medium" > Cart </NavLink>
                </li>
                <li>
                  <NavLink to="/authors" onClick={() => setShowModel(false)} className="font-medium" > Authors </NavLink>
                </li>
                <li>
                  <NavLink to="/reviews" onClick={() => setShowModel(false)} className="font-medium" > Reviews </NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="!py-3 !px-12 border-2 border-[var(--primary-text)] rounded-full text-xs font-bold uppercase mt-3 w-full" > Logout </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="!py-3 !px-12 border-2 border-[var(--primary-text)] rounded-full text-xs font-bold uppercase mt-3 block text-center" to="/login" > Login </NavLink>
                </li>
                <li>
                  <NavLink className="!p-3 !px-10 border-2 text-[var(--primary-text)] linear-button rounded-full text-xs font-bold uppercase mt-2 block text-center" to="/register" > Register </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
