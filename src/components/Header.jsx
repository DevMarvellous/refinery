import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Gift } from 'lucide-react';

const Header = ({ currentPage, navigateToPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (page) => {
    navigateToPage(page);
    setIsMobileMenuOpen(false);
  };

  const [logoError, setLogoError] = useState(false);

  return (
    <>
      {/* Daily Consultation Banner */}
      <div className="bg-gradient-to-r from-royal-blue to-medium-blue text-white py-2 px-4 text-center font-semibold text-sm">
        <Clock className="inline-block w-4 h-4 mr-2" />
        Daily Consultation: 6PM - 7PM
      </div>

      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-royal-blue/10'
            : 'bg-gradient-to-r from-white/95 to-light-blue/30 backdrop-blur-sm border-b border-royal-blue/10'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavigation('home')}
                className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl lg:text-2xl font-bold text-royal-blue hover:text-medium-blue transition-colors"
              >
                {!logoError ? (
                  <img 
                    src="/images/logo.png" 
                    alt="The Refinery" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-royal-blue to-medium-blue rounded-lg flex items-center justify-center text-white shadow-md">
                    <span className="text-xs sm:text-sm lg:text-base">TR</span>
                  </div>
                )}
                <span>The Refinery Business Consult</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {currentPage === 'home' ? (
                <>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-royal-blue hover:text-medium-blue transition-colors font-medium text-sm lg:text-base"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="text-royal-blue hover:text-medium-blue transition-colors font-medium text-sm lg:text-base"
                  >
                    Booking
                  </button>
                  <button
                    onClick={() => scrollToSection('birthday-offer')}
                    className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Special Offer</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('more')}
                    className="text-royal-blue hover:text-medium-blue transition-colors font-medium text-sm lg:text-base"
                  >
                    More
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleNavigation('home')}
                    className="text-royal-blue hover:text-medium-blue transition-colors font-medium text-sm lg:text-base"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('birthday-offer')}
                    className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Special Offer</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('more')}
                    className="text-royal-blue hover:text-medium-blue transition-colors font-medium text-sm lg:text-base"
                  >
                    More
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-royal-blue p-1"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-royal-blue/20">
              <div className="flex flex-col space-y-3 mt-4">
                {currentPage === 'home' ? (
                  <>
                    <button
                      onClick={() => scrollToSection('hero')}
                      className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => scrollToSection('why-choose-us')}
                      className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                    >
                      Why Choose Us
                    </button>
                    <button
                      onClick={() => scrollToSection('consultation')}
                      className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                    >
                      Consultation
                    </button>
                    <button
                      onClick={() => scrollToSection('testimonials')}
                      className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                    >
                      Testimonials
                    </button>
                    <button
                      onClick={() => scrollToSection('booking')}
                      className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => scrollToSection('birthday-offer')}
                      className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-1 w-full"
                    >
                      <Gift className="w-4 h-4" />
                      <span>Special Offer</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                    >
                      Business Consult
                    </button>
                    <button
                      onClick={() => scrollToSection('birthday-offer')}
                      className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-1 w-full"
                    >
                      <Gift className="w-4 h-4" />
                      <span>Special Offer</span>
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleNavigation('more')}
                  className="text-royal-blue hover:text-medium-blue transition-colors text-left font-medium py-2 text-sm"
                >
                  MORE
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
