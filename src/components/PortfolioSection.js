import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from '../img/images';

const PortfolioSection = ({ scrollToSection }) => {
  const projects = [
    {
      image: images['billing_img.jpg'],
      title: "Retail Billing System",
      description: "Custom billing solution for a retail chain with 50+ locations",
      tag: "Billing Software",
      tagColor: "bg-indigo-100 text-indigo-800"
    },
    {
      image: images['edu_school_img.jpg'],
      title: "EduConnect School App",
      description: "Comprehensive school management platform for K-12 institutions",
      tag: "School Apps",
      tagColor: "bg-purple-100 text-purple-800"
    },
    {
      image: images['ecommerce_soft.jpg'],
      title: "ShopEasy E-commerce",
      description: "Full-featured e-commerce platform with mobile app",
      tag: "E-commerce",
      tagColor: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore some of our recent projects across different industries
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" 
                src={project.image} 
                alt={project.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="mt-4 flex items-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View More Projects
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;