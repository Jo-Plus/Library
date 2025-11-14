import React from "react";
import singleImage from "../../assets/single-image.jpg";
import Vector17 from "../../assets/Vector-17.png";
import leaf from "../../assets/leaf.png";
import pattern2 from "../../assets/pattern2.png";
import { FaArrowRight } from "react-icons/fa6";

export default function BestSelling() {
  return (
    <div className="bg-[var(--second-bg)] !pt-[80px] !pb-[80px] relative overflow-hidden !text-[var(--primary-text)]">
      <img src={leaf} alt="leaf" className="absolute bottom-0 left-[-50px] !z-10 !opacity-10 xl:!opacity-100"/>
      <img src={pattern2} alt="pattern2" className="absolute top-[-200px] right-[-200px] !z-10 "/>
      <div className="relative !z-20 container flex justify-center items-center gap-5 xl:gap-20 flex-wrap">
        <img src={singleImage} alt="single-image" width={400} />
        <div>
          <p className="text-5xl md:text-6xl font-media !mb-2">Best Selling Book</p>
          <img src={Vector17} alt="Vector17" />
          <p className="font-light opacity-40 second-font !mt-10 !mb-5 uppercase"> By Timbur Hood </p>
          <p className="text-3xl font-normal !mb-5">Birds gonna be happy</p>
          <p className="font-light opacity-40 second-font !mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />eu feugiat amet, libero ipsum enim pharetra hac.
          </p>
          <p className="text-[var(--price)] text-2xl">$ 45.00</p>
          <div className="flex items-center gap-3 !mt-7  hover:cursor-pointer hover:scale-105 transition-transform ">
            <p>Shop It Now</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
