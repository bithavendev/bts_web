import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import JsonData from "../data/data.json";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const services = [
    'Select a service',
    'Billing Software',
    'Mobile Applications',
    'E-commerce Solutions',
    'Cloud Configuration',
    'School Management Apps',
    'Custom Software'
  ];

  const onSubmit = async (data) => {
    const customJson = {
      ldName: data.name,
      ldEmail: data.email,
      ldMobile: data.phone,
      ldService: data.service,
      ldMessage: data.message,
    };
    try {
      setSubmitStatus('submitting');
      
      const response = await fetch("https://script.google.com/macros/s/AKfycbxzqZoZCbbLVuENS9jB8R1R4RK3mBGAEvT_4kW6t7ONIYruAUFQ0PLRqRCo0hPx1gFE/exec", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },//mode: 'no-cors',
        body: JSON.stringify(customJson),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const result = await response.json();
      if (result.result === "success") {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ready to start your next project with us? Send us a message and we'll get back to you within 24 hours.
            </p>
            <div className="mt-8">
              {JsonData.Contact.map((info, index) => (
                <div key={index} className={`${index !== 0 ? 'mt-6' : ''} flex items-start`}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <FontAwesomeIcon icon={
                        info.icon === "faMapMarkerAlt" ? faMapMarkerAlt :
                        info.icon === "faEnvelope" ? faEnvelope : 
                        info.icon === "faCrosshairs" ? faCrosshairs : 
                        info.icon === "faPhoneAlt" ? faPhoneAlt : null
                      } />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="mt-2 text-base text-gray-500">
                        {info.refLink ? (
                          <a href={info.refLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            {detail}
                          </a>
                        ) : detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                  There was an error submitting your form. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="mb-0 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1">
                    <input 
                      id="name" 
                      {...register("name", { required: true })} 
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <div className="mt-1">
                    <input 
                      id="email" 
                      type="email"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1">
                    <input 
                      id="phone" 
                      type="tel"
                      {...register("phone")} 
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                  <div className="mt-1">
                    <select 
                      id="service" 
                      {...register("service")} 
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1">
                    <textarea 
                      id="message" 
                      rows="4"
                      {...register("message", { required: true })} 
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;