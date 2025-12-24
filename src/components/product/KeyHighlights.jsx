import React from 'react';
import { Shield, Zap, Thermometer, Sun, Leaf } from 'lucide-react';
import Heading from '@/components/heading';
const KeyHighlights = () => {
  const highlights = [
    { icon: <Shield className="w-8 h-8 text-red-600" />, title: "Stain Resistant", description: "Superior protection against stains and spills" },
    { icon: <Zap className="w-8 h-8 text-red-600" />, title: "Low Maintenance", description: "Easy to clean with minimal upkeep required" },
    { icon: <Thermometer className="w-8 h-8 text-red-600" />, title: "Heat Tolerant", description: "Withstands high temperatures without damage" },
    { icon: <Sun className="w-8 h-8 text-red-600" />, title: "UV Stable", description: "Resists fading and discoloration from sunlight" },
    { icon: <Leaf className="w-8 h-8 text-red-600" />, title: "Eco-Friendly", description: "Made with sustainable materials and processes" }
  ];
  return (
    <section className="py-6  md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Key Highlights" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  {React.cloneElement(highlight.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 " + highlight.icon.props.className })}
                </div>
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                {highlight.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
