import React from "react";
import device from "../../assets/device.png";
import Vector17 from "../../assets/Vector-17.png";
import ballon2 from "../../assets/ballon2.png";
import google from "../../assets/google-play.jpg";
import store from "../../assets/app-store.jpg";
import leaf from "../../assets/leaf.png";
import pattern2 from "../../assets/pattern2.png";
import { FaArrowRight } from "react-icons/fa6";

export default function BestSelling() {
  return (
    <div className="bg-[var(--second-bg)] !pt-[80px] !pb-[80px] relative overflow-hidden !text-[var(--primary-text)]" >
      <img src={leaf} alt="leaf" className="absolute bottom-0 left-[-50px] !z-10 !opacity-10 xl:!opacity-100" />
      <img src={pattern2} alt="pattern2" className="absolute top-[-200px] right-[-200px] !z-10" />
      <img src={ballon2} alt="ballon1" className="absolute top-0 left-[-10%] md:left-[23%] !z-10" />
      <div className="relative !z-20 container flex justify-center items-center gap-5 lg:gap-20 flex-wrap">
        <img src={device} alt="device" width={300} />
        <div>
          <p className="text-[40px] md:text-6xl font-media !mb-2">Download our app now !</p>
          <img src={Vector17} alt="Vector17" />
          <p className="font-light opacity-40 second-font !mb-10 !mt-10">
            Discover thousands of books at your fingertips.<br/> Download our app and explore every genre — from timeless classics to<br/> modern bestsellers. Build your own library and enjoy reading anytime, anywhere.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
          <img src={google} alt="google play" className="w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform hover:cursor-pointer" />
          <img src={store} alt="app store" className="w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
