import React from "react";
import singleImage from "../../assets/single-image.jpg";
import Vector17 from "../../assets/Vector-17.png";
import leaf from "../../assets/leaf.png";
import pattern2 from "../../assets/pattern2.png";
import { FaArrowRight, FaHeart } from "react-icons/fa6";

import toast from "react-hot-toast";
import { useCart } from "../../../context/CartContext";
import { useFavorites } from "../../../context/FavoriteContext";

export default function BestSelling() {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const book = {
    id: "best-selling-1",
    title: "Birds gonna be happy",
    author: "Timbur Hood",
    price: 45,
    img: singleImage,
  };

  const isFav = favorites.some((f) => f.id === book.id);

  const handleAddToFavorite = () => {
    toggleFavorite(book);

    if (!isFav) {
      toast.success("Added to favorites ❤️");
    } else {
      toast("Removed from favorites 💔");
    }
  };

  const handleAddToCart = () => {
    addToCart(book);
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="bg-[var(--second-bg)] !pt-[80px] !pb-[80px] relative overflow-hidden !text-[var(--primary-text)]">
      <img src={leaf} alt="leaf" className="absolute bottom-0 left-[-50px] !z-10 !opacity-10 xl:!opacity-100" />
      <img src={pattern2} alt="pattern2" className="absolute top-[-200px] right-[-200px] !z-10 " />

      <div className="relative !z-20 container flex justify-center items-center gap-5 xl:gap-20 flex-wrap">
        <img src={singleImage} alt="single-image" width={400} />

        <div>
          <p className="text-5xl md:text-6xl font-media !mb-2"> Best Selling Book </p>
          <img src={Vector17} alt="Vector17" />
          <p className="font-light opacity-40 second-font !mt-10 !mb-5 uppercase"> By Timbur Hood </p>
          <p className="text-3xl font-normal !mb-5">Birds gonna be happy</p>
          <p className="font-light opacity-40 second-font !mb-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> eu feugiat amet, libero ipsum enim pharetra hac. </p>
          <div className="flex items-center justify-between w-[200px] mb-3">
            <p className="text-[var(--price)] text-2xl">$45.00</p>
            <FaHeart onClick={handleAddToFavorite} className={`cursor-pointer transition-all text-2xl ${   isFav ? "text-red-600 scale-110" : "text-gray-400" }`} />
          </div>
          <div className="flex items-center gap-3 !mt-5 hover:cursor-pointer hover:scale-105 transition-transform" onClick={handleAddToCart} >
            <p>Shop It Now</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
