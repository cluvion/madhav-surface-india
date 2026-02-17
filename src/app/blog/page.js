import { getBlogPostsGraphQL } from '@/lib/wordpress-graphql';
import BlogContainer from '@/components/blog/BlogContainer';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - Madhav Surfaces | Quartz Insights & Design Tips',
  description: 'Discover the latest insights, trends, and expert advice about quartz surfaces, kitchen design, and home improvement from Madhav Surfaces.',
  openGraph: {
    title: 'Blog - Madhav Surfaces',
    description: 'Discover the latest insights, trends, and expert advice about quartz surfaces, kitchen design, and home improvement.',
    type: 'website',
  },
};

export default async function BlogPage() {
  // Fetch initial blog posts using GraphQL (much smaller response size)
  const { posts, pagination } = await getBlogPostsGraphQL(12, null);

  return (
    <div >
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Step7.png"
            alt="Background"
            className="w-full h-full object-cover"
            fill
          />
          {/* Optional overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            className="heading font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white"
          >
            Our Blog
          </h1>
        </div>
      </section>
      {/* Blog Header */}
      {/* <BlogHeader /> */}

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-6 relative py-6 md:py-10" data-light-bg>
        <BlogContainer initialPosts={posts} initialPagination={pagination} />
      </main>
    </div>
  );
}
