// Blog posts API — COMMENTED OUT
// This API route is temporarily disabled.

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { error: 'Blog is temporarily disabled' },
    { status: 404 }
  );
}

// --- Original code commented out below ---
// import { getBlogPostsGraphQL } from '@/lib/wordpress-graphql';
// import { NextResponse } from 'next/server';
//
// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const after = searchParams.get('after');
//     const perPage = parseInt(searchParams.get('per_page') || '12', 10);
//     const search = searchParams.get('search');
//
//     const { posts, pagination } = await getBlogPostsGraphQL(
//       perPage, 
//       after, 
//       search, 
//       !after
//     );
//
//     return NextResponse.json(
//       { posts, pagination },
//       {
//         headers: {
//           'Cache-Control': search 
//             ? 'public, s-maxage=300, stale-while-revalidate=3600'
//             : 'public, s-maxage=3600, stale-while-revalidate=86400',
//         },
//       }
//     );
//   } catch (error) {
//     console.error('Error in blog posts API:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch blog posts' },
//       { status: 500 }
//     );
//   }
// }
