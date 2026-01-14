"use client";

import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import dynamic from 'next/dynamic';

// Dynamic imports for icons
const Download = dynamic(() => import("lucide-react").then((mod) => mod.Download), { ssr: false });
const ChevronDown = dynamic(() => import("lucide-react").then((mod) => mod.ChevronDown), { ssr: false });
const Droplets = dynamic(() => import("lucide-react").then((mod) => mod.Droplets), { ssr: false });
const Shield = dynamic(() => import("lucide-react").then((mod) => mod.Shield), { ssr: false });
const Thermometer = dynamic(() => import("lucide-react").then((mod) => mod.Thermometer), { ssr: false });
const Zap = dynamic(() => import("lucide-react").then((mod) => mod.Zap), { ssr: false });
const Home = dynamic(() => import("lucide-react").then((mod) => mod.Home), { ssr: false });
const Building = dynamic(() => import("lucide-react").then((mod) => mod.Building), { ssr: false });

const TechnicalSpecs = ({ collection, products }) => {
  const [activeTab, setActiveTab] = useState('sizes');
  const [showSpecs, setShowSpecs] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tabs = [
    { id: 'sizes', label: 'Available Sizes' },
    { id: 'thickness', label: 'Thickness' },
    { id: 'finishes', label: 'Finish Options' },
    { id: 'applications', label: 'Applications' }
  ];

  const specifications = {
    sizes: [
      { dimension: '120cm x 60cm', availability: 'Standard', note: 'Most popular size' },
      { dimension: '160cm x 80cm', availability: 'Standard', note: 'Large format' },
      { dimension: '240cm x 120cm', availability: 'Premium', note: 'Jumbo slab' },
      { dimension: '300cm x 150cm', availability: 'Custom', note: 'Special order' }
    ],
    thickness: [
      { value: '12mm', usage: 'Wall cladding, backsplashes', weight: '29 kg/m²' },
      { value: '20mm', usage: 'Countertops, furniture', weight: '48 kg/m²' },
      { value: '30mm', usage: 'Heavy-duty surfaces', weight: '72 kg/m²' }
    ],
    finishes: [
      { name: 'Polished', description: 'High-gloss mirror finish', durability: 'High', maintenance: 'Regular sealing' },
      { name: 'Honed', description: 'Smooth matte surface', durability: 'Very High', maintenance: 'Low' },
      { name: 'Brushed', description: 'Textured linear pattern', durability: 'High', maintenance: 'Medium' },
      { name: 'Natural', description: 'Raw stone texture', durability: 'Medium', maintenance: 'Regular sealing' }
    ],
    applications: [
      { area: 'Kitchen Countertops', suitability: 'Excellent', notes: 'Heat and stain resistant' },
      { area: 'Bathroom Vanities', suitability: 'Excellent', notes: 'Water resistant' },
      { area: 'Flooring', suitability: 'Good', notes: 'High traffic areas' },
      { area: 'Wall Cladding', suitability: 'Excellent', notes: 'Interior and exterior' },
      { area: 'Outdoor Applications', suitability: 'Good', notes: 'Weather resistant' }
    ]
  };

  const features = [
    { icon: Droplets, title: 'Water Resistant', description: 'Superior moisture protection' },
    { icon: Shield, title: 'High Durability', description: 'Scratch and impact resistant' },
    { icon: Thermometer, title: 'Heat Resistant', description: 'Withstands high temperatures' },
    { icon: Zap, title: 'Stain Resistant', description: 'Easy to clean and maintain' },
    { icon: Home, title: 'Indoor Use', description: 'Perfect for interior applications' },
    { icon: Building, title: 'Commercial Grade', description: 'Suitable for high-traffic areas' }
  ];

  const downloadableFiles = [
    { name: 'Technical Data Sheet', type: 'PDF', size: '2.4 MB', description: 'Complete specifications and installation guidelines' },
    { name: 'Product Lookbook', type: 'PDF', size: '15.8 MB', description: 'High-resolution images and design inspiration' },
    { name: 'Installation Guide', type: 'PDF', size: '3.2 MB', description: 'Step-by-step installation instructions' },
    { name: 'Care & Maintenance', type: 'PDF', size: '1.1 MB', description: 'Cleaning and maintenance recommendations' },
    { name: 'Certifications', type: 'PDF', size: '0.8 MB', description: 'Quality and safety certifications' }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed technical information for professionals and B2B clients
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Specifications Table/Tabs */}
          <div className="lg:col-span-2">
            {/* Mobile Collapsible Header */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setShowSpecs(!showSpecs)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border"
              >
                <span className="font-semibold text-gray-900">Technical Specifications</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showSpecs ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Specs Content */}
            <motion.div
              className={`${showSpecs ? 'block' : 'hidden'} md:block`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                        ? 'bg-foreground text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'sizes' && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Dimension</th>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Availability</th>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specifications.sizes.map((size, index) => (
                          <tr key={index} className="border-t border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{size.dimension}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${size.availability === 'Standard' ? 'bg-green-100 text-green-800' :
                                  size.availability === 'Premium' ? 'bg-blue-100 text-blue-800' :
                                    'bg-orange-100 text-orange-800'
                                }`}>
                                {size.availability}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{size.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'thickness' && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Thickness</th>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Recommended Usage</th>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Weight</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specifications.thickness.map((thick, index) => (
                          <tr key={index} className="border-t border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{thick.value}</td>
                            <td className="px-6 py-4 text-gray-600">{thick.usage}</td>
                            <td className="px-6 py-4 text-gray-600">{thick.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'finishes' && (
                  <div className="p-6 space-y-6">
                    {specifications.finishes.map((finish, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                        <h4 className="font-semibold text-gray-900 mb-2">{finish.name}</h4>
                        <p className="text-gray-600 mb-3">{finish.description}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-gray-500">Durability: <span className="font-medium text-gray-900">{finish.durability}</span></span>
                          <span className="text-gray-500">Maintenance: <span className="font-medium text-gray-900">{finish.maintenance}</span></span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'applications' && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Application Area</th>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Suitability</th>
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specifications.applications.map((app, index) => (
                          <tr key={index} className="border-t border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{app.area}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${app.suitability === 'Excellent' ? 'bg-green-100 text-green-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                {app.suitability}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{app.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Features & Downloads Sidebar */}
          <div className="space-y-8">
            {/* Key Features */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    >
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Downloadable Resources */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Downloads</h3>
              <div className="space-y-3">
                {downloadableFiles.map((file, index) => (
                  <motion.button
                    key={index}
                    className="w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                          <Download className="w-4 h-4 text-gray-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{file.name}</h4>
                          <p className="text-sm text-gray-600">{file.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">{file.type}</div>
                        <div className="text-xs text-gray-500">{file.size}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
