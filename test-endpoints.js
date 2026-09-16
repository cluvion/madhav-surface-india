async function testEndpoint(url) {
  try {
    const res = await fetch(url);
    console.log(`\nTesting ${url}`);
    console.log('Status:', res.status);
    const contentType = res.headers.get('content-type');
    console.log('Content-Type:', contentType);
    if (res.status === 200 && contentType?.includes('application/json')) {
        const json = await res.json();
        console.log('Data sample:', JSON.stringify(json).substring(0, 100));
    }
  } catch (err) {
    console.error('Error for', url, err.message);
  }
}

async function run() {
  await testEndpoint('https://www.madhavmarbles.com/graphql');
  await testEndpoint('https://www.madhavmarbles.com/wp-json/wp/v2/posts');
  await testEndpoint('https://madhavmarbles.com/graphql');
  await testEndpoint('https://madhavmarbles.com/wp-json/wp/v2/posts');
}

run();
