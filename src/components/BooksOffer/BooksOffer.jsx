import React, { useState } from 'react';
import img17 from '../../assets/Vector-17.png'
import item1 from "./../../assets/tab-item1.jpg";
import item2 from "./../../assets/tab-item2.jpg";
import item3 from "./../../assets/tab-item3.jpg";
import item4 from "./../../assets/main-banner1.jpg";
import item10 from "./../../assets/product-item7.jpg";
import item11 from "./../../assets/product-item3.jpg";
import item12 from "./../../assets/product-item8.jpg";

import BookDetailsModal from "../BookDetailsModal/BookDetailsModal.jsx";

const Books = [
  {
    id: "1",
    title: "Portrait photography",
    author: "Adam Silber",
    category: "Romatic",
    price: "$ 45.00",
    price2: "$ 30.00",
    img: item1,
    offer:"15%",
  subtitle: "This book explores the art of capturing human emotion through the lens.It teaches how light, composition, and timing shape every powerful portrait.With practical tips and inspiring examples, it helps photographers tell real stories.",
  },
  {
    id: "2",
    title: "Once upon a time",
    author: "Klien Marry",
    category: "Romatic",
    price: "$ 35.00",
    price2: "$ 25.00",
    img: item2,
    offer:"30%",
    subtitle: "A timeless journey into worlds shaped by imagination and wonder.Each chapter unfolds new characters, lessons, and dreams that inspire the heart.It reminds us how stories connect generations through magic and meaning.", 
  },
  {
    id: "3",
    title: "Tips of simple lifestyle",
    author: "Bratt Smith",
    category: "Romatic",
    price: "$ 35.00",
    price2: "$ 15.00",
    img: item3,
    offer:"45%",
  subtitle: "This book reveals how simplicity can bring peace and clarity to daily life.It shares mindful habits, practical routines, and ways to reduce unnecessary stress.A gentle reminder that happiness often lives in the smallest, quietest moments.",
  },
  {
    id: "4",
    title: "Life Of The Wild",
    author: "Sanchit Howdy",
    category: "Romatic",
    price: "$ 40.00",
    price2: "$ 20.00",
    img: item4,
    offer:"50%",
   
  subtitle: "This book takes you deep into the untamed beauty of nature.It explores the balance between survival, instinct, and the harmony of the wild.Through vivid storytelling, it celebrates the spirit and resilience of living creatures.",

  },
];

const Books2 = [
  {
    id: "10",
    title: "Reading books always makes the moments happy",
    author: "Kevin Spear",
    category: "Adventure",
    price: "$ 58.00",
    date:"2 aug, 2025",
    img: item10,
    subtitle: "This book uncovers the structure and language...",
  },
  {
    id: "11",
    title: "Reading books always makes the moments happy",
    author: "Authur Dayle",
    category: "Adventure",
    price: "$ 35.00",
    date:"5 aug, 2025",
    img: item11,
    subtitle: "This book tells the story of a woman whose grace...",
  },
  {
    id: "12",
    title: "Reading books always makes the moments happy",
    author: "Karim Achard",
    category: "Adventure",
    price: "$ 30.00",
    date:"15 aug, 2025",
    img: item12,
    subtitle: "This book celebrates the rhythm and emotion...",
  },
];

export default function BooksOffer() {

 
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
        <div className="!flex !flex-col !items-center !justify-center !text-center !h-[300px] !container !mx-auto !pb-10 text-[var(--primary-text)]">
        <h2 className="text-4xl mb-4">Quote of the day</h2>
        <img src={img17} alt="img17" className="!mb-5" />
        <p className="!mx-auto !opacity-50 !leading-relaxed text-2xl font-normal ">
          “The more that you read, the more things you will know. <br />
          The more that you learn, the more places you’ll go.”
        </p>
        <p className="!mt-2 !font-normal text-[18px] !second-font">
          {" "}
          Dr. Seuss
        </p>
      </div>
        <div className="!flex !flex-col !items-center !justify-center !text-center !h-[300px]  !mx-auto !pb-10 text-[var(--primary-text)] bg-[var(--second-bg)]  !z-10">
        <div className="container">
          <p className="!opacity-50 !second-font">Grab your opportunity</p>
          <div className="flex items-center justify-center w-full !my-2 gap-5">
            <div className="flex-grow h-[1px] bg-gray-300"></div>
            <h2 className=" text-4xl md:text-6xl font-normal !text-[var(--primary-text)] px-6">
              {" "}
              Books with offer{" "}
            </h2>
            <div className="flex-grow h-[1px] bg-gray-300"></div>
          </div>
        </div>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 !justify-center items-center container">
  {Books.map((item) => (
    <div 
      key={item.id}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, type: "spring", damping: 10 }}
      onClick={() => handleCardClick(item)}
      className="!z-20 !mb-[80px] rounded-lg w-full cursor-pointer hover:shadow-xl transition-all duration-300 relative"
    >

      <div className="w-full h-80 flex items-center justify-center !py-10 !mb-7 bg-[var(--primary-bg)] border-[1px] border-[var(--second-bg)] !-mt-[80px] relative">
        <span className="absolute !top-2 !left-2 !bg-red-600 !text-white !text-xs !font-semibold !px-2 !py-1 !rounded">
          {item.offer} OFF
        </span>

        <img 
          src={item.img} 
          alt={item.title} 
          className="max-w-full max-h-full object-contain" 
        />
      </div>

      <div className="py-3 flex flex-col items-center">
        <h3 className="text-xl font-normal !text-[var(--primary-text)] !mb-2">
          {item.title}
        </h3>

        <p className="text-sm !text-[var(--primary-text)] opacity-50 !mb-2">
          {item.author}
        </p>

        <span className="text-base font-light !text-[var(--price)] flex items-center gap-2">
          <span className="!text-[var(--price)] font-semibold">
            {item.price2}
          </span>
          <span className="line-through opacity-50">{item.price}</span>
        </span>
      </div>

    </div>
  ))}
</div>

      {selectedBook && (
        <BookDetailsModal
          book={selectedBook}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
