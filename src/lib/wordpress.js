const WORDPRESS_API_URL = 'https://wp.madhavquartz.com/wp-json/wp/v2';

/**
 * Fetch blog posts from WordPress (optimized for listing)
 * @param {number} perPage - Number of posts per page (default: 10, max: 20)
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Posts data with pagination info
 */
export async function getBlogPosts(perPage = 10, page = 1) {
  try {
    // Limit per_page to prevent huge responses
    const limitedPerPage = Math.min(perPage, 20);
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=${limitedPerPage}&page=${page}&_embed`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts = await response.json();
    const totalPosts = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');

    return {
      posts: posts.map(formatPost),
      pagination: {
        currentPage: page,
        totalPages: parseInt(totalPages) || 1,
        totalPosts: parseInt(totalPosts) || 0,
        hasNextPage: page < parseInt(totalPages),
        hasPrevPage: page > 1,
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalPosts: 0,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };
  }
}

/**
 * Fetch blog posts with minimal data (for listing pages)
 * @param {number} perPage - Number of posts per page (default: 12, max: 24)
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Posts data with pagination info
 */
export async function getBlogPostsMinimal(perPage = 12, page = 1) {
  try {
    // Limit per_page to prevent huge responses
    const limitedPerPage = Math.min(perPage, 24);
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=${limitedPerPage}&page=${page}&_fields=id,title,excerpt,slug,date,modified,featured_media,author,categories,tags,link`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts = await response.json();
    const totalPosts = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');

    // For minimal posts, we need to fetch featured images separately if needed
    const postsWithImages = await Promise.all(
      posts.map(async (post) => {
        let featuredImage = null;
        if (post.featured_media) {
          try {
            const mediaResponse = await fetch(
              `${WORDPRESS_API_URL}/media/${post.featured_media}?_fields=source_url,alt_text`,
              { next: { revalidate: 3600 } }
            );
            if (mediaResponse.ok) {
              const media = await mediaResponse.json();
              featuredImage = fixContentMediaUrls(media.source_url);
            }
          } catch (error) {
            console.warn('Failed to fetch featured image:', error);
          }
        }

        return {
          id: post.id,
          title: decodeHtmlEntities(post.title?.rendered || ''),
          excerpt: fixContentMediaUrls(post.excerpt?.rendered || ''),
          slug: post.slug,
          date: post.date,
          modified: post.modified,
          featuredImage,
          author: 'Madhav Surfaces',
          categories: [],
          tags: [],
          link: post.link,
          status: 'publish',
        };
      })
    );

    return {
      posts: postsWithImages,
      pagination: {
        currentPage: page,
        totalPages: parseInt(totalPages) || 1,
        totalPosts: parseInt(totalPosts) || 0,
        hasNextPage: page < parseInt(totalPages),
        hasPrevPage: page > 1,
      },
    };
  } catch (error) {
    console.error('Error fetching minimal blog posts:', error);
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalPosts: 0,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };
  }
}

/**
 * Fetch a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Post data or null if not found
 */
export async function getBlogPostBySlug(slug) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    const posts = await response.json();
    
    if (posts.length === 0) {
      return null;
    }

    return formatPost(posts[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

/**
 * Fix WordPress media URL to use correct domain
 * @param {string} url - Original WordPress media URL
 * @returns {string} Fixed URL with correct domain
 */
function fixMediaUrl(url) {
  if (!url) return null;
  
  // Replace madhavquartz.com with wp.madhavquartz.com for media URLs
  if (url.includes('madhavquartz.com/wp-content/')) {
    return url.replace('madhavquartz.com', 'wp.madhavquartz.com');
  }
  
  return url;
}

/**
 * Get featured media URL from WordPress post
 * @param {Object} post - WordPress post object
 * @returns {string|null} Featured image URL or null
 */
function getFeaturedImageUrl(post) {
  if (post._embedded && post._embedded['wp:featuredmedia']) {
    const media = post._embedded['wp:featuredmedia'][0];
    const originalUrl = media?.source_url || null;
    return fixMediaUrl(originalUrl);
  }
  return null;
}

/**
 * Fix all media URLs in HTML content
 * @param {string} content - HTML content with media URLs
 * @returns {string} Content with fixed media URLs
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
  
  // Use browser's built-in HTML entity decoding
  if (typeof document !== 'undefined') {
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
 * Format WordPress post data for frontend use
 * @param {Object} post - Raw WordPress post object
 * @returns {Object} Formatted post object
 */
function formatPost(post) {
  return {
    id: post.id,
    title: decodeHtmlEntities(post.title.rendered),
    content: fixContentMediaUrls(post.content.rendered),
    excerpt: fixContentMediaUrls(post.excerpt.rendered),
    slug: post.slug,
    date: post.date,
    modified: post.modified,
    featuredImage: getFeaturedImageUrl(post),
    author: post._embedded?.author?.[0]?.name || 'Madhav Surfaces',
    categories: post._embedded?.['wp:term']?.[0] || [],
    tags: post._embedded?.['wp:term']?.[1] || [],
    link: post.link,
    status: post.status,
  };
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

  return cleanedText.substring(0, maxLength).trim() + '...';
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate reading time estimate
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

// Export the optimized image function
export { getOptimizedImageUrl };
