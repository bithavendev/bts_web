import { useState } from 'react';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
//import { useForm } from "react-hook-form";
//import TestimonialsSection from './components/TestimonialsSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection scrollToSection={scrollToSection} />
        {/*<TestimonialsSection />*/}
        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;