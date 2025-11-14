import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import book1 from "../../assets/main-banner1.jpg";
import book2 from "../../assets/main-banner2.jpg";
import book3 from "../../assets/product-item3.jpg";
import book4 from "../../assets/product-item7.jpg";
import book5 from "../../assets/product-item8.jpg";

const slider = [
  {
    title: "Donut 1",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: book1,
  },
  {
    title: "Donut 2",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: book2,
  },
  {
    title: "Donut 3",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: book3,
  },
  {
    title: "Donut 4",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: book4,
  },
  {
    title: "Donut 5",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: book5,
  },
];

export default function Carousel() {
  return (
    <section
      className="relative w-[90%] max-w-[90rem] !mx-auto min-h-[98vh] !py-[min(20vh,3rem)] flex flex-col md:flex-row items-center gap-12 md:gap-16 !mt-14"
      style={{
        backgroundColor: "var(--primary-bg)",
        color: "var(--primary-text)",
      }}
    >
      <div
        className="carousel-content md:w-1/2 text-center md:text-left px-8 md:pl-20 md:pr-0"
        style={{ paddingLeft: "1.4rem" }}
      >
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
          style={{  background: "var(--gradient)",}}
        />

        <p
          className="text-base leading-relaxed max-w-[30rem]"
          style={{ color: "var(--third-text)" }}
        >
          Our book collection offers a rich variety of genres, authors, and stories to
          satisfy every reader’s craving and occasion.
        </p>

        <a
          href="#"
          className="inline-block !mt-8 bg-white border-2 rounded-[3.125rem] !py-2.5 !px-8 uppercase transition duration-300"
          style={{
            color: "var(--third-text)",
            borderColor: "#c2c2c2",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--secondary-text)";
            e.currentTarget.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--secondary-text)";
            e.currentTarget.style.color = "var(--third-text)";
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
              className="relative inline-block rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={data.url}
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
                <a
                  href={data.url}
                  target="_blank"
                  className="mt-5 text-sm uppercase transition-colors duration-200"
                  style={{ color: "var(--primary-text)" }}
                >
                  explore
                </a>
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
  );
}
