import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PrivateCoaching />
      <Testimonials />
      <BusinessConsultIntro />
      <Pricing />
      <Booking />
      <SpecialOfferButton navigateToPage={(page) => navigate(page === 'home' ? '/' : `/${page}`)} />
      <Footer />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle navigation consistently
  const handleNavigate = (page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={location.pathname === '/' ? 'home' : location.pathname.slice(1)} 
        navigateToPage={handleNavigate} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special" element={<SpecialOffer navigateToPage={handleNavigate} />} />
        <Route path="/more" element={<More navigateToPage={handleNavigate} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
}

export default App;
