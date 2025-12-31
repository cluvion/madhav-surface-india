import React, { useState, useRef, useEffect } from 'react';
import { Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Heading from '@/components/heading';
import Section from '../section';
const Specifications = ({ product }) => {
  const [activeTab, setActiveTab] = useState('size-finish');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const tabsContainerRef = useRef(null);

  const tabs = [
    { id: 'size-finish', label: 'Specifications' },
    { id: 'edge-profiles', label: 'Edge Profiles' },
    { id: 'care', label: 'Care & Maintenance' },
  ];

  // Organize product specifications into structured data
  const getSpecificationData = () => {
    return {
      // Basic fallback if needed, but mostly unused now
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
    <Section>
      <div className="relative">
        <div className="text-center md:text-left">
          <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black">
            Technical 
            <span className="text-primary "> Specifications</span>
          </h2>
        </div>

        {/* Mobile Horizontal Tabs - Only visible on small screens */}
        <div className="lg:hidden my-8">
          <div className="border-b border-zinc-200">
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
                    className={`flex-shrink-0 px-6 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${activeTab === tab.id
                      ? 'text-black border-primary'
                      : 'text-foreground/50 hover:text-black border-transparent'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:mt-16">
          {/* Left Sidebar - Tabs (Desktop Only) */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="flex flex-col gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 transition-all duration-300 border-l-2 text-lg ${activeTab === tab.id
                    ? 'border-primary text-black font-medium pl-8 bg-zinc-50/50'
                    : 'border-transparent text-foreground/50 hover:text-black hover:pl-8'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div
            className="flex-1"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {activeTab === 'edge-profiles' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* <h3 className="text-2xl font-light text-black mb-8">Available Edge Profiles</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Standard Edge', 'Beveled Edge', 'Bullnose Edge', 'Ogee Edge'].map((edge, index) => (
                    <div key={index} className="group p-6 bg-white border border-zinc-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <h4 className="font-medium text-lg text-black mb-2 group-hover:text-primary transition-colors">{edge}</h4>
                      <p className="text-sm text-foreground/50">Professional finishing available</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* <h3 className="text-2xl font-light text-black mb-8">Care & Maintenance</h3> */}
                <div className="prose prose-zinc max-w-none">
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4 p-4 hover:bg-zinc-50 transition-colors rounded-lg">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <p className="text-foreground/50 leading-relaxed">Clean with mild soap and water for daily maintenance to keep the surface looking pristine.</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 hover:bg-zinc-50 transition-colors rounded-lg">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <p className="text-foreground/50 leading-relaxed">Avoid abrasive cleaners and scouring pads that might dull the polished finish over time.</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 hover:bg-zinc-50 transition-colors rounded-lg">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <p className="text-foreground/50 leading-relaxed">Use cutting boards to prevent scratches, although the surface is highly durable.</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 hover:bg-zinc-50 transition-colors rounded-lg">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <p className="text-foreground/50 leading-relaxed">Wipe spills immediately to prevent staining, ensuring long-lasting beauty.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'size-finish' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* <h3 className="text-2xl font-light text-black mb-8">Size & Finish Availability</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-medium text-lg text-black mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-primary"></span>
                      Available Sizes
                    </h4>
                    <div className="space-y-4">
                      {product.specifications?.sizes ? (
                        Array.isArray(product.specifications.sizes) ?
                          product.specifications.sizes.map((size, index) => (
                            <p key={index} className="text-foreground/50 py-3 border-b border-zinc-200">{size}</p>
                          )) :
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">{product.specifications.sizes}</p>
                      ) : (
                        <>
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">3000mm × 1400mm</p>
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">3000mm × 1200mm</p>
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">2400mm × 1200mm</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-black mb-6 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-primary"></span>
                      Available Finishes
                    </h4>
                    <div className="space-y-4">
                      {product.finishes && product.finishes.length > 0 ? (
                        product.finishes.map((finish, index) => (
                          <p key={index} className="text-foreground/50 py-3 border-b border-zinc-200 capitalize">{finish}</p>
                        ))
                      ) : (
                        <>
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">Polished</p>
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">Honed</p>
                          <p className="text-foreground/50 py-3 border-b border-zinc-200">Textured</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Specifications;
