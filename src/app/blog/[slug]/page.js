import { getBlogPostBySlugGraphQL, getAllPostSlugsGraphQL } from '@/lib/wordpress-graphql';
import BlogPost from '@/components/blog/BlogPost';
import { notFound } from 'next/navigation';
import { HeroHeader } from '@/components/header';
import { HomeIcon } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Generate static params for all blog posts using GraphQL
export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugsGraphQL(1000); // Get up to 1000 post slugs

    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params with GraphQL:', error);
    return [];
  }
}

// Generate metadata for each blog post using GraphQL
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlugGraphQL(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Madhav Surfaces',
    };
  }

  return {
    title: `${post.title} - Madhav Surfaces Blog`,
    description: post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160) : post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160) : post.title,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author],
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160) : post.title,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlugGraphQL(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <HeroHeader forceScrolled={true} />
      <div className="min-h-screen mt-20 md:mt-16" data-light-bg>
        <div className="absolute md:top-25 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-2 md:py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <HomeIcon size={16} aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <main className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <BlogPost post={post} />
        </main>
      </div>
    </div>
  );
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour
