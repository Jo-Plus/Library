import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import book1 from "../../assets/main-banner1.jpg";
import book2 from "../../assets/tab-item1.jpg";
import book3 from "../../assets/tab-item2.jpg";
import book4 from "../../assets/product-item8.jpg";
import book5 from "../../assets/tab-item5.jpg";
import book6 from "../../assets/tab-item6.jpg";

const books = [
  { title: "Life Of The Wild", author: "Bratt Smith", price: "$40.00", img: book1 },
  { title: "Portrait photography", author: "Adam Silber", price: "$38.00", img: book2 },
  { title: "Once upon a time", author: "Klien Marry", price: "$45.00", img: book3 },
  { title: "Musical", author: "Karim Achard", price: "$35.00", img: book4 },
  { title: "Great travel at desert", author: "Sanclisr Howdy", price: "$40.00", img: book5 },
  { title: "Life among the pirates", author: "David Woodard", price: "$38.00", img: book6 },
];

export default function FeaturedBooks() {
  return (
    <section id="featured-books" className="   flex justify-center !pb-5"  >
      <div className="max-w-7xl w-full text-center px-6 sm:px-10 " style={{marginTop:'50px'}}>
       <div style={{ marginBottom: "4rem" }}>
  <div
    className="uppercase tracking-[0.25em] text-gray-500 text-[13px]"
    style={{ marginBottom: "1.4rem",color:"var( --second-text)" }}
  >
    Some quality items
  </div>

  <div className="flex items-center justify-center gap-8 " style={{paddingLeft:" 20px " , paddingRight:"20px"}}>
    <div className="border-t border-gray-300 flex-1"></div>

    <h2 className=" text-4xl md:text-6xl font-normal !text-[var(--primary-text)] px-6" style={{color:"var(--primary-text)"}}>
      Featured Books
    </h2>

    <div className="border-t border-gray-300 flex-1"></div>
  </div>
</div>


        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
             grabCursor={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="px-5"
          >
            {books.map((book, idx) => (
              <SwiperSlide key={idx} style={{paddingLeft:"1.2rem" ,paddingRight:"1.2rem"}}>
                <div className="group  text-center transition-transform duration-300 hover:-translate-y-2 ">
                  <figure className="relative overflow-hidden rounded-md shadow-md">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                      type="button"
                      className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#2e2a27] text-white text-sm py-2 px-5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 w-[90%] h-[3rem]"
                    >
                      Add to Cart
                    </button>
                  </figure>
                  <figcaption className="mt-5 space-y-1">
                    <h3 className="text-lg font-medium " style={{color:"var(--primary-text)"}}>{book.title}</h3>
                    <span className="text-sm  " style={{color:"var(--second-text)"}}>{book.author}</span>
                    <div className="text-[#b49b7d] font-semibold text-lg">{book.price}</div>
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
