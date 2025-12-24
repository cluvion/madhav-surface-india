import React, { useState, useRef, useEffect } from 'react';
import { Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Heading from '@/components/heading';
const Specifications = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const tabsContainerRef = useRef(null);

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'edge-profiles', label: 'Edge Profiles' },
    { id: 'care', label: 'Care & Maintenance' },
    { id: 'size-finish', label: 'Size/Finish Availability' },
    // { id: 'caesarstone-icon', label: 'Caesarstone ICON' }
  ];

  // Organize product specifications into structured data
  const getSpecificationData = () => {
    return {
      collection: product.collection || 'Premium Collection',
      material: product.material || 'Fusion',
      application: product.application || 'Indoor',
      colorGroup: product.colorGroup || 'Whites',
      pattern: product.pattern || 'Veined',
      range: product.range || 'Premium'
    };
  };

  const specs = getSpecificationData();

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    
    if (isLeftSwipe && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
    
    if (isRightSwipe && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const scrollToActiveTab = () => {
    if (tabsContainerRef.current) {
      const activeButton = tabsContainerRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  useEffect(() => {
    scrollToActiveTab();
  }, [activeTab]);

  const goToPrevTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const goToNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  return (
    <section className="py-6 pt-12 md:pt-20 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Heading title="Technical Details" />

        {/* Mobile Horizontal Tabs - Only visible on small screens */}
        <div className="lg:hidden mb-0">
          <div className="bg-gray-50 rounded-t-lg overflow-hidden">
            <div 
              ref={tabsContainerRef}
              className="overflow-x-auto"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex min-w-max">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    data-tab={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${
                      activeTab === tab.id
                        ? 'bg-white text-gray-900 border-b-red-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-b-transparent'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Sidebar - Tabs (Desktop Only) */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-muted-foreground rounded-l-lg overflow-hidden">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 transition-colors border-b border-gray-200 last:border-b-0 ${activeTab === tab.id
                    ? 'bg-white text-gray-900 border-l-4 border-l-red-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div 
            className="flex-1 bg-muted-foreground rounded-b-lg lg:rounded-l-none lg:rounded-r-lg p-6 lg:p-12"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">Collection</h4>
                    <p className="text-gray-600 font-medium">{specs.collection}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">Color Group</h4>
                    <p className="text-gray-600 font-medium">{specs.colorGroup}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">Material</h4>
                    <p className="text-gray-600 font-medium">{specs.material}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">Pattern</h4>
                    <p className="text-gray-600 font-medium">{specs.pattern}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">Application</h4>
                    <p className="text-gray-600 font-medium">{specs.application}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">Range</h4>
                    <p className="text-gray-600 font-medium">{specs.range}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'edge-profiles' && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Available Edge Profiles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Standard Edge', 'Beveled Edge', 'Bullnose Edge', 'Ogee Edge'].map((edge, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">{edge}</h4>
                      <p className="text-sm text-gray-600">Professional finishing available</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Care & Maintenance</h3>
                <div className="prose prose-gray max-w-none">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Clean with mild soap and water for daily maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Avoid abrasive cleaners and scouring pads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use cutting boards to prevent scratches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Wipe spills immediately to prevent staining</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'size-finish' && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Size & Finish Availability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Available Sizes</h4>
                    <div className="space-y-2">
                      {product.specifications?.sizes ? (
                        Array.isArray(product.specifications.sizes) ?
                          product.specifications.sizes.map((size, index) => (
                            <p key={index} className="text-gray-700">{size}</p>
                          )) :
                          <p className="text-gray-700">{product.specifications.sizes}</p>
                      ) : (
                        <>
                          <p className="text-gray-700">3000mm × 1400mm</p>
                          <p className="text-gray-700">3000mm × 1200mm</p>
                          <p className="text-gray-700">2400mm × 1200mm</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Available Finishes</h4>
                    <div className="space-y-2">
                      {product.finishes && product.finishes.length > 0 ? (
                        product.finishes.map((finish, index) => (
                          <p key={index} className="text-gray-700 capitalize">{finish}</p>
                        ))
                      ) : (
                        <>
                          <p className="text-gray-700">Polished</p>
                          <p className="text-gray-700">Honed</p>
                          <p className="text-gray-700">Textured</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {activeTab === 'caesarstone-icon' && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Caesarstone ICON</h3>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    This product is part of our premium ICON collection, featuring advanced technology and superior performance characteristics.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Enhanced durability</li>
                        <li>• Superior stain resistance</li>
                        <li>• Low maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Certifications</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• NSF Certified</li>
                        <li>• GREENGUARD Gold</li>
                        <li>• ISO 9001</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )} */}

            {/* Download Section */}
            {/* <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-medium text-gray-900 mb-6">Downloads</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Technical Data Sheet', size: '2.3 MB' },
                  { name: 'Installation Guidelines', size: '1.8 MB' },
                  { name: 'Care & Maintenance Guide', size: '1.2 MB' }
                ].map((file, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                      <div className="text-left">
                        <p className="font-medium text-gray-900 text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground0">{file.size}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
