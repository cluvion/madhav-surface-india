'use client';

import { useState, useImperativeHandle, forwardRef } from 'react';
import BlogCard from './BlogCard';

const BlogList = forwardRef(function BlogList({ initialPosts, initialPagination, searchQuery = null }, ref) {
  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState(searchQuery);

  const loadMorePosts = async () => {
    if (!pagination.hasNextPage || loading) return;

    setLoading(true);
    try {
      // Use cursor-based pagination with GraphQL
      const searchParam = currentSearchQuery ? `&search=${encodeURIComponent(currentSearchQuery)}` : '';
      const response = await fetch(
        `/api/blog/posts?after=${pagination.endCursor}&per_page=12${searchParam}`
      );

      if (!response.ok) throw new Error('Failed to fetch posts');

      const data = await response.json();

      setPosts(prev => [...prev, ...data.posts]);
      setPagination(prevPagination => ({
        ...data.pagination,
        // Keep the original total count for accurate remaining count
        totalPosts: prevPagination.totalPosts
      }));
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update posts when search results change
  const updatePosts = (newPosts, newPagination, searchQuery = null) => {
    setPosts(newPosts);
    setPagination(newPagination);
    setCurrentSearchQuery(searchQuery);
  };

  // Expose updatePosts function to parent component
  useImperativeHandle(ref, () => ({
    updatePosts
  }));

  return (
    <div className="space-y-8">
      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More Button */}
      {pagination.hasNextPage && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMorePosts}
            disabled={loading}
            className={`px-8 py-3 border-2 border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
            }`}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              'Load More Posts'
            )}
          </button>
        </div>
      )}

      {/* No More Posts Message */}
      {!pagination.hasNextPage && posts.length > 0 && (
        <div className="text-center text-foreground/50">
          <p>You've reached the end of our blog posts!</p>
        </div>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">No blog posts found</h3>
          <p className="text-foreground/50">Check back later for new content!</p>
        </div>
      )}
    </div>
  );
});

export default BlogList;
