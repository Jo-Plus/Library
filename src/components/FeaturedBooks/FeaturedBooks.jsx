import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";

import { useCart } from "../../../context/CartContext";
import { useFavorites } from "../../../context/FavoriteContext";

import book1 from "../../assets/main-banner1.jpg";
import book2 from "../../assets/tab-item1.jpg";
import book3 from "../../assets/tab-item2.jpg";
import book4 from "../../assets/product-item8.jpg";
import book5 from "../../assets/tab-item5.jpg";
import book6 from "../../assets/tab-item6.jpg";

const books = [
  { id: 1, title: "Life Of The Wild", author: "Sanchit Howdy", price: 40, img: book1, price2: 20.0, finalPrice: 20.0, offer: "50%" },
  { id: 4, title: "Musical", author: "Karim Achard", price: 30, img: book4, finalPrice: 30 },
  { id: 2, title: "Portrait photography", author: "Adam Silber", price: 45, img: book2, price2: 30.0, finalPrice: 30.0, offer: "15%" },
  { id: 3, title: "Once upon a time", author: "Klien Marry", price: 35, img: book3, price2: 25.0, finalPrice: 25.0, offer: "30%" },
  { id: 5, title: "Great travel at desert", author: "Sanclisr Howdy", price: 50, img: book6, finalPrice: 50 },
  { id: 6, title: "Peaceful Enlightment", author: "Marmik Lama", price: 38, img: book5, finalPrice: 38 },
];

export default function FeaturedBooks() {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const handleAddToCart = (book) => {
    const product = {
      id: book.id,
      title: book.title,
      author: book.author,
      img: book.img,
      price: book.finalPrice,
    };

    addToCart(product);
    toast.success(`${book.title} added to cart!`);
  };

  const handleToggleFavorite = (book) => {
    const isFav = favorites.some((f) => f.id === book.id);

    toggleFavorite(book);

    if (isFav) {
      toast.error(`${book.title} removed from favorites`);
    } else {
      toast.success(`${book.title} added to favorites ❤️`);
    }
  };

  return (
    <section id="featured" className="flex justify-center !pb-5">
      <div className="max-w-7xl w-full text-center px-6 sm:px-10" style={{ marginTop: "50px" }}>
        
        <div style={{ marginBottom: "4rem" }}>
          <div className="uppercase tracking-[0.25em] text-gray-500 text-[13px]" style={{ marginBottom: "1.4rem", color: "var(--second-text)" }} > Some quality items </div>
          <div className="flex items-center justify-center gap-8" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <div className="border-t border-gray-300 flex-1"></div>
            <h2 className="text-4xl md:text-6xl font-normal !text-[var(--primary-text)] px-6"> Featured Books </h2>
            <div className="border-t border-gray-300 flex-1"></div>
          </div>
        </div>

        <div className="relative">
          <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} grabCursor={true} pagination={{ clickable: true,   el: ".custom-pagination", }} breakpoints={{ 480: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 3, spaceBetween: 25 }, 1024: { slidesPerView: 4, spaceBetween: 30 }, }} className="px-5" >
            {books.map((book) => (
              <SwiperSlide key={book.id} style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
                <div className="group text-center transition-transform duration-300 hover:-translate-y-2">
                  <figure className="relative overflow-hidden rounded-md shadow-md">
                    <button type="button" onClick={() => handleToggleFavorite(book)} className="absolute top-3 right-3 z-10 p-2 rounded-full shadow hover:scale-110 transition" >
                      <Heart size={23} className={`transition ${ favorites.some((f) => f.id === book.id) ? "text-red-600 fill-red-600" : "text-gray-400" }`} />
                    </button>
                    {book.offer && ( <p className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold !px-2 !py-1 rounded"> {book.offer} OFF </p> )}
                    <img src={book.img} alt={book.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <button type="button" onClick={() => handleAddToCart(book)} className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#2e2a27] text-white text-sm py-2 px-5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 w-[90%] h-[3rem]" > Add to Cart </button>
                  </figure>

                  <figcaption className="mt-5 space-y-1">
                    <h3 className="text-lg font-medium" style={{ color: "var(--primary-text)" }}> {book.title} </h3>
                    <span className="text-sm" style={{ color: "var(--second-text)" }}> {book.author} </span>
                    <div className="text-[var(--price)] font-semibold text-lg flex items-center justify-center gap-2"> {book.offer ? (
                        <>
                          <span className="font-semibold">${book.finalPrice}</span>
                          <span className="line-through opacity-50">${book.price}</span>
                        </>
                      ) : (
                        <span>${book.price}</span>
                      )}
                    </div>
                  </figcaption>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination !mt-12 flex justify-center"></div>
        </div>

        <style>{`
          .custom-pagination .swiper-pagination-bullet {
            background: var(--dots);
            opacity: 0.5;
            width: 10px;
            height: 10px;
            margin: 0 6px;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            opacity: 1;
            width: 24px;
            border-radius: 6px;
            background: var(--dot2);
          }
        `}</style>

      </div>
    </section>
  );
}
