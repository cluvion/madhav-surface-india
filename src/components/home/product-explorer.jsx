"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo, useRef, useEffect } from "react";
import { Filter, Search, X, Eye, Heart, GitCompare, ChevronDown, Loader2 } from "lucide-react";
import { products } from "@/constants/index";
import Image from "next/image";
import Heading from "@/components/heading";
import Section from '@/components/section'
import { HoverButton } from "@/components/ui/hoverbutton";

const ProductExplorer = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    finish: [],
    useCase: [],
    collection: []
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [compareList, setCompareList] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 3;

  // Dropdown states
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [filterMode, setFilterMode] = useState("dropdown"); // "sidebar" or "dropdown" - default to dropdown
  const [isMdScreen, setIsMdScreen] = useState(false);
  const dropdownRefs = useRef({});

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const filterOptions = {
    color: ["White", "Black", "Grey", "Gray", "Beige", "Brown", "Blue", "Green", "Gold", "Silver", "Purple", "Red", "Multi"],
    finish: ["Polished", "Honed", "Brushed", "Leathered"],
    useCase: ["Kitchen", "Bathroom", "Flooring", "Wall Cladding", "Commercial", "Living", "Modern", "Luxury"],
    collection: ["Bedrock", "Pinnacle", "Opulence", "SilicaLite", "Serenity"]
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach(key => {
        if (dropdownRefs.current[key] && !dropdownRefs.current[key].contains(event.target)) {
          setOpenDropdowns(prev => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Memoized filtered products for better performance
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesColor = selectedFilters.color.length === 0 ||
        selectedFilters.color.includes(product.color);

      const matchesFinish = selectedFilters.finish.length === 0 ||
        selectedFilters.finish.includes(product.finish);

      const matchesUseCase = selectedFilters.useCase.length === 0 ||
        selectedFilters.useCase.some(use => product.useCase.includes(use));

      const matchesCollection = selectedFilters.collection.length === 0 ||
        selectedFilters.collection.includes(product.collection);

      return matchesSearch && matchesColor && matchesFinish && matchesUseCase && matchesCollection;
    });
  }, [products, searchTerm, selectedFilters]);

  // Paginated products
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, currentPage * itemsPerPage);
  }, [filteredProducts, currentPage]);

  const hasMoreProducts = displayedProducts.length < filteredProducts.length;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedFilters({
      color: [],
      finish: [],
      useCase: [],
      collection: []
    });
    setCurrentPage(1);
  };

  const clearCategoryFilter = (category) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: []
    }));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const loadMore = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setCurrentPage(prev => prev + 1);
    setIsLoading(false);
  };

  const toggleCompare = (productId) => {
    setCompareList(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  const toggleDropdown = (category) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Get active filter count
  const activeFilterCount = Object.values(selectedFilters).reduce((sum, arr) => sum + arr.length, 0);

  // Render dropdown filter
  const renderDropdownFilter = (category, options) => {
    const activeCount = selectedFilters[category].length;
    const displayName = category === "useCase" ? "Use Case" : category.charAt(0).toUpperCase() + category.slice(1);

    return (
      <div
        key={category}
        className="relative"
        ref={el => dropdownRefs.current[category] = el}
      >
        <button
          onClick={() => toggleDropdown(category)}
          className={`flex items-center justify-between gap-2 px-4 py-2 border rounded-lg transition-all min-w-[120px] ${activeCount > 0
            ? 'border-primary bg-primary/5 text-primary'
            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
            }`}
        >
          <span className="text-sm font-medium">
            {displayName}
            {activeCount > 0 && (
              <span className="ml-1 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                {activeCount}
              </span>
            )}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdowns[category] ? 'rotate-180' : ''
            }`} />
        </button>

        <AnimatePresence>
          {openDropdowns[category] && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[200px] max-h-60 overflow-y-auto"
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{displayName}</span>
                  {activeCount > 0 && (
                    <button
                      onClick={() => clearCategoryFilter(category)}
                      className="text-xs text-primary hover:text-primary/80"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-1">
                  {options.map(option => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded text-sm">
                      <input
                        type="checkbox"
                        checked={selectedFilters[category].includes(option)}
                        onChange={() => toggleFilter(category, option)}
                        className="rounded border-gray-300 focus:ring-black accent-black"
                        style={{ accentColor: '#000000' }}
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Render sidebar filter
  const renderSidebarFilter = (category, options) => {
    const displayName = category === "useCase" ? "Use Case" : category.charAt(0).toUpperCase() + category.slice(1);

    return (
      <div key={category} className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          {displayName}
        </h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {options.map(option => (
            <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-white/50 p-1 rounded transition-colors">
              <input
                type="checkbox"
                checked={selectedFilters[category].includes(option)}
                onChange={() => toggleFilter(category, option)}
                className="rounded border-gray-300 focus:ring-black accent-black"
                style={{ accentColor: '#000000' }}
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Section className="py-10 md:py-10 my-6 md:my-10 bg-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Heading title="Find Your Perfect Surface" />
        </motion.div>

        {/* Search and Controls */}
        <div className="mb-6 sm:mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-sm sm:max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
            <input
              type="text"
              placeholder="Search stones..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-black rounded-xl"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>

          {/* Filter Mode Toggle & Controls - Only show filter mode toggle on md+ screens */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
              {/* Filter Mode Toggle - Hidden on small screens */}
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setFilterMode("sidebar")}
                  className={`px-3 py-1 rounded text-sm transition-colors ${filterMode === "sidebar" ? "bg-white shadow-sm" : "text-black"
                    }`}
                >
                  Sidebar
                </button>
                <button
                  onClick={() => setFilterMode("dropdown")}
                  className={`px-3 py-1 rounded text-sm transition-colors ${filterMode === "dropdown" ? "bg-white shadow-sm" : "text-black"
                    }`}
                >
                  Dropdown
                </button>
              </div>
            </div>

            {compareList.length > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                <GitCompare className="w-4 h-4" />
                Compare ({compareList.length})
              </motion.button>
            )}
          </div>

          {/* Dropdown Filters - Always show on small screens, conditionally on larger screens */}
          {(filterMode === "dropdown" || !isMdScreen) && (
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(filterOptions).map(([category, options]) =>
                renderDropdownFilter(category, options)
              )}

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white text-black border border-black rounded-lg hover:bg-black/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear All ({activeFilterCount})
                </button>
              )}
            </div>
          )}
        </div>

        <div className={`grid gap-8 ${filterMode === "sidebar" && isMdScreen ? "md:grid-cols-4" : ""}`}>
          {/* Sidebar Filters - Only show on md+ screens when sidebar mode is active */}
          {filterMode === "sidebar" && isMdScreen && (
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {activeFilterCount}
                      </span>
                    )}
                  </h3>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {Object.entries(filterOptions).map(([category, options]) =>
                  renderSidebarFilter(category, options)
                )}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className={filterMode === "sidebar" && isMdScreen ? "md:col-span-3" : ""}>
            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm text-black">
                Showing {displayedProducts.length} of {filteredProducts.length} stones
                {currentPage > 1 && (
                  <span className="ml-2 text-xs text-gray-500">
                    (Page {currentPage} of {totalPages})
                  </span>
                )}
              </div>

              {filteredProducts.length > 0 && (
                <div className="text-xs text-gray-500">
                  {Math.round((displayedProducts.length / filteredProducts.length) * 100)}% loaded
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${searchTerm}-${JSON.stringify(selectedFilters)}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
              >
                {displayedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index >= (currentPage - 1) * itemsPerPage ? (index - (currentPage - 1) * itemsPerPage) * 0.05 : 0
                    }}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredProduct(product.id)}
                    onHoverEnd={() => setHoveredProduct(null)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {/* <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all">
                          <Heart className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={() => toggleCompare(product.id)}
                          className={`backdrop-blur-sm rounded-full p-3 transition-all ${compareList.includes(product.id)
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/20 hover:bg-white/30 text-white"
                            }`}
                        >
                          <GitCompare className="w-5 h-5" />
                        </button> */}
                      </motion.div>
                    </div>

                    <div className="p-3 sm:p-6">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-gray-900 flex-1 min-w-0">
                          {product.name}
                        </h3>
                        <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded-full flex-shrink-0">
                          {product.collection}
                        </span>
                      </div>

                      <p className="font-light text-black text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Color:</span>
                          <span className="text-xs sm:text-sm ">{product.color}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Finish:</span>
                          <span className="text-xs sm:text-sm ">{product.finish}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Best for:</span>
                          <div className="flex gap-1 flex-wrap">
                            {product.useCase.map(use => (
                              <span key={use} className="text-xs bg-muted px-2 py-1 rounded">
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <HoverButton
                        text="View Details"
                        variant="transparentBlack"
                        width={"w-full"}
                        href={`/product/${product.id}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Load More Button */}
            {hasMoreProducts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mt-8"
              >
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-6 sm:px-8 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      Load More ({filteredProducts.length - displayedProducts.length} remaining)
                    </>
                  )}
                </button>
              </motion.div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-800 mb-4">
                  <Filter className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  No stones found
                </h3>
                <p className="text-black mb-4 text-sm sm:text-base">
                  Try adjusting your filters or search term
                </p>
                {(activeFilterCount > 0 || searchTerm) && (
                  <button
                    onClick={() => {
                      clearFilters();
                      setSearchTerm("");
                    }}
                    className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base"
                  >
                    Clear all filters and search
                  </button>
                )}
              </motion.div>
            )}

            {/* Results Summary */}
            {filteredProducts.length > 0 && !hasMoreProducts && displayedProducts.length > itemsPerPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-8 p-4 bg-gray-50 rounded-xl"
              >
                <p className="text-xs sm:text-sm text-black">
                  🎉 You've viewed all {filteredProducts.length} matching stones!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductExplorer;