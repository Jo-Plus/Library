import React from "react";
import client1 from "../../assets/client-image1.png";
import client2 from "../../assets/client-image2.png";
import client3 from "../../assets/client-image3.png";
import client4 from "../../assets/client-image4.png";
import client5 from "../../assets/client-image5.png";

const AutoSlider = () => {
  const logos = [
    { src: client1, alt: "client1" },
    { src: client2, alt: "client2" },
    { src: client3, alt: "client3" },
    { src: client4, alt: "client4" },
    { src: client5, alt: "client5" }
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div id="feature" className="!py-8 !md:py-12 bg-[var(--second-bg)]">
      <div className="container">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--second-bg)] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--second-bg)] to-transparent z-10"></div>
          <div className="flex animate-infinite-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="mx-7 flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="h-10 md:h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AutoSlider;