import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="!flex !flex-col !items-center !justify-center !min-h-screen !bg-[var(--primary-bg)] !text-[var(--primary-text)] !px-4">
      <h1 className="!text-9xl !font-extrabold !mb-4">404</h1>
      <h2 className="!text-3xl !font-semibold !mb-2">Oops! Page not found</h2>
      <p className="!text-center !mb-6 !opacity-70"> The page you are looking for does not exist or has been moved. </p>
      <Link to="/" className="!px-6 !py-3 !bg-amber-700 !text-white !rounded-lg !font-medium !hover:bg-amber-800 !transition"> Go Back Home </Link>
    </div>
  );
}
