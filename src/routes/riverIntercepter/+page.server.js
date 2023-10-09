import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'
import { json } from '@sveltejs/kit'

export async function load() {
  
  let query = gql`
  query Assets {
    dashboard(where: {id: "cln32p50anrma0bw03q8fsa54"}) {
      infotext {
        infotext {
          html
          text
        }
        id
      }
      trashRemoved {
        trashRemovedText {
          html
          text
        }
      }
      title
      river {
        slug
        riverArea {
          text
        }
        riverImage {
          url
        }
      }
    }
  }  
  `
  const dataHygraph = await hygraph.request(query)
  
  const grrrData = await fetch("https://fdnd-toc-api.netlify.app/river")
        const dataApi = await grrrData.json()
  return {dataHygraph, dataApi}
}

