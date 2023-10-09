
export async function handle({ event, resolve }) {
	if(event.request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Origin': cors,
            'Access-Control-Allow-Headers': '*',
          }
        })
      }
  
    const response = await resolve(event)
    if (event.url.pathname.startsWith('/api')) {
      response.headers.append('Access-Control-Allow-Origin', `*`)
    }
    return response
}