import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import PrivateCoaching from './components/PrivateCoaching';
import BusinessConsultIntro from './components/BusinessConsultIntro';
import Pricing from './components/Pricing';
import Testimonials from './components/TestimonialsClean';
import Booking from './components/Booking';
import BirthdayOffer from './components/BirthdayOfferNew';
import Footer from './components/Footer';
import More from './components/More';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} navigateToPage={navigateToPage} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <WhyChooseUs />
          <PrivateCoaching />
          <Testimonials />
          <BusinessConsultIntro />
          <Pricing />
          <Booking />
          <BirthdayOffer />
          <Footer />
        </>
      ) : (
        <More />
      )}
    </div>
  );
}

export default App;
