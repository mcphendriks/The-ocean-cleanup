import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  
  let query = gql`
  query Assets {
    dashboard(where: {id: "cln32p50anrma0bw03q8fsa54"}) {
      cirkelDiagramContinents {
        cirkelDiagramNumberOcean
      }
      cirkelDiagramRiverOcean {
        cirkelDiagramNumberOcean
      }
      infotext {
        infotext {
          html
          text
        }
        id
      }
      trashRemoved {
        trashRemovedKg
        trashRemovedText {
          html
          text
        }
      }
      title
    }
  }
  
  `
  return await hygraph.request(query)
}