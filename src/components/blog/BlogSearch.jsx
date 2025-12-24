'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function BlogSearch({ onSearch, onClear, initialQuery = '', disabled = false }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      await onSearch(searchQuery.trim());
    } finally {
      setIsSearching(false);
    }
  };

  const handleClear = async () => {
    setSearchQuery('');
    setIsSearching(true);
    try {
      await onClear();
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20 pr-10"
              disabled={isSearching || disabled}
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                disabled={isSearching || disabled}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                title="Clear search"
              >
                <X className="h-4 w-4 text-foreground/50 hover:text-foreground" />
              </button>
            )}
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            disabled={!searchQuery.trim() || isSearching || disabled}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
          >
            {isSearching ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="hidden sm:inline">Searching...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </div>
            )}
          </Button>
        </div>
      </form>

      {/* Search Tips */}
      <p className="text-center text-sm text-foreground/50 mt-3">
        Search by title, content, or keywords. Press Enter or click Search to find posts.
      </p>
    </div>
  );
}
