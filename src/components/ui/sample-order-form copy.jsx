"use client";

import { useState, useMemo, useCallback, memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, User, MapPin, MessageSquare, Send } from 'lucide-react';
import { products } from '@/constants';
import Image from 'next/image';
import { countryCodes, getPopularCountryCodes } from '@/utils/countryCodes';

const SampleOrderForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+968',
    category: '',
    company: '',
    address: '',
    selectedProducts: [],
    message: '',
    projectType: 'residential'
  });

  const [showAllCountries, setShowAllCountries] = useState(false);

  // Get popular countries first, then all countries if needed
  const displayCountries = showAllCountries ? countryCodes : getPopularCountryCodes();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle "show all countries" option
    if (name === 'countryCode' && value === 'show-all') {
      setShowAllCountries(true);
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductSelect = useCallback((productId) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productId)
        ? prev.selectedProducts.filter(id => id !== productId)
        : [...prev.selectedProducts, productId]
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLScc8OjjDyskQtzlB-6gePmyF-68I2PZAopa2R7xRKIpb_Kuzw/formResponse'

    const selectedProductNames = formData.selectedProducts
      .map(id => {
        const product = products.find(p => p.id === id);
        return product ? `${product.name} (${product.collection})` : '';
      })
      .filter(Boolean)
      .join(', ');

    const formDataPayload = new FormData();
    formDataPayload.append('entry.698176508', formData.name);
    formDataPayload.append('entry.1954099121', formData.email);
    formDataPayload.append('entry.554263998', `${formData.countryCode}`);
    formDataPayload.append('entry.1603549671', `${formData.phone}`);
    formDataPayload.append('entry.1568563042', formData.category);
    formDataPayload.append('entry.2095706504', selectedProductNames);
    formDataPayload.append('entry.352991191', formData.company || '');
    formDataPayload.append('entry.85012586', formData.projectType);
    formDataPayload.append('entry.1056717024', formData.address);
    formDataPayload.append('entry.1291424604', formData.message || '');

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formDataPayload,
        mode: 'no-cors'
      });

      alert('Sample order submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+968',
        category: '',
        company: '',
        address: '',
        selectedProducts: [],
        message: '',
        projectType: 'residential'
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-80 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Order  Samples</h2>
                <p className="text-white/90">Get samples delivered to your door</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-120px)]">
            {/* Form Section */}
            <div className="flex-1 p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-[9px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select Category</option>
                        <option value="Home owner">Home owner</option>
                        <option value="Architect">Architect</option>
                        <option value="Interior Designer">Interior Designer</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Builder">Builder</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-700 focus:outline-none z-10  w-15 border-r border-gray-900"
                          style={{
                            backgroundImage: 'none',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none'
                          }}
                        >
                          {displayCountries.map((country) => (
                            <option key={`${country.code}-${country.flag}`} value={country.code}>
                              {country.code} {country.flag}
                            </option>
                          ))}
                          {!showAllCountries && (
                            <option value="" disabled className="bg-gray-100 text-gray-500">
                              ──────────────────
                            </option>
                          )}
                          {!showAllCountries && (
                            <option
                              value="show-all"
                              className="bg-blue-50 text-blue-600 font-medium"
                            >
                              📍 Show All Countries
                            </option>
                          )}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </h3>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Enter your complete delivery address"
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Additional Information
                  </h3>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, timeline, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formData.selectedProducts.length === 0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Order Samples ({formData.selectedProducts.length})
                </motion.button>

                {formData.selectedProducts.length === 0 && (
                  <p className="text-sm text-gray-500 text-center">
                    Please select at least one product to order samples
                  </p>
                )}
              </form>
            </div>

            {/* Product Selection Section */}
            <div className="lg:w-96 bg-gray-50 p-6 border-l border-gray-200 overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Select Products ({formData.selectedProducts.length})
              </h3>
              <ProductSelection
                selectedProducts={formData.selectedProducts}
                onToggle={handleProductSelect}
              />
            </div>
          </div>
        </motion.div>
      </motion.div >
    </AnimatePresence >
  );
};

const SelectedProductItem = memo(function SelectedProductItem({ product, onRemove }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-white rounded-lg border">
      <Image
        src={product.image}
        alt={product.name}
        width={40}
        height={40}
        quality={60}
        sizes="40px"
        className="w-10 h-10 rounded object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
        <p className="text-xs text-gray-500">{product.collection}</p>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="p-1 hover:bg-gray-100 rounded"
        aria-label={`Remove ${product.name}`}
      >
        <X className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
});

const ProductListItem = memo(function ProductListItem({ product, selected, onToggle }) {
  const stateClasses = selected
    ? 'bg-primary/10 border-primary'
    : 'bg-white border-gray-200 hover:border-gray-300';

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${stateClasses}`}
      onClick={() => {
        onToggle(product.id);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(product.id);
        }
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={48}
        height={48}
        quality={60}
        sizes="48px"
        className="w-12 h-12 rounded object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
        <p className="text-xs text-gray-500">{product.collection}</p>
        <p className="text-xs text-gray-400">{product.color} • {product.finish}</p>
      </div>
      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selected ? 'bg-primary border-primary' : 'border-gray-300'}`}>
        {selected && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
    </div>
  );
});

const ProductSelection = memo(function ProductSelection({ selectedProducts, onToggle }) {
  const selectedSet = useMemo(() => new Set(selectedProducts), [selectedProducts]);
  const [search, setSearch] = useState('');
  const [itemsToShow, setItemsToShow] = useState(4);

  const selectedProductsData = useMemo(
    () => products.filter((p) => selectedSet.has(p.id)),
    [selectedSet]
  );

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => {
      const fields = [p.name, p.color, p.collection, p.finish];
      const inFields = fields.some((f) => f && String(f).toLowerCase().includes(q));
      const inTags = Array.isArray(p.tags) && p.tags.some((t) => String(t).toLowerCase().includes(q));
      return inFields || inTags;
    });
  }, [search]);

  useEffect(() => {
    setItemsToShow(4);
  }, [search]);

  const canLoadMore = itemsToShow < filteredProducts.length;

  return (
    <>
      {selectedProductsData.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Selected Samples:</h4>
          <div className="space-y-2">
            {selectedProductsData.map((product) => (
              <SelectedProductItem key={product.id} product={product} onRemove={onToggle} />
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Available Products:</h4>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredProducts.length === 0 ? (
            <p className="text-sm text-gray-500">No products found.</p>
          ) : (
            filteredProducts.slice(0, itemsToShow).map((product) => (
              <ProductListItem
                key={product.id}
                product={product}
                selected={selectedSet.has(product.id)}
                onToggle={onToggle}
              />
            ))
          )}
        </div>
        {canLoadMore && (
          <button
            type="button"
            onClick={() => setItemsToShow((n) => n + 4)}
            className="mt-3 w-full px-3 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5"
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
});

export default SampleOrderForm;
