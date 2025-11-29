import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import BookDetailsModal from "../BookDetailsModal/BookDetailsModal.jsx";

import book1 from "../../assets/main-banner1.jpg";
import book2 from "../../assets/main-banner2.jpg";
import book3 from "../../assets/product-item3.jpg";
import book4 from "../../assets/product-item7.jpg";
import book5 from "../../assets/product-item8.jpg";

const slider = [
  {
   id: "4",
   title: "Life Of The Wild",
   author: "Sanchit Howdy",
   category: "Romatic",
   price: "$ 40.00",
   price2: "$ 20.00",
   img: book1,
   offer:"50%",
   description:"This book takes you deep into the untamed beauty of nature.It explores the balance between survival, instinct, and the harmony of the wild.Through vivid storytelling, it celebrates the spirit and resilience of living creatures.",
   subtitle: "This book takes you deep into the untamed beauty of nature.It explores the balance between survival, instinct, and the harmony of the wild.Through vivid storytelling, it celebrates the spirit and resilience of living creatures.",
  },
  {
      id: "best-selling-1",
      title: "Birds gonna be happy",
      author: "Timbur Hood",
      price: "$45.00",
      category: "Romantic",
       description:  "This book takes you deep into the untamed beauty of nature...",
      
    img: book2,
     subtitle:  "This book takes you deep into the untamed beauty of nature..."
      
    },
  
  {
   id: "11",
   title: "The Lady Beauty Scarlett",
   author: "Authur Dayle",
   category: "Adventure",
   price: "$ 35.00",
   img: book3,
    description: "This book tells the story of a woman whose grace and strength define true beauty.It explores her journey through love, ambition, and the art of self-expression.A captivating tale of elegance, resilience, and the power of inner charm.",
   subtitle: "This book tells the story of a woman whose grace and strength define true beauty.It explores her journey through love, ambition, and the art of self-expression.A captivating tale of elegance, resilience, and the power of inner charm.",
  },
   {
    id: "10",
    title: "Fashion System",
    author: "Kevin Spear",
    category: "Adventure",
    price: "$ 58.00",
    img: book4,
        description: "This book uncovers the structure and language behind the world of fashion.It analyzes how trends, culture, and identity shape the garments we wear.A deep exploration of creativity, meaning, and communication through style.",

    subtitle: "This book uncovers the structure and language behind the world of fashion.It analyzes how trends, culture, and identity shape the garments we wear.A deep exploration of creativity, meaning, and communication through style.",
   },
  {
   id: "12",
   title: "Musical",
   author: "Karim Achard",
   category: "Adventure",
   price: "$ 30.00",
   img: book5,
   description: "This book celebrates the rhythm and emotion that connect sound to the soul.It explores how melody, harmony, and lyrics shape human feeling and memory.A vibrant journey through the universal language that speaks without words.",

   subtitle: "This book celebrates the rhythm and emotion that connect sound to the soul.It explores how melody, harmony, and lyrics shape human feeling and memory.A vibrant journey through the universal language that speaks without words.",
  },
];

export default function Carousel() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <section
        className="relative w-[90%] max-w-[90rem] !mx-auto min-h-[98vh] !py-[min(20vh,3rem)] flex flex-col md:flex-row items-center gap-12 md:gap-16 !mt-14"
        style={{
          backgroundColor: "var(--primary-bg)",
          color: "var(--primary-text)",
        }}
      >
        <div className="carousel-content md:w-1/2 text-center md:text-left px-8 md:pl-20 md:pr-0">
          <span
            className="uppercase tracking-[1.5px] text-[1rem]"
            style={{ color: "var(--third-text)" }}
          >
            discover
          </span>

          <h1
            className="capitalize text-[3.4rem] leading-[1.1] font-bold bg-clip-text text-transparent !mt-2"
            style={{
              background: "var(--gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Next Favorite Book
          </h1>

          <hr
            className="md:w-[7.2rem] w-full h-1 border-none !my-4 "
            style={{ background: "var(--gradient)" }}
          />

          <p
            className="text-base leading-relaxed max-w-[30rem]"
            style={{ color: "var(--third-text)" }}
          >
            Our book collection offers a rich variety of genres...
          </p>

          <a
            href="/#popular"
            className="inline-block !mt-8 bg-white border-2 rounded-[3.125rem] !py-2.5 !px-8 uppercase transition duration-300"
            style={{
              color: "var(--third-text)",
              borderColor: "#c2c2c2",
            }}
          >
            explore
          </a>
        </div>

        <div className="md:w-1/2 w-full">
          <Swiper
            className="w-[95%] pt-[4.125rem] rounded-lg"
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 300,
              modifier: 1.5,
              slideShadows: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.1 },
              1560: { slidesPerView: 1.4 },
            }}
          >
            {slider.map((data, i) => (
              <SwiperSlide
                key={i}
                className="relative inline-block rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedBook(data)}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="block w-full h-[500px] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/40 !p-6 flex flex-col justify-end z-10">
                  <h2 className="text-white font-normal text-[1.6rem] !mb-3 uppercase leading-[1.4]">
                    {data.title}
                  </h2>

                  <p className="text-[#dadada] text-[0.85rem] leading-[1.6]">
                    {data.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
  .swiper-pagination-bullet {
    background:var(--primary-text);
    opacity: 0.4;
    width: 10px;
    height: 10px;
    margin: 0 6px;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 24px;
    border-radius: 6px;
    background: var(--primary-text);
  }
`}</style>

        </div>
      </section>

      {selectedBook && (
        <BookDetailsModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
}
