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

export default function LandingPage() {
  return (<>
  <Navbar/>
  <Hero/>
  <AutoSlider/>
  <FeaturedBooks/>
  <BestSelling/>
  <PopularBooks/>
  <DownloadPage/>
  <ContactUs/>
  <Footer/>
  </>
  )
}
