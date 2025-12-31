import React, { useState } from 'react';

const Applications = ({ product }) => {
  const [activeApp, setActiveApp] = useState('Kitchen');
  const applications = ['Kitchen', 'Bathroom', 'Commercial', 'Outdoor'];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Where This Surface Belongs
        </h2>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white p-1 rounded-lg">
            {applications.map((app) => (
              <button
                key={app}
                onClick={() => setActiveApp(app)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${activeApp === app ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {app}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-gray-200">
                <img
                  src={product.image}
                  alt={`${product.name} in ${activeApp}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {product.name} - {activeApp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
