import React from 'react';
import Image from 'next/image';

export default function About({ data }) {
  if (!data) return null; // no data, render nothing

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-blue-200 opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/2]">
              <img 
                src={data.image || '/images/default-about.jpg'} 
                alt="About section image"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>
      
          </div>
          
          {/* Content Column */}
          <div>
        
            
            {data.title && (
              <h2 className="text-5xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                {data.title}
              </h2>
            )}
            
            {data.story && (
              <p className="lg:text-lg text-sm text-gray-600 px-2 py-2 mb-8">
                {data.story}
              </p>
              
            )}
            
            {/* ✅ Safe values mapping */}
            {Array.isArray(data.values) && data.values.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {data.values.map((value, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* ✅ Safe stats mapping */}
            {Array.isArray(data.team) && data.team.length > 0 && (
              <div className="flex flex-wrap gap-6  ">
                {data.team.map((stat, index) => (
                  <div key={index} className="text-center flex border-2 rounded-2xl bg-purple-300">
                    <p className="text-xl font-bold text-blue-900 border-e-2 p-3 pt-6 ">{stat.name}</p>
                    <p className="text-md font-bold text-white border-e-2 p-3">{stat.bio}</p>
                    <p className="text-yellow-200 font-bold p-4">{stat.role}</p>

                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
