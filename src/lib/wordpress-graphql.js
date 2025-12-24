import { executeGraphQLQuery } from './graphql-client';
import {
  GET_BLOG_POSTS,
  GET_POST_BY_SLUG,
  GET_ALL_POST_SLUGS,
  GET_POSTS_FOR_SITEMAP,
  SEARCH_POSTS,
  GET_POST_COUNT,
  HEALTH_CHECK
} from './graphql-queries';

/**
 * Fix WordPress media URLs to use correct domain and handle errors
 * @param {string} content - Content with media URLs
 * @returns {string} Content with fixed URLs
 */
function fixContentMediaUrls(content) {
  if (!content) return content;
  
  // Replace all instances of madhavquartz.com with wp.madhavquartz.com in media URLs
  let fixedContent = content.replace(
    /https?:\/\/madhavquartz\.com\/wp-content\//g,
    'https://wp.madhavquartz.com/wp-content/'
  );
  
  // Also ensure HTTPS for all WordPress media URLs
  fixedContent = fixedContent.replace(
    /http:\/\/wp\.madhavquartz\.com\/wp-content\//g,
    'https://wp.madhavquartz.com/wp-content/'
  );
  
  return fixedContent;
}

/**
 * Get optimized image URL with fallback
 * @param {string} imageUrl - Original image URL
 * @param {number} width - Desired width
 * @param {number} quality - Image quality (1-100)
 * @returns {string} Optimized image URL
 */
function getOptimizedImageUrl(imageUrl, width = 800, quality = 75) {
  if (!imageUrl) return '';
  
  // Fix the URL first
  const fixedUrl = fixContentMediaUrls(imageUrl);
  
  // For WordPress images, try to get a specific size if available
  if (fixedUrl.includes('wp.madhavquartz.com') || fixedUrl.includes('madhavquartz.com')) {
    // WordPress typically has these sizes available
    const sizeMap = {
      150: '150x150',
      300: '300x200', 
      400: '400x400',
      600: '600x400',
      768: '768x512',
      1024: '1024x683',
    };
    
    // Find the closest size
    const availableWidth = Object.keys(sizeMap).find(w => parseInt(w) >= width);
    if (availableWidth && sizeMap[availableWidth]) {
      // Try to replace the original filename with sized version
      const sizedUrl = fixedUrl.replace(
        /(\.[^.]+)$/,
        `-${sizeMap[availableWidth]}$1`
      );
      return sizedUrl;
    }
  }
  
  return fixedUrl;
}

/**
 * Decode HTML entities in text
 * @param {string} text - Text with HTML entities
 * @returns {string} Decoded text
 */
function decodeHtmlEntities(text) {
  if (!text) return text;
  
  // For client-side rendering
  if (typeof window !== 'undefined') {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }
  
  // Fallback for server-side rendering
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '…')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
}

/**
 * Format GraphQL post data for frontend use
 * @param {Object} post - Raw GraphQL post object
 * @returns {Object} Formatted post object
 */
function formatPostGraphQL(post) {
  if (!post) return null;

  return {
    id: post.id,
    title: decodeHtmlEntities(post.title),
    content: fixContentMediaUrls(post.content || ''),
    excerpt: fixContentMediaUrls(post.excerpt || ''),
    slug: post.slug,
    date: post.date,
    modified: post.modified,
    featuredImage: post.featuredImage?.node?.sourceUrl 
      ? fixContentMediaUrls(post.featuredImage.node.sourceUrl)
      : null,
    author: post.author?.node?.name || 'Madhav Surfaces',
    categories: post.categories?.nodes || [],
    tags: post.tags?.nodes || [],
    status: post.status || 'publish',
    // SEO data if available
    seo: post.seo ? {
      title: post.seo.title,
      metaDesc: post.seo.metaDesc,
      opengraphTitle: post.seo.opengraphTitle,
      opengraphDescription: post.seo.opengraphDescription,
      opengraphImage: post.seo.opengraphImage?.sourceUrl,
      twitterTitle: post.seo.twitterTitle,
      twitterDescription: post.seo.twitterDescription,
      twitterImage: post.seo.twitterImage?.sourceUrl,
    } : null,
  };
}

/**
 * Get total post count for pagination (simplified approach)
 * @returns {Promise<number>} Total number of published posts
 */
export async function getTotalPostCount() {
  try {
    // Use a large first value to get approximate total
    const data = await executeGraphQLQuery(GET_BLOG_POSTS, { first: 1000 });
    const posts = data.posts?.nodes || [];
    const pageInfo = data.posts?.pageInfo || {};
    
    // If we got less than 1000 and no next page, this is the total
    if (posts.length < 1000 && !pageInfo.hasNextPage) {
      return posts.length;
    }
    
    // Otherwise, estimate based on what we know (fallback)
    return posts.length + (pageInfo.hasNextPage ? 50 : 0); // Conservative estimate
  } catch (error) {
    console.error('Error fetching post count:', error);
    return 0;
  }
}

/**
 * Fetch blog posts using GraphQL (replaces getBlogPostsMinimal)
 * @param {number} first - Number of posts to fetch (default: 12, max: 50)
 * @param {string} after - Cursor for pagination
 * @param {string} search - Search query (optional)
 * @param {boolean} includeTotalCount - Whether to fetch total count (slower but accurate)
 * @returns {Promise<Object>} Posts data with pagination info
 */
