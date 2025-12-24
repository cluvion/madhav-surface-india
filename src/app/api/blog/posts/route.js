import { getBlogPostsGraphQL } from '@/lib/wordpress-graphql';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const after = searchParams.get('after');
    const perPage = parseInt(searchParams.get('per_page') || '12', 10);
    const search = searchParams.get('search');

    // Fetch posts using GraphQL with optional search
    const { posts, pagination } = await getBlogPostsGraphQL(
      perPage, 
      after, 
      search, 
      !after // Only include total count on first load
    );

    return NextResponse.json(
      { posts, pagination },
      {
        headers: {
          'Cache-Control': search 
            ? 'public, s-maxage=300, stale-while-revalidate=3600' // Shorter cache for search
            : 'public, s-maxage=3600, stale-while-revalidate=86400', // Longer cache for regular posts
        },
      }
    );
  } catch (error) {
    console.error('Error in blog posts API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
