import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import JsonData from "../data/data.json";
import teameet from "../img/team_meeting.jpg";

const AboutSection = () => {

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <img className="w-full h-auto rounded-lg" src={teameet} alt="Our team" />
                <div className="absolute inset-0 bg-indigo-600 opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faLightbulb} className="text-indigo-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 lg:pl-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About <span className="gradient-text">{JsonData.orgName ? JsonData.orgName : "Loading"}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {JsonData.About ? JsonData.About.orgUS : "Loading"}
            </p>
            <div className="mt-8">
              {JsonData.About.aboutPoints.map((point, index) => (
                <div key={index} className={`${index !== 0 ? 'mt-8' : ''} flex items-start`}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <FontAwesomeIcon icon={point.icon == "faBullseye" ? faBullseye : 
                        (point.icon == "faEye" ? faEye : (point.icon == "faHandshake" ? faHandshake : ""))
                      } />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{point.title}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;