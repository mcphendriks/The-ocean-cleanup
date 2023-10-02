import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query Quotes {
      quotes(first: 10) {
        author
        text
      }
    }
  `

  return await hygraph.request(query)
}
