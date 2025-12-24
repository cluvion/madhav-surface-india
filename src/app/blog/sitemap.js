import { getAllPostsForSitemapGraphQL } from '@/lib/wordpress-graphql';

/**
 * Generate sitemap for blog posts using GraphQL
 * This creates a dynamic sitemap that includes all published blog posts
 */
export default async function sitemap() {
  try {
    // Fetch all posts for sitemap using GraphQL (much more efficient than REST)
    const posts = await getAllPostsForSitemapGraphQL(1000);

    // Generate sitemap entries for each blog post
    const blogPostEntries = posts.map((post) => ({
      url: `https://madhavquartz.com/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Add the main blog page
    const blogIndexEntry = {
      url: 'https://madhavquartz.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    };

    return [blogIndexEntry, ...blogPostEntries];
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    
    // Return at least the blog index page if posts fail to load
    return [
      {
        url: 'https://madhavquartz.com/blog',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
    ];
  }
}
