const endpoint = 'https://www.madhavmarbles.com/graphql';

async function test() {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: '{ posts(first: 1) { nodes { title } } }'
      })
    });
    
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('Response:', text);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
