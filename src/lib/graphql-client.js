import { GraphQLClient } from 'graphql-request';

// WordPress GraphQL endpoint
const GRAPHQL_ENDPOINT = 'https://wp.madhavquartz.com/graphql';

// Create GraphQL client with configuration
const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Madhav-Surfaces-NextJS/1.0',
  },
  // Enable request/response logging in development
  ...(process.env.NODE_ENV === 'development' && {
    requestMiddleware: (request) => {
      console.log('GraphQL Request:', {
        query: request.query?.slice(0, 100) + '...',
        variables: request.variables,
      });
      return request;
    },
    responseMiddleware: (response) => {
      if (response.errors) {
        console.error('GraphQL Errors:', response.errors);
      }
      return response;
    },
  }),
});

/**
 * Execute GraphQL query with error handling and retries
 * @param {string} query - GraphQL query string
 * @param {Object} variables - Query variables
 * @param {Object} options - Additional options
 * @returns {Promise<Object>} Query result
 */
export async function executeGraphQLQuery(query, variables = {}, options = {}) {
  const { retries = 2, timeout = 10000 } = options;
  
  let lastError;
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Add timeout to the request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      const result = await graphqlClient.request(query, variables, {
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      return result;
      
    } catch (error) {
      lastError = error;
      
      // Log error details
      console.error(`GraphQL Query Attempt ${attempt + 1} Failed:`, {
        error: error.message,
        query: query.slice(0, 100) + '...',
        variables,
      });
      
      // Don't retry on client errors (4xx)
      if (error.response?.status >= 400 && error.response?.status < 500) {
        break;
      }
      
      // Wait before retry (exponential backoff)
      if (attempt < retries) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // All retries failed
  throw new Error(`GraphQL query failed after ${retries + 1} attempts: ${lastError.message}`);
}

/**
 * Health check for GraphQL endpoint
 * @returns {Promise<boolean>} True if endpoint is healthy
 */
export async function checkGraphQLHealth() {
  try {
    const healthQuery = `
      query HealthCheck {
        generalSettings {
          title
        }
      }
    `;
    
    await executeGraphQLQuery(healthQuery, {}, { retries: 0, timeout: 5000 });
    return true;
  } catch (error) {
    console.error('GraphQL Health Check Failed:', error.message);
    return false;
  }
}

export default graphqlClient;
