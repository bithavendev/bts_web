import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoiceDollar, 
  faMobileAlt, 
  faShoppingCart, 
  faCloud, 
  faGraduationCap, 
  faCode,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  const services = [
    {
      icon: faFileInvoiceDollar,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      title: 'Billing Software',
      description: 'Streamline your financial operations with our customizable billing solutions that automate invoicing, payments, and financial reporting.',
      features: [
        'Automated invoicing',
        'Multi-payment integration',
        'Real-time financial analytics'
      ]
    },
    {
      icon: faMobileAlt,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
      title: 'Mobile Applications',
      description: 'Build engaging mobile experiences with our native and cross-platform app development services for iOS and Android.',
      features: [
        'iOS and Android development',
        'React Native cross-platform',
        'App store optimization'
      ]
    },
    {
      icon: faShoppingCart,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce ecosystems with web, mobile, and backend integration to scale your online business.',
      features: [
        'Custom e-commerce websites',
        'Mobile shopping apps',
        'Payment gateway integration'
      ]
    },
    {
      icon: faCloud,
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      title: 'Cloud Configuration',
      description: 'Optimize your cloud infrastructure with our expert configuration, migration, and management services.',
      features: [
        'AWS, Azure, Google Cloud',
        'Cloud migration services',
        'Cost optimization'
      ]
    },
    {
      icon: faGraduationCap,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      title: 'School Management Apps',
      description: 'Comprehensive education management solutions for schools, colleges, and training institutions.',
      features: [
        'Student information systems',
        'Learning management',
        'Parent-teacher communication'
      ]
    },
    {
      icon: faCode,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      title: 'Custom Software',
      description: 'Bespoke software solutions designed specifically for your unique business processes and requirements.',
      features: [
        'Enterprise solutions',
        'Workflow automation',
        'API integration'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-xl shadow-md">
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <FontAwesomeIcon icon={service.icon} className={`${service.iconColor} text-2xl`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-600">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;