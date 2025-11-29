import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />

       <Toaster position="top-right" />
      <div style={{ paddingTop: "10px", minHeight: "60vh" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
