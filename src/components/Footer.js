import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import JsonData from "../data/data.json";

const Footer = ({ scrollToSection }) => {
  const companyLinks = [
    { label: 'About', section: '#about' },
    { label: 'Services', section: '#services' },
    { label: 'Portfolio', section: '#portfolio' },
    { label: 'Contact', section: '#contact' }
  ];

  const serviceLinks = [
    { label: 'Billing Software', section: '#services' },
    { label: 'Mobile Apps', section: '#services' },
    { label: 'E-commerce', section: '#services' },
    { label: 'Cloud Services', section: '#services' }
  ];

  const resourceLinks = [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Support', href: '#' }
  ];

  const socialLinks = [
    { icon: faFacebookF, href: '#' },
    { icon: faTwitter, href: '#' },
    { icon: faInstagram, href: '#' },
    { icon: faLinkedinIn, href: '#' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-base text-gray-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
            {/*}<div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Newsletter</h4>
              <div className="mt-4 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md text-gray-900 focus:outline-none w-full" 
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2024 {JsonData.orgName}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a href={link.href} className="text-gray-400 hover:text-white text-sm mr-4">
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && ' '}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;