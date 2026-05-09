import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import PrivateCoaching from './components/PrivateCoaching';
import BusinessConsultIntro from './components/BusinessConsultIntro';
import Pricing from './components/Pricing';
import Testimonials from './components/TestimonialsClean';
import Booking from './components/Booking';
import SpecialOfferButton from './components/SpecialOfferButton';
import Footer from './components/Footer';
import More from './components/More';
import SpecialOffer from './components/SpecialOffer';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Get current page from URL
    const path = window.location.pathname;
    if (path === '/special') return 'special';
    if (path === '/more') return 'more';
    return 'home';
  });

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    // Update URL without page reload
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/special') setCurrentPage('special');
      else if (path === '/more') setCurrentPage('more');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
          <SpecialOfferButton navigateToPage={navigateToPage} />
          <Footer />
        </>
      ) : currentPage === 'special' ? (
        <SpecialOffer />
      ) : (
        <More />
      )}
    </div>
  );
}

export default App;
