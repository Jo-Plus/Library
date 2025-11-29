import React from "react";

import item1 from "./../../assets/tab-item1.jpg";
import item2 from "./../../assets/tab-item2.jpg";
import item3 from "./../../assets/tab-item3.jpg";
import item4 from "./../../assets/main-banner1.jpg";
import item5 from "./../../assets/tab-item5.jpg";
import item6 from "./../../assets/tab-item6.jpg";
import item7 from "./../../assets/tab-item7.jpg";
import item8 from "./../../assets/tab-item8.jpg";
import item9 from "./../../assets/product-item5.jpg";
import item10 from "./../../assets/product-item7.jpg";
import item11 from "./../../assets/product-item3.jpg";
import item12 from "./../../assets/product-item8.jpg";

const projectsData = [
  { id: "1", title: "Portrait photography", author: "Adam Silber", category: "Romantic", price: "$ 45.00", hits: 564, rating: 5, img: item1 },
  { id: "2", title: "Once upon a time", author: "Klien Marry", category: "Romantic", price: "$ 35.00", hits: 197, rating: 2, img: item2 },
  { id: "3", title: "Tips of simple lifestyle", author: "Bratt Smith", category: "Romantic", price: "$ 35.00", hits: 78, rating: 1, img: item3 },
  { id: "4", title: "Life Of The Wild", author: "Sanchit Howdy", category: "Romantic", price: "$ 40.00", hits: 212, rating: 5, img: item4 },
  { id: "5", title: "Peaceful Enlightment", author: "Marmik Lama", category: "Popular", price: "$ 38.00", hits: 23, rating: 0, img: item5 },
  { id: "6", title: "Great travel at desert", author: "Sanclisr Howdy", category: "Popular", price: "$ 50.00", hits: 218, rating: 4, img: item6 },
  { id: "7", title: "Life among the pirates", author: "David Woodard", category: "Popular", price: "$ 25.00", hits: 113, rating: 4, img: item7 },
  { id: "8", title: "Simple way of piece life", author: "Armor Ramsey", category: "Popular", price: "$ 58.00", hits: 31, rating: 3, img: item8 },
  { id: "9", title: "Way Of Happiness", author: "Ananda Kumar", category: "Adventure", price: "$ 48.00", hits: 80, rating: 5, img: item9 },
  { id: "10", title: "Fashion System", author: "Kevin Spear", category: "Adventure", price: "$ 58.00", hits: 100, rating: 4, img: item10 },
  { id: "11", title: "The Lady Beauty Scarlett", author: "Authur Dayle", category: "Adventure", price: "$ 35.00", hits: 150, rating: 3, img: item11 },
  { id: "12", title: "Musical", author: "Karim Achard", category: "Adventure", price: "$ 30.00", hits: 90, rating: 2, img: item12 },
];

const RatingStars = ({ count }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`text-sm sm:text-xl ${i <= count ? "text-yellow-500" : "text-gray-300"}`} > ★ </span> );}
      return <div className="flex space-x-0.5">{stars}</div>;
};

const Authors = () => {
  return (
    <div
      className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-lg shadow-xl !mt-24 !mx-auto !mb-10 w-[95%] !min-h-[calc(100vh-600px)]"
      id="Authors"
    >
      <table className="w-full divide-y divide-gray-300 text-xs sm:text-sm table-fixed">
        <thead className="bg-[var(--second-bg)] text-[var(--primary-text)]">
          <tr>
            <th className="!px-2 sm:!px-4 !py-3 text-left font-semibold uppercase w-14"> Cover </th>
            <th className="!px-2 sm:!px-4 !py-3 text-left font-semibold uppercase"> Title </th>
            <th className="!px-2 sm:!px-4 !py-3 text-left font-semibold uppercase"> Author </th>
            <th className="!px-2 sm:!px-4 !py-3 text-left font-semibold uppercase"> Rating </th>
            <th className="hidden sm:table-cell !px-2 sm:!px-4 !py-3 text-left font-semibold uppercase"> Hits </th> <th className="hidden sm:table-cell !px-2 sm:!px-4 !py-3 text-left font-semibold uppercase"> Category </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {projectsData.map((book) => (
            <tr key={book.id} className="hover:bg-gray-100 hover:text-black transition" >
              <td className="!px-2 sm:!px-4 !py-2">
                <div className="w-8 h-12 sm:w-12 sm:h-16 bg-[var(--second-bg)] flex items-center justify-center shadow-md">
                  <img src={book.img} alt={book.title} className="max-w-full max-h-full object-contain" />
                </div>
              </td>
              <td className="!px-2 sm:!px-4 !py-2 font-medium break-words max-w-[140px] sm:max-w-none"> {book.title} </td>
              <td className="!px-2 sm:!px-4 !py-2 opacity-80 break-words max-w-[120px] sm:max-w-none"> {book.author} </td>
              <td className="!px-2 sm:!px-4 !py-2"> <RatingStars count={book.rating} /> </td>
              <td className="hidden sm:table-cell !px-2 sm:!px-4 !py-2 opacity-80"> {book.hits} </td>
              <td className="hidden sm:table-cell !px-2 sm:!px-4 !py-2 opacity-80"> {book.category} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
