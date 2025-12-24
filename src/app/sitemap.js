import { products } from '@/constants/index';
import { getAllPostsForSitemapGraphQL } from '@/lib/wordpress-graphql';

export default async function sitemap() {
  const baseUrl = 'https://www.madhavquartz.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    }
  ];

  // Get unique collections
  const collections = [...new Set(products.map(product => product.collection))];

  // Collection pages
  const collectionPages = collections.map(collection => ({
    url: `${baseUrl}/collection/${collection.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Product pages
  const productPages = products.map(product => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Blog posts
  let blogPages = [];
  try {
    const blogPosts = await getAllPostsForSitemapGraphQL();
    blogPages = blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return [
    ...staticPages,
    ...collectionPages,
    ...productPages,
    ...blogPages,
  ];
}
