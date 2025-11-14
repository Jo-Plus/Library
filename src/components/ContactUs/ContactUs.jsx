import React from "react";
import Vector18 from "../../assets/Vector-18.png";

export default function ContactUs() {
  const inputBaseClasses = "!border !border-black !bg-transparent !text-[var(--primary-text)] !text-sm !rounded-full focus:!ring-[#C0B7E8] focus:!border-[#C0B7E8] !block !w-full !p-3 !placeholder-gray-400";
  const textAreaClasses = "!border !mt-5 !border-black !bg-transparent !text-[var(--primary-text)] !text-sm !rounded-3xl focus:!ring-[#C0B7E8] focus:!border-[#C0B7E8] !block !w-full !p-4 !h-32 !resize-none !placeholder-gray-400";

  return (
    <>
      <div className="!pb-15 !pt-15 !container !mx-auto" id="contactUs">
        <div className="!w-[85%] !mx-auto">
          <div className="!bg-[var(--second-bg)] !p-15 !rounded-[50px] !py-16 !px-6 sm:!px-12">
            <div className="!flex !justify-center !items-center !flex-col">
              <div className="!flex !flex-col !justify-center !items-center !mb-5">
                <h1 className=" text-4xl md:text-6xl font-normal !text-[var(--primary-text)] px-6 "> Contact Us </h1>
                <img src={Vector18} alt="Vector18" width={300} className="!mt-2" />
              </div>
              <p className="!opacity-70 !mb-10 !text-[var(--primary-text)] !text-center !text-lg"> Have Questions? Let’s Build the Future of Online Meetings Together. </p>
            </div>
            
            <form className="!max-w-3xl !mx-auto">
              <div className="!grid !gap-6 !mb-6 md:!grid-cols-2"> <div> <input type="text" className={inputBaseClasses} placeholder="First Name" required /> </div>
                <div> <input type="text" className={inputBaseClasses} placeholder="Last Name" required /> </div>
                <div> <input type="email" className={inputBaseClasses} placeholder="Email" required /> </div>
                <div> <input type="tel" className={inputBaseClasses} placeholder="Phone Number" pattern="01[0-2,5]{1}[0-9]{8}" required /> </div>
              </div>
              <div className="!mb-6"> <input type="text" className={`${inputBaseClasses} !rounded-full`} placeholder="Subject" required/> </div>
              <div className="!mb-8"> <textarea className={textAreaClasses} placeholder="Tell Us Something..." required ></textarea>
              </div>
              <button type="submit" className={`!block !transition-all !duration-300 !ease-in-out hover:!scale-105 hover:!shadow-lg !rounded-lg !text-sm !w-full sm:!w-auto !px-10 !py-3 !text-center !font-bold !mx-auto bg-[var(--primary-bg)] !text-[var(--second-text)]`} > Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
