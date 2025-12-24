/**
 * GraphQL Queries for WordPress Blog
 * Optimized for performance and minimal data transfer
 */

// Query for blog listing with minimal data (replaces REST API with 9.7MB response)
export const GET_BLOG_POSTS = `
  query GetBlogPosts($first: Int!, $after: String, $search: String) {
    posts(
      first: $first, 
      after: $after, 
      where: {
        status: PUBLISH,
        search: $search
      }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        id
        slug
        title
        excerpt
        date
        modified
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;

// Query for single blog post with full content
export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      date
      modified
      status
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// Query for generating static params (only slugs needed)
export const GET_ALL_POST_SLUGS = `
  query GetAllPostSlugs($first: Int!) {
    posts(first: $first, where: {status: PUBLISH}) {
      nodes {
        slug
      }
    }
  }
`;

// Query for sitemap generation
export const GET_POSTS_FOR_SITEMAP = `
  query GetPostsForSitemap($first: Int!) {
    posts(first: $first, where: {status: PUBLISH}) {
      nodes {
        slug
        modified
        date
      }
    }
  }
`;

// Query for search functionality
export const SEARCH_POSTS = `
  query SearchPosts($search: String!, $first: Int!, $after: String) {
    posts(
      first: $first,
      after: $after,
      where: {
        status: PUBLISH,
        search: $search
      }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        id
        slug
        title
        excerpt
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            id
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// Query for getting post count (for pagination)
export const GET_POST_COUNT = `
  query GetPostCount {
    posts(where: {status: PUBLISH}) {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`;

// Query for getting categories
export const GET_CATEGORIES = `
  query GetCategories($first: Int!) {
    categories(first: $first, where: {hideEmpty: true}) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

// Query for getting tags
export const GET_TAGS = `
  query GetTags($first: Int!) {
    tags(first: $first, where: {hideEmpty: true}) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

// Query for related posts (based on categories)
export const GET_RELATED_POSTS = `
  query GetRelatedPosts($categoryIds: [ID!]!, $excludeId: ID!, $first: Int!) {
    posts(
      first: $first,
      where: {
        status: PUBLISH,
        categoryIn: $categoryIds,
        notIn: [$excludeId]
      }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// Health check query
export const HEALTH_CHECK = `
  query HealthCheck {
    generalSettings {
      title
      description
      url
    }
  }
`;