export async function getBlogPostsGraphQL(first = 12, after = null, search = null, includeTotalCount = true) {
  try {
    // Limit first to prevent huge responses
    const limitedFirst = Math.min(first, 50);
    
    // Use search query if search term provided
    const query = search ? SEARCH_POSTS : GET_BLOG_POSTS;
    
    const data = await executeGraphQLQuery(query, {
      first: limitedFirst,
      after,
      search,
    });

    const posts = data.posts?.nodes || [];
    const pageInfo = data.posts?.pageInfo || {};

    // Get total count if requested (for accurate pagination)
    let totalPosts = posts.length;
    if (includeTotalCount && !after) { // Only fetch on first load
      totalPosts = await getTotalPostCount();
    }

    return {
      posts: posts.map(formatPostGraphQL),
      pagination: {
        hasNextPage: pageInfo.hasNextPage || false,
        hasPrevPage: pageInfo.hasPreviousPage || false,
        startCursor: pageInfo.startCursor,
        endCursor: pageInfo.endCursor,
        // For compatibility with existing components
        currentPage: 1, // GraphQL uses cursor-based pagination
        totalPages: 1,   // Not available in cursor-based pagination
        totalPosts: totalPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts with GraphQL:', error);
    return {
      posts: [],
      pagination: {
        hasNextPage: false,
        hasPrevPage: false,
        startCursor: null,
        endCursor: null,
        currentPage: 1,
        totalPages: 1,
        totalPosts: 0,
      },
    };
  }
}

/**
 * Fetch a single blog post by slug using GraphQL
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Post data or null if not found
 */
export async function getBlogPostBySlugGraphQL(slug) {
  try {
    const data = await executeGraphQLQuery(GET_POST_BY_SLUG, { slug });
    
    if (!data.post) {
      return null;
    }

    return formatPostGraphQL(data.post);
  } catch (error) {
    console.error('Error fetching blog post by slug with GraphQL:', error);
    return null;
  }
}

/**
 * Get all post slugs for static generation using GraphQL
 * @param {number} first - Number of posts to fetch (default: 1000)
 * @returns {Promise<Array>} Array of post slugs
 */
export async function getAllPostSlugsGraphQL(first = 1000) {
  try {
    const data = await executeGraphQLQuery(GET_ALL_POST_SLUGS, { first });
    
    const posts = data.posts?.nodes || [];
    return posts.map(post => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs with GraphQL:', error);
    return [];
  }
}

/**
 * Get all posts for sitemap generation using GraphQL
 * @param {number} first - Number of posts to fetch (default: 1000)
 * @returns {Promise<Array>} Array of posts with slug, modified, and date
 */
export async function getAllPostsForSitemapGraphQL(first = 1000) {
  try {
    const data = await executeGraphQLQuery(GET_POSTS_FOR_SITEMAP, { first });
    
    const posts = data.posts?.nodes || [];
    return posts.map(post => ({
      slug: post.slug,
      modified: post.modified,
      date: post.date,
    }));
  } catch (error) {
    console.error('Error fetching posts for sitemap with GraphQL:', error);
    return [];
  }
}

/**
 * Search blog posts using GraphQL
 * @param {string} searchQuery - Search query
 * @param {number} first - Number of posts to fetch
 * @param {string} after - Cursor for pagination
 * @returns {Promise<Object>} Search results with pagination
 */
export async function searchBlogPostsGraphQL(searchQuery, first = 12, after = null) {
  try {
    const data = await executeGraphQLQuery(SEARCH_POSTS, {
      search: searchQuery,
      first,
      after,
    });

    const posts = data.posts?.nodes || [];
    const pageInfo = data.posts?.pageInfo || {};

    return {
      posts: posts.map(formatPostGraphQL),
      pagination: {
        hasNextPage: pageInfo.hasNextPage || false,
        hasPrevPage: pageInfo.hasPreviousPage || false,
        startCursor: pageInfo.startCursor,
        endCursor: pageInfo.endCursor,
      },
      query: searchQuery,
    };
  } catch (error) {
    console.error('Error searching blog posts with GraphQL:', error);
    return {
      posts: [],
      pagination: {
        hasNextPage: false,
        hasPrevPage: false,
        startCursor: null,
        endCursor: null,
      },
      query: searchQuery,
    };
  }
}

/**
 * Check GraphQL health
 * @returns {Promise<boolean>} True if healthy
 */
export async function checkWordPressGraphQLHealth() {
  try {
    await executeGraphQLQuery(HEALTH_CHECK, {}, { retries: 0, timeout: 5000 });
    return true;
  } catch (error) {
    console.error('WordPress GraphQL health check failed:', error);
    return false;
  }
}

/**
 * Clean and truncate excerpt text
 * @param {string} excerpt - Raw excerpt HTML
 * @param {number} maxLength - Maximum length (default: 150)
 * @returns {string} Clean excerpt text
 */
export function cleanExcerpt(excerpt, maxLength = 150) {
  if (!excerpt) return '';
  
  // Remove HTML tags
  const cleanText = excerpt.replace(/<[^>]*>/g, '');
  
  // Remove common WordPress excerpt artifacts
  const cleanedText = cleanText
    .replace(/\[&hellip;\]/g, '...')
    .replace(/&hellip;/g, '...')
    .replace(/\[…\]/g, '...')
    .trim();

  // Truncate if needed
  if (cleanedText.length <= maxLength) {
    return cleanedText;
  }

  // Find the last space before maxLength to avoid cutting words
  const truncated = cleanedText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

/**
 * Calculate reading time for content
 * @param {string} content - HTML content
 * @returns {number} Estimated reading time in minutes
 */
export function calculateReadingTime(content) {
  if (!content) return 0;
  
  // Remove HTML tags and count words
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  
  // Average reading speed is 200-250 words per minute
  const readingTime = Math.ceil(wordCount / 225);
  
  return readingTime;
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Export utility functions
export { getOptimizedImageUrl, fixContentMediaUrls, decodeHtmlEntities };
