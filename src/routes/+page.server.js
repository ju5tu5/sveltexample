import { createClient } from '$lib/prismicio'

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request })

  const document = await client.getByUID('home', 'home', {
    fetchLinks: ['board.name', 'board.brand', 'board.image', 'board.length'],
  })

  return document.data
}
