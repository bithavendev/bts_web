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
import { Helmet } from 'react-helmet';

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
    <><Helmet>
      <title>BitHaven Technology | Software Solutions</title>
      <meta name="description" content="We build innovative software solutions that drive growth, efficiency, and digital transformation for businesses." />
      <meta property="og:title" content="BitHaven Technology" />
      <meta property="og:description" content="Explore our software development projects and services." />
      <meta property="og:url" content="https://bithaventechnology.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://bithaventechnology.com/bithaven_Tech_logo.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BitHaven Technology",
          "url": "https://bithaventechnology.com",
          "logo": "https://bithaventechnology.com/logo.png"
        })}
      </script>
    </Helmet><div className="font-sans antialiased text-gray-800">
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          scrollToSection={scrollToSection} />

        <main>
          <HeroSection scrollToSection={scrollToSection} />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection scrollToSection={scrollToSection} />
          {/*<TestimonialsSection />*/}
          <ContactSection />
        </main>

        <Footer scrollToSection={scrollToSection} />
      </div></>
  );
}

export default App;