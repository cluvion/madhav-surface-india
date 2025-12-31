import React, { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
        <button className="flex-1 bg-black hover:bg-zinc-800 text-white py-3 px-6 rounded-lg font-medium transition-colors">
          Order Sample
        </button>
        <button className="flex-1 border-2 border-black hover:bg-zinc-50 text-black py-3 px-6 rounded-lg font-medium transition-colors">
          Request Quote
        </button>
        <button className="flex-1 border-2 border-zinc-200 hover:border-zinc-400 text-zinc-700 py-3 px-6 rounded-lg font-medium transition-colors">
          Find a Dealer
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
