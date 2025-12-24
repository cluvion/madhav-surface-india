'use client';

import { useState, useRef } from 'react';
import BlogSearch from './BlogSearch';
import BlogList from './BlogList';

export default function BlogContainer({ initialPosts, initialPagination }) {
  const [isSearching, setIsSearching] = useState(false);
  const [totalCount, setTotalCount] = useState(initialPagination.totalPosts);
  const [currentSearchQuery, setCurrentSearchQuery] = useState(null);
  const blogListRef = useRef();

  const handleSearch = async (searchQuery) => {
    setIsSearching(true);
    try {
      const response = await fetch(
        `/api/blog/posts?search=${encodeURIComponent(searchQuery)}&per_page=12`
      );

      if (!response.ok) throw new Error('Search failed');

      const data = await response.json();

      // Update the BlogList with search results
      if (blogListRef.current) {
        blogListRef.current.updatePosts(data.posts, data.pagination, searchQuery);
      }

      // Update search state
      setCurrentSearchQuery(searchQuery);
      setTotalCount(data.posts.length); // For search results, show found count
    } catch (error) {
      console.error('Search error:', error);
      // You could add a toast notification here
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearSearch = async () => {
    setIsSearching(true);
    try {
      // First try to fetch fresh posts
      const response = await fetch('/api/blog/posts?per_page=12');

      if (response.ok) {
        const data = await response.json();

        // Reset to fresh posts
        if (blogListRef.current) {
          blogListRef.current.updatePosts(data.posts, data.pagination, null);
        }

        // Reset search state
        setCurrentSearchQuery(null);
        setTotalCount(data.pagination.totalPosts);
      } else {
        throw new Error('Failed to load posts');
      }
    } catch (error) {
      console.error('Clear search error:', error);
      // Fallback to initial posts
      if (blogListRef.current) {
        blogListRef.current.updatePosts(initialPosts, initialPagination, null);
      }
      setCurrentSearchQuery(null);
      setTotalCount(initialPagination.totalPosts);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <BlogSearch
        onSearch={handleSearch}
        onClear={handleClearSearch}
        disabled={isSearching}
      />

      {/* Total Count Display */}
      <div className="text-center py-4 border-b border-border">
        <div className="flex items-center justify-center flex-wrap gap-1">
          {currentSearchQuery ? (
            <>
              <span className="text-foreground/50">Search results for</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                "{currentSearchQuery}"
              </span>
              {/* <span className="text-foreground/50">•</span> */}
              <span className="font-medium text-primary">{totalCount}</span>
              <span className="text-foreground/50">posts found</span>
            </>
          ) : (
            <>
              <span className="text-foreground/50">Discover</span>
              <span className="font-medium text-primary">{totalCount}</span>
              <span className="text-foreground/50">insightful blog posts about quartz surfaces</span>
            </>
          )}
        </div>
      </div>

      {/* Blog Posts List */}
      <BlogList
        ref={blogListRef}
        initialPosts={initialPosts}
        initialPagination={initialPagination}
      />
    </div>
  );
}
