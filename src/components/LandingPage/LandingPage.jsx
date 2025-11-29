import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import AutoSlider from '../AutoSlider/AutoSlider.jsx';
import BestSelling from '../BestSelling/BestSelling.jsx';
import DownloadPage from '../DownloadPage/DownloadPage.jsx';
import PopularBooks from '../PopularBooks/PopularBooks.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';
import Footer from '../Footer/Footer.jsx'
import Hero from '../Hero/Hero.jsx'
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks.jsx'
import BooksOffer from '../BooksOffer/BooksOffer.jsx'

export default function LandingPage() {
  return (<>
   
  <Hero/>
  <AutoSlider/>
  <div id="featured">
    <FeaturedBooks />
</div>
  <BestSelling/>
 <div id="popular">
    <PopularBooks />
</div>
  <BooksOffer/>
  <DownloadPage/>
<div id="contact">
    <ContactUs />
</div>
  </>
  )
}
