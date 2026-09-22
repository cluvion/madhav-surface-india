// Blog sitemap — COMMENTED OUT
// This sitemap is temporarily disabled.

export default function sitemap() {
  return [];
}

// --- Original code commented out below ---
// import { getAllPostsForSitemapGraphQL } from '@/lib/wordpress-graphql';
//
// export const dynamic = 'force-dynamic';
// export const revalidate = 3600;
//
// export default async function sitemap() {
//   try {
//     const posts = await getAllPostsForSitemapGraphQL(1000);
//
//     const blogPostEntries = posts.map((post) => ({
//       url: `https://madhavmarbles.com/blog/${post.slug}`,
//       lastModified: new Date(post.modified),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     }));
//
//     const blogIndexEntry = {
//       url: 'https://madhavmarbles.com/blog',
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 0.9,
//     };
//
//     return [blogIndexEntry, ...blogPostEntries];
//   } catch (error) {
//     console.error('Error generating blog sitemap:', error);
//
//     return [
//       {
//         url: 'https://madhavmarbles.com/blog',
//         lastModified: new Date(),
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//     ];
//   }
// }
