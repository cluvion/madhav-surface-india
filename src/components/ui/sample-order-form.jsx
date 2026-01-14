"use client";

import { useState, useMemo, useCallback, memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, User, MapPin, MessageSquare, Send } from 'lucide-react';
import { products } from '@/constants';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CountryCode from '@/components/ui/country-code';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryCodeChange = (countryCode) => {
    setFormData(prev => ({
      ...prev,
      countryCode: countryCode
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
        className="fixed inset-0 bg-foreground/50 z-80 flex items-center justify-center p-4 "
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-background rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary-foreground/20 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Order Samples</h2>
                <p className="text-primary-foreground/90">Get samples delivered to your door</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-120px)]">
            {/* Form Section */}
            <div className="flex-1 p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 " >
                        Full Name *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2" >
                      <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                        Category *
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))} required >
                        <SelectTrigger className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20 w-full">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-border z-[80]" >
                          <SelectItem value="Home owner" className="text-foreground">Home owner</SelectItem>
                          <SelectItem value="Architect" className="text-foreground">Architect</SelectItem>
                          <SelectItem value="Interior Designer" className="text-foreground">Interior Designer</SelectItem>
                          <SelectItem value="Distributor" className="text-foreground">Distributor</SelectItem>
                          <SelectItem value="Builder" className="text-foreground">Builder</SelectItem>
                          <SelectItem value="Others" className="text-foreground">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2" data-light-bg>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </Label>
                      <div className="flex gap-2" >
                        <CountryCode
                          value={formData.countryCode}
                          onChange={handleCountryCodeChange}
                          // className="w-32"
                          label=""
                          placeholder="Code"
                          // buttonClassName="bg-muted border-border text-foreground hover:bg-muted focus-visible:border-primary focus-visible:ring-ring/20"
                          contentClassName="z-[80]"
                        />
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company (Optional)
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
                        placeholder="Company name"
                      />
                    </div>
                    {/* Project Type */}
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-sm font-medium text-gray-700">
                        Project Type
                      </Label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                        <SelectTrigger className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20 w-full">
                          <SelectValue placeholder="Select Project Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-border z-[80]">
                          <SelectItem value="residential" className="text-foreground">Residential</SelectItem>
                          <SelectItem value="commercial" className="text-foreground">Commercial</SelectItem>
                          <SelectItem value="hospitality" className="text-foreground">Hospitality</SelectItem>
                          <SelectItem value="retail" className="text-foreground">Retail</SelectItem>
                          <SelectItem value="other" className="text-foreground">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>


                {/* Delivery Address */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </h3>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Complete Address *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
                    placeholder="Enter your complete delivery address"
                  />
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Additional Information
                  </h3>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
                    placeholder="Tell us about your project, timeline, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={formData.selectedProducts.length === 0}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/20 disabled:text-white disabled:cursor-not-allowed text-primary-foreground font-semibold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Order Samples ({formData.selectedProducts.length})
                  </Button>
                </motion.div>

                {formData.selectedProducts.length === 0 && (
                  <p className="text-sm text-foreground/50 text-center">
                    Please select at least one product to order samples
                  </p>
                )}
              </form>
            </div>

            {/* Product Selection Section */}
            <div className="lg:w-96 bg-muted p-6 border-l border-border overflow-y-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">
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
    <div className="flex items-center gap-3 p-2 bg-background rounded-lg border border-border">
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
        <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
        <p className="text-xs text-foreground/50">{product.collection}</p>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="p-1 hover:bg-muted rounded"
        aria-label={`Remove ${product.name}`}
      >
        <X className="w-4 h-4 text-foreground/50" />
      </button>
    </div>
  );
});

const ProductListItem = memo(function ProductListItem({ product, selected, onToggle }) {
  const stateClasses = selected
    ? 'bg-primary/10 border-primary'
    : 'bg-background border-border hover:border-foreground/50';

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
        <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
        <p className="text-xs text-foreground/50">{product.collection}</p>
        <p className="text-xs text-foreground/50">{product.color} • {product.finish}</p>
      </div>
      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selected ? 'bg-primary border-primary' : 'border-border'}`}>
        {selected && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
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
          <h4 className="text-sm font-medium text-foreground mb-3">Selected Samples:</h4>
          <div className="space-y-2">
            {selectedProductsData.map((product) => (
              <SelectedProductItem key={product.id} product={product} onRemove={onToggle} />
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="mb-4">
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
          />
        </div>
        <h4 className="text-sm font-medium text-foreground mb-3">Available Products:</h4>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredProducts.length === 0 ? (
            <p className="text-sm text-foreground/50">No products found.</p>
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
          <Button
            type="button"
            variant="outline"
            onClick={() => setItemsToShow((n) => n + 4)}
            className="mt-3 w-full bg-background border-primary text-primary hover:bg-primary/5 focus-visible:ring-ring/20"
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
});

export default SampleOrderForm;
