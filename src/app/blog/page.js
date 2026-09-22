// Blog listing page — COMMENTED OUT
// This page is temporarily disabled.
// To re-enable, restore the original content of this file from git history.

import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Blog - Madhav Surfaces',
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  notFound();
}

// --- Original code commented out below ---
// import { getBlogPostsGraphQL } from '@/lib/wordpress-graphql';
// import BlogContainer from '@/components/blog/BlogContainer';
// import Image from 'next/image';
//
// export const dynamic = 'force-dynamic';
// export const revalidate = 3600;
//
// export const metadata = {
//   title: 'Blog - Madhav Surfaces | Quartz Insights & Design Tips',
//   description: 'Discover the latest insights, trends, and expert advice about quartz surfaces, kitchen design, and home improvement from Madhav Surfaces.',
//   openGraph: {
//     title: 'Blog - Madhav Surfaces',
//     description: 'Discover the latest insights, trends, and expert advice about quartz surfaces, kitchen design, and home improvement.',
//     type: 'website',
//   },
// };
//
// export default async function BlogPage() {
//   let posts = [];
//   let pagination = {};
//   
//   try {
//     const result = await getBlogPostsGraphQL(12, null);
//     posts = result.posts;
//     pagination = result.pagination;
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//   }
//
//   return (
//     <div>
//       <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/assets/Step7.png"
//             alt="Background"
//             className="w-full h-full object-cover"
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
//           <div className="absolute inset-0 bg-black/80"></div>
//         </div>
//         <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6">
//           <h1 className="heading font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white">
//             Our Blog
//           </h1>
//         </div>
//       </section>
//       <main className="container max-w-7xl mx-auto px-6 relative py-6 md:py-10" data-light-bg>
//         <BlogContainer initialPosts={posts} initialPagination={pagination} />
//       </main>
//     </div>
//   );
// }
