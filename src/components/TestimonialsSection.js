import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Sarah Johnson",
      position: "Retail Business Owner",
      quote: "\"TechNova's billing software transformed our operations. What used to take hours now takes minutes, and the reporting features give us insights we never had before.\"",
      rating: 5
    },
    {
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Michael Chen",
      position: "School Principal",
      quote: "\"The school management app developed by TechNova has revolutionized how we communicate with parents and manage student data. It's intuitive and packed with features.\"",
      rating: 5
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Priya Patel",
      position: "E-commerce Entrepreneur",
      quote: "\"From website to mobile app to backend systems, TechNova built our entire e-commerce ecosystem. Their team understood our vision and delivered beyond expectations.\"",
      rating: 4.5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-4 flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;