import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "../../../context/FavoriteContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  return (
    <section className="!py-20 !bg-[var(--primary-bg)] !text-[var(--primary-text)] !min-h-[calc(100vh-440px)]">
      <div className="!container !mx-auto !px-4 !text-center !pb-10">
        <h1 className="!text-4xl !md:!text-5xl !font-bold !mb-10 !text-[var(--primary-text)]">Favorites</h1>

{favorites.length === 0 && (
  <div className="!flex !flex-col !items-center !gap-4">
    <p className="!text-xl !text-[var(--primary-text)]">No favorite items yet !</p>
    <button onClick={() => navigate("/")} className="!px-6 !py-2 !bg-[var(--second-bg)] !hover:bg-[var(--primary-bg)] !text-[var(--primary-text)] !rounded-lg !transition-colors" > Add Favorites </button>
  </div>
)}

        <AnimatePresence>
          <div className="!grid !grid-cols-1 !sm:!grid-cols-2 !md:!grid-cols-3 !xl:!grid-cols-4 !gap-6 !justify-center !items-center">
            {favorites.map((book) => (
              <motion.div key={book.id} layout initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.4, type: "spring", damping: 10 }} className="!rounded-lg !overflow-hidden !w-full !cursor-pointer !hover:!shadow-xl !transition-all !duration-300 !relative !bg-[var(--second-bg)]" >
                {book.price2 && book.offer && (
                  <div className="!absolute !top-3 !left-3 !bg-red-600 !text-white !px-3 !py-1 !text-xs !font-bold !rounded-md !shadow-lg !z-10"> {book.offer} OFF </div> )}
                <div className="!w-full !h-80 !flex !items-center !justify-center !py-10 !bg-[var(--second-bg)] !rounded-lg">
                  <img src={book.img} alt={book.title} className="!max-w-full !max-h-full !object-contain" />
                </div>
                <div className="!py-3 !flex !flex-col !items-center">
                  <h3 className="!text-xl !font-normal !text-[var(--primary-text)] !mb-2"> {book.title} </h3>
                  <p className="!text-sm !text-[var(--primary-text)] !opacity-50 !mb-2"> {book.author} </p>
                  <div className="!flex !items-center !gap-3 !mb-2">
                    <span className="!text-lg !font-bold !text-[var(--price)]"> {book.price2 ? book.price2 : book.price} </span>
                    {book.price2 && ( <span className="!text-[var(--price)] !opacity-50 !line-through !text-base"> {book.price} </span> )}
                  </div>
                  <button onClick={() => toggleFavorite(book)} className="!w-full !py-2 !rounded-xl !bg-red-600 !hover:!bg-red-700 !text-white" > Remove from Favorites </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
