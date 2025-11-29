import React from "react";
import { useState } from "react";
import BookDetailsModal from '../BookDetailsModal/BookDetailsModal.jsx'; 

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
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
 {
  id: "1",
  title: "Portrait photography",
  author: "Adam Silber",
  category: "Romatic",
  price: "$ 45.00",
  img: item1,
  subtitle: "This book explores the art of capturing human emotion through the lens.It teaches how light, composition, and timing shape every powerful portrait.With practical tips and inspiring examples, it helps photographers tell real stories.",
 },
 {
  id: "2",
  title: "Once upon a time",
  author: "Klien Marry",
  category: "Romatic",
  price: "$ 35.00",
  img: item2,
  subtitle: "A timeless journey into worlds shaped by imagination and wonder.Each chapter unfolds new characters, lessons, and dreams that inspire the heart.It reminds us how stories connect generations through magic and meaning.",
 },
 {
  id: "3",
  title: "Tips of simple lifestyle",
  author: "Bratt Smith",
  category: "Romatic",
  price: "$ 35.00",
  img: item3,
  subtitle: "This book reveals how simplicity can bring peace and clarity to daily life.It shares mindful habits, practical routines, and ways to reduce unnecessary stress.A gentle reminder that happiness often lives in the smallest, quietest moments.",
 },
 {
  id: "4",
  title: "Life Of The Wild",
  author: "Sanchit Howdy",
  category: "Romatic",
  price: "$ 40.00",
  img: item4,
  subtitle: "This book takes you deep into the untamed beauty of nature.It explores the balance between survival, instinct, and the harmony of the wild.Through vivid storytelling, it celebrates the spirit and resilience of living creatures.",
 },
 {
  id: "5",
  title: "Peaceful Enlightment",
  author: "Marmik Lama",
  category: "Popular",
  price: "$ 38.00",
  img: item5,
  subtitle: "A journey toward inner calm and spiritual understanding unfolds within these pages.It guides readers to embrace mindfulness, compassion, and the stillness of thought.Through reflection and wisdom, it reveals the quiet power of true peace.",
 },
 {
  id: "6",
  title: "Great travel at desert",
  author: "Sanclisr Howdy",
  category: "Popular",
  price: "$ 50.00",
  img: item6,
  subtitle: "This book follows a daring adventure across the vast and silent sands.It captures the beauty, mystery, and challenges of life beneath the desert sun.A story of endurance, discovery, and the unbreakable bond between human and nature.",
 },
 {
  id: "7",
  title: "Life among the pirates",
  author: "David Woodard",
  category: "Popular",
  price: "$ 25.00",
  img: item7,
  subtitle: "This book sails through the dangerous yet thrilling world of pirate life.It unveils hidden tales of loyalty, betrayal, and the search for freedom at sea.Through adventure and chaos, it reveals the true spirit behind the pirate legend.",
 },
 {
  id: "8",
  title: "Simple way of piece life",
  author: "Armor Ramsey",
  category: "Popular",
  price: "$ 58.00",
  img: item8,
  subtitle: "This book invites readers to slow down and rediscover calm in everyday moments.It shares gentle guidance on finding balance through gratitude and self-awareness.A thoughtful path toward living peacefully with oneself and the world around us.",
 },
 {
  id: "9",
  title: "Way Of Happiness",
  author: "Ananda Kumar",
  category: "Adventure",
  price: "$ 48.00",
  img: item9,
  subtitle: "This book explores the essence of joy and how it grows from within.It offers reflections on gratitude, kindness, and living with mindful purpose.A heartfelt guide to finding lasting happiness in life’s simplest moments.",
 },
 {
  id: "10",
  title: "Fashion System",
  author: "Kevin Spear",
  category: "Adventure",
  price: "$ 58.00",
  img: item10,
  subtitle: "This book uncovers the structure and language behind the world of fashion.It analyzes how trends, culture, and identity shape the garments we wear.A deep exploration of creativity, meaning, and communication through style.",
 },
 {
  id: "11",
  title: "The Lady Beauty Scarlett",
  author: "Authur Dayle",
  category: "Adventure",
  price: "$ 35.00",
  img: item11,
  subtitle: "This book tells the story of a woman whose grace and strength define true beauty.It explores her journey through love, ambition, and the art of self-expression.A captivating tale of elegance, resilience, and the power of inner charm.",
 },
 {
  id: "12",
  title: "Musical",
  author: "Karim Achard",
  category: "Adventure",
  price: "$ 30.00",
  img: item12,
  subtitle: "This book celebrates the rhythm and emotion that connect sound to the soul.It explores how melody, harmony, and lyrics shape human feeling and memory.A vibrant journey through the universal language that speaks without words.",
 },
];

export default function Main() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState(projectsData);
  const [selectedBook, setSelectedBook] = useState(null); 

  const handleFilter = (item) => {
    setActiveCategory(item);
    if (item === "all") setFiltered(projectsData);
    else setFiltered(projectsData.filter((p) => p.category === item));
  };
  const handleCardClick = (book) => {
    setSelectedBook(book);
  };
  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const categories = ["all", "Romatic", "Popular", "Adventure"];

  return (
<section id="popular" className="!py-20 bg-[var(--primary-bg)] !text-[var(--primary-text)]">
  <div className="container mx-auto px-4 text-center !pb-10 border-b border-gray-300">
    <div className="flex-col justify-center items-center">
      <p className="font-light opacity-60 second-font !mb-5 uppercase !text-[var(--primary-text)]"> Some quality items </p>
      <div className="flex items-center justify-center w-full !my-10 gap-5">
        <div className="flex-grow h-[1px] bg-gray-300"></div>
        <h2 className="text-4xl md:text-6xl font-normal !text-[var(--primary-text)] px-6"> Popular Books </h2>
        <div className="flex-grow h-[1px] bg-gray-300"></div>
      </div>
    </div>

    <div className="flex flex-wrap justify-center items-center !gap-10 !mb-12">
      {categories.map((item) => (
        <button key={item} onClick={() => handleFilter(item)} className={`px-5 py-2 text-sm font-normal relative transition-all duration-300 !text-[var(--primary-text)] ${ activeCategory === item ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[var(--second-text)] font-semibold text-black" : "" }`} >
          {item === "all" ? "All Books" : item === "Romatic" ? "Romantic" : item === "Popular" ? "Popular" : item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>

    <AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 !justify-center items-center">
        {filtered.map((item) => (
          <motion.div key={item.id} layout initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.4, type: "spring", damping: 10 }} onClick={() => handleCardClick(item)} className="rounded-lg overflow-hidden w-full cursor-pointer hover:shadow-xl transition-all duration-300" >
            {item.price2 && item.offer && ( <div className="absolute top-3 left-3 bg-red-600 text-white !px-3 !py-1 text-xs font-bold rounded-md shadow-lg z-10"> {item.offer} OFF </div> )}
            <div className="w-full h-80 flex items-center justify-center !py-10 !mb-7 bg-[var(--second-bg)]">
              <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="py-3 flex flex-col items-center">
              <h3 className="text-xl font-normal !text-[var(--primary-text)] !mb-2">{item.title}</h3>
              <p className="text-sm !text-[var(--primary-text)] opacity-50 !mb-2">{item.author}</p>
              <span className="text-base font-light !text-[var(--price)]"> {item.price2 ? item.price2 : item.price} </span>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>

    <AnimatePresence>
      {selectedBook && <BookDetailsModal book={selectedBook} onClose={handleCloseModal} />}
    </AnimatePresence>
  </div>
</section>

  );
}
